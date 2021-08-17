import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";

const QuestionDetail = (props) => {
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

  if (props.questionDetail == null) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00BFFF" />
      </View>
    );
  }

  const source = {
    html: `${props.questionDetail[0].body} `,
  };

  return (
    <View>
      <RenderHtml contentWidth={width} source={source} />
    </View>
  );
};

export default QuestionDetail;
