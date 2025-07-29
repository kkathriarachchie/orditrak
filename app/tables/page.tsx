"use client";
import BackButton from "@/components/shared/BackButton";
import BottomNav from "@/components/shared/BottomNav";
import TableCard from "@/components/tables/TableCard";
import React, { useState } from "react";
import { tables } from "@/constants/index";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-surface-light  h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-text-primary text-2xl font-bold tracking-wider">
            Tables
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
            onClick={() => setStatus("booked")}
            className={`text-text-muted text-lg ${
              status === "booked" && "bg-surface-lighter rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3  px-16 py-4 h-[650px] overflow-y-scroll scrollbar-hide">
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
      <BottomNav />
    </section>
  );
};

export default Tables;
