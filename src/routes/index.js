import About from "../pages/About";
import Posts from '../pages/Posts';
import PostInfo from '../pages/PostInfo';
import Login from './../pages/Login';


export const publicRoutes = [
  {path: '/login', component: Login},
];


export const privateRoutes = [
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostInfo},
];
