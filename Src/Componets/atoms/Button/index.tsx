import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({
  label,
  onPress,
  backgroundColor = '#FF6C44',
  textColor = '#FFFFFF',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      activeOpacity={1} // Hilangkan efek transparansi
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
