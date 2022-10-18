import { createServer } from "@graphql-yoga/node";

//1 Especificar as operç~pes de existem. ou seja, a nossa interface
const typeDefs = `
 type Query{
    hello: String!
    name: String!
    id: ID!
    localizacao: String!
    idade: Int!
    deMaior: Boolean!
    salario: Float
 }
`

//2 Implementar as  opretarações prometidas na interface. ou seja, escrever um resolver para cada operação pormetida. um resolver é uma função.  
const resolvers = {
    Query:{
        hello(){
            return "hello, GraphQL !!!"
        },
        name (){
            return "João"
        },
        id(){
            return "umid"
        },
        localizacao(){
            return "SP"
        },
        idade(){
            return "29"
        },
        deMaior(){
            return true
        },
        salario(){
            return 1000
        }
    }
}

//3 costruir um servidor entregando a ele a especificação das operações e,mais ainda, a sua implementações.  

const server = createServer({
    schema:{
        typeDefs,
        resolvers
    }
})

server.start()