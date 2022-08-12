import Icons from "../../components/Icons/Icons"
import Link from "../../components/Link/Link"
import Logo from "../../components/Logo/Logo"
import './Header.css'
export const Header = () => {
  const menuItems = [
    {
      name: 'man',
      source: '#'
    },
    {
      name: 'woman',
      source: '#'
    },
    {
      name: 'jersey',
      source: '#'
    },
    {
      name: 'teams',
      source: '#'
    },
    {
      name: 'app',
      source: '#'
    }
  ]
  return (
    <header className="header-wrapper">
      <Logo/>
        {
          menuItems.map(item => (
            <Link src={item.source} newTab={true}>{item.name}</Link>
          ))
        }
        <Icons/>
    </header>
  )
}