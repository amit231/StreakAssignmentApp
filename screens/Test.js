import React, { useEffect, useState, useRef } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Animated, TouchableOpacity, Easing } from 'react-native'
// import { Easing } from 'react-native-reanimated';
import Button from '../components/Button'

const Duration = 500;
const Test = ({ navigation }) => {
    const dim = useWindowDimensions();
    // console.log('hurray')
    const [transformYval, setTransformYval] = useState(0);
    const [number, setNumber] = useState(2)
    const Timer = useRef()
    useEffect(() => {
        if (transformYval !== 0) {
            Animated.timing(transformYval, {
                toValue: 52,
                duration: Duration,
                useNativeDriver: false,
                // easing: Easing.inOut
            }).start()
            console.log(transformYval)
            setNumber(Math.floor(Math.random() * 10))
            Timer.current = setTimeout(() => {
                setTransformYval(new Animated.Value(-52))
            }, Duration)
        }
        return () => {
            clearInterval(Timer.current)
        }

    }, [transformYval])


    function toggleAnimation() {
        console.log('clicke')
        if (transformYval === 0) {
            setTransformYval(new Animated.Value(-52))
        } else {
            clearInterval(Timer.current)
            setTransformYval(0)
        }
    }


    return <View style={[styles.container, { widtth: dim.width, height: dim.height }]}>


        <View style={styles.backgroundColor}>
            <View style={styles.foreground}>
                <Animated.Text style={{
                    fontSize: 26,
                    fontWeight: '700',
                    // lineHeight: 26,
                    // backgroundColor: 'red',
                    transform: [{ translateY: transformYval }]
                }}>{number}</Animated.Text>
            </View>
        </View>
        <TouchableOpacity style={styles.fadeButton} onPress={toggleAnimation}>
            <Text style={styles.buttonText}>Try your luck</Text>
        </TouchableOpacity>
    </View>
}
export default Test;


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundColor: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: 70,
        height: 70,
    },
    foreground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        overflow: 'hidden',
        width: 70,
        height: 70,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        zIndex: 1
    },
    fadeButton: {
        marginTop: 23,
        width: 166,
        height: 50,
        borderRadius: 29,
        backgroundColor: '#AB604F',
        marginBottom: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    },
})