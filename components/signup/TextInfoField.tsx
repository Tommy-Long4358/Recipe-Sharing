import { View, StyleSheet, TextInput} from 'react-native';

export default function TextInfoField({placeholder}) {
    return (
      <View style = {styles.inputContainer}>
        <TextInput
          style = {styles.input}
          placeholder = {placeholder}
          secureTextEntry = {true}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      padding: 10
    },
  
    input: {
      height: 40,
      width: 500,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      borderRadius: 10
    },
})