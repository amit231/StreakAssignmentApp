import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import { ArrowDown } from '../components/SVG'


const ProfileChip = ({ name, image }) => {

    return <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <ArrowDown />
    </View>
}
export default ProfileChip;


const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 6
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        marginRight: 4,
        color: 'white'
    },
    container: {
        padding: 4,
        borderRadius: 32,
        flexDirection: 'row',
        backgroundColor: '#430754',
        justifyContent: 'center',
        paddingRight: 7,
        alignItems: 'center'
    }
})
