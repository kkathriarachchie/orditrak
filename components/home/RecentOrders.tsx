import { Search } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import OrderList from "./OrderList";
import { ScrollArea } from "../ui/scroll-area";

const RecentOrders = () => {
  return (
    <div>
      <div className="px-8 mt-6">
        <Card className="w-full h-[410px] gap-2 py-5 px-5">
          <CardHeader className="flex flex-row justify-between items-center p-0">
            <h1 className="text-lg font-semibold tracking-wide">
              Recent Orders
            </h1>
            <a href="" className="text-info text-sm font-semibold">
              View all
            </a>
          </CardHeader>

          <CardContent className="p-0">
            {/* Search input for recent orders */}
            <div className="relative px-6 py-4 mx-0">
              <Input
                type="text"
                placeholder="Search recent orders"
                className="rounded-full py-5 px-10"
              />
              <Search className="absolute left-9 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Order list */}
            <ScrollArea className=" mt-4  h-[260px] ">
              <OrderList />
              <OrderList />
              <OrderList />
              <OrderList />
              <OrderList />
              <OrderList />
              <p className="col-span-3 text-muted-foreground">
                No orders available
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecentOrders;
