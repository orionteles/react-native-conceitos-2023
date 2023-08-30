import React from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { Button } from 'react-native'

const Pagina1 = ({navigation}) => {

    return (
        <>
            <Button title='Página 2' onPress={()=>navigation.navigate('pagina2')} />
            <Button title='Página 3' onPress={()=>navigation.navigate('pagina3')} />

            <Card titulo="Sem conteúdo" />
            <Card titulo="Mobile">
                <Text>React Native</Text>
            </Card>

            <Card titulo="Principal" nome="Orion">
                <Text>Parágrafo 1</Text>
                <Text>Parágrafo 2</Text>
                <Text>Parágrafo 3</Text>
                <Button title='Detalhes' />
            </Card>

            <Card titulo="Flamengo Cheirinho">

            </Card>
        </>
    )
}

export default Pagina1