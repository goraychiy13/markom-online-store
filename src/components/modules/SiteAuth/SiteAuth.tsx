import { memo } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../../common/colors';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import Select from '../../uikit/Select';
import { AUTH_LANGUAGE, selectOptions } from './constants';
import {
  AuthButtons,
  AuthForm,
  AuthHeader,
  AuthLabel,
  AuthRow,
  AuthSelectWrapper,
  AuthWrapper,
} from './style';
import { TypeAuthPage } from './types';

type Props = {
  page: TypeAuthPage;
};

const SiteAuth: React.FC<Props> = (props) => {
  return (
    <AuthWrapper data-name="auth-wrapper">
      <AuthHeader data-name="auth-header">{props.page.pageTitle}</AuthHeader>
      <AuthForm data-name="auth-form">
        {props.page.inputNames.map((input) => (
          <AuthRow key={input.type} data-name="auth-row">
            <AuthLabel
              hasContent={input.type === AUTH_LANGUAGE}
              data-name="auth-label"
            >
              {input.name}
            </AuthLabel>
            {input.type === AUTH_LANGUAGE ? (
              <AuthSelectWrapper data-name="auth-select-wrapper">
                <Select>
                  {selectOptions.map((option) => (
                    <option key={option.type} value={option.type}>
                      {option.value}
                    </option>
                  ))}
                </Select>
              </AuthSelectWrapper>
            ) : (
              <Input />
            )}
          </AuthRow>
        ))}
      </AuthForm>
      <AuthButtons data-name="auth-buttons">
        {props.page.buttons.map((button, index) => (
          <Link
            key={button.type}
            to={button.path}
            style={{ textDecoration: 'none' }}
          >
            <Button
              margin={'auto 16px auto 0'}
              height={index === 0 ? '40px' : '100%'}
              padding={index === 0 ? '0 16px' : '4px 0'}
              backgroundColor={index === 0 ? colors.darkGreen : colors.white}
              colorModifier={index === 0 ? colors.minorGreen : 'none'}
              color={index === 0 ? colors.white : colors.darkGreen}
              textDecoration={index === 0 ? 'none' : 'underline'}
              fontWeight={'400'}
            >
              {button.name}
            </Button>
          </Link>
        ))}
      </AuthButtons>
    </AuthWrapper>
  );
};

export default memo(SiteAuth);
