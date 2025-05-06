import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Button from '../../Componets/atoms/Button';

const StartFitness = ({navigation}) => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Ilustrasi pojok kiri atas */}
        <Image
          source={require('../../assets/icon/Logohome.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Teks promosi */}
        <Text style={styles.title}>
          Start Your{'\n'}Fitness Journey{'\n'}Today!
        </Text>

        {/* Tombol Start */}
        <Button
          label="Start Your Daily Routine"
          backgroundColor="#FF6C44"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('Training')}
        />

        {/* Tombol Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartFitness;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center', // <-- ubah dari 'flex-start' ke 'center'
    marginBottom: 60,
  },
  title: {
    fontSize: 31,
    fontWeight: '900',
    color: '#000',
    marginBottom: 40,
    lineHeight: 30,
    textAlign: 'left', // <-- tambahkan ini untuk meratakan teks ke tengah
  },

  backButton: {
    marginTop: 16,
    backgroundColor: '#A0A0B0',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
