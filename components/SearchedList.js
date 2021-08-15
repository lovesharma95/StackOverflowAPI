import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SearchedItem from './SearchedItem';
import DUMMY_DATA from '../constants/Constants';

const SearchedList = (props) => {
    if(DUMMY_DATA.length < 1){
        return (
            <View style={styles.viewArea}>
                <Text>No Data Found</Text>
            </View>
        );
    }
    return (
        <View>
            <FlatList
                data={DUMMY_DATA}
                renderItem={itemData => (<SearchedItem navigation={props.navigation} data={itemData.item}/>)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    viewArea: {
        padding: 10
    }
});


export default SearchedList;