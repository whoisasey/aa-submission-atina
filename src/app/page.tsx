import Image from "next/image";
import browser from "@/assets/browser.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center w-1/2 text-center m-auto mt-12">
        <h1 className="text-4xl font-bold">Startup Landing Page</h1>
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
        <div>
          <div>
            <Image src={""} alt="" />
          </div>
          <div>
            <Image src={""} alt="" />
          </div>
          <div>
            <Image src={""} alt="" />
          </div>
          <div>
            <Image src={""} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
