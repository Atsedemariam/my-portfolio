import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='App'>
            {backToTopButton && (
                <button
                    onClick={scrollUp}
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        height: "50px",
                        width: "50px",
                        fontSize: "20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: "50%",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 1000 // Ensure it's above other content
                    }}
                >
                    ^
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
