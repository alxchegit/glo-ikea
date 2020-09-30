'use strict';

const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
// const overlay = document.querySelector('.overlay');
const overlay = document.createElement('div');
		overlay.classList.add('overlay');
		document.body.insertAdjacentElement('beforeend', overlay);

const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const btnSubCatReturn = document.querySelector('button.btn-return');
const subCatalogHeader = document.querySelector('.subcatalog-header');


const openMenu = () => {
	catalog.classList.add('open');
	overlay.classList.add('active');	 
};

const closeMenu = () => {
	catalog.classList.remove('open');
	overlay.classList.remove('active');
	closeSubMenu();
};

const openSubMenu = event => {
	event.preventDefault();
	const itemList = event.target.closest('.catalog-list__item');
	if(itemList) {
		subCatalogHeader.innerHTML = itemList.innerHTML;
		subCatalog.classList.add('subopen');
	}
};

const closeSubMenu = () =>{
	subCatalog.classList.remove('subopen');
};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);
btnSubCatReturn.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', (event) => {
	if(event.code === "Escape"){
		closeMenu(); 
	} 
})
