import styles from './Announcement.module.scss';
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

export default function Announcement() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page');

    const mainCategory = '공지사항'
    const description = '공지사항입니다.'

    const [totalItems, setTotalItems] = useState(87)
    const paginationOption = {
        itemCountPerPage: 5,
        pageCount: 5,
    }
    const totalPage = Math.ceil(totalItems / paginationOption.itemCountPerPage)

    const navPaths = [
        { path: '/announcement', section: '전체보기' },
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
                <button onClick={() => window.location.replace('/announcement')}>🔄️</button>
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