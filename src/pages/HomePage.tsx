import { Slide, SlideShow } from "../components/SlideShow";

export default function HomePage() {
  return (
    <>
      <SlideShow>
        <Slide title="Introduzione" id="intro">
          <h2>Presentazione PCTO | Dalla Betta Davide</h2>
        </Slide>
        <Slide title="Le esperienze" id="esperienze">
          <h3>Le due esperienze sono state alla scuola fainelli-gandhi e nell'azienda elettrone</h3>
        </Slide>
        <Slide title="Fainelli-Gandhi" id="tutor">
          <p>All'istituto fainelli gandhi è stata svolta un'attività di tutoring ai ragazzi delle scuole medie</p>
          <p>Nello specifico gli è stato insegnato scratch e i fondamenti del pensiero informatico</p>
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