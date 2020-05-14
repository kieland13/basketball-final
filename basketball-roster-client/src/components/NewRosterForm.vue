<template>
    <div class="rosterForm">
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
                <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </div>

        <div class="addNewPlayerArea">
            <h4 class="card-title">Add new player</h4>

            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim="newPlayerName">
            </div>
            <div class="form-group">
                <label for="position">Position</label>
                <input id="position" class="form-control" v-model.trim="newPosition">
            </div>
            <div class="form-group">
                <label for="year">Year</label>
                <input id="year" class="form-control" v-model.trim="newYear">
            </div>

            <button class="btn btn-primary" v-on:click.prevent="addPlayer">Add</button>
        </div>
    </div>
    
</template>
<script>

export default {
    name: 'NewRosterForm',
    data() {
        return {
            newPlayerName: '',
            newPosition: '',
            newYear: '',
            errors: []
        }
    },
    methods: {
        addPlayer() {
            this.errors = []
            if (this.newPlayerName && this.newPosition && this.newYear) {
                let player = { name: this.newPlayerName, position: this.newPosition, year: this.newYear, starting: false }
                this.$emit('player-added', player)
                this.newPlayerName = ''
                this.newPosition = ''
                this.newYear = ''
            } else {
                this.errors.push('Name, Position and Year are required.')
            }
        }
    }

}
</script>

<style>
.rosterForm {
    margin:20px;
    background-color:lightblue;
}
.addNewPlayerArea {
        background-color:lightblue;
}

</style>