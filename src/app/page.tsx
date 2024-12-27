"use client";

import { FormEvent, useState } from "react";

import Image from "next/image";
import background1 from "@/assets/background.svg";
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

const Home = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

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
    <div className="flex flex-col justify-center items-center relative mt-16 sm:mt-32 w-11/12 m-auto sm:w-auto">
      <div className="absolute background z-10">
        <Image src={background1} alt="" />
      </div>
      <section className="flex flex-col justify-center items-center sm:w-3/5 lg:w-1/2 text-center mx-auto mt-12 mb-20 z-10">
        <h1 className="font-bold text-4xl">Startup Landing Page</h1>
        <p className="my-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium, error fugiat doloremque excepturi
          officia!
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-4/5 justify-center">
          <form onSubmit={handleSubmit}>
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
        </div>
      </section>
      <section>
        <div className="relative w-11/12 sm:w-10/12 lg:w-auto m-auto">
          <div className="relative z-30 shadow-lg shadow-slate-300/50">
            <Image src={browser} alt="browser" />
          </div>
          <div className="absolute left-20 sm:-left-8 -top-4 sm:top-20 z-50">
            <Image src={bubble3} alt="bubble" />
          </div>
          <div className="absolute -top-8 -right-20 sm:-right-32 w-5/12 sm:w-auto z-20">
            <Image src={bubble2} alt="bubble" />
          </div>
          <div className="absolute -left-16 sm:-left-32 -bottom-16 sm:-bottom-24 w-1/2 sm:w-auto z-20">
            <Image src={bubble1} alt="bubble" />
          </div>
          <div className="absolute -bottom-4 sm:bottom-0 -right-8 sm:-right-16 w-1/4 sm:w-auto z-50">
            <Image src={bubble4} alt="bubble" />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/4 lg:w-2/3 mx-auto my-8 mt-32 z-10 sticky">
          <div className="flex flex-col justify-center items-center mx-auto my-8 text-center">
            <div className=" bg-white rounded-full shadow-slate-200/50 shadow-lg">
              <Image src={feature1} alt="feature" />
            </div>
            <h4 className="font-bold text-xl my-3">Discover</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quas.</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto my-8 text-center ">
            <div className=" bg-white rounded-full shadow-slate-200/50 shadow-lg">
              <Image src={feature2} alt="feature" />
            </div>
            <h4 className="font-bold text-xl my-3">Discover</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quas.</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto my-8 text-center">
            <div className=" bg-white rounded-full shadow-slate-200/50 shadow-lg">
              <Image src={feature3} alt="feature" />
            </div>
            <h4 className="font-bold text-xl my-3">Discover</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quas.</p>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto my-8 text-center ">
            <div className="oval w-full flex justify-center items-center">
              <div className=" bg-white rounded-full shadow-slate-200/50 shadow-lg w-fit">
                <Image src={feature4} alt="feature" />
              </div>
            </div>
            <h4 className="font-bold text-xl my-3">Discover</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quas.</p>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 z-0 feature-background">
        <Image src={background2} alt="" />
      </div>
    </div>
  );
};

export default Home;
