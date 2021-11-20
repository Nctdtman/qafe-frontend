import { DatePicker } from 'antd'
import { useState } from 'react'
import Content from './components/Content/Content'
import Docker from './components/Docker/Docker'
import Header from './components/Header/Header'
function Home() {
  return (
    <div>
      <Header/>
      <Content/>
      <Docker/>
    </div>
  )
}

export default Home
