import React from 'react';
import {TextInput as RNTextInput, StyleSheet, View, Text} from 'react-native';

const TextInput = ({
  label,
  placeholder,
  secureTextEntry = false,
  style,
  value,
  onChangeText,
}) => {
  return (
    <View style={{marginBottom: 8}}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
        placeholderTextColor="#8D92A3"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#020202',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#020202',
  },
});
