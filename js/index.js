const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll("nav a");

// links.forEach ( text => {
//   siteContent
// })
// console.log (links[0])
// console.log (siteContent["nav"])
// console.log (siteContent[`nav`][`nav-item-${1}`])

for (let i = 0; i < links.length; i++){
  links[i].textContent = siteContent[`nav`][`nav-item-${i + 1}`];
};

// console.log (siteContent[`cta`]);

const cta = document.querySelector(".cta .cta-text h1");

cta.innerHTML = siteContent['cta']['h1'];

// console.log (cta.textContent)

const ctaBtn = document.querySelector(".cta .cta-text button");

ctaBtn.innerHTML = siteContent['cta']['button'];

const ctaImg = document.querySelector(".cta img");

// console.log (siteContent['cta']['img-src'])
// console.log (ctaImg)
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const h4List = document.querySelectorAll("h4");

// console.log (h4list[0])

h4List[0].innerHTML = siteContent['main-content']['features-h4'];
h4List[1].innerHTML = siteContent['main-content']['about-h4'];
h4List[2].innerHTML = siteContent['main-content']['services-h4'];
h4List[3].innerHTML = siteContent['main-content']['product-h4'];
h4List[4].innerHTML = siteContent['main-content']['vision-h4'];
h4List[5].innerHTML = siteContent['contact']['contact-h4'];

const pList = document.querySelectorAll('p');

// console.log (pList)

pList[0].innerHTML = siteContent['main-content']['features-content'];
pList[1].innerHTML = siteContent['main-content']['about-content'];
pList[2].innerHTML = siteContent['main-content']['services-content'];
pList[3].innerHTML = siteContent['main-content']['product-content'];
pList[4].innerHTML = siteContent['main-content']['vision-content'];
pList[5].innerHTML = siteContent['contact']['address'];
pList[6].innerHTML = siteContent['contact']['phone'];
pList[7].innerHTML = siteContent['contact']['email'];
pList[8].innerHTML = siteContent['footer']['copyright'];

const midImg = document.querySelector(".middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const greenNav = document.querySelectorAll('nav a');

greenNav.forEach(item => {
  item.style.color = 'green'
})

const newNav1 = document.createElement('a')
newNav1.innerHTML = 'Test'
newNav1.href = '#'
newNav1.style.color = 'green'
const newNav2 = document.createElement('a')
newNav2.innerHTML = 'Begin'
newNav2.href = '#'
newNav2.style.color = 'green'
const parentElement = document.querySelector('nav')

parentElement.append(newNav1)
parentElement.prepend(newNav2)

let testBtn = document.querySelector('button')

testBtn.addEventListener('click', (event) => {
  ctaImg.toggleAttribute('hidden');
})