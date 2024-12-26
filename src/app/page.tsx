import Image from "next/image";
import browser from "@/assets/browser.svg";
import bubble1 from "@/assets/bubbles/bubble-1.svg";
import bubble2 from "@/assets/bubbles/bubble-2.svg";
import bubble3 from "@/assets/bubbles/bubble-3.svg";
import bubble4 from "@/assets/bubbles/bubble-4.svg";
import feature1 from "@/assets/features/feature-1.svg";
import feature2 from "@/assets/features/feature-2.svg";
import feature3 from "@/assets/features/feature-3.svg";
import feature4 from "@/assets/features/feature-4.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center w-1/2 text-center mx-auto mt-12 mb-20">
        <h1 className="font-bold text-4xl">Startup Landing Page</h1>
        <p className="my-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium, error fugiat doloremque excepturi
          officia!
        </p>
        <div className="flex">
          <label htmlFor="">
            <input type="text" className="border-2 p-3 w-full rounded" placeholder="Your email address..." />
          </label>
          <button type="submit" className="py-3 px-8 rounded ml-3 text-white uppercase font-bold">
            Get Early Access
          </button>
        </div>
      </section>
      <section>
        <div className="relative">
          <div className="relative z-30 shadow-lg shadow-slate-300/50">
            <Image src={browser} alt="browser" />
          </div>
          <div className="absolute -left-8 top-20 z-50">
            <Image src={bubble3} alt="bubble" />
          </div>
          <div className="absolute -top-8 -right-32 z-20">
            <Image src={bubble2} alt="bubble" />
          </div>
          <div className="absolute -left-32 -bottom-24 z-20">
            <Image src={bubble1} alt="bubble" />
          </div>
          <div className="absolute bottom-0 -right-16 z-50">
            <Image src={bubble4} alt="bubble" />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-6 w-2/3 mx-auto my-8 mt-32">
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
          <div className="flex flex-col justify-center items-center mx-auto my-8 text-center">
            <div className=" bg-white rounded-full shadow-slate-200/50 shadow-lg">
              <Image src={feature4} alt="feature" />
            </div>
            <h4 className="font-bold text-xl my-3">Discover</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
