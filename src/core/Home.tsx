import React, {useState} from 'react'
import Header from '../components/home/header/Header'
import Features from '../components/home/features/Features'
import Objective from '../components/home/objective/Objective'
import Gallery from '../components/home/gallery/Gallery'
import Action from '../components/home/actions/Action'
import AboutFeature from '../components/home/about-feature/AboutFeature'
import Footer from '../components/footer/Footer'

export default function Home() {
  const [farm, setFarm] = useState(true)
  const [diary, setDiary] = useState(false)
  const [resort, setResort] = useState(false)
  const handleChange = () => {
    setFarm(true)
    setDiary(false)
    setResort(false)
  }
  const diaryChange = () => {
    setFarm(false)
    setDiary(true)
    setResort(false)
  }
  const resortChange = () => {
    setFarm(false)
    setDiary(false)
    setResort(true)
  }
  return (
    <>
    <Header />
    <Features onclick={handleChange} diaryHandler={diaryChange} resortHandler={resortChange}/>
    <AboutFeature farm={farm} diary={diary} resort={resort} onclick={handleChange}/>
    <Objective />
    <Gallery />
    <Action />
    <Footer />
    </>
  )
}
