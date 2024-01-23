<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header">
        <h3>Portfolio</h3>
      </div>
      <div class="table-responsive table-border-horizontal">
        <table class="table">
          <thead>
            <tr class="">
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Designation</th>
              <th scope="col">Company</th>
              <th scope="col">Language</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in bootstraplist" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td> <img class="img-30 me-2" :src="getImageUrl(item.img)" alt="profile">{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>{{ item.userName }}</td>
              <td>{{ item.role }}</td>
              <td>{{ item.company }}</td>
              <td> <span class="badge " :class="item.badgeClass">{{ item.language }}</span></td>
              <td>{{ item.country }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import getImage from "@/mixins/getImage"
export default {
  mixins: [getImage],
  computed: {
    ...mapState({
      bootstraplist: state => state.bootsrap.bootstrap,
      inverselist: state => state.bootsrap.inverse
    })
  },
}
</script>