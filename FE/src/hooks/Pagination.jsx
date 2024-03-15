import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Pagination.module.scss';

export default function Pagination({ totalItems, itemCountPerPage, pageCount, currentPage }) {

    // totalItems : 데이터 총 갯수, itemCountPerPage : 페이지 당 보여줄 데이터 갯수
    // pageCount : 보여줄 페이지 개수, currentPage : 현재 페이지

    const totalPage = Math.ceil(totalItems / itemCountPerPage);
    const [start, setStart] = useState(1); //각 페이지 그룹의 가장 첫 번째 페이지(가장 좌측)
    const noPrevPage = start === 1;
    const noNextPage = start + pageCount - 1 >= totalPage; // start + pageCount - 1 => 현재 페이지 그룹의 마지막 페이지가 totalPages보다 크거나 같은 경우에만 다음 버튼을 비활성

    useEffect(() => {
        if (currentPage === start + pageCount) setStart(prev => prev + pageCount); // 다음 누를 때 마다 start 최신화(1->6->11)
        if (currentPage < start) setStart(prev => prev - pageCount); // 이전 누를 때 마다 start를 최신화(11->6->1)
    }, [currentPage, pageCount, start])

    return (
        <div className={styles.wrapper}>
            <ul>
                <li className={`${styles.move} ${noPrevPage && styles.invisible}`}>
                    {/*start를 기준으로 -1씩 하므로 이전 그룹의 마지막 페이지로 이동. */}
                    <Link to={`?page=${start - 1}`}>이전</Link>
                </li>
                {[...Array(pageCount)].map((_, i) => (
                    <>
                    {/* start+ index 값이 총 페이지보다 작거나 같은 조건에서만 링크 생성 */}
                        {start + i <= totalPage && (
                            <li key={i}>
                                <Link className={`${styles.page} ${currentPage === start + i && styles.active}`}
                                    to={`?page=${start + i}`}>
                                    {start + i}
                                </Link>
                            </li>
                        )}
                    </>
                ))}
                <li className={`${styles.move} ${noNextPage && styles.invisible}`}>
                    <Link to={`?page=${start + pageCount}`}>다음</Link>
                </li>
            </ul>
        </div>
    )
}