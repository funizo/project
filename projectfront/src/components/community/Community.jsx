import SkeletonPageComponent from "../../hooks/SkeletonPageComponent"

export default function Community() {

    const options = [
        { link: '/community/total', section: '전체보기' },
        { link: '/community/newpost', section: '새 글 쓰기' },
        { link: '/community/free', section: '자유 주제' },
        { link: '/community/gathering', section: '모임&스터디' },
    ];

    return (
        <>
            <SkeletonPageComponent
                mainCategory={'커뮤니티'}
                description={'다양한 사람을 만나고 생각의 폭을 넓혀보세요.'}
                options={options}
            />
        </>
    )
}