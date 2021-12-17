import About from "../pages/About";
import Posts from '../pages/Posts';
import PostInfo from '../pages/PostInfo';

export const routes = [
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostInfo},
  {path: '*', component: Posts}
];