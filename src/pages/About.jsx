import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Stephenney';
const jobTitle = 'manufacturing technician';
const company = 'a radiopharmaceutical company';
const mainDuty = 'producing biomarkers';
const jobLocation = 'Dallas, TX';
const briefJobDescription = 'M...';
const careerObjective = 'I am on the pursuit of learning to emerge into the technical field to learn skills to profit healthcare technology.';
const personalLife = 'I love traveling and going on hikes with my husband and my pups. I love food. I like to explore new restuarants and unwind by testing my cooking abilities with new recipes and perfecting the family heirloom classic dishes.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for {company} specializing in {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;