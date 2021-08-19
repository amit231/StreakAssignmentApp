import React from 'react';
import { TouchableOpacity } from 'react-native';


// Button used in project
const Button = ({
    onPress,
    children,
    style
}) => {
    return (
        <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', ...style }} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

export default Button;