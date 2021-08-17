import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const SearchedItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigation.navigate("Detail", {
          id: props.data.id,
          title: props.data.title,
          userName: props.data.userName,
        })
      }
    >
      <View style={styles.listItems}>
        <View style={styles.votes}>
          <View>
            <Text style={styles.voteText}>{props.data.upVotes}</Text>
          </View>
          <View>
            <Icon name="caretup"></Icon>
          </View>
        </View>
        <View style={styles.questionItem}>
          <View>
            <Text style={styles.questionTitle}>{props.data.title}</Text>
          </View>
          <View>
            <Text>
              asked by{" "}
              <Text style={styles.username}>{props.data.userName}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    borderColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  votes: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ebebeb",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  voteText: {
    fontSize: 17,
  },
  questionItem: {
    flex: 4,
    padding: 5,
    flexDirection: "column",
  },
  questionTitle: {
    fontWeight: "bold",
    color: "#00BFFF",
  },
  username: {
    color: "#00BFFF",
  },
});

export default SearchedItem;
