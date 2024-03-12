import styles from './Community.module.scss';
import { Post, Nav } from "../../hooks/CommonPageComponent"
import { useState, useEffect } from "react";
import Pagination from '../../hooks/Pagination';
import { useSearchParams } from 'react-router-dom';

export default function Community() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const mainCategory = '커뮤니티'
    const description = '자유롭게 의견을 교환해 보세요.'

    const navPaths = [
        { path: '/community', section: '전체보기' },
        { path: '/community/newpost', section: '새 글 쓰기' },
        { path: '/community/free', section: '자유 주제' },
        { path: '/community/gathering', section: '모임&스터디' },
    ];

    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <h2>{mainCategory}</h2>
                <h4>{description}</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostNav}>
                <Nav paths={navPaths} />
            </div>
            <div className={styles.PostSectionControl}>
                <button onClick={() => window.location.replace('/community')}>🔄️</button>
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
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            <Post postWriter={'작성자'} postWrittenTime={'1시간 전'} postTitle={'제목'} postTag={'포스트태그'} views={'조회수'} comments={'댓글수'} likes={'좋아요'} />
            </div>
            <Pagination
                totalItems={100}
                itemCountPerPage={5}
                pageCount={5}
                currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1} />
        </div >
    )
}