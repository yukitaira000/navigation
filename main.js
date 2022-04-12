const mainHeader = document.getElementById('header');
const rect = mainHeader.getBoundingClientRect();/* ブラウザの表示領域の相対位置を取得 */
const scrollTop = window.pageYOffset; /*ブラウザ上端を基準とした縦方向のページスクロール量を取得 */
const headerPosition = rect.top + scrollTop; /*headerの位置の絶対位置 */


window.addEventListener('scroll', function(){
  var scrollTop = document.documentElement.scrollTop;
  if(scrollTop > headerPosition){
    mainHeader.classList.add('is-fixed');
  } else {
    mainHeader.classList.remove('is-fixed');
  }
})
