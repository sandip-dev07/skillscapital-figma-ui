import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

// Reuse the interface defined above or import it from a types file
interface Feature {
  icon: string;
  name: string;
  desc: string;
}

interface CommonUiData {
  headerIcon: string;
  headerTitle: string;
  headerAction: string;
  contentImage: string;
  features: Feature[];
  buttonAction: string;
}

interface CommonUiProps {
  data: CommonUiData;
}

const CommonUi = ({ data }: CommonUiProps) => {
  return (
    <>
      <div className="h-[86px] bg-[#1A1F36] mt-10 rounded-lg flex items-center w-full p-6 justify-between">
        <div className="flex items-center">
          <Image src={data.headerIcon} alt="" width={35} height={35} />
          <p className="text-lg sm:text-xl ml-6 font-semibold text-white">
            {data.headerTitle}
          </p>
        </div>
        <div className="hidden sm:block">
          <Button
            variant={"outline"}
            className="rounded-full text-base h-12 font-semibold"
          >
            Find Talent{" "}
            <div className="bg-[#FCD980] p-2 size-8 rounded-full flex items-center justify-center">
              <Image
                src={"/icons/right-arrow.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </Button>
        </div>
      </div>

      <div className="mt-7 flex items-center gap-5 flex-col sm:flex-row">
        <div className="flex-1 relative aspect-square">
          <Image
            src={data.contentImage}
            alt=""
            fill
            className="object-cover rounded-xl w-full"
          />
        </div>
        <div className="flex-1 w-full h-full">
          <div className="grid grid-cols-2 gap-4">
            {data.features.map((item) => (
              <div
                key={item.name}
                className="sm:aspect-square bg-white rounded-xl overflow-hidden p-4 sm:p-7 space-y-2 sm:space-y-4"
              >
                <Image
                  src={item.icon}
                  alt=""
                  className="size-5 sm:size-7"
                  width={30}
                  height={30}
                />
                <h3 className="text-sm sm:text-2xl font-semibold">
                  {item.name}
                </h3>
                <p className="text-[12px] sm:text-base text-[#282938]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Button
          variant={"appYellow"}
          className="rounded-full text-sm h-14 px-10 font-semibold w-fit mx-auto mt-6"
        >
          {data.buttonAction} <MoveRight size={20} className="ml-3 " />
        </Button>
      </div>
    </>
  );
};

export default CommonUi;
