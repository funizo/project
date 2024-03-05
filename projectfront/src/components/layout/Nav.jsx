import "./Nav.css";

export default function Nav() {
    return (
        <div className="navbar">
            <a href="/">배너</a>
            <p style={{ marginLeft: "105px" }}>Q&A</p>
            <p>커뮤니티</p>
            <p>지식</p>
            <p>스터디/프로젝트</p>
            <div className="searchBar">
                <button>🔍</button>
                <input type="text" placeholder="검색" />
            </div>
            <img src={process.env.PUBLIC_URL + '/img/ping.png'} alt="dd" />
        </div>
    )
}