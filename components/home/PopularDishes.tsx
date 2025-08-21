import React from "react";
import { popularDishes } from "@/constants";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <Card className="w-full p-5 gap-2">
        <CardHeader className="flex flex-row justify-between items-center p-0">
          <h1 className="text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="" className="text-info text-sm font-semibold">
            View all
          </a>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[614px] hide-scrollbar">
            {popularDishes.map((dish) => (
              <Card key={dish.id} className="p-5 mb-3">
                <CardContent className="flex items-center gap-4 p-0">
                  <h1 className="font-bold text-xl mr-4">
                    {dish.id < 10 ? `0${dish.id}` : dish.id}
                  </h1>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    className="w-[50px] h-[50px] rounded-full"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h1 className="font-semibold tracking-wide">{dish.name}</h1>
                    <p className="text-sm font-semibold mt-1">
                      <span className="text-muted-foreground">Orders: </span>
                      {dish.numberOfOrders}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopularDishes;
