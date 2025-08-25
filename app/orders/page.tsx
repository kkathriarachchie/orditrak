"use client";
import BottomNav from "@/components/shared/BottomNav";
import React, { useState } from "react";
import BackButton from "@/components/shared/BackButton";
import OrderCard from "@/components/orders/OrderCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const Page = () => {
  const [status, setStatus] = useState("all");
  return (
    <div>
      <section className="h-[calc(100vh-6rem)] overflow-hidden">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-2xl font-bold tracking-wider">Orders</h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <button
              onClick={() => setStatus("all")}
              className={`text-lg ${
                status === "all" && "bg-muted rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              All
            </button>
            <button
              onClick={() => setStatus("progress")}
              className={`text-lg ${
                status === "progress" && "bg-muted rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              In Progress
            </button>
            <button
              onClick={() => setStatus("ready")}
              className={`text-lg ${
                status === "ready" && "bg-muted rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              Ready
            </button>
            <button
              onClick={() => setStatus("completed")}
              className={`text-lg ${
                status === "completed" && "bg-muted rounded-lg px-5 py-2"
              }  rounded-lg px-5 py-2 font-semibold`}
            >
              Completed
            </button>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-5rem-10rem)] px-5 py-4 mx-5 ">
          <div className="grid grid-cols-4 gap-3">
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
        </ScrollArea>
        <BottomNav />
      </section>
    </div>
  );
};

export default Page;
