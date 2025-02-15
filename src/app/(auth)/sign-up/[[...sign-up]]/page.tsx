import Link from "next/link"
import { SignUp } from '@clerk/nextjs'
import Image from "next/image";
import { logo } from "@/assets";


export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function SignUpPage() {
  return (
    <div className="container w-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <Link
        href="/sign-in"
        className={
          "absolute right-4 top-4 md:right-8 md:top-8"
        }
      >
        Login
      </Link>
      <div className="hidden h-full bg-muted lg:block" />
      <div className="lg:p-8">
        <div className="flex w-full flex-col justify-center items-center mx-auto  space-y-4 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div  className="mx-auto mt-2 flex items-center justify-center" >
            <Image src={logo} height={40} width={40} alt="logo"/>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignUp />
        </div>
      </div>
    </div>
  )
}
