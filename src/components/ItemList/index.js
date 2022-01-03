import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TaskList({ data }) {
    return (
        <View 
            style={styles.container}
            animation="bounceIn"
            useNativeDriver
        >
            <View>
                <Text style={styles.item}> {data.item} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#003566',
        borderRadius: 5,
        padding: 7,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }
    },
    item: {
        color: '#ffc300',
        fontSize: 20,
        padding: 5,
        fontWeight: '500',
    }
});