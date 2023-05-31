import React, { ReactElement, ReactNode, useState } from "react";
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
    const headers: {title: string, id: string}[] = [];
    props.children.forEach(slide => {
        const id = slide.props.id ?? slide.props.title;
        headers.push({title: slide.props.title, id});
    });

    const [pageIndex, setPageIndex] = useState(0);

    const currentHeader = headers[pageIndex].title;
    const currentId = headers[pageIndex].id;
    history.pushState({}, '', `#${currentId}`);

    const className = classNames(slideShowStyles["slide-show"], props.className, 'slide-show');

    return (
        <div className={className} style={props.style}>
            <Header header={currentHeader} style={props.headerStyle} />
            <SideBar headers={headers} current={pageIndex} style={props.sidebarStyle}/>
            <div className={slideShowStyles["content-section"]} onScrollCapture={evt => {
                setPageIndex(Math.floor(evt.currentTarget.scrollTop / evt.currentTarget.clientHeight + .1));
            }}>
                {
                    props.children
                }
            </div>
        </div>
    );
}

interface HeaderProps{
    style?: React.CSSProperties;
    header: string;
}

function Header(props: HeaderProps){
    const className = classNames(slideShowStyles["header"], 'header');

    return <div className={className} style={props.style}>
        <span>
            {
                props.header
            }
        </span>
    </div>
}

interface SlideBarProps{
    headers: {title: string, id: string}[];
    current: number;
    style?: React.CSSProperties;
}

function SideBar(props: SlideBarProps){
    const className = classNames(slideShowStyles["sidebar"], 'sidebar');

    return <div className={className} style={props.style}>
        {
            props.headers.map((header, index) => {
                const isCurrent = index === props.current;
                const className = classNames(slideShowStyles["index-link"], isCurrent ? 'current ' + slideShowStyles["current-index-link"] : null);

                return <a href={`#${header.id}`} className={className} key={header.id}>{header.title}</a>
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