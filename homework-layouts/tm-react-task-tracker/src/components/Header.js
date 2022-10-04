import PropTypes from "prop-types"

const Header = ({title}) => {
  return (
    <header>
        <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Test Tracker'
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header