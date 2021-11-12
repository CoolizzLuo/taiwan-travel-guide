import styled from '@emotion/styled'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as LogoSVG } from '../asset/Logo.svg'
import { ReactComponent as SearchSVG } from '../asset/Search.svg'
import { setAuthToken, setTheme } from '../localStorageAPI.js'

const HeaderContainer = styled.header`
  display: flex;
  padding: 18px 36px;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(LogoSVG)`
  width: 150px;
  height: 35px;
`

const NavList = styled.div`

`

const Nav = styled(NavLink, {
  activeClass: 'active'
})`
  text-align: center;
  margin: 0 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  span {
    margin-left: 16px;
    color: #fff;
  }

  &.active, &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`

const SearchBar = styled.div`
  width: 195px;
  display: flex;
  align-content: center;
  padding: 10px 22px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background: ${({ theme }) => theme.white};

  input {
    border: none;
    outline: none;
    background: transparent;
  }
  svg {
    flex-shrink: 0;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo />
      </Link>
      <NavList>
        <Nav to='/a'>特色活動</Nav>
        <Nav to='/c'>美食饗宴</Nav>
        <Nav to='/d'>精選住宿</Nav>
      </NavList>
      <SearchBar>
        <input type='input' placeholder='搜尋關鍵字...' />
        <SearchSVG />
      </SearchBar>
    </HeaderContainer>
  )
}


export default Header