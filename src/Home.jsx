import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeaturedProducts from './components/FeaturedProducts'

export default function Home() {

  return (
    <>
      <HeroSection p1={name} h2="SaveWave Store" p2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium modi doloribus perferendis blanditiis saepe excepturi? Sit, velit accusamus dolore consequuntur eaque." btn="Shop Now" src="https://www.shutterstock.com/image-photo/smiling-young-man-carrying-shopping-260nw-760333549.jpg">
      </HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Trusted></Trusted>
    </>
  )
}
