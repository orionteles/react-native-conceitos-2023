import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 30 }}>

      <Card />

      <View style={styles.card}>
        <Text style={styles.titulo}>Hello World!!</Text>
        <Text style={styles.paragrafo}>Isto é um parágrafo.</Text>
        <Text>Isto é um parágrafo.</Text>
        <Text style={styles.paragrafo}>Isto é um parágrafo.</Text>
        <StatusBar style="auto" />
      </View>

      <Card></Card>

      <View style={styles.card}>
        <Text style={styles.titulo}>Orion Teles</Text>
        <Text>Isto é um parágrafo.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Orion Teles</Text>
        <Text>Isto é um parágrafo.</Text>
        <Text>Isto é um parágrafo.</Text>
      </View>

      <Card></Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
