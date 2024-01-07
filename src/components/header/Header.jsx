import './Header.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <>
      <div className="container z-50 w-full">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* headerSearch start here  */}
          <div className="headerSearch flex items-center">
            <div className="selecrDrop Cursor"></div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  )
}

export default Header
