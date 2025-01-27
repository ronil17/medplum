/*
 * This is a generated file
 * Do not edit manually.
 */

import { Meta } from './Meta';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * A resource that represents the data of a single raw artifact as
 * digital content accessible in its native format.  A Binary resource
 * can contain any content, whether text, image, pdf, zip archive, etc.
 */
export interface Binary {

  /**
   * This is a Binary resource
   */
  readonly resourceType: 'Binary';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  _id?: PrimitiveExtension;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  _implicitRules?: PrimitiveExtension;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * The base language in which the resource is written.
   */
  _language?: PrimitiveExtension;

  /**
   * MimeType of the binary content represented as a standard MimeType (BCP
   * 13).
   */
  contentType: string;

  /**
   * MimeType of the binary content represented as a standard MimeType (BCP
   * 13).
   */
  _contentType?: PrimitiveExtension;

  /**
   * This element identifies another resource that can be used as a proxy
   * of the security sensitivity to use when deciding and enforcing access
   * control rules for the Binary resource. Given that the Binary resource
   * contains very few elements that can be used to determine the
   * sensitivity of the data and relationships to individuals, the
   * referenced resource stands in as a proxy equivalent for this purpose.
   * This referenced resource may be related to the Binary (e.g. Media,
   * DocumentReference), or may be some non-related Resource purely as a
   * security proxy. E.g. to identify that the binary resource relates to a
   * patient, and access should only be granted to applications that have
   * access to the patient.
   */
  securityContext?: Reference<Resource>;

  /**
   * The actual content, base64 encoded.
   */
  data?: string;

  /**
   * The actual content, base64 encoded.
   */
  _data?: PrimitiveExtension;

  /**
   * A location where the data can be accessed.
   */
  url?: string;

  /**
   * A location where the data can be accessed.
   */
  _url?: PrimitiveExtension;
}
