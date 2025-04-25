import React, { useContext } from 'react'
import Banner from '../components/Banner'
import Bestselling from '../components/Bestselling'
import Bigbanner from '../components/Bigbanner'
import Todaycollection from '../components/Todaycollection'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <>
      <Banner/>
      <Todaycollection/>
      <Categories/>
      <Bestselling/>
      <Bigbanner/>
    </>
  )
}

export default Home