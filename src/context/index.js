import React, {createContext, useState} from 'react';
import Toast from 'react-native-toast-message';

export const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [screen, setScreen] = useState(1);
  const [players, setPlayers] = useState(['Bob', 'Jack']);
  const [winner, setWinner] = useState('');

  const addPlayer = name => setPlayers(prevState => [...prevState, name]);

  const removePlayer = name =>
    setPlayers(players.filter(player => player !== name));

  const getLooser = () => {
    if (players.length < 2) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry',
        text2: 'You need at least 2 players',
      });
      return;
    }
    setWinner(players[Math.floor(Math.random() * players.length)]);
    setScreen(2);
  };

  const store = {
    screen,
    players,
    addPlayer,
    removePlayer,
    getLooser,
    winner,
    setScreen,
  };
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};
