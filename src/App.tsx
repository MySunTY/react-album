import { BrowserRouter , Routes, Route } from 'react-router-dom'
import MainPage from "@pages/index/index"
import { RecoilRoot } from 'recoil'
import BookMarkPage from '@pages/bookmark/index'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<MainPage />}></Route>
          <Route path="/bookmark" element={<BookMarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App