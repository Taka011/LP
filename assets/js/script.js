'use strict'

// スムーススクロール
// headerの高さを取得し、headerHeightに代入
const headerHeight = document.querySelector('#header').offsetHeight;

//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {

    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();

    // クリックされたアンカータグのhref属性を取得
    const href = anchor.getAttribute('href');

    // href属性の#を取り除いた部分と一致するIDを取得
    const target = document.getElementById(href.replace('#', ''));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    //headerの高さを引いて、スクロール位置がヘッダーの下になるように調整します。
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo ({
        top: targetPosition,
        behavior: 'smooth'
    });
  });
});

// フェードインイベント
  let js = document.querySelectorAll('.js');
  
  js.forEach((fadeIn) => {
    let windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
      let offset =  fadeIn.getBoundingClientRect().top;
      let scroll = window.scrollY;

      if (scroll > offset - windowHeight + 500) {
          fadeIn.classList.add('fadeIn');
      }
    })
  })

  // ハンバーガーメニュークリックイベント
  function Menu() {

    const hamburger = document.querySelector('.hamburger');
    const mvList = document.querySelector('.mv__text__list');
    const list = document.querySelectorAll('.mv__text__list__item a');

    hamburger.addEventListener('click', ()=> {
      mvList.classList.toggle('active');
    })

    list.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        mvList.classList.remove('active');
      })
    })
  }
  
  Menu();

  // アコーディオンメニュー
  const faq = document.querySelectorAll('.js-ac');
  const dts = document.querySelectorAll('dt');
  
    function Toggle() {
      const content = this.nextElementSibling;
      this.classList.toggle('open');
      content.classList.toggle('open');
    }

    for (let i = 0; i < faq.length; i ++) {
      faq[i].addEventListener('click', Toggle);
    
  }