import React from 'react'
import { View, useWindowDimensions, StyleSheet, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RadialGradientSVG, Logo, QRCode, ArrowTopRight, Elipsis, SettinIcon } from './SVG'
import ViewBackground from './ViewBackground'
import ProfileChip from './ProfileChip'
import SavingCard from "./SavingCard";
import BackgroundImage from '../assets/Image.png'
import Button from './Button'
import Transactions from './Transactions'
import Savings from './Savings'
import SlotGame from './SlotGame'
import { removeUserData } from '../actions';



const transactionsData = {
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
            saved: '₹36,480',
            amount: '₹40,000'
        }]

    }
}
const gameData = {
    id: 3,
    title: 'Game of the day',
    type: '03',
    action: 'View all Games',
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



const CARD_IN = 1500;
const BUTTON_MAIN_IN = 300;
const BUTTONS_IN = 200;


const Card = ({ cardHeight = 419, navigation }) => {
    const dim = useWindowDimensions();
    console.log(dim)
    const dispatchToRedux = useDispatch();

    const userState = useSelector(state => state.usersReducer)
    let user;
    if (userState && userState.firstName && userState.firstName !== '') {
        user = userState.firstName;
    } else {
        user = 'Andy'
    }

    function logoutHandler() {
        dispatchToRedux(removeUserData())
        navigation.replace('Form')
    }

    console.log(userState)
    return <ScrollView>
        <ViewBackground
            height={cardHeight}
            renderBackground={(style) => <RadialGradientSVG
                width='100%'
                height='100%'
                preserveAspectRatio="xMinYMin slice"
                style={style} />
            }
            containerStyles={[styles.viewBackground, { paddingTop: 49 }]}>
            <Animatable.View
                animation='fadeIn'
                delay={CARD_IN - 300}
                duration={300}
                style={styles.header}>
                <Logo />
                <TouchableOpacity onPress={logoutHandler}>
                    <ProfileChip name={user} image='https://media.istockphoto.com/photos/the-african-king-picture-id492611032?k=6&m=492611032&s=612x612&w=0&h=Y_CHJCbkFOqmXvHOYSdxu0T5UZqoRj7OzpIBLGkvf_Q=' />
                </TouchableOpacity>
            </Animatable.View>
            <SavingCard />
            <View style={styles.spaceBetween}>
                <Button onPress={e => console.log(e)}>
                    <Animatable.View
                        animation='fadeIn'
                        delay={CARD_IN}
                        duration={BUTTON_MAIN_IN}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Scan Code</Text>
                        <QRCode style={{ marginLeft: 10 }} />
                    </Animatable.View>
                </Button>
                <Animatable.View
                    animation='fadeIn'
                    delay={CARD_IN + BUTTON_MAIN_IN}
                    duration={BUTTONS_IN}>
                    {/* <View style={{ display: 'flex', flexDirection: 'row' }}> */}

                    <Button style={styles.fadeButton} onPress={e => console.log(e)}>
                        <ArrowTopRight />
                    </Button>
                    {/* </View> */}
                </Animatable.View>
                <Animatable.View
                    animation='fadeIn'
                    delay={CARD_IN + BUTTON_MAIN_IN}
                    duration={BUTTONS_IN}>
                    <Button style={styles.fadeButton} onPress={e => console.log(e)}>
                        <Elipsis />
                    </Button>
                </Animatable.View>
            </View>

        </ViewBackground>
        <Animatable.View
            animation='fadeInUp'
            delay={CARD_IN + BUTTON_MAIN_IN + BUTTONS_IN}
            style={styles.viewBackground}>
            {/* <DisplayCardAction {...transactionData} user={user} />
            <DisplayCardAction {...savingData} user={user} />
            <DisplayCardAction {...gameData} user={user} /> */}
            <Transactions {...transactionsData} user={user} />
            <Savings {...savingData} user={user} />
            <SlotGame {...gameData} user={user} />
        </Animatable.View>
        <View style={{ width: '100%', marginTop: 40, position: 'relative' }}>
            <View style={{ position: 'absolute', top: 0, right: 12, }}>
                <Button style={{ backgroundColor: 'whitesmoke', height: 40, paddingHorizontal: 12, paddingLeft: 14, borderRadius: 20 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: 'darkgrey' }}>Parental controls</Text><SettinIcon style={{ marginLeft: 10 }} />
                </Button>
            </View>
            <ImageBackground source={BackgroundImage} resizeMode="stretch" style={styles.backgroungImage} ></ImageBackground>
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
    },
    backgroungImage: {
        width: 303,
        height: 78
    },
    button: {
        width: 187,
        height: 50,
        backgroundColor: '#650F5C',
        borderRadius: 10,
        // backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    },
    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fadeButton: {
        width: 65,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'rgba(101,15,92,0.4)'
    },
    SettingBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SettingBtnText: {
        fontSize: 1,
        fontWeight: '700',
        color: 'white'
    }
})
