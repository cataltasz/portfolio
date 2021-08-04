import './portfolioList.scss'

export default function PortfolioList({item, active, setSelected}) {
    return (
        <li className={"portfolioList " + (active && "active")} id={item.id} onClick={() => setSelected(item.id)}>
            {item.title}
        </li>
    )
}
