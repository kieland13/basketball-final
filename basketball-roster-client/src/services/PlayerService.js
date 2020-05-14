import axios from 'axios'

const base_url = '/api/players'
export default {

    getAllPlayers() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addPlayer(player) {
        return axios.post(base_url, player).then(response => {
            return response.data
        })
    },

    updatePlayer(player) {
        return axios.patch(`${base_url}/${player.id}`, player).then(response => {
            return response.data
        })
    },

    deletePlayer(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    }
}