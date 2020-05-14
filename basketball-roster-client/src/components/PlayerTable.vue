<template>
    <div class="playerTable">
        <div class="playerInformation">
            <h4 class="card-title">Players</h4>

            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit Roster?</label>
            </div>

            <div id="player-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Year</th>
                        <th>Starting?</th>
                        <th v-show="editTable">Remove Player</th>
                    </tr>

                    <PlayerRow
                    v-for="player in players" v-bind:key="player.name"
                    v-bind:player="player"
                    v-bind:edit="editTable"
                    v-on:player-starting="playerStartingOrNot"
                    v-on:remove-player="playerRemoved">
                    </PlayerRow>
                </table>
            </div>
        </div>

    </div>
    
</template>

<script>

import PlayerRow from '@/components/PlayerRow.vue'

export default {
    name: 'PlayerTable',
    components: { PlayerRow },
    data() {
        return {
            editTable: false
        }
    },
    props: {
        players: Array
    },
    methods: {
        playerStartingOrNot(player) {
        this.$emit('player-starting', player)        
        },
        playerRemoved(player) {
            this.$emit('remove-player', player)
        }
    }
}

</script>

<style>

.starting-true {
    color: gray;
    font-style:italic;
}

.present-false {
    color: black;
    font-weight: bold;
}

.playerTable {
    margin: 20px;
        background-color:lightblue;
}

#player-table {
        background-color:lightblue;
}

</style>