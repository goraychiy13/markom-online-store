import { memo } from 'react';
import { menuIcon } from '../../../icons';
import Icon from '../Icon';
import { StyledButton } from './style';

type Props = {
  height: string;
  width?: string;
  margin?: string;
  backgroundColor: string;
  colorModifier?: string;
  textDecoration?: string;
  fontWeight?: string;
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
      height={props.height}
      width={props.width}
      margin={props.margin}
      backgroundColor={props.backgroundColor}
      colorModifier={props.colorModifier}
      color={props.color}
      textDecoration={props.textDecoration}
      fontWeight={props.fontWeight}
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
