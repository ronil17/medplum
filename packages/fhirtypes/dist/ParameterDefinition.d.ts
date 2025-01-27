/*
 * This is a generated file
 * Do not edit manually.
 */

import { Extension } from './Extension';
import { PrimitiveExtension } from './PrimitiveExtension';

/**
 * The parameters to the module. This collection specifies both the input
 * and output parameters. Input parameters are provided by the caller as
 * part of the $evaluate operation. Output parameters are included in the
 * GuidanceResponse.
 */
export interface ParameterDefinition {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  _id?: PrimitiveExtension;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * The name of the parameter used to allow access to the value of the
   * parameter in evaluation contexts.
   */
  name?: string;

  /**
   * The name of the parameter used to allow access to the value of the
   * parameter in evaluation contexts.
   */
  _name?: PrimitiveExtension;

  /**
   * Whether the parameter is input or output for the module.
   */
  use: 'in' | 'out';

  /**
   * Whether the parameter is input or output for the module.
   */
  _use?: PrimitiveExtension;

  /**
   * The minimum number of times this parameter SHALL appear in the request
   * or response.
   */
  min?: number;

  /**
   * The minimum number of times this parameter SHALL appear in the request
   * or response.
   */
  _min?: PrimitiveExtension;

  /**
   * The maximum number of times this element is permitted to appear in the
   * request or response.
   */
  max?: string;

  /**
   * The maximum number of times this element is permitted to appear in the
   * request or response.
   */
  _max?: PrimitiveExtension;

  /**
   * A brief discussion of what the parameter is for and how it is used by
   * the module.
   */
  documentation?: string;

  /**
   * A brief discussion of what the parameter is for and how it is used by
   * the module.
   */
  _documentation?: PrimitiveExtension;

  /**
   * The type of the parameter.
   */
  type: string;

  /**
   * The type of the parameter.
   */
  _type?: PrimitiveExtension;

  /**
   * If specified, this indicates a profile that the input data must
   * conform to, or that the output data will conform to.
   */
  profile?: string;

  /**
   * If specified, this indicates a profile that the input data must
   * conform to, or that the output data will conform to.
   */
  _profile?: PrimitiveExtension;
}
