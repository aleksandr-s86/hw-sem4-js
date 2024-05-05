const dropdown = document.querySelectorAll('.dropdown-item');

dropdown.forEach(element => {
    element.classList.add('super-dropdown')

});
console.log(dropdown);

const btn = document.querySelector('.btn');
btn.classList.toggle('btn-secondary');
console.log(btn);

const menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');
console.log(menu);

const drop = document.querySelector('div.dropdown')
drop.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

const menubut = document.querySelector('#dropdownMenuButton');
menubut.setAttribute('id', 'superDropdown');
console.log(menubut);

const aria = document.querySelector('[aria-labelledby=dropdownMenuButton]');
aria.dataset.dd = 3;
console.log(aria);

const toggle = document.querySelector('.dropdown-toggle')

toggle.removeAttribute('type');
console.log(toggle);