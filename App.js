import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './source/profile';
import Shop from './source/shopping';
import Layout from './source/layout';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Profile/>
      {/* <Shop/> */}
      {/* <Layout
      item='Monach armchair'
      price='200'
      detail='The fabric cover makes the armchair look more attractive and beautiful'
      details='Seat cushions filled with high-resillence ployyretthane foam and polyester fiber for greater comfort'
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
  },
});
