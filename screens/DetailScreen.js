import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AnswerItem from '../components/AnswerItem';
import DUMMY_DATA from '../constants/Constants';

const DetailScreen = (props) => {
    return (
        <View style={styles.detailScreen}>
            <View>
                <Text style={styles.title}>{props.route.params.title}</Text>
                <Text>Asked by name</Text>
            </View>
            <View>
                <FlatList data={DUMMY_DATA} renderItem={itemData => (<AnswerItem data={itemData.item}/>)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailScreen: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        color: '#00BFFF'
    }
});

export default DetailScreen;