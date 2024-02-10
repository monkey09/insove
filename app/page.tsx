import { 
  Faq, 
  Hero, 
  News,
  Blog, 
  Stats, 
  Teams, 
  Brands, 
  Header, 
  Navbar, 
  Services, 
  Appointment, 
  Departments, 
  Testimonials,
  Footer,
} from "@/components"

const Home = () => {
  const links = ['home', 'doctors', 'department', 'services', 'blog', 'contact']
  return (
    <main>
      <Header />
      <Navbar links={links} />
      <Hero />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Teams />
      <Faq />
      <Departments />
      <Blog />
      <Brands />
      <News />
      <Footer links={links} />
    </main>
  )
}

export default Home
