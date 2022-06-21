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
                document.addEventListener('click', function(event) {
                    var isClickInside = selectField.contains(event.target);
                    if (!isClickInside) {
                        document.querySelector('.select-item_type').classList.remove('select-item_type-active');
                        document.querySelector('.select-field_last').classList.remove('select-field_last-active');
                    }
                });
            });
        });
        //choise item
        selectField.querySelectorAll('.select-field_choise>p').forEach((item) => {
            item.addEventListener('click', () => {
                let setFieldText = item.textContent;
                
                selectField.querySelector('.select-field>span').innerHTML = setFieldText;
            });
        });
    });
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




// let arrow = document.querySelectorAll('.field-arrow');
// let setFieldLast = document.querySelector('.select-field_last');
// setFieldLast.addEventListener('click', () => {
//     arrow[2].classList.toggle('field-arrow_active');
//     setFieldLast.classList.toggle('select-field_last-active');
//     if (setFieldLast.classList.contains('select-field_last-active')){
//         document.querySelector('.select-item_type').style.display = "flex";
//     }else{
//         document.querySelector('.select-item_type').style.display = "none";
//     };
// });


// //-----------------departure type-----------------
// document.querySelectorAll('.select-item_type-item').forEach((item) => {
//     item.addEventListener('click', () => {
        // let itemTypeP = item.querySelector('p').innerHTML;
        // let itemTypePic = item.querySelector('img').src;//search element
        // document.querySelector('.select-item_type').classList.toggle('select-item_type-active');
//         arrow[2].classList.toggle('field-arrow_active');

//         setFieldLast.classList.remove('select-field_last-active');

//         let fieldLastSpan = document.querySelector('.select-field_last>span');
//         fieldLastSpan.innerHTML = "";
//         fieldLastSpan.insertAdjacentHTML('afterbegin', '<p class = "field-last_span">'+itemTypeP+'</p>');
//         fieldLastSpan.insertAdjacentHTML('afterbegin', '<img class = "field-standart-pic" src = '+itemTypePic+' ,alt="image">');
//         document.querySelector('.field-last_span br').remove();
//     });
// });
// -----------------departure type end-----------------
// let selectItemType = document.querySelectorAll('.select-item_type-item');
// selectItemType[2].addEventListener('click', () =>{
//         document.querySelector('.select-item_type').style.display = "none";
//         arrow[2].classList.toggle('field-arrow_active');
//         setFieldLast.classList.toggle('select-field_last-active');
//     });

// document.querySelector('.select-item_package').addEventListener('click', () => {
//     document.querySelector('.select-item_type').style.display = "none";
//     arrow[2].classList.toggle('field-arrow_active');
//     setFieldLast.classList.toggle('select-field_last-active');
    // let fieldLastSpan = document.querySelector('.select-field_last>span');
    // fieldLastSpan.innerHTML = "Посилка";
    // fieldLastSpan.style.cssText = `
    // font-weight: 700;
    // font-size: 18px;
    // margin-left: 90px;
    // line-height: 22px;`;
    // fieldLastSpan.insertAdjacentHTML('afterbegin', '<img class = "field-standart-pic" src="./image/select-3sm.png" alt="image">');
    // let fieldLastSpanPic = document.querySelector('.field-standart-pic');
    // fieldLastSpanPic.style.cssText = `
    // position: absolute;
    // left: 22px;
    // top: 50%;
    // transform: translateY(-50%);`;
// });

// -----------------fields end-------------------