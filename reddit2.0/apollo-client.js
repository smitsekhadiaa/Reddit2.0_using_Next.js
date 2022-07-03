import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://broadalbin.stepzen.net/api/terrifying-rodent/__graphql",
    headers:{
        Authorization:`Apikey`
    },
    cache: new InMemoryCache(),
});

export default client;