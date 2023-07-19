const closeNav = document.querySelector('.close-nav')
const hamburger = document.querySelector('.hamburger')
const navLinks=document.querySelector('.nav-links')
const drpdwnNav=document.querySelector('.drpdwn-nav1')
const drpdwnNav1=document.querySelector('.drpdwn-nav0')
const dropdownCompany=document.querySelector('.drpdwn-content2')
const dropdownFeature=document.querySelector('.drpdwn-content')
const snapHead= document.querySelector('.snap-head')

hamburger.addEventListener('click', openNav)
closeNav.addEventListener('click', closeNavBar)
drpdwnNav.addEventListener('click', dropMore)
drpdwnNav1.addEventListener('click', dropMore2)

function openNav(){
    hamburger.style.display ='none'
    closeNav.style.display='block'
    navLinks.classList.add('open-mobile-nav')
    
}
function closeNavBar(){
    
    closeNav.style.display='none'
    hamburger.style.display ='block'
    navLinks.classList.remove('open-mobile-nav')
    console.log(4)
}
function dropMore(e){
    e.preventDefault()
    dropdownFeature.classList.toggle('dropdownFeat')
    dropdownCompany.classList.remove('dropdownFeat')
    snapHead.style.backdropFilter='3px(blur)'
    // dropdownFeature.style.display ='block'
}
function dropMore2(e){
    e.preventDefault()
    dropdownCompany.classList.toggle('dropdownFeat')
    dropdownFeature.classList.remove('dropdownFeat') 
  


}


