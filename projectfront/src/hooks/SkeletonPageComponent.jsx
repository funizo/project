import styles from './SkeletonPageComponent.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
{/* <Link to={`/newpost`} style={{ textDecoration: 'none' }}>작성하기</Link >
            <Link to={`/community`} style={{ textDecoration: 'none' }}>전체 보기</Link>
            <Link to={`/free`} style={{ textDecoration: 'none' }}>자유 주제</Link>
            <Link to={`/gathering`} style={{ textDecoration: 'none' }}>모임&스터디</Link> */}
function PostOptions({ options }) {

    return (
        <>
            {options && options.map((v, index) => (
                <Link to={`${v.link}`} style={{ textDecoration: 'none' }}>{v.section}</Link>
            ))}
            <button>🗃️ 게시글 필터</button>
        </>
    )
}

function Post() {
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
                    <p>{postWriterName} {postWrittenTime}</p>
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

export default function SkeletonPageComponent({ mainCategory, description, options }) {
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <h2>{mainCategory}</h2>
                <h4>{description}</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostOptions}>
                <PostOptions options={options} />
            </div>
            <div className={styles.PostSectionControl}>
                <button>🔄️</button>
                <input placeholder='🔎게시글 검색' />
                <div className={styles.PageControl}>
                    <div className={styles.PageControlBox}>
                        <button>◀️</button>
                        <p>페이지{currentPage}/{totalPage}</p>
                        <button>▶️</button>
                    </div>
                </div>
            </div>
            <div className={styles.PostSection}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className={styles.PageControl}>
                <div className={styles.PageControlBox}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <p>페이지{currentPage}/{totalPage}</p>
                    <button>{totalPage}</button>
                </div>
            </div>
        </div >
    )
}