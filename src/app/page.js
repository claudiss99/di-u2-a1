import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function Home() {
  return (
    <div>
      <Profile />
    </div>
  );
}
