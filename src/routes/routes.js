import Home from '~/pages/Home';
import Iphone from '~/pages/Iphone';
import Ipad from '~/pages/Ipad';
import Macbook from '~/pages/Macbook';

// Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/iphone', component: Iphone },
    { path: '/ipad', component: Ipad },
    { path: '/macbook', component: Macbook },
];

export const privateRoutes = [];
