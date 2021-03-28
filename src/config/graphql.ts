const graphqlConfig = {
    uri: process.env.NODE_ENV === 'production' ? 'graphql.todoamplify.com.br' : 'localhost:20002'
}

export default graphqlConfig;
