import styles from './Community.module.scss';
import { useState, useEffect } from "react";
import { PostNav, Post, Pagination } from '../../hooks';
import { useSearchParams } from 'react-router-dom';

export default function Community() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');
    // const [totalPage, setTotalPage] = useState(0)
    // const [currentPage, setCurrentPage] = useState(page)

    const mainCategory = '커뮤니티'
    const description = '자유롭게 의견을 교환해 보세요.'

    const navPaths = [
        { link: '/community', section: '전체보기', linkOption: 'reloadDocument' },
        { link: '/community/newpost', section: '새 글 쓰기' },
        { link: '/community/free', section: '자유 주제' },
        { link: '/community/gathering', section: '모임&스터디' },
    ];

    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <h2>{mainCategory}</h2>
                <h4>{description}</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostNav}>
                <PostNav paths={navPaths} />
            </div>
            <div className={styles.PostSectionControl}>
                <button>🔄️{page}</button>
                <input placeholder='🔎게시글 검색' />
                <div className={styles.PageControl}>
                    <div className={styles.PageControlBox}>
                        <button>◀️</button>
                        {/* <p>페이지{currentPage}/{totalPage}</p> */}
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
            <Pagination
                totalItems={100}
                itemCountPerPage={5}
                pageCount={5}
                currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1} />
        </div >
    )
}