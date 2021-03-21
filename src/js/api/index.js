const fetchAlbumFiles = async (nodeId = '') => {
  const requestURL = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${nodeId}`;
  const response = await fetch(requestURL);
  const responseBody = await response.json();

  return responseBody;
}

window.api = {};
window.api.fetchAlbumFiles = fetchAlbumFiles;
