import React, {useContext, useState, useEffect} from 'react'
import Container from '../components/Container'
import { Apidata } from '../Mydata/ProductApi'
import Post from './Post'
import Pagination from '../pagination/Pagination'

const Shop = () => {
  let info = useContext(Apidata)
  let [Category, setCategory] = useState([])
  let [Brand, setBrand] = useState([])
  let [showFilter, setShowFilter] = useState([])
  useEffect(()=>{
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  },[info])

  let handleCategoroy = (res)=>{
    let categoryFilter = info.filter((item) => item.category == res);
    setShowFilter(categoryFilter)
    
  }
  let handleBrand = (res)=>{
    let brandFilter = info.filter((item) => item.brand == res);
    setShowFilter(brandFilter)
    
  }

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(8);

  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allPage = info.slice(firstPage, lastPage);

  let pageNumber = [];

  for (
    let i = 0;
    i <
    Math.ceil(
      showFilter.length > 0 ? showFilter : info.length / perPage
    );
    i++
  ) {
    pageNumber.push(i);
  }

  let paginate = (state) => {
    setCurrentPage(state + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  let previous = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };
  
  return (
    <div className="shop py-[48px]">
      <Container>
        <div className="">
          <h1 className="text-[36px] font-semibold">Shop</h1>
        </div>
        <div className="contains flex gap-2">
          <div className="sidemenu w-[20%]">
            <div className="list">
              <h3 className="font-bold bg-[#db4444] pl-[5px]">Choose Category</h3>
              <ul className="mb-[30px] h-[300px] overflow-y-scroll">
                {
                  Category.map((item, i)=>(
                    <li onClick={()=>handleCategoroy(item)} key={i}  className='py-[5px] flex justify-between items-center hover:bg-[#db4444] hover:text-[#fff] duration-[1s] hover:px-[15px] cursor-pointer border-b-[1px] border-[#ddd]'>{item}</li>
                  ))
                }
              </ul>
              <h3 className="font-bold bg-[#db4444] pl-[5px]">Choose Brand</h3>
              <ul className="mb-[30px] h-[300px] overflow-y-scroll">
                {
                  Brand.map((item, i)=>(
                    <li onClick={()=>handleBrand(item)} key={i}  className='py-[5px] flex justify-between items-center hover:bg-[#db4444] hover:text-[#fff] duration-[1s] hover:px-[15px] cursor-pointer border-b-[1px] border-[#ddd]'>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="productsfield w-[80%] pl-[20px]">
            <Post showData={showFilter} allapge={allPage}/>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Pagination pageNumber={pageNumber} paginate={paginate} next={next} currentPage={currentPage} previous={previous} />
        </div>
      </Container>
    </div>
  )
}

export default Shop