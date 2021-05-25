import { memo } from 'react';
import { list, paragraph } from './constants';
import { NotFoundHeader, NotFoundParagraph, NotFoundWrapper } from './style';

const NotFound: React.FC = (props) => {
  return (
    <NotFoundWrapper data-name="not-found-wrapper">
      <NotFoundHeader data-name="not-fount-header">
        Здравствуйте!
      </NotFoundHeader>
      {paragraph.map((item) => (
        <NotFoundParagraph key={item.id} data-name="not-found-paragraph">
          {item.text}
        </NotFoundParagraph>
      ))}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </NotFoundWrapper>
  );
};

export default memo(NotFound);
