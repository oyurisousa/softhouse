var menuMobile = document.querySelector('.mobile-menu')
var menuItens = document.querySelector('.mobile-menu ul')
menuMobile.addEventListener('click',()=>{
    if(menuItens.style.display == 'none'){
        menuItens.style.display = 'block'
    }else{
        menuItens.style.display = 'none'
    }
})