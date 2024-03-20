import React from "react";
import { View, StyleSheet } from "react-native";
import UserInfo from "./userInfo";
import user from '../assets/user.jpg';
import Info from "./info";
import Header from "./header";
import call from '../assets/call.png';
import email from '../assets/email.png';
import address from '../assets/address.png';

const Profile = () => {
    return (
        <View style={style.container}>
            <Header
                description='Profile'
            />

            <View style={style.content}>
                <UserInfo
                    user={user}
                    fullname='Shodiya Basit'
                    country='Nigeria'
                    userId='3022271'
                />
            </View>


            <View style={style.wrapper}>
                <Info
                    image={call}
                    text='Phone number'
                    answer='+2349167627628'
                />

                <Info
                    image={email}
                    text='Email'
                    answer='shodiyabasit9@gmail.com'
                />

                <Info
                    image={address}
                    text='Home address'
                    answer='16,japo cornerstone,Abeokuta'
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: 'gray',
        padding: 16,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        height: '100%'
    }
})

export default Profile