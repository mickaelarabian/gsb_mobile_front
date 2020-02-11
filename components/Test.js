// Components/Login.js

import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text, Slider } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class Test extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
               
                <LinearGradient
                    colors={['rgba(62, 108, 246, 0.74)', 'transparent']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.header}>
                    <View style={{ position: 'absolute', right: 20, top: 20 }}>
                        <Text style={{ color: '#fff' }}>Chambre 212 - Mr Edouard Dietsch</Text>
                    </View>
                </LinearGradient>
               
                <View style={styles.body}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Home,</Text>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Start Home,</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.firstCard}>
                            <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#efefef', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}></View>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 1, borderLeftWidth: 1, borderColor: '#efefef', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}></View>
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.image}>
                                    <Text>ok</Text>
                                </View>
                                <View style={styles.slider}>
                                    <Text>Global</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={1}
                                        maximumValue={100}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTintColor='#708FF0'
                                        value={50}
                                    />
                                    <Text>Veilleuse</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={0}
                                        maximumValue={1}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTintColor='#708FF0'
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row',marginLeft:10, marginRight:10 }}>
                                <View style={styles.image}>
                                    <Text>ok</Text>
                                </View>
                                <View style={styles.slider}>
                                    <Text>Global</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={1}
                                        maximumValue={100}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTintColor='#708FF0'
                                        value={50}
                                    />
                                    <Text>Veilleuse</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={0}
                                        maximumValue={1}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTintColor='#708FF0'
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.image}>
                                    <Text>ok</Text>
                                </View>
                                <View style={styles.slider}>
                                    <Text>Global</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={1}
                                        maximumValue={100}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTouchSize={{width: 10, height: 10}}
                                        thumbTintColor='#708FF0'
                                        value={50}
                                    />
                                    <Text>Veilleuse</Text>
                                    <Slider
                                        style={{ width: '100%', height: '25%' }}
                                        minimumValue={0}
                                        maximumValue={1}
                                        minimumTrackTintColor="#708FF0"
                                        maximumTrackTintColor="#eaedf3"
                                        thumbTintColor='#708FF0'
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardMidle}>
                            <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#efefef', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}></View>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 1, borderLeftWidth: 1, borderColor: '#efefef', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                            <View style={styles.bottomCard}>
                                <Text>ok</Text>
                            </View>
                            <View style={styles.bottomCard}>
                                <Text>ok</Text>
                            </View>
                            <View style={styles.bottomCard}>
                                <Text>ok</Text>
                            </View>
                            <View style={styles.bottomCard}>
                                <Text>ok</Text>
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
        height:'30%',
        backgroundColor: 'rgba(254, 156, 156, 0.69)',
        
    },
    body: {
        height:'85%',
        width: '100%',
        top:-200,
        justifyContent: 'center',
        padding: '5%',
        
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
        padding: 15
    },
    image: {
        flex: 1,
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
    slider: {
        flex: 2,
        marginLeft: 5,
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
        padding: 10,
    },
    cardMidle: {
        flex: 8,
        flexDirection: 'row',
        padding: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bottomCard: {
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 5,
        marginRight: 5
    },
  
})

export default Test