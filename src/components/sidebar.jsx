import { inter, varela } from "@/fonts.js";
import React from 'react';
import { HomeIcon, InformationCircleIcon, HeartIcon, FireIcon } from "@heroicons/react/20/solid";
import Link from 'next/link';

const Sidebar = () => {
		const linkArray = [
			{
				href: "/",
				title: "Home",
				icon: () => { return (<HomeIcon className="h-6 w-6 inline-block mr-2"/>) }
			},
			{
				href: "/about",
				title: "About",
				icon: () => { return (<InformationCircleIcon className="h-6 w-6 inline-block mr-2"/>) }
			},
			{
				href: "/Popular",
				title: "Popular",
				icon: () => { return (<FireIcon className="h-6 w-6 inline-block mr-2"/>) }
			},
			{
				href: "/favourites",
				title: "Favourites",
				icon: () => { return (<HeartIcon className="h-6 w-6 inline-block mr-2"/>) }
			},
		];
		return (
			<div>

			<div className="fixed top-0 left-0 h-full w-[250px] bg-gray-800 text-white flex flex-col justify-around">
				<div className="border-2" ></div>

				<ul className="space-y-2 basis-2/3 flex flex-col text-gray-800 gap-[50px] justify-center uppercase  ">
					{linkArray.map((link) => {
						return (
							<li className=" bg-[#1ED760] px-12 rounded ">
								<Link href={link.href} className="flex flex-row align-center" >
									{link.icon()}<p className={`${inter.className} inline font-weight-[700] `} >{link.title}</p>
								</Link>
							</li>
							)
					})}
				</ul>
				<div className={`${varela.className} flex flex-row align-center justify-end px-4`} >
					<Link href="/login" class=" bg-[#1ED760] text-white font-bold py-2 px-4 rounded hover:bg-green-600 ">Log In</Link>
				</div>
			</div>

			</div>
		)
}

export default Sidebar;
