import styles from "./Layout.module.css";
import Header from "../header/Header";
import Now from "../now/Now";
import Forecast from "../forecast/Forecast";
import Highlights from "../highlights/Highlights";
import Today from "../today/Today";

function Layout() {
  return (
    <div>
      <Header />
      <main className={`${styles.main} container`}>
        <section className={styles.leftContent}>
            <Now />
            <Forecast />
        </section>
        <section className={styles.rightContent}>
            <Highlights />
            <Today />
        </section>
      </main>
    </div>
  );
}

export default Layout;
