"use client";
import OrderCard from "@/components/orders/OrderCard";
import BackButton from "@/components/shared/BackButton";
import BottomNav from "@/components/shared/BottomNav";
import React, { useState } from "react";

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <div>
      <section className="bg-surface-light  h-[calc(100vh-5rem)] overflow-hidden">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-text-primary text-2xl font-bold tracking-wider">
              Orders
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <button
              onClick={() => setStatus("all")}
              className={`text-text-muted text-lg ${
                status === "all" && "bg-surface-lighter rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              All
            </button>
            <button
              onClick={() => setStatus("progress")}
              className={`text-text-muted text-lg ${
                status === "progress" &&
                "bg-surface-lighter rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              In Progress
            </button>
            <button
              onClick={() => setStatus("ready")}
              className={`text-text-muted text-lg ${
                status === "ready" && "bg-surface-lighter rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              Ready
            </button>
            <button
              onClick={() => setStatus("completed")}
              className={`text-text-muted text-lg ${
                status === "completed" &&
                "bg-surface-lighter rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <p className="col-span-3 text-text-muted">No orders available</p>
        </div>
        <BottomNav />
      </section>
    </div>
  );
};

export default Orders;
