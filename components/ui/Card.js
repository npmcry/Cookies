import React from "react";

export function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
