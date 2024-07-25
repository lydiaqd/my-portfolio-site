import React from 'react'
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
        <div classNam="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl before:lg:text-6xl font-extrabold">
                    Hello, I'm Lydia Dames.
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="col-span-5">
                <div className="rounded-full w-500 w-500">
                    <Image src="/images/girl.jpg"
                    alt="Girl Image"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection