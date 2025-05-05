import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, onPress, color = 'white', textColor = 'black'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  }),
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
