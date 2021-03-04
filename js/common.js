// header
const menuBtn = document.querySelector('.btn-menu');
const btnIcon = document.querySelector('.btn-menu span');
const menuItem = document.querySelector('header nav');
const depth1s = document.querySelectorAll('header .depth1 > a');

menuBtn.addEventListener('click', function() {
    btnIcon.classList.toggle('icon-close');
    menuItem.classList.toggle('active');
});

for (const depth1 of depth1s) {
    depth1.addEventListener('click', function(e) {
        let parent = this.parentNode;
        parent.classList.toggle('active');
    });
}