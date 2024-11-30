'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Battery, Zap, Leaf, ChevronRight, ChevronDown, ChevronUp, Menu, Linkedin } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const approachRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    toast.success('Message sent successfully!')
  }

  return (
    <main className={`min-h-screen ${montserrat.className}`}>
      <ToastContainer position="bottom-right" />
      
      {/* Sticky Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isHeaderVisible ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isHeaderVisible ? 'text-orange-800' : 'text-white'}`}>Bellville BESS</h1>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollTo({ current: document.getElementById('about') })} className={isHeaderVisible ? 'text-orange-800' : 'text-white'}>About</Button>
            <Button variant="ghost" onClick={() => scrollTo(approachRef)} className={isHeaderVisible ? 'text-orange-800' : 'text-white'}>Approach</Button>
            <Button variant="ghost" onClick={() => scrollTo(contactRef)} className={isHeaderVisible ? 'text-orange-800' : 'text-white'}>Contact</Button>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className={isHeaderVisible ? 'text-orange-800' : 'text-white'} />
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <Button variant="ghost" onClick={() => { scrollTo({ current: document.getElementById('about') }); setIsMenuOpen(false); }} className="block w-full text-left mb-2">About</Button>
            <Button variant="ghost" onClick={() => { scrollTo(approachRef); setIsMenuOpen(false); }} className="block w-full text-left mb-2">Approach</Button>
            <Button variant="ghost" onClick={() => { scrollTo(contactRef); setIsMenuOpen(false); }} className="block w-full text-left">Contact</Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%208859%20(1).jpg-To0aiSWQvVEV6OepPJH5LBpNFIgwY3.jpeg"
          alt="Sunset over a green field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Powering the Future with
              <span className="text-orange-300 block mt-2">Bellville BESS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8">
              Revolutionizing clean energy solutions for a sustainable tomorrow
            </p>
            <Button 
              onClick={() => scrollTo(approachRef)}
              className="w-fit text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 group"
            >
              Explore Solutions
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-800">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Bellville BESS, we are committed to revolutionizing the energy industry by developing advanced battery energy storage systems. Our goal is to accelerate the world's transition to sustainable energy, ensuring reliable power supply and reducing carbon emissions for a cleaner planet.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
              Discover Our Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={approachRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-800">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Battery, title: "Advanced Technology", description: "We develop cutting-edge battery systems to maximize energy storage efficiency." },
              { icon: Zap, title: "Smart Integration", description: "Our solutions seamlessly integrate with existing power grids and renewable sources." },
              { icon: Leaf, title: "Sustainable Practices", description: "We prioritize eco-friendly materials and processes throughout our operations." }
            ].map((item, index) => (
              <Card key={index} className="transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-orange-100 rounded-full p-4 mb-4">
                    <item.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Our Expert Team</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "Stefaan Sercu", 
                role: "Partner",
                bio: "Stefaan brings 20 years of expertise in energy infrastructure and sustainable technology. His focus on innovative storage solutions has shaped the industry's approach to clean energy.",
                linkedin: "https://www.linkedin.com/in/stefaan-sercu/",
                image: "/team/stefaan-sercu.jpg"
              },
              { 
                name: "Karim Barbir", 
                role: "Partner",
                bio: "With over 15 years of experience in renewable energy, Karim specializes in battery storage systems and grid integration. He has led numerous successful BESS projects across Europe.",
                linkedin: "https://www.linkedin.com/in/karimnbarbir/",
                image: "/team/karim-barbir.jpg"
              },
            ].map((member, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto bg-orange-200 rounded-full mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-800">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-800">Get in Touch</h2>
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" className="border-orange-200 focus:border-orange-500" required aria-label="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="border-orange-200 focus:border-orange-500" required aria-label="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} className="border-orange-200 focus:border-orange-500" required aria-label="Your Message" />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow-lg"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </main>
  )
}
