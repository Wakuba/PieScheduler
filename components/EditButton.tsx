import React from 'react';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native'
import { centerHeight, centerWidth } from '../helpers/positionValue'

const EditButton = (onPress) => {
    return  (
        <TouchableOpacity
        onPress={onPress} 
        style={styles.buttonBox}>
            <Text style={styles.buttonText}>
                EDIT
            </Text>
        </TouchableOpacity>

    );

};

const styles = StyleSheet.create({
    buttonBox:{
        position:'absolute',
        left:centerWidth-20,
        bottom:centerHeight-280,
    },
    buttonText:{
        fontSize:20,
        color:'blue',
    }
})

export default EditButton;
