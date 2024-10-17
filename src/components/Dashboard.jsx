import React, { useState, useEffect } from 'react';
import CalendarGrid from './CalendarGrid';
import EventForm from './EventForm';
import './Dashboard.css'; 

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Current date
    const [events, setEvents] = useState([]); 

    // Fetch events (replace with your backend API call)
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/event'); // Update with actual API endpoint
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleEventCreate = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <div className="calendar-page">
            <CalendarGrid
                selectedDate={selectedDate}
                events={events}
                onDateChange={handleDateChange}
            />
            <EventForm onEventCreate={handleEventCreate} />
        </div>
    );
};

export default Dashboard;