import React from 'react';
import './style.css';
import mediaPic from '../../assets/images/social-pics2.jpg';

export default function aboutMe() {
  return (
    <section className='sec2'>
      <div className='main-container'>
        <div className='about-wrapper'>
          <div className='about-me'>
            <h4>ABOUT ME</h4>
            <p>
              A team-oriented developer eager to lead through innovation and
              collaboration in order to produce feature-rich, dynamic web
              applications to share with friends, peers, and the world wide web
            </p>

            <p>
              Based out of San Diego California activley in search of the next
              great team, project, and culture that I can be apart of
            </p>

            <hr />

            <h4>WRITES IN</h4>

            <p>
              Full stack devloper proficient in a wide variety of front end and
              back end web languages, technologies, and frameworks:
              <a
                target='_blank'
                href='./Resources/Austin Perez Dev Resume-4.pdf'
                download
              >
                Download My Resume
              </a>
            </p>

            <div id='skills'>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQUERY</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Typescript</li>
                <li>LIT</li>
                <li>Python</li>
                <li>Mdui3</li>
                <li>Vite</li>
                <li>Vitest</li>
              </ul>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>DynamoDB</li>
                <li>Figma</li>
                <li>Jest</li>
                <li>Storybook</li>
              </ul>
            </div>
          </div>

          <div className='social'>
            <img
              id='media-pic'
              src={mediaPic}
              alt='user linkedin and github profiles'
            />
            <h3>Check me out on LinkedIn and GitHub</h3>
            <a
              targt='_blank'
              href='https://www.linkedin.com/in/austin-perez-3b1899205'
            >
              LinkedIn
            </a>
            <br />
            <a targt='_blank' href='https://github.com/AustinPerez760'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
