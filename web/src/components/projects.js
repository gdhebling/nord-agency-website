import { useStaticQuery } from 'gatsby';
import React from 'react';
import { urlFor } from '../lib/imageUrl';

function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allSanityProjects {
        nodes {
          id
          title
          mainImage {
            crop {
              _key
              _type
              bottom
              left
              right
              top
            }
            hotspot {
              _key
              _type
              height
              width
              x
              y
            }
            asset {
              _id
            }
            alt
          }
          slug {
            current
          }
          _rawProjectDescription
          customers {
            name
          }
        }
      }
    }
  `);

  return (
    <div>
      <h2>Projects component</h2>
      {data.allSanityProjects.nodes.map((project) => (
        <div>
          <h4> {project.title} </h4>
          <p>{project.customers.name}</p>
          <img src={urlFor(project.mainImage)} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Projects;
