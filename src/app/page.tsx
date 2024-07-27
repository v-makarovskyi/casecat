import Image from "next/image";
import { Jost } from "next/font/google";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/phone";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:pt-24 lg:pb-52 xl:pt-32 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute left-0 -top-16 hidden lg:block w-36">
                {/* <div className="h-28 absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-50 via-gray-50/50"/> */}
                <Image
                  src="/cat-1.png"
                  alt="main-image-1"
                  width={144}
                  height={144}
                />
              </div>
              <h1 className="mt-16 relative w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-orange-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 lg:pr-10 max-w-prose text-lg text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one of one</span> phone case.
                CaseCat allows you to protect your memories, not just your phone
                case.
              </p>

              <ul className="mt-8 font-medium">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h5 w-5 text-orange-600 shrink-0" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 text-orange-600 shrink-0" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 text-left text-orange-600 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src="/users/user-1.png"
                    alt="user-1"
                    width={40}
                    height={40}
                    className="inline-block ring-2 ring-orange-200 rounded-3xl object-cover"
                  />
                  <Image
                    src="/users/user-2.png"
                    alt="user-2"
                    width={40}
                    height={40}
                    className="inline-block ring-2 ring-orange-200 rounded-3xl object-cover"
                  />
                  <Image
                    src="/users/user-3.png"
                    alt="user-3"
                    width={40}
                    height={40}
                    className="inline-block ring-2 ring-orange-200 rounded-3xl object-cover"
                  />
                  <Image
                    src="/users/user-4.png"
                    alt="user-4"
                    width={40}
                    height={40}
                    className="inline-block ring-2 ring-orange-200 rounded-3xl object-cover"
                  />
                  <Image
                    src="/users/user-5.png"
                    alt="user-5"
                    width={40}
                    height={40}
                    className="inline-block ring-2 ring-orange-200 rounded-3xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-fit mt-32 lg:mt-20 px-8 sm:px-16 md:px-0 lg:col-span-1 w-full flex justify-center">
            <div className="relative md:max-w-lg">
              <img
                src="/your-image.png"
                alt="your-image"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* PROPOSITION */}
      <section>
        
      </section>
    </div>
  );
}
