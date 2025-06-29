import type { TextProps, TextPropsAndroid, ViewProps, ViewPropsAndroid, ImageProps, ImagePropsAndroid } from 'react-native';

import type { IFilterMask } from './filter.types';

// export core interface types
export type ITextProps = Omit<TextProps, keyof TextPropsAndroid>;
export type IViewProps = Omit<ViewProps, keyof ViewPropsAndroid>;
export type IImageProps = Omit<ImageProps, keyof ImagePropsAndroid>;

const _viewMask: IFilterMask<IViewProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLanguage: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessibilityViewIsModal: true,
  accessible: true,
  hasTVPreferredFocus: true,
  hitSlop: true,
  id: true,
  importantForAccessibility: true,
  isTVSelectable: true,
  nativeID: true,
  needsOffscreenAlphaCompositing: true,
  onAccessibilityAction: true,
  onAccessibilityEscape: true,
  onAccessibilityTap: true,
  onLayout: true,
  onMagicTap: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onPointerCancel: true,
  onPointerCancelCapture: true,
  onPointerDown: true,
  onPointerDownCapture: true,
  onPointerEnter: true,
  onPointerEnterCapture: true,
  onPointerLeave: true,
  onPointerLeaveCapture: true,
  onPointerMove: true,
  onPointerMoveCapture: true,
  onPointerUp: true,
  onPointerUpCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchStart: true,
  pointerEvents: true,
  removeClippedSubviews: true,
  role: true,
  shouldRasterizeIOS: true,
  style: true,
  testID: true,
  tvParallaxMagnification: true,
  tvParallaxProperties: true,
  tvParallaxShiftDistanceX: true,
  tvParallaxShiftDistanceY: true,
  tvParallaxTiltAngle: true,
  'aria-busy': true,
  'aria-checked': true,
  'aria-disabled': true,
  'aria-expanded': true,
  'aria-hidden': true,
  'aria-label': true,
  'aria-labelledby': true,
  'aria-live': true,
  'aria-modal': true,
  'aria-selected': true,
  'aria-valuemax': true,
  'aria-valuemin': true,
  'aria-valuenow': true,
  'aria-valuetext': true,
};

const _textMask: IFilterMask<ITextProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLanguage: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessibilityViewIsModal: true,
  accessible: true,
  adjustsFontSizeToFit: true,
  allowFontScaling: true,
  dynamicTypeRamp: true,
  ellipsizeMode: true,
  id: true,
  importantForAccessibility: true,
  lineBreakMode: true,
  lineBreakStrategyIOS: true,
  maxFontSizeMultiplier: true,
  minimumFontScale: true,
  nativeID: true,
  numberOfLines: true,
  onAccessibilityAction: true,
  onAccessibilityEscape: true,
  onAccessibilityTap: true,
  onLayout: true,
  onLongPress: true,
  onMagicTap: true,
  onPress: true,
  onPressIn: true,
  onPressOut: true,
  onTextLayout: true,
  role: true,
  style: true,
  suppressHighlighting: true,
  testID: true,
  'aria-busy': true,
  'aria-checked': true,
  'aria-disabled': true,
  'aria-expanded': true,
  'aria-hidden': true,
  'aria-label': true,
  'aria-labelledby': true,
  'aria-live': true,
  'aria-modal': true,
  'aria-selected': true,
  'aria-valuemax': true,
  'aria-valuemin': true,
  'aria-valuenow': true,
  'aria-valuetext': true,
};

const _imageMask: IFilterMask<IImageProps> = {
  children: true,
  accessibilityActions: true,
  accessibilityElementsHidden: true,
  accessibilityHint: true,
  accessibilityIgnoresInvertColors: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLanguage: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessibilityViewIsModal: true,
  accessible: true,
  alt: true,
  blurRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  capInsets: true,
  crossOrigin: true,
  defaultSource: true,
  height: true,
  id: true,
  importantForAccessibility: true,
  loadingIndicatorSource: true,
  nativeID: true,
  onAccessibilityAction: true,
  onAccessibilityEscape: true,
  onAccessibilityTap: true,
  onError: true,
  onLayout: true,
  onLoad: true,
  onLoadEnd: true,
  onLoadStart: true,
  onMagicTap: true,
  onPartialLoad: true,
  onProgress: true,
  progressiveRenderingEnabled: true,
  referrerPolicy: true,
  resizeMode: true,
  role: true,
  source: true,
  src: true,
  srcSet: true,
  style: true,
  testID: true,
  tintColor: true,
  width: true,
  'aria-busy': true,
  'aria-checked': true,
  'aria-disabled': true,
  'aria-expanded': true,
  'aria-hidden': true,
  'aria-label': true,
  'aria-labelledby': true,
  'aria-live': true,
  'aria-modal': true,
  'aria-selected': true,
  'aria-valuemax': true,
  'aria-valuemin': true,
  'aria-valuenow': true,
  'aria-valuetext': true,
};

export function filterViewProps(propName: string): boolean {
  return _viewMask[propName];
}

export function filterTextProps(propName: string): boolean {
  return _textMask[propName];
}

export function filterImageProps(propName: string): boolean {
  return _imageMask[propName];
}
