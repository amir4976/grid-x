"use client";
import Image from "next/image";
import { BsCodeSlash } from "react-icons/bs";
import { GoCodescanCheckmark } from "react-icons/go";
import { FaBugSlash } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import "aos/dist/aos.css";
import InfiniteMarquee from "@/components/Modules/marquee/Marquee";

export default function Home() {
  // calculate years of experience
  function calculateYearsOfExperience(registrationYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - registrationYear;
  }
  // Example usage:
  const registrationYear = 2021; // Example year of registration
  const yearsOnSite = calculateYearsOfExperience(registrationYear);

  return (
    <>
      {/* landing profile  {1} */}
      <div className="w-full h-fit grid grid-cols-1 gap-5 mt-3 lg:grid-cols-2 px-3">
        <div className="col-span-1 ">
          <div
            className="w-full h-full shadow-Box flex max-md:flex-col items-center relative p-11"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <div className="p-3 relative">
                <div className="absolute -top-1 -right-1  z-10 animate-spin animated ease-linear infinite">
                  <Image src={"/star.svg"} width={50} height={50} alt="star" />
                </div>
              <div className="relative w-52 h-52  rounded-br-3xl rounded-tl-3xl overflow-hidden  ">
                <Image
                  src={"/cover.jpg"}
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-full h-full  object-cover "
                />
              </div>
            </div>

            <article className=" w-1/2 h-[90%]  max-md:w-full  info prose prose-neutral flex-col flex prose-h1:mb-0 prose-h1:text-white justify-between p-3 text-gray-500 ">
              <h6>یک طراح</h6>
              <h1>امیر حسین احمدی</h1>
              <h6>من یک طراح وب مستقر درایران هستم.</h6>
            </article>
          </div>
        </div>

        <div className="col-span-1  ">
          <div className="w-full h-full flex flex-col items-center relative gap-5">
            <div
              className="w-full h-20 max-lg:h-32 shadow-Box flex max-md:flex-col items-center relative "
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-once="true"
            >
              {/* marquee */}
              <div className="flex items-center justify-between w-full h-full">
                <InfiniteMarquee />
              </div>
              {/* marquee end */}
            </div>
            {/* aboutme card and my work card */}
            <div className="w-full h-full relative  grid grid-cols-1 sm:grid-cols-4 gap-5 ">
              <div
                className="col-span-2 w-full h-full shadow-Box rounded-xl flex flex-col justify-center items-center p-5"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="w-full h-full flex flex-col justify-between items-center ">
                  <Image src="/sign.png" alt="about" width={300} height={300} />
                  <div className="w-full flex justify-between items-center">
                    <span>درباره من</span>
                    <Link href="/aboutMe">
                      <Image
                        src="/icon.svg"
                        alt="about"
                        width={50}
                        height={50}
                        className="rotate-180 LinkBtn"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-span-2 w-full h-full shadow-Box rounded-xl flex flex-col justify-center items-center p-5"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="w-full h-full flex flex-col justify-between items-center ">
                  <Image
                    src="/my-works.png"
                    alt="about"
                    width={300}
                    height={300}
                  />
                  <div className="w-full flex justify-between items-center">
                    <span>کارهای من</span>
                    <Link href={"/My-works"}>
                      <Image
                        src="/icon.svg"
                        alt="about"
                        width={50}
                        height={50}
                        className="rotate-180 LinkBtn"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* aboutme card and my work card end */}
          </div>
        </div>
      </div>
      {/* landing end */}

      {/* langing blog {2} */}
      <div className="w-full h-fit grid grid-cols-1 gap-5 mt-5 lg:grid-cols-4 px-3 ">
        <div
          className="col-span-1 w-full h-full shadow-Box rounded-xl flex flex-col justify-center items-center p-5"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="w-full h-full flex flex-col justify-between items-center ">
            <Image src="/gfonts.png" alt="about" width={300} height={300} />
            <div className="w-full flex justify-between items-center">
              <span>وبلاگ</span>
              <Image
                src="/icon.svg"
                alt="about"
                width={50}
                height={50}
                className="rotate-180 LinkBtn"
              />
            </div>
          </div>
        </div>

        <div
          className="col-span-1 lg:col-span-2 shadow-Box p-5 flex flex-col justify-between"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className=" w-full h-fill my-5 md:my-0 px-20 max-md:px-0 text-4xl flex justify-between items-center transition-all">
            <div className="shadow-Box hover:bg-white transition-all hover:text-black rounded-full w-20 h-20 flex justify-center items-center flex-col">
              {" "}
              <BsCodeSlash />
            </div>
            <div className="shadow-Box hover:bg-white transition-all hover:text-black rounded-full w-20 h-20 flex justify-center items-center flex-col">
              {" "}
              <GoCodescanCheckmark />
            </div>
            <div className="shadow-Box hover:bg-white transition-all hover:text-black rounded-full w-20 h-20 flex justify-center items-center flex-col">
              {" "}
              <FaBugSlash />
            </div>
            <div className="shadow-Box hover:bg-white transition-all hover:text-black rounded-full w-20 h-20 flex justify-center items-center flex-col">
              {" "}
              <IoMdDoneAll />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>ارائه خدمات</span>
            <Link href={"/servicses"}>
              <Image
                src="/icon.svg"
                alt="about"
                width={50}
                height={50}
                className="rotate-180 LinkBtn"
              />
            </Link>
          </div>
        </div>

        <div
          className="col-span-1 shadow-Box p-5 flex flex-col justify-between "
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <div className="w-full flex justify-evenly items-center shadow-Box h-fit p-3 mb-3">
            <Link href={"https://github.com/amir4976"}>
              <div className=" rounded-full w-20 h-20  bg-gray-600/10 hover:bg-white hover:text-black flex justify-center items-center text-2xl">
                <FaGithub />
              </div>
            </Link>
            <Link href={"https://instagram.com/amir_h_ahmadi_i.m"}>
              <div className=" rounded-full w-20 h-20  bg-gray-600/10 hover:bg-white hover:text-black flex justify-center items-center text-2xl">
                <RiInstagramFill />
              </div>
            </Link>
          </div>

          <div className="w-full flex justify-between items-center">
            <span>راهای ارتباطی</span>
            <Link href={"/ContactMe"}>
              <Image
                src="/icon.svg"
                alt="about"
                width={50}
                height={50}
                className="rotate-180 LinkBtn"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* langing blog end */}

      {/* testimonial */}
      <div className="w-full h-fit grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2 px-3 ">
        <div
          className="col-span-1 w-full h-full shadow-Box rounded-xl p-5 grid grid-cols-2 gap-5  lg:grid-cols-3 px-3 max-md:place-self-center"
          data-aos="zoom-in"
          data-aos-delay="700"
          data-aos-once="true"
        >
          <div className=" col-span-1 p-5 flex justify-center px-8 py-10 items-center flex-col shadow-Box">
            <span className="mb-5 font-bold text-3xl">10+</span>
            <span className="text-gray-500 text-sm">مشتری</span>
          </div>
          <div className=" col-span-1 p-5 flex justify-center px-8 py-10 items-center flex-col shadow-Box">
            <span className="mb-5 font-bold text-3xl">+50</span>
            <span className="text-gray-500 text-sm">پروژه</span>
          </div>
          <div className=" col-span-1 p-5 flex justify-center px-8 py-10 items-center flex-col shadow-Box">
            <span className="mb-5 font-bold text-3xl">+{yearsOnSite}</span>
            <span className="text-gray-500 text-sm">سال سابقه</span>
          </div>
        </div>

        <div
          className=" col-span-1 w-full  shadow-Box rounded-xl flex flex-col justify-end items-center p-5 relative  max-lg:h-44"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-once="true"
        >
          <Image
            src="/icon2.png"
            alt="about"
            width={30}
            height={30}
            className=" absolute top-0 right-10"
          />
          <div className=" w-full flex justify-between items-center">
            <span className="text-3xl">
              بیاید
              <br /> با هم <span className="text-purple-600">کار کنیم</span>
            </span>
            <Link href={"/servicses"}>
              <Image
                src="/icon.svg"
                alt="about"
                width={50}
                height={50}
                className="rotate-180 LinkBtn"
              />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* testimonial end */}
    </>
  );
}
