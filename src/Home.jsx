import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeaturedProducts from './components/FeaturedProducts'

export default function Home() {
  // "eslint": "^8.45.0",
  // "eslint-plugin-react": "^7.32.2",
  // "eslint-plugin-react-hooks": "^4.6.0",
  // "eslint-plugin-react-refresh": "^0.4.3",
  // "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",

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
