<template>
<div class="contact-editform" :style="this.display?{display:'none'}: '' ">
    <form>
        <div class="row g-2">
            <div class="mt-0 mb-3 col-md-12">
                <label>Name</label>
                <div class="row">
                    <div class="col-sm-6">
                        <input class="form-control" id="first_name" type="text" v-model="name" required placeholder="First Name">
                    </div>
                    <div class="col-sm-6">
                        <input class="form-control" id="last_name" type="text" v-model="lastName" required placeholder="Last Name">
                    </div>
                </div>
            </div>
            <div class="mt-0 mb-3 col-md-12">
                <label>Email Address</label>
                <input class="form-control" id="desc_add" type="text" v-model="desc" required autocomplete="off">
            </div>
            <div class="mt-0 mb-3 col-md-12">
                <label>Phone</label>
                <div class="row">
                    <div class="col-sm-6">
                        <input class="form-control" id="mobile_num" type="text" v-model="mobile" required autocomplete="off">
                    </div>
                    <div class="col-sm-6">
                        <select class="form-control">
                            <option>Mobile</option>
                            <option>Work</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-secondary update-contact" type="button" @click="saved()">Save</button>
        <button class="btn btn-primary ms-2" type="button" @click="cancel()">Cancel</button>
    </form>
</div>
</template>

<script>
import data from '@/data/contact.json'
import {
    mapGetters
} from 'vuex';
export default {
    data() {
        return {
            name: '',
            lastName: '',
            desc: '',
            mobile: '',
            menu: data.data
        }
    },
    computed: {
        ...mapGetters({
            display: 'contact/display',
            activeTab: 'contact/activeTab'
        })
    },
    methods: {
        saved() {
            this.$store.dispatch('contact/change')
            this.menu.filter(item => {
                if (item.activeTab === this.activeTab) {
                    item.name = this.name
                    item.lastName = this.lastName
                    item.desc = this.desc
                    item.mobile = this.mobile
                }
            })
        },
        cancel() {
            this.$store.dispatch('contact/change')
        }
    }
}
</script>
