<template>
    <!-- For each fish in data, create a card -->
    <div>
        <h1>Fish:</h1>
        <table>
            <div class="container-fluid">
                <div class="row">
                <FishCard
                    v-for="fish in fishes" v-bind:key="fish.id"
                    v-bind:fish="fish"
                    v-on:fish-caught="fishCaughtOrNot"
                    v-on:fish-donated="fishDonatedOrNot"
                    v-bind:hemisphere="hemisphere">
                </FishCard>
                </div>
            </div>
        </table>
    </div>
</template>

<script>
    import FishCard from '@/components/FishCard.vue'
    
    export default {
        name: 'FishTable',
        components: {FishCard},
        data() {
            return {

            }
        },
        props: {
            fishes: Array,
            hemisphere: String
        },
        methods: {
            fishCaughtOrNot(fish) {
                this.$emit('fish-caught', fish)
            },
            fishDonatedOrNot(fish) {
                this.$emit('fish-donated', fish)
            }
        }
    }
</script>

<style scoped>

</style>