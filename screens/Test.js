import React, { useEffect, useState, useRef } from 'react'
import { View, useWindowDimensions, StyleSheet, Text, Animated, TouchableOpacity, Easing } from 'react-native'
// import { Easing } from 'react-native-reanimated';
import Button from '../components/Button'

const Duration = 200;
const AnimationDuration = 4000;
const HowSlowYouWantToEnd = 10




const Test = ({ navigation, lastChar = 8 }) => {
    const dim = useWindowDimensions();
    const [transformYval, setTransformYval] = useState(0);
    const [slow, setSlow] = useState(0)
    const Timer = useRef()
    const TextRef = useRef();
    const AutoTimerRef = useRef()
    TextRef.current = Math.floor(Math.random() * 10)
    useEffect(() => {
        if (transformYval !== 0 && transformYval !== '0') {
            Animated.timing(transformYval, {
                toValue: 62,
                duration: Duration + slow * (Duration / HowSlowYouWantToEnd),
                useNativeDriver: true,
                easing: Easing.linear
            }).start()
            console.log(slow)
            Timer.current = setTimeout(() => {
                setSlow(slow => slow + 1)
                setTransformYval(new Animated.Value(-62))
            }, Duration + slow * (Duration / HowSlowYouWantToEnd))
        }
        return () => {
            clearInterval(Timer.current)
        }

    }, [transformYval])


    function toggleAnimation() {
        setSlow(0)
        console.log('clicke')
        if (transformYval === 0 || transformYval === '0') {
            setTransformYval(new Animated.Value(-62))
            AutoTimerRef.current = setTimeout(() => {
                clearInterval(Timer.current)
                setTransformYval('0')
            }, AnimationDuration)

        } else {
            clearInterval(AutoTimerRef.current)
            clearInterval(Timer.current)
            setTransformYval('0')
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
                    transform: [{ translateY: transformYval === '0' ? 0 : transformYval }]
                }}>{transformYval === '0' ? lastChar : TextRef.current}</Animated.Text>
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