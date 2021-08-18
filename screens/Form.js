import React from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'
import UserForm from '../components/UserForm'
const Form = ({ navigation }) => {
    const dim = useWindowDimensions();

    return <View style={[styles.container, { widtth: dim.width, height: dim.height }]}>
        <UserForm navigation={navigation} />
    </View>
}
export default Form;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})