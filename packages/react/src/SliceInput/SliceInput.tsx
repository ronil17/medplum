import { Group, Stack } from '@mantine/core';
import {
  ElementsContextType,
  InternalSchemaElement,
  SliceDefinitionWithTypes,
  applyDefaultValuesToElement,
  buildElementsContext,
  getPropertyDisplayName,
  isEmpty,
  isPopulated,
} from '@medplum/core';
import { MouseEvent, useContext, useMemo, useState } from 'react';
import { ElementsContext } from '../ElementsInput/ElementsInput.utils';
import { FormSection } from '../FormSection/FormSection';
import classes from '../ResourceArrayInput/ResourceArrayInput.module.css';
import { ElementDefinitionTypeInput } from '../ResourcePropertyInput/ResourcePropertyInput';
import { BaseInputProps } from '../ResourcePropertyInput/ResourcePropertyInput.utils';
import { ArrayAddButton } from '../buttons/ArrayAddButton';
import { ArrayRemoveButton } from '../buttons/ArrayRemoveButton';
import { killEvent } from '../utils/dom';
import { maybeWrapWithContext } from '../utils/maybeWrapWithContext';
import { getPathDifference } from '@medplum/core';

export interface SliceInputProps extends BaseInputProps {
  readonly slice: SliceDefinitionWithTypes;
  readonly property: InternalSchemaElement;
  readonly defaultValue: any[];
  readonly onChange: (newValue: any[]) => void;
  readonly testId?: string;
}

export function SliceInput(props: SliceInputProps): JSX.Element | null {
  const { slice, property } = props;
  const [values, setValues] = useState<any[]>(props.defaultValue);

  const sliceElements = slice.typeSchema?.elements ?? slice.elements;

  const parentElementsContextValue = useContext(ElementsContext);
  // if (!(props.path in sliceElements)) {
  // console.log('sliceElements', sliceElements, parentElementsContextValue.elements);
  //   sliceElements[''] = slice;
  // }

  const contextValue: ElementsContextType | undefined = useMemo(() => {
    if (!isPopulated(sliceElements)) {
      console.assert(false, `${props.path}:${slice.name}: expected slice.elements to be populated`);
      return undefined;
    }

    const result = buildElementsContext({
      parentContext: parentElementsContextValue,
      elements: sliceElements,
      path: props.path,
      profileUrl: slice.typeSchema?.url,
    });

    console.assert(Boolean(result), `${props.path}:${slice.name}: Expected new elements context for slice`);
    return result;
  }, [parentElementsContextValue, property, props.path, slice.name, slice.typeSchema?.url, sliceElements]);

  function setValuesWrapper(newValues: any[]): void {
    setValues(newValues);
    if (props.onChange) {
      props.onChange(newValues);
    }
  }

  const required = slice.min > 0;

  // this is a bit of a hack targeted at nested extensions; indentation would ideally be controlled elsewhere
  // e.g. USCorePatientProfile -> USCoreEthnicityExtension -> {ombCategory, detailed, text}
  const indentedStack = isEmpty(slice.elements);
  const propertyDisplayName = getPropertyDisplayName(slice.name);
  return maybeWrapWithContext(
    ElementsContext.Provider,
    contextValue,
    <FormSection
      title={propertyDisplayName}
      description={slice.definition}
      withAsterisk={required}
      fhirPath={`${property.path}:${slice.name}`}
      testId={props.testId}
    >
      <Stack className={indentedStack ? classes.indented : undefined}>
        {values.map((value, valueIndex) => {
          return (
            <Group key={`${valueIndex}-${values.length}`} wrap="nowrap">
              <div style={{ flexGrow: 1 }} data-testid={props.testId && `${props.testId}-elements-${valueIndex}`}>
                <ElementDefinitionTypeInput
                  elementDefinitionType={slice.type[0]}
                  name={slice.name}
                  defaultValue={value}
                  onChange={(newValue) => {
                    const newValues = [...values];
                    newValues[valueIndex] = newValue;
                    setValuesWrapper(newValues);
                  }}
                  outcome={props.outcome}
                  min={slice.min}
                  max={slice.max}
                  binding={slice.binding}
                  path={props.path}
                  valuePath={undefined /* `valuePath` not supported in slices */}
                />
              </div>
              {values.length > slice.min && (
                <ArrayRemoveButton
                  propertyDisplayName={propertyDisplayName}
                  testId={props.testId && `${props.testId}-remove-${valueIndex}`}
                  onClick={(e: MouseEvent) => {
                    killEvent(e);
                    const newValues = [...values];
                    newValues.splice(valueIndex, 1);
                    setValuesWrapper(newValues);
                  }}
                />
              )}
            </Group>
          );
        })}
        {values.length < slice.max && (
          <Group wrap="nowrap" style={{ justifyContent: 'flex-start' }}>
            <ArrayAddButton
              propertyDisplayName={propertyDisplayName}
              onClick={(e: MouseEvent) => {
                killEvent(e);
                const newValue = applyDefaultValuesToElement(Object.create(null), contextValue.elements);
                console.log('huzzah?', newValue);
                const newValues = [...values, newValue];
                setValuesWrapper(newValues);
              }}
              testId={props.testId && `${props.testId}-add`}
            />
          </Group>
        )}
      </Stack>
    </FormSection>
  );
}
