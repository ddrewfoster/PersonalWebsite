var count = 0;

function getProject(project) {
    document.getElementById('carouselItem').src = project.image;
    document.getElementById('carouselItem').alt = project.alt;
    document.getElementById('carouselTitle').textContent = project.name;
    document.getElementById('carouselSummary').textContent = project.description;
    document.getElementById('carouselLink').setAttribute('href', project.github);
    document.getElementById('github-logo').setAttribute('alt', project.githubAlt);
    document.getElementById('websiteLink').setAttribute('href', project.link);
    document.getElementById('website-logo').setAttribute('alt', project.websiteAlt);
    if(project.link === "") {
        document.getElementById('websiteLink').style.display = "none";
    }
    else {
        document.getElementById('websiteLink').style.display = "inline-block";
    }
    if(project.github === "") {
        document.getElementById('carouselLink').style.display = "none";
    }
    else {
        document.getElementById('carouselLink').style.display = "inline-block";
    }
    if(project.githubAlt === "") {
        document.getElementById('github-logo').style.display = "none";
    }
    else {
        document.getElementById('github-logo').style.display = "inline-block";
    }
    if(project.websiteAlt === "") {
        document.getElementById('website-logo').style.display = "none";
    }
    else {
        document.getElementById('website-logo').style.display = "inline-block";
    }

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

document.getElementById('first').addEventListener('click', function(){
    count = 0;
    getProject(projects[count]);
});
document.getElementById('second').addEventListener('click', function(){
    count = 1;
    getProject(projects[count]);
});
document.getElementById('third').addEventListener('click', function(){
    count = 2;
    getProject(projects[count]);
});
document.getElementById('fourth').addEventListener('click', function(){
    count = 3;
    getProject(projects[count]);
});
document.getElementById('fifth').addEventListener('click', function(){
    count = 4;
    getProject(projects[count]);
});
document.getElementById('sixth').addEventListener('click', function(){
    count = 5;
    getProject(projects[count]);
});
document.getElementById('seventh').addEventListener('click', function(){
    count = 6;
    getProject(projects[count]);
});