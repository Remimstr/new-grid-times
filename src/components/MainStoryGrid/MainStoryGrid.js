import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper>
              <OpinionStory key={story.id} {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  --item-padding: 16px;
  --border: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndUp} {
    gap: 16px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-rows: 1fr 180px;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const StoryWrapper = styled.div`
  flex: 1;
  
  :not(:last-of-type) {
    padding-bottom: var(--item-padding);
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const OpinionStoryWrapper = styled(StoryWrapper)`
  :not(:last-of-type) {
    @media ${QUERIES.tabletOnly} {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--item-padding);
    border-right: var(--border);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  
  @media ${QUERIES.laptopAndUp} {
    padding-right: var(--item-padding);
    border-right: var(--border);
    padding-bottom: var(--item-padding);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--item-padding);

  margin-bottom: calc(-1 * var(--item-padding));
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-bottom: var(--item-padding);
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  
  @media ${QUERIES.tabletOnly} {
    padding: calc(2 * var(--item-padding)) 0;
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-top: var(--item-padding);
    border-top: var(--border);
  }
`;

export default MainStoryGrid;
