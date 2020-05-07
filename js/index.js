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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("nav a")

nav.forEach((a, index) => a.textContent = siteContent.nav['nav-item-' + (index + 1)]);
console.log(nav)

Array.from(nav).map(a => a.style.color = 'green')

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent.cta.h1

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent.cta['img-src'])

let mainH4Top = document.querySelectorAll('.main-content .top-content .text-content h4');
mainH4Top[0].textContent = siteContent['main-content']['features-h4']
mainH4Top[1].textContent = siteContent['main-content']["about-h4"]

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mainH4Bot = document.querySelectorAll('.main-content .bottom-content .text-content h4');
mainH4Bot[0].textContent = siteContent['main-content']['services-h4']
mainH4Bot[1].textContent = siteContent['main-content']["product-h4"]
mainH4Bot[2].textContent = siteContent['main-content']["vision-h4"]

let mainTextTop = document.querySelectorAll('.main-content .top-content .text-content p');
mainTextTop[0].textContent = siteContent['main-content']['features-content']
mainTextTop[1].textContent = siteContent['main-content']["about-content"]

let mainTextBot = document.querySelectorAll('.main-content .bottom-content .text-content p');
mainTextBot[0].textContent = siteContent['main-content']['services-content']
mainTextBot[1].textContent = siteContent['main-content']["product-content"]
mainTextBot[2].textContent = siteContent['main-content']["vision-content"]

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact['contact-h4'];

let contactInf = document.querySelectorAll('.contact p')
contactInf[0].textContent = siteContent.contact['address']
contactInf[1].textContent = siteContent.contact['phone']
contactInf[2].textContent = siteContent.contact['email']

let footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright

