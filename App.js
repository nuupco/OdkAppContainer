import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { hello } from './modules/odk-integration';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola!</Text>
      <Text style={{fontSize: 24}}>This is the app that will contain ODK</Text>
      <Text>{hello()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
