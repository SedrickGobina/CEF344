import React from 'react';
import "./portfolio.css";
import IMGI from '../../assets/nvtech.jpg'
import IMGI1 from '../../assets/me.png'
import IMGI2 from '../../assets/sed.jpg'
import IMGI3 from '../../assets/silva.jpg'
import IMGI4 from '../../assets/drone.jpg'
import IMGI5 from "../../assets/eng.jpg";


const Portfolio = () => {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI1} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI2} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI3} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI4} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI5} alt="porfolio" />
              <h3>This is a portfolio item title</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
}
export default Portfolio