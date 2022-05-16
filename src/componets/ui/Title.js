import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
};
