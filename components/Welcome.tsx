"use client";

import { useEffect, useState } from "react";

export default function Welcome() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="welcome-container col-span-3 lg:col-span-5">
            <div className="welcome-content">
                {/* Animated gradient background effect */}
                <div className="welcome-gradient"></div>

                {/* Smooth word reveal */}
                <h1 className="welcome-text name-font">
                    <span className="welcome-word" style={{ animationDelay: '0.15s' }}>Welcome</span>
                    <span className="welcome-word" style={{ animationDelay: '0.35s' }}> to</span>
                    <span className="welcome-word" style={{ animationDelay: '0.55s' }}> my</span>
                    <span className="welcome-word" style={{ animationDelay: '0.75s' }}> portfolio</span>
                    <span className="welcome-word" style={{ animationDelay: '0.95s' }}> !</span>
                </h1>
            </div>
        </div>
    );
}