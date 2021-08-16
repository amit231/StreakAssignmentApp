import React from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'
import Card from '../components/Card'
const Home = () => {
    const dim = useWindowDimensions();

    return <View style={[styles.container, { widtth: dim.width, height: dim.height }]}>
        <Card />
    </View>
}
export default Home;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})