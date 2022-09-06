

bird.onload = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      bird.style.left = timePassed / 5 + 'px';

    //   if (timePassed > 6500) clearInterval(timer);
    if (timePassed > 6610) {
        start = Date.now();
        bird.style.right = 0;
    };

    }, 20);
  }


bird2.onload = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      bird2.style.left = '-'+timePassed / 5 + 'px';

    //   if (timePassed > 6500) clearInterval(timer);
    if (timePassed > 6610) {
        start = Date.now();
        bird2.style.left = 0;
    }

    }, 20);
  }
let container = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function(e) {
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate('+ X/30 + 'px, '+ Y/30 +'px)';
}

window.addEventListener('scroll', function () {
  let value = window.pageYOffset;
  capung.style.marginRight = value * 4 + 'px';
  lebah.style.marginLeft = value * 4 + 'px';
  // capung.style.marginTop = value * 1.5 + 'px';
  console.log(value);
})