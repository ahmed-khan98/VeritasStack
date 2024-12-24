import { gql, DocumentNode } from '@apollo/client';

const GETDATA: DocumentNode = gql`
  query Projects {
    projects {
      title
      images
      id
      categories {
        name
      }
    }
  }
`;

export default GETDATA; 



export const GETBYID: DocumentNode = gql`
query Client($projectId: Int!) {
  projectById(projectId: $projectId) {
    client {
      country
      firstName
      lastName
    }
    description
    images
    title
    categories {
      name
    
    }
    ProjectDemoLink {
      link
    }
  }
}
`