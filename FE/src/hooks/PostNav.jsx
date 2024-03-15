import { Link } from 'react-router-dom'

export default function PostNav({ paths }) {

    return (
        <>
            {paths && paths.map((v, index) => (
                <ul style={{listStyle:'none'}}> 
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