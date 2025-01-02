"use client";

import { FormEvent, useState } from "react";

import Image from "next/image";
import background2 from "@/assets/feature-background.svg";
import browser from "@/assets/browser.svg";
import bubble1 from "@/assets/bubbles/bubble-1.svg";
import bubble2 from "@/assets/bubbles/bubble-2.svg";
import bubble3 from "@/assets/bubbles/bubble-3.svg";
import bubble4 from "@/assets/bubbles/bubble-4.svg";
import feature1 from "@/assets/features/feature-1.svg";
import feature2 from "@/assets/features/feature-2.svg";
import feature3 from "@/assets/features/feature-3.svg";
import feature4 from "@/assets/features/feature-4.svg";
import { useRouter } from "next/navigation";

const BubbleImage = ({ src, className }: { src: string; className: string }) => (
  <div className={`absolute ${className}`}>
    <Image src={src} alt="bubble" />
  </div>
);

const FeatureCard = ({
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

const lorumDesc = "Suspendisse nec turpis quis egestas sit augue. Pellentesque habitant morbi tristique senectus.";

const Home = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const bubbles = [
    { src: bubble3, className: "left-20 sm:-left-8 -top-4 sm:top-20 z-50" },
    { src: bubble2, className: "-top-8 -right-20 sm:-right-32 w-5/12 sm:w-auto z-20" },
    { src: bubble1, className: "-left-16 sm:-left-32 -bottom-16 sm:-bottom-24 w-1/2 sm:w-auto z-20" },
    { src: bubble4, className: "-bottom-4 sm:bottom-0 -right-8 sm:-right-16 w-1/4 sm:w-auto z-50" },
  ];

  const features = [
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const disifyURL = `https://www.disify.com/api/email/${email}`;

    try {
      const response = await fetch(disifyURL);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();

      // if email is disposable and invalid
      if (data.disposable === true) {
        alert(`REQUEST FAILED: ${email} is invalid!`);
      }

      // if email is not disposable and valid
      if (data.disposable === false) {
        router.push("/success");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center relative lg:mt-16 w-11/12 m-auto sm:w-auto">
      {/* Header/Hero Section */}
      <section className="flex flex-col justify-center items-center md:w-4/5 xl:w-5/12 text-center mx-auto mt-12 mb-20 z-10">
        <h1 className="font-medium text-5xl">Startup Landing Page</h1>
        <p className="my-8 text-1xl">
          Lorem ipsum dolor sit amet, praesent sed ligula sit amet scelerisque, iterdum et malesuada fames ac ante ipsum
          primis.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full justify-center">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              className="border-2 p-3 w-full rounded"
              placeholder="Your email address..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="py-3 px-8 rounded mt-3 sm:mt-0 sm:ml-3 text-white uppercase font-bold">
            Get Early Access
          </button>
        </form>
      </section>

      {/* Bubble Section */}
      <section className="w-11/12  md:w-10/12 lg:w-auto m-auto">
        <div className="relative w-full">
          <div className="relative z-30 shadow-xl shadow-slate-300/50">
            <Image src={browser} alt="browser" />
          </div>
          <div className="absolute left-20 sm:-left-8 -top-4 sm:top-20 z-50">
            <Image src={bubble3} alt="bubble" />
          </div>
          {bubbles.map((bubble, idx) => (
            <BubbleImage key={idx} src={bubble.src} className={bubble.className} />
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/4 lg:w-2/3 mx-auto my-8 mt-32 z-10 sticky">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              src={feature.src}
              title={feature.title}
              description={feature.description}
              className={idx === 3 ? "oval" : ""}
            />
          ))}
        </div>
      </section>

      {/* feature background */}
      <div className="absolute bottom-0 z-0 feature-background">
        <Image src={background2} alt="" />
      </div>
    </div>
  );
};

export default Home;
