import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "./header";
import Item from "./item";
import item1 from '../assets/chair1.jpeg';
import item2 from '../assets/chair2.jpeg';
import item3 from '../assets/chair3.jpeg';
import item4 from '../assets/chair4.jpeg';


const Shop = () => {
    return (
        <View style={style.content}>
            <Header
                description='Shopping basket'
            />

            <View style={style.container}>
                <View style={style.wrapper}>
                    <Item
                        item={item1}
                        item_name='Office chair'
                        price='140'
                    />

                    <Item
                        item={item2}
                        item_name='Monarch armchair'
                        price='200'
                    />
                </View>


                <View style={style.wrapper}>
                    <Item
                        item={item3}
                        item_name='Rocking armchair'
                        price='106'
                    />

                    <Item
                        item={item4}
                        item_name='Lounge armchair'
                        price='280'
                    />
                </View>
            </View>




            <View style={style.inside}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.words}>Archive</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttons}>
                    <Text style={style.word}>in process</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    content:{
        backgroundColor: 'gray',
    } ,
    container:{
        paddingVertical:30,

    },
    wrapper: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inside: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        padding: 12,
        backgroundColor:'#ffff'
    },
    button: {
        padding: 16,
        width: '45%',
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
        width: '45%',
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

export default Shop