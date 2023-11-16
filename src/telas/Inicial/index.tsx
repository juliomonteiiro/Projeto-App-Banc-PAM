import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { Conhecimento } from '../../componentes/Conhecimento';
import { estilos } from './estilos'


interface tipoCompetencia{
  codigo: string 
  descricao: string
  nivel?: string
}


export function Inicial() {

  const [descricao, setDescricao] = useState<string>('')
  const [competencias, setCompetencias]= useState<tipoCompetencia[]>([])

  function adicionarCompetencia(){

    const novaCompetencia: tipoCompetencia = {
      codigo: String( uuid() ),
      descricao: descricao.trim()
    }


    if(novaCompetencia.descricao === '' ||  typeof(

      competencias.find( competenciaArmazenada => competenciaArmazenada.descricao === novaCompetencia.descricao )

    ) === 'object' ) {


      setDescricao('')
      return Alert.alert('Falha', 'Competencia já armazenada ou não informada')

    }

    setCompetencias([...competencias, novaCompetencia])
    setDescricao('')

    console.log(novaCompetencia)
  }

  function excluirCompetencia(competenciaExcluir: tipoCompetencia){

    Alert.alert('Remoção', `Confirma a exclusão de ${competenciaExcluir.descricao}?`, [
      {
        text: 'Sim', 
        onPress: () => setCompetencias( 
          competencias.filter ( competenciaArmazenada => competenciaArmazenada.codigo !== competenciaExcluir.codigo)
          )
      },
      {
        text: 'Não'
      }
    ])

    
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
        keyExtractor={ item => item.codigo }
        renderItem={ ( { item } ) => (
          <Conhecimento 
          nome={item.descricao}
          excluir={ () => excluirCompetencia(item)}
          />
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

