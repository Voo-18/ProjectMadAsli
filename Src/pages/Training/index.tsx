import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Training = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Tombol kembali */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Choose the workout{'\n'}routine</Text>

        {/* Kartu Push Day */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Pushday')}>
          <Image
            source={require('../../assets/icon/Push_icon.png')} // Ganti sesuai path ikon
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Push Day</Text>
          <Text style={styles.cardDesc}>Latihan dada, bahu & tricep</Text>
        </TouchableOpacity>

        {/* Kartu Pull Day */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Pullday')}>
          <Image
            source={require('../../assets/icon/Pull_icon.png')} // Ganti sesuai path ikon
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Pull Day</Text>
          <Text style={styles.cardDesc}>Latihan punggung & bicep</Text>
        </TouchableOpacity>

        {/* Kartu Leg Day */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Legday')}>
          <Image
            source={require('../../assets/icon/Leg_icon.png')} // Ganti sesuai path ikon
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Leg Day</Text>
          <Text style={styles.cardDesc}>Latihan kaki & score</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Training;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backArrow: {
    fontSize: 35,
    marginBottom: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: '#FF6C44',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 80,
    height: 100,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  cardDesc: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});
