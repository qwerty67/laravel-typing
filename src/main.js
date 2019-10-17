import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from 'apollo-boost';

Vue.use(VueApollo);


const client = new ApolloClient({
  uri: "http://127.0.0.1:8001/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDEvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1NzA2MzgzMzIsImV4cCI6MTU3MDY0MTkzMiwibmJmIjoxNTcwNjM4MzMyLCJqdGkiOiJKTFpxdXRqOG5iUWk4alh4Iiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.dmqZ6K48JLV4Y7HLEGN_04zrzCObBjjKu09YRDkka_A'
      },
    });
  }
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount("#app");
