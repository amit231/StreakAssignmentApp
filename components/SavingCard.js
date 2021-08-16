import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { CardBackground } from '../components/SVG'
import ViewBackground from './ViewBackground'


const SavingCard = () => {

    return <View style={styles.container}>
        <ViewBackground
            height={'50%'}
            renderBackground={(style) => <CardBackground
                width='100%'
                height='100%'
                preserveAspectRatio="xMaxYMid"
                style={style} />
            }
            containerStyles={styles.upperHalf}>
            <View>
                <Text style={styles.smallerText}>Balance</Text>
                <Text style={styles.biggerText}>₹12,000</Text>
            </View>
            <View>

            </View>


        </ViewBackground>
        <View style={styles.lowerHalf}>
            <View>
                <Text style={[styles.smallerText, { color: '#681A60' }]}>Balance</Text>
                <Text style={[styles.biggerText, { color: '#681A60' }]}>₹12,000</Text>
            </View>
            <View>

            </View>

        </View>
    </View>
}
export default SavingCard;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 243,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 18,
        marginBottom: 28,

    },
    upperHalf: {
        paddingHorizontal: 20

    },
    lowerHalf: {
        height: '50%',
        paddingHorizontal: 20,
        backgroundColor: 'whitesmoke',
        // borderBottomEndRadius: 10,
        // borderBottomEndRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    smallerText: {
        color: '#9B9B9B',
        fontWeight: '600',
        fontSize: 18
    },
    biggerText: {
        color: '#252525',
        fontWeight: '600',
        fontSize: 30

    }
})
