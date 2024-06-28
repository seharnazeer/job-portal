import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
  <div className=" w-full h-screen items-center flex justify-center"><SignUp path="/sign-up" />
  </div>
  )
}