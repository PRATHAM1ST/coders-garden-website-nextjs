import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import HeroAnimation from "./HeroAnimation";

const Hero: React.FC = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center text-center" id="hero">
			<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold overflow-hidden" id="hero-title">
				Welcome To Coders Garden
			</h1>
			<p className="mt-4 text-muted-foreground font-medium md:text-lg lg:text-xl overflow-hidden" id="hero-subtitle">
				We are a group of developers who love to code and learn new
				things.
			</p>
			<div className="my-12 flex justify-center items-center gap-5" id="hero-cta">
				<Button>
					<Link
						href={String(process.env.DISCORD_INVITE_LINK)}
						className="flex justify-between items-center gap-2 md:gap-3 text-xs md:text-lg font-bold whitespace-nowrap"
					>
						<DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Discord
					</Link>
				</Button>
				<Button>
					<Link
						href={String(process.env.GITHUB_INVITE_LINK)}
						className="flex justify-between items-center gap-2 md:gap-3 text-xs md:text-lg font-bold whitespace-nowrap"
					>
						<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Github
					</Link>
				</Button>
			</div>
			<HeroAnimation />
		</section>
	);
};

export default Hero;
