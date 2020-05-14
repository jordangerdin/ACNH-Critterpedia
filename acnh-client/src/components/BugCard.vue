<template>
    <!-- Bug details -->
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6 mx-auto" style="padding:5px">
        <div class="card card-default" style="width: 15rem; height: 33rem;">
            <t<img class="card-img-top" :src="`${imageSrc}`">
            <div class="card-body">
                <p>{{ bug.name }}</p>
                <p>Price: {{ bug.price }}</p>
                <p>Location: {{ bug.location }}</p>
                <p>Available:</p>
                <AvailableHours
                    v-bind:hours="bug.time">
                </AvailableHours>
                <p>Months: </p>
                <!-- Show seasonal availability for bugs -->
                <AvailableMonths
                    v-if="hemisphere == 'Northern'"
                    v-bind:months="bug.season.northern">
                </AvailableMonths>
                <AvailableMonths
                    v-else-if="hemisphere == 'Southern'"
                    v-bind:months="bug.season.southern">
                </AvailableMonths>

                <label v-bind:id='bug.name + "-caught"'>Caught
                    <input v-bind:id='bug.name + "-caught"' type="checkbox" v-model="bug.caught" v-on:change="caught(bug)">
                </label>
                <label v-bind:id='bug.name + "-donated"'>Donated
                    <input v-bind:id='bug.name + "-donated"' type="checkbox" v-model="bug.donated" v-on:change="donated(bug)">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import AvailableHours from "@/components/AvailableHours.vue"
import AvailableMonths from "@/components/AvailableMonths.vue"

export default {

    name: 'BugCard',
    components: {
        AvailableHours, 
        AvailableMonths
    },
    mounted() {
        if(localStorage.getItem(this.bug.name + '-caught')){
          this.bug.caught = localStorage.getItem(this.bug.name + '-caught')
        }
        if(localStorage.getItem(this.bug.name + '-donated')){
            this.bug.caught = localStorage.getItem(this.bug.name + '-donated')
        }
    },
    props: {
        bug: Object,
        hemisphere: String
    },
    computed: {
        imageSrc: function() {
            return process.env.BASE_URL + `bugs/${this.bug.image}`
        }
    },
    methods: {
        caught(bug) {
            this.$emit('bug-caught', bug)
        },
        donated(bug){ 
            this.$emit('bug-donated', bug)
        }
    }
}
</script>

<style scoped>
img{
    object-fit: none;
    background-color: #dfd09c;
}
.card{
    background-color: #eae0c2;
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
}
p{
    margin: 0;
}
</style>