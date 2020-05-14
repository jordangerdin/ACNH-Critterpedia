<template>
    <div id="clockContainer">
        <div class="clock">
            <div
                class="hour"
                v-for="(hour, key, index) in hours"
                v-bind:key="index"
                v-bind:class="{'available' : hour}">
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: "AvailableHours",
    props: {
        hours: Array
    },

    
}
</script>

<style scoped>
.clock {
    height: 30px;
    width: 90%;
    display: flex;
    background-color: #f0d489;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    margin: 5%;
}

.hour {
    justify-content: center;
    align-items: center;
    width: fill;
    height: 30px;
    border-right: 1px solid black;
    border-left: 1px solid black;
}

.available{
    background-color: rgb(170, 136, 42);
}
</style>