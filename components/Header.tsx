import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SearchIcon, UserIcon, } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
    const { data: session } = useSession();

    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
            <div className="flex items-center justify-center md:w-1/5">
           
            </div>
            <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
                <a className="headerLink">Product</a>
                <a className="headerLink">Explore</a>
                <a className="headerLink">Support</a>
                <a className="headerLink">Business</a>
            </div>
            <div className="flex items-center justify-center gap-x-4 md:w-1/5">
                <SearchIcon className="headerIcon" />


                {session ? (
                    <Image
                        src={
                            session.user?.image ||
                            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                        }
                        alt=""
                        className="cursor-pointer rounded-full"
                        width={34}
                        height={34}
                        onClick={() => signOut()}
                    />
                ) : (
                    <UserIcon className="headerIcon" onClick={() => signIn()} />
                )}
            </div>
        </header>
    );
}

export default Header;