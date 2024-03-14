
const projects = [
    {
        title: "Sistem Pakar Anak",
        image: "assets/img/6.png",
        description: "Web Developer"
    },
    {
        title: "Buku Tamu",
        image: "assets/img/7.png",
        description: "Web Developer"
    },
    {
        title: "Destinasi Wisata",
        image: "assets/img/10.png",
        description: "Web Developer"
    },
    {
        title: "Kopi Kuy",
        image: "assets/img/8.png",
        description: "Web Developer"
    },
    {
        title: "Aditya Motors",
        image: "assets/img/9.png",
        description: "Web Developer"
    }
];

const gallery = document.getElementById('gallery');

projects.forEach(project => {
    const projectCard = `
    <div class="col-md-4 mb-4">
        <div class="card" style="width: 18rem;">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
            </div>
        </div>
    </div>
    `;
    gallery.innerHTML += projectCard;
});
