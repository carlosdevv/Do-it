import Link from 'next/link';
import { FiAward, FiHome } from "react-icons/fi";
import { MenuContainer, MenuItens } from './styles';

export function Menu() {

  return (
    <MenuContainer>
      <img src="/icons/Logo.png" alt="logo" />
      <MenuItens>
        <ul>
          <li>
            <Link href="/home" >
              <FiHome size={25} />
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <FiAward size={25} />
            </Link>
          </li>
        </ul>
      </MenuItens>
    </MenuContainer>
  )
}