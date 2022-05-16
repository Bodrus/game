import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { PrimaryButton } from '../componets/ui/PrimaryButton';
import { Colors } from '../constants/colors';

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    backgroundColor: '#3b021f',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 6,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2}
  },
  input: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});

export const StartGameScreen = ({ changeActiveScreen }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (text) => {
    setInputValue(text);
  };

  const handleResetPress = () => {
    setInputValue('')
  };

  const handleConfirmPress = () => {
    const enteredNumber = parseInt(inputValue);
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Namber has to be a number between 1 and 99',
        [{
          text: 'Okay',
          onPress: handleResetPress
        }]
      );
      return;
    }
    changeActiveScreen(enteredNumber);
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2} keyboardType={'number-pad'}
        autoCapitalize={'none'}
        autoCorrect={false}
        onChangeText={onInputChange}
        value={inputValue}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetPress}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirmPress}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
