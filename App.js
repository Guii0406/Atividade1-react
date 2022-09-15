import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Index from './src/sections'
import data from './src/mocks/data';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <Index {...data} />
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({

  container: {
    flex: 1,
  }

})

