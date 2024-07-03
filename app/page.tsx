import HeaderSection from "@/components/headersection";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import JobDesc from "./job/[id]/page";
import JobSection from "@/components/job";
export default function Home() {
  return (
  <>
  {/* <Navbar /> */}
  {/* <HeaderSection /> */}
  <JobSection />
  <ToastContainer />
  </>
  );
}
