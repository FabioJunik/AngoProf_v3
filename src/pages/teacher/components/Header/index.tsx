import type { NextPage } from 'next'
import Link from 'next/link';
import Logo from '../../../components/Logo';
import {Container, NavBar, LeftSide, BellIcon} from './styles';

const Header:NextPage = () =>{
    return (
      <Container>
        <Logo/>
        <NavBar>
            <Link href=''>Home</Link>
            <Link href=''>Materia</Link>
            <Link href=''>Alunos</Link>
            <Link href=''>Mensagens</Link>
        </NavBar>
        <LeftSide>
          <BellIcon/>
          <div></div>
        </LeftSide>
      </Container>
    )
}

export default Header;