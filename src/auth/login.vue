<!-- login.vue -->
<template>
  <div>

    <div class="container-fluid">
      <div class="row ">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
                  <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form" @submit.prevent="login">
                  <h4>Sign in to account</h4>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input v-model="email" class="form-control" type="email" placeholder="Enter your email">
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input v-model="password" class="form-control" type="password" placeholder="Enter your password">


                      <!-- <div class="show-hide"><span class="show"> </span></div> -->
                    </div>
                  </div>
                  <div class="form-group mb-0">
<!--                     <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox">
                      <label class="text-muted" for="checkbox1">Remember password</label>
                    </div>
                    <router-link class="link" to="/authentication/forgetpassword"> Forgot password?</router-link>
                    -->
                    <div class="text-end mt-3">
                      
                        <button class="btn btn-primary btn-block w-100" type="button" @click="login">Sign In</button>

                    </div>
                  </div>
<!--                   <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                  <div class="social mt-4">
                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login"
                        target="_blank"><i class="txt-linkedin" data-feather="linkedin"></i> Google </a></div>
                  </div> -->
                  <p class="mt-4 mb-0 text-center">Don't have account?<a class="ms-2" href="../auth/register">Create
                      Account</a></p>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<!-- login.vue -->
<script>
import Userauth from "./auth.js";
import { useRouter } from 'vue-router';
import { ref } from 'vue';


export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        const user = await Userauth.signIn(email.value, password.value);
        const userDetails = await Userauth.getUserDetailsAndRole();
        if (userDetails) {
          // Use userDetails.username or other fields as needed
        }
        router.push({ name: 'defaultRoot' });
      } catch (error) {
        console.error(error.message);
      }
    };

    return { email, password, login };
  }
};
</script>