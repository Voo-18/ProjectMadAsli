import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const pullExercises = [
  {title: 'Deadlift', image: require('../../assets/Pullday_icon/Pull_6.png')},
  {
    title: 'Lat Pulldawn',
    image: require('../../assets/Pullday_icon/Pull_1.png'),
  },
  {title: 'Bent Over', image: require('../../assets/Pullday_icon/Pull_2.png')},
  {title: 'Bicep Curl', image: require('../../assets/Pullday_icon/Pull_3.png')},
  {title: 'Face Pull', image: require('../../assets/Pullday_icon/Pull_4.png')},
  {title: 'Seated Row', image: require('../../assets/Pullday_icon/Pull_5.png')},
];

const Pullday = ({navigation}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = exercise => {
    const isSelected = selectedItems.some(
      item => item.title === exercise.title,
    );
    if (isSelected) {
      setSelectedItems(prev =>
        prev.filter(item => item.title !== exercise.title),
      );
    } else {
      setSelectedItems(prev => [...prev, exercise]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Pull Day</Text>
      </View>

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {pullExercises.map((item, index) => {
          const isSelected = selectedItems.some(
            selected => selected.title === item.title,
          );
          return (
            <TouchableOpacity
              key={index}
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => toggleSelection(item)}>
              <Image
                source={item.image}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, selectedItems.length === 0 && {opacity: 0.5}]}
        disabled={selectedItems.length === 0}
        onPress={() =>
          navigation.navigate('Stepper', {exercises: selectedItems})
        }>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Pullday;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  backArrow: {
    fontSize: 28,
    color: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  card: {
    width: '47%',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: '#FFDFCC',
    borderWidth: 2,
    borderColor: '#FF6C44',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  button: {
    backgroundColor: '#FF6C44',
    paddingVertical: 14,
    borderRadius: 12,
    margin: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
