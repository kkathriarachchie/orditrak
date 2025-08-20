import BottomNav from "@/components/shared/BottomNav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
        {/* Left Div */}
        <div className="flex-[3] "></div>

        {/* Right Div */}
        <div className="flex-[2]"></div>
        <BottomNav />
      </section>
    </div>
  );
}
