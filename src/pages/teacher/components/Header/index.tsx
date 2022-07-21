import type { NextPage } from 'next'
import Link from 'next/link';
import Logo from '../../../components/Logo';
import {Container, NavBar, LeftSide, 
          BellIcon, SettingsModal, UserIcon, ExitIcon}
 from './styles';

const Header:NextPage = () =>{

  function handleModal() {

  }
    return (
      <Container>
        <Logo/>
        <NavBar>
            <Link href='/teacher'>Home</Link>
            <Link href='/teacher/matter'>Materia</Link>
            <Link href='/teacher/studant'>Alunos</Link>
            <Link href='/teacher/message'>Mensagens</Link>
        </NavBar>
        <LeftSide>
          <BellIcon/>
          <div onClick={handleModal}>
            <SettingsModal>
              <div className="lineModal">
                <UserIcon/>
                <span>Meu perfil</span>
              </div>
              <div className="lineModal">
                <ExitIcon/>
                <span>Sair da plataforma</span>
              </div>
            </SettingsModal>
          </div>
        </LeftSide>
      </Container>
    )
}

export default Header;