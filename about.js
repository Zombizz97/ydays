import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

function AboutScreen() {
    <View style={styles.container}>
      <ImageBackground source={require('./assets/picture/wallpaper.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Présentation</Text>
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default AboutScreen;
