import {  useState } from 'react';
import './portfolio.scss'
import PortfolioList from './portfolioList/PortfolioList';
import {items, data} from './../../data'
import ProjectItem from './projectItem/ProjectItem';
import Fade from 'react-reveal/Fade';


export default function Portfolio() {

    const [selected, setSelected] = useState("a")

    return (
        <div className="portfolio" id="portfolio">
            <Fade>
            <h1>Portfolio</h1>
            <ul>
                {Object.entries(data).map(item => (<PortfolioList item={item[1]} active={item[1].id === selected} setSelected={setSelected} />))}            
            </ul>

            <div className="container">
                {data[selected].projects.map(prj => <ProjectItem item={items[prj]}/>)}
            </div>
            </Fade>
        </div>
    )
}
