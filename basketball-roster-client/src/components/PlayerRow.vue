<template>
<tr v-bind:class="'starting-' + player.starting">
    <td>{{ player.name }}</td>
    <td>{{ player.position }}</td>
    <td>{{ player.year }}</td>
    <td><input type="checkbox" v-model="player.starting" v-on:change="checked(player)"></td>
    <td v-show="edit">
        <img class="delete-icon" v-on:click="removePlayer(player)" src="@/assets/delete.png">
    </td>
</tr>    
</template>

<script>

export default {
    name: 'PlayerRow',
    props: {
            player: Object,
            edit: Boolean
    },
    methods: {
        checked(player) {
            this.$emit('player-starting', player)
        },
        removePlayer(player) {
            if (confirm(`Delete ${player.name}?`)) {
                this.$emit('remove-player', player)
            }
        }
    }
}

</script>

<style>

.starting-true {
    color: gray;
    font-style:italic;
}

.starting-false {
    font-weight: bold;
}

</style>