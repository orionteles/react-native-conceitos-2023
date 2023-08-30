import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'

const Estado = () => {

    const [qtd, setQtd] = useState(0)

    function adicionar(){
        setQtd(qtd+1)
    }

    return (
        <>
            <Button mode="contained"> - </Button>

            <Text>{qtd}</Text>

            <Button mode="contained" onPress={adicionar}> + </Button>
        </>
    )
}

export default Estado