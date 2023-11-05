import React, { useState } from "react";

const ImageZoom = ({ imageUrl }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    return (
        <div
            className={`image-zoom-container ${isZoomed ? "zoomed" : ""}`}
            onClick={toggleZoom}>
            {isZoomed && (
                <div className="modal">
                    <img
                        src={imageUrl}
                        alt="Zoomed Image"
                        className="image-zoom"
                    />
                    <button className="close-button" onClick={toggleZoom}>
                        Đóng
                    </button>
                </div>
            )}
            <img
                src={imageUrl}
                alt="Zoomed Image"
                className={`image-zoom ${isZoomed ? "hidden" : ""}`}
            />
        </div>
    );
};

export default ImageZoom;
