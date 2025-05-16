import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      {/* NavLink 안 className에서만 함수를 사용할 수 있다. 원래 다른 element는 불가능하다. */}
      {navigations.map(nav => (
        <NavLink
          to={nav.to}
          className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
          {nav.label}
        </NavLink>
      ))}
    </header>
  )
}
