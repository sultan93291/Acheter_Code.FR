import React from 'react'
import { useParams } from "react-router-dom";
import BlogPageComponent from '../../Components/PageComponent/BlogPageComponent/BlogPageComponent';


const Blog = () => {
  const { id } = useParams();
  return (
    <BlogPageComponent id={ id} />
  )
}

export default Blog