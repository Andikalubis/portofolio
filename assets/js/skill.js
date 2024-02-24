// Data skills
const skills = [
    { name: "HTML", image: "img/html.png" },
    { name: "CSS", image: "img/css.png" },
    { name: "PHP", image: "img/php.png" },
    { name: "JavaScript", image: "img/js.png" },
    { name: "Bootstrap", image: "img/bs.png" },
    { name: "Codeigniter", image: "img/codeigniter.png" },
    { name: "MySQL", image: "img/mysql.png" },
    { name: "Adobe Ilustrator", image: "img/ai.png" },
    { name: "Figma", image: "img/figma.png" },
    { name: "Canva", image: "img/canva.png" }
];

// Memanggil data dan membuat elemen HTML untuk setiap skill
const skillContainer = document.querySelector('.contentInteres');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('interes');

    const imageElement = document.createElement('img');
    imageElement.src = skill.image;
    imageElement.alt = skill.name;

    const spanElement = document.createElement('span');
    spanElement.textContent = skill.name;

    skillElement.appendChild(imageElement);
    skillElement.appendChild(spanElement);

    skillContainer.appendChild(skillElement);
});
