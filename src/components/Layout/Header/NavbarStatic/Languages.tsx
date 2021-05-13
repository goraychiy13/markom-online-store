import { memo } from 'react';
import { StyledLanguages, Language } from './style';
import { headerStaticElements } from './constants';

function Languages(): JSX.Element {
  const languages = ['RU', 'EN', 'ES'];
  return (
    <StyledLanguages data-name="styled-languages">
      {languages.map((language) => {
        return (
          <Language data-name="language" key={language}>
            {language}
          </Language>
        );
      })}
    </StyledLanguages>
  );
}

export default memo(Languages);
