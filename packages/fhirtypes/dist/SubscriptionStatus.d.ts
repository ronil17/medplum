/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Subscription } from './Subscription';

/**
 * The SubscriptionStatus resource describes the state of a Subscription
 * during notifications.
 */
export interface SubscriptionStatus {

  /**
   * This is a SubscriptionStatus resource
   */
  readonly resourceType: 'SubscriptionStatus';

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
   * The status of the subscription, which marks the server state for
   * managing the subscription.
   */
  status?: 'requested' | 'active' | 'error' | 'off';

  /**
   * The status of the subscription, which marks the server state for
   * managing the subscription.
   */
  _status?: PrimitiveExtension;

  /**
   * The type of event being conveyed with this notificaiton.
   */
  type: string;

  /**
   * The type of event being conveyed with this notificaiton.
   */
  _type?: PrimitiveExtension;

  /**
   * The total number of actual events which have been generated since the
   * Subscription was created (inclusive of this notification) - regardless
   * of how many have been successfully communicated.  This number is NOT
   * incremented for handshake and heartbeat notifications.
   */
  eventsSinceSubscriptionStart?: string;

  /**
   * The total number of actual events which have been generated since the
   * Subscription was created (inclusive of this notification) - regardless
   * of how many have been successfully communicated.  This number is NOT
   * incremented for handshake and heartbeat notifications.
   */
  _eventsSinceSubscriptionStart?: PrimitiveExtension;

  /**
   * Detailed information about events relevant to this subscription
   * notification.
   */
  notificationEvent?: SubscriptionStatusNotificationEvent[];

  /**
   * The reference to the Subscription which generated this notification.
   */
  subscription: Reference<Subscription>;

  /**
   * The reference to the SubscriptionTopic for the Subscription which
   * generated this notification.
   */
  topic?: string;

  /**
   * The reference to the SubscriptionTopic for the Subscription which
   * generated this notification.
   */
  _topic?: PrimitiveExtension;

  /**
   * A record of errors that occurred when the server processed a
   * notification.
   */
  error?: CodeableConcept[];
}

/**
 * Detailed information about events relevant to this subscription
 * notification.
 */
export interface SubscriptionStatusNotificationEvent {

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
   * The sequential number of this event in this subscription context. Note
   * that this value is a 64-bit integer value, encoded as a string.
   */
  eventNumber: string;

  /**
   * The sequential number of this event in this subscription context. Note
   * that this value is a 64-bit integer value, encoded as a string.
   */
  _eventNumber?: PrimitiveExtension;

  /**
   * The actual time this event occured on the server.
   */
  timestamp?: string;

  /**
   * The actual time this event occured on the server.
   */
  _timestamp?: PrimitiveExtension;

  /**
   * The focus of this event. While this will usually be a reference to the
   * focus resource of the event, it MAY contain a reference to a non-FHIR
   * object.
   */
  focus?: Reference<Resource>;

  /**
   * Additional context information for this event. Generally, this will
   * contain references to additional resources included with the event
   * (e.g., the Patient relevant to an Encounter), however it MAY refer to
   * non-FHIR objects.
   */
  additionalContext?: Reference<Resource>[];
}
