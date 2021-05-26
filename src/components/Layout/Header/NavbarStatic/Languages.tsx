import { memo } from 'react';
import { Language, StyledLanguages } from './style';

function Languages(): JSX.Element {
  const languages = ['RU', 'EN', 'ES'];
  return (
    <StyledLanguages data-name="styled-languages">
      {languages.map((language) => (
        <Language data-name="language" key={language}>
          {language}
        </Language>
      ))}
    </StyledLanguages>
  );
}

export default memo(Languages);
