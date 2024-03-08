import styles from "./sidebar.module.css"
import { MdDashboard} from "react-icons/md";
import { MdFolder} from "react-icons/md";
import MenuLink from "./menuLink/menuLink"
import { FaBtc } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const menuItems = [
  {
    title: "pages",
    list : [
      {
        title: "dashboard",
        path: "/dashboard",
        icon:<MdDashboard/>
      },
      {
        title: "signals",
        path: "/dashboard/signals",
        icon:<FaBtc />
      },
      {
        title: "packages",
        path: "/dashboard/packages",
        icon:<GoPackage />
      }
    ]
  }

]


const Sidebar = () => {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
        {
        menuItems.map(cat => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item=>(
              <MenuLink key={cat.title} item={item}></MenuLink>
            ))}
          </li>
        ))
        }
        </ul>
      </div>
    )
  }
  
export default Sidebar