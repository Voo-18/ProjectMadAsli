import React, {useState, useEffect} from 'react';
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
  const [sets, setSets] = useState(1);
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  const current = exercises[currentIndex];

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSets(1);
      setTimer(60);
      setIsRunning(true);
    } else {
      navigation.goBack();
    }
  };

  const increaseSet = () => {
    const newSet = sets + 1;
    setSets(newSet);
    setTimer(newSet * 60);
    setIsRunning(true);
  };

  const decreaseSet = () => {
    if (sets > 1) {
      const newSet = sets - 1;
      setSets(newSet);
      setTimer(newSet * 60);
      setIsRunning(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counter}>{`${currentIndex + 1}/${
        exercises.length
      }`}</Text>

      <Image source={current.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{current.title}</Text>

      <Text style={styles.timer}>
        {`Time left: ${Math.floor(timer / 60)}:${String(timer % 60).padStart(
          2,
          '0',
        )}`}
      </Text>

      <View style={styles.setControl}>
        <TouchableOpacity onPress={decreaseSet}>
          <Text style={styles.setButton}>-</Text>
        </TouchableOpacity>

        <Text style={styles.setNumber}>{sets}</Text>

        <TouchableOpacity onPress={increaseSet}>
          <Text style={styles.setButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.reps}>{sets * 10} reps</Text>

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
  counter: {position: 'absolute', top: 20, right: 20, fontSize: 18},
  image: {width: 200, height: 200, marginBottom: 20},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 20},
  timer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6C44',
    marginBottom: 20,
  },
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
