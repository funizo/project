import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }, [])

    return (
        <>
            <h2>부적절한 접근 입니다. 잠시 후 홈 페이지로 이동합니다.</h2>
        </>
    )
}