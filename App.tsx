import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Shoukd be max of 16 characters')
    .required('Length is required'),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );App;
  App;
}

const styles = StyleSheet.create({});
