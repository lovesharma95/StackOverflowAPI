import React from 'react';
import {Button, Text, View} from 'react-native';
import SearchArea from '../components/SearchArea';
import SearchedList from '../components/SearchedList';

const HomeScreen = (props) => {
    return (
        <View>
            <SearchArea />
            <SearchedList />
        </View>
    );
}

export default HomeScreen;