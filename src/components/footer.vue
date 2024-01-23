<template>
  <div>
    <footer class="footer" :class="this.footer == 'footer-dark' ? 'footer-dark' : ''">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 footer-copyright text-center">
            <p class="mb-0">Copyright 2024 © Techpresso Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footerpage',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      footer: 'layout/footer'
    })
  }
};
</script>
