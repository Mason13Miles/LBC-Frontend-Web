import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to Horizon Calendar!</h1>
            <p>Plan your days, manage your time.</p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default LandingPage;