import "./App.css";
import images from "./resources/resources";
import { SlideShow, Slide } from "./components/SlideShow";

function App() {
  return (
    <SlideShow className="presentation">
      <Slide
        title="Introduzione"
        id="introduction"
        className="title flex-list"
      >
        <h1>Presentazione PCTO</h1>
        <h2>Dalla Betta Davide</h2>
        <h3>A.S. 2022/2023</h3>
      </Slide>
      <Slide title="Le esperienze" id="experiences" className="flex-list">
        <div className="link-esperienza">
          <a href="#fainelli-gandhi" className="highlight">Tutor: scuola media Fainelli Gandhi</a>
        </div>
        <div className="link-esperienza">
          <a href="#elettrone" className="highlight">Web development: Elettrone</a>
        </div>
      </Slide>
      <Slide title="Fainelli-Gandhi" id="fainelli-gandhi" className="title flex-list fainelli-gandhi">
        <h1>Fainelli-Ghandi</h1>
      </Slide>
      <Slide
        title="La scuola"
        id="scuola-fainelli-gandhi"
        className="esperienza fainelli-gandhi"
      >
        <div className="caratteristiche">
          <div className="highlight">
            <img src={images.building} />
            <span>
              I.C. 6 <br />
              Fainelli-Gandhi
            </span>
          </div>
          <div className="highlight">
            <img src={images.location} />
            <span>
              Via Puglie 7/E, <br />
              Chievo
            </span>
          </div>
          <div className="highlight">
            <img src={images.suitcase} />
            <span>Scuola secondaria di Primo Grado</span>
          </div>
        </div>
      </Slide>
      <Slide
        title="Diario"
        id="diario-fainelli-gandhi"
        className="esperienza fainelli-gandhi"
      >
        <div className="caratteristiche">
          <div className="highlight">
            <img src={images.calendar} />
            <span>
              Inizio: 6 Dicembre 2021 <br />
              Fine: 4 Aprile 2022
            </span>
          </div>
          <div className="highlight">
            <img src={images.clock} />
            <span>
              Lunedì 14:30-16:30, <br />
              20 ore
            </span>
          </div>
          <div className="highlight">
            <img src={images.person} />
            <span>
              Tutor scolastico: Valenza Salvatore <br />
              Tutor aziendale: Residori Ornella
            </span>
          </div>
        </div>
      </Slide>
      <Slide title="Mansioni" id="tutoring-fainelli-gandhi" className="mansioni fainelli-gandhi">
        <h1>Tutoraggio</h1>
        <div>
          <div className="mansione highlight">
            <img src={images.glasses} style={{ scale: '1.25' }} />
            <span>Sorveglianza durante il corso di coding</span>
          </div>
          <div className="mansione highlight">
            <img src={images.magnifingGlass} />
            <span>Aiuto comprensione e soluzione problemi</span>
          </div>
          <div className="mansione highlight">
            <img src={images.explanation} style={{ scale: '1.5' }} />
            <span>Spiegazioni teoriche di semplici concetti informatici</span>
          </div>
        </div>
      </Slide>
      <Slide
        title="Competenze applicate"
        id="used-skills-fainelli-gandhi"
        className="flex-list skills fainelli-gandhi"
      >
        <div className="highlight">
          <img src={images.problemSolving} />
          <span>Problem solving</span>
        </div>
        <div className="highlight">
          <img src={images.joystick} />
          <span>GameDev</span>
        </div>
        <div className="highlight">
          <img src={images.blockProgramming} />
          <span>Programmazione a blocchi e Scratch</span>
        </div>
        <div className="highlight">
          <img src={images.comunication} />
          <span>Comunicazione</span>
        </div>
      </Slide>
      <Slide
        title="Competenze sviluppate"
        id="learned-skills-fainelli-gandhi"
        className="flex-list skills fainelli-gandhi"
      >
        <div className="highlight">
          <img src={images.simpleProblems} />
          <span>Scomposizione di problemi complessi</span>
        </div>
        <div className="highlight">
          <img src={images.book} />
          <span>Metodi di insegnamento</span>
        </div>
        <div className="highlight">
          <img src={images.young} />
          <span>Porsi a ragazzi più giovani</span>
        </div>
      </Slide>
      <Slide title="Valore dell'esperienza" id="value-fainelli-gandhi" className="value fainelli-gandhi flex-list">
        <div>
          <div className="highlight">
            <img src={images.knowledge} />
            <span>
              Consolidazione delle conoscenze grazie alle spiegazioni
            </span>
          </div>
          <div className="highlight">
            <img src={images.teach} />
            <span>
              Sguardo nel mondo dell'insegnamento
            </span>
          </div>
          <div className="highlight">
            <img src={images.skill} />
            <span>
              Utilizzo delle competenze sviluppate nel tempo libero
            </span>
          </div>
          <div className="highlight">
            <img src={images.skill} />
            <span>
              Utilizzo delle competenze sviluppate nel tempo libero
            </span>
          </div>
        </div>
      </Slide>
      <Slide title="Elettrone" id="elettrone" className="title flex-list elettrone">
        <h1>Elettrone</h1>
      </Slide>
      <Slide title="L'azienda" id="azienda-elettrone" className="esperienza elettrone">
        <div className="caratteristiche">
          <div className="highlight">
            <img src={images.building} />
            <span>
              Elettrone
            </span>
          </div>
          <div className="highlight">
            <img src={images.location} />
            <span>
              Via Enrico Fermi 11/A, <br />
              Via Augusto Righi 2
            </span>
          </div>
          <div className="highlight">
            <img src={images.suitcase} />
            <span>
              Soluzioni intelligenti per la gestione <br />
              dell'energia elettrica
            </span>
          </div>
        </div>
      </Slide>
      <Slide
        title="Diario"
        id="diario-elettrone"
        className="esperienza elettrone"
      >
        <div className="caratteristiche">
          <div className="highlight">
            <img src={images.calendar} />
            <span>
              Inizio: 6 Giugno 2022 <br />
              Fine: 1 Luglio 2022
            </span>
          </div>
          <div className="highlight">
            <img src={images.clock} />
            <span>
              Lunedì-Venerdì <br />
              9:00-13:00 / 14:00-18:00, <br />
              160 ore
            </span>
          </div>
          <div className="highlight">
            <img src={images.person} />
            <span>
              Tutor scolastico: Valenza Salvatore <br />
              Tutor aziendale: Turazzini Massimiliano
            </span>
          </div>
        </div>
      </Slide>
      <Slide title="Mansioni" id="software-development-elettrone" className="mansioni elettrone">
        <h1>Sviluppo Software</h1>
        <div>
          <div className="mansione highlight">
            <img src={images.powerapps} />
            <span>Sviluppo app aziendale tramite Microsoft Power Apps</span>
          </div>
          <div className="mansione highlight">
            <img src={images.reactLogo} />
            <span>Sviluppo WebApp con React.js</span>
          </div>
          <div className="mansione highlight">
            <img src={images.api} />
            <span>Sviluppo RESTful API in ambiente .NET</span>
          </div>
        </div>
      </Slide>
      <Slide
        title="Competenze applicate"
        id="used-skills-elettrone"
        className="flex-list skills elettrone"
      >
        <div className="highlight">
          <img src={images.teamWork} />
          <span>Lavoro in team</span>
        </div>
        <div className="highlight">
          <img src={images.csharpLogo} />
          <span>Linguaggio C#</span>
        </div>
        <div className="highlight">
          <img src={images.databases} />
          <span>Database e SQL</span>
        </div>
        <div className="highlight">
          <img src={images.webdev} />
          <span>HTML, JavaScript e CSS</span>
        </div>
      </Slide>
      <Slide
        title="Competenze sviluppate"
        id="learned-skills-elettrone"
        className="flex-list skills elettrone"
      >
        <div className="highlight">
          <img src={images.teamBuilding} />
          <span>Team building</span>
        </div>
        <div className="highlight">
          <img src={images.javascript} />
          <span>Linguaggio Javascript</span>
        </div>
        <div className="highlight">
          <img src={images.reactLogo} />
          <span>Libreria React</span>
        </div>
      </Slide>
      <Slide title="Valore dell'esperienza" id="value-elettrone" className="value elettrone">
        <div>
          <div className="highlight">
            <img src={images.orgchart} />
            <span>
              Capire il funzionamento di un'azienda
            </span>
          </div>
          <div className="highlight">
            <img src={images.webdev} />
            <span>
              Nuova passione
            </span>
          </div>
          <div className="highlight">
            <img src={images.skill} />
            <span>
              Utilizzo delle competenze sviluppate nel tempo libero
            </span>
          </div>
          <div className="highlight">
            <img src={images.path} />
            <span>
              Conversazioni sui possibili percorsi successivi al diploma
            </span>
          </div>
        </div>
      </Slide>
      <Slide title="Considerazioni finali" id="considerations">

      </Slide>
      <Slide title="Prospettive future" id="future">

      </Slide>
    </SlideShow>
  );
}

export default App;

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