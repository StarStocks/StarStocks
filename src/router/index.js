import { createWebHistory, createRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

import Userauth from '../auth/auth';
import Body from '../components/body';

/* Dashboards */
import Default from '../pages/dashboard/default';

// Widgets
import General from '../pages/widgets/general'
import Chart from '../pages/widgets/chart'

// user
import userProfile from '../pages/users/profile/userProfile.vue'
import userCards from '../pages/users/cards/userCards.vue'
import userEdit from '../pages/users/edit/userEdit.vue'

/* FAQ */
import Faq from '../pages/faq/faqIndex.vue';

// error
import Error400 from '../pages/error/error400';
import Error401 from '../pages/error/error401';
import Error403 from '../pages/error/error403';
import Error404 from '../pages/error/error404';
import Error500 from '../pages/error/error500';
import Error503 from '../pages/error/error503';


/* Authentication */
import LoginOne from '../pages/authentication/login_one';
import LoginTwo from '../pages/authentication/login_two';
import LoginValidate from '../pages/authentication/login_validation.vue';
import LoginTooltip from '../pages/authentication/login_tooltip.vue'
import LoginSweetalert from '../pages/authentication/login_sweetalert.vue'

import RegisterImage from '../pages/authentication/register_image';
import RegisterImage2 from '../pages/authentication/register_image2';
import Unlock from '../pages/authentication/unlock';
import ForgetPassword from '../pages/authentication/forget_password';
import ResetPassword from '../pages/authentication/reset_password';
import Maintenance from '../pages/authentication/maintenance.vue'

/* Auth */
import login from '../auth/login';
import Register from '../auth/register';

// comingsoon
import ComingsoonImage from '../pages/comingsoon/comingsoon_image';
import ComingsoonSimple from '../pages/comingsoon/comingsoon_simple';
import ComingsoonVideo from '../pages/comingsoon/comingsoon_video';

// searchPage
import serchIndex from "../pages/search/serchIndex.vue"

// bookmarks
import Bookmark from "../pages/bookmark/bookMark.vue"

// market 
import Market from '../pages/market/market.vue'

// portfolio 
import Portfolio from '../auth/portfolio.vue'

// portfolio 
import Portfoliocards from '../auth/portfoliocards.vue'


// leaderboards 
import Leaderboards from '../pages/leaderboards.vue'

const routes = [
  {
    path: '/',
    component: Body,
    children: [
      {
        path: '',
        name: 'defaultRoot',
        component: Default,
        meta: {
          title: 'Star Stocks - Celebrity Trading Game',
        }
      },
    ]
  },
  {
    path: '/dashboard',
    component: Body,
    children: [
      {
        path: 'default',
        name: 'default',
        component: Default,
        meta: {
          title: 'Star Stocks - Celebrity Trading Game',
        }
      },
    ]
  },
  {
    path: '/widgets',
    component: Body,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'general',
        name: 'general',
        component: General,
        meta: {
          title: 'general Star Stocks - Celebrity Trading Game',
        }
      },
      {
        path: 'chart',
        name: 'chart',
        component: Chart,
        meta: {
          title: 'chart Star Stocks - Celebrity Trading Game',
        }
      },
    ]
  },
          
  {
    path: '/app',
    component: Body,
    children: [     
      {
        path: 'market',
        component: Market,
        name: 'Market',
        meta: {
          title: 'Market | Star Stocks',
        }
      },
      {
        path: 'portfolio',
        component: Portfolio,
        name: 'Portfolio',
        meta: {
          title: 'Portfolio | Star Stocks',
        }
      },
      {
        path: 'portfoliocards',
        component: Portfoliocards,
        name: 'Portfoliocards',
        meta: {
          title: 'Portfolio | Star Stocks',
        }
      },
      {
        path: 'leaderboards',
        component: Leaderboards,
        name: 'Leaderboards',
        meta: {
          title: 'Leaderboards | Star Stocks',
        }
      },
      {
        path:'bookmark',
        name:'Bookmark',
        component:Bookmark,
        meta: {
          title: 'Bookmarks | Star Stocks',
        }
      },
    ]
  },
  {
    path: '/users',
    component: Body,
    children: [
      {
        path: "profile",
        name: "profile",
        component: userProfile,
        meta: {
          title: "Users Profile | Star Stocks",
        },
      },
      {
        path: "edit",
        name: "edit",
        component: userEdit,
        meta: {
          title: "Users Edit | Star Stocks",
        },
      },
      {
        path: "cards",
        name: "cards",
        component: userCards,
        meta: {
          title: "Users Cards | Star Stocks",
        },
      }
    ]
  },
  {
    path: '/pages',
    component: Body,
    children:[
      {
        path:'/pages/faq',
        name:'Faq',
        component:Faq,
        meta: {
          title: 'Faq | Star Stocks',
        }
      },
      {
        path:"search",
        name:"search",
        component:serchIndex
      },
    ]
  },
  {
    path:'/error-400',
    name:'Error400',
    component:Error400,
    meta: {
      title: 'Error400 | Star Stocks',
    }
  },
  {
    path:'/error-401',
    name:'Error401',
    component:Error401,
    meta: {
      title: 'Error401 | Star Stocks',
    }
  },
  {
    path:'/error-403',
    name:'Error403',
    component:Error403,
    meta: {
      title: 'Error403 | Star Stocks',
    }
  },
  {
    path:'/error-404',
    name:'Error404',
    component:Error404,
    meta: {
      title: 'Error404 | Star Stocks',
    }
  },
  {
    path:'/error-500',
    name:'Error500',
    component:Error500,
    meta: {
      title: 'Error500 | Star Stocks',
    }
  },
  {
    path:'/error-503',
    name:'Error503',
    component:Error503,
    meta: {
      title: 'Error503 | Star Stocks',
    }
  },
  {
    path:'/authentication/login/one',
    name:'LoginOne',
    component:LoginOne,
    meta: {
      title: 'LoginOne | Star Stocks',
    }
  },
  {
    path:'/authentication/login/two',
    name:'LoginTwo',
    component:LoginTwo,
    meta: {
      title: 'LoginTwo | Star Stocks',
    }
  },
  {
    path:'/authentication/login/validate',
    name:'LoginValidate',
    component:LoginValidate,
    meta: {
      title: 'LoginValidate | Star Stocks',
    }
  },
  {
    path:'/authentication/login/tooltip',
    name:'LoginTooltip',
    component:LoginTooltip,
    meta: {
      title: 'LoginTooltip | Star Stocks',
    }
  },
  {
    path:'/authentication/login/sweetalert',
    name:'LoginSweetalert',
    component:LoginSweetalert,
    meta: {
      title: 'LoginTooltip | Star Stocks',
    }
  },
  {
    path:'/authentication/register/image',
    name:'RegisterImage',
    component:RegisterImage,
    meta: {
      title: 'RegisterImage | Star Stocks',
    }
  },
  {
    path:'/authentication/register/image2',
    name:'RegisterImage2',
    component:RegisterImage2,
    meta: {
      title: 'RegisterImage2 | Star Stocks',
    }
  },
  {
    path:'/authentication/unlockuser',
    name:'Unlock',
    component:Unlock,
    meta: {
      title: 'Unlock | Star Stocks',
    }
  },
  {
    path:'/authentication/forgetpassword',
    name:'ForgetPassword',
    component:ForgetPassword,
    meta: {
      title: 'ForgetPassword | Star Stocks',
    }
  },
  {
    path:'/authentication/resetpassword',
    name:'ResetPassword',
    component:ResetPassword,
    meta: {
      title: 'ResetPassword | Star Stocks',
    }
  },
  {
    path:'/authentication/maintenance',
    name:'Maintenance',
    component:Maintenance,
    meta: {
      title: 'ResetPassword | Star Stocks',
    }
  },
  {
    path:'/comingsoon/comingsoon-image',
    name:'ComingsoonImage',
    component:ComingsoonImage,
    meta: {
      title: 'ComingsoonImage | Star Stocks',
    }
  },
  {
    path:'/comingsoon/comingsoon-simple',
    name:'ComingsoonSimple',
    component:ComingsoonSimple,
    meta: {
      title: 'ComingsoonSimple | Star Stocks',
    }
  },
  {
    path:'/comingsoon/comingsoon-video',
    name:'ComingsoonVideo',
    component:ComingsoonVideo,
    meta: {
      title: 'ComingsoonVideo | Star Stocks',
    }
  },        
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'Login 1',
        component: login,
        meta: {
          title: ' login | Star Stocks',
        }
      },
      {
        path: 'register',
        name: 'register 1',
        component: Register,
        meta: {
          title: ' Register | Star Stocks',
        }
      }
    ]
  },      
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const publicPaths = ['/auth/login', '/auth/register'];

  // Check the authentication state
  onAuthStateChanged(Userauth.auth, (user) => {
    if (publicPaths.includes(to.path) || user) {
      // If it's a public path or the user is authenticated, proceed
      next();
    } else {
      // If the user is not authenticated, redirect to login
      next('/auth/login');
    }
  });
});


export default router;