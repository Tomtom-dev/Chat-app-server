const {GraphQLServer} = require('graphql-yoga')

const typeDefs=`

`

const server = new GrapgQLServer();

server.start(({port}) => {
    console.log(`Server on http://loacalhost:${port}/`);
} )