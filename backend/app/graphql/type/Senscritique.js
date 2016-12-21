import { GraphQLSchema, GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import Sequelize from 'sequelize';

export const SenscritiqueType = () => {
  return new GraphQLObjectType({
    name: 'Senscritique',
    description: 'A senscritique field',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The id of the movie'
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The senscritique url'
      },
      story: {
        type: GraphQLString,
        description: 'short description of the movie'
      },
      reviews: {
        type: GraphQLString,
        description: 'senscritique reviews'
      },
      year: {
        type: GraphQLInt,
        description: 'year when the movie was distributed in france'
      }
    }
  });
};
