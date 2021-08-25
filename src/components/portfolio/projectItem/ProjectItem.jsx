import './projectItem.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ProjectItem({item}) {
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
