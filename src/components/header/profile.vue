<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img
        class="b-r-10"
        src="@/assets/images/dashboard/profile.png"
        alt=""
      />
      <div class="media-body">
        <span>{{ userData.username }}</span>
        <p class="mb-0 font-roboto">
          {{ userData.role }} <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <a @click="logout">
          <vue-feather type="log-in"></vue-feather><span>Log out</span>
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import Userauth from '@/auth/auth.js'; // Import your Userauth module

export default {
  name: 'Profile',
  data() {
    return {
      userData: {
        username: '',
        role: '',
      },
    };
  },
  created() {
    this.fetchUserProfile();
  },

  methods: {
    async fetchUserProfile() {
      const userDetails = await Userauth.getUserDetailsAndRole();
      if (userDetails) {
        this.userData.username = userDetails.username;
        this.userData.firstName = userDetails.firstName;
        this.userData.lastName = userDetails.lastName;
        this.userData.role = userDetails.role;
      }
    },

    logout() {
      Userauth.signOutUser(); // Call the logout method from your Userauth module
      this.$router.replace('/auth/login');
      localStorage.removeItem('User');
    },
  },
};
</script>
