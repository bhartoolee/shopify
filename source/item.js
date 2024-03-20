import React from "react";
import { Text,Image,StyleSheet,View } from "react-native";
import add from '../assets/plus.png';

const Item = (props) =>{
    return(
        <View style={style.container}>
            <Image
            source={props.item}
            style={style.item}
            />

            <Text style={style.names}>{props.item_name}</Text>

            <View style={style.wrapper}>
                <Text style={style.price}>${props.price}</Text>
                <Image
                source={add}
                style={style.icon}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        borderRadius:16,
        paddingHorizontal:4,
        paddingVertical:12,
        backgroundColor:'#fff',
    },
    item:{
        width:155,
        height:130,
        marginVertical:25,
    },
    names:{
        color:'gray',
        fontSize:12,
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    price:{
        fontWeight:"bold",
        fontSize:20
    },
    icon:{
       width:15,
       height:15,
    }
})

export default Item