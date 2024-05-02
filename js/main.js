document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.header__hamburger');
  const headerDown = document.querySelector('.header__down');

  hamburger.addEventListener('click', function() {
    headerDown.classList.toggle('header__down--open');
  });
});

document.querySelector(".header__hamburger").addEventListener("click", function() {
  this.classList.toggle('active');
});
  

document.addEventListener("DOMContentLoaded", function() {
  const pinBoxes = document.querySelectorAll('.pin-box');

  pinBoxes.forEach(pinBox => {
    pinBox.addEventListener('mouseenter', function() {
      const bubble = this.querySelector('.pin__bubble');
      bubble.style.display = 'block';
    });

    pinBox.addEventListener('mouseleave', function() {
      const bubble = this.querySelector('.pin__bubble');
      bubble.style.display = 'none';
    });
  });
});


/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 1500,
          easing: 'ease',
          fill: 'forwards',
        }
      );

      // 一度ふわっと表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});


/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFadeInDown = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          translate: ['0 -4rem', 0],
        },
        {
          duration: 800,
          easing: 'ease',
          fill: 'forwards',
          delay: 1000,
        }
      );

      // 一度ふわっと表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeInDownObserver = new IntersectionObserver(animateFadeInDown);

// .fadeInDownを監視するよう指示
const fadeInDownElements = document.querySelectorAll('.fadeInDown');
fadeInDownElements.forEach((fadeInDownElement) => {
  fadeInDownObserver.observe(fadeInDownElement);
});




/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFadeInUp = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          transform: ['translateY(4rem)', 'translateY(0)'],
        },
        {
          duration: 800,
          easing: 'ease',
          fill: 'forwards',
          delay: 1000,
        }
      );

      // 一度ふわっと表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeInUpObserver = new IntersectionObserver(animateFadeInUp);

// .fadeInUpを監視するよう指示
const fadeInUpElements = document.querySelectorAll('.fadeInUp');
fadeInUpElements.forEach((fadeInUpElement) => {
  fadeInUpObserver.observe(fadeInUpElement);
});
