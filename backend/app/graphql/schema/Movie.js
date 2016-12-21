import {resolver} from 'graphql-sequelize';
import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql'; // ES6
import { GraphQLSchema } from 'graphql'; // ES6

export const MovieSchema = (Movie, MovieType) => {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'movieQueryType',
      fields: {
        movie: {
          type: new GraphQLList(MovieType),
          args: {
/*            id: {
              description: 'id of the user',
              type: new GraphQLNonNull(GraphQLInt)
            }*/
          },
        resolve: resolver(Movie)
      }
    }
  })
});
}
