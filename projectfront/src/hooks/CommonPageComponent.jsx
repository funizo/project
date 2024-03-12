import styles from './CommonPageComponent.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav({ paths }) {

    return (
        <>
            {paths && paths.map((v, index) => (
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <Link to={v.link} style={{ textDecoration: 'none' }}>{v.section}</Link>
                    </li>
                </ul >
            ))
            }
            <button>🗃️ 게시글 필터</button>
        </>
    )
}

function Post({ postWriter, postWrittenTime, postTitle, postTag, views, comments, likes }) {
    const [categoryTag, setCategoryTag] = useState('카테고리태그')
    // const [postWriterName, setPostWriterName] = useState('글쓴이')
    // const [postWrittenTime, setPostWrittenTime] = useState('작성 시간')
    // const [postTitle, setPostTitle] = useState('글 제목')
    // const [views, setViews] = useState(0)
    // const [comments, setComments] = useState(0)
    // const [likes, setLikes] = useState(0)

    return (
        <>
            <div>
                <ul>
                    {[...Array(postCount)].map((v, i) => (
                        <>
                            { }
                        </>
                    ))}
                </ul>
            </div>
            <div className={styles.Post}>
                {/* <img>아이콘</img> */}
                <div className={styles.PostStateTop}>
                    <p>{postWriter} - {postWrittenTime}</p>
                </div>
                <div className={styles.PostStateMid}>
                    <h3>{postTitle}</h3>
                </div>
                <div className={styles.PostStateBottom}>
                    <p className={styles.PostTag}>{postTag}</p>
                    <div className={styles.PostStateDetail}>
                        <p>👁️‍🗨️{views} 📄{comments} 👍{likes}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Nav, Post }