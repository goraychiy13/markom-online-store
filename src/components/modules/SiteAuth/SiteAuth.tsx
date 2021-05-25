import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../uikit/Button';
import Input from '../../uikit/Input';
import Select from '../../uikit/Select';
import { LANGUAGE, selectOptions } from './constants';
import {
  AuthButtons,
  authButtonStyles,
  AuthForm,
  AuthHeader,
  AuthLabel,
  AuthRow,
  AuthSelectWrapper,
  AuthWrapper,
  firstButtonStyles,
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
              hasContent={input.type === LANGUAGE}
              htmlFor={input.type}
              data-name="auth-label"
            >
              {input.name}
            </AuthLabel>
            {input.type === LANGUAGE ? (
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
              <Input id={input.type} />
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
            {index === 0 ? (
              <Button {...firstButtonStyles}>{button.name}</Button>
            ) : (
              <Button {...authButtonStyles}>{button.name}</Button>
            )}
          </Link>
        ))}
      </AuthButtons>
    </AuthWrapper>
  );
};

export default memo(SiteAuth);
