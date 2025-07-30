import styles from "./Layout.module.css";
import type { LayoutChildren } from "./types";

function Layout({ children }: LayoutChildren) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Layout;