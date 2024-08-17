import ReactLogo from '../components/Arcadia2.png'
import '../components/Arcadia2.png';
import React from "react";
import './styles/header.css';
import { Link } from 'react-router-dom'


function Footer(){

    return (
        <React.Fragment>
        <footer className='FooterContainer bg-body-tertiary'>
            <img src={ReactLogo} width={300} height={100}  alt='logo React'/>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#twitter"></use>
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#instagram"></use>
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#facebook"></use>
                        </svg>
                    </a></li>
                </ul>
            </footer>

        </footer>
        </React.Fragment>
    );
}

export default Footer;


