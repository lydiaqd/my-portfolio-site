import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my12 md:my-12 py-24 gap-4">
        <div>
            <h5 className ="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              {""}
                evriovoii erovnevnivev  dwedewvre ver-verv revre-w-- wenwreifnr
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="github.com">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="Linkedin.com">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" type="email" className="text-white">Your email</label>
                <input type="email" id="email" required placeholder="jacob@google.com"/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection