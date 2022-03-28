const mainHeader = document.getElementById('header');
// ヘッダーを取得する

window.addEventListener('scroll', function(){
  const scrollPosition = document.documentElement.scrollTop;
  // スクロールされるピクセル数を取得する

  if (scrollPosition > 1007) {
    // 1007ピクセルスクロールすると画面上部にメニューがくるため、1007ピクセル以上スクロールした場合という条件にする

    mainHeader.classList.add('is-fixed');
    // #headerにis-foxedクラスをつける

  } else {
    mainHeader.classList.remove('is-fixed');
    // そうではない場合、is-fixedクラスを外す
  }
})