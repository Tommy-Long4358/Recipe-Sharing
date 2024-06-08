import { View, Image, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <View>
    <Image 
      source = {require('../../assets/images/recipify-logo.png')} 
      style = {styles.logo}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 250
  }
})