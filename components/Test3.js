// Components/Login.js

import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, Slider } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import SvgUri from 'react-native-svg-uri';


class Test2 extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>

                <LinearGradient
                    colors={['rgba(246, 245, 240, 0.82)', 'transparent']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.header}>
                    <View style={{ position: 'absolute', right: 20, top: 20 }}>
                        <Text style={{ color: '#fff' }}>Chambre 212 - Mr Edouard Dietsch</Text>
                    </View>
                </LinearGradient>

                <View style={styles.body}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ color: '#9A7B69', fontSize: 18 }}>Home,</Text>
                        <Text style={{ color: '#9A7B69', fontSize: 18 }}>Start Home,</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.firstCard}>
                            <View style={{ flex: 3, flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: 50, height: '90%', backgroundColor: '#F6F5F0', borderRadius: 14 }}>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={styles.current}></View>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ flex: 1 }}></View>
                                        <View style={{ flex: 1 }}></View>
                                    </View>
                                </View>
                                <View style={{ flex: 8 }}>
                                   <View style={{flex:1}}>
             
                                   </View>
                                   <View style={{flex:5, flexDirection:'row'}}>
                                        <View style={{width:'23%', height:'35%', backgroundColor:'#F6F5F0', margin:8, borderRadius:10, padding: 10,}}>
                                            <View style={{ backgroundColor:'#efefef', flex:1, borderRadius:10 }}>
                                                <Text>g</Text>
                                            </View>
                                            <View>
                                                <View style={{flexDirection:'row'}}>
                                                    <View style={{flex:5}}>
                                                        <Text style={{fontWeight:'bold', color:'#929962'}}>Combo Salatik</Text>
                                                    </View>
                                                    <View style={{flex:2}}>
                                                        <Text style={{fontWeight:'bold', color:'#BFC2A8'}}>$ 8.50</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <Text style={{color:'#929962', fontSize: 12}}>Cherry tomatoas, parmesan, grilled chikens, cucumbers, croutons</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{width:'23%', height:'35%', backgroundColor:'#F6F5F0', margin:8, borderRadius:10}}></View>
                                        <View style={{width:'23%', height:'35%', backgroundColor:'#F6F5F0', margin:8, borderRadius:10}}></View>
                                        <View style={{width:'23%', height:'35%', backgroundColor:'#F6F5F0', margin:8, borderRadius:10}}></View>
                                   </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    header: {
        height: '30%',
        backgroundColor: 'rgba(209, 200, 186, 0.33)',

    },
    body: {
        height: '95%',
        width: '100%',
        top: -200,
        justifyContent: 'center',
        padding: '3%',

    },
    firstCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flex: 12,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
    },
    smallcard1: {
        height: 50,
        width: 50,
        backgroundColor: '#C3A999',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    smallcard2: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    current: {
        flex: 1,
        backgroundColor: '#BFC2A8',
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

})

export default Test2