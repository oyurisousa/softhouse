fetch('autor.json')
    .then(T => T.json())
    .then(console.log(t))
var menuMobile = document.querySelector('.mobile-menu')
var menuItens = document.querySelector('.mobile-menu ul')
var author = document.querySelector('.sobre-autor')
var bullets = document.querySelectorAll('.slider-bullets span')
var json = JSON.parse('autor.json')
console.log(json)
menuMobile.addEventListener('click',()=>{
    if(menuItens.style.display == 'block'){
        menuItens.style.display = 'none'
    }else{
        menuItens.style.display = 'block'
    }
})


console.log(bullets)
for(let i = 0; i < bullets.length; i++){
    bullets[i].addEventListener('click',()=>{
        author.innerHTML = `
            <div class="sobre-autor">
                <div class="titulo-autor">
                    <div class="wraper-titulo-autor">
                        <h2>Yuri Sousa</h2>
                        <p>Programador</p>
                    </div><!--wraper-titulo-autor-->
                    <div class="img-autor"></div>
                </div><!--titulo-autor-->
                <div class="texto-autor">
                <p>Proin sagittis, risus ut tempus condimentum, urna est volutpat augue, a placerat ligula magna tincidunt sapien.
                Ut tempus pulvinar ante, at euismod orci.</p>
                </div><!--texto-autor-->
            </div><!--sobre-autor-->
        `
    })
}
