import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/encomendas">ENCOMENDAS</Link>
          <Link to="/encomendas">ENTREGADORES</Link>
          <Link to="/encomendas">DESTINATÁRIOS</Link>
          <Link to="/encomendas">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
