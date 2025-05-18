import {PiHeartFill, PiListHeartFill} from "react-icons/pi";
import styles from './header.module.css'
import {useFavorites} from "../../hooks/useFavorites";

export default function Header() {
    const {favorites} = useFavorites()
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <PiListHeartFill className={styles.icon}/>
                <span>{favorites.length}</span>
            </div>
            {favorites.length > 0 && (
                <ul className={styles.favoritesList}>
                    {favorites.map(f => (
                        <li className={styles.favoritesItem} key={f.id}>
                            <PiHeartFill className={styles.favoriteIcon} />
                            {f.name}</li>
                    ))}
                </ul>
            )}
            {favorites.length === 0 && <h3>No favorites</h3>}
        </header>
    )
}