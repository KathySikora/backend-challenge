document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/events')
        .then(response => response.json())
        .then(data => displayEvents(data.data))
        .catch(error => console.error('Error fetching events:', error));
});

function displayEvents(events) {
    const eventsList = document.querySelector('#eventsList');
    events.forEach(event => {
        const eventElement = document.createElement('li');
        eventElement.textContent = `${event.date} ${event.time} - ${event.sport}: ${event.team1} vs ${event.team2} at ${event.location}`;
        eventsList.appendChild(eventElement);
    });
}
