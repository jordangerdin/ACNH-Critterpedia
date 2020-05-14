<template>
  <div id="app">

    <nav class="navbar sticky-top navbar-light bg-light mt-0">

      <h1 class="m-2 p-2 navbar-brand">Animal Crossing Critterpedia</h1>

      <label for="hemisphere">Hemisphere:</label>
      <select id="hemisphere" v-model="hemisphere">
        <option value="Northern" default>Northern</option>
        <option value="Southern">Southern</option>
      </select>
    </nav>

    <FishTable
      v-bind:fishes="fishes"
      v-on:fish-caught="fishCaughtOrNot"
      v-on:fish-donated="fishDonated"
      v-bind:hemisphere="hemisphere">
    </FishTable>
    <BugTable
      v-bind:bugs="bugs"
      v-on:bug-caught="bugsCaughtOrNot"
      v-on:bug-donated="bugsDonated"
      v-bind:hemisphere="hemisphere">
    </BugTable>

  </div>
</template>

<script>
import FishTable from './components/FishTable.vue'
import BugTable from './components/BugTable.vue'

export default {
  name: 'App',
  data() {
    return {
      fishes: [],
      bugs: [],
      hemisphere: 'Northern',
    }
  },
  components: {
    FishTable,
    BugTable
  },
  mounted() {
    this.updateFish(),
    this.updateBugs()
  },
  methods: {
    updateFish(){
      this.$fish_api.getFishData().then( fishes => {
        this.fishes = fishes
      })
    },
    updateBugs(){
      this.$bug_api.getBugData().then( bugs => {
        this.bugs = bugs
      })
    },

    // Save caught/donated values to localStorage
    fishCaughtOrNot(fish){
      localStorage.setItem(fish.name + '-caught', fish.caught)
      console.log("Fish updated: " + fish.name)
    },
    bugsCaughtOrNot(bug){
      console.log(bug.name)
      localStorage.setItem(bug.name + '-caught', bug.caught)
      console.log("Bug updated: " + bug.name)
    },
    fishDonated(fish){
      localStorage.setItem(fish.name + '-donated', fish.donated)
      console.log("Fish updated: " + fish.name)
    },
    bugsDonated(bug){
      localStorage.setItem(bug.name + '-donated', bug.donated)
      console.log("Bug updated: " + bug.name)
    },

    // loadData(){

    //   for(bug in bugs){
    //     if(localStorage.getItem(this.bug.name + '-caught')){
    //       this.bug.caught = localStorage.getItem(this.bug.name + '-caught')
    //     }
    //     if(localStorage.getItem(this.bug.name + '-donated')){
    //         this.bug.caught = localStorage.getItem(this.bug.name + '-donated')
    //     }
    //   }

    //   for(fish in fishes){
    //       console.log(fish)
    //       if(localStorage.getItem(this.fish.name + '-caught')){
    //         this.fish.caught = localStorage.getItem(this.fish.name + '-caught')
    //       }
    //       if(localStorage.getItem(this.fish.name + '-donated')){
    //           this.fish.caught = localStorage.getItem(this.fish.name + '-donated')
    //       }
    //     }
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
