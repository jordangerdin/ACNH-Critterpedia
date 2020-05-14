<template>
    <!-- Fish details -->
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-6 mx-auto" style="padding:5px">
        <div class="card card-default" style="width: 15rem; height: 40rem;">
            <img class="card-img-top" :src="`${imageSrc}`">
            <div class=card-body>
                <p>{{ fish.name }}</p>
                <p>Price: {{ fish.price }}</p>
                <p>Location: {{ fish.location }}</p>
                <p>Shadow Size: {{ fish.shadowSize }}</p>
                <p>Available:</p>
                <AvailableHours 
                        v-bind:hours="fish.time">
                </AvailableHours>
                <p>Months:</p> 
                <!-- Show seasonal availability for fish -->
                <AvailableMonths
                    v-if="hemisphere == 'Northern'"
                    v-bind:months="fish.season.northern">
                </AvailableMonths>
                <AvailableMonths
                    v-else-if="hemisphere == 'Southern'"
                    v-bind:months="fish.season.southern">
                </AvailableMonths>

                <label v-bind:id='fish.name + "-caught"'>Caught
                    <input v-bind:id='fish.name + "-caught"' type="checkbox" v-model="fish.caught" v-on:change="caught(fish)">
                </label>
                <label v-bind:id='fish.name + "-donated"'>Donated
                    <input v-bind:id='fish.name + "-caught"' type="checkbox" v-model="fish.donated" v-on:change="donated(fish)">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import AvailableHours from "@/components/AvailableHours.vue"
import AvailableMonths from "@/components/AvailableMonths.vue"

export default {
    name: 'FishCard',
    components: {
        AvailableHours, 
        AvailableMonths
    },
    props: {
        fish: Object,
        hemisphere: String
    },
    computed: {
        imageSrc: function() {
            return process.env.BASE_URL + `fish/${this.fish.image}`
        }
    },
    methods: {
        caught(fish) {
            this.$emit('fish-caught', fish)
        },
        donated(fish){ 
            this.$emit('fish-donated', fish)
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
    border-color: rgb(170, 136, 42);
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
}
</style>