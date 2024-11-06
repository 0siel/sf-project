import React from "react";

export default function Reviews() {
  return (
    <div
      style={{
        backgroundColor: "#a79c69",
        paddingTop: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Reseñas</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px",
          borderRadius: "5px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            width: "30%",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <strong>John Doe</strong>
          <p>
            "El hotel es muy bonito y la atención es excelente. Lo recomiendo"
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            width: "30%",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <strong>Maria Torres</strong>
          <p>
            "La estancia fue muy agradable. El personal es muy amable y las
            habitaciones son muy cómodas"
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            width: "30%",
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="reviewer"
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
          />
          <strong>Carlos Perez</strong>
          <p>
            "El hotel es muy bonito y la atención es excelente. Lo recomiendo"
          </p>
        </div>
      </div>
    </div>
  );
}
