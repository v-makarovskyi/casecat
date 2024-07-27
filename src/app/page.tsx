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
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:pt-24 lg:pb-52 xl:pt-32 lg:space-x-0 xl:space-x-8 lg:grid lg:grid-cols-3">
          <div className="lg:col-span-2 pt-4 px-6 lg:px-0 lg:pb-0 sm:pb-10 md:pb-28">
            <div className="relative flex flex-col items-center lg:items-start">
              <div className="w-36 absolute left-0 -top-16 hidden lg:block">
                <Image
                  src="/cat-1.png"
                  alt="logo-image"
                  width={144}
                  height={144}
                />
              </div>
              <h1 className="w-fit mt-16 text-5xl md:text-6xl lg:text-7xl font-bold text-balance !leading-tight tracking-tight text-gray-900">
                Your Image on a{" "}
                <span className="px-2 bg-orange-600 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 md:pr-10 text-xl text-center lg:text-left max-w-prose md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCat allows you to protect your memories, not just your phone
                case.
              </p>
              <ul className="mt-8 font-medium">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5">
                    <Check className="h-5 w-5 text-orange-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-cener gap-1.5">
                    <Check className="h-5 w-5 text-orange-600" />5 year print
                    guarantee
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-5 w-5 text-orange-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex -space-x-4">
                  <Image
                    src="/users/user-1.png"
                    alt="user-image"
                    width={44}
                    height={44}
                    className="object-cover rounded-full ring-2 ring-orange-200"
                  />
                  <Image
                    src="/users/user-2.png"
                    alt="user-image"
                    width={44}
                    height={44}
                    className="object-cover rounded-full ring-2 ring-orange-200"
                  />
                  <Image
                    src="/users/user-3.png"
                    alt="user-image"
                    width={44}
                    height={44}
                    className="object-cover rounded-full ring-2 ring-orange-200"
                  />
                  <Image
                    src="/users/user-4.png"
                    alt="user-image"
                    width={44}
                    height={44}
                    className="object-cover rounded-full ring-2 ring-orange-200"
                  />
                  <Image
                    src="/users/user-5.png"
                    alt="user-image"
                    width={44}
                    height={44}
                    className="object-cover rounded-full ring-2 ring-orange-200"
                  />
                </div>

                <div className="flex flex-col items-center sm:items-start gap-2">
                  <div className="flex gap-0.5">
                    <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                    <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                    <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                    <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                    <Star className="h-5 w-5 fill-orange-500 text-orange-500" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-14 md:mt-16 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="your-image"
                className="absolute w-40 lg:w-52 left-56 sm:-top-32 xl:-top-40 select-none hidden sm:block lg:hidden xl:block h-fit"
              />
              <img
                src="line.png"
                alt="line image"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" srcImg="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
