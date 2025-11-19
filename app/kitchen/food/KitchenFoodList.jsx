"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function KitchenFoodList({ kitchenId, loginToken }) {
  const [foods, setFoods] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

  useEffect(() => {
    async function load() {
      const url = `${apiUrl}kitchen-food-list?loginToken=${loginToken}&kitchenId=${kitchenId}`;
      const res = await axios.get(url);
      setFoods(res.data.data);
    }
    load();
  }, [apiUrl, kitchenId, loginToken]);

  if (foods.length === 0) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {foods.map((food, i) => (
        <div key={i} className="flex items-center gap-3 p-2 rounded shadow-sm">
          <img
            src={`${imgUrl}/${food.mrd_food_img}`}
            alt={food.mrd_food_name}
            className="object-cover rounded w-14 h-14"
          />

          <div>
            <p className="font-semibold">{food.mrd_food_name}</p>
            <p className="text-sm">৳ {food.mrd_food_price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
