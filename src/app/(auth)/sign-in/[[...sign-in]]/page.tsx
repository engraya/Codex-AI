
import { Metadata } from "next";
import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import { SignIn } from '@clerk/nextjs'
import Image from "next/image";


export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};


export default function SignInPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={"absolute left-4 top-4 md:left-8 md:top-8"}
      >
        <>
          <IoReturnDownBack  className="mr-2 size-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div  className="mx-auto flex items-center justify-center" >
          <Image src="" height={40} width={40} alt="logo"/>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
