import { createWebHistory, createRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

import Userauth from '../auth/auth';
import Body from '../components/body';

/* Dashboards */
import Default from '../pages/dashboard/default';
import Ecommerce from '../pages/dashboard/ecommerce';
import Online from  '../pages/dashboard/online'
import Crypto from '../pages/dashboard/crypto'
import Social from '../pages/dashboard/social.vue'

// Widgets
import General from '../pages/widgets/general'
import Chart from '../pages/widgets/chart'
// pageLayout
import indexBoxed from '../pages/pageLayout/boxed/indexBoxed.vue'
import indexRTL from '../pages/pageLayout/RTL/indexRTL.vue'
import indexDarklayout from '../pages/pageLayout/darklayout/indexDarklayout.vue'
import indexFooterdark from '../pages/pageLayout/footerdark/indexFooterdark.vue'
import indexFooterfixed from '../pages/pageLayout/footerfixed/indexFooterfixed.vue'
import indexFooterlight from '../pages/pageLayout/footerlight/indexFooterlight.vue'
import indexHidenavscroll from '../pages/pageLayout/hidenavscroll/indexHidenavscroll.vue'
// project
import createProject from '../pages/project/createproject/createProject.vue'
import indexList from '../pages/project/projectlist/indexList.vue'
/* File Manager  */
import FileManager from '../pages/filemanager';
// kanban
import Kanban from '../pages/kanban/indexKanban.vue'
// ecoomerce
import indexProduct from '../pages/ecommerce/product/indexProduct.vue'
import productPage from '../pages/ecommerce/productpage/productPage.vue'
import productList from '../pages/ecommerce/list/productList.vue'
import paymentDetails from '../pages/ecommerce/payment/details/paymentDetails.vue'
import orderHistory from '../pages/ecommerce/order/orderHistory.vue'
import invoiceView from '../pages/ecommerce/invoice/invoiceView.vue'
import cartView from '../pages/ecommerce/cart/cartView.vue'
import wishlistView from '../pages/ecommerce/wishlist/wishlistView.vue'
import checkoutView from '../pages/ecommerce/checkout/checkoutView.vue'
import pricingView from '../pages/ecommerce/pricing/pricingView.vue'
// mail
import readMail from '../pages/email/readMail/readMail.vue'
import composeView from '../pages/email/compose/composeView.vue'
// chat
import chatApp from '../pages/chat/chatApp/chatApp.vue'
import videoChat from '../pages/chat/videoChat/videoChat.vue'
// user
import userProfile from '../pages/users/profile/userProfile.vue'
import userCards from '../pages/users/cards/userCards.vue'
import userEdit from '../pages/users/edit/userEdit.vue'
// forms
import formValidation from "../pages/forms/formValidetion/formValidation"
import base_Input from "../pages/forms/baseInput/base_Input"
import checkbox_radio from "../pages/forms/Checkbox&Radio/checkbox_radio"
import input_groups from "../pages/forms/InputGroup/input_groups"
import megaOptions from "../pages/forms/megaOptions/megaOptions"

// form widgets
import select2 from "../pages/formWidgets/select2/select2Page.vue"
import switch_From from "../pages/formWidgets/switch/switch_From"
import touchspin_Form from "../pages/formWidgets/touchspin/touchspin_Form"
import typeahead_Form from "../pages/formWidgets/typeahead/typeahead_Form"
import clipboard_Form from "../pages/formWidgets/clipboard/clipboard_Form"
import datepicker from "../pages/formWidgets/datepicker/datePicker.vue"

// form layput
import defaultforms from '../pages/formLayout/default/defaultFotrm.vue'
import form_wizard2 from "../pages/formLayout/formWizrd2/form_wizard.vue"
import form_wizard1 from '../pages/formLayout/formWizard1/form_wizard2.vue'
import form_wizard3 from "../pages/formLayout/formWizard3/form_wizard1.vue"

// uikits
import Scrollable from "../pages/advance/scollable/scrollable_advance.vue";
import Sweetalert from "../pages/advance/sweetalert/sweetAert.vue";
import Tree from "../pages/advance/tree/treeView.vue";
import Rating from "../pages/advance/rating/ratingView.vue";
import Pagination from "../pages/advance/pagination/pagination_advance.vue";
import Ribbons from "../pages/advance/ribbons/ribbons_advance.vue";
import Tour from "../pages/advance/tour/tourView.vue";

import Breadcrumb from "../pages/advance/breadcrumbs/breadCrumb.vue";

import Sticky from "../pages/advance/sticky/stickyView.vue";

import ImageCropper from "../pages/advance/image_cropper/cropper_advance.vue";
import Notify from '../pages/advance/notify/toaster_advance.vue'
import dropzone from '../pages/advance/dropzone/dropzoneView.vue';
import animatedModal from '../pages/advance/animatedModal/animatedModal.vue'
import owlCarousel from '../pages/advance/owlCarousel/owlCarousel.vue' 
import Rangeslider from '../pages/advance/range/rangeView.vue'
import BasicCard from '../pages/advance/basicCard/basicCard.vue'
import CreativeCard from '../pages/advance/creativeCard/creative_card.vue'
import DraggableCard from '../pages/advance/draggableCard/draggableCard.vue'
import TabbedCard from '../pages/advance/tabbedCard/tabbed_card.vue'
/* FAQ */
import Faq from '../pages/faq/faqIndex.vue';
// uikits
import alert from '../pages/uikits/alert';
import Helperclasses from '../pages/uikits/helper_classes';
import Avatars from '../pages/uikits/avatars';
import Grid from '../pages/uikits/grid';
import Tagpills from '../pages/uikits/tag_pills';
import Typography from '../pages/uikits/typography';
import Progressbar from '../pages/uikits/progress_bar';
import Modal from '../pages/uikits/modal';
import Popover from '../pages/uikits/popover';
import Tooltip from '../pages/uikits/tooltip';
import Spinners from '../pages/uikits/loader';
import Dropdown from '../pages/uikits/dropdown';
import Accordion from '../pages/uikits/accordion';
import Boxshadow from '../pages/uikits/box_shadow';
import Lists from '../pages/uikits/lists';
import bootstraptabPage from "../pages/uikits/tabs/bootstraptab/bootstraptabPage.vue";
import linetabPage from "../pages/uikits/tabs/linetab/linetabPage.vue";
// animation
import animate from '../pages/animation/animate/animatePage.vue'
import aos from '../pages/animation/aos/aosPage.vue'
import scroll from '../pages/animation/scroll/scrollPage.vue'
import wow from '../pages/animation/wow/wowPage.vue'
import tilt from '../pages/animation/tilt.vue'
// builder
import form1 from '../pages/builder/formBuilder1.vue'
import form2 from '../pages/builder/formBuilder2.vue'
/* icons */
import Flag from '../pages/icons/flag';
import Ico from '../pages/icons/ico_icon';
import Themify from '../pages/icons/themify_icon';
import Fontawesome from '../pages/icons/font_awesome';
import FeatherIcon from '../pages/icons/feather_icon';
import WhetherIcon from '../pages/icons/weather';
/* Buttons */
import Default_buttons from '../pages/button/Default/default_button.vue';
import Flat_buttons from '../pages/button/Flat/flat_button.vue';
import Edge_buttons from '../pages/button/Edge/edge_button.vue';
import Raised_buttons from '../pages/button/Raised/raised_button.vue';
import Group_buttons from '../pages/button/ButtonGroup/button_group.vue'; 
/*charts*/ 
import google_chart from "../pages/charts/googleChart/google_chart"
import leaderboards from "../pages/charts/leaderboards/leaderboards.vue"
 import chartist_chart from "../pages/charts/chartist/chartist_chart.vue"
// knowledge
import knowledge from '../pages/Knowledgebase/index.vue'
import category_knowledge from '../pages/Knowledgebase/categoryKnowledge.vue'
import detail_knowledge from '../pages/Knowledgebase/detailsKnowledge.vue' 
// error
import Error400 from '../pages/error/error400';
import Error401 from '../pages/error/error401';
import Error403 from '../pages/error/error403';
import Error404 from '../pages/error/error404';
import Error500 from '../pages/error/error500';
import Error503 from '../pages/error/error503';

/* Support Ticket */
import Support from '../pages/support/support.vue';

/* Editor */
import SimpleEditor from '../pages/editor/simple_editor';
import CkEditor from '../pages/editor/ckeditor.vue';
/* Maps */
import GoogleMaps from '../pages/maps/google_map.vue';
import VueLeaflet from '../pages/maps/vue_leaflet.vue';
// learning
import learning_list from "../pages/learning/learninglist/learning_list"
import coursedetailed from "../pages/learning/courseDetailed"
// job Search
import job_list from "../pages/job/job-list/job_list"
import job_details from "../pages/job/job_details/job_details"
import job_apply from "../pages/job/job_apply/job_apply"
import job_card from "../pages/job/job_card/cardJob.vue"
// blog
import blog_detail from "../pages/blog/blog-details/blog_detail"
import blog_single from "../pages/blog/blog-single/blog_single"
import blog_add from "../pages/blog/blog-add/addBlog.vue"
// GALLERY
import grid_gallery from "../pages/gallery/grid_gallery"
import grid_desc from "../pages/gallery/grid_desc"
import hover_gallery from "../pages/gallery/hover-gallery/hover_gallery"
import masonry_gallery from "../pages/gallery/masonry-gallery/masonry_gallery"
import masonary_desc from "../pages/gallery/masonary_desc.vue"
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
// SAMPLE PAGE
import sample_page from "../pages/sample_page"
/* bootstrap tables */
// import BootstrapBasic from "../pages/tables/bootstrapTable/basicTables/basic_tables.vue";
import tableComponent from "../pages/tables/bootstrapTable/stylingtable/styling_table.vue"
import DatatableBasic from "../pages/tables/dataTable/BasicInit/basic_Init.vue"
// searchPage
import serchIndex from "../pages/search/serchIndex.vue"
// bookmarks
import Bookmark from "../pages/bookmark/bookMark.vue"
// contact 
import contactView from "../pages/market/contactView.vue"
import Market from '../pages/market/market.vue'
// transactions
import transactions from "../pages/task/transactions.vue"
// calendar
import Calendar from "../pages/calenderView.vue"
// social app
import socialPage from "../pages/socialApp/socialApp.vue"
// todo
import Todo from "../pages/todo/index.vue"
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
        {
          path: 'ecommerce',
          name: 'ecommerce',
          component: Ecommerce,
          meta: {
            title: 'Ecommerce Star Stocks - Celebrity Trading Game',
          }
        },
        {
          path: 'online',
          name: 'online',
          component: Online,
          meta: {
            title: 'Online Star Stocks - Celebrity Trading Game',
          }
        },
        {
          path: 'crypto',
          name: 'crypto',
          component: Crypto,
          meta: {
            title: 'Crypto Star Stocks - Celebrity Trading Game',
          }
        },
        {
          path: 'social',
          name: 'social',
          component: Social,
          meta: {
            title: 'Social Star Stocks - Celebrity Trading Game',
          }
        }
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
        path: '/pageLayout',
        component: Body,
        children: [
          {
            path: 'boxed',
            name: 'boxed',
            component: indexBoxed,
            meta: {
              title: 'Boxed | Star Stocks',
            }
          },
          {
            path: 'darklayout',
            name: 'darklayout',
            component: indexDarklayout,
            meta: {
              title: 'Dark Layout | Star Stocks',
            }
          }
          ,
          {
            path: 'footerdark',
            name: 'footerdark',
            component: indexFooterdark,
            meta: {
              title: 'Footer Dark | Star Stocks',
            }
          }
          ,
          {
            path: 'footerlight',
            name: 'footerlight',
            component: indexFooterlight,
            meta: {
              title: 'Footer Light | Star Stocks',
            }
          }
          ,
          {
            path: 'footerfixed',
            name: 'footerfixed',
            component: indexFooterfixed,
            meta: {
              title: 'Footer Fixed | Star Stocks',
            }
          }
          ,
          {
            path: 'hidenavscroll',
            name: 'hidenavscroll',
            component: indexHidenavscroll,
            meta: {
              title: 'Hide Nav Scroll | Star Stocks',
            }
          }
          ,
          {
            path: 'RTL',
            name: 'RTL',
            component: indexRTL,
            meta: {
              title: 'RTL | Star Stocks',
            }
          }
        ]
      },
      {
        path: '/project',
        component: Body,
        children: [
          {
            path: 'projectlist',
            name: 'projectlist',
            component: indexList,
            meta: {
              title: 'Project list | Star Stocks',
            }
          },
          {
            path: 'create-project',
            name: 'createProject',
            component: createProject,
            meta: {
              title: 'Create new | Star Stocks',
            }
          }
        ]
      },
      {
        path: '/app',
        component: Body,
        children: [
          {
            path: 'socialPage',
            name: 'socialPage',
            component: socialPage,
             meta: {
                title: 'Social App, | Star Stocks',
              }
          },
        {
          path: 'todo',
          name: 'todo',
          component: Todo,
           meta: {
              title: 'Todo | Star Stocks',
            }
        },
      
        {
          path: 'chat',
          name: 'chat',
          component: chatApp,
           meta: {
              title: 'Chat | Star Stocks',
            }
        },
        {
          path: 'videochat',
          name: 'Video chat',
          component: videoChat,
           meta: {
              title: 'Video Chat | Star Stocks',
            }
        },

        {
          path: 'filemanager',
          name: 'File Manager',
          component: FileManager,
           meta: {
              title: 'File Manager, | Star Stocks',
            }
        },
        {
          path: 'kanban',
          name: 'Kanban Board',
          component: Kanban,
           meta: {
              title: 'Kanban Board, | Star Stocks',
            }
        },
        {
          path: 'market',
          component: Market,
          name: 'Market',
          meta: {
            title: 'Market | Star Stocks',
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
        {
          path:'/app/transactions',
          name:'transactions',
          component:transactions,
          meta: {
            title: 'Transactions | Star Stocks',
          }
        },
        {
          path:'calendar',
          name:'Calendar',
          component:Calendar,
          meta: {
            title: 'Calendar | Star Stocks',
          }
        }
        ]
      },
      {
        path: "/ecommerce",
        component: Body,
        children: [
          {
            path: "product",
            name: "Product",
            component: indexProduct,
            meta: {
              title: "Products | Star Stocks",
            },
          },
          {
            path: "product/page/:id",
            name: "ProductPage",
            component: productPage,
            meta: {
              title: "Products Page | Star Stocks",
            },
          },
          {
            path: "product/list",
            name: "productList",
            component: productList,
            meta: {
              title: "Products list | Star Stocks",
            },
          },
          {
            path: "payment/details",
            name: "paymentDetails",
            component: paymentDetails,
            meta: {
              title: "Payment Details | Star Stocks",
            },
          },
          {
            path: "order/history",
            name: "Order History",
            component: orderHistory,
            meta: {
              title: "OrderHistory | Star Stocks",
            },
          },
          {
            path: "invoice",
            name: "Invoice",
            component: invoiceView,
            meta: {
              title: "Invoice | Star Stocks",
            },
          },
          {
            path: "cart",
            name: "Cart",
            component: cartView,
            meta: {
              title: "Cart | Star Stocks", 
            },
          },
          {
            path: "wishlist",
            name: "Wishlist",
            component: wishlistView,
            meta: {
              title: "Wishlist | Star Stocks",
            },
          },
          {
            path: "checkout",
            name: "Checkout",
            component: checkoutView,
            meta: {
              title: "Checkout | Star Stocks",
            },
          },
          {
            path: "pricing",
            name: "pricing",
            component: pricingView,
            meta: {
              title: "pricingView | Star Stocks",
            },
          },
    
    
        ],
      },
      {
        path: '/email',
        component: Body,
        children: [
          {
            path: "readMail",
            name: "readMail",
            component: readMail,
            meta: {
              title: "Email App | Star Stocks",
            },
          },
          {
            path: "compose",
            name: "compose",
            component: composeView,
            meta: {
              title: "Email Compose | Star Stocks",
            },
          }
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
        path:"/form",
        component:Body,
        children:[
          {
            path:"validation",
            name:"formValidation",
            component:formValidation,
            meta: {
              title: "Form Validation | Star Stocks",
            },
          },
          {
            path:"inputs",
            name:"basicInput",
            component:base_Input,
            meta: {
              title: "Base Inputs | Star Stocks",
            },
          },
          {
            path:"checkbox-radio",
            name:"checkbox & radio",
            component:checkbox_radio,
            meta: {
              title: "Checkbox & Radio | Star Stocks",
            },
          },
          {
            path:"input-groups",
            name:"input Groups",
            component:input_groups,
            meta: {
              title: "Input Groups | Star Stocks",
            },
          },
          {
            path:"mega-options",
            name:"megaOptions",
            component:megaOptions,
            meta: {
              title: "Mega Options | Star Stocks",
            },
          },
          {
            path:"select2",
            name:"select2",
            component:select2,
            meta: {
              title: "Select2 | Star Stocks",
            },
          },
          {
            path:"switch",
            name:"switch",
            component:switch_From,
            meta: {
              title: "Switch | Star Stocks",
            },
          },
          {
            path:"touchspin",
            name:"touchspin",
            component:touchspin_Form,
            meta: {
              title: "Touchspin | Star Stocks",
            },
          },
          {
            path:"typeahead",
            name:"typeahead",
            component:typeahead_Form,
            meta: {
              title: "Typeahead | Star Stocks",
            },
          },
          {
            path:"clipboard",
            name:"clipboard",
            component:clipboard_Form,
            meta: {
              title: "Clipboard | Star Stocks",
            },
          },
          {
            path:"wizard2",
            name:"form_wizard2",
            component:form_wizard2,
            meta: {
              title: "Form Wizard2 | Star Stocks",
            },
          },
          {
            path:"wizard1",
            name:"formwizard",
            component:form_wizard1,
            meta: {
              title: "Form Wizard1 | Star Stocks",
            },
          },
          {
            path:"wizard3",
            name:"formwizard3",
            component:form_wizard3,
            meta: {
              title: "Form Wizard3 | Star Stocks",
            },
          },
          {
            path:"defaultforms",
            name:"defaultforms",
            component:defaultforms,
            meta: {
              title: "Default Forms | Star Stocks",
            },
          },
          {
            path:"datepicker",
            name:"datepicker",
            component:datepicker,
            meta: {
              title: "Datepicker | Star Stocks",
            },
          },
          
        ]
      },
      {
        path: "/advance",
        component: Body,
        children: [
            {
                path: "scrollable",
                name: "Scrollable",
                component: Scrollable,
                meta: {
                    title: "Scrollable | Star Stocks",
                },
            },
            {
              path: "treeView",
              name: "Tree",
              component: Tree,
              meta: {
                  title: "Tree | Star Stocks",
              },
          },
            {
              path: "notify",
              name: "notify",
              component: Notify,
              meta: {
                  title: "Scrollable | Star Stocks",
              },
            },
            {
              path: "rating",
              name: "Rating",
              component: Rating,
              meta: {
                  title: "Rating | Star Stocks",
              },
          },
          {
            path: "dropzone",
            name: "dropzone",
            component: dropzone,
            meta: {
                title: "dropzone | Star Stocks",
            },
        },
        {
          path: "tour",
          name: "Tour",
          component: Tour,
          meta: {
              title: "Tour | Star Stocks",
          },
      },
            {
                path: "sweetalert",
                name: "Sweetalert",
                component: Sweetalert,
                meta: {
                    title: "Sweetalert | Star Stocks",
                },
            },
            {
              path: "animatedModal",
              name: "animatedModal",
              component: animatedModal,
              meta: {
                  title: "Sweetalert | Star Stocks",
              },
          },
          {
            path: "owlCarousel",
            name: "owlCarousel",
            component: owlCarousel,
            meta: {
                title: "Sweetalert | Star Stocks",
            },
        },
           
            {
                path: "ribbons",
                name: "Ribbons",
                component: Ribbons,
                meta: {
                    title: "Ribbons | Star Stocks",
                },
            },
            {
              path: "pagination",
              name: "Pagination",
              component: Pagination,
              meta: {
                  title: "Pagination | Star Stocks",
              },
          },
          {
            path: "breadcrumb",
            name: "Breadcrumb",
            component: Breadcrumb,
            meta: {
                title: "Breadcrumb | Star Stocks",
            },
        },
            {
                path: "range-slider",
                name: "Rangeslider",
                component: Rangeslider,
                meta: {
                    title: "Rangeslider | Star Stocks",
                },
            },
            {
              path: "image-cropper",
              name: "ImageCropper",
              component: ImageCropper,
              meta: {
                  title: "ImageCropper | Star Stocks",
              },
          },
            
            {
                path: "sticky",
                name: "Sticky",
                component: Sticky,
                meta: {
                    title: "Sticky | Star Stocks",
                },
            },
            {
              path: "basicCard",
              name: "basicCard",
              component: BasicCard,
              meta: {
                  title: "Sticky | Star Stocks",
              },
          },
          {
            path: "creativeCard",
            name: "creativeCard",
            component: CreativeCard,
            meta: {
                title: "Sticky | Star Stocks",
            },
        },
        {
          path: "TabbedCard",
          name: "TabbedCard",
          component: TabbedCard,
          meta: {
              title: "Sticky | Star Stocks",
          },
      },
      {
        path: "DraggableCard",
        name: "DraggableCard",
        component: DraggableCard,
        meta: {
            title: "Sticky | Star Stocks",
        },
    },
        ],
    },
    {
      path:"/chart",
      component:Body,
      children:[
        {
          path:"google",
          name:"googlechart",
          component:google_chart,
          meta: {
            title: "Google Chart | Star Stocks",
        },
        },
        {
          path:"/app/leaderboards",
          name:"leaderboards",
          component:leaderboards,
          meta: {
            title: "Leaderboards | Star Stocks",
        },
        },
        {
          path:"chartist",
          name:"chartist",
          component:chartist_chart,
          meta: {
            title: "Chartist | Star Stocks",
        },
        },
  
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
            path:'/pages/support',
            name:'Support',
            component:Support,
            meta: {
            title: 'Support | Star Stocks',
          }
          },
          {
            path:'sample-page',
            name:'sample-page',
            component:sample_page,
            meta: {
                title: 'sample-page | Star Stocks',
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
      path: '/uikits',
      component: Body,
      children: [
      {
        path: 'alert',
        name: 'alert',
        component: alert,
        meta: {
          title: 'Alert | Star Stocks',
        }
      },
      {
        path: 'helper-classes',
        name: 'Helperclasses',
        component: Helperclasses,
        meta: {
          title: 'Helperclasses | Star Stocks',
        }
      },
      {
        path: 'avatars',
        name: 'Avatars',
        component: Avatars,
        meta: {
          title: 'Avatars | Star Stocks',
        }
      },
      {
        path: 'grid',
        name: 'Grid',
        component: Grid,
        meta: {
          title: 'Grid | Star Stocks',
        }
      },
      {
        path: 'tag-pills',
        name: 'Tagpills',
        component: Tagpills,
        meta: {
          title: 'Tagpills | Star Stocks',
        }
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
        meta: {
          title: 'Typography | Star Stocks',
        }
      },
      {
        path: 'progress-bar',
        name: 'Progressbar',
        component: Progressbar,
        meta: {
          title: 'Progressbar | Star Stocks',
        }
      },
      {
        path: 'modal',
        name: 'Modal',
        component: Modal,
        meta: {
          title: 'Modal | Star Stocks',
        }
      },
      {
        path: 'popover',
        name: 'Popover',
        component: Popover,
        meta: {
          title: 'Popover | Star Stocks',
        }
      },
      {
        path: 'tooltip',
        name: 'Tooltip',
        component: Tooltip,
        meta: {
          title: 'Tooltip | Star Stocks',
        }
      },
      {
        path: 'loader',
        name: 'Spinners',
        component: Spinners,
        meta: {
          title: 'Spinners | Star Stocks',
        }
      },
      {
        path: 'dropdown',
        name: 'Dropdown',
        component: Dropdown,
        meta: {
          title: 'Dropdown | Star Stocks',
        }
      },
      {
        path: 'accordion',
        name: 'Accordion',
        component: Accordion,
        meta: {
          title: 'Accordion | Star Stocks',
        }
      },
      {
        path: "bootstraptab",
        name: "bootstraptabPage",
        component: bootstraptabPage,
        meta: {
          title: "tab | Star Stocks",
        },
      },
      {
        path: "linetab",
        name: "linetabPage",
        component: linetabPage,
        meta: {
          title: "Accordion | Star Stocks",
        },
      },
      {
        path: 'box-shadow',
        name: 'Boxshadow',
        component: Boxshadow,
        meta: {
          title: 'Boxshadow | Star Stocks',
        }
      },
      {
        path: 'lists',
        name: 'Lists',
        component: Lists,
        meta: {
          title: 'Lists | Star Stocks',
        }
      }
      ]
    },
    {
      path: "/animation",
      component: Body,
      children: [
          {
              path: "animate",
              name: "animate",
              component: animate,
              meta: {
                  title: "animate | Star Stocks",
              },
          },
          {
            path: "scroll",
            name: "scroll",
            component: scroll,
            meta: {
                title: "scroll | Star Stocks",
            },
        },
          {
            path: "AOS",
            name: "aos",
            component: aos,
            meta: {
                title: "aos | Star Stocks",
            },
          },
     
        {
          path: "wow",
          name: "wow",
          component: wow,
          meta: {
              title: "wow | Star Stocks",
          },
      },
      {
        path: "tilt",
        name: "tilt",
        component: tilt,
        meta: {
            title: "tilt | Star Stocks",
        },
    },
        ],
    },
    {
      path:"/builder",
      component: Body,
      children:[
        {
          path: "form1",
          name: "Form Builder1",
          component: form1,
          meta: {
            title: "from1 | Star Stocks",
          },
        },
        {
          path: "form2",
          name: "Form Builder2",
          component: form2,
          meta: {
            title: "from2 | Star Stocks",
          },
        }
      ]
    },
    {
      path: '/icons',
      component: Body,
      children:[
      {
        path: 'flag',
        name: 'Flag',
        component: Flag,
         meta: {
            title: 'Flag | Star Stocks',
          }
      },
      {
        path: 'ico',
        name: 'Ico',
        component: Ico,
         meta: {
            title: 'Ico | Star Stocks',
          }
      },
      {
        path: 'themify',
        name: 'Themify',
        component: Themify,
         meta: {
            title: 'Themify | Star Stocks',
          }
      },
      {
        path: 'fontawesome',
        name: 'Fontawesome',
        component: Fontawesome,
         meta: {
            title: 'Fontawesome | Star Stocks',
          }
      },
      {
        path: 'feather_icon',
        name: 'FeatherIcon',
        component: FeatherIcon,
         meta: {
            title: 'FeatherIcon | Star Stocks',
          }
      },
      {
        path: 'whether',
        name: 'WhetherIcon',
        component: WhetherIcon,
         meta: {
            title: 'WhetherIcon | Star Stocks',
          }
      }
      ]
    },
    {
      path: '/buttons',
      component: Body,
      children:[
      {
        path: 'default',
        name: 'default_buttons',
        component: Default_buttons,
         meta: {
            title: 'Default_buttons | Star Stocks',
          }
      },
      {
        path: 'flat',
        name: 'flat_buttons',
        component: Flat_buttons,
         meta: {
            title: 'Flat_buttons | Star Stocks',
          }
      },
      {
        path: 'edge',
        name: 'edge_buttons',
        component: Edge_buttons,
         meta: {
            title: 'Edge_buttons | Star Stocks',
          }
      },
      {
        path: 'raised',
        name: 'raised_buttons',
        component: Raised_buttons,
         meta: {
            title: 'Raised_buttons | Star Stocks',
          }
      },
      {
        path: 'group',
        name: 'group_buttons',
        component: Group_buttons,
         meta: {
            title: 'Group_buttons | Star Stocks',
          }
      }
      ]
    },
    {
      path: '/knowledgebase',
      component: Body,
      children: [
        {
          path: "knowledgebase",
          name: 'knowledge',
          component: knowledge,
          meta: {
            title: 'Knowledgebase | Star Stocks',
          }
        },
        {
          path: 'category',
          name: 'category_knowledge',
          component: category_knowledge
        },
        {
          path: 'detail',
          name: 'detail_knowledge',
          component: detail_knowledge
        }
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
      path: '/editor',
      component: Body,
      children:[
        {
          path: 'simple-editor',
          name: 'SimpleEditor',
          component:SimpleEditor,
          meta: {
            title: 'SimpleEditor | Star Stocks',
          }
        },
        {
          path: 'ck-editor',
          name: 'CkEditor',
          component:CkEditor,
           meta: {
            title: 'CkEditor | Star Stocks',
          }
          
        }
      ]
    },
    {
      path:'/maps',
      component: Body,
      children:[
        {
          path: 'vue-google-maps',
          name: 'GoogleMaps',
          component:GoogleMaps,
           meta: {
            title: 'oogleMaps | Star Stocks',
          }
        },
        {
          path: 'vue-leaflet-maps',
          name: 'VueLeaflet',
          component:VueLeaflet,
           meta: {
            title: 'ueLeaflet | Star Stocks',
          }
        }
      ]
    },
    {
      path:"/learning",
      component:Body,
      children:[
        {
          path:"list",
          name:"learninglist",
          component:learning_list,
          meta: {
            title: 'Learning List | Star Stocks',
          }
        },
        {
          path:"details/:id",
          name:"coursedetailed",
          component:coursedetailed,
          meta: {
            title: 'Detailed Course | Star Stocks',
          }
        }
      ]
    },
    {
      path:"/job",
      component:Body,
      children:[
        {
          path:"card",
          name:"cardview",
          component:job_card,
          meta: {
            title: 'Card View | Star Stocks',
          }
        },
        {
          path:"list",
          name:"listview",
          component:job_list,
          meta: {
            title: 'List View | Star Stocks',
          }
        },
        {
          path:"/job/details/:id",
          name:"jobdetails",
          component:job_details,
          props:true,
          meta: {
            title: 'Job Details | Star Stocks',
          }
        },
        {
          path:"apply/:id",
          name:"jobapply",
          component:job_apply,
          meta: {
            title: 'Apply | Star Stocks',
          }
        }
      ]},
      {
        path:"/blog",
        component:Body,
        children:[
          {
            path:"details",
            name:"blog-detail",
            component:blog_detail,
            meta: {
              title: 'Blog Details | Star Stocks',
            }
          },
          {
            path:"single",
            name:"blog_single",
            component:blog_single,
            meta: {
              title: 'Blog Single | Star Stocks',
            }
          },
          {
            path:"add",
            name:"blog_add",
            component:blog_add,
            meta: {
              title: 'Add Blog | Star Stocks',
            }
          }
          
        ]
      },
      {
        path:"/gallery",
        component:Body,
        children:[
          {
            path:"grid-gallery",
            name:"gridgallery",
            component:grid_gallery,
            meta: {
              title: 'Grid Gallery | Star Stocks',
            }
          },
          {
            path:"gallery-desc",
            name:"griddesc",
            component:grid_desc,
            meta: {
              title: 'Grid Gallery With Desc | Star Stocks',
            }
          },
          {
            path:"hover-effect",
            name:"hovergallery",
            component:hover_gallery,
            meta: {
              title: 'Hover Effect | Star Stocks',
            }
          },
          {
            path:"gallery-masonary",
            name:"masonry-gallery",
            component:masonry_gallery,
            meta: {
              title: 'Masonary Gallery | Star Stocks',
            }
          },
          {
            path:"gallery-masonary-desc",
            name:"masonary-desc",
            component:masonary_desc,
            meta: {
              title: 'Masonary Gallery Desc | Star Stocks',
            }
          }
      
        ]
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
      {
        path:"/table",
        component:Body,
        children:[
/*           {
            path:"/app/portfolio",
            name:"portfolio",
            component:BootstrapBasic,
            meta: {
              title: ' Portfolio | Star Stocks',
            }
          }, */
          {
            path:"tableComponent",
            name:"tableComponent",
            component:tableComponent,
            meta: {
              title: ' Table Components | Star Stocks',
            }
          },
          
          {
            path:"/datatable-basic",
            name:"datatable",
            component:DatatableBasic,
            meta: {
              title: ' Basic Init | Star Stocks',
            }
          },
     
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