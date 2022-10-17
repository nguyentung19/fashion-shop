import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

// COMPONENT
import ProductCard from './ProductCard';
import Grid from './Grid';

const InfinityList = props => {
  const listRef = useRef(null)
  const numberOfImages = 6

  const [load, setLoad] = useState(false)
  const [index, setIndex] = useState(0)
  const [product, setProduct] = useState([])

  // // bật công tắc khi scoll cuộn xuống

  const updateMoreProducts = useCallback(
    () => {
      if (window.innerHeight + window.scrollY >= listRef.current.clientHeight + listRef.current.offsetTop + 100) {
        // console.log('bottom reach');
        setLoad(true)
      }
    },
    [listRef],
  )
  
  useEffect(() => {
    window.addEventListener('scroll', updateMoreProducts)
    return () => {
      window.removeEventListener('scroll', updateMoreProducts)
    }
  }, [updateMoreProducts])


  // // set up when load is true
  useEffect(() => {
    const pages = Math.round(props.products.length / numberOfImages)
    if (load && index < pages) {
      const start = numberOfImages * index
      const end = numberOfImages + start
      setProduct(product.concat(props.products.slice(start, end)))
      setIndex(index + 1)
      setLoad(false)
    }
  }, [props.products, numberOfImages, index, load, product])

  // when filter is not EMPTY
  useEffect(() => {
    setProduct(props.products.slice(0, numberOfImages))
    setIndex(1)
  },[props.products])

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {
          product.map((product, index) => {
            return (
              <ProductCard
                key={index}
                image01={product.image01}
                image02={product.image02}
                title={product.title}
                price={product.price}
                slug={product.slug}
              />
            )
          })
        }
      </Grid>
    </div>
  )
}

InfinityList.propTypes = {}

export default InfinityList