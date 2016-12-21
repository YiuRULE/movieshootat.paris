import { GraphQLSchema, GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql';
import Sequelize from 'sequelize';

export const RottentomatoesType = () => {
  return new GraphQLObjectType({
    name: 'Rottentomatoes',
    description: 'A Rottentomatoes field',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The id of the movie'
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'The rottentomatoes url'
      },
      story: {
        type: GraphQLString,
        description: 'Short description of the movie'
      },
      reviews: {
        type: GraphQLString,
        description: 'http url of the trailer of the movie'
      },
      year: {
        type: GraphQLInt,
        description: 'year when the movie was distributed in USA'
      }
    }
  });
};
