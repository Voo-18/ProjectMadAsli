import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
// pastikan path-nya sesuai
import Button from '../../Componets/atoms/Button';
import Gap from '../../Componets/atoms/Gap';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photoBased64, setPhotoBased64] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State untuk hover

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhotoBased64(base64);
      setPhoto(source);
    }
  };

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          fullName,
          email,
          photo: photoBased64,
        });
        showMessage({
          message: 'Registration successful',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Gap height={30} />
      <Text style={styles.title}>Sign Up</Text>

      <Gap height={10} />

      <Text style={styles.label}>Full Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Email Address :</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password :</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Gap height={24} />

      {/* Tombol Continue dengan efek hover */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          isHovered && styles.continueButtonHover, // Tambahkan gaya hover jika isHovered true
        ]}
        onPress={onSubmit}
        onPressIn={() => setIsHovered(true)} // Hover dimulai
        onPressOut={() => setIsHovered(false)} // Hover selesai
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Gap height={16} />
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6A00',
    textAlign: 'center',
    marginBottom: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    color: '#000',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },
  continueButton: {
    backgroundColor: '#FF6A00',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonHover: {
    backgroundColor: '#FF8C42', // Warna saat hover
  },
  continueText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLink: {
    color: '#FF6A00',
  },
});
