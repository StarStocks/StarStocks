<template>
    <Breadcrumbs title="Market" />


    <div class="container-fluid">
        <div class="desc-wrap bookmark-wrap">
            <div class="row">
                <div class="col-xl-3 box-col-6">
                    <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                            @click="collapseFilter">Categories Filter </a>
                        <div class="md-sidebar-aside desc-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                            <div class="card">
                                <div class="card-body">
                                    <div class="list-group">
                                        <a class="list-group-item list-group-item-action active" href="javascript:void(0)">All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-md-12 box-col-12">
                    <div class="desc-right-aside bookmark-tabcontent contacts-tabs">
                        <div class="card desc-body radius-left">
                            <div class="ps-0">
                                <div class="tab-content">
                                    <div class="tab-pane fade"
                                        v-bind:class="(activeclass === 'pills-personal-tab') ? 'active show' : ''"
                                        id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                                        <personalContact />
                                    </div>
                                    <printModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import printModal from './printModal.vue'
import newContact from './newContact.vue'
import addCategory from './addCategory.vue';
import personalContact from './personalContact.vue'
import menu from '../../data/contact.json'

export default {
    name: 'contactView',
    data() {
        return {
            activeclass: 'pills-personal-tab',
            menu: menu.data,
            filtered: false
        }
    },
    components: {
        newContact,
        addCategory,
        personalContact,
        printModal
    },
    methods: {
        active(item) {
            this.activeclass = item
        },
        collapseFilter() {
            this.filtered = !this.filtered
        }
    },
}
</script>
