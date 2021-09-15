document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('#nav-header');
    const hero = document.querySelector('#hero');
    const calendar = document.querySelector('#calendar-head');
    const calendar_title = document.querySelectorAll('.calendar-title');
    const nav_position = nav.offsetTop;
    const rwFullText = document.querySelectorAll('.rw-fullText');


    for(i=0; i <rwFullText.length; i++){
        sideUp(i);
    }
    function sideUp(index){
        rwFullText[index].addEventListener('mouseover', function(){
            rwFullText[index].children[0].style.marginTop ='0';
        });
         
        rwFullText[index].addEventListener('mouseleave', function(){
            rwFullText[index].children[0].style.marginTop ='50rem';
        });
    } 
    
    fixedNav();
    setCalendarTitle();
    showCalendar();





    function fixedNav(){
        window.addEventListener('scroll', function(){
            if(window.scrollY > nav_position ){
                hero.style.setProperty('margin-top',nav.offsetHeight  + 'px');
                nav.classList.add('fixed');
            }else{
                nav.classList.remove('fixed');
                hero.style.setProperty('margin-top', '0');
            }
        });
    }



    function showCalendar(){
        var date = new Date();
        for(i=0; i<calendar_title.length; i++){
            calendar_title[i].addEventListener('click', function(e){
    
                if(calendar.getAttribute('hidden') != null){
                    for(i= 0; i<7; i++){
                        console.log('tiene hidden');
                        document.querySelector('#day-' + i).setAttribute('hidden' ,'');
                    }
                    calendar.removeAttribute('hidden');
                }else{
                    for(i= 0; i<7; i++){
                        console.log('no tiene hidden');
                        document.querySelector('#day-' + i).removeAttribute('hidden');
                        if(date.getDay() == i){
                            document.querySelector('#day-' + i).classList.add('selectDay');
                        }
                    }
                    calendar.setAttribute('hidden','');
                }
        
            });
           
        }
    }

    function setCalendarTitle(){
        var date = new Date();
        
        for(i= 0; i<7; i++){
            if(date.getDay() == i){
                calendar.firstElementChild.innerHTML = document.querySelector('#day-' + i).firstElementChild.innerHTML + ' Today ' + document.querySelector('#day-' + i).children[2].innerText;
            }
        }

    }



});