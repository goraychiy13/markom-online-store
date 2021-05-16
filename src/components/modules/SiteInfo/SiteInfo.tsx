import { memo } from 'react';
import htmlParser from 'react-html-parser';
import { colors } from '../../../common/colors';
import { linksInfo, TAG_LI, TAG_P, TAG_UL } from './constants';
import {
  InfoHeader,
  InfoLinks,
  InfoTextDiv,
  InfoTextUl,
  InfoTitle,
  InfoWrapper,
} from './style';
import { TypeInfo, TypePage } from './types';

type Props = {
  page: TypePage;
};

const SiteInfo: React.FC<Props> = (props) => {
  const getText = (tag: string, info: TypeInfo[]): JSX.Element => {
    switch (tag) {
      case TAG_UL:
        return (
          <ul>
            {info.map((info) => (
              <li key={info.id}>{htmlParser(info.text)}</li>
            ))}
          </ul>
        );
      case TAG_LI:
        return (
          <>
            {info.map((info) => (
              <li key={info.id}>{htmlParser(info.text)}</li>
            ))}
          </>
        );
      case TAG_P:
        return (
          <>
            {info.map((info) => (
              <p key={info.id}>{htmlParser(info.text)}</p>
            ))}
          </>
        );
      default:
        return (
          <>
            {info.map((info) => (
              <div key={info.id}>{htmlParser(info.text)}</div>
            ))}
          </>
        );
    }
  };

  return (
    <InfoWrapper data-name="terms-wrapper">
      <InfoHeader data-name="terms-header">{props.page.header}</InfoHeader>
      {props.page.section.map((section) =>
        section.title ? (
          <ul key={section.id}>
            <li>
              <InfoTitle data-name="terms-title">{section.title}</InfoTitle>
              {section.content.map((content) => (
                <InfoTextUl
                  key={content.id}
                  tag={content.tag}
                  data-name="info-text-ul"
                >
                  {getText(content.tag, content.info)}
                </InfoTextUl>
              ))}
            </li>
          </ul>
        ) : (
          <div key={section.id}>
            {section.content.map((content) => (
              <InfoTextDiv
                key={content.id}
                tag={content.tag}
                data-name="info-text-div"
              >
                {getText(content.tag, content.info)}
              </InfoTextDiv>
            ))}
          </div>
        ),
      )}
      {linksInfo.map((info) => (
        <InfoLinks
          key={info.id}
          id={info.id}
          pageHeader={props.page.header}
          data-name="info-links"
        >
          {info.text}
          <a
            href={info.url}
            rel="noreferrer"
            target="_blank"
            style={{ color: colors.darkGreen }}
          >
            {info.urlNote}
          </a>
          {info.id !== '1' && '.'}
        </InfoLinks>
      ))}
    </InfoWrapper>
  );
};

export default memo(SiteInfo);
