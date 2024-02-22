document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/events')
        .then(response => response.json())
        .then(data => displayEvents(data.data))
        .catch(error => console.error('Error fetching events:', error));
});

function displayEvents(events) {
    const tableBody = document.querySelector('#eventsTable tbody');
    events.forEach(event => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.time}</td>
            <td>${event.sport}</td>
            <td>${event.team1}</td>
            <td>${event.team2}</td>
            <td>${event.location}</td>
        `;
    });
}
