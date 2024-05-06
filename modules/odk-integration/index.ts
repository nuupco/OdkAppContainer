import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to OdkIntegration.web.ts
// and on native platforms to OdkIntegration.ts
import OdkIntegrationModule from './src/OdkIntegrationModule';
import OdkIntegrationView from './src/OdkIntegrationView';
import { ChangeEventPayload, OdkIntegrationViewProps } from './src/OdkIntegration.types';

// Get the native constant value.
export const PI = OdkIntegrationModule.PI;

export function hello(): string {
  return OdkIntegrationModule.hello();
}

export async function setValueAsync(value: string) {
  return await OdkIntegrationModule.setValueAsync(value);
}

const emitter = new EventEmitter(OdkIntegrationModule ?? NativeModulesProxy.OdkIntegration);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { OdkIntegrationView, OdkIntegrationViewProps, ChangeEventPayload };
