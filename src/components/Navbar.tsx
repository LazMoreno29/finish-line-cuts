import Image from 'next/image';
import styles from '../components/Navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.compLogo}>
        <h3>Finish Line Cuts</h3>
      </div>
    </nav>
  );
}
