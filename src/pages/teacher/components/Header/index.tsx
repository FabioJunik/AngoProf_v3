import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../components/Logo';
import {Container, NavBar, LeftSide, 
          BellIcon, SettingsModal, UserIcon, ExitIcon}
 from './styles';

const Header:NextPage = () =>{

  const [modalVisible, setModalVisible] = useState<boolean>(false);
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
          <div className='pic' onClick={()=>setModalVisible(!modalVisible)}>
            <SettingsModal className={modalVisible ? 'block' : 'none'}>
              <Link href='/teacher/profile'>
                <div className="lineModal">
                    <UserIcon/>
                    <span>Meu perfil</span>
                </div>
              </Link>
              
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