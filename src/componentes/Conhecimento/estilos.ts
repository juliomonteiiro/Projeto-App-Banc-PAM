import { StyleSheet } from 'react-native'

export const estilos = StyleSheet.create ({

    conteiner:{
        width: '100%',
        flexDirection: 'row',
        marginBottom:12
      },
      descricao:{
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        color: '#fff',
        borderRadius: 5,
        padding: 16,
        marginRight: 12,
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#ba181b'
      },
      botao:{
        width:56,
        height: 56,
        backgroundColor: '#ba181b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },
      botaoTexto:{
          color: '#fff',
          fontSize: 26,
          textAlign: 'center'
      }

})
