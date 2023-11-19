window.addEventListener("scroll",()=>{
    if(window.scrollY < 650){
        document.querySelector(".Home h1").style.marginTop = `${window.scrollY }px`
    }else return
})