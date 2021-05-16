import { TypeIcon } from '../../../icons/types';
import { memo } from 'react';
import Icon from '../Icon';
import { StyledButton } from './style';

type Props = {
  onClick?: void;
  height?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  backgroundColor: string;
  borderRadius?: string;
  colorModifier?: string;
  textDecoration?: string;
  fontWeight?: string;
  color?: string;
  hasIcon?: boolean;
  children?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconMargin?: string;
  iconFill?: string;
  isRowReversed?: boolean;
  icon?: TypeIcon;
  type?: string;
};

function Button(props: Props): JSX.Element {
  return (
    <StyledButton
      data-name="styled-button"
      height={props.height}
      width={props.width}
      maxWidth={props.maxWidth}
      margin={props.margin}
      padding={props.padding}
      backgroundColor={props.backgroundColor}
      colorModifier={props.colorModifier}
      color={props.color}
      textDecoration={props.textDecoration}
      fontWeight={props.fontWeight}
      borderRadius={props.borderRadius}
      isRowReversed={props.isRowReversed}
      type={props.type}
    >
      {props.hasIcon && props.icon && (
        <Icon
          title="Button"
          path={props.icon.path}
          viewBox={props.icon.viewBox}
          width={props.iconWidth}
          height={props.iconHeight}
          margin={props.iconMargin}
          iconFill={props.iconFill}
        />
      )}
      <span>{props.children}</span>
    </StyledButton>
  );
}

export default memo(Button);
