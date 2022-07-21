import type { NextPage } from 'next'
import Link from 'next/link';
import Logo from '../../../components/Logo';
import {Container, NavBar, LeftSide, BellIcon} from './styles';

const Header:NextPage = () =>{
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
          <div></div>
        </LeftSide>
      </Container>
    )
}

export default Header;