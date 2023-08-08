import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity, Pressable} from 'react-native';

export default function App() {
  const imagenExterno_react={uri:'https://cdn.ipadizate.com/2022/03/wallpaper-iPhone-SE-3-Negro.jpg?width=1200'}
  const imagenLocal_react=require('./assets/backgrounds/arcoiris.jpg')
  const [count, setCount] = useState(0);
  const handlePress = () => setCount(count + 1);



  return (
    //view = div, siempre tiene que estar adentro de uno 
    //dentro de los componentes van las propiedades
    <SafeAreaView rstyle={styles.container}>
      <View >     
        <StatusBar style="auto" />

        <ImageBackground source={imagenLocal_react} resizeMode="cover" style={styles.backgroundImage}>
        <Text style={styles.Creditos}> Esta es la pagina oficial de                          Shirly y Maia {'\n'}</Text>


        <Text style={styles.Consigna}> Ingrese los datos del egresado... {'\n'}</Text>

        <Text> Nombre: {'\n'}</Text>

        <TextInput

          style={styles.input}   
          placeholder= "Nombre..."
        />
        <Text> Telefono: {'\n'}</Text>

        <TextInput
          style={styles.input}   
          placeholder= "Telefono"
          keyboardType='number-pad'
        />    

        <Text> email: {'\n'}</Text>

        <TextInput
          style={styles.input}   
          placeholder= "email"
          keyboardType='email-address'
        />

        <Text> Clave: {'\n'}</Text>

        <TextInput
          style={styles.input}   
          placeholder= "Clave"
        />  

        <Text style={styles.text}> ¿Cual fue tu fiesta favotita de Bariloche? </Text> 

        <Button     
          title="Bizarra"    
          color='#f194ff'
          onPress={() => Alert.alert('Malisima!')}    
        />
 
       
         <TouchableOpacity onPress={handlePress}>     
            <Text style={styles.Semaforo}> SEMAFORO </Text>     
        </TouchableOpacity>

          <Button      
          title="Disfraces"    
          color='#f194ff'
          onPress={() => Alert.alert('Se ha presionado!')}    
        />

        <Pressable onLongPress={() => Alert.alert('RE RATA!')} >
          <Text style={styles.Semaforo}>ANIMAL</Text> 
        </Pressable>
      
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
    borderWidth: 2
    
  },
  Creditos:{
    marginTop: -500,
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize : 17
  },
  Consigna:{
    color:'#FFFFFF',
    fontSize : 15,
    textAlign: 'center'
  },
  Semaforo:{
    color:'#FFFFFF',
    backgroundColor:'#f194ff',
    fontSize : 15,
    textAlign: 'center'
  }
});
