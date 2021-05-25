/* eslint-disable react/no-danger */
import React, { memo, forwardRef } from 'react';

type Props = {
  /** OnClick method. */
  onClick?: () => void;
  /** Icon path. */
  path: string;
  /** Icon ref. */
  ref?: React.RefObject<SVGSVGElement>;
  /** Tab order between controls by pressing 'Tab'. */
  tabIndex?: number;
  /** Icon title. */
  title?: string;
  /** Attribute defines the position and dimension. */
  viewBox: string;
  /** Icon width. */
  width?: string;
  /** Icon height. */
  height?: string;
  /** Icon margin. */
  margin?: string;
  /** Icon fill. */
  iconFill?: string;
};

const Icon = forwardRef<SVGSVGElement, Props>(function Icon(props, ref) {
  return (
    <svg
      ref={ref}
      role="img"
      tabIndex={props.tabIndex}
      viewBox={props.viewBox}
      onClick={props.onClick}
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}
      fill={props.iconFill}
    >
      {props.title && <title>{props.title}</title>}
      <g dangerouslySetInnerHTML={{ __html: props.path }} />
    </svg>
  );
});

Icon.displayName = 'Icon';

export default memo(Icon);
