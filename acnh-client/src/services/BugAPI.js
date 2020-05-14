import axios from 'axios'

const base = '/api/'

export default{
    getBugData() {
        console.log('getBugs called')
        return axios.get('bugs.json').then(response => {
            return response.data
        })
    }
}