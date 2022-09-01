import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, StyleSheet, TouchableOpacity, Button } from "react-native";
import { addUser } from "../../../firebase/client";

export default function CreateUser () {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleValues = (name, value) =>{
    setUser({...user, [name]: value})
  }

  const handleInsertToDatabase = () =>{
    if(user.name.length == 0 || user.email.length == 0 || user.phone.length == 0) {
      console.log('valores vacios')
    }else{
      addUser(user)
        .then(()=>{
          setUser({name:'', email:'',phone:''})
        })
    }
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}> 
        <TextInput style={styles.inputs} 
          placeholder="Name User" 
          onChangeText={(value) => handleValues('name', value)}
          value={user.name}
        />
        <TextInput style={styles.inputs} 
          placeholder="Email User" 
          onChangeText={(value) => handleValues('email', value)} 
          value={user.email}
        />
        <TextInput style={styles.inputs} 
          placeholder="phone User" 
          onChangeText={(value) => handleValues('phone', value)} 
          value={user.phone}
        />
        <TouchableOpacity style={styles.button} onPress={()=>handleInsertToDatabase()} >
          <Text style={styles.texto}>Save User</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 40,
    marginTop: 10
  },
  texto: {
    color: '#fff', 
    textAlign: 'center',
    fontSize: 17
  },
  inputs: {
    backgroundColor: '#fff',
    color: '#555',
    width: '80%',
    borderRadius: 30,
    paddingVertical: 7,
    paddingStart: 20,
    marginTop: 10
  }
})