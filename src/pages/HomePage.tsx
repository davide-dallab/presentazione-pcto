import { Slide, SlideShow } from "../components/SlideShow";

export default function HomePage() {
  return (
    <>
      <SlideShow className="gigi">
        <Slide title="Introduction" id="intro" className="marco">
          prima slide
        </Slide>
        <Slide title="First Slide" id="first">
          seconda slide
        </Slide>
        <Slide title="Azienda" id="azienda">
          terza slide
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