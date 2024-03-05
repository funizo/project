import styles from './Nav.module.scss'

export default function Nav() {
    return (
        <div className={styles.navbar}>
            <a href="/">배너</a>
            <p>Q&A</p>
            <p>커뮤니티</p>
            <p>지식</p>
            <p>스터디/프로젝트</p>
            <div className={styles.searchBar}>
                <button>🔍</button>
                <input type="text" placeholder="검색" />
            </div>
            <img src={process.env.PUBLIC_URL + '/img/ping.png'} alt="dd" />
        </div>
    )
}