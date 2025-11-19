// components/Hello.jsx
"use client";
import Link from "next/link";

import React from "react";

const menuItems = [
  { name: "Dashboard", href: "/kitchen/dashboard" },
  { name: "Menu", href: "/kitchen/menu" },
  { name: "Food List", href: "/kitchen/food" },
  { name: "Public Food List", href: "/kitchen/food" },
  { name: "Revenue", href: "/kitchen/revenue" },
  { name: "Orders", href: "/kitchen/orders" },
  { name: "Schedules", href: "/kitchen/schedules" },
  { name: "Feedbacks", href: "/kitchen/feedbacks" },
  { name: "My Customers", href: "/kitchen/customers" },
];

export default function LeftNav({ }) {
  return (
    <div className="w-full">
      <ul className="w-full menu bg-base-200 rounded-box">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
