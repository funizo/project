import styles from './Community.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Community({ mainCategory }) {
    const [views, setViews] = useState(0)
    const [comments, setComments] = useState(0)
    const [likes, setLikes] = useState(0)
    const [categoryTag, setCategoryTage] = useState(mainCategory)
    const [postWriterName, setPostWriterName] = useState('글쓴이')
    const [postWrittenTime, setPostWrittenTime] = useState('작성 시간')
    const [postTtitle, setPostTitle] = useState('글 제목')

    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <h2>메인카테고리{mainCategory}</h2>
                <h4>다양한 사람을 만나고 생각의 폭을 넓혀보세요</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostCategory}>
                <button>작성하기</button>
                <button>전체 보기</button>
                <button>자유 주제</button>
                <button>모임&스터디</button>
                <button>🗃️ 게시글 필터</button>
            </div>
            <div className={styles.PostControl}>
                <button>🔄️</button>
                <input placeholder='🔎게시글 검색' />
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
                        <p>{postWriterName} {postWrittenTime}</p>
                    </div>
                    <div className={styles.PostStateMid}>
                        <h3>{postTtitle}</h3>
                    </div>
                    <div className={styles.PostStateBottom}>
                        <p className={styles.PostTag}>카테고리태그{categoryTag}</p>
                        <div className={styles.PostStateDetail}>
                            <p>👁️‍🗨️{views} 📄{comments} 👍{likes}</p>
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