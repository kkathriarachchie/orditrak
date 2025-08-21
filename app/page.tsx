import Greetings from "@/components/home/Greetings";
import BottomNav from "@/components/shared/BottomNav";
import MiniCard from "@/components/home/MiniCrad";
import Image from "next/image";
import { BanknoteArrowUp, Hourglass } from "lucide-react";
import RecentOrders from "@/components/home/RecentOrders";
import PopularDishes from "@/components/home/PopularDishes";

export default function Home() {
  return (
    <div>
      <section className="h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-[3] ">
          <Greetings />
          <div className="flex items-center w-full gap-3 px-8 mt-8 ">
            <MiniCard
              title="Total Earnings"
              icon={<BanknoteArrowUp />}
              number={512}
              footerNum={1.6}
            />
            <MiniCard
              title="In Progress"
              icon={<Hourglass />}
              number={16}
              footerNum={3.6}
            />
          </div>
          <RecentOrders />
        </div>

        {/* Right Div */}
        <div className="flex-[2]">
          <PopularDishes />
        </div>
        <BottomNav />
      </section>
    </div>
  );
}
