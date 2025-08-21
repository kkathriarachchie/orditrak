import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MiniCradProps {
  title: string;
  icon: React.ReactNode;
  number: string | number;
  footerNum: string | number;
}

const MiniCrad = ({ title, icon, number, footerNum }: MiniCradProps) => {
  return (
    <Card className="w-[50%] gap-2 py-5 px-5">
      <CardHeader className="flex flex-row items-start justify-between p-0 ">
        <h1 className="text-lg font-semibold tracking-wide">{title}</h1>
        <button
          className={`${
            title === "Total Earnings" ? "bg-secondary" : "bg-secondary"
          } p-3 rounded-2xl  text-2xl`}
        >
          {icon}
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <h1 className="text-4xl font-bold ">
          {title === "Total Earnings" ? `Rs.${number}` : number}
        </h1>
        <h1 className="text-lg mt-2">
          <span className="text-success">{footerNum}%</span> than yesterday
        </h1>
      </CardContent>
    </Card>
  );
};

export default MiniCrad;
