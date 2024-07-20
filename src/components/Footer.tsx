import Image from "next/image"
import { SparklesCore } from "./ui/Sparkles"

type Props = {}
const Footer = (props: Props) => {
  return (
    <div className="  w-full flex flex-col items-center  overflow-hidden rounded-md">
         <div className="flex w-full items-center justify-center">
        <div className=" w-[80%] h-20 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[75%] blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[75%]" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
         </div>
         </div>
         <div className=" mb-12 w-[60%] justify-between md:flex">
            <Image src={'/DolphineLogo.svg'} alt="footer Logo" width={100} height={100}/>
            <div className="gap-x-9 md:flex">
                <div>
                    <span className="text-lg font-medium uppercase text-white/40">
                        Resources
                    </span>
                    <ul className="mt-3 flex flex-col gap-y-3">
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Docs
                        </a>
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Blog
                        </a>
            </ul>
                </div>
                <div>
                    <span className="text-lg font-medium uppercase text-white/40">
                        Legal information
                    </span>
                    <ul className="mt-3 flex flex-col gap-y-3 ">
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                           Privacy Policy
                        </a>
                        <a
                        className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Terms of Services
                        </a>
                        <a
                        className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Cookie Policy
                        </a>
            </ul>
                </div>
                <div>
                    <span className="text-lg font-medium uppercase text-white/40">
                        Products
                    </span>
                    <ul className="mt-3 flex flex-col gap-y-3">
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                           CLI
                        </a>
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Secreat Scanner
                        </a>
            </ul>
                </div>
                <div>
                    <span className="text-lg font-medium uppercase text-white/40">
                        Socials
                    </span>
                    <ul className="mt-3 flex flex-col gap-y-3 ">
                        <a className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                           Linkedin
                        </a>
                        <a
                        className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                            X.com

                        </a>
                        <a
                        className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                          Discord
                        </a>
                        <a
                        className="hover:text-white text-white/60"
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                        >
                          Facebook
                        </a>
            </ul>
                </div>
            </div>
         </div>
    </div>
  )
}
export default Footer