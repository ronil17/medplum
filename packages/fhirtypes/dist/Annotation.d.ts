/*
 * This is a generated file
 * Do not edit manually.
 */

import { Extension } from './Extension';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';

/**
 * A  text note which also  contains information about who made the
 * statement and when.
 */
export interface Annotation {

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
   * The individual responsible for making the annotation.
   */
  authorReference?: Reference<Practitioner | Patient | RelatedPerson | Organization>;

  /**
   * The individual responsible for making the annotation.
   */
  authorString?: string;

  /**
   * The individual responsible for making the annotation.
   */
  _authorString?: PrimitiveExtension;

  /**
   * Indicates when this particular annotation was made.
   */
  time?: string;

  /**
   * Indicates when this particular annotation was made.
   */
  _time?: PrimitiveExtension;

  /**
   * The text of the annotation in markdown format.
   */
  text: string;

  /**
   * The text of the annotation in markdown format.
   */
  _text?: PrimitiveExtension;
}

/**
 * The individual responsible for making the annotation.
 */
export type AnnotationAuthor = PrimitiveExtension | Reference<Practitioner | Patient | RelatedPerson | Organization> | string;
