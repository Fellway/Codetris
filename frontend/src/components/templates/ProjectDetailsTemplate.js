import Header from 'components/atoms/Header/Header';
import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar/Avatar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { theme } from 'theme/MainTheme';
import Link from 'components/atoms/Link/Link';
import TodayIcon from '@material-ui/icons/TodayOutlined';
import EventIcon from '@material-ui/icons/EventOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import Contributor from 'components/molecules/Contributor/Contributor';
import Label from 'components/atoms/Label/Label';
import TaskCard from 'components/molecules/TaskCard/TaskCard';
import DoneIcon from '@material-ui/icons/DoneOutlined';
import AutorenewIcon from '@material-ui/icons/AutorenewOutlined';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import Modal from '../molecules/Modal/Modal';
import AddButton from '../atoms/AddButton/AddButton';

const Wrapper = styled.div`
  color: ${theme.grey200};
  max-width: 100%;
  padding-right: 40px;
`;

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`;

const NameWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 20px;
  align-items: center;
  margin: 50px 0 20px 0;
`;

const DatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 50px;
`;

const DateTextIcon = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  grid-gap: 10px;
`;

const Overwiev = styled.div`
  display: grid;
  grid-gap: 20px;
  text-align: justify;
  margin: 50px 0;
`;

const Collaborators = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 10px;
`;

const Tasks = styled.div`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.7), 0 15px 12px rgba(0, 0, 0, 0.22);
  min-height: calc(100vh - 60px);
  padding: 30px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
`;

const TaskGrid = styled.div`
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 10px;
`;

class ProjectDetailsTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  render() {
    const { isModalOpen } = this.state;
    return (
      <Container>
        {isModalOpen && <Modal onClose={this.toggleModal} onSave={this.toggleModal} />}
        <AddButton onClick={this.toggleModal} />
        <Wrapper>
          <NameWrapper>
            <StyledAvatar url="https://i.pinimg.com/736x/94/40/b7/9440b7c3ab43d66b06bed08af7b02434.jpg" />
            <div>
              <Paragraph>In progress</Paragraph>
              <Header>Sports Interactive</Header>
              <Link href="www.sports-interactive.com">www.sports-interactive.com</Link>
            </div>
          </NameWrapper>
          <DatesWrapper>
            <DateTextIcon>
              <TodayIcon />
              <Paragraph>Start day: 11.11.2021</Paragraph>
            </DateTextIcon>
            <DateTextIcon>
              <EventIcon />
              <Paragraph>Deadline: 11.1.2022</Paragraph>
            </DateTextIcon>
            <DateTextIcon>
              <ScheduleIcon />
              <Paragraph>Days left: 365</Paragraph>
            </DateTextIcon>
          </DatesWrapper>
          <Overwiev>
            <Header s>Overview:</Header>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
            <Paragraph>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on purpose (injected humour
              and the like).
            </Paragraph>
            {/* <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which dont look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
          sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as necessary, making this the
          first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
          humour, or non-characteristic words etc.
        </Paragraph> */}
          </Overwiev>
          <Header s>Collaborators:</Header>
          <Collaborators>
            <Contributor url="https://t4.ftcdn.net/jpg/00/76/27/53/360_F_76275384_mRNrmAI89UPWoWeUJfCL9CptRxg3cEoF.jpg">
              Lorem ipsum{' '}
            </Contributor>
            <Contributor url="https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg">
              Lorem ipsum{' '}
            </Contributor>
            <Contributor url="https://media.gettyimages.com/photos/confident-young-man-wearing-purple-tshirt-picture-id1092658864?s=612x612">
              Lorem ipsum{' '}
            </Contributor>
            <Contributor url="https://media.istockphoto.com/photos/serene-beauty-picture-id1083617440?k=6&m=1083617440&s=612x612&w=0&h=wLq7N87zwUamnN1g1BebCxYdt3BVU8bhEyCSymDFyFI=">
              Lorem ipsum{' '}
            </Contributor>
            <Contributor url="https://media.gettyimages.com/photos/bearded-businessman-against-gray-background-picture-id1179627332?s=612x612">
              Lorem ipsum{' '}
            </Contributor>
            <Contributor url="https://thumbor.forbes.com/thumbor/2441x2240/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1176382466%2F0x0.jpg%3FcropX1%3D2439%26cropX2%3D4880%26cropY1%3D307%26cropY2%3D2547">
              Lorem ipsum{' '}
            </Contributor>
          </Collaborators>
        </Wrapper>
        <Tasks>
          <Label icon={<AssignmentIcon />}>To do</Label>
          <TaskGrid>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </TaskGrid>
          <Label icon={<AutorenewIcon />}>In progress</Label>
          <TaskGrid>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </TaskGrid>
          <Label icon={<DoneIcon />}>Completed</Label>
          <TaskGrid>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </TaskGrid>
        </Tasks>
      </Container>
    );
  }
}

export default ProjectDetailsTemplate;
