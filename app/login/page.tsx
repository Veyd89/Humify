"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import Image from "next/image";

export default function Login() {
  const loginClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO: Will deleted soon just debug
    console.log("HELLO Just Test");
  };
  return (
    <div className="w-full">
      <div className="flex w-full ">
        <div className="flex-1 bg-[#7B1113]">
          <Image
            className="h-screen"
            src={"/assets/prop-login3.svg"}
            alt="prop-login"
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex flex-col items-center flex-1 pt-24 bg-primary">
          {/* <div className="flex justify-center"> */}
          <div className="flex flex-col gap-20">
            <div className="">
              <Image
                className="w-2xs object-cover"
                src="/assets/Logo-humify-new.png"
                alt="logo"
                width={1920}
                height={1080}
              />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-warm font-semibold">
                Welcome Back to{" "}
                <span className="text-brand font-bold text-3xl">Humify</span>
              </h1>
              <p>Please enter your details!</p>
            </div>
            <form className="w-full flex flex-col gap-6" action="">
              <div className="flex flex-col gap-4">
                <Input type="email" label="Email" auth />
                <Input type="email" label="Username" auth />
                <Input type="password" label="Password" auth />
              </div>
              <Button
                label="Login"
                type="button"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  loginClickHandler(e)
                }
              />
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
