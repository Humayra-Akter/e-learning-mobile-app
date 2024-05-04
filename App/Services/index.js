import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clvrqa35h0bes07usa0ijj4rr/master";

export const getCourseList = async () => {
  const query = gql`
    query CoursList {
      courses(where: { courseLevel: Basic }) {
        id
        name
        price
        author
        tags
        time
        banner {
          url
        }
        chapters {
          id
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
