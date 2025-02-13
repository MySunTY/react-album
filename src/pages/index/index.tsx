import styles from "./styles/index.module.scss"
import CommonHeader from "@/components/common/header/CommonHeader"
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar"
import CommonNav from "@/components/common/navigation/CommonNav"
import CommonFooter from "@/components/common/footer/CommonFooter"
import Card from "./components/Card"
import axios from "axios"
import { useEffect,useState } from "react"
import { CardDTO } from "./types/card"


function index() {
    const [imageUrls, setImageUrls] = useState([])
    const getData= async ()=>{
        //오픈 API 호출
        const API_URL = "https://api.unsplash.com/search/photos"
        const API_KEY = ""
        const PER_PAGE = 30

        const searchValue = "Korea"
        const pageValue =100

        try{
            const res= await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
            console.log(res)
            if(res.status===200){
                setImageUrls(res.data.results) //imageUrls에 이미지가 담기게 됨
            }
        }catch(e){
            console.log(e)
        }
    }

    const cardList = imageUrls.map((card:CardDTO)=>{
        return(
            <Card data={card} key={card.id} />
        )
    })

    useEffect(()=>{
        getData()
    },[])
  return (
    <div className={styles.page}>
        {/* 공통 헤더 UI 부분 */}
        <CommonHeader />
        {/* 공통 네비게이션 UI 부분 */}
        <CommonNav />
        <div className={styles.page__contents}>
            <div className={styles.page__contents__introBox}>
                <div className={styles.wrapper}>
                    <span className={styles.wrapper__title}>PhotoSplash</span>
                    <span className={styles.wrapper__desc}>
                        인터넷의 시각 자료 출처입니다 . <br />
                        모든 지역에 있는 크리에이터들의 지원을 받습니다.
                    </span>
                    {/* 검색창 UI 부분 */}
                    <CommonSearchBar />
                </div>
            </div>
            <div className={styles.page__contents__imageBox}>
                {cardList}
            </div>
        </div>
        {/* 공통 푸터 UI */}
        <CommonFooter />
    </div>
  )
}

export default index