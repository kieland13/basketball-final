<template>
  <div id="app">

    <NewRosterForm v-on:player-added="newPlayerAdded"></NewRosterForm>
    <PlayerTable 
    v-bind:players="players"
    v-on:player-starting="playerStartingOrNot"
    v-on:remove-player="playerRemoved"></PlayerTable>
    <PlayerMessage v-bind:message="message" v-bind:name="name"></PlayerMessage>

  </div>
</template>

<script>
import NewRosterForm from './components/NewRosterForm.vue'
import PlayerMessage from './components/PlayerMessage.vue'
import PlayerTable from './components/PlayerTable.vue'

export default {
  name: 'App',
  data() {
    return {
      players: [],
      message: '',
      name: ''
    }
  },
  components: {
    NewRosterForm,
    PlayerMessage,
    PlayerTable
  },
  mounted() {
    this.updatePlayers()
  },
  methods: {
    newPlayerAdded(player) {
      this.$player_api.addPlayer(player).then( player => {
        this.updatePlayers()
      }).catch( err => {
        let msg = err.response.data.join(', ')
        alert('Error adding player.\n' + msg)
      })
    },
    playerStartingOrNot(player) {
      this.$player_api.updatePlayer(player).then( () => {
        this.message = player.starting ? 'Starting, ' : 'Not Starting, '
        this.name = player.name
        this.updatePlayers()
      })
    },
    playerRemoved(player) {
      this.$player_api.deletePlayer(player.id).then( () => {
        this.updatePlayers()
      })
     
    },
    updatePlayers() {
      this.$player_api.getAllPlayers().then( players => {
        this.players = players
      })
    }
  }
}
</script>

<style>
#app {
    background-color: black;
}
</style>
