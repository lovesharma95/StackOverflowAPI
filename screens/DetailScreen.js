import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import AnswerItem from "../components/AnswerItem";
import QuestionDetail from "../components/QuestionDetail";

const DetailScreen = (props) => {
  const [questionDetail, setQuestionDetail] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchQuestionData = async () => {
      const fetchQuestionDetailData = async () => {
        setStatus("loading...");
        const questionDetail = await fetch(
          `https://api.stackexchange.com/2.3/questions/${props.route.params.id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
        );

        if (!questionDetail.ok) {
          throw new Error("Something went wrong!");
        }

        const questionDetailData = await questionDetail.json();

        return questionDetailData;
      };
      try {
        const data = await fetchQuestionDetailData();
        const loadedResult = [];
        for (const key in data["items"]) {
          loadedResult.push({
            id: data["items"][key].question_id.toString(),
            body: data["items"][key].body.toString(),
          });
        }

        if (loadedResult.length < 1) {
          setStatus("Not data found");
        } else {
          setStatus("");
        }

        setQuestionDetail(loadedResult);
      } catch (error) {
        setStatus(error.message);
      }
    };
    const fetchAnswersData = async () => {
      const fetchAnswersDetailData = async () => {
        setStatus("loading...");
        const answers = await fetch(
          `https://api.stackexchange.com/2.3/questions/${props.route.params.id}/answers?pagesize=10&order=desc&sort=votes&site=stackoverflow&filter=withbody`
        );

        if (!answers.ok) {
          throw new Error("Something went wrong!");
        }

        const answersData = await answers.json();

        return answersData;
      };
      try {
        const data = await fetchAnswersDetailData();

        const loadedResultAnswers = [];
        for (const key in data["items"]) {
          loadedResultAnswers.push({
            id: data["items"][key].answer_id.toString(),
            upVotes: data["items"][key].score.toString(),
            body: data["items"][key].body.toString(),
            userName: data["items"][key].owner.display_name.toString(),
          });
        }

        if (loadedResultAnswers.length < 1) {
          setStatus("Not data found");
        } else {
          setStatus("");
        }

        setAnswers(loadedResultAnswers);
      } catch (error) {
        setStatus(error.message);
      }
    };
    fetchQuestionData();
    fetchAnswersData();
  }, []);

  const headerComponent = () => (
    <ScrollView style={styles.detailScreen}>
      <View>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Text>Asked by {props.route.params.userName}</Text>
      </View>
      <Divider />
      <QuestionDetail status={status} questionDetail={questionDetail} />
      <View style={styles.answerHeading}>
        <Text>Answers</Text>
      </View>
    </ScrollView>
  );

  return (
    <View>
      <FlatList
        data={answers}
        ListHeaderComponent={headerComponent}
        renderItem={(itemData) => (
          <AnswerItem status={status} data={itemData.item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreen: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#00BFFF",
  },
  answerHeading: {
    backgroundColor: "#ececec",
    padding: 10,
  },
});

export default DetailScreen;
