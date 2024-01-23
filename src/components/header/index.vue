<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <Logo/>
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
        <swiper  :slidesPerView="1" :autoplay="{delay: 2500,disableOnInteraction: false}"
           :modules="modules"
        class="notification-slider"
        direction="vertical"
       >
          <swiper-slide  class="h-100" >
            <div class="d-flex h-100">
              <img src="@/assets/images/giftools.gif" alt="gif">
              <h6 class="mb-0 f-w-400">
                <span class="font-primary"></span><span class="f-light">Thank you Alpha Testers!</span></h6><i class="icon-arrow-top-right f-light"></i>
            </div>
          </swiper-slide>
          <swiper-slide class="h-100">
            <div class="d-flex h-100">
              <img src="@/assets/images/giftools.gif" alt="gif">
              <h6 class="mb-0 f-w-400">
                <span class="f-light">Who's ya' bae?? </span></h6><a class="ms-1" href="/pages/support" target="_blank">Add a new celeb now !</a>
            </div>
          </swiper-slide>
        </swiper>
    </div>
    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li>
          <span class="header-search"
            ><svg @click="search_open()">
              <use href="@/assets/svg/icon-sprite.svg#search" ></use>
            </svg>
           </span>
        </li>
        <li class="onhover-dropdown">
          <svg @click="bookmark_open()">
            <use href="@/assets/svg/icon-sprite.svg#star" ></use>
          </svg>
          <Bookmark v-bind:activeclass="bookmark" />
        </li>
        <li>
          <Mode />
        </li>
        <Notifications />
        <Profile />
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Bookmark from '../bookmark';
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay } from "swiper";
  import "swiper/css";
  import Notifications from './notifications.vue';
  import Mode from './mode';
  import Profile from './profile';
  import Logo from './logo.vue';
  import SearchBar from './search';
  export default {
    components: {
      Bookmark,Notifications,Mode,Profile,Logo,Swiper,SwiperSlide,SearchBar,
    },
    data() {
      return {
        bookmark: false,
      };
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.searchData,
        megamenuItems: (state) => state.menu.megamenu,
        searchOpen: (state) => state.menu.searchOpen,
      }),
    },
    methods: {
      search_open() {
        this.$store.state.menu.searchOpen = true;
      },
      bookmark_open() {
        this.bookmark = !this.bookmark;
      },
    },
    setup() {
    return {
      modules: [Autoplay],
    };
  },
  };
</script>
