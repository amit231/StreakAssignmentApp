import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { ForwardArrow, Burger, Store, SavingIcon } from '../components/SVG'
import ViewBackground from './ViewBackground'


const DisplayCardAction = ({ id,
    type,
    title,
    action,
    colors, data }) => {

    return <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.dataContainer}>

            <Text style={[styles.title, { color: colors.titleColor }]}>
                {title}
            </Text>

            <DataList {...{ type, data }} />
        </View>

        <View style={[styles.bottomTextcontainer, { backgroundColor: colors.bottom }]}>
            <Text style={[styles.bottomText, { color: colors.bottomTextColor }]}>
                {action}&nbsp;
            </Text>
            <ForwardArrow style={{ marginTop: '1.5%' }} fill={colors.bottomTextColor} />
        </View>

    </View>
}
export default DisplayCardAction;
const iconMappings = {
    'Food & Drinks': <Burger />,
    'Store sale': <Store />,
    'Money credited': <SavingIcon />
}

const DataList = ({ type, data }) => {
    function isGreen(am) {
        if (am[0] === '+') {
            return { color: '#00600A' }
        }
    }
    switch (type) {
        case '01':
            return <View>
                {data.transatctions.map(transcation => <View
                    key={transcation.at}
                    style={styles.simpleListItem}>
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{ marginRight: 16 }}>
                            {iconMappings[transcation.title]}
                        </View>
                        <View >
                            <Text
                                style={styles.simpleListTitle}>
                                {transcation.title}</Text>
                            <Text
                                style={styles.simpleListAt}>
                                {transcation.at}</Text>
                        </View>

                    </View>
                    <View>
                        <Text
                            style={[styles.simpleListAmount, isGreen(transcation.amount)]}>
                            {transcation.amount}
                        </Text>
                    </View>
                </View>)}
            </View>
        case '02':
            return <Text>Middle</Text>
        case '02':
            return <Text>Low</Text>

        default:
            return null
            break;
    }

}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: 100,
        borderRadius: 10,
        marginTop: 30,
    },
    simpleListTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.9)'


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
        fontWeight: 'bold',
        fontSize: 18,
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
        paddingRight: 14,
        paddingLeft: 20,

    },
    dataContainer: {
        paddingTop: 20,
        paddingRight: 14,
        paddingLeft: 20,
    }
})
