const mainHeader = document.getElementById('header');
// ヘッダーを取得する
const keyvisualHeight = document.getElementById('keyvisual').clientHeight;

window.addEventListener('scroll', function(){
  const scrollPosition = document.documentElement.scrollTop;
  // スクロールされるピクセル数を取得する

  if (scrollPosition > keyvisualHeight) {
    // keyvisualの高さ分スクロールした場合という条件にする

    mainHeader.classList.add('is-fixed');
    // #headerにis-foxedクラスをつける

  } else {
    mainHeader.classList.remove('is-fixed');
    // そうではない場合、is-fixedクラスを外す
  }
})