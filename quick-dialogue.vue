<template>

<v-layout row wrap>

    <v-flex>

        <v-btn color="secondary" outline @click="show=true">{{buttonText}}</v-btn>

        <v-dialog v-model="show" max-width="500px">

            <v-card>
                <v-card-title primary-title>
                    <slot name="header"> 
                        <h1 class="headline">{{title}}</h1>
                    </slot>
                </v-card-title>
                
                <v-card-text>
                
                    <slot></slot>

                </v-card-text>

                <v-card-actions>
                    <slot name="footer">
                        <v-btn color="red" flat @click.stop="show=false">Close</v-btn>
                    </slot>
                </v-card-actions>

            </v-card>

        </v-dialog>

    </v-flex>

</v-layout>
  
  
</template>

<script>

export default {

    name: 'quick-dialogue',

    data(){return {
        show: false
    }},

    mounted(){

    },

    methods: {

    },

    computed: {

    }


}

</script>

<style lang="css" scoped>



</style>
