var menuMobile = document.querySelector('.mobile-menu')
var menuItens = document.querySelector('.mobile-menu ul')
menuMobile.addEventListener('click',()=>{
    if(menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    }else{
        menuItens.style.display = 'block'
    }
})