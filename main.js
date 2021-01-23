const btn = document.querySelector('.button');
const btnCancel = document.querySelector('.cancel');
const Modal  = document.querySelector('.modal-overlay');
const darkButton = document.querySelector('.dark-mode');
const header = document.querySelector('header');

btn.addEventListener('click',function(){
    Modal.classList.add('active');
})
btnCancel.addEventListener('click', function(){
    Modal.classList.remove('active');
})
darkButton.addEventListener('click',function(){
    const element = document.body;
    element.classList.toggle('dark-background');
    header.classList.toggle('dark-background');
})