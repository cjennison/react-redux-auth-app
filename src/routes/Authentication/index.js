import OnboardingLayout from '../../layouts/OnboardingLayout/OnboardingLayout'
import SignInForm from './components/SignInForm';
import RegisterForm from './components/RegisterForm';

export default (store) => ({
  path        : 'auth',
  component   : OnboardingLayout,
  childRoutes : [
    {
      path      : 'signin',
      component : SignInForm
    },
    {
      path      : 'register',
      component : RegisterForm
    }
  ],
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null)
    }, 'authenticate')
  }
})
