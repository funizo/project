import styles from './Community.module.scss';
import { useState, useEffect } from "react";
import { PostNav, Post, Pagination } from '../../hooks';
import { useSearchParams, Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        writer: '푸니조',
        createdAt: '2024-03-17-17pm',
        title: '게시글 제목',
        postTag: ['저메추', '점메추'].map(v => '#' + v).join(' '),
        views: '12',
        comments: '7',
        likes: '15'
    },
    {
        id: 2,
        writer: '식스틴',
        createdAt: '2024-03-17-17pm',
        title: '게시글 제목',
        postTag: ['아메추', '점메추'].map(v => '#' + v).join(' '),
        views: '14',
        comments: '8',
        likes: '16'
    },
    {
        id: 3,
        writer: '돈슬람',
        createdAt: '2024-03-17-17pm',
        title: '게시글 제목',
        postTag: ['저메추', '점메추'].map(v => '#' + v).join(' '),
        views: '15',
        comments: '10',
        likes: '17'
    },

]

// posts를 프롭스로 받기. 위가 예시
export default function Community() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const mainCategory = '커뮤니티'
    const description = '자유롭게 의견을 교환해 보세요.'

    const [totalItems, setTotalItems] = useState(87)
    const paginationOption = {
        itemCountPerPage: 5,
        pageCount: 5,
    }
    const totalPage = Math.ceil(totalItems / paginationOption.itemCountPerPage)


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
                <PostNav paths={navPaths} />
            </div>
            <div className={styles.PostSectionControl}>
                <button onClick={() => window.location.replace('/community')}>🔄️</button>
                <input placeholder='🔎게시글 검색' />
                <div className={styles.PageControl}>
                    <div className={styles.PageControlBox}>
                        <Link to={`?page=${parseInt(page) - 1}`}>{page > 1 ? `◀️` : ``}</Link>
                        <p>페이지 이동</p>
                        <Link to={`?page=${parseInt(page) + 1}`}>{page < totalPage ? `▶️` : ``}</Link>
                    </div>
                </div>
            </div>
            <div className={styles.PostSection}>
                {posts.map(post => (
                    <Post
                        id={post.id}
                        postWriter={post.writer}
                        createdAt={post.createdAt}
                        postTitle={post.title}
                        postTag={post.postTag}
                        views={post.views}
                        comments={post.comments}
                        likes={post.likes}
                    />
                ))}
            </div>
            <Pagination
                totalItems={totalItems}
                itemCountPerPage={paginationOption.itemCountPerPage}
                pageCount={paginationOption.pageCount}
                currentPage={page && parseInt(page) > 0 ? parseInt(page) : 1} />
        </div >
    )
}