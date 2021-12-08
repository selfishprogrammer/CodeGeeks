import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');
export default StyleSheet.create( {
    imgView:{

        flexDirection:'row',
        justifyContent:"center",
        

       

    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:20,
        marginBottom:20
    },
btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
      },
      btnBtn: {
        // Width is set to fix OnePlus device issue, text missing after bold
        width: 100,
        border:2,
        borderColor:'black',
        color:"yellowgreen"
      },
      btnTxt: {
        fontWeight: '700',
      },
})