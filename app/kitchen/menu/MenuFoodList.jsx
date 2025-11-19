"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuFoodList() {
  const [menuData, setMenuData] = useState({});
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;

  useEffect(() => {
    async function loadMenu() {
      try {
        const menuApi = `${apiUrl}menu?loginToken=deliv1&selectedKitchenId=1`;

        const res = await axios.get(menuApi);
        setMenuData(res.data);
      } catch (error) {
        console.error("Failed to load menu", error);
      }
    }

    loadMenu();
  }, []);

  if (!menuData || Object.keys(menuData).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 ">
      {Object.entries(menuData).map(([dayKey, dayData]) => (
        <div key={dayKey} className="p-4 rounded">
          <h2 className="mb-4 text-xl font-bold h2_akm">
            {dayData.menuOf} ({dayData.date})
          </h2>
          <div className="flex items-start justify-center gap_akm ">
            {/* Check both lunch & dinner if present */}
            {["lunch", "dinner"].map((meal) => {
              const mealData = dayData[meal];
              if (!mealData || !mealData.foodItems) return null;

              return (
                <div
                  key={meal}
                  className="w-1/2 mb-2 shadow-sm card bg-base-200 pad_akm"
                >
                  <h3 className="mb-2 font-semibold capitalize h3_akm">
                    {meal}
                  </h3>

                  {/* foodItems is either array or object */}
                  {Array.isArray(mealData.foodItems) ? (
                    <p className="text-sm text-gray-500">No items</p>
                  ) : (
                    Object.entries(mealData.foodItems).map(
                      ([categoryName, items]) => (
                        <div key={categoryName} className="mb-3">
                          <h4 className="font-semibold ">{categoryName}</h4>

                          <div className="grid grid-cols-2 gap-3 mt-2">
                            {items.map((food) => (
                              <div
                                key={food.menuId}
                                className="flex items-center gap-3 p-2 rounded"
                              >
                                <img
                                  src={`${imgUrl}/${food.foodImage}`}
                                  alt={food.foodName}
                                  className="object-cover rounded w-14 h-14"
                                />

                                <div>
                                  <p className="font-medium">{food.foodName}</p>
                                  <p className="text-sm">৳ {food.foodPrice}</p>
                                  <p className="text-xs text-gray-600">
                                    Serial: {food.menuSerial ?? "-"}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )
                  )}
                </div>
              );
            })}
          </div>

          <div className="m-0 divider"></div>
        </div>
      ))}
    </div>
  );
}
