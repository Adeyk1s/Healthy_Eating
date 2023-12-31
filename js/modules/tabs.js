//Табы
function tabs(tabsSelector,tabsContentSelector,tabsParentSelector,activClass){
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
        });
    
        tabs.forEach(item=>{
            item.classList.remove(activClass);
        });
    }
    
    function showTabContent(i=0){
        tabsContent[i].style.display='block';
        tabs[i].classList.add(activClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.substring(1, tabsSelector.length))){
            tabs.forEach((item,i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;