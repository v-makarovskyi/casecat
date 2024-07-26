import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default async function Navbar() {
  const user = true;
  const isAdmin = true;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="h-14 flex items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            case <span className="text-green-600">CAT</span>
          </Link>
          <div className="h-full flex flex-row items-center space-x-4">
            {!user ? (
              <>
                <Link href="/api/auth/logout" className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost'
                })}>
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link href="/dashboard" className={buttonVariants({
                    size:'sm',
                    variant:'ghost'
                  })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link href="/configure/upload" className={buttonVariants({
                    size:'sm',
                    className:'hidden sm:flex items-center gap-1'
                })}>
                  Create case <ArrowRight className="w-5 h-5 ml-1.5"/>
                </Link>
              </>
            ) : (
              <>
                <Link href="/api/auth/register" className={buttonVariants({
                    size:'sm',
                    variant:'ghost'
                })}>
                  Sign up
                </Link>
                <Link href="/api/auth/login" className={buttonVariants({
                    size: 'sm',
                    variant:'ghost'
                })}>
                  Login
                </Link>

                <div className="hidden sm:block h-8 w-px bg-zinc-200"/>

                <Link href="/configure/upload" className={buttonVariants({
                    size:'sm',
                    className: 'hidden sm:flex items-center gap-1'
                })}>
                  Create case <ArrowRight className="h-5 w-5 ml-1.5"/>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
