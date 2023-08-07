import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert,TouchableOpacity,Pressable} from 'react-native';

export default function App() {
  const imagenExterno_react={uri:'https://cdn.ipadizate.com/2022/03/wallpaper-iPhone-SE-3-Negro.jpg?width=1200'}
  const imagenLocal_react=require('./assets/backgrounds/arcoiris.jpg')
  const [count, setCount] = useState(0);
  const handlePress = () => setCount(count + 1);



  return (
    //view = div, siempre tiene que estar adentro de uno 
    //dentro de los componentes van las propiedades
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>     
        <StatusBar style="auto" />

        <ImageBackground source={imagenLocal_react} resizeMode="cover" style={styles.backgroundImage}>
        <Text style={styles.Creditos}> Esta es la pagina oficial de                          Shirly y Maia {'\n'}</Text> 
        <Text style={styles.text}> ¿Cual fue tu fiesta favotita de Bariloche? </Text> 

        <Button     
          title="Bizarra"    
          color='#f194ff'
          onPress={() => Alert.alert('Malisima!')}    
        />
 
       
         <TouchableOpacity style={styles.TouchableOpacity} onPress={handlePress}>     
        
            <Text>Semaforo</Text>     
            </TouchableOpacity>

          <Button      
          title="Disfraces"    
          color='#f194ff'
          onPress={() => Alert.alert('Se ha presionado!')}    
        />
      
        <TextInput
          style={styles.input}   
          placeholder= "Otra..."
        />

        </ImageBackground> 

      </View>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage:{
    //flex: divide el espacio en la cantidad de flex que ponga
    flex:1,
    justifyContent: 'center'
  },
  text:{
    color: "#FF5733",
    fontSize : 20,
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
    
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 2,
    
  },
  Creditos:{
    marginTop: -500,
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize : 20
  },
  TouchableOpacity:{
    color:'#f194ff'
  
  }
});
