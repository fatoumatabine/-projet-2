import Home from './Home';
import SearchResults from './SearchResults';
import Booking from './Booking';
import Confirmation from './Confirmation';
import Profile from './Profile';
import Admin from './Admin';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/search', component: SearchResults },
  { path: '/booking', component: Booking },
  { path: '/confirmation', component: Confirmation },
  { path: '/profile', component: Profile },
  { path: '/admin', component: Admin },
];

export default routes;
