import * as React from 'react';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/picture/wallpaper.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Bienvenue sur l'application</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('About')}
        />
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

function AboutScreen() {
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./assets/picture/neon.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Vous souhaitez en apprendre plus</Text>
      <StatusBar style="auto" />
    </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   }
        // }}
        >
        <Stack.Screen
          name='Home'
          component={HomeScreen}/>
        <Stack.Screen name='About' component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
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
  navbar: {
    headerStyle: {backgroundColor: '#000000c0'},
    headerTintColor: '#fff'
  }
});

export default App;
