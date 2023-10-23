import React from 'react'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavbarNews = () => {
  const [togle, setTogle] = React.useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpen && "-100%", display: !menuOpen && "none"}
    }
  };

  function handleClick() {
    setTogle((prevState) => !prevState);
  }
  return (
    <div>
      <section className='n-wrapper'>
        <div className="n-container innerWidth"> 
            <div className="n-logo">FOODY.</div>
            <div className="n-menu"
            style={getMenuStyle(togle)}>
                <Link to="/">Home</Link>
                <Link to="/recipie" >Recipe</Link>
                <Link to="/service" >Service</Link>
                <Link to="/news" className='orange'>News</Link>
                <Link to="/about">About</Link>
            </div>
            <button className='button'><Link to='/contact'>Contact</Link></button>
            <div className="icon" onClick={handleClick}>< MdOutlineMenuOpen color='#fff' size={33}/></div>
        </div>
      </section>
    </div>
  )
}

export default NavbarNews
