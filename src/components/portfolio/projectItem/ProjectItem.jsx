import './projectItem.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ProjectItem({item}) {

    let getTags = (item) => {
        item.tags.map( tag => {
            return (
                <div className="tag">
                    {tag}
                </div>
            );
        })
    };
    let trigger = (<div className="item">
        <img src={item.img} alt="" />
        <h3>{item.title}</h3>
    </div>);
    return (
        <Popup
            trigger={trigger}
            modal
            nested
        >
            {close => (
            <div className="modal">
                <div className="header"> {item.title} </div>
                <div className="content">
                    {item.description}
                    <div className="tags">{item.tags.map( tag => <div className="tag"> {tag} </div>)}</div>
                </div>
                <div className="actions">
                <button
                    className="button"
                    onClick={() => {
                    close();
                    }}
                >
                    Close
                </button>
                </div>
            </div>
            )}
        </Popup>
        
    )
}
