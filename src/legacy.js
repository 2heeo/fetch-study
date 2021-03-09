$(document).ready(function () { 
  const $appContainer = $('main');
  const $contNav = $appContainer.find('.Breadcrumb');
  const $txtRoot = $contNav.find('.txt_root');
  const $txtDir = $contNav.find('.txt_dir');
  const $contDir = $appContainer.find('.Nodes');
  const $btnBack = $contDir.find('.btn_prev');
  const $textImg = $contDir.find('.txt_img');

  // 처음 루트 히위 디렉토리 노출 
  const showRoot = function (res) {
    for(let i=0; i < res.length; i++) {
      $contDir.append(`<div class="Node file" data-id'${res[i].id}'><img src="./assets/directory.png"><div>${res[i].name}</div></div>`);
    } 

    clickDir();
  };

  // 클릭한 디렉토리 하위 디렉토리 노출
  const showDir = function (id, res) {
    let imgPath = '';

    // todo - 현재 디렉토리명 넣기
    // $txtDir.html(res[id].name);

    $contDir.append('<div class="Node btn_prev"><img src="./assets/prev.png"></div>');

    for(let i=0; i < res.length; i++) {
      imgPath = res[i].pathName === null ? './assets/directory.png' : res[i].filePath; 
      $contDir.append(`<div class="Node"><img src="${imgPath}"><div>${res[0].name}</div></div>`);
    }

  };

  // Root 데이터 호출
  const getRootData = function() {
    $.ajax({
      type: 'GET',
      url: 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev',
      data: {},
      dataType: 'json',
      success: (res) => {
        console.log(res);
        showRoot(res);
      },
      error: () => {
        console.log('error!');
      }
    });
  };

  // 특정 디렉토리 데이터 호출
  const getNodeData = function(id) {
    // 특정 디렉토리에 해당하는 아이디 갑의 정체를 모륻겠음 ㅠㅠ
    $.ajax({
      type: 'GET',
      url: `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${id}`,
      data: {},
      dataType: 'json',
      success: (res) => {
          console.log(res);
          showDir(id, res);
      },
      error: () => {
          console.log('error!');
      }
    });
  };

  // 디렉토리 클릭
  const clickDir = function() {
    $contDir.find('.file').on('click', (e) => {
      const $currentTarget = $(e.currentTarget);
      const id = $currentTarget.data('id');
      getNodeData(id);
    });  
  };

  // 뒤로가기버튼
  $btnBack.on('click', () => {
    $txtDir.html();
    $contDir.clear();
    getRootData();
  });


  // 이미지 창 열기
  const showImg = function () {
    const $contImg = $contDir.find('.cont_img');

    $contImg.on('click', () => {
      // todo
      // 이미지 파일패스 입력받아서 아래 이미지 링크로 창 열기
      // 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/${node.filePath}'
    });
  };


  // 이미지창 닫기
  const hideImg = function() {
    const $contImg = $contDir.find('.cont_img'); // todo- 제대로 요소 잡기..

    $(document).on('click', function(e) {
      if($(e.currentTarget).closest('.cont_img').length === 0) {
        $contImg.hide();
      }
    });
      
    $(document).on('keydown', function(e) {
     if(e.keyCode === 27) { // ESC
       $contImg.hide();
      }
    });
  };

getRootData();
hideImg();  
});
