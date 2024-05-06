import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { OdkIntegrationViewProps } from './OdkIntegration.types';

const NativeView: React.ComponentType<OdkIntegrationViewProps> =
  requireNativeViewManager('OdkIntegration');

export default function OdkIntegrationView(props: OdkIntegrationViewProps) {
  return <NativeView {...props} />;
}
