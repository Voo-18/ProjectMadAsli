import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

type ButtonProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const Button = ({label, onPress, style}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed,
        style,
      ]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C44',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#fff', // Warna saat ditekan
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Button;
