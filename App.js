import { StartGameScreen } from './src/screens/StartGameScreen';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './src/screens/GameScreen';
import { Colors } from './src/constants/colors';
import { GameOverScreen } from './src/screens/GameOverScreen';

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  backgroundImage: {
    flex: 1
  },
  imageStyle: {
    opacity: 0.15
  }
});

const backgroundImage = require('./assets/images/background.png');

const screens = {
  0: StartGameScreen,
  1: GameScreen
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [enteredNumber, setEnteredNumber] = useState(null);


  const handleSelectedNumber = (enteredNumber) => {
    setActiveScreen(1);
    setEnteredNumber(enteredNumber)
  };

  let screen = <StartGameScreen changeActiveScreen={handleSelectedNumber} />
  if (activeScreen === 1) {
    screen = <GameScreen userNumber={enteredNumber} setActiveScreen={setActiveScreen}/>
  }

  if (activeScreen === 2) {
    screen = <GameOverScreen />
  }


  return (
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>

  );
};
