import { GraphQLSchema, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLObjectType, GraphQLNonNull } from 'graphql'; // ES6

export const ShootType = () => {
  return new GraphQLObjectType({
    name: 'Shoot',
    description: 'A shoot',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'The id of the movie'
      },
      address: {
        type: GraphQLString,
        description: 'The director name of the movie'
      },
      lat: {
        type: GraphQLFloat,
        description: 'Latitude of the address'
      },
      long: {
        type: GraphQLFloat,
        description: 'Longitude of the address'
      },
      moment: {
        type: GraphQLString,
        description: 'http url of the trailer of the movie'
      }
    }
  });
};
