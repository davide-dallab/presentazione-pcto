import React, { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import slideShowStyles from "./SlideShow.module.css";
import classNames from "classnames";

interface SlideShowProps {
  children: ReactElement<SlideProps>[];
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  sidebarStyle?: React.CSSProperties;
  className?: string;
};

export function SlideShow(props: SlideShowProps) {
  const headers: { title: string, id: string }[] = [];
  props.children.forEach(slide => {
    const id = slide.props.id ?? slide.props.title;
    headers.push({ title: slide.props.title, id });
  });

  const [pageIndex, setPageIndex] = useState(0);

  const currentHeader = headers[pageIndex].title;
  const currentId = headers[pageIndex].id;

  const className = classNames(slideShowStyles["slide-show"], props.className, 'slide-show');

  return (
    <div className={className} style={props.style} data-current={currentId}>
      <Header header={currentHeader} style={props.headerStyle} />
      <SideBar headers={headers} current={pageIndex} style={props.sidebarStyle} />
      <ContentSection setPageIndex={setPageIndex}>
        {
          props.children
        }
      </ContentSection>
    </div>
  );
}

interface ContentSectionProps {
  children: ReactElement<SlideProps>[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ContentSection(props: ContentSectionProps) {
  const className = classNames(slideShowStyles["content-section"], 'content');

  return <div className={className} onScrollCapture={evt => {
    props.setPageIndex(Math.floor(evt.currentTarget.scrollTop / evt.currentTarget.clientHeight + .1));
  }}>
    {
      props.children
    }
  </div>
}

interface HeaderProps {
  style?: React.CSSProperties;
  header: string;
}

function Header(props: HeaderProps) {
  const className = classNames(slideShowStyles["header"], 'header');

  return <div className={className} style={props.style}>
    <span>
      {
        props.header
      }
    </span>
  </div>
}

interface SlideBarProps {
  headers: { title: string, id: string }[];
  current: number;
  style?: React.CSSProperties;
}

function SideBar(props: SlideBarProps) {
  const className = classNames(slideShowStyles["sidebar"], 'sidebar');
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (containerRef.current === null || currentLinkRef.current === null) return;

    containerRef.current.scrollTop = currentLinkRef.current.offsetTop - (containerRef.current.clientHeight - currentLinkRef.current.clientHeight) / 2;
  }, [props.current]);

  return <div className={className} style={props.style} ref={containerRef}>
    {
      props.headers.map((header, index) => {
        const isCurrent = index === props.current;
        const className = classNames('index-link', slideShowStyles["index-link"], isCurrent ? 'current' : null);

        return (
          <a href={`#${header.id}`} className={className} key={header.id} id={`${header.id}-link`} ref={isCurrent ? currentLinkRef : null}>
            {
              header.title
            }
          </a>
        );
      })
    }
  </div>
}

interface SlideProps {
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export function Slide(props: SlideProps) {
  const id = props.id ?? props.title;
  const className = classNames(slideShowStyles["slide-content"], props.className, 'slide');

  return <div className={className} id={id} style={props.style}>
    {
      props.children
    }
  </div>
}