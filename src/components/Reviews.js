import React from "react";

export default function Reviews() {
  return (
    <div className="reviews-section">
      <h2 style={{ textAlign: "center" }}>Reseñas</h2>
      <div className="reviews">
        <div className="review">
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px" }}
          />
          <p>
            <b>John Doe</b>
          </p>
          <p>
            "El hotel es muy bonito y la atención es excelente. Lo recomiendo"
          </p>
        </div>
        <div className="review">
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <p>
            <b>John Doe</b>
          </p>
          <p>
            "El hotel es muy bonito y la atención es excelente. Lo recomiendo"
          </p>
        </div>
        <div className="review">
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <b>
            <p>John Doe</p>
          </b>

          <p>
            "El hotel es muy bonito y la atención es excelente. Lo recomiendo"
          </p>
        </div>
      </div>
    </div>
  );
}
