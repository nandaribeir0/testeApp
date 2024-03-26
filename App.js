import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const [altura, setAltura] = React.useState('');
  const [base, setBase] = React.useState('');


  const area = (parseFloat(altura) * parseFloat(base)) / 2;



  return (
    <View style={styles.container}>
      <Text style={styles.field}>Altura:</Text>
      <TextInput style={styles.caixaTexto}/>
      <TextInput keyboardType='numeric'/>

      <Text style={styles.field}>Base:</Text>
      <TextInput style={styles.caixaTexto}/>
      <TextInput keyboardType='numeric'/>

      <Text style={styles.field}>Área do Triangulo:</Text>
      <Text style={styles.result}>Resultado: {area}</Text>

      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
  field:
  {
    color: '#black',
    margin: '14px',
  },
  result:
  {
    color: '#red',
    width: '30px',
  }
});
