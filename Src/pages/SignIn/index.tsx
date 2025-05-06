import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TextInput from '../../Componets/molecules/TextInput';
import Button from '../../Componets/atoms/Button';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {Alert} from 'react-native';
type SignInProps = NativeStackScreenProps<any, 'SignIn'>;

const SignIn = ({navigation}: SignInProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const onSubmit = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('Login berhasil:', user.uid);
      navigation.navigate('StartFitness', {uid: user.uid});
    })
    .catch(error => {
      console.error('Login gagal:', error.message);

      let message = '';
      switch (error.code) {
        case 'auth/invalid-email':
          message = 'Format email tidak valid.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          message = 'Email atau password salah.';
          break;
        default:
          message = 'Terjadi kesalahan. Silakan coba lagi nanti.';
      }

      Alert.alert('Login Gagal', message);
    });
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.pageContainer}>
        <Text style={styles.title}>Sign in</Text>

        <View style={styles.contentContainer}>
          <TextInput
            label="Email"
            placeholder="Type your email"
            style={styles.input}
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />

          <Button label="Log in" onPress={onSubmit} />

          {/* Garis pemisah dan tombol Google login */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.loginWithText}>Log in with</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require('../../assets/icon/LogoGoogle.png')}
              style={styles.googleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.normalText}>No account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FFF'},
  scrollContainer: {flexGrow: 1, justifyContent: 'center'},
  pageContainer: {flex: 1, paddingHorizontal: 24},
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 60,
    color: '#3A3A3A',
  },
  contentContainer: {marginTop: 40},
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3A3A3A',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C4C4C4',
  },
  loginWithText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#3A3A3A',
  },
  googleButton: {
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    padding: 8,
  },
  googleIcon: {width: 24, height: 24},
  signupContainer: {flexDirection: 'row', justifyContent: 'center'},
  normalText: {fontSize: 14, color: '#3A3A3A'},
  signupText: {fontSize: 14, color: '#FF6C44', fontWeight: '600'},
});
