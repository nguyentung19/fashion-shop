import React from 'react'

// COMPONENTS
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Grid from '../components/Grid'

// ASSET
import policy from '../assets/fake-data/policy'

// REACT ROUTER DOM
import { Link } from 'react-router-dom'
import PolicyCard from '../components/PolicyCard'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'


const Home = () => {
  return (
    <Helmet title='Trang chủ'>
      <div className='container'>

        {/* HERO SLIDER */}
        <HeroSlider auto={true} />
        {/* END HERO SLIDER */}

        {/* POLICY CARD SECTION */}
        <section className='policy-card'>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              policy.map((item, index) => {
                return (
                  <Link to='/policy' key={index}>
                    <PolicyCard
                      name={item.name}
                      description={item.description}
                      icon={item.icon}
                    />
                  </Link>
                )
              })
            }
          </Grid>
        </section>
        {/* END POLICY CARD SECTION */}

        {/* BEST SELLER IN WEEK SECTION*/}
        <section className='best-sell'>
          <h3 className='best-sell__header'>
            top sản phẩm bán chạy trong tuần
          </h3>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {
              productData.getProducts(4).map((item, index) => {
                return (
                  <ProductCard
                    title={item.title}
                    price={item.price}
                    image01={item.image01}
                    image02={item.image02}
                    slug={item.slug}
                    key={index}
                  />
                )
              })
            }
          </Grid>
        </section>
        {/* END BEST SELLER IN WEEK SECTION */}

        {/* BANNER */}
        <section className='banner'>
          <img src="./images/banner.png" className='banner__image' alt="" />
        </section>
        {/* END BANNER */}
      </div>
    </Helmet>
  )
}

export default Home
