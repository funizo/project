import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div className={styles.navbar}>
            <a href="/">배너</a>
            <p>Q&A</p>
            <Link to='/community'>커뮤니티</Link>
            <p>지식</p>
            <p>스터디/프로젝트</p>
            <div className={styles.searchBar}>
                <button>🔍</button>
                <input type="text" placeholder="검색" />
            </div>
            <p>로그인/회원가입</p>
            <img src={process.env.PUBLIC_URL + '/img/ping.png'} alt="dd" />
        </div>
    )
}