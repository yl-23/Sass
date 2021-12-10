import Loadable from 'react-loadable';
const Loading = () => null;
const Home = Loadable ({
    loader: () => import('./home'),
    loading: Loading
});
const Login = Loadable ({
    loader: () => import('./login'),
    loading: Loading
});
const LoginWx = Loadable ({
    loader: () => import('./loginWx'),
    loading: Loading
});
const Register = Loadable ({
    loader: () => import('./register'),
    loading: Loading
});


export { Home,Login,LoginWx ,Register}
