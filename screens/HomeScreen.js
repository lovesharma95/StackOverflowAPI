import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import SearchArea from "../components/SearchArea";
import SearchedList from "../components/SearchedList";
import { checkConnected } from "../components/netinfo";
import { useSelector } from "react-redux";
import SearchedItem from "../components/SearchedItem";

const HomeScreen = (props) => {
  const [connect, setConnect] = useState(false);
  const offlineData = useSelector((state) => state.search.offlineData);
  checkConnected().then((res) => {
    setConnect(res);
  });

  if (connect === false && offlineData.length > 1) {
    return (
      <View>
        <SearchArea />
        <Text>No Internet Connection</Text>
        <FlatList
          data={offlineData}
          renderItem={(itemData) => (
            <SearchedItem navigation={props} data={itemData.item} />
          )}
        />
      </View>
    );
  }
  if (connect === false && offlineData.length < 1) {
    return (
      <View>
        <SearchArea />
        <Text>No Internet Connection</Text>
        <Text>No Data Found</Text>
      </View>
    );
  }
  return (
    <View>
      <SearchArea />
      <SearchedList navigation={props} />
    </View>
  );
};

export default HomeScreen;
