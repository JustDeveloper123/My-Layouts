// Navbar on click
let links = document.querySelectorAll('.go-to ul li a'),
    sections = document.querySelectorAll('section');

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let elmId = link.getAttribute('href'),
            section = document.querySelector(`${elmId}`);

        links.forEach((i) => {
            i.classList.remove('_select');
        });
        link.classList.add('_select');

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}


// Navbar on scroll
function setActiveLink() {
    let windowCenter = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        let sectionCenter = section.offsetTop + section.offsetHeight / 2,
            link = links[index];

        if (windowCenter + 45 > sectionCenter) {
            links.forEach((link) => {
                link.classList.remove('_select');
            });
            link.classList.add('_select');
        }
    });
}
setActiveLink();

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1300) setActiveLink();
});