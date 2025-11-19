
"use client";

import React from "react";
import MenuFoodList from "@/app/kitchen/menu/MenuFoodList";


export default function KitchenMenu() {
  return (
    <div className="">
      <div className="h1_akm pad_akm">Menu List</div>
      <div className="p-0 m-0 divider"></div>
      <MenuFoodList />

    </div>
  );
}
