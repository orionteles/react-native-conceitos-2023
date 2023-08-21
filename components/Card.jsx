import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.titulo}>Orion Teles</Text>
                <Text>Isto é um parágrafo.</Text>
                <Text>Isto é um parágrafo.</Text>
            </View>
        </>
    )
}

export default Card

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
  