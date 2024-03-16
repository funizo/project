import { useState } from 'react';
import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom'


export default function SignUp() {

    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [userId, setUserId] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleCheckPasswordChange = (e) => {
        setCheckPassword(e.target.value);
    }


    const handleUserId = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z0-9]*$/;

        if (regex.test(value)) {
            setUserId(value);
        } else {
            setUserId("");
        }
    }

    return (
        <div className={styles.container}>
            <h2>회원가입</h2>
            <form>
                <div>
                    <input type="text" placeholder='이름' />
                </div>
                <div>
                    <input type="text" placeholder='아이디' value={userId} onChange={handleUserId} />
                </div>
                <div>
                    {userId !== "" ? null : <p>영어와 숫자만 입력해주세요.</p>}
                </div>
                <div>
                    <input type="password" placeholder='비밀번호' value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <input type="password" placeholder='비밀번호확인' value={checkPassword} onChange={handleCheckPasswordChange} />
                </div>
                <div>
                    {password !== checkPassword ? <p>비밀번호가 일치하지 않습니다.</p> : null}
                </div>
                <div>
                    <input type="text" placeholder='개발 직군 ex)풀스택 개발자' />
                </div>
                <button type="submit">회원가입</button>
            </form>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}