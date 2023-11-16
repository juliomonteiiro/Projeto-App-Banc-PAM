import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Conhecimento } from '../../componentes/Conhecimento';

import { estilos } from './estilos'

export function Inicial() {

  const [descricao, setDescricao] = useState()
  const [competencias, setCompetencias]= useState([])

  function adicionarCompetencia(){
    setCompetencias([...competencias, descricao])
    setDescricao('')
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Competências</Text>
      <Text style={estilos.subtitulo}>Seus conhecimentos</Text>


      <View style={estilos.adicionarConteiner}>

      <TextInput 
        style={estilos.campo}
        placeholder="Informe a competência"
        placeholderTextColor='#0565B3'
        onChangeText={setDescricao}
        value={descricao}
      />

      <TouchableOpacity 
        style={estilos.botao}
        onPress={adicionarCompetencia}
      > 
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>

      </View>


      <FlatList 
        data={competencias}
        keyExtractor={ item => item }
        renderItem={ ( { item } ) => (
          <Conhecimento nome={item}/>
        )}
        ListEmptyComponent={() => (
          <Text style={estilos.listaVazia} >
            Nenhuma competência armazenada!
          </Text>
        )}
      />

    </View>
  );
}

