"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const Success = () => {
  const [countdown, setCountdown] = useState(8);
  const router = useRouter();

  // adds a countdown to redirect the client from the success apge
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/");
    }, countdown * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router, countdown]);

  return (
    <div className="my-16 z-10 h-screen relative">
      <h2 className="text-4xl text-center">You have successfully signed up for our mailing list!</h2>
      <p className="text-center mt-8">You will now be redirected... {countdown}</p>
    </div>
  );
};

export default Success;
