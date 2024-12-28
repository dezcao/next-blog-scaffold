'use client';

import React from "react";

const imageData = [
  { src: "/image/mother/동두천내방.jpg", title: "동두천 내방" },
  { src: "/image/mother/모자사드리러감.jpg", title: "모자 사드리러" },
  { src: "/image/mother/부천성모병원.jpg", title: "부천성모병원" },
  { src: "/image/mother/부천성모병원복도.jpg", title: "부천성모병원복도" },
  { src: "/image/mother/세브란스병원카드.jpg", title: "세브란스병원카드" },
  { src: "/image/mother/어머니상처붕대.jpg", title: "어머니 상처에 봉대" },
];

export default function Mother() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mother</h1>
      <div className="masonry-grid">
        {imageData.map((image, index) => (
          <div key={index} className="masonry-item">
            <div className="image-container">
              <img src={image.src} alt={image.title} className="masonry-image" />
            </div>
            <div className="masonry-content">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px; /* 카드 간 간격 */
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
          background-color: rgba(255, 255, 255, 0.9); /* 약간의 배경색 */
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
