import { Slide, SlideShow } from "../components/SlideShow";
import logo from "../resources/Logo.png";

export default function HomePage() {
  return (
    <>
      <SlideShow className="presentation">
        <Slide title="Introduzione" id="intro" className="title">
          <h1>Presentazione PCTO</h1>
          <h2>Dalla Betta Davide</h2>
          <h3>A.S. 2022/2023</h3>
        </Slide>
        <Slide title="Le esperienze" id="esperienze" className="title">
          <div className="link-esperienza">
            <a href="#tutor">Tutor: scuola media Fainelli Gandhi</a>
          </div>
          <div className="link-esperienza">
            <a href="#webdev">Web development: Elettrone</a>
          </div>
        </Slide>
        <Slide title="Fainelli-Gandhi" id="tutor" className="esperienza">
          <div className="caratteristica"><img src={logo} alt="test logo" /><span>da  a -</span></div>
          <div className="caratteristica"><img src={logo} alt="test logo" /><span>da - a -</span></div>
          <div className="caratteristica"><img src={logo} alt="test logo" /><span>da - a -</span></div>
          <div className="caratteristica"><img src={logo} alt="test logo" /><span>da - a -</span></div>
          <div className="caratteristica"><img src={logo} alt="test logo" /><span>da - a -</span></div>
        </Slide>
        <Slide title="Competenze Applicate" id="used-skills-1">
          <p>Conoscenze teoriche di tipo informatico</p>
        </Slide>
        <Slide title="Competenze Apprese" id="learned-skills-1">
          <p>Ridurre idee complesse a semplici concetti</p>
        </Slide>
        <Slide title="Elettrone" id="webdev">
          <p>All'istituto fainelli gandhi è stata svolta un'attività di tutoring ai ragazzi delle scuole medie</p>
          <p>Nello specifico gli è stato insegnato scratch e i fondamenti del pensiero informatico</p>
        </Slide>
        <Slide title="Competenze Applicate" id="used-skills-2">
          <p>Conoscenze teoriche di tipo informatico</p>
        </Slide>
        <Slide title="Competenze Apprese" id="learned-skills-2">
          <p>Ridurre idee complesse a semplici concetti</p>
        </Slide>
      </SlideShow>
    </>
  );
}

/* 
  1 titolo
  2 azienda
  3 esperienza
  4 competenze applicate
  5 competenze acquisite
 */