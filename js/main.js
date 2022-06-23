let getTabsWhite = document.querySelector('.tabs-white');
let getTabsBeige = document.querySelector('.tabs-beige');
let setLang = document.querySelector('.lang-span');
let itroTitle = document.querySelector('.intro__title');
let siteSearch = document.querySelector('.site-search__container');

getTabsBeige.addEventListener('click', () => {
    getTabsWhite.classList.remove('tabs-white'),
    getTabsWhite.classList.add('tabs-white_active'),
    getTabsBeige.classList.remove('tabs-beige'),
    getTabsBeige.classList.add('tabs-beige_active');
});

getTabsWhite.addEventListener('click', () => {
    getTabsBeige.classList.remove('tabs-beige_active'),
    getTabsBeige.classList.add('tabs-beige'),
    getTabsWhite.classList.remove('tabs-white_active'),
    getTabsWhite.classList.add('tabs-white');
});

// ----------------fields---------------------
let numOfClicks = 0;
document.querySelectorAll('.select-field').forEach((selectField) => {
    selectField.addEventListener('click', () =>{
        //open field
        selectField.querySelector('.select-field_choise').classList.toggle('select-field_choise-active');
        selectField.classList.toggle('select-field_active');
        //close click not field
        document.addEventListener('click', function(event) {
            var isClickInside = selectField.contains(event.target);
            if (!isClickInside) {
                selectField.querySelector('.select-field_choise').classList.remove('select-field_choise-active');
                selectField.classList.remove('select-field_active');
            }
        });
        //find last field
        let selectFieldLast = document.querySelector('.select-field_last');

        if(selectField === selectFieldLast){
            document.querySelector('.select-item_type').classList.toggle('select-item_type-active');
            document.querySelector('.select-field_last').classList.toggle('select-field_last-active');
        }else{
            document.querySelector('.select-item_type').classList.remove('select-item_type-active');
            document.querySelector('.select-field_last').classList.remove('select-field_last-active');
        }
        //choise last field
        document.querySelectorAll('.select-item_type-item').forEach((item) => {
            item.addEventListener('click', () =>{
                let itemTypeP = item.querySelector('p').innerHTML;
                let itemTypePic = item.querySelector('img').src;
                document.querySelector('.select-item_type').classList.remove('select-item_type-active');
                document.querySelector('.select-field_last').classList.remove('select-field_last-active');
                let fieldLastSpan = document.querySelector('.select-field_last>span');
                fieldLastSpan.innerHTML = "";
                fieldLastSpan.insertAdjacentHTML('afterbegin', '<p class = "field-last_span">'+itemTypeP+'</p>');
                fieldLastSpan.insertAdjacentHTML('afterbegin', '<img class = "field-standart-pic" src = '+itemTypePic+' ,alt="image">');
                document.querySelector('.field-last_span br').remove();
            });
        });

        selectField.querySelectorAll('.select-field_choise>p').forEach((item) => {
            item.addEventListener('click', () => {
                let setFieldText = item.textContent;
                selectField.querySelector('.select-field>span').textContent = setFieldText;
            });
        });
    });
});

//calculate shipping 

document.querySelector('.select-item_package').addEventListener('click', () => {
    document.querySelector('.intro__delivery-calculating').classList.toggle('intro__delivery-calculating_active');
});

//-----------------fields end---------------------
document.querySelector('.language').addEventListener('click', () => {
    setLang.classList.toggle('lang-span_active');

    if (setLang.classList.contains('lang-span_active')){
        document.querySelector('.language_choise').style.display = "block";
    }else{
        document.querySelector('.language_choise').style.display = "none";
    };
});

document.querySelector('.header__search').addEventListener('click', () => {
    siteSearch.style.display = "block";
});

document.querySelector('.site-search_closed').addEventListener('click', () => {
    siteSearch.style.display = "none";    
});

//---------------first and second click---------------
// ++numOfClicks
// if(numOfClicks % 2 !== 0) {
//     console.log("first")
// }else{
//     console.log("second")
// }