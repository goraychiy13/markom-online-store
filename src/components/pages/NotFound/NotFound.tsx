import { memo } from 'react';
import { list, paragraph } from './constants';
import { NotFoundHeader, NotFoundParagraph, NotFoundWrapper } from './style';

const NotFound: React.FC = (props) => {
  return (
    <NotFoundWrapper data-name="not-found-wrapper">
      <NotFoundHeader data-name="not-fount-header">
        Здравствуйте!
      </NotFoundHeader>
      {paragraph.map((obj) => (
        <NotFoundParagraph key={obj.id} data-name="not-found-paragraph">
          {obj.text}
        </NotFoundParagraph>
      ))}
      <ul>
        {list.map((obj) => (
          <li key={obj.id}>{obj.text}</li>
        ))}
      </ul>
    </NotFoundWrapper>
  );
};

export default memo(NotFound);
