const things = document.getElementById('contact');  
var location = 0;
document.getElementById('contact').addEventListener('click', function() {
    const dataContainer = document.getElementById('work');
    document.getElementsByClassName("off");
    dataContainer.innerHTML = '<p>working</p>';
})



    async function fetchProjects() {
        try {
            const response = await fetch('data.js');
            const data = await response.json();

            console.log(data);
            things.innerText = `${data}`;
        }
        catch(error) {
            console.error("Failed to retrieve JSON: ", error);
        }
    }