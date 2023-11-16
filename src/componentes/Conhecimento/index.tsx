import { View, Text, TouchableOpacity } from 'react-native'

import { estilos } from './estilos'

export function Conhecimento({ nome, excluir }){
    return(
        <View style={estilos.conteiner}>
            
            <Text style={estilos.descricao}>{ nome }</Text>

            <TouchableOpacity 
            style={estilos.botao}
            onPress={excluir}
            >

                <Text style={estilos.botaoTexto}>-</Text>
            </TouchableOpacity>

        </View>
    )   
}
