const indicator=document.querySelector('.indicator');
const body=document.querySelector('.body');
const socialCards=document.querySelectorAll('.socials-main')
const p=document.querySelectorAll('p')
const span=document.querySelectorAll('span')
const h1=document.querySelector('h1')
const overview=document.querySelectorAll('.overview-card')
const darkLight=document.querySelector('.dark-light-text')

indicator.addEventListener('click',(e)=>{
 e.target.classList.toggle('indicatortoggle')
 document.body.classList.toggle('dark')
 socialCards.forEach(item=>{
    item.classList.toggle('socials')
 })
p.forEach(item=>{
    item.classList.toggle('white')
})
span.forEach(item=>{
    item.classList.toggle('white')
})
h1.classList.toggle('white')
overview.forEach(item=>{
    item.classList.toggle('over')
})
if(darkLight.innerHTML==="Darck mode"){
    darkLight.innerHTML="Light mode"
}else{
    darkLight.innerHTML="Darck mode"
}

 
})