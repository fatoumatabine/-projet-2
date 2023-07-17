import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import Booking from '../pages/Booking';
import Confirmation from '../pages/Confirmation';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/search', component: SearchResults },
  { path: '/booking', component: Booking },
  { path: '/confirmation', component: Confirmation },
  { path: '/profile', component: Profile },
  { path: '/admin', component: Admin },
];

export default routes;
