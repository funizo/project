import SkeletonPageComponent from "../../hooks/SkeletonPageComponent"

export default function Community() {

    const postOptions = {
        section1: '/newpost',
        section2: '작성하기'
    }

    return (
        <>
            <SkeletonPageComponent
                mainCategory={'커뮤니티'}
                description={'다양한 사람을 만나고 생각의 폭을 넓혀보세요.'}
                options={postOptions.section1}
            />
        </>
    )
}