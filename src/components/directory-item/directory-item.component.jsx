import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer
} from './directory-item.style';

const DirectoryItem = ({ category: { imageUrl, title, route } }) => {
  const navigate = useNavigate();

  const goToRoute = () => navigate(route);
  
  return (
    <DirectoryItemContainer onClick={ goToRoute }>
      <BackgroundImage imageUrl={ imageUrl }/>
      <Body>
        <h2> { title } </h2>
        <p> Shop Now </p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;