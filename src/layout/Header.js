import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/img/logo.svg'

import './styles/header.css'
import { IconChevronDown, IconPhone } from '@tabler/icons-react'

export default function Header () {

    const location = useLocation();

    return (

        <header className="__header">

            <div className='__box __display_flex __aling-center __justify_between'>

                <div className='__col __col_nav __display_flex __aling-center'>

                    <Link to={'/'} viewTransition>
                        <img src={logo} alt='Logo de Nacion Xauxa - Empresa de turismo - Agencia de viajes - Viaja por Jauja - Jauja' loading='lazy' />
                    </Link>

                    <nav className='__nav'>
                        <ul className='__nav_list __display_flex __aling-center __gap_1'>
                            <li className='__nav_item'>
                                <Link to={'/'} viewTransition className={`__nav_a ${location.pathname === '/' ? '__nav_a--active' : ''}`}>Inicio</Link>
                            </li>
                            <li className='__nav_item'>
                                <Link to={'/about'} viewTransition className={`__nav_a ${location.pathname === '/about' ? '__nav_a--active' : ''}`}>Nosotros</Link>
                            </li>
                            <li className='__nav_item'>
                                <Link to={'/contact'} viewTransition className={`__nav_a ${location.pathname === '/contact' ? '__nav_a--active' : ''}`}>Contáctanos</Link>
                            </li>
                            <li className='__nav_item'>
                                <Link className='__nav_a __display_flex __aling-center'>Tours <IconChevronDown/></Link>
                                <ul className='__subnav'>
                                    <li className='__subnav_item'>
                                        <Link to={'/tours/tour-1/2'} viewTransition className='__subnav_a'>Tours 1</Link>
                                    </li>
                                    <li className='__subnav_item'>
                                        <Link to={'/tours/tour-2'} viewTransition className='__subnav_a'>Tours 2</Link>
                                    </li>
                                    <li className='__subnav_item'>
                                        <Link to={'/tours/tour-3'} viewTransition className='__subnav_a'>Tours 3</Link>
                                    </li>
                                    <li className='__subnav_item'>
                                        <Link to={'/tours/tour-4'} viewTransition className='__subnav_a'>Tours 4</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className='__col __col_cta'>
                    <ul className='__nav_list __display_flex __aling-center __gap_2'>
                        <li className='__nav_item'>
                            <Link to={'tel:51995984231'} className='__display_flex __aling-center'><IconPhone/> +51 987654321</Link>
                        </li>
                        <li>
                            <Link to={'/booking'} className="__a_btn __a_btn_primary">Reserva ahora</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </header>

    )

}