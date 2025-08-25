"use client";
import { CircleDot, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { menus } from "@/constants/index";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

type ItemCounts = { [itemId: number]: number };
type MenuItemCounts = { [menuId: number]: ItemCounts };

const MenuContainer = () => {
  // Track selected menu
  const [selected, setSelected] = useState(menus[0]);
  // Track item counts per menu and per item
  const [menuItemCounts, setMenuItemCounts] = useState<MenuItemCounts>({});
  // Helper to get counts for current menu
  const getCurrentMenuCounts = () => menuItemCounts[selected.id] || {};

  // Increment item count for a specific item in the selected menu
  const increment = (itemId: number) => {
    setMenuItemCounts((prev) => {
      const currentMenuCounts = { ...getCurrentMenuCounts() };
      if ((currentMenuCounts[itemId] || 0) >= 4) return prev;
      currentMenuCounts[itemId] = (currentMenuCounts[itemId] || 0) + 1;
      return { ...prev, [selected.id]: currentMenuCounts };
    });
  };

  // Decrement item count for a specific item in the selected menu
  const decrement = (itemId: number) => {
    setMenuItemCounts((prev) => {
      const currentMenuCounts = { ...getCurrentMenuCounts() };
      if (!currentMenuCounts[itemId]) return prev;
      currentMenuCounts[itemId] = Math.max(
        0,
        (currentMenuCounts[itemId] || 0) - 1
      );
      return { ...prev, [selected.id]: currentMenuCounts };
    });
  };

  return (
    <div className="">
      <ScrollArea className="h-[calc(100vh-16rem)]">
        <div className="grid grid-cols-4 gap-3 px-10 py-4 w-full">
          {menus.map((menu) => (
            <Card
              key={menu.id}
              className="flex flex-col items-start justify-between p-5 cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => setSelected(menu)}
            >
              <CardContent className="p-0 w-full">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-lg font-semibold">
                    {menu.icon} {menu.name}
                  </h1>
                  {selected.id === menu.id && (
                    <CircleDot className="" size={20} />
                  )}
                </div>
                <p className="text-muted text-sm font-semibold">
                  {menu.items.length} Items
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <hr className="border-t-2 mt-4 mx-10" />
        <div className="grid grid-cols-2 gap-4 px-10 py-4 w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {selected?.items.map((item) => {
            const count = getCurrentMenuCounts()[item.id] || 0;
            return (
              <Card
                key={item.id}
                className="flex flex-col items-start justify-between p-5 cursor-pointer"
              >
                <CardContent className="p-0 w-full">
                  <div className="flex items-start justify-between w-full">
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                    <Button
                      size="icon"
                      className="p-2 rounded-lg"
                      variant="ghost"
                    >
                      <ShoppingCart className="!w-[20px] !h-[20px]" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between w-full mt-4">
                    <p className="text-xl font-bold">₹{item.price}</p>
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg gap-6">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => decrement(item.id)}
                        className=" text-2xl"
                      >
                        &minus;
                      </Button>
                      <span className="text-text-contrast">{count}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => increment(item.id)}
                        className=" text-2xl"
                      >
                        &#43;
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MenuContainer;
