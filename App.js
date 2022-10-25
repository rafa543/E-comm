import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Rotas from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar />
      <Rotas />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     marginBottom: 10
//   },
// });
