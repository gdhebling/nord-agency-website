import { useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { urlFor } from '../lib/imageUrl';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

const ProjectsGrid = styled.div`
  ${tw`container mx-auto flex items-center justify-center flex-wrap`}
`;

const ProjectCard = styled.div`
  ${tw`m-8 border-2 border-solid border-transparent flex flex-col flex-wrap text-center sm:text-left`}
`;

const ImageCard = styled.div`
  ${tw`overflow-hidden`}

  img {
    ${tw`object-cover object-center h-full w-full`}
  }
`;

const ProjectTitle = styled.h2`
  ${tw`text-3xl sm:text-4xl font-medium text-blueGray-900 mt-3`}
`;
const ProjectDescription = styled.p`
  ${tw`font-normal mt-3`}
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
