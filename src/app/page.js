import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import Profile from './Profile.js';
import Bio from "./Bio";
import TodoList from "./TodoList.js";
import TodoList2 from "./TodoList2.js";

export default function Home() {
  return (
    <div>
      <TodoList2/>
      <TodoList/>
      <Bio />
      <Gallery />
      <Profile />
    </div>
  );
}
