
function closeWindow(modalSelector){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function openWindow(modalSelector,modalTimerId){
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(modalTimerId){
        clearInterval(modalTimerId);    
    }
    
} 

function modalWindow(triggerSelector, modalSelector, modalTimerId){

    const btnOpenWindow = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);
          
    btnOpenWindow.forEach(btn =>{
        btn.addEventListener('click',()=> openWindow(modalSelector,modalTimerId));
    });

    modalWindow.addEventListener('click', (event)=>{
        if(event.target === modalWindow || event.target.getAttribute('data-close') == ''){
            closeWindow(modalSelector);
        } 
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code === "Escape"){
            closeWindow(modalSelector);
        }
    });

    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openWindow(modalSelector,modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modalWindow;
export {closeWindow};
export {openWindow};