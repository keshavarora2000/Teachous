const front = document.querySelector('.container');
const navi = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    const print = this.pageYOffset > front.scrollHeight;
    
    if(print != false) {
        navi.classList.add('rolled');
        front.classList.remove('container');
    }else {
        navi.classList.remove('rolled');
        front.classList.add('container');
    }
});