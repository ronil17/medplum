/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * A list is a curated collection of resources.
 */
export interface List {

  /**
   * This is a List resource
   */
  readonly resourceType: 'List';

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
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifier for the List assigned for business purposes outside the
   * context of FHIR.
   */
  identifier?: Identifier[];

  /**
   * Indicates the current state of this list.
   */
  status: 'current' | 'retired' | 'entered-in-error';

  /**
   * Indicates the current state of this list.
   */
  _status?: PrimitiveExtension;

  /**
   * How this list was prepared - whether it is a working list that is
   * suitable for being maintained on an ongoing basis, or if it represents
   * a snapshot of a list of items from another source, or whether it is a
   * prepared list where items may be marked as added, modified or deleted.
   */
  mode: 'working' | 'snapshot' | 'changes';

  /**
   * How this list was prepared - whether it is a working list that is
   * suitable for being maintained on an ongoing basis, or if it represents
   * a snapshot of a list of items from another source, or whether it is a
   * prepared list where items may be marked as added, modified or deleted.
   */
  _mode?: PrimitiveExtension;

  /**
   * A label for the list assigned by the author.
   */
  title?: string;

  /**
   * A label for the list assigned by the author.
   */
  _title?: PrimitiveExtension;

  /**
   * This code defines the purpose of the list - why it was created.
   */
  code?: CodeableConcept;

  /**
   * The common subject (or patient) of the resources that are in the list
   * if there is one.
   */
  subject?: Reference<Patient | Group | Device | Location>;

  /**
   * The encounter that is the context in which this list was created.
   */
  encounter?: Reference<Encounter>;

  /**
   * The date that the list was prepared.
   */
  date?: string;

  /**
   * The date that the list was prepared.
   */
  _date?: PrimitiveExtension;

  /**
   * The entity responsible for deciding what the contents of the list
   * were. Where the list was created by a human, this is the same as the
   * author of the list.
   */
  source?: Reference<Practitioner | PractitionerRole | Patient | Device>;

  /**
   * What order applies to the items in the list.
   */
  orderedBy?: CodeableConcept;

  /**
   * Comments that apply to the overall list.
   */
  note?: Annotation[];

  /**
   * Entries in this list.
   */
  entry?: ListEntry[];

  /**
   * If the list is empty, why the list is empty.
   */
  emptyReason?: CodeableConcept;
}

/**
 * Entries in this list.
 */
export interface ListEntry {

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
   * The flag allows the system constructing the list to indicate the role
   * and significance of the item in the list.
   */
  flag?: CodeableConcept;

  /**
   * True if this item is marked as deleted in the list.
   */
  deleted?: boolean;

  /**
   * True if this item is marked as deleted in the list.
   */
  _deleted?: PrimitiveExtension;

  /**
   * When this item was added to the list.
   */
  date?: string;

  /**
   * When this item was added to the list.
   */
  _date?: PrimitiveExtension;

  /**
   * A reference to the actual resource from which data was derived.
   */
  item: Reference<Resource>;
}
