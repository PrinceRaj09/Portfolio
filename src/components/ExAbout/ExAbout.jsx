import React from 'react';
import './exabout.css';

const ExAbout = () => {
  return (
    <div className="exabout__about-page">
       <h2 className='section__title'>About Me</h2>
       <span className='section__subtitle'>My introduction</span>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Current Education</h3>
        <p className='exabout__p'>Pursuing a Bachelor of Computer Applications (BCA) to enhance my technical expertise.</p>
      </div>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Schooling</h3>
        <p className='exabout__p'>Completed 10th and 12th grades at St. Michael's Academy and Mahabodhi College.</p>
      </div>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Development Skills</h3>
        <ul className='exabout__ul'>
          <li className='exabout__li'><strong>Frontend:- </strong> HTML, CSS, JavaScript, React</li>
          <li className='exabout__li'><strong>Backend:- </strong> SQL, MySQL</li>
        </ul>
      </div>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Projects</h3>
        <ul className='exabout__ul'>
          <li className='exabout__li'><strong>News Site:- </strong> A platform delivering timely and categorized news updates.</li>

          <li className='exabout__li'><strong>Currency Converter:- </strong> An application to simplify foreign exchange conversions.</li>

          <li className='exabout__li'><strong>Tic-Tac-Toe:- </strong> A classic game implemented with modern web technologies.</li>

          <li className='exabout__li'><strong>Wheather App:- </strong>An application that provides information about the weather, including Current and future conditions</li>

          <li className='exabout__li'><strong>Quiz App:- </strong> An  interactive application that allows users to take quizzes, answer questions, and receive feedback on their performance.......etc.</li>
        </ul>
      </div>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Professional Goals</h3>
        <p className='exabout__p'>Build efficient, scalable, and visually appealing applications that solve real-world problems.</p>
      </div>

      <div className="exabout__container">
        <h3 className='exabout__h3'>Learning Approach</h3>
        <p className='exabout__p'>Committed to continuous learning and staying updated with the latest trends in technology.</p>
      </div>

      <div className="exabout__footer">
        <p className='exabout__p'>Feel free to connect with me to discuss technology, collaboration opportunities, or any exciting ideas you'd like to bring to life!</p>
      </div>
    </div>
  );
};

export default ExAbout;
