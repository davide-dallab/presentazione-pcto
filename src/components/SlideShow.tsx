import { ReactElement, ReactNode } from "react";
import slideShowStyles from "./SlideShow.module.css";

interface SlideShowProps {
    children: ReactElement<SlideProps>[];
};

export function SlideShow(props: SlideShowProps) {
    return (
        <div className={slideShowStyles["slide-show"]}>
            <SideBar/>
            <Content>
                {
                    props.children
                }
            </Content>
        </div>
    );
}

function SideBar(){
    return <div className={slideShowStyles["sidebar"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus illo dignissimos error dolores amet nam quo blanditiis? Facere repudiandae veritatis odio eaque porro et soluta nesciunt minima minus nisi.
    </div>
}

interface SlideProps {
    children: [ReactElement<HeaderProps>, ReactElement<ContentProps>];
}

export function Slide() {
    return <div style={{backgroundColor: 'red'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur obcaecati doloribus, reiciendis sit suscipit molestiae consectetur perspiciatis fugit illum nulla commodi optio vitae laborum tempora recusandae maxime velit ratione quia.
    </div>
}

interface HeaderProps {

}

export function Header() {
    return <h1></h1>
}

interface ContentProps {
    children: ReactNode;
}

export function Content(props: ContentProps) {
    return <div className={slideShowStyles["content"]}>
        {
            props.children
        }
    </div>
}