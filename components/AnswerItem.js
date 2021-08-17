import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import RenderHtml from "react-native-render-html";

const AnswerItem = (props) => {
  const { width } = useWindowDimensions();
  if (props.status != "" && props.status === "loading...") {
    return (
      <View>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }
  if (props.status != "" && props.status != "loading...") {
    return (
      <View>
        <Text>{props.status}</Text>
      </View>
    );
  }

  console.log(props.data);

  if (props.data == null) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }
  const source = {
    html: `${props.data.body}`,
  };
  return (
    <View>
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
            <RenderHtml contentWidth={width} source={source} />
          </View>
          <View>
            <Text>
              Answer by
              <Text style={styles.username}> {props.data.userName}</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
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
  answerTitle: {
    color: "black",
  },
  username: {
    color: "#00BFFF",
  },
  codeArea: {
    backgroundColor: "#F6F6F6",
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default AnswerItem;
