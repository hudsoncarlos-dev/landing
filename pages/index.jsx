import Header from "../components/Header";

import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.scss";



export default function Home() {
  return (<div className={styles.container}>
    <Header></Header>
  </div>
    
  );
}
