import { StyleSheet } from 'react-native'

export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    titulo: {
      backgroundColor: '#00193A',
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 12,
      textAlign:'center'
    },
    subtitulo: {
      backgroundColor: '#00193A',
      color: '#fff',
      fontSize: 18,
      fontWeight: '400',
      paddingBottom: 12,
      textAlign: 'center' 
    },
    adicionarConteiner:{
      width: '100%',
      flexDirection: 'row',
      marginBottom:18,
      marginTop: 18
      
    },
    campo:{
      flex: 1,
      height: 56,
      backgroundColor: '#00193A',
      color: '#fff',
      borderRadius: 5,
      padding: 16,
      marginRight:12,
      fontSize:16,
      borderWidth:2,
      borderColor:'#034780'
    },
    botao:{
      width:56,
      height: 56,
      backgroundColor: '#034780',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaoTexto:{
        color: '#fff',
        fontSize: 26,
        textAlign: 'center'
    },



    listaVazia: {
      color:'#0565B3',
      FonstSize: 16,
      textAlign: 'center'
    }
});
 
