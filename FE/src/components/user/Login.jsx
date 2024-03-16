import styles from './Login.module.scss';
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className={styles.container}>
            <h5>로그인</h5>
            <form>
                <div className={styles.id}>
                    <input
                        className={styles.idInput}
                        type="text"
                        placeholder="아이디"
                    />
                </div>
                <div className={styles.password}>
                    <input
                        className={styles.pwdInput}
                        type="password"
                        placeholder="비밀번호"
                    />
                </div>
                <div className={styles.loginButton}>
                    <button type="submit">로그인</button>
                </div>
            </form>

            <div>
                <Link to="/signup">회원가입</Link>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}