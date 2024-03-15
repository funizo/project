import styles from './Post.module.scss'
import { useState } from 'react'
export default function Post({ 
    id,
    postWriter,
    createdAt,
    postTitle,
    postTag,
    views,
    comments,
    likes }) {
    // const [postWriter, setPostWriter] = useState('글쓴이')
    // const [createdAt, setCreatedAt] = useState('작성 시간')
    // const [postTitle, setPostTitle] = useState('글 제목')
    // const [postTag, setPostTag] = useState('포스트 태그')
    // const [views, setViews] = useState(0)
    // const [comments, setComments] = useState(0)
    // const [likes, setLikes] = useState(0)

    return (
        <>
            <div className={styles.Post}>
                {/* <img>아이콘</img> */}
                <div className={styles.PostStateTop}>
                    <p>{postWriter}</p>
                </div>
                <div className={styles.PostStateMid}>
                    <h3>{postTitle}</h3>
                    <p>👁️‍🗨️{views} 📄{comments} 👍{likes}</p>
                </div>
                <div className={styles.PostStateBottom}>
                    <p className={styles.PostTag}>{postTag}</p>
                    <div className={styles.PostStateDetail}>
                        {createdAt}
                    </div>
                </div>
            </div>
        </>
    )
}
