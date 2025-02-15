import { useState } from "react"
import styles from "./CommonSearchBar.module.scss"
import { useRecoilState } from "recoil"
import { searchState } from "@/recoil/atoms/searchState"
import { pageState } from "@/recoil/atoms/pageState"

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [text, setText] = useState('')
  const [page, setPage] = useRecoilState(pageState)
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setText(e.target.value)
  }
  const onClickSearch = ()=>{
      if(text ===''){
        setSearch('Korea')
        setPage(1)
      }else{
        setSearch(text)
        setPage(1)
      }
  }
  const handleKeyDown=(e:React.KeyboardEvent)=>{
    if(e.key==="Enter"){
      if(text ===""){
        //input 태그가 빈상태로 검색하면 default 값
        setSearch('Korea')
        setPage(1)
      }else{
        setSearch(text)
        setPage(1)
      }
    }
  }
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
            <input type="text" placeholder="찾으실 이미지를 검색하세요" value={text} className={styles.searchBar__search__input}
            onChange={onChange} onKeyDown={handleKeyDown} />
            <img src="src/assets/icons/icon-search.svg" alt="찾기" 
            onClick={onClickSearch} />
        </div>
    </div>
    
  )
}

export default CommonSearchBar