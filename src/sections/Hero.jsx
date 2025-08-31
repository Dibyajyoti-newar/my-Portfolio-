import React from 'react'
import Background from 'three/src/renderers/common/Background.js'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModel/HeroExperience'
import { blur } from 'three/tsl'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="hero-layout">
                {/* LEFT: Hero Content */}
                <header className="pt-90 pl-10 xl:pt-0 xl:pr-140 ">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Hi, I’m Dibyajyoti Newar</h1>
                            <h1 className="text-white-50">
                                I am into
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt="person"
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                        </div>

                        <p className="text-[#7e65a8] md:text-xl relative z-10 pointer-events-none pr-8 sm:pr-40">
                            Studying Electronics and Communication Engineering at NIT Silchar, I’m on a path of exploration — crafting a unique blend of skills, fueled by curiosity and focused on creating meaningful solutions.
                        </p>

                        <Button
                            text="See My Resume"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter"
                        />
                    </div>
                </header>
                {/* RIGHT: 3D Model or Visual */}
                {<figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>}
            </div>

            <figure>
                <img
                    src="/images/djnImage.jpeg"
                    alt="DJN"
                    className="w-[250px] h-[250px] xl:w-[320px] xl:h-[350px]
                    rounded-full object-cover absolute top-30 left-1/2 -translate-x-1/2
                    xl:top-55 xl:left-auto xl:right-45 xl:translate-x-0 shadow-[10px_15px_100px_rgba(150,150,155,0.54)] z-13"
                />
            </figure>

        </section>
    )
}

export default Hero
