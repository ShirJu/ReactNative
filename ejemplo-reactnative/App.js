import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //styles es una variable que declaro abajo
    <View style={styles.container}>
      <Text>Shirly y Maia </Text>
       <Text> </Text>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: lugar que ocupa en la pantalla
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
