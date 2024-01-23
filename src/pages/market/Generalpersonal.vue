<template>
    <div class="col-xl-8 xl-50 col-md-7">
        <div class="tab-content" id="v-pills-tabContent" :style="!this.display ? { display: 'none' } : ''">
            <div class="tab-pane contact-tab-0 tab-content-child fade show"
                :class="item.activeTab === this.activeTab ? 'active' : ''" id="v-pills-user" role="tabpanel"
                aria-labelledby="v-pills-user-tab" v-for="(item, index) in menu" :key="index">
                <div class="profile-mail" v-if="this.activeTab == item.activeTab">
                    <div class="media">
                        <img class="img-100 img-fluid m-r-20 rounded-circle update_img_0"
                            :src="item.imgUrl || getImgUrl(item.img)" alt="">
                        <input class="updateimg" type="file" name="img" @change="(e) => { readURL(e, item) }">
                        <div class="media-body mt-0">
                            <h5><span class="first_name_0">{{ item.name }} </span><span class="last_name_0">{{ item.lastName
                            }}</span></h5>
                            <p class="desc_add_0">{{ item.desc }}</p>
                        </div>
                    </div>
                    <br>
                    <form class="form theme-form">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3">
                                        <input class="form-control" type="number" placeholder="Quantity">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end"><button class="btn btn-primary">Sell</button>  <button class="btn btn-secondary">Buy</button>
                            </div>
                        </div>
                    </form>             
                    <div class="desc-general">
                        <h4 class="mb-3">Information</h4>
                        <ul>
                            <li>Mentions <span class="font-primary"></span></li>
                            <li>Issue Price <span class="font-primary">{{ item.issuePrice }}</span></li>
                            <li>Current Price <span class="font-primary">{{ item.currentPrice }}</span></li>
                            <li>Average Price <span class="font-primary"></span></li>
                            <li>Gain / Loss <span class="font-primary"></span></li>
                            <li>Purchased <span class="font-primary"></span></li>
                            <li>Sold <span class="font-primary"></span></li>
                            <li>Own <span class="font-primary"></span></li>
                            <li>Date Added <span class="font-primary">{{ item.dateAdded }}</span></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <editPage />
    </div>
</template>
<script>
import data from '@/data/contact.json'
import historyPage from './historyPage.vue'
import editPage from './editPage.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        historyPage, editPage
    },
    data() {
        return {
            data: data, url: null,
        }
    },
    computed: {
        ...mapGetters({
            display: 'contact/display',
            activeTab: 'contact/activeTab',
        }),
        menu() {
            return this.data.data
        }
    },
    methods: {
        readURL(e, item) {
            var files = e.target.files[0];
            this.url = URL.createObjectURL(files)
            item.imgUrl = this.url
        },
        printContact(item) {
            this.$store.commit('contact/print', item)
        },
        getImgUrl(path) {
            return require('../../assets/images/' + path)
        },
        editContact() {
            this.$store.dispatch('contact/change')
        },
        deleteContact: function (items) {
            this.$swal({
                icon: 'warning', title: "Are you sure?",
                text: 'Once deleted, you will not be able to recover this imaginary file!',
                showCancelButton: true, confirmButtonText: 'Ok', confirmButtonColor: '#e64942',
                cancelButtonText: 'Cancel', cancelButtonColor: '#efefef',
            }).then((result) => {
                if (result.value) {
                    this.menu.splice(items, 1)
                    this.$store.dispatch('contact/active', this.menu[items].activeTab)
                    this.$swal({
                        icon: 'success',
                        text: 'Poof! Your imaginary file has been deleted!', type: 'success',
                    });
                } else {
                    this.$swal({ text: 'Your imaginary file is safe!' });
                }
            });
        },
    }
}
</script>