import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  cursor: pointer;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--highlight);
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 1rem auto 1.5rem;
  font-family: 'Poppins', sans-serif;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 18px;
  font-weight: 300;
  margin-top: 8px;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`