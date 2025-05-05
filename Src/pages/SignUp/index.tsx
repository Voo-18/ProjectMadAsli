import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import NullPhoto from '../../assets/icon/Fitnes.png'; // pastikan path-nya sesuai
import Button from '../../Componets/atoms/Button';
import Gap from '../../Componets/atoms/Gap';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';


const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoBased64, setPhotoBased64] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.profileContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={getImage}>
          <Image source={photo} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <Gap height={20} />

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Gap height={24} />
      <Button label="Continue" onPress={onSubmit} />
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8D92A3',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerLink: {
    color: '#FF6A00',
  },
});