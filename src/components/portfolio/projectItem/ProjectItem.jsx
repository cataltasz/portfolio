import './projectItem.scss'

export default function ProjectItem({item}) {
    return (
        <div className="item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
        </div>
    )
}
