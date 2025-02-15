import { useState } from "react"
import styles from "./CommonSearchBar.module.scss"
import { useRecoilState } from "recoil"
import { searchState } from "@/recoil/atoms/searchState"

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [text, setText] = useState('')
  const onChange = (e) =>{
    setText(e.target.value)
  }
  const onClickSearch = ()=>{
      if(text ===''){
        setSearch('Korea')
      }else{
        setSearch(text)
      }
  }
  const handleKeyDown=(e:React.KeyboardEvent)=>{
    if(e.key==="Enter"){
      if(text ===""){
        //input 태그가 빈상태로 검색하면 default 값
        setSearch('Korea')
      }else{
        setSearch(text)
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