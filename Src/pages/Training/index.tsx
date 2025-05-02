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
    fontSize: 30,
    marginBottom: 16,
    color: '#000',
    fontWeight: '600',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
    fontFamily: 'Poppins',
  },
  card: {
    backgroundColor: '#FF6C44',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});
