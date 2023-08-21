const form = document.getElementById('character-form');
const characterDetails = document.getElementById('character-details');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const characterId = document.getElementById('character-id').value;

    try {
        const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
        const data = await response.json();

        if (response.ok) {
            characterDetails.innerHTML = JSON.stringify(data, null, 4).replace(/['"]+/g, '').slice(1,-1).split(",").join("<br /><hr/>");
         } else {
            characterDetails.innerHTML = `Character with ID ${characterId} not found.`;
            }
        } catch (error) {
            characterDetails.innerHTML = 'An error occurred. Please try again.';
        }
});