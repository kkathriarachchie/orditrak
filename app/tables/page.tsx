"use client";
import BackButton from "@/components/shared/BackButton";
import BottomNav from "@/components/shared/BottomNav";
import TableCard from "@/components/tables/TableCard";
import React, { useState } from "react";
import { tables } from "@/constants/index";
import { ScrollArea } from "@/components/ui/scroll-area";

const Page = () => {
  const [status, setStatus] = useState("all");
  return (
    <section className="h-[calc(100vh-6rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-2xl font-bold tracking-wider">Tables</h1>
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
            onClick={() => setStatus("booked")}
            className={`text-lg ${
              status === "booked" && "bg-muted rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            Booked
          </button>
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem-10rem)] px-5 py-4 mx-5 ">
        <div className="grid grid-cols-5 gap-3">
          {tables.map((table) => {
            return (
              <TableCard
                key={table.id}
                id={table.id}
                name={table.name}
                status={table.status}
                initials={table.initial}
                seats={table.seats}
              />
            );
          })}
        </div>
      </ScrollArea>

      <BottomNav />
    </section>
  );
};

export default Page;
