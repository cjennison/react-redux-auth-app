import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import NavBar from 'components/NavBar'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <NavBar />
    <div className='container text-center'>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      {' · '}
      <Link to='/auth' activeClassName='page-layout__nav-item--active'>Sign Up</Link>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
