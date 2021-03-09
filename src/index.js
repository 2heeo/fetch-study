// 이 작업을 할 때는 IIFE를 그냥 사용하지 않는 것으로 합니다. 어차피 나중에 웹팩으로 말것이기 때문에
// jQuery를 사용하지 않습니다.
// 일반적으로 최상단은 #app 을 쓰는것이 좋습니다. (카멜 케이스를 줄이기 위한 짧은 단어)
$(function () {
  const $coll = $("#imgDirectory");
  const $listDir = $coll.find(".list_dir");

  const url = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
  const data = {};

  // API의 설정을 관리하는 급이 아닌 직접 데이터를 가져올 때 쓰는 함수의 경우 추상적인 이름을 사용하지 않는게 좋습니다.
  // 지금의 경우를 보면 어차피 이 fetch 함수는 디렉토리를 가져오는 일밖에 하지 않기 때문입니다.
  // 따라서 좀더 자세하게 설명을 적어주는 편이 좋습니다. fetch 를 하고 get 이 붙은 이상 API 를 호출할 것이고, Data를 가져올 것은 모든 경우에서 확실하기 때문입니다.
  // 특히 이것이 가장 확실해지는 시점은 setDir 을 할 때 입니다. setDir 이 껴있다면 이 함수는 무조건적으로 디렉토리를 호출 할 수 밖에 없습니다.
  // 그리고 가급적이면 역할을 그냥 분리해주는 편이 좋습니다. 가져오는 것은 가져오는 것까지만 하면 되고, dir setting 은 따로 합니다.
  const getApiData = function (url) {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Success:", JSON.stringify(response));
        setDir(response);
        // return response.json();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // 공지사항에도 잠깐 나왔었는데 이번 과제에서는 filePath의 유무로 판단해서는 안됩니다. type 객체의 값으로 판단해야 합니다.
  // type: DIRECTORY, FILE
  // const sample = {
  //   filePath: null,
  //   id: "1",
  //   name: "노란고양이",
  //   parent: null,
  //   type: "DIRECTORY",
  // };
  // data 라는 변수명을 쓰지 않는 것이 좋습니다. data 가 아닌 객체가 있을지 생각해 봅시다. 모든 가공되지 않은 정보는 data 이기 때문에 혼란이 있습니다.
  const setDir = function (data) {
    let imgUrl = "";
    for (let i = 0; i < data.length; i++) {
      imgUrl =
        data[i].filePath === null ? "./img/img_folder.png" : data[i].filePath; // todo-이미지받아오기;;
      $listDir.append(
        `<li><a href="javascript:;"><img src="${imgUrl}" alt=""><span class="tit_dir">${data[i].name}</span></a></li>`
      );
    }
  };

  // getApiData(url);

  let currentDirectories = [];
  const getDirectories = async () => {
    const requestURL =
      "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

    // 상단에서 then => await 한번으로 생각하면 됩니다.
    const response = await fetch(requestURL);
    // json() 앞에 await 를 붙이는 건 console.log(response.json()); 을 찍어보면 Promise 객체를 반환하기 때문입니다. (위에서 then 사용하는 이유도 마찬가지)
    currentDirectories = await response.json();
  };

  const render = async () => {
    await getDirectories();
    console.log(currentDirectories);
    setDir(currentDirectories);
  };

  render();
});
