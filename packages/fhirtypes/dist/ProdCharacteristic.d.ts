/*
 * This is a generated file
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Quantity } from './Quantity';

/**
 * The marketing status describes the date when a medicinal product is
 * actually put on the market or the date as of which it is no longer
 * available.
 */
export interface ProdCharacteristic {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Where applicable, the height can be specified using a numerical value
   * and its unit of measurement The unit of measurement shall be specified
   * in accordance with ISO 11240 and the resulting terminology The symbol
   * and the symbol identifier shall be used.
   */
  height?: Quantity;

  /**
   * Where applicable, the width can be specified using a numerical value
   * and its unit of measurement The unit of measurement shall be specified
   * in accordance with ISO 11240 and the resulting terminology The symbol
   * and the symbol identifier shall be used.
   */
  width?: Quantity;

  /**
   * Where applicable, the depth can be specified using a numerical value
   * and its unit of measurement The unit of measurement shall be specified
   * in accordance with ISO 11240 and the resulting terminology The symbol
   * and the symbol identifier shall be used.
   */
  depth?: Quantity;

  /**
   * Where applicable, the weight can be specified using a numerical value
   * and its unit of measurement The unit of measurement shall be specified
   * in accordance with ISO 11240 and the resulting terminology The symbol
   * and the symbol identifier shall be used.
   */
  weight?: Quantity;

  /**
   * Where applicable, the nominal volume can be specified using a
   * numerical value and its unit of measurement The unit of measurement
   * shall be specified in accordance with ISO 11240 and the resulting
   * terminology The symbol and the symbol identifier shall be used.
   */
  nominalVolume?: Quantity;

  /**
   * Where applicable, the external diameter can be specified using a
   * numerical value and its unit of measurement The unit of measurement
   * shall be specified in accordance with ISO 11240 and the resulting
   * terminology The symbol and the symbol identifier shall be used.
   */
  externalDiameter?: Quantity;

  /**
   * Where applicable, the shape can be specified An appropriate controlled
   * vocabulary shall be used The term and the term identifier shall be
   * used.
   */
  shape?: string;

  /**
   * Where applicable, the shape can be specified An appropriate controlled
   * vocabulary shall be used The term and the term identifier shall be
   * used.
   */
  _shape?: PrimitiveExtension;

  /**
   * Where applicable, the color can be specified An appropriate controlled
   * vocabulary shall be used The term and the term identifier shall be
   * used.
   */
  color?: string[];

  /**
   * Where applicable, the color can be specified An appropriate controlled
   * vocabulary shall be used The term and the term identifier shall be
   * used.
   */
  _color?: (PrimitiveExtension | null)[];

  /**
   * Where applicable, the imprint can be specified as text.
   */
  imprint?: string[];

  /**
   * Where applicable, the imprint can be specified as text.
   */
  _imprint?: (PrimitiveExtension | null)[];

  /**
   * Where applicable, the image can be provided The format of the image
   * attachment shall be specified by regional implementations.
   */
  image?: Attachment[];

  /**
   * Where applicable, the scoring can be specified An appropriate
   * controlled vocabulary shall be used The term and the term identifier
   * shall be used.
   */
  scoring?: CodeableConcept;
}
