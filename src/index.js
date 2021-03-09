$(function () {
  const $coll = $('#imgDirectory');
  const $listDir = $coll.find('.list_dir');

  const url = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';
  const data = {};

  const getApiData = function(url) {
    fetch (url, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((response) => {
      console.log('Success:', JSON.stringify(response));
      setDir(response);
      // return response.json();
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  };

  const setDir = function(data) {
    let imgUrl = '';
    for(let i=0; i <  data.length; i++) {
      imgUrl = data[i].filePath === null ? './img/img_folder.png': data[i].filePath; // todo-이미지받아오기;;
      $listDir.append(`<li><a href="javascript:;"><img src="${imgUrl}" alt=""><span class="tit_dir">${data[i].name}</span></a></li>`);
    }
  };

  getApiData(url);
});