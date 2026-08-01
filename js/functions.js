var count = 0;

function checkSkills(project) {
    const skillList = document.querySelectorAll('.skills-list > *');
    skillList.forEach(skill => {
        skill.style.filter = "brightness(0.5)";
        skill.style.opacity = "0.5";
        skill.style.boxShadow = "none";
    });
    for(let i = 0; i < skillList.length; i++) {
        if (i >=0 && i < 12) {
            project.frontend.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 12 && i < 24) {
            project.backend.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 24 && i < 34) {
            project.cloud.forEach(skill => {
                if (skill.tool=== skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 34 && i < 44) {
            project.devops.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 44 && i < 54) {
            project.security.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 54 && i < 63) {
            project.design.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 63 && i < 70) {
            project.platforms.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
        }
        else if (i >= 70 && i < 77) {
            project.delivery.forEach(skill => {
                if (skill.tool === skillList[i].textContent) {
                    skillList[i].style.filter = "brightness(1)";
                    skillList[i].style.opacity = "1";
                    skillList[i].style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)";
                }
            });
    }
}
    return project;
}


function getProject(project) {
    project = checkSkills(project);
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