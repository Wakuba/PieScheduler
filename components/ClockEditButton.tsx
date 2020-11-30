import React from 'react';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { Text, StyleSheet, GestureResponderEvent } from 'react-native'
import { centerWidth } from '../helpers/positionValue'

type Props = {
    onPress:(event: GestureResponderEvent) => void;
}

const ClockEditButton = (props:Props) => {
    const {onPress} = props;
    return  (
        <TouchableOpacity
        onPress={onPress} 
        style={styles.buttonBox}
        >
            <Text style={styles.buttonText}>
                EDIT
            </Text>
        </TouchableOpacity>

    );

};

const styles = StyleSheet.create({
    buttonBox:{
        left:centerWidth-20,
    },
    buttonText:{
        fontSize:20,
        color:'blue',
    }
})

export default ClockEditButton;
