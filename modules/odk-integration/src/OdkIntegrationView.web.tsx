import * as React from 'react';

import { OdkIntegrationViewProps } from './OdkIntegration.types';

export default function OdkIntegrationView(props: OdkIntegrationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
