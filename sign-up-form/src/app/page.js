"use client";
import Image from "next/image";
import styles from "./page.module.css";
import image from "public/images/illustration-sign-up-desktop.svg";
import imagePhone from "public/images/illustration-sign-up-mobile.svg";
import icon from "public/images/icon-list.svg";
import { useState } from "react";

export default function Home() {
	let imageAd = document.querySelector("#image");
	const [state, setState] = useState(false);
	const imageChanger = () => {
		setState(!state);
	};
	function windowSize() {
		let windowWidth = window.innerWidth || "";
		if (windowWidth > 1024) {
			let getImage = document.div.div.image;
			imageAd = getImage;
			console.log(imageAd);
		}
	}

	return (
		<main
			className={styles.main}
			onResize={windowSize}
		>
			<div className={styles.container}>
				<div>
					<div className={styles.body}>
						<h1>Stay updated!</h1>
						<p>Join 60,000+ product managers receiving monthly updates on:</p>
						<ul>
							<li>
								<Image
									src={icon}
									alt="list-icon"
									id="image"
								/>
								Product discovery and building what matters
							</li>
							<li>
								{" "}
								<Image
									src={icon}
									alt="list-icon"
								/>
								Measuring to ensure updates are a success
							</li>
							<li>
								<Image
									src={icon}
									alt="list-icon"
								/>
								And much more!
							</li>
						</ul>
					</div>

					<div className={styles.subscribe}>
						<label>Email address</label>
						<input
							type="email"
							placeholder="email@company.com"
						></input>
						<button type="submit">Subscribe to monthly newsletter</button>
					</div>
				</div>
				<div className={styles.image}>
					<Image
						src={image}
						alt="image illustration a tablet, graphics, and a web browser"
						id="image"
					/>
				</div>
			</div>
		</main>
	);
}
