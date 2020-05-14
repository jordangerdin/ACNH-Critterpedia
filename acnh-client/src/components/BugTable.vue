<template>
    <!-- For each bug in data, create a card -->
    <div>
        <h1>Bugs:</h1>
        <table>
            <div class="container-fluid">
                <div class="row">
                <BugCard
                    v-for="bug in bugs" v-bind:key="bug.id"
                    v-bind:bug="bug"
                    v-on:bug-caught="bugCaughtOrNot"
                    v-on:bug-donated="bugDonatedOrNot"
                    v-bind:hemisphere="hemisphere">
                </BugCard>
                </div>
            </div>  
        </table>
    </div>
</template>

<script>
    import BugCard from '@/components/BugCard.vue'
    
    export default {
        name: 'BugTable',
        components: {BugCard},
        data() {
            return {

            }
        },
        props: {
            bugs: Array,
            hemisphere: String
        },
        methods: {
            bugCaughtOrNot(bug) {
                this.$emit('bug-caught', bug)
            },
            bugDonatedOrNot(bug) {
                this.$emit('bug-donated', bug)
            }
        }
    }
</script>

<style scoped>

</style>