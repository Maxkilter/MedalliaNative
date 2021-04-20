import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {MyContext} from '../context';
import {Button} from 'react-native-elements';

export const Screen2 = () => {
  const {winner, setScreen} = useContext(MyContext);

  return (
    <View>
      <Text>The winner is</Text>
      <Text>{winner}</Text>
      <Button buttonStyle={{}} title="Go back" onPress={() => setScreen(1)} />
    </View>
  );
};
