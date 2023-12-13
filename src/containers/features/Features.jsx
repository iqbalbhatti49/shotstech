import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Development Solutions',
    text: 'Empowering businesses with software development and intuitive mobile app creation to dynamic web development and user-centric design, our comprehensive approach ensures scalable, efficient, and engaging solutions. We blend cutting-edge technologies with precision, crafting bespoke solutions that align with your unique business needs.'
  },
  {
    title: 'Knowledge Base Creation',
    text: 'Our focus lies in building comprehensive repositories, empowering seamless access to valuable insights, and facilitating informed decision-making. With meticulous attention to detail, we create dynamic knowledge bases that evolve alongside your organization, ensuring a structured and accessible wealth of information at your fingertips'
  },
  {
    title: 'Educational Initiatives',
    text: 'Transforming learning experiences is at the heart of our educational initiatives. We specialize in designing and implementing dynamic online courses, leveraging innovative learning management systems to deliver engaging content. Our commitment extends to creating adaptable educational materials that inspire curiosity and drive continuous growth.'
  },
  // {
  //   title: 'Consultation and Training',
  //   text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  // },
  {
    title: 'Innovation Strategy',
    text: 'Our innovation strategy propels businesses into the future by pioneering research and development initiatives. We specialize in crafting visionary roadmaps, guiding companies towards cutting-edge advancements. Our workshops stimulate creativity and forward-thinking, fostering an environment where groundbreaking ideas flourish.'
  },
];

const Features = () => (
  <div className='shots__features section__padding' id='services'>
    <div className='shots__features-heading'>
      <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='shots__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
