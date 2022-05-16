import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Title } from '../componets/ui/Title';
import { NumberContainer } from '../componets/game/NumberContainer';
import { PrimaryButton } from '../componets/ui/PrimaryButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24
  }
});

const content = 'Opponent\'s Guess';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, setActiveScreen }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === currentGuess) {
      setActiveScreen(2);
    }
  }, [currentGuess])

  const nextGuessHandler = (direction) => () => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' }
      ])
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{content}</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text>Higher or lower?</Text>
      <View>
        <PrimaryButton onPress={nextGuessHandler('lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler('greater')}>+</PrimaryButton>
      </View>
    </View>
  );
};
