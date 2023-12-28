
window.addEventListener('resize',function(){
    if(window.innerWidth < 1000){
        document.querySelector('.sidebar').style.display='none'
        document.getElementById('menu_fechado').style.display='block'
        document.getElementById('menu_fechado').style.left='3vmin';
        document.getElementById('menu_fechado').style.scale="1"
    }else if(window.innerWidth >= 1000){
        document.querySelector('.sidebar').style.display='block'
        document.getElementById('menu_fechado').style.display='none'
    }
})

let value = true;
function Click(){
    if(value === true){
        document.querySelector('.sidebar').style.display='block';
        document.getElementById('menu_fechado').style.scale="-1"
    }
}

document.addEventListener('click',function(event){
    const menu = document.querySelector('.sidebar').contains(event.target);
    const fecharMenu = document.getElementById('menu_fechado').contains(event.target)
    if(!fecharMenu && !menu){
        document.getElementById('menu_fechado').style.left='3vmin';
        document.querySelector('.sidebar').style.display='none'
        document.getElementById('menu_fechado').style.scale="1"   
    }
})


document.getElementById('menu_fechado').addEventListener('click',Click)

