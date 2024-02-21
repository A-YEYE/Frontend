/*
const buttonElement = document.querySelector('.button');

buttonElement.addEventListener('click', (event) => {
    let inputClass = event.target.id;
    console.log(inputClass);
});
*/

const allBtn = document.querySelector('#all');
const breakfastBtn = document.querySelector('#breakfast');
const lunchBtn = document.querySelector('#lunch');

allBtn.addEventListener('click', (event) => {
    let btnId = event.target.id;
    getData(btnId);
});

breakfastBtn.addEventListener('click', (event) => {
    let btnId = event.target.id;
    getData(btnId);
});

lunchBtn.addEventListener('click', (event) => {
    let btnId = event.target.id;
    getData(btnId);
});

function getData(btnId){
    const breakfastElement =document.querySelectorAll('.breakfast');
    const lunchElement =document.querySelectorAll('.lunch');

    if(btnId === 'all'){
        for(const element of breakfastElement){
            element.style.display = 'block';
        }
        for(const element of lunchElement){
            element.style.display = 'block';
        }
    }
    else if(btnId === 'breakfast'){
        for(const element of breakfastElement){
            element.style.display = 'block';
        }
        for(const element of lunchElement){
            element.style.display = 'none';
        }
    }
    else if(btnId === 'lunch'){
        for(const element of breakfastElement){
            element.style.display = 'none';
        }
        for(const element of lunchElement){
            element.style.display = 'block';
        }
    }
}