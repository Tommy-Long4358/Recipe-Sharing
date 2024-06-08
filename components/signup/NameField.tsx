import { View, StyleSheet, TextInput} from 'react-native';

export default function Name() {
    return (
        <View style = {styles.row}>
          <TextInput  
            placeholder="First Name"
            style = {styles.nameInputBox}
          />
          <TextInput 
            placeholder="Last Name"
            style = {styles.nameInputBox}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20
    },

    nameInputBox: {
        height: 40,
        width: 230,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10
    }
})