import Image from "next/image";
import browser from "@/assets/browser.svg";
import feature1 from "@/assets/features/feature-1.svg";
import feature2 from "@/assets/features/feature-2.svg";
import feature3 from "@/assets/features/feature-3.svg";
import feature4 from "@/assets/features/feature-4.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center w-1/2 text-center m-auto mt-12">
        <h1 className="font-bold text-4xl">Startup Landing Page</h1>
        <p className="my-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos laudantium, error fugiat doloremque excepturi
          officia!
        </p>
        <label htmlFor="">
          <input type="text" />
          **Input Goes Here**
        </label>
      </section>
      <section>
        **other assets go here**
        <Image src={browser} alt="browser" />
      </section>
      <section>
        <div className="grid grid-cols-2 gap-6 w-2/3 mx-auto my-8">
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
