import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

export default function TopBar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Mustafa Çataltaş</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a id="email" href="tel:+905423831876">+905423831876</a></span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span> <a id="email" href="mailto:mustafacataltas@yandex.com">mustafacataltas@yandex.com</a> </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
