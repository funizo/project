import styles from './Community.module.scss'

export default function Community() {
    return (
        <div className={styles.PostMainCategory}>
            <div className={styles.Banner}>
                <h2>커뮤니티</h2>
                <h4>다양한 사람을 만나고 생각의 폭을 넓혀보세요.</h4>
                {/* <img /> */}
            </div>
            <div className={styles.PostCategory}>
                <button>작성하기</button>
                <button>전체보기</button>
                <button>자유주제</button>
                <button>모임&스터디</button>
                <button>드롭다운필터</button>
            </div>
            <div className={styles.PostControl}>
                <button>리프레시버튼</button>
                <p>커뮤니티 내 게시글 검색</p>
                <input placeholder='커뮤니티게시글검색'/>
                <button>앞페이지 이동</button>
                <p>페이지(1/1234)</p>
                <button>뒷페이지 이동</button>
            </div>
            <div className={styles.PostSection}>
                <div>
                    {/* <img>아이콘</img> */}
                    <p>닉네임</p>
                    <p>게시시 시간</p>
                    <p>제목</p>
                    <p>포스트 카테고리</p>
                    <p>조회수</p>
                    <p>댓글</p>
                    <p>추천수</p>
                </div>
            </div>
            <div className={styles.PageControl}>
                <button>앞페이지 이동</button>
                <p>페이지(1/1234)</p>
                <button>뒷페이지 이동</button>
            </div>
        </div>
    )
}