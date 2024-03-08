"use client"

import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { MdSearch} from "react-icons/md";

const Navbar = () => {

  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder="search" className={styles.input}></input>
        </div>
      </div>
    </div>
  )
}

export default Navbar