import styles from './RecipeSearch.module.css'

interface RecipeSearchProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}


export function RecipeSearch({value, onChange, onSearch}: RecipeSearchProps) {
    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={'Search recipe'}
            />
            <button type="button" className={styles.btn} onClick={onSearch}>Search</button>
        </div>
    )
}