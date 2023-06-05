import { Slide, SlideShow } from "../components/SlideShow";
import images from "../resources/resources";

export default function HomePage() {
  return (
    <>
      <SlideShow className="presentation">
        <Slide title="Introduzione" id="introduction" className="title flex-list">
          <h1>Presentazione PCTO</h1>
          <h2>Dalla Betta Davide</h2>
          <h3>A.S. 2022/2023</h3>
        </Slide>
        <Slide title="Le esperienze" id="esperiences" className="flex-list">
          <div className="link-esperienza">
            <a href="#fainelli-gandhi">Tutor: scuola media Fainelli Gandhi</a>
          </div>
          <div className="link-esperienza">
            <a href="#elettrone">Web development: Elettrone</a>
          </div>
        </Slide>
        <Slide title="Fainelli-Gandhi" id="fainelli-gandhi" className="esperienza">
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span></div>
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span></div>
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span></div>
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span></div>
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span></div>
        </Slide>
        <Slide title="Tutoraggio" id="tutoring">
          <p>All'istituto fainelli gandhi è stata svolta un'attività di tutoring ai ragazzi delle scuole medie</p>
          <p>Nello specifico gli è stato insegnato scratch e i fondamenti del pensiero informatico</p>
        </Slide>
        <Slide title="Competenze applicate" id="used-skills-fainelli-ghandhi" className="flex-list skills">
          <div><img src={images.computerScience} /><span>Conoscenze informatiche</span><span>Variabile, selezione, iterazione</span></div>
          <div><img src={images.problemSolving} /><span>Problem solving</span><span>Sviluppato nel corso degli anni</span></div>
          <div><img src={images.joystick} /><span>Esperienza di GameDev</span><span>Formata nel tempo libero</span></div>
          <div><img src={images.blockProgramming} /><span>Programmazione a blocchi e Scratch</span><span>Imparati in prima e terza</span></div>
        </Slide>
        <Slide title="Competenze apprese" id="learned-skills-fainelli-ghandhi" className="flex-list skills">
          <div><img src={images.simpleProblems} /><span>Riduzione di problemi complessi</span></div>
          <div><img src={images.book} /><span>Tecniche di didattica</span></div>
          <div><img src={images.comunication} /><span>Comunicazione con ragazzi più giovani</span></div>
        </Slide>
        <Slide title="Elettrone" id="elettrone">
          <p>All'istituto fainelli gandhi è stata svolta un'attività di tutoring ai ragazzi delle scuole medie</p>
          <p>Nello specifico gli è stato insegnato scratch e i fondamenti del pensiero informatico</p>
        </Slide>
        <Slide title="Sviluppo Web" id="web-development">
          <p>All'istituto fainelli gandhi è stata svolta un'attività di tutoring ai ragazzi delle scuole medie</p>
          <p>Nello specifico gli è stato insegnato scratch e i fondamenti del pensiero informatico</p>
        </Slide>
        <Slide title="Competenze applicate" id="used-skills-elettrone" className="flex-list skills">
          <div><img src={images.teamWork} /><span>Lavoro in team</span><span>Esercitato in laboratorio</span></div>
          <div><img src={images.csharpLogo} /><span>Linguaggio C#</span><span>Studiato nel tempo libero</span></div>
          <div><img src={images.databases} /><span>Database e SQL</span><span>Anticipati a fine quarto anno</span></div>
          <div><img src={images.webdev} /><span>HTML, JavaScript e CSS</span><span>Accennati al biennio</span></div>
        </Slide>
        <Slide title="Competenze apprese" id="learned-skills-elettrone" className="flex-list skills">
          <div><img src={images.teamBuilding} /><span>Team building</span></div>
          <div><img src={images.javascript} /><span>Linguaggio Javascript</span></div>
          <div><img src={images.reactLogo} /><span>Libreria React</span></div>
        </Slide>
        <Slide title="Considerazioni finali" id="considerations">

        </Slide>
        <Slide title="Prospettive future" id="future">

        </Slide>
      </SlideShow>
    </>
  );
}

/* 
  1 titolo
  
  2.1 azienda (dov'è, cosa fa, logo) -> istituto comprensivo 6 fainelli gandhi, via puglie 7/e (chievo), scuola media
  2.2 esperienza (orario, periodo, tutor) -> dal 6/12/22 al 4/4/22, il lunedì dalle 14:30 alle 16:30, tutor aziendale: ornella residori, tutor scolastico: salvatore valenza
  2.3 mansioni (cosa ho fatto) -> sorveglianza al corso di coding, aiuto nella comprensione e soluzione dei problemi, spiegazioni teoriche di semplici concetti informatici
  2.4 competenze applicate -> Conoscenze informatiche, Problem solving, Conoscenze nel mondo del GameDev, conoscenza di scratch
  2.5 competenze acquisite -> Semplificazione di problemi complessi, Tecniche di didattica, Comunicazione con ragazzi più giovani
  2.6 a cosa è servito -> Consolidare le conoscenze base dell'informatica, dare uno sguardo al mondo dell'insegnamento, mettere in pratica le competenze apprese nel tempo libero

  3.1 azienda (dov'è, cosa fa, logo) -> Elettrone, via enrico fermi 11/a / via augusto righi 2 (onesky), soluzioni intelligenti per la gestione dell'energia elettrica, E
  3.2 esperienza (orario, periodo, tutor) -> dal 6/6/22 al 1/7/22, dal lunedì al venerdì 9-13/14-18, tutor aziendale: massimiliano turazzini e damiano salezze, tutor scolastico: salvatore valenza
  3.3 mansioni (cosa ho fatto) -> sviluppo powerapp, sviluppo webapp in react.js, sviluppo restful api in ambiente .net 
  3.4 competenze applicate -> lavoro in team, linguaggio c#, conoscenza database, creazione di pagine statiche
  3.5 competenze acquisite -> team building, linguaggio javascript, libreria react
  3.6 a cosa è servito -> capire il funzionamento di un'azienda, mettere in pratica le competenze apprese nel tempo libero, trovare una nuova passione

  5 considerazioni finali -> 
  4 propsettive future
 */