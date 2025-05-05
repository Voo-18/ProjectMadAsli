import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
const Logo = require('../../assets/icon/Fitnes.png');
 // Pastikan path ke logo benar

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 6000); // Splash screen akan tampil selama 3 detik
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Level-UP Fitness</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6C44',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Sesuaikan ukuran logo
    height: 150, // Sesuaikan ukuran logo
    marginBottom: 10, // Jarak antara logo dan teks
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-bold',
    fontWeight: 'bold',
    color: '#000', // Warna teks agar kontras dengan latar belakang
  },
});
