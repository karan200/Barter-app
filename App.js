import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert } from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Text style={{
        fontSize:100,
        marginTop:5,
        color:"orange"
        }}>
          Barter App
          </Text>
  </View>

<View>
  <TextInput 
   style={{
    width:300,
    height:35,
    marginLeft:500,
    marginTop:100,
    borderWidth:3,
  }} 
   placeholder = "Exchange" />
  </View>

  <View>
<TouchableOpacity style={{
  marginLeft:650,
  borderWidth:2,
  borderColor:"orange",
  width:50,
  }} onPress={()=> alert('you will get a notification when anyone wants you item')}>
    search
    </TouchableOpacity>
  </View>

 <View>
  <TextInput style={{
    marginTop:100,
    marginLeft:500,
    borderWidth:3,
    width:300,
    height:35,
    }}
    placeholder = "Give Away"/>
</View> 

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'Orange',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
