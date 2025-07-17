import { Search } from "lucide-react";
import React from "react";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-background w-full h-[410px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-text-primary text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="" className="text-info text-sm font-semibold">
            View all
          </a>
        </div>

        <div className="flex items-center gap-4 bg-surface-light rounded-[15px] px-6 py-4 mx-6">
          <Search className="text-text-primary" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-surface-light outline-none text-text-primary"
          />
        </div>

        {/* Order list */}
        <div className="mt-4 px-6 overflow-y-scroll h-[260px] scrollbar-hide">
          <OrderList /> <OrderList /> <OrderList /> <OrderList /> <OrderList />{" "}
          <OrderList />
          <p className="col-span-3 text-text-muted">No orders available</p>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
