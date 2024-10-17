// Images.js
import React, { useEffect, useState } from 'react';
import './css/Images.css'; // Import custom CSS for Images page

const Images = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false); // State to handle fade effect

    // Preload images to avoid delay during transitions
    const preloadImages = (imageUrls) => {
        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=88TBqO5WaKpqh2Bzcz9rrHsRNUUcVOTnZyxQeqfB&count=10');
                const data = await response.json();
                const filteredImages = data.filter(item => item.media_type === 'image');
                setImages(filteredImages);
                preloadImages(filteredImages.map(image => image.url)); // Preload images
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setFade(true); // Trigger fade before changing image
                const nextImage = new Image();
                nextImage.src = images[(currentIndex + 1) % images.length].url;
                nextImage.onload = () => {
                    setTimeout(() => {
                        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
                        setFade(false); // Reset fade state after image changes
                    }, 500); // Duration of fade-out transition
                };
            }, 10000); // Change image every 10 seconds

            return () => clearInterval(interval);
        }
    }, [images, currentIndex]);

    const handlePrev = () => {
        setFade(true);
        const prevImage = new Image();
        prevImage.src = images[(currentIndex - 1 + images.length) % images.length].url;
        prevImage.onload = () => {
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
                setFade(false);
            }, 500);
        };
    };

    const handleNext = () => {
        setFade(true);
        const nextImage = new Image();
        nextImage.src = images[(currentIndex + 1) % images.length].url;
        nextImage.onload = () => {
            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
                setFade(false);
            }, 500);
        };
    };

    return (
        <div className="images-container">
            <div className="background-card">
                <img src="../images/space1.jpg" alt="Background" className="background-image" />
                <h1 className="background-title">Explore the Universe</h1>
            </div>
            <div className="carousel-container">
                {images.length > 0 && (
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className={`carousel-image ${fade ? 'fade-out' : 'fade-in'}`}
                        onLoad={() => setFade(false)} // Reset fade after the image has loaded
                    />
                )}
                <button className="arrow left-arrow" onClick={handlePrev}>❮</button>
                <button className="arrow right-arrow" onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default Images;
