import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const imagenExterno_react={uri:'https://cdn.ipadizate.com/2022/03/wallpaper-iPhone-SE-3-Negro.jpg?width=1200'}
  const imagenLocal_react=require('./assets/backgrounds/arcoiris.jpg')

  return (
    //view = div, siempre tiene que estar adentro de uno 
    //dentro de los componentes van las propiedades
    <View style={styles.container}>     

      <ImageBackground source={imagenLocal_react} resizeMode="cover" style={styles.backgroundImage}>
      <Text style={styles.text}>Shirly y Maia </Text>
      </ImageBackground> 

      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    //flex: divide el espacio en la cantidad de flex que ponga
    flex:1,
    justifyContent: 'center'
  },
  text:{
    color: "#FF5733",
    fontSize : 50 ,
    backgroundColor: '#FFFFFF'
   
    


  }
});
