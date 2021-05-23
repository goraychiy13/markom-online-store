import { memo } from 'react';
import { TypeIcon } from '../../../icons/types';
import Icon from '../Icon';
import { StyledButton } from './style';

type Props = {
  onClick?: void | any;
  height?: string;
  width?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  color?: string;
  colorModifier?: string;
  boxShadowModifier?: string;
  backgroundColor?: string;
  backgroundColorModifier?: string;
  textDecoration?: string;
  fontWeight?: string;
  hasIcon?: boolean;
  children?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconMargin?: string;
  iconFill?: string;
  isRowReversed?: boolean;
  icon?: TypeIcon;
  type?: string;
  fontSize?: string;
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
      color={props.color}
      colorModifier={props.colorModifier}
      boxShadowModifier={props.boxShadowModifier}
      backgroundColor={props.backgroundColor}
      backgroundColorModifier={props.backgroundColorModifier}
      textDecoration={props.textDecoration}
      fontWeight={props.fontWeight}
      borderRadius={props.borderRadius}
      isRowReversed={props.isRowReversed}
      type={props.type}
      fontSize={props.fontSize}
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
