import { Link } from "@remix-run/react";
import styles from "./styles.module.css";

export default function RouteAbout() {
  return (
    <div>
      <h1>About page</h1>
      <div className={styles.container}>
        This text should be inside a big red banner
      </div>
      <ul>
        <li>
          <Link to="/broken">
            Now click here and then use "Back" of your browser
          </Link>
        </li>
      </ul>
    </div>
  );
}
