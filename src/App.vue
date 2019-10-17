<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png"/>
        <div v-if="$apollo.loading">Loading..</div>
        <div v-else>
            <!--<p>Name: {{UserAdmin[0].name}}</p>-->
            <!--<p>Email: {{UserAdmin.family }}</p>-->
            <!--<p>phone: {{UserAdmin.phone }}</p>-->
            <ul v-for="u in UserAdmin">
            <li>{{u.name}}</li>
            <li>{{u.phone}}</li>
            <li>{{u.family}}</li>
            </ul>
        </div>

        <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    </div>
</template>

<script>
    // import HelloWorld from "./components/HelloWorld.vue";
    import {gql} from 'apollo-boost';

    export default {
        // name: "app",
        // components: {
        //   HelloWorld
        // },
        data() {
            return {
                UserAdmin: {}
            }
        },
        apollo: {
            UserAdmin: {
                query: gql`

                   {
                     UserAdmin
                      {
                      name
                      family
                        phone
                      }
                     }
            `

            }
        }
    };

</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
