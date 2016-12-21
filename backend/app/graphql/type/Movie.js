import {resolver} from 'graphql-sequelize';
import { GraphQLInt, GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull } from 'graphql'; // ES6


export const MovieType = (User, shootType, rottentomatoesType, senscritiqueType) => {

  return new GraphQLObjectType({
    name: 'Movie',
    description: 'A movie',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The id of the movie'
      },
      title: {
        type: GraphQLString,
        description: 'name of the movie'
      },
      original_title: {
		  type:GraphQLString,
		  description: 'original name of the movie'
      },
      director: {
        type: GraphQLString,
        description: 'The director name of the movie'
      },
      poster: {
        type: GraphQLString,
        description: 'Poster of the movie'
      },
      trailer: {
        type: GraphQLString,
        description: 'http url of the trailer of the movie'
      },
      shoots: {
        type: new GraphQLList(shootType),
        resolve: resolver(User.Shoots)
      },
      senscritique: {
		  type: new GraphQLList(senscritiqueType),
        resolve: resolver(User.Senscritique)
      },
      rottentomatoes: {
        type: new GraphQLList(rottentomatoesType),
        resolve: resolver(User.Rottentomatoes)
      }
    }
  })
};
