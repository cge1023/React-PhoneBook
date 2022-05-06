let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action; // 써줌으로써 action. 생략 가능
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        number: payload.number,
      });
      break;
    case "SEARCH_BY_NAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
}

export default reducer;
