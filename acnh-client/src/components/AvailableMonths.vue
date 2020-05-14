<template>
    <div>
        <div id="monthContainer">
            <!-- Create a calander component, divides a div into 24 segments, append available class to segment based on fish/bug.json season/hemisphere -->
            <div class="calander">
                <div class="month"
                    v-for="(month, key, index) in months"
                    v-bind:key="index"
                    v-bind:class="{'available' : month}">
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: "AvailableMonths",
    props: {
        months: Array
    },

    
}
</script>

<style scoped>
.calander {
    height: 30px;
    width: 90%;
    display: flex;
    background-color: #f0d489;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin: 5%;
}

.month {
    justify-content: center;
    align-items: center;
    width: fill;
    height: 30px;
    border-right: 1px solid black;
    border-left: 1px solid black;
}

.available {
    background-color: rgb(170, 136, 42);
}
</style>