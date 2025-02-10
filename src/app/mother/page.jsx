"use client";

import React from "react";
import BigTitle from "@/components/common/BigTitle";

const imageData = [{ src: "/image/mother/myroom.jpg", title: "mother" }];

export default function Mother() {
  return (
    <div>
      <BigTitle text="Mother"></BigTitle>
      <div className="masonry-grid">
        {imageData.map((image, index) => (
          <div key={index} className="masonry-item">
            <div className="image-container">
              <img src={image.src} alt={image.title} className="masonry-image" />
            </div>
            <div className="masonry-content">
              <p className="text-gray-700">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        .masonry-item {
          position: relative;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }

        .image-container {
          position: relative;
          flex: 1;
        }

        .masonry-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .masonry-content {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 10px;
          text-align: center;
          font-weight: bold;
        }

        .masonry-content p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
