import { closeWindow } from "./modalWindow";
import { openWindow } from "./modalWindow";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId){
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindpostData(item);
    });

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            
            const formData = new FormData(form);

           const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
           postData('http://localhost:3000/requests', json)
           .then(data=>{
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch(()=>{
                showThanksModal(message.failure);
            }).finally(()=>{
                form.reset();
            });

            


        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openWindow('.modal',modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title"><center>${message}</center></div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(()=>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeWindow('.modal');
        },5000);
    }

}

export default forms;