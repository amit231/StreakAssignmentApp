import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import DisplayCardAction from './DisplayCardAction'

const Savings = ({ id,
    type,
    title,
    action,
    colors,
    data,
    user }) => {
    console.log(type)

    return <DisplayCardAction {...{ type, title, action, colors, user }}>
        <View style={{ width: '100%' }}>
            <Text style={styles.monthSaving}>
                Saved a total of
                <Text style={{ color: '#192247', opacity: 0.9 }}>
                    {data.monthSaving}
                </Text>
                this month and is close to achieving one goal</Text>
            {data.goals.map(goal => <View key={goal.title} style={styles.outer}>
                <View style={styles.inner}>
                    <Text style={styles.goalTitle}>{goal.title}</Text>
                    <Text style={styles.goalSaved}>{goal.saved} saved <Text style={styles.goalAmount}>of {goal.amount} goal</Text></Text>
                </View>
            </View>)}
        </View>
    </DisplayCardAction>

}
export default Savings;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        marginTop: 30,
    },
    simpleListTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.9)',
        marginBottom: 3,


    },
    simpleListAmount: {
        fontSize: 18,
        fontWeight: '700',
        fontWeight: 'bold',
        color: 'black',
        opacity: 0.9
    },
    simpleListAt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.3)'

    },
    simpleListItem: {
        marginTop: 20,
        paddingBottom: 17,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },
    bottomText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    bottomTextcontainer: {
        height: 63,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        paddingRight: 19,
        paddingLeft: 20,

    },
    dataContainer: {
        paddingTop: 14,
        paddingRight: 20,
        paddingLeft: 17,
    },
    monthSaving: {
        color: '#5682AB',
        fontWeight: '700',
        fontSize: 18,
        opacity: 0.9,
        marginLeft: 5,
        marginRight: 15,
        marginBottom: 20
    },
    outer: {
        width: '100%',
        minHeight: 96,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 19,
        paddingRight: 0,
        marginBottom: 24

    },
    inner: {
        paddingLeft: 12,
        borderLeftColor: 'rgba(88, 105, 140, 0.9)',
        borderLeftWidth: 2.3
    },
    goalTitle: {
        color: '#31446B',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 7
    },
    fadeButton: {
        width: 166,
        height: 50,
        borderRadius: 29,
        backgroundColor: '#AB604F',
        marginBottom: 25,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    },
    goalSaved: {
        // color: '#31446B',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 7
    },
    goalAmount: {
        color: '#5682AB',

    },
    fancyGoal: {
        width: '100%',
        height: 142,
        borderRadius: 19,
        borderWidth: 3,
        borderColor: 'rgba(210,188,165,0.2)',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    viewBackground: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    biggerText: {
        fontSize: 60,
        color: '#631E00',
        fontWeight: '700'
    },
    gamePromo: {
        fontSize: 18,
        fontWeight: '700',
        color: '#AB604F',
        opacity: 0.8,
        marginBottom: 20.8
    }
})
