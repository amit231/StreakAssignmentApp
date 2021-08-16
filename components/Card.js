import React from 'react'
import { View, useWindowDimensions, StyleSheet, Text, ScrollView } from 'react-native'

import { RadialGradientSVG, Logo } from './SVG'
import ViewBackground from './ViewBackground'
import ProfileChip from './ProfileChip'
import SavingCard from "./SavingCard";
import DisplayCardAction from './DisplayCardAction'




const transactionData = {
    id: 1,
    title: 'Recent transactions',
    action: 'All transactions',
    type: '01',

    colors: {
        titleColor: '#600063',
        bottomTextColor: '#A655A8',
        background: '#F8F5FB',
        bottom: '#EAE1F2'
    },
    data: {
        transatctions: [{
            title: 'Food & Drinks',
            at: '02:30 pm',
            amount: '-₹50',
        },
        {
            title: 'Store sale',
            at: 'Jun-04:30 PM',
            amount: '-₹140',
        },
        {
            title: 'Money credited',
            at: 'Jun-12:30 PM',
            amount: '+₹4500',
        }],
    }

}
const savingData = {
    id: 2,
    title: ' Savings',
    type: '02',

    action: 'All transactions',
    colors: {
        titleColor: '#112854',
        bottomTextColor: '#5770A4',
        background: '#F5F7FB',
        bottom: '#EEF1F3'
    },
    data: {
        monthSaving: '₹8,480',
        goals: [{
            title: 'Playstation 5',
            savd: '₹36,480',
            amount: '₹40,000'
        }]

    }
}
const gameData = {
    id: 3,
    title: 'Recent transaction0',
    type: '03',
    action: 'All transactions',
    colors: {
        titleColor: '#631E00',
        bottomTextColor: '#A3503E',
        background: '#FBF7F5',
        bottom: '#F2E9E1'
    },
    data: {
        count: '8884',
        prizeWorth: '₹4000',
        btnText: 'Try Your Luck'
    }
}






const Card = ({ height = 423 }) => {
    const dim = useWindowDimensions();
    console.log(dim)

    return <ScrollView>
        <ViewBackground
            height={height}
            renderBackground={(style) => <RadialGradientSVG
                width='100%'
                height='100%'
                preserveAspectRatio="xMinYMin slice"
                style={style} />
            }
            containerStyles={[styles.viewBackground, { paddingTop: '10%' }]}>

            <View style={styles.header}>
                <Logo />
                <ProfileChip name='Andy' image='https://media.istockphoto.com/photos/the-african-king-picture-id492611032?k=6&m=492611032&s=612x612&w=0&h=Y_CHJCbkFOqmXvHOYSdxu0T5UZqoRj7OzpIBLGkvf_Q=' />
            </View>
            <SavingCard />

        </ViewBackground>
        <View style={styles.viewBackground}>
            <DisplayCardAction {...transactionData} />
            <DisplayCardAction {...savingData} />
            <DisplayCardAction {...gameData} />
        </View>
    </ScrollView>
}
export default Card;


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: 'red'
    },
    viewBackground: {
        paddingHorizontal: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ctnr: {
        width: '100%',
        // height: 243,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 20
    }
})
