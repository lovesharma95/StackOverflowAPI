import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/search-slice";
import { fetchResult } from "../store/search-actions";

const SearchArea = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();

  const inputChangeHandler = (text) => {
    setInputText(text);
  };

  const inputSubmitHandler = () => {
    if (inputText.trim() == "") {
      setIsInputValid(true);
      return;
    }
    setIsInputValid(false);
    dispatch(
      searchActions.getData({
        inputText,
      })
    );
    dispatch(fetchResult(inputText, page));
    setInputText("");
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputContainer}>
        <View
          style={{
            width: "60%",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={inputChangeHandler}
            value={inputText}
          ></TextInput>
        </View>
        <Button
          title="Search"
          style={styles.button}
          onPress={inputSubmitHandler}
        />
      </View>
      <View>
        {isInputValid && (
          <Text style={styles.error}>Please enter search value</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
  },
  input: {
    padding: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  error: {
    fontSize: 12,
    color: "red",
    padding: 10,
  },
});

export default SearchArea;
