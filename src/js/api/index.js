// todo-heeo.
// 프로미즈, async, await, response(응답객체), res.json 공부

const fetchAlbumFiles = async (requestURL) => {
  // before
  // fetch(requestURL)
  //   .then(response => response.json())
  //   .then(responseBody => console.log(responseBody));

  // after
  const response = await fetch(requestURL);
  const responseBody = await response.json();

  return responseBody;
}

window.api = {};
window.api.fetchAlbumFiles = fetchAlbumFiles;
