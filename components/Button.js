import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

const Button = ({ onPress, children, style }) => {
    // console.log('style is', style)
    return (
        <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', ...style }} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default Button;