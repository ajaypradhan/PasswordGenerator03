import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Shoukd be max of 16 characters')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLenth: number) => {
    //
  };

  const createPassword = (characters: string, passwordLenght: number) => {
    let result = '';
    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
  App;
  App;
}

const styles = StyleSheet.create({});
