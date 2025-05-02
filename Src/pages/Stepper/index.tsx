import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Stepper = ({route, navigation}) => {
  const {exercises} = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sets, setSets] = useState(3);

  const current = exercises[currentIndex];

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSets(3);
    } else {
      navigation.goBack(); // atau navigate ke halaman selanjutnya
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      </TouchableOpacity>

      <Text style={styles.counter}>{`${currentIndex + 1}/${
        exercises.length
      }`}</Text>

      <Image source={current.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{current.title}</Text>

      <View style={styles.setControl}>
        <TouchableOpacity onPress={() => setSets(sets > 1 ? sets - 1 : 1)}>
          <Text style={styles.setButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.setNumber}>{sets}</Text>

        <TouchableOpacity onPress={() => setSets(sets + 1)}>
          <Text style={styles.setButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.reps}>10 reps</Text>

      <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  back: {position: 'absolute', top: 20, left: 20, fontSize: 30},
  counter: {position: 'absolute', top: 20, right: 20, fontSize: 18},
  image: {width: 200, height: 200, marginBottom: 20},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  setControl: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  setButton: {fontSize: 30, paddingHorizontal: 20},
  setNumber: {fontSize: 24, marginHorizontal: 20},
  reps: {fontSize: 16, marginBottom: 30},
  continueButton: {
    backgroundColor: '#FF6C44',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  continueText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
