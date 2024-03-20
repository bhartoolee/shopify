import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Info = (props) => {
    return (
        <View style={style.container}>
            <View style={style.img}>
                <Image
                    source={props.image}
                    style={style.image}
                />
            </View>

            <View style={style.wrapper}>
                <Text style={style.description}>{props.text}</Text>
                <Text style={style.answer}>{props.answer}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderRadius: 12,
        marginVertical:10,
        alignItems:'center'
    },
    img: {
        padding: 8,
        borderRadius: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent:'center',
        margin:10
    },
    image: {
        width: 10,
        height: 10,
    },
    text: {
        color: 'gray'
    },
    answer: {
        fontWeight: "bold",
        fontSize: 15,
    }

})

export default Info