import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';

import { CardBackground, ViewButton } from '../components/SVG'
import ViewBackground from './ViewBackground'

const BASE_DELAY = 500;

const SavingCard = () => {
    return <Animatable.View
        animation='zoomIn'
        duration={1000}
        delay={BASE_DELAY}
        style={styles.container}>
        <ViewBackground
            height={'55%'}
            renderBackground={(style) => <CardBackground
                width='100%'
                height='100%'
                preserveAspectRatio="xMaxYMid"
                style={style} />
            }

            containerStyles={styles.upperHalf}>
            <View style={styles.upperTextWrapper}>
                <View style={styles.spaceBetween}>
                    <Text style={styles.smallerText}>Balance</Text>

                    <TouchableOpacity>
                        <View style={styles.buttonBack}>
                            <ViewButton />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.biggerText}>₹12,000</Text>
            </View>
            <View>

            </View>


        </ViewBackground>
        <View style={styles.lowerHalf}>
            <View style={styles.lowerTextWrapper}>
                <Text style={[styles.smallerText, { color: '#681A60', marginBottom: 6 }]}>Balance</Text>
                <View style={styles.spaceBetween}>
                    <Text style={[styles.biggerText, { color: '#681A60' }]}>₹12,000</Text>
                    {/* <View style={{ width: 40, height: 40, position: 'relative', borderRadius: 20, borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}> */}

                    <TouchableOpacity>
                        <View style={styles.saveMoreBack}>
                            <Text style={styles.saveMore}>Save More</Text>
                        </View>
                    </TouchableOpacity>
                    {/* </View> */}
                    {/* <View style={[{ height: 29, width: 29, borderRadius: 15, backgroundColor: 'red' }, styles.shadow]} /> */}
                </View>
            </View>
            <View>

            </View>

        </View>
    </Animatable.View>
}
export default SavingCard;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 219,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 19,
        marginBottom: 21,

    },
    upperHalf: {
        paddingHorizontal: 20

    },
    lowerHalf: {
        height: '45%',
        paddingHorizontal: 20,
        backgroundColor: 'whitesmoke',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    smallerText: {
        color: '#9B9B9B',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 8,
        fontWeight: '700'
    },
    biggerText: {
        color: '#252525',
        fontWeight: '600',
        fontSize: 30,
        marginBottom: 34,
        fontWeight: '700'

    },
    upperTextWrapper: {
        // backgroundColor: 'red',
        marginTop: 16,

    },
    lowerTextWrapper: {
        marginTop: 12,
    },
    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
    },
    shadow: {
        // shadowColor: 'black',
        // shadowOpacity: 0.1,
        // shadowOffset: { width: 10, height: 10 },
        // shadowRadius: 11,
        elevation: 10,
        // backgroundColor: 'rgba(0,0,0,0.1)'
    },
    buttonBack: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 43,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(155, 151, 182, 0.4)'
    },
    saveMoreBack: {
        backgroundColor: 'rgba(233,211,233,0.4)',
        borderRadius: 40,
        paddingHorizontal: 14,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saveMore: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#400142'
    }
})
