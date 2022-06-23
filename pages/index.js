import React, { useEffect, useState, useContext } from 'react';

import { DefaultImage } from 'default-image'
import 'default-image/dist/index.css'
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'

import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ThreeItem from '../components/ThreeItem'
import styles from '../styles/Home.module.css'
import WhoWeAre from '../components/WhoWeAre';
import Service from '../components/Service';
import Counselor from '../components/Counselor';
import BlogOne from '../components/BlogOne';
import Report from '../components/Report';
import Wrap_gallery_test from '../components/Wrap_gallery_test';
import { domReadyManager } from './_app';


export default function Home() {

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
