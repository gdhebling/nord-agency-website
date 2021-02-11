import { useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../lib/imageUrl';
import { graphql } from 'gatsby';

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectCard = styled.div`
  margin: 2rem;
  border: 1px solid transparent;
  flex: 0 0 600px;
`;

const ImageCard = styled.div``;

const ProjectTitle = styled.h2`
  font-family: 'Roboto', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;
const ProjectDescription = styled.p`
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
`;

function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allSanityProjects(filter: { featured: { eq: true } }) {
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
      <ProjectsGrid>
        {data.allSanityProjects.nodes.map((project) => (
          <ProjectCard key={project.id}>
            <ImageCard>
              <img
                src={urlFor(project.mainImage)
                  .size(600, 600)
                  .maxWidth(600)
                  .maxHeight(600)
                  .fit('clip')
                  .url()}
                alt={project.mainImage.alt}
              />
              {/* Change img to GatsbySanityImage plugin */}
            </ImageCard>
            <ProjectTitle> {project.title} </ProjectTitle>
            <ProjectDescription>{project.customers.name}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </div>
  );
}

export default Projects;
