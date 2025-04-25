import React, { useContext } from 'react'
import Banner from '../components/Banner'
import Todaycollection from '../components/Todaycollection'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <>
      <Banner/>
      <Todaycollection/>
      <Categories/>
    </>
  )
}

export default Home