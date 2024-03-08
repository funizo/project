import styles from './Category.module.scss'
import { Link } from 'react-router-dom'

export default function Category() {

    const mainCategory = '커뮤니티'
    const categoryDescription = '다양한 사람을 만나고 생각의 폭을 넓혀보세요.'
    
    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <h2>{mainCategory}</h2>
                <h4>{categoryDescription}</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostCategory}>
                <button>작성하기</button>
                <button>전체보기</button>
                <button>자유주제</button>
                <button>모임&스터디</button>
                <button>🗃️게시글 필터</button>
            </div>
            <div className={styles.PostControl}>
                <button>🔄️</button>
                <input placeholder='🔎커뮤니티게시글검색' />
                <div className={styles.PageControl}>
                    <button>◀️</button>
                    <p>페이지(1/1234)</p>
                    <button>▶️</button>
                </div>
            </div>
            <div className={styles.PostSection}>
                <div className={styles.Post}>
                    {/* <img>아이콘</img> */}
                    <div className={styles.PostStateTop}>
                        <p>`닉네임`, `게시 시간`</p>
                    </div>
                    <div className={styles.PostStateMid}>
                        <h3>제목</h3>
                    </div>
                    <div className={styles.PostStateBottom}>
                        <p className={styles.PostTag}>포스트 카테고리</p>
                        <div className={styles.PostStateDetail}>
                            <p>👁️‍🗨️조회수, 📄댓글, 👍추천수</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.PageControl}>
                <button>◀️</button>
                <p>페이지(1/1234)</p>
                <button>▶️</button>
            </div>
        </div>
    )
}