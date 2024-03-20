import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const UserInfo = (props) => {
    return (
        <View style={style.container}>
            <Image
                source={props.user}
                style={style.user}
            />

            <Text style={style.username}>{props.fullname}</Text>

            <View style={style.wrapper}>
                <Text style={style.text}>{props.country}</Text>
                <Text style={style.text}> ID:{props.userId}</Text>
            </View>

            <View style={style.inside}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.words}>About Me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttons}>
                    <Text style={style.word}>Review</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 30,
        justifyContent: 'center',
        marginVertical: '1%'
    },
    user: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontWeight: "bold",
        fontSize: 25,
    },
    wrapper: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginBottom: 20,
    },
    text: {
        color: 'gray',
    },
    inside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:30
    },
    button: {
        padding: 16,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        marginRight: 5,
        borderRadius: 16,
    },
    words: {
        fontSize: 16,
        fontWeight: "bold"
    },
    buttons: {
        padding: 16,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 16,
    },
    word: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff'
    },
})

export default UserInfo