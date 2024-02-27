const techStack = [
    { name: 'HTML', imgSrc: 'assets/img/html.png' },
    { name: 'CSS', imgSrc: 'assets/img/css.png' },
    { name: 'PHP', imgSrc: 'assets/img/php.png' },
    { name: 'JavaScript', imgSrc: 'assets/img/js.png' },
    { name: 'Bootstrap', imgSrc: 'assets/img/bs.png' },
    { name: 'Codeigniter', imgSrc: 'assets/img/codeigniter.png' },
    { name: 'MySQL', imgSrc: 'assets/img/mysql.png' },
    { name: 'Adobe Ilustrator', imgSrc: 'assets/img/ai.png' },
    { name: 'Figma', imgSrc: 'assets/img/figma.png' }
];


const contentInteres = document.querySelector('.contentInteres');

techStack.forEach(item => {
    const interesDiv = document.createElement('div');
    interesDiv.classList.add('interes');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.name;

    const span = document.createElement('span');
    span.textContent = item.name;

    interesDiv.appendChild(img);
    interesDiv.appendChild(span);

    contentInteres.appendChild(interesDiv);
});