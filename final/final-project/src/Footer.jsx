import footerLinks from './FooterLinks.js'
import "./Footer.css"
import "./instagram.css"
import "./git.css"
function Footer ({className}) {
    
    const links = footerLinks.map((item)=>{
        return(
                <li className='footer-item' key={item.name}>
                    <a className='footer-link' href={item.path}><i className={item.icon}></i></a>
                </li>
        );
    });

    return(
        <footer className={className}>
            <ul className='footer-menu'>
                {links}
            </ul>
        </footer>
    );
}

export default Footer