    async function fetchProjects() {
        try {
            const response = await fetch('data.js');
            const data = await response.json();

            console.log(data);
        }
        catch(error) {
            console.error("Failed to retrieve JSON: ", error);
        }
    }