const productContaineers = [...document.querySelectorAll('.product_container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContaineers.forEach((item, i) => {
    let containeerDimensions = item.getBoundingClientRect();
    let containeerWidth = containeerDimensions.width;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containeerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containeerWidth;
    })

})