import { useState } from 'react';
import styles from './Home.module.scss';

export default function Home() {
    const [data, setData] = useState(["Q&A", "커뮤니티", "Weekly"]);
    const Qa = [
        {
            id: 1,
            name: "funizo",
            time: "약1시간전",
            title: "어떻게함시발"
        },
        {
            id: 2,
            name: "funizo",
            time: "약1시간전",
            title: "어111"
        }
    ];
    const community = [{
        id: 1,
        name: "funizo",
        time: "약1시간전",
        title: "취업어떻게함시발"
    }];
    const weekly = [{
        id: 1,
        name: "funizo",
        time: "약1시간전",
        title: "Weekly 데이터 예시"
    }];

    return (
        <div className={styles.gridContainer}>
            {data.map((dataType, i) => (
                <Board
                    key={i}
                    data={dataType}
                    QA={dataType === "Q&A" ? Qa : []}
                    community={dataType === "커뮤니티" ? community : []}
                    weekly={dataType === "Weekly" ? weekly : []}
                />
            ))}
        </div>
    );
}

function Board(props) {
    let boardData = [];

    if (props.data === "Q&A" && props.QA) {
        boardData = props.QA;
    } else if (props.data === "커뮤니티" && props.community) {
        boardData = props.community;
    } else if (props.data === "Weekly" && props.weekly) {
        boardData = props.weekly;
    } else {
        return (
            <div>
                <p>데이터를 찾을 수 없습니다.</p>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.board}>
                <div>
                    <span>{props.data}</span>
                </div>
            </div>
            <div className={styles.content}>
                {boardData.map((item) => (
                    <div key={item.id}>
                        <div>
                            <span>{item.name} ·</span>
                            <span>{item.time}</span>
                        </div>
                        <div>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}