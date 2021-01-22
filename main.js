const btn = document.querySelector('.button');
const btnCancel = document.querySelector('.cancel');
const Modal  = document.querySelector('.modal-overlay');

btn.addEventListener('click',function(){
    Modal.classList.add('active');
})
btnCancel.addEventListener('click', function(){
    Modal.classList.remove('active');
})