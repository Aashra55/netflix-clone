import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import icon from "../app/images/down-icon.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import first from "../app/images/feature-1.png";
import second from "../app/images/feature-2.png";
import third from "../app/images/feature-3.png";
import fourth from "../app/images/feature-4.png";

export default function Home() {
  return (
    <div>
      <div className="body">
        <div className="header">
          <div className="logo"></div>
          <div className="buttons">
            <div className="language"><FontAwesomeIcon icon={faGlobe}/> English <Image src={icon} alt="" width={14} height={14}/></div>
            <div className="sign">Sign in</div>
          </div>
        </div>
        <div className="hero-sec">
          <div className="box">
            <h1>Unlimited movies, TV </h1>
            <h1>shows and more</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="email">
              <input type="text" className="enter" placeholder="Email address" />
              <button className="start">Get started <FontAwesomeIcon icon = {faChevronRight} /></button>
            </div>
          </div>
        </div>
      </div>
      <section className="first">
        <div className="text">
          <h1>Enjoy on your TV.</h1>
          <p>Watch on smart TVs, PLayStation, Xbox,</p>
          <p>Chromecast, Apple TV, Blu-ray players and</p>
          <p>more.</p>
        </div>
        <div className="image">
          <Image src={first} alt="" width={900} height={900}/>
        </div>
      </section>
      <section className="second">
        <div className="image">
          <Image src={second} alt="" width={900} height={900}/>
        </div>
        <div className="text">
          <h1>Download your shows <br />to watch offline</h1>
          {/* <h1>to watch offline</h1> */}
          <p>Save your favorites easily and alwasy have</p>
          <p>something to watch</p>
        </div>
      </section>
      <section className="third">
        <div className="text">
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your <br />phone, tablet, laptop and TV.</p>
        </div>
        <div className="image">
          <Image src={third} alt="" width={900} height={900}/>
        </div>
      </section>
      <section className="fourth">
      <div className="image">
          <Image src={fourth} alt="" width={900} height={900}/>
        </div>
      <div className="text">
          <h1>Create profiles for <br />children</h1>
          <p>Send children on adventures with their favorite characters in a space made just for them-free with your membership.</p>
        </div>
      </section>
      <section className="frequent">
      <h2>Frequently Ask Questions</h2>
      <ul className="faqs">
        <li>
          <input type="radio" name="accordion" id="first"/>
          <label className="faq" htmlFor="first">What is Netflix?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second"/>
          <label className="faq" htmlFor="second">How much does Netflix cost?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third"/>
          <label className="faq" htmlFor="third">Where can I watch?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth"/>
          <label className="faq" htmlFor="fourth">How do I cancel?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fifth"/>
          <label className="faq" htmlFor="fifth">What can I watch on Netflix?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
        <li>
          <input type="radio" name="accordion" id="sixth"/>
          <label className="faq" htmlFor="sixth">Is Netflix good for kids?</label>
          <div className="ans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam pariatur, minima consequuntur deserunt sequi voluptates ratione debitis magni accusantium doloremque laudantium animi quisquam labore magnam officia dignissimos! Itaque, sequi.</div>
        </li>
      </ul>
      </section>
      <section className="bottom">
        <div>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="email">
              <input type="text" className="enter" placeholder="Email address" />
              <button className="start">Get started <FontAwesomeIcon icon = {faChevronRight} /></button>
            </div>
          <h4>Email is required</h4>
        </div>
      </section>
      <section className="footer">
        <div className="one">Questions? Call 000-800-919-1694</div>
        <div className="two">
          <ul className="col">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul className="col">
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul className="col">
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul className="col">
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="three">
        <div className="language"><FontAwesomeIcon icon={faGlobe}/> English <Image src={icon} alt="" width={14} height={14}/></div>
        <h1>Netflix</h1>
        </div>
      </section>
    </div>
  );
}
