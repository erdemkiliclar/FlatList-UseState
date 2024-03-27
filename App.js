import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OdevFlat } from './src/screens/OdevFlat';

export default function App() {
  return (
    <View style={styles.container}>
      <OdevFlat/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1,
    width:"100%"
  },
});
