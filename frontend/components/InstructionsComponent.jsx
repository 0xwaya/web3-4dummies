import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";

export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					web3-dapp<br></br><span> 4  dummies</span>
				</h1>
				<p>
					to edit go to {" "}
					<span>/InstructionsComponent.jsx</span>
				</p><br></br>
		<div className={styles.buttons_container}>
			<p>
				<b>web3 4dummies</b>: 
				 a guide for building web3 dapps with Next.js and Alchemy.
				 <br></br>	<br></br>	
				2 options to get started:
				<br></br>
				<br></br>
				<li><span>Clone this dapp</span> button, follow instructions in the
				<span>README.md</span> file</li>
			
				<br></br>
			
				<li>Create a new dapp from scratch with<span>Installation guide</span>button
				</li>
				</p>
		</div>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://github.com/0xwaya/web3-4dummies"}
				>
					<div className={styles.button}>
					<p>Clone this dapp</p>
					</div>
				</a><a
					target={"_blank"}
					href={"https://web3docs.vercel.app"}
				>
					<div className={styles.button}>
						<p>Installation guide</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"./sales"}
				>
					<div className={styles.button}>
						<p>NFT sales component </p>
					</div>
				</a>
			</div>
			<br></br>
			<div className={styles.footer}>
				<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "120px", height: "21px" }}
						src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/0xwaya/web3-4dummies"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://twitter.com/0xwaya"
							target={"_blank"}
						>
							Follow on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
