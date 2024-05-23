import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const onLogoutClick = () => {
    localStorage.removeItem("token")
    navigate("/login")

  }

  const location = useLocation()
  console.log(location.pathname)

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>

        {location.pathname === '/' && (
          <button onClick={onLogoutClick}>Logout</button>

        )}
      </div>
    </header>
  )
}

export default Navbar