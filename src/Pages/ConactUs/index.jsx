import React from 'react'
import { HeroSection } from '../../components/UI'
import ContactForm from '../../components/ContactUs/ContactForm'
import TestimonialsSlider from '../../components/Home/TestimonialsSlider'
import LatestBlogsSection from '../../components/Home/LatestBlogsSection'

const ContactUsPage = () => {
  return (
     <main className="pt-0">
      <HeroSection
        title="Contact the Coating Specialists."
        tag="Contact Us"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look."
      />
       <div className="container">
       <ContactForm/>
      </div>
       <TestimonialsSlider />
    <div className="container">
        <LatestBlogsSection />
      </div>
    </main>
  )
}

export default ContactUsPage