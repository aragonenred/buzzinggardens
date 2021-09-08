document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector('#nav-header');
    const hero = document.querySelector('#hero');
    const poso = nav.offsetTop;


    window.addEventListener('scroll', function(){
        altura = nav.offsetHeight;
        console.log('altura: ' + altura + " scrol: " + window.scrollY + 'Posision:' + nav.offsetTop);
        if(window.scrollY > poso ){
            altura = nav.offsetHeight;
            //console.log('altura: ' + altura + " scrol: " + window.scrollY);
            hero.style.setProperty('margin-top',altura  + 'px');
            nav.classList.add('fixed');
        }else{
            nav.classList.remove('fixed');
            hero.style.setProperty('margin-top', '0');
        }

    })



});