import eCommerceImg from './img/project-img/e-commerce.png';
import landingPageImg from './img/project-img/landing-page.png';
import weatherImg from './img/project-img/weather.png';

const projectData = [
    { 
        id: 1,
        imgSrc: eCommerceImg,
        title: "E-Commerce App",
        description: "An e-commerce application that mimics the modern shopping experience.",
        codeLink: "https://github.com/pn-code/e-commerce-app/tree/main",
        livePreview: "https://pn-code.github.io/e-commerce-app/",
    },
    { 
        id: 2,
        imgSrc: landingPageImg,
        title: "Landing Page",
        description: "A basic landing page that will serve to generate and convert leads.",
        codeLink: "https://github.com/pn-code/landing-page",
        livePreview: "https://pn-code.github.io/landing-page/",
    },
    { 
        id: 3,
        imgSrc: weatherImg,
        title: "Weather",
        description: "A weather app that utilizes an API to fetch and return the weather.",
        codeLink: "https://github.com/pn-code/weather-app",
        livePreview: "https://pn-code.github.io/weather-app/",
    },
]

export default projectData;