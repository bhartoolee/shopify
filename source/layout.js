import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity,Image } from "react-native";
import back from '../assets/back.png'
import parlor from '../assets/parlor.jpeg'

const Layout = (props) => {
    return (
        <ImageBackground
            source={parlor}
            style={style.container}
        >
            <View style={style.holder}>
                <Image
                source={back}
                style={{width:15,height:30}}
                />
            </View>

            <View style={style.wrapper}>
                <Text style={style.item}>{props.item}</Text>
                <Text style={style.price}>${props.price}</Text>

                <Text style={style.description}>Details</Text>

                <Text style={style.detail}>{props.detail}</Text>

                <Text style={style.details}>{props.details}</Text>

                <Text style={style.description}>Color</Text>

                <View style={style.color_con}>
                    <View style={style.color1}></View>
                    <View style={style.color2}></View>
                    <View style={style.color3}></View>
                </View>

                <View style={style.btn}>
                    <TouchableOpacity style={style.buttons}>
                        <Text style={style.word}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    holder:{
        marginBottom:230,
        marginTop:30,
        paddingHorizontal:8,
        backgroundColor:'#fff',
        width:30,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        borderRadius:15
    },
    wrapper:{
        padding:16,
        backgroundColor:'#fff',
        borderTopEndRadius:40,
        borderTopStartRadius:40,
    },
    item:{
        fontWeight:"bold",
        fontSize:25,
    },
    price:{
        color:'orange',
        fontWeight:"bold",
        fontSize:18,
        marginBottom:20,
    },
    description:{
        fontWeight:"bold",
        fontSize:18,
        marginBottom:8
    },
    detail:{
        color:'gray',
        fontSize:15,
        marginBottom:20,
    },
    details:{
        color:'gray',
        fontSize:16,
        marginBottom:15
    },
    color_con:{
        flexDirection:'row',
        marginBottom:20
    },
    color1:{
        backgroundColor:'red',
        padding:12,
        borderRadius:16,
        marginRight:5,
    },
    color2:{
        backgroundColor:'gray',
        padding:12,
        borderRadius:16,
        marginRight:5,
    },
    color3:{
        backgroundColor:'brown',
        padding:12,
        borderRadius:16,
    },
    btn:{
        alignItems:'center',
        justifyContent:'center'
    },
    buttons: {
        padding: 16,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 24,
    },
    word: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff'
    },
})
export default Layout