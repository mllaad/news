//  SETUP TIME...
setInterval(time, 1000)
function time() {
    const date = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// DAY,  MONTH,  MONTH,  YEAR
    const time = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}th, ${date.getFullYear()}`
// CLOCK
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = 'AM'
    if(h === 0) {
        h = 12
    }
    if(h > 12) {
        h = h - 12
        session = 'PM'
    }
    h < 10 ? h = '0' + h : h
    m < 10 ? m = '0' + m : m
    s < 10 ? s = '0' + s : s
    const clock = `${h}:${m}:${s} ${session}`
// DOM ELEMENTS
    const dateAlph = document.getElementById('date_alpha')
    const dateNum = document.getElementById('date_num')
    dateAlph.textContent = time
    dateNum.textContent = clock
}
// SETUP DROPDOWN ...
const navbar = document.querySelector('.navbar__option').children
let navbars = [] 
for(let i = 0; i < navbar.length; i ++) {
    navbars.push(navbar[i])
}
const economy = document.querySelector('.list__advanced-economy')
const health = document.querySelector('.list__advanced-health')
const world = document.querySelector('.list__advanced-world')
 const clas = economy
 console.log(economy)
navbars.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        economy.classList.remove('show')
        health.classList.remove('show')
        world.classList.remove('show')
        if(e.target.classList.value === 'option__world') {
            world.classList.add('show')
        } 
        else if (e.target.classList.value === 'optiont__health') {
            health.classList.add('show')
        }
        else if (e.target.classList.value === 'option__economy') {
            economy.classList.add('show')
        } else {
            return
        }
    })
})
window.addEventListener('click', function (e) {
    economy.classList.remove('show')
    health.classList.remove('show')
    world.classList.remove('show')
})
// SETUP SWEEPER TAGS...
let introMainTags = document.querySelector('.intro-main__tags')
let currentLocation = 1250
sweeperTags ()

function sweeperTags () {
    if (currentLocation === -2500) {
        currentLocation = 1250
        currentLocation = currentLocation - 2;
        introMainTags.style.marginLeft = currentLocation
    } else {
        currentLocation = currentLocation - 2;
        introMainTags.style.marginLeft = currentLocation
    }
requestAnimationFrame(sweeperTags)
}


const firstImgDom = document.querySelector('.main__swiper') // <---- the first one!
const imageAllDom = document.querySelectorAll('.main__swiper') // <----- all
const size = imageAllDom[0].clientWidth;
const leftArrow = document.querySelector('.main__swiper-arrowleft')
const rightArrow = document.querySelector('.main__swiper-arrowright')
//////////



let imgs = []
for(let i = 0; i < imageAllDom.length; i++) {
    imgs.push(imageAllDom[i])
}
let counter = 0
//  setInterval(sweiper, 4000)
function sweiper () {
    counter ++
    imgs.forEach((img) => {
        img.style.transition = 'transform 0.5s ease-in-out'
        img.style.transform = 'translateX(' + (-size * counter) + 'px)'
        console.log('ok')
    })  
}


rightArrow.addEventListener('click', () => {
    counter++
    imgs.forEach((img) => {
        img.style.transition = 'transform 0.5s ease-in-out'
        img.style.transform = 'translateX(' + (-size * counter) + 'px)'
    })  
    console.log(counter)
})
leftArrow.addEventListener('click', () => {
    counter--
    imgs.forEach((img) => {
        img.style.transition = 'transform 0.5s ease-in-out' 
        img.style.transform = 'translateX(' + (-size * counter) + 'px)'
        console.log(counter)
    })
})
firstImgDom.addEventListener('transitionend', () => {
    if(imgs[counter].id === 'last') {
        firstImgDom.style.transition = 'none'
        counter = imgs.length - 5
    }
    else if (imgs[counter].id === 'first') {
        firstImgDom.style.transition = 'none'
        counter = imgs.length - 1
    }

})
// SIDE BAR TAPS
const sidebarTabs = document.querySelector('.sidebar__tabs').children
let tabs = [] 
for (let i = 0; i < sidebarTabs.length; i++) {
    tabs.push(sidebarTabs[i])
}

const sliderContent = document.querySelectorAll('.slider__content')
let tabsContent = []
for (let i = 0; i < sliderContent.length; i++) {
    tabsContent.push(sliderContent[i])
}

tabs.forEach((tab) => tab.addEventListener('click', (current) => {

    const related = document.getElementById(`slider__content--${current.target.id}`)

    tabs.forEach((el) => {
        el.classList.remove('tabs__current')
    })
    tabsContent.forEach((el) => {
        el.classList.add('hide')
    })

    current.target.classList.add('tabs__current')
    related.classList.remove('hide')
}))