import Image from "next/image";
import bubble1 from "@/assets/bubbles/bubble-1.svg";
import bubble2 from "@/assets/bubbles/bubble-2.svg";
import bubble3 from "@/assets/bubbles/bubble-3.svg";
import bubble4 from "@/assets/bubbles/bubble-4.svg";
import feature1 from "@/assets/features/feature-1.svg";
import feature2 from "@/assets/features/feature-2.svg";
import feature3 from "@/assets/features/feature-3.svg";
import feature4 from "@/assets/features/feature-4.svg";

export const BubbleImage = ({ src, className }: { src: string; className: string }) => (
  <div className={`absolute ${className}`}>
    <Image src={src} alt="bubble" />
  </div>
);

export const FeatureCard = ({
  src,
  title,
  description,
  className,
}: {
  src: string;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={`flex flex-col justify-center items-center mx-auto my-8 text-center`}>
    <div className={`${className} flex flex-col justify-center items-center mx-auto`}>
      <div className="bg-white rounded-full shadow-slate-200/50 shadow-xl w-fit">
        <Image src={src} alt={title} />
      </div>
    </div>
    <h4 className="font-bold text-xl my-3">{title}</h4>
    <p>{description}</p>
  </div>
);

export const lorumDesc =
  "Suspendisse nec turpis quis egestas sit augue. Pellentesque habitant morbi tristique senectus.";

export const bubbles = [
  { src: bubble3, className: "left-20 sm:-left-8 -top-4 sm:top-20 z-50" },
  { src: bubble2, className: "-top-8 -right-20 sm:-right-32 w-5/12 sm:w-auto z-20" },
  { src: bubble1, className: "-left-16 sm:-left-32 -bottom-16 sm:-bottom-24 w-1/2 sm:w-auto z-20" },
  { src: bubble4, className: "-bottom-4 sm:bottom-0 -right-8 sm:-right-16 w-1/4 sm:w-auto z-50" },
];
export const features = [
  {
    src: feature1,
    title: "Discover",
    description: lorumDesc,
  },
  {
    src: feature2,
    title: "Discover",
    description: lorumDesc,
  },
  {
    src: feature3,
    title: "Discover",
    description: lorumDesc,
  },
  {
    src: feature4,
    title: "Discover",
    description: lorumDesc,
  },
];
