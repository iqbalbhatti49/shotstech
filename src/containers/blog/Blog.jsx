import React from 'react';
// import Article from '../../components/article/Article';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blogs">
    <div className="blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      <div className='coming-soon'>
        <h2 className=''>Coming Soon</h2>
      </div>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        {/* <Article imgUrl={img1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
      {/* <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
    </div>
  </div>
);

export default Blog;
