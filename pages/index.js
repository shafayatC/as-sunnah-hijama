import React, { useEffect, useState, useContext } from 'react';
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ThreeItem from '../components/ThreeItem'
import WhoWeAre from '../components/WhoWeAre';
import Service from '../components/Service';
import Counselor from '../components/Counselor';
import BlogOne from '../components/BlogOne';
import Report from '../components/Report';
import Wrap_gallery_test from '../components/Wrap_gallery_test';
import { domReadyManager } from './_app';


export const getStaticProps = async (_context) => {
  // fetch list of posts
  return {
    props: {},
  }
}


const Home =()=> {

  const [domReady, setDomReady] = useContext(domReadyManager); 

  useEffect(() => {
    setDomReady(true)
  }, [])

  return (
    <>
      <Header />
      
      <Slider />
      {
        domReady &&
        <ScrollEffect id={1} duration={0.5} animateOut={true}>
          <ThreeItem />
        </ScrollEffect>
      }
      <WhoWeAre/>
      <Service/>
      <BlogOne/>
      <Counselor/>
      <Report/>
      <Wrap_gallery_test/>
      <Footer />
    </>
  )
}
export default Home; 