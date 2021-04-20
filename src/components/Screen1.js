import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, ListItem, Text} from 'react-native-elements';
import {MyContext} from '../context';

export const Screen1 = () => {
  const {players, addPlayer, removePlayer, getLooser} = useContext(MyContext);

  const renderPlayers = () => {
    return players.map((player, index) => (
      <ListItem
        key={index}
        bottomDivider
        style={styles.playersList}
        onLongPress={() => removePlayer(player)}>
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>
            <Text>{player}</Text>
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ));
  };

  return (
    <>
      <Formik
        initialValues={{player: ''}}
        onSubmit={(values, {resetForm}) => {
          addPlayer(values.player);
          resetForm();
        }}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, 'Must be more than 3 char')
            .max(15, 'Must be less than 15')
            .required('The name is required'),
        })}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View style={styles.input}>
            <Text style={styles.title}>Who pays the bill</Text>
            <Input
              placeholder="Add names here"
              leftIcon={{type: 'antdesign', name: 'adduser'}}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50,
                width: '50%',
              }}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                marginHorizontal: 50,
              }}
              onChangeText={handleChange('player')}
              value={values.player}
              onBlur={handleBlur('player')}
            />
            <Button
              buttonStyle={styles.button}
              title="Add player"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <View>
        {players.length ? (
          <>
            <Text>List of players</Text>
            {renderPlayers()}
            <Button
              buttonStyle={styles.button}
              title="Get the winner"
              onPress={getLooser}
            />
          </>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rapper: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#9f4ee8',
    marginTop: 20,
  },
  playersList: {
    width: '100%',
  },
  title: {
    fontFamily: 'Pacifico-Regular',
  },
});
