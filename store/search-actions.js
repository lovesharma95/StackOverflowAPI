import { searchActions } from "./search-slice";
import { uiActions } from "./ui-slice";

export const fetchResult = (inputString, page) => {
  return async (dispatch) => {
    const searchData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "loading...",
        })
      );
      const response = await fetch(
        `https://api.stackexchange.com/2.3/search?page=${page}&pagesize=15&order=desc&sort=votes&intitle=${inputString}&site=stackoverflow`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      return data;
    };
    try {
      const data = await searchData();
      const loadedResult = [];
      for (const key in data["items"]) {
        loadedResult.push({
          id: data["items"][key].question_id.toString(),
          title: data["items"][key].title.toString(),
          upVotes: data["items"][key].score.toString(),
          userName: data["items"][key].owner.display_name.toString(),
        });
      }

      if (loadedResult.length < 1) {
        dispatch(
          uiActions.showNotification({
            status: "No data found",
          })
        );
      }

      dispatch(
        searchActions.replaceData({
          searchResult: loadedResult,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: error.message,
        })
      );
    }
  };
};
