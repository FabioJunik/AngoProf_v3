import type { NextPage} from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import Logo from '../Logo';
import {Container, NavBar, LeftSide, UserPic,
          BellIcon, SettingsModal, UserIcon, ExitIcon, SearchIcon}
 from './styles';

const Header:NextPage = () =>{

  const {user} = useUser();
  const {pathname} = useRouter();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState('');

    return (

      <Container>
        <Logo/>
        {pathname.startsWith('/teacher') ?
          <NavBar>
              <Link href='/teacher'>Home</Link>
              <Link href='/teacher/matter'>Materia</Link>
              <Link href='/teacher/student'>Alunos</Link>
              <Link href='/teacher/message'>Mensagens</Link>
          </NavBar> 
                :
          <NavBar>
          <Link href='/student/'>Home</Link>
          <Link href='/student/teacher'>Professores</Link>
          <Link href='/student/message'>Mensagens</Link>
      </NavBar>  
        }
        <LeftSide>
          {!pathname.startsWith('/teacher') &&
            <div className='searchContainer'>
              <input 
                placeholder='o que queres aprender ?'
                value={searchText}
                onChange = {({target})=>setSearchText(target.value)}
              />
              <Link href={`http://localhost:3000/student/search/${searchText}`}>
                <SearchIcon/>
              </Link>
            </div>
          }
          <BellIcon/>
          <UserPic 
            className='pic' 
            onClick={()=>setModalVisible(!modalVisible)}
            color={user.imgURL}
          >
            <SettingsModal className={modalVisible ? 'block' : 'none'}>
              <Link href={pathname.startsWith('/teacher') ? '/teacher/profile':'/student/profile'}>
                <div className="lineModal">
                    <UserIcon/>
                    <span>Meu perfil</span>
                </div>
              </Link>
              <Link href='/login'>
                <div className="lineModal">
                  <ExitIcon/>
                  <span>Sair da plataforma</span>
                </div>
              </Link>
            </SettingsModal>
          </UserPic>
        </LeftSide>
      </Container>
    )
}

export default Header;