import ProjectCard from 'components/organisms/ProjectCard/ProjectCard';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import Sort from 'components/molecules/Sort/Sort';
import Header from 'components/atoms/Header/Header';

const Wrapper = styled.div`
  min-width: 100%;
  width: fit-content;
  min-height: 100vh;
  padding-left: 130px;
  padding-right: 40px;
  padding-top: 60px;
  background-color: ${theme.grey500};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 50px;
`;

const ToolBar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin: 50px 0;
`;

const Projects = () => (
  <Wrapper>
    <ToolBar>
      <Header s>All visible Projects</Header>
      <Sort />
    </ToolBar>
    <CardGrid>
      <ProjectCard
        name="Sports Interactive"
        leftTime="2"
        progress="65"
        description="Web resources which contains all about transfers in the world of sports"
        link="www.sports-interactive.com"
        avatar="https://i.pinimg.com/736x/94/40/b7/9440b7c3ab43d66b06bed08af7b02434.jpg"
      />
      <ProjectCard
        name="Dolor LLP"
        leftTime="9"
        progress="88"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://ocs-pl.oktawave.com/v1/AUTH_4e9ef52d-3acd-4c38-88cc-b3f63fd7884b/GP-pracodawcy/cache/profile_logo/907/58e/2738bfca9dd9af7ef08b306136865460f3130e7980293b9b1b50010b06.png"
      />
      <ProjectCard
        name="Arcu Ac Institute"
        leftTime="5"
        progress="25"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://i.pinimg.com/736x/58/ba/ce/58bace42e0e777c45691cecfc1f4167e.jpg"
      />
      <ProjectCard
        name="Mauris LL"
        leftTime="6"
        progress="30"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://www.pngkey.com/png/detail/890-8903407_swan-logos-design-free-logo-swan-classic-logo.png"
      />
      <ProjectCard
        name="Aliquet Libero"
        leftTime="20"
        progress="10"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://www.pngitem.com/pimgs/m/19-196348_logo-logotipo-de-la-plantilla-grey-free-logo.png"
      />
      <ProjectCard
        name="Sed Malesuada"
        leftTime="10"
        progress="81"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7o5r-98iclIzs8lsnqQUNh37FNNIKzzfLvw&usqp=CAU"
      />
      <ProjectCard
        name="Nibh"
        leftTime="3"
        progress="96"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl-neaGtbkw8iNM1L09ukSfzZQeJgk-IYQw&usqp=CAU"
      />
      <ProjectCard
        name="Mauris Quis"
        leftTime="43"
        progress="23"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRue_GDJ2EHVkgkxxNZX0zdDccoEKBkUN5N_w&usqp=CAU"
      />
      <ProjectCard
        name="Orci Quis Lectus"
        leftTime="5"
        progress="54"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdaGouo-5AfLi0PS3m8VJXr_gOqIynfWChsA&usqp=CAU"
      />
      <ProjectCard
        name="Odio Tristique"
        leftTime="4"
        progress="32"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://i.pinimg.com/originals/3f/7c/9f/3f7c9fb0f7e229fc4f041fef2c605b44.jpg"
      />
      <ProjectCard
        name="Metus"
        leftTime="2"
        progress="13"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        link="www.sports-interactive.com"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSWlqBU7c3lzOo0YSJznKasEcDhZl6Tw8tQ&usqp=CAU"
      />
    </CardGrid>
  </Wrapper>
);

export default Projects;
