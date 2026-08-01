var count = 0;

function getProject(project) {
    console.log(project);
    document.getElementById('carouselItem').src = project.image;
    document.getElementById('carouselItem').alt = project.alt;
    return project;
}

const project = getProject(projects[count]);

document.getElementById('right-navigation').addEventListener('click', function(){
    count++;
    if (count >= projects.length) {
        count = 0;
    }
    getProject(projects[count]);
});

document.getElementById('left-navigation').addEventListener('click', function(){
    count--;    
    if (count < 0) {
        count = projects.length - 1;
    }
    getProject(projects[count]);
});