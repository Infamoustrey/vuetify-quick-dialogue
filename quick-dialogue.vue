<template>

<v-layout row wrap>

    <v-flex>

        <v-btn :color="buttonColor" outline @click="activateButton">{{buttonText}}</v-btn>

        <v-dialog v-model="isVisible" :max-width="maxWidth">

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
                        <v-btn color="red" flat @click.stop="hide">Close</v-btn>
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

    props: {
        
        maxWidth: {
            type: String,
            default: '500px'
        },

        buttonText: {
            type: String,
            default: 'Quick Dialogue Button'
        },

        buttonColor: {
            type: String,
            default: 'primary'
        },

    },

    data(){return {
        isVisible: false
    }},

    methods: {

        activateButton() { this.isVisible = true; },

        hide() { this.isVisible = false; }

    },



}

</script>