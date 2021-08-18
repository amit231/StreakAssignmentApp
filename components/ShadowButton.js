import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native'

import { BoxShadow } from 'react-native-shadow'

export default class VideoCell extends Component {
    render = () => {
        const shadowOpt = {
            width: 160,
            height: 170,
            color: "#000",
            border: 2,
            radius: 3,
            opacity: 0.1,
            x: 0,
            y: 3,
            style: { marginVertical: 5 }
        }

        return (
            <BoxShadow setting={shadowOpt}>
                <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
            </BoxShadow>
        )
    }
}