import { memo } from 'react';
import Icon from '../Icon';
import { StyledButton } from './style';
import { SyleProps } from './type';

type Props = {
  onClick?: void;
};

function Button(props: Props & SyleProps): JSX.Element {
  const buttonStyleProps = {
    height: props.height,
    width: props.width,
    maxWidth: props.maxWidth,
    margin: props.margin,
    padding: props.padding,
    backgroundColor: props.backgroundColor,
    colorModifier: props.colorModifier,
    color: props.color,
    textDecoration: props.textDecoration,
    fontWeight: props.fontWeight,
    borderRadius: props.borderRadius,
    isRowReversed: props.isRowReversed,
    type: props.type,
  };

  const iconStyleProps = {
    width: props.iconWidth,
    height: props.iconHeight,
    margin: props.iconMargin,
    iconFill: props.iconFill,
  };

  return (
    <StyledButton data-name="styled-button" {...buttonStyleProps}>
      {props.hasIcon && props.icon && (
        <Icon
          title="Button"
          path={props.icon.path}
          viewBox={props.icon.viewBox}
          {...iconStyleProps}
        />
      )}
      <span>{props.children}</span>
    </StyledButton>
  );
}

export default memo(Button);
