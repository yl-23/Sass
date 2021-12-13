import Loadable from 'react-loadable';
const Loading = () => null;
const Home = Loadable ({
    loader: () => import('./home'),
    loading: Loading
});
const Login = Loadable ({
    loader: () => import('./login/components/loginIndex'),
    loading: Loading
});
const LoginWx = Loadable ({
    loader: () => import('./login/components/loginWxIndex'),
    loading: Loading
});
const Register = Loadable ({
    loader: () => import('./login/components/registerIndex'),
    loading: Loading
});
export { Home,Login,LoginWx ,Register}
