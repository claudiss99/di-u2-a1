import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import Profile from './Profile.js';
import Bio from "./Bio";

export default function Home() {
  return (
    <div>
      <Bio />
      <Gallery />
      <Profile />
    </div>
  );
}
