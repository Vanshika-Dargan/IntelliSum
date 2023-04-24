import React from 'react'
import link from '../assets/link.svg'
import {useState,useEffect} from 'react'
import { useLazyGetSummaryQuery } from '../services/article'
import copy from '../assets/copy.svg';
import loader from '../assets/ball-triangle.svg';
import copied from '../assets/copied.svg';
const Body = () => {
  const [getSummary,{error,isFetching}]=useLazyGetSummaryQuery();
  const [article,setArticle]=useState({
    url:'',
    summary:''
  })
  const [topArticles,setTopArticles]=useState([]);
  const [iscopied,setIsCopied]=useState('');
  useEffect(() =>{
   const articlesFromLocalStorage=JSON.parse(localStorage.getItem('articles'));
   if(articlesFromLocalStorage)
   setTopArticles(articlesFromLocalStorage);
  
  },[])
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const {data}=await getSummary({articleURL:article.url});
    console.log(data);
    if(data?.summary)
    {
      const newArticle={...article,summary:data.summary}
      setArticle(newArticle);
      const updatedArticles=[...topArticles,newArticle]
      setTopArticles(updatedArticles);
      localStorage.setItem('articles',JSON.stringify(updatedArticles))
    }
    
  }
  const handleCopyToClipboard=(copyURL)=>{
    setIsCopied(copyURL)
  navigator.clipboard.writeText(copyURL);
   
  }
  return (
    <section className="mt-16 w-full max-w-xl"> 
      <div className="flex flex-col ">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <img src={link} alt="link-icon" className="absolute left-0  ml-3 w-10"/>
          <input type="url" placeholder="Enter a URL" value={article.url} required onChange={(e)=>setArticle({...article,url:e.target.value})} className="url_input peer"/>
          <button
            type='submit'
            className='enter_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
        {!isFetching &&
        <div className='flex flex-col gap-1 max-h-40 overflow-y-auto mt-3'>
        {topArticles.map((item,index)=>(
          <div
          key={index}
          onClick={()=>setArticle(item)}
          className="link_card">
              
              
              <img onClick={()=>handleCopyToClipboard(item.url)} src={iscopied===item.url?copied:copy} alt="copy_to_clipboard" className='copy_btn ml-2 w-[5%] h-[10%] object-contain'/>
              
          <div className='font-satoshi text-blue-700 font-small text-sm truncate'>
            <p>{item.url}</p>
            </div>
          </div>

  ))}
        </div>}
      </div>
      
        <div className='flex justify-center items-center'>
        {isFetching?(
          <img src={loader} alt='loader' className='w-20 h-20 object contain mt-5'/>
        ): error?
      (
        <p className='text-red-500 text-center'>
          {error}
        </p>
      ): (
        
       article.summary && (
        <div className='flex flex-col gap-2 mt-7 mb-10'>
      <h2 className='font-satoshi font-bold text-xl text-gray-700 ml-1'>Article <span className='green_gradient'>Summary</span></h2>
      <div className='summary_box '>
      
        <p className='font-inter font-medium text-md text-gray-700'>{article?.summary}</p>
      </div>
      </div>
 ))} 
      </div>
    </section>
  )
}

export default Body