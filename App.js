import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, Button, Linking, ScrollView} from 'react-native';
const basreng = 'https://www.figma.com/file/N7Y4y7YxH0BZKrTRCkvu76/Redesain-KK5?type=design&node-id=0%3A1&mode=design&t=WFUOkdAZgyXX5ENf-1'; 
const uiapk = 'https://www.figma.com/file/pMu02hBiQsZxf7WEzdDHg8/Prototype?type=design&node-id=0%3A1&mode=design&t=WaD2pI01encGfwBl-1';

const App = () => {
  return (
    <ScrollView style={{backgroundColor: "#CDFAD5"}} >

    <View style={{backgroundColor: "none",alignItems: 'center'}}>

    <Image style={{marginTop: 40, width: 150, height: 150, alignItems: "center"}} source={require('./assets/fotozeni.png')} />

    <Text style={{fontWeight: 'bold',fontSize: 20, }}>  'Abdullah Zaini </Text>
    <Text style={{marginBottom: 10,textAlign: 'center', fontWeight: 'lightbold',fontSize: 15,width: 250}}>  
    Saya berasal dari SMK Telkom Purwokerto dan saya sekarang kelas 12 RPL 1 dan umur saya 18 tahun
     </Text>

     <Button style={{width:200}} title="Kontak Saya " color= "darkcyan" onPress={() =>Linking.openURL(xuru)}/>
     <Text style={{marginBottom: 10,marginTop: 10,fontWeight: 'bold',fontSize: 20,}}>  Project Saya </Text>
     <Text style={{marginBottom: 10,textAlign: 'center', fontWeight:'bold',fontSize: 15,width: 250}}>  
     Desain sebuah kemasan
     </Text>
     <Image style={{ width: 200, height: 200, alignItems: "center"}} source={require('./assets/Basreng.png')} />
     <View style={{marginBottom:15,width: 100}}>
     <Button style={{width:200}} title=" Info " color= "darkred" onPress={() =>Linking.openURL(basreng)}/>
     </View>

     <Text style={{marginBottom: 10,textAlign: 'center', fontWeight:'bold',fontSize: 15,width: 250}}>  
     Desain sebuah UI aplkasi
     </Text>
     <Image style={{marginBottom: 10, width: 250, height: 170, alignItems: "center"}} source={require('./assets/uiapk.png')} />
     <View style={{marginBottom: 10,width: 100}}>
     <Button style={{width:200}} title=" Info " color= "darkred" onPress={() =>Linking.openURL(uiapk)}/>
     </View>
    </View>
    </ScrollView>
  );
};

export default App;