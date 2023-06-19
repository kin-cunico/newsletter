import Image from "next/image";
import styles from "./page.module.css";
import image from "public/images/illustration-sign-up-mobile.svg";
import icon from "public/images/icon-list.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.image}>
					<Image
						src={image}
						alt="image illustration a tablet, graphics, and a web browser"
					/>
				</div>
				<div className={styles.body}>
					<h1>Stay updated!</h1>
					<p>Join 60,000+ product managers receiving monthly updates on:</p>
					<ul>
						<li>
							<Image
								src={icon}
								alt="list-icon"
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
		</main>
	);
}
