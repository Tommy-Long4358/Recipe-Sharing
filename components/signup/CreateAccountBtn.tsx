import { StyleSheet, TouchableOpacity, Alert, Text } from "react-native";

const handlePress = () => {
    Alert.alert("Account successfully created!")
}

export default function CreateAccountBtn() {
    return(
        <TouchableOpacity style={styles.button} onPress = {handlePress}>
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: "#DDDDDD",
        padding: 15,
        marginTop: 10,
        width: 200,
        alignItems: "center"
    },

    buttonText: {
        fontWeight: "bold"
    }
})