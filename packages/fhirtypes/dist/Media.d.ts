/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CarePlan } from './CarePlan';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { DeviceMetric } from './DeviceMetric';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { Specimen } from './Specimen';

/**
 * A photo, video, or audio recording acquired or used in healthcare. The
 * actual content may be inline or provided by direct reference.
 */
export interface Media {

  /**
   * This is a Media resource
   */
  readonly resourceType: 'Media';

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
   * Identifiers associated with the image - these may include identifiers
   * for the image itself, identifiers for the context of its collection
   * (e.g. series ids) and context ids such as accession numbers or other
   * workflow identifiers.
   */
  identifier?: Identifier[];

  /**
   * A procedure that is fulfilled in whole or in part by the creation of
   * this media.
   */
  basedOn?: Reference<ServiceRequest | CarePlan>[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  partOf?: Reference<Resource>[];

  /**
   * The current state of the {{title}}.
   */
  status: 'preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown';

  /**
   * The current state of the {{title}}.
   */
  _status?: PrimitiveExtension;

  /**
   * A code that classifies whether the media is an image, video or audio
   * recording or some other media category.
   */
  type?: CodeableConcept;

  /**
   * Details of the type of the media - usually, how it was acquired (what
   * type of device). If images sourced from a DICOM system, are wrapped in
   * a Media resource, then this is the modality.
   */
  modality?: CodeableConcept;

  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: CodeableConcept;

  /**
   * Who/What this Media is a record of.
   */
  subject?: Reference<Patient | Practitioner | PractitionerRole | Group | Device | Specimen | Location>;

  /**
   * The encounter that establishes the context for this media.
   */
  encounter?: Reference<Encounter>;

  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: string;

  /**
   * The date and time(s) at which the media was collected.
   */
  _createdDateTime?: PrimitiveExtension;

  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: Period;

  /**
   * The date and time this version of the media was made available to
   * providers, typically after having been reviewed.
   */
  issued?: string;

  /**
   * The date and time this version of the media was made available to
   * providers, typically after having been reviewed.
   */
  _issued?: PrimitiveExtension;

  /**
   * The person who administered the collection of the image.
   */
  operator?: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | Device | RelatedPerson>;

  /**
   * Describes why the event occurred in coded or textual form.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates the site on the subject's body where the observation was
   * made (i.e. the target site).
   */
  bodySite?: CodeableConcept;

  /**
   * The name of the device / manufacturer of the device  that was used to
   * make the recording.
   */
  deviceName?: string;

  /**
   * The name of the device / manufacturer of the device  that was used to
   * make the recording.
   */
  _deviceName?: PrimitiveExtension;

  /**
   * The device used to collect the media.
   */
  device?: Reference<Device | DeviceMetric | Device>;

  /**
   * Height of the image in pixels (photo/video).
   */
  height?: number;

  /**
   * Height of the image in pixels (photo/video).
   */
  _height?: PrimitiveExtension;

  /**
   * Width of the image in pixels (photo/video).
   */
  width?: number;

  /**
   * Width of the image in pixels (photo/video).
   */
  _width?: PrimitiveExtension;

  /**
   * The number of frames in a photo. This is used with a multi-page fax,
   * or an imaging acquisition context that takes multiple slices in a
   * single image, or an animated gif. If there is more than one frame,
   * this SHALL have a value in order to alert interface software that a
   * multi-frame capable rendering widget is required.
   */
  frames?: number;

  /**
   * The number of frames in a photo. This is used with a multi-page fax,
   * or an imaging acquisition context that takes multiple slices in a
   * single image, or an animated gif. If there is more than one frame,
   * this SHALL have a value in order to alert interface software that a
   * multi-frame capable rendering widget is required.
   */
  _frames?: PrimitiveExtension;

  /**
   * The duration of the recording in seconds - for audio and video.
   */
  duration?: number;

  /**
   * The duration of the recording in seconds - for audio and video.
   */
  _duration?: PrimitiveExtension;

  /**
   * The actual content of the media - inline or by direct reference to the
   * media source file.
   */
  content: Attachment;

  /**
   * Comments made about the media by the performer, subject or other
   * participants.
   */
  note?: Annotation[];
}

/**
 * The date and time(s) at which the media was collected.
 */
export type MediaCreated = Period | PrimitiveExtension | string;
