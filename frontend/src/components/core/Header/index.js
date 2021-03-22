import './style.css'
import React, { useState } from 'react'
import logo from '../../../assets/img/logo.jpg'

const Header = ({ ...props }) => {
  const [Cadastro, setCadastro] = useState(false)
  const { isLogin } = props

  return (
    <header className="Header">
      <img src={logo} className='logo' alt='logo' />
      <nav className='Nav' >
        <a href='/plataforma'>A Plataforma</a>
        <a href='/cursos'>Cursos</a>
        <a href='/empresas'>Empresas</a>
        <a href='/contato'>Contato</a>
        {
          !isLogin
            ? (
              <div className='Cadastro' onMouseOver={() => setCadastro(true)} >
                <a href='' className='Cadastro_button' >Cadastre-se</a>
              </div>
            ) : (
              null
            )
        }
      </nav>
      {
        Cadastro
          ? (
            <div className='Cadastro__menu' onMouseLeave={() => setCadastro(false)} >
              <a href="/estudantes/sign_in"> Sou estudante </a>
              <a href="/empresa/sign_in"> Sou empresa </a>
            </div>
          ) : (
            null
          )
      }
    </header>
  );
}

export default Header;
