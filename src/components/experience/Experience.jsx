import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
      <section id="experience">
        <h5>SkillsI Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Ethical Hacking</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Open VAS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Wireshark</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>aircrack-ng</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Kali Linux</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Wifite</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SQLite</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Pen-testing</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Nmap</h4>
                  <small className="text-light">Master</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Burp Suite</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Metasploit</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Wireshark</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Nessus</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Nikto</h4>
                  <small className="text-light">Professional</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Experience;