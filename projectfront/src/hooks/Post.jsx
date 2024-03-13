import styles from './Post.module.scss'
import { useState } from 'react'

export default function Post() {
    const [categoryTag, setCategoryTag] = useState('카테고리태그')
    const [postWriterName, setPostWriterName] = useState('글쓴이')
    const [postWrittenTime, setPostWrittenTime] = useState('작성 시간')
    const [postTitle, setPostTitle] = useState('글 제목')
    const [views, setViews] = useState(0)
    const [comments, setComments] = useState(0)
    const [likes, setLikes] = useState(0)

    return (
        <>
            <div className={styles.Post}>
                {/* <img>아이콘</img> */}
                <div className={styles.PostStateTop}>
                    <p>{postWriterName} - {postWrittenTime}</p>
                </div>
                <div className={styles.PostStateMid}>
                    <h3>{postTitle}</h3>
                </div>
                <div className={styles.PostStateBottom}>
                    <p className={styles.PostTag}>{categoryTag}</p>
                    <div className={styles.PostStateDetail}>
                        <p>👁️‍🗨️{views} 📄{comments} 👍{likes}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
