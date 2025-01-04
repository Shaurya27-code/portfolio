import React from 'react'
import User from './assets/ashish.svg.jpeg'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Exp1 from './assets/splunk.svg'
import Exp2 from './assets/buildspace.jpg'
import Exp3 from './assets/mhacks-9.png'
import { ConfettiButton } from "@/components/ui/confetti";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
function App() {
  return (
    <>
         <BlurFade delay={0.50} inView>
        <section className='mt-12 max-w-2xl mx-auto'>
          <div className="flex gap-14 items-center">
            <div>
              <h1 className='text-4xl font-black'>Hey, I am Ashish</h1>
              <p className='font-light text-lg mt-2'>Built responsive, user-friendly web interfaces using Angular and modern UI/UX principles, ensuring clean and scalable code.</p>
              {/* <div className="flex mt-3 gap-3">
                <a href="" className='text-xl'><FaTwitter /></a>
                <a href="" className='text-xl'><FaLinkedin /></a>
              </div> */}
            </div>
            <img src={User} className='h-40 w-40 object-cover rounded-full' alt="" />
          </div>

        </section>

        <section className='mt-12 max-w-2xl mx-auto'>
                <h1 className='text-2xl font-black'>About Me</h1>
                <p className='font-light text-neutral-500'>I am a B-Tech graduate in Electronics and Communication with 1+ year of experience as a Frontend Developer <span className='underline text-black'>I started my journey with a 3-month internship at Inteliment Technologies and later worked as an Associate Software Engineer at Rubiscape. Passionate about creating intuitive and responsive web applications, I specialize in Angular, HTML, CSS, and JavaScript.</span>. </p>
        </section>


        <section className='mt-12 max-w-2xl mx-auto'>
                <h1 className='text-2xl font-black'>Work Experience</h1>
                <p className='font-light text-neutral-500'>1+ year as Frontend Developer at Rubiscape, Inteliment.</p>
                <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <img src={Exp1} className='h-12 rounded-full' alt="" />
                          <div className="">
                            <h2 className='text-sm'>Splunk Technologies</h2>
                            <p className='text-xs'>Senior Software Developer</p>
                          </div>
                      </div>
                      <p className='text-neutral-500 text-sm font-light'>May 2021 - Oct 2022</p>
                    </div>
                </div>


                <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <img src={Exp2} className='h-12 rounded-full' alt="" />
                          <div className="">
                            <h2 className='text-sm'>Build Space</h2>
                            <p className='text-xs'>Software Developer</p>
                          </div>
                      </div>
                      <p className='text-neutral-500 text-sm font-light'>May 2021 - Oct 2022</p>
                    </div>
                </div>


                <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                          <img src={Exp3} className='h-12 rounded-full' alt="" />
                          <div className="">
                            <h2 className='text-sm'>M Hacks 9</h2>
                            <p className='text-xs'>Frontend Developer</p>
                          </div>
                      </div>
                      <p className='text-neutral-500 text-sm font-light'>May 2021 - Oct 2022</p>
                    </div>
                </div>
        </section>

        <section className='mt-12 mb-36 max-w-2xl mx-auto'>
              <h1 className='text-2xl font-black'>Get In Touch</h1>
              <p className='font-light text-neutral-500'>Want to chat? Just shoot me a dm with a direct question on twitter and I'll response whenever I can. I will ignore all soliciting.</p>
              <div className="relative">
              <ConfettiButton className='mt-4 px-5 font-light rounded-full'>Text Me On Twitter</ConfettiButton>
              </div>
        </section>
        </BlurFade>


    </>
  )
}

export default App
