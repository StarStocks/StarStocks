<!-- register.vue -->
<template>
  <div>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img
                    class="img-fluid for-light"
                    src="../assets/images/logo/logo.png"
                    alt="looginpage"
                  />
                  <img
                    class="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                    alt="looginpage"
                  />
                </a>
              </div>
              <div class="login-main">

                <form class="theme-form" @submit.prevent="registerUser">
                  <h4>Create your account</h4>

                  <div class="form-group">
                    <label class="col-form-label pt-0">Username</label>
                    <input
                      class="form-control"
                      type="text"
                      required
                      placeholder="Username"
                      v-model="username"
                    />
                  </div>

                  <div class="form-group">
                    <label class="col-form-label pt-0">Your Name</label>
                    <div class="row g-2">
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required
                          placeholder="First name"
                          v-model="firstName"
                        />
                      </div>
                      <div class="col-6">
                        <input
                          class="form-control"
                          type="text"
                          required=""
                          placeholder="Last name"
                          v-model="lastName"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input
                      class="form-control"
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input
                        class="form-control"
                        :type="active ? 'password' : 'text'"
                        required
                        placeholder="*********"
                        v-model="password"
                      />
                      <!-- <div class="show-hide"><span :class="active ? 'show' : 'hide'" @click.prevent="show"> </span></div> -->
                    </div>
                  </div>
                  <div class="form-group mb-0">
<!--                     <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox" />
                      <label class="text-muted" for="checkbox1">Agree with<a class="ms-2" href="#">Privacy Policy</a></label>
                    </div> -->
                    <button class="btn btn-primary btn-block" >
                      Create Account
                    </button>
                  </div>
<!--                   <h6 class="text-muted mt-4 or">Or signup with</h6>
                    <div class="btn"><a class="btn btn-light" href="#" > Google </a>
                  </div> -->
                  <p class="mt-4 mb-0">
                    Already have an account?
                    <router-link class="ms-2" to="/auth/login">
                      Login
                    </router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- register.vue -->
<script>
import { ref } from 'vue'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { useRouter } from 'vue-router';
import Wallet from "./wallet.js";

export default {
  setup() {
    const router = useRouter();
    const active = ref(true);
    const username = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const createdAt = ref('');
    const role = ref('');

    const show = () => {
      active.value = !active.value;
    };

    const registerUser = async () => {
      if (!(await isUsernameUnique(username.value))) {
        alert("This username is already taken. Please choose another one.");
        return;
      }

      if (!firstName.value) {
        alert("Please enter your first name.");
        return;
      }

      if (password.value.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
      }

      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);

        if (userCredential.user) {
            const db = getFirestore();
            const userId = userCredential.user.uid;

            // Store user information
            const userDocRef = doc(db, "users", userId);
            await setDoc(userDocRef, {
                username: username.value,
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                role: "Free Account",
                createdAt: Timestamp.now()
            });

            // Initialize the user's wallet
            const initialWalletBalance = 10000;
            const walletRef = doc(db, 'wallets', userId);
            await setDoc(walletRef, { balance: initialWalletBalance });

            // Create an initial leaderboard entry
            const leaderboardRef = doc(db, 'leaderboard', userId);
            await setDoc(leaderboardRef, { 
              userId: userId,
              username: username,
              score: initialWalletBalance 
            });

            router.push({ name: 'defaultRoot' });
          }
      } catch (error) {
          console.error("Registration error:", error.message);
      }
    };

    const isUsernameUnique = async (username) => {
      const db = getFirestore();
      const docRef = doc(db, "usernames", username);
      const docSnap = await getDoc(docRef);

      return !docSnap.exists();
    };

    return {
      active,
      username,
      firstName,
      lastName,
      email,
      role,
      createdAt,
      password,
      show,
      registerUser
    };
  }
};
</script>
