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
    "h1": "DOM Is Awesome",
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

// Add call to action image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// Simplified selector function
let selectAll = tag => document.querySelectorAll(tag);
let selectOne = tag => document.querySelector(tag);

// Add nav content
const navItems = selectAll('a');
navItems[0].textContent = 'Services';

navItems.forEach((item, i) => {
  const key = `nav-item-${i+1}`; // access unique nav content
  item.textContent = siteContent.nav[key];
})

// Call to action section
const h1Tag = selectOne('h1');
const BtnTag = selectOne('button');
// const newDivTag = document.createElement("div"); // if left here outside
// of the forEach below, the new div tag would be
// overwritten at each pass and not get created for each string item

let h1Content = siteContent.cta.h1;
let btnContent = siteContent.cta.button;

let h1ContentArray = h1Content.split(' '); //convert string to an array ['Dom', 'is', 'awesome']

h1ContentArray.forEach((item) => {
  const newDivTag = document.createElement("div");
  newDivTag.textContent = item;
  h1Tag.appendChild(newDivTag);
})

BtnTag.textContent = btnContent;

// Add main content
