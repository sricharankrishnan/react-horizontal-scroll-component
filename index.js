/* node module imports */
import React, {useRef} from "react";

/* app imports */
import {useOnHorizontalScroll} from "./hooks/use-on-horizontal-scroll.js";

/* component */
export const HorizontalScrollParent = (props) => {
  const horizontalParentRef = useRef();
  const elementsWrapperRef = useRef();
  const {scrollHeightStyles, translateXStyles} = useOnHorizontalScroll({horizontalParentRef, elementsWrapperRef});

  return (
    <div ref={horizontalParentRef} className="horizontalScrollParent" style={scrollHeightStyles}>
      <div className="stickyWrapper">
        <div ref={elementsWrapperRef} className="elementsWrapper" style={translateXStyles}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
