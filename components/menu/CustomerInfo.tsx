"use client";
import { formatDate, getAvatarName } from "@/util";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CustomerInfo = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state: RootState) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-md  font-semibold tracking-wide">
          {customerData.customerName || "Customer Name"}
        </h1>
        <p className="text-xs  font-medium mt-1">
          #{customerData.orderId || "N/A"} / Dine in
        </p>
        <p className="text-xs  font-medium mt-2">{formatDate(dateTime)}</p>
      </div>
      <Button className="p-3 text-xl font-bold h-12 ">
        {getAvatarName(customerData.customerName) || "N/A"}
      </Button>
    </div>
  );
};

export default CustomerInfo;
