import { menuIcon } from '../../../icons';
import { memo } from 'react';
import Icon from '../Icon';
import { StyledButton } from './style';

type Props = {
  width: string;
  height: string;
  backgroundColor: string;
  color?: string;
  hasIcon?: boolean;
  children?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconMargin?: string;
};

function Button(props: Props): JSX.Element {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      color={props.color}
      data-name="styled-button"
    >
      {props.hasIcon && (
        <Icon
          path={menuIcon.path}
          viewBox={menuIcon.viewBox}
          title="Button"
          width={props.iconWidth}
          height={props.iconHeight}
          margin={props.iconMargin}
        />
      )}
      <span>{props.children}</span>
    </StyledButton>
  );
}

export default memo(Button);
