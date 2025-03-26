"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  
  const handleClick = () => {
    if (isSignedIn) {
      router.push("/dashboard"); // If logged in, go to dashboard
    } else {
      router.push("/sign-in?redirectTo=/dashboard"); // Otherwise, go to sign-in
    }
  };

  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1494185728463-86366f396213?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Paisa ud gaya?
            <strong className="font-extrabold text-primary sm:block"> Track kr ke dekh, </strong>
            <strong className="font-extrabold text-primary sm:block"> shyad wapis aa jaye! </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and save tons of money.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleClick}
              className="block w-full rounded-sm bg-primary px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-third focus:ring-3 focus:outline-none sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}