import styles from "../styles/Home.module.css";
import NftCollectionSales from "../components/NftCollectionSalesDisplay";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
       <NftCollectionSales collectionAddress={"0x1e988ba4692e52Bc50b375bcC8585b95c48AaD77"}/>
       </main>
    </div>
  );
}
