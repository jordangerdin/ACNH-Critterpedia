import axios from 'axios'

const base = '/api/'

export default{
    getFishData() {
        console.log('getFish called')
        return axios.get('fish.json').then(response => {
            return response.data
        })
    }
}