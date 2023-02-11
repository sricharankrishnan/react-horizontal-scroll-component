/* node module imports */
import React, {useState, useEffect} from "react";

/* hook */
export const useOnHorizontalScroll = (props) => {
  /* top vars */
  let [scrollParentHeight, setScrollParentHeight] = useState(null);
  let [translateXAmt, setTranslateXAmt] = useState(0);
  const {horizontalParentRef, elementsWrapperRef} = props;

  /* set the scroll-parent-height */
  useEffect(() => {
    function handleSetValues() {
      if (window.innerWidth >= 1200) {
        const elementWrapper = elementsWrapperRef.current;
        const horizontalLength = elementWrapper.scrollWidth;
        setScrollParentHeight(() => horizontalLength);
      }
    }

    handleSetValues();
    window.addEventListener("resize", handleSetValues);

    return () => {
      window.removeEventListener("resize", handleSetValues);
    };
  }, []);

  /* set the dynamic value of elements-wrapper on scroll */
  useEffect(() => {
    function handleOnScrollEffect() {
      if (window.innerWidth >= 1200) {
        const horizontalParent = horizontalParentRef.current;
        const horizontalLength = scrollParentHeight;
        const distanceFromTop = horizontalParent.offsetTop;
        const scrollDistance = distanceFromTop + horizontalLength - document.body.clientWidth;
        const amountScrolled = window.pageYOffset;
        if (amountScrolled >= distanceFromTop && amountScrolled <= scrollDistance) {
          setTranslateXAmt(() => {
            return (amountScrolled - distanceFromTop);
          });
        }
      }
    }
    window.addEventListener("scroll", handleOnScrollEffect);
    return () => {
      window.removeEventListener("scroll", handleOnScrollEffect);
    };
  }, [scrollParentHeight]);

  /* set the values */
  const scrollHeightStyles = {height: `${scrollParentHeight}px`};
  const translateXStyles = {transform: `translateX(-${translateXAmt}px)`};

  /* return to caller */
  return {scrollHeightStyles, translateXStyles};
};
