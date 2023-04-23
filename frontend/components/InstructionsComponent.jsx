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
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://s2-docs.vercel.app"}
				>
					<div className={styles.button}>
						<p>docs</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://github.com/0xwaya/web3-4dummies"}
				>
					<div className={styles.button}>
					<p>clone</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"./sales"}
				>
					<div className={styles.button}>
						<p>nft sales sample </p>
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
							href="https://github.com/0xWaya/s2-docs"
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
