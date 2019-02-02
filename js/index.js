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

// Add Call to Action Image
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// Simplified selector function
let selectAll = tag => document.querySelectorAll(tag);
let selectOne = tag => document.querySelector(tag);
let createEle = tag => document.createElement(tag);

// NAV CONTENT
const navTag = selectOne('nav')
const navItems = selectAll('a');

navItems.forEach((item, i) => {
  const key = `nav-item-${i+1}`; // access unique nav content
  item.textContent = siteContent.nav[key];
  item.style.color = 'green';
  item.style.fontSize = '20px';
})

// Option A
// const newAnchorTag1 = createEle('a');
// const newAnchorTag2 = createEle('a');
//
// newAnchorTag1.setAttribute('href', '#');
// newAnchorTag2.setAttribute('href', '#');
//
// newAnchorTag1.textContent = 'Blog';
// newAnchorTag2.textContent = 'Other';
//
// navTag.appendChild(newAnchorTag1);
// navTag.appendChild(newAnchorTag2);

// Option B
// const createElementAndAppend = (tag, attribute, content, targetElement, color) => {
//   const newElement = createEle(tag);
//   newElement.setAttribute(attribute.type, attribute.value);
//   newElement.textContent = content;
//   newElement.style.color = color;
//   targetElement.appendChild(newElement);
// }
//
// createElementAndAppend('a', {type: 'href', value: '#'}, 'Blog', navTag, 'green');
// createElementAndAppend('a', {type: 'href', value: '#'}, 'Other', navTag, 'green');

// Option C - use a function that incorporates all of option A above
const createElementAndAppend = ({tag, attribute, content, targetElement, color, fontSize}) => {
  const newElement = createEle(tag);
  newElement.setAttribute(attribute.type, attribute.value);
  newElement.textContent = content;
  newElement.style.color = color;
  newElement.style.fontSize = fontSize;
  targetElement.appendChild(newElement);
}

createElementAndAppend({
  tag: 'a',
  attribute: {
    type: 'href',
    value: '#',
  },
  content: 'Blog',
  targetElement: navTag,
  color: 'green',
  fontSize: '20px',
});

createElementAndAppend({
  tag: 'a',
  attribute: {
    type: 'href',
    value: '#',
  },
  content: 'Other',
  targetElement: navTag,
  color: 'green',
  fontSize: '20px',
});


// Call to Action Section
const h1Tag = selectOne('h1');
const BtnTag = selectOne('button');
// const newDivTag = document.createElement("div"); // if left here outside
// of the forEach below, the new div tag would be
// overwritten at each pass and not get created for each string item

let h1Content = siteContent.cta.h1;
let btnContent = siteContent.cta.button;

let h1ContentArray = h1Content.split(' '); //convert string to an array ['Dom', 'is', 'awesome']

h1ContentArray.forEach((item) => {
  const newDivTag = createEle("div");
  newDivTag.textContent = item;
  h1Tag.appendChild(newDivTag);
})

BtnTag.textContent = btnContent;

// MAIN CONTENT
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let h4Tag = selectAll('h4');

// Option A
// h4Tag[0].textContent = siteContent['main-content']['features-h4'];
// h4Tag[1].textContent = siteContent['main-content']['about-h4'];
// h4Tag[2].textContent = siteContent['main-content']['services-h4'];
// h4Tag[3].textContent = siteContent['main-content']['product-h4'];
// h4Tag[4].textContent = siteContent['main-content']['vision-h4'];
// h4Tag[5].textContent = siteContent['contact']['contact-h4'];

// Option B
// const headingsMap = {
//   0: 'features-h4',
//   1: 'about-h4',
//   2: 'services-h4',
//   3: 'product-h4',
//   4: 'vision-h4',
//   5: 'contact-h4',
// }

// Option C
const headingsMap = {
  0: {
    section: 'main-content',
    title: 'features-h4',
  },
  1: {
    section: 'main-content',
    title: 'about-h4',
  },
  2: {
    section: 'main-content',
    title: 'services-h4',
  },
  3: {
    section: 'main-content',
    title: 'product-h4',
  },
  4: {
    section: 'main-content',
    title: 'vision-h4',
  },
  5: {
    section: 'contact',
    title: 'contact-h4',
  },
}

// Use with Option B
// h4Tag.forEach((item, i) => {
//   const headingTitle = headingsMap[i];
//   const section = i === 5 ? '': 'main-content';
//   item.textContent = siteContent[section][headingTitle];
// })

// Use with Option C
h4Tag.forEach((item, i) => {
  const { section, title } = headingsMap[i]; // destructuring
  item.textContent = siteContent[section][title];
})

// Add paragraph content
let pTag = selectAll('p');

const paragraphMap = {
  0: {
    section: 'main-content',
    paragraph: 'features-content',
  },
  1: {
    section: 'main-content',
    paragraph: 'about-content',
  },
  2: {
    section: 'main-content',
    paragraph: 'services-content',
  },
  3: {
    section: 'main-content',
    paragraph: 'product-content',
  },
  4: {
    section: 'main-content',
    paragraph: 'vision-content',
  },
  5: {
    section: 'contact',
    paragraph: 'address',
  },
  6: {
    section: 'contact',
    paragraph: 'phone',
  },
  7: {
    section: 'contact',
    paragraph: 'email',
  },
  8: {
    section: 'footer',
    paragraph: 'copyright',
  },
};

pTag.forEach((item, i) => {
  const { section, paragraph } = paragraphMap[i];
  item.textContent = siteContent[section][paragraph];
});
