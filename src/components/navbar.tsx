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
        <div>
          <Link href="/">
            case <span>CAT</span>
          </Link>
          <div>
            {!user ? (
              <>
                <Link href="/api/auth/logout" className="">
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link href="/dashboard" className="">
                    Dashboard 📎
                  </Link>
                ) : null}
                <Link href="/configure/upload" className="">
                  Create case <ArrowRight />
                </Link>
              </>
            ) : (
              <>
                <Link href="/api/auth/register" className="">
                  Sign up
                </Link>
                <Link href="/api/auth/login" className="">
                  Login
                </Link>

                <div />

                <Link href="/configure/upload">
                  Create case <ArrowRight />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
