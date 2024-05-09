import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clvrqa35h0bes07usa0ijj4rr/master";

export const getCourseList = async (level) => {
  const query =
    gql`
    query CourseList {
      courses(where: { courseLevel: ` +
    level +
    ` }) {
        id
        name
        price
        author
        tags
        time
        banner {
          url
        }
        des{
          markdown
        }
        chapters {
          id
          title
          content {
            markdown
          }
          output {
            markdown
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
