import React from "react";
import { getAvatarName, getBgColor } from "@/util";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "../ui/card";
import { useDispatch } from "react-redux";
import { updateTable } from "@/redux/slice/customerSlice";

const TableCard = ({
  id,
  name,
  status,
  initials,
  seats,
}: {
  id: number;
  name: string;
  status: string;
  initials: string;
  seats: number;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (name: string) => {
    if (status === "Booked") return;
    dispatch(updateTable({ table: name }));
    router.push("/menu");
  };

  return (
    <Card
      onClick={() => handleClick(name)}
      key={id}
      className=" p-5 cursor-pointer"
    >
      <CardContent className="p-0">
        <div className="flex items-center justify-between px-1">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p
            className={`${
              status === "Booked" ? " bg-muted" : "bg-muted "
            } px-2 py-1 rounded-lg`}
          >
            {status}
          </p>
        </div>
        <div className="flex items-center justify-center mt-5 mb-8">
          <div
            className="rounded-full w-20 h-20 flex items-center justify-center"
            style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
          >
            <h1 className="text-xl">{getAvatarName(initials) || "N/A"}</h1>
          </div>
        </div>
        <p className="text-muted-foreground text-xs">
          Seats: <span className="">{seats}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default TableCard;
