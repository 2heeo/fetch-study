// todo-heeo.
// 프로미즈, async, await, response(응답객체), res.json 공부

const requestURL = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchAlbumFiles = async () => {
  const response = await fetch(requestURL);
  const responseBody = await response.json();

  return responseBody;
}

window.api = {};
window.api.fetchAlbumFiles = fetchAlbumFiles;
