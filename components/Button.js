import React from 'react';
import { TouchableOpacity } from 'react-native';


// Button used in project
const Button = ({
    onPress,
    children,
    style,
    disabled
}) => {
    return (
        <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', ...style }} onPress={onPress} disabled={disabled}>
            {children}
        </TouchableOpacity>
    );
};

export default Button;