import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import React from 'react';
import Logo from '../../components/signup/Logo';
import Name from "../../components/signup/NameField"
import TextInfoField from '@/components/signup/TextInfoField';
import CreateAccountBtn from '@/components/signup/CreateAccountBtn';

export default function SignUpScreen() {
  return (
    <View style = {styles.container}>
      <Logo />
      <Text style = {styles.title}>Sign Up</Text>
      <Name />
      <TextInfoField 
        placeholder = {"Email Address"}
      />
      <TextInfoField 
        placeholder = {"Password"}
      />
      <CreateAccountBtn/>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30
  },
  
  title: {
    fontSize: 30,
    paddingBottom: 20
  }
})