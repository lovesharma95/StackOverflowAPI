import React from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';

const SearchArea = (props) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.inputContainer}>
                <View style={{
                    width: '60%'
                }}>
                    <TextInput style={styles.input} placeholder="Search..."></TextInput>
                </View>
                <Button title="Search" style={styles.button}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 30
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center'
    },
    input: {
        padding: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    error: {
        fontSize: 12,
        color: 'red',
        padding: 10
    }
});

export default SearchArea;