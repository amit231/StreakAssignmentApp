import React from 'react'
import { View, StyleSheet, Text } from 'react-native'



const ViewBackground = ({ renderBackground, width, height, children, containerStyles }) => {
    // set position relative to container and position absolute with a very low zIndex for background
    return <View style={[styles.container, { width, height }]}>
        {renderBackground({ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 })}
        <View style={[containerStyles, styles.cover]}>
            {children}
        </View>
    </View>
}
export default ViewBackground;


const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    cover: {
        width: '100%',
        height: '100%',
    }
})
