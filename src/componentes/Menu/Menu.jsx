import styles from './menu.module.css';
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><Link to={"/"}>About us</Link></li>
        <li> <Link to={"/collection"}>Collections</Link></li>
        <li> <Link to={"/"}>Services</Link></li>
        <li> <Link to={"/"}>Contact</Link></li>
      </ul>
     
    </nav>
  );
}
