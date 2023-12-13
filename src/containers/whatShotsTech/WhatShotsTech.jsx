import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatShotsTech.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Shots Tech" text="We specialize in crafting innovative solutions that propel growth and progress. hrough our educational endeavors, we redefine learning experiences, offering dynamic, adaptable content that inspires continuous advancement. We believe in the synergy between technology and education, fostering a culture of curiosity and empowerment for all learners." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Technology" text="Our technology drives the creation, curation, and delivery of engaging, bite-sized knowledge, transforming how information is accessed and absorbed." />
      <Feature title="Knowledgebase" text="We specialize in crafting robust repositories, meticulously organizing and curating information for seamless access and utilization." />
      <Feature title="Education" text="With a seamless fusion of tech prowess and content innovation, we pave the way for a dynamic learning experience that transcends traditional boundaries." />
    </div>
  </div>
);

export default WhatGPT3;
