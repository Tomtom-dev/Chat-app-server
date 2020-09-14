const {GraphQLServer} = require('graphql-yoga')

const messages=[]

const typeDefs=`
type Messages {
    id:ID!
    user: String!
    content: String!
}

type Query {
    messages:[Messages!]
}

type Mutation {
    postMessage(user: String!, content: String!): ID !
}

`;

const resolvers ={
    Query:{
        messages:() =>messages,
    },
    Mutation: {
        postMessage: (parent, {user, content}) =>{
            const id= messages.length;
            messages.push({
                id,
                user,
                content,
            });
            return id;
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server on http://loacalhost:${port}/`);
} )