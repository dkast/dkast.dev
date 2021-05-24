import React from "react";

const Alert = () => {
  return (
    <div className="bg-yellow-100 text-yellow-500 py-1 w-full text-center">
      {"Modo vista previa."}
      <a href="/api/exit-preview" className="ml-2 underline">
        Salir
      </a>
    </div>
  );
};

export default Alert;
