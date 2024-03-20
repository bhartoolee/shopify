import React from "react";
import { Text,StyleSheet,View,Image } from "react-native";
import back from '../assets/back.png'
import menu from '../assets/menu.png'

const Header = (props) => {
    return(
        <View style={style.container}>
            <Image
            source={back}
            style={style.icon}
            />

            <Text style={style.text}>
                {props.description}
            </Text>

            <Image
            source={menu}
            style={style.icon}
            />
        </View>
    )
}


const style = StyleSheet.create({
        container:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding:8,
            backgroundColor:'#fff'
        },
        icon:{
            width:20,
            height:20,
        },
        text:{
            fontSize:20,
            fontWeight:"bold",
        }
})


export default Header