// Create a JavaScript object to store the calendar data
const calendarData = {
    currentMonth: 'October',
    currentYear: 2024,
    days: [
        { day: 1, events: [] },
        { day: 2, events: [] },
        { day: 3, events: [] },
        { day: 4, events: [] },
        { day: 5, events: [] },
        { day: 6, events: [] },
        { day: 7, events: [] },
        { day: 8, events: [] },
        { day: 9, events: [] },
        { day: 10, events: [] },
        { day: 11, events: [] },
        { day: 12, events: [] },
        { day: 13, events: [] },
        { day: 14, events: [] },
        { day: 15, events: [] },
        { day: 16, events: [] },
        { day: 17, events: [] },
        { day: 18, events: [] },

    ]
};

// Function to generate the table rows and cells
function generateCalendarGrid() {
    const calendarGrid = document.getElementById('calendar-grid');
    const rows = [];
    for (let i = 0; i < calendarData.days.length; i += 7) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7 && (i + j) < calendarData.days.length; j++) {
            const cell = document.createElement('td');

            cell.textContent = calendarData.days[i + j].day;
            cell.addEventListener('click', handleDayClick); // Add event listener
            row.appendChild(cell);
        }
        rows.push(row);
    }
    calendarGrid.innerHTML = '';
    rows.forEach((row) => calendarGrid.appendChild(row));
}

// Function to handle user interactions
function handleDayClick(event) {
    const day = event.target.textContent;
    const selectedDayEvents = document.getElementById('selected-day-events');
    selectedDayEvents.innerHTML = '';
    const events = calendarData.days.find((d) => d.day === parseInt(day)).events;
    events.forEach((event) => {
        const eventElement = document.createElement('div');
        eventElement.textContent = event.title;
        selectedDayEvents.appendChild(eventElement);
    });
}

// Ensure the DOM is fully loaded before initializing the calendar
document.addEventListener('DOMContentLoaded', () => {
    generateCalendarGrid();
});