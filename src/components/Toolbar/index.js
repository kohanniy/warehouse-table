import { ToolbarStyled } from './styles';
import CRUDBtnGroup from './CRUDBtnGroup';
import Title from './Title';

const Toolbar = ({ addBtnClick, editBtnClick, deleteBtnClick }) => {
  return (
    <ToolbarStyled>
      <Title />
      <CRUDBtnGroup
        addBtnClick={addBtnClick}
        editBtnClick={editBtnClick}
        deleteBtnClick={deleteBtnClick}
      />
    </ToolbarStyled>
  );
};

export default Toolbar;
