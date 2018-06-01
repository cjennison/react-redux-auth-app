import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

export const OnboardingLayout = ({ children }) => (
  <div className='text-center'>
    <h1>Authenticate</h1>
    <Link to='/auth/signin'> Sign In </Link>
    <Link to='/auth/register'> Register </Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
OnboardingLayout.propTypes = {
  children: PropTypes.node,
}

export default OnboardingLayout
