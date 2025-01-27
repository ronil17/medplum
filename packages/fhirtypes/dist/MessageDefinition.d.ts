/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Resource } from './Resource';
import { ResourceType } from './ResourceType';
import { UsageContext } from './UsageContext';

/**
 * Defines the characteristics of a message that can be shared between
 * systems, including the type of event that initiates the message, the
 * content to be transmitted and what response(s), if any, are permitted.
 */
export interface MessageDefinition {

  /**
   * This is a MessageDefinition resource
   */
  readonly resourceType: 'MessageDefinition';

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
   * The business identifier that is used to reference the
   * MessageDefinition and *is* expected to be consistent from server to
   * server.
   */
  url?: string;

  /**
   * The business identifier that is used to reference the
   * MessageDefinition and *is* expected to be consistent from server to
   * server.
   */
  _url?: PrimitiveExtension;

  /**
   * A formal identifier that is used to identify this message definition
   * when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the message
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the message definition
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  version?: string;

  /**
   * The identifier that is used to identify this version of the message
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the message definition
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  _version?: PrimitiveExtension;

  /**
   * A natural language name identifying the message definition. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A natural language name identifying the message definition. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  _name?: PrimitiveExtension;

  /**
   * A short, descriptive, user-friendly title for the message definition.
   */
  title?: string;

  /**
   * A short, descriptive, user-friendly title for the message definition.
   */
  _title?: PrimitiveExtension;

  /**
   * A MessageDefinition that is superseded by this definition.
   */
  replaces?: string[];

  /**
   * A MessageDefinition that is superseded by this definition.
   */
  _replaces?: (PrimitiveExtension | null)[];

  /**
   * The status of this message definition. Enables tracking the life-cycle
   * of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The status of this message definition. Enables tracking the life-cycle
   * of the content.
   */
  _status?: PrimitiveExtension;

  /**
   * A Boolean value to indicate that this message definition is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A Boolean value to indicate that this message definition is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  _experimental?: PrimitiveExtension;

  /**
   * The date  (and optionally time) when the message definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the message definition changes.
   */
  date: string;

  /**
   * The date  (and optionally time) when the message definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the message definition changes.
   */
  _date?: PrimitiveExtension;

  /**
   * The name of the organization or individual that published the message
   * definition.
   */
  publisher?: string;

  /**
   * The name of the organization or individual that published the message
   * definition.
   */
  _publisher?: PrimitiveExtension;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the message definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * A free text natural language description of the message definition
   * from a consumer's perspective.
   */
  _description?: PrimitiveExtension;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate message definition instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the message definition is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this message definition is needed and why it has
   * been designed as it has.
   */
  purpose?: string;

  /**
   * Explanation of why this message definition is needed and why it has
   * been designed as it has.
   */
  _purpose?: PrimitiveExtension;

  /**
   * A copyright statement relating to the message definition and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the message definition.
   */
  copyright?: string;

  /**
   * A copyright statement relating to the message definition and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the message definition.
   */
  _copyright?: PrimitiveExtension;

  /**
   * The MessageDefinition that is the basis for the contents of this
   * resource.
   */
  base?: string;

  /**
   * The MessageDefinition that is the basis for the contents of this
   * resource.
   */
  _base?: PrimitiveExtension;

  /**
   * Identifies a protocol or workflow that this MessageDefinition
   * represents a step in.
   */
  parent?: string[];

  /**
   * Identifies a protocol or workflow that this MessageDefinition
   * represents a step in.
   */
  _parent?: (PrimitiveExtension | null)[];

  /**
   * Event code or link to the EventDefinition.
   */
  eventCoding?: Coding;

  /**
   * Event code or link to the EventDefinition.
   */
  eventUri?: string;

  /**
   * Event code or link to the EventDefinition.
   */
  _eventUri?: PrimitiveExtension;

  /**
   * The impact of the content of the message.
   */
  category?: 'consequence' | 'currency' | 'notification';

  /**
   * The impact of the content of the message.
   */
  _category?: PrimitiveExtension;

  /**
   * Identifies the resource (or resources) that are being addressed by the
   * event.  For example, the Encounter for an admit message or two Account
   * records for a merge.
   */
  focus?: MessageDefinitionFocus[];

  /**
   * Declare at a message definition level whether a response is required
   * or only upon error or success, or never.
   */
  responseRequired?: 'always' | 'on-error' | 'never' | 'on-success';

  /**
   * Declare at a message definition level whether a response is required
   * or only upon error or success, or never.
   */
  _responseRequired?: PrimitiveExtension;

  /**
   * Indicates what types of messages may be sent as an application-level
   * response to this message.
   */
  allowedResponse?: MessageDefinitionAllowedResponse[];

  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is
   * the canonical reference to a [GraphDefinition](graphdefinition.html)
   * that it controls what resources are to be added to the bundle when
   * building the document. The GraphDefinition can also specify profiles
   * that apply to the various resources.
   */
  graph?: string[];

  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is
   * the canonical reference to a [GraphDefinition](graphdefinition.html)
   * that it controls what resources are to be added to the bundle when
   * building the document. The GraphDefinition can also specify profiles
   * that apply to the various resources.
   */
  _graph?: (PrimitiveExtension | null)[];
}

/**
 * Event code or link to the EventDefinition.
 */
export type MessageDefinitionEvent = Coding | PrimitiveExtension | string;

/**
 * Indicates what types of messages may be sent as an application-level
 * response to this message.
 */
export interface MessageDefinitionAllowedResponse {

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
   * A reference to the message definition that must be adhered to by this
   * supported response.
   */
  message: string;

  /**
   * A reference to the message definition that must be adhered to by this
   * supported response.
   */
  _message?: PrimitiveExtension;

  /**
   * Provides a description of the circumstances in which this response
   * should be used (as opposed to one of the alternative responses).
   */
  situation?: string;

  /**
   * Provides a description of the circumstances in which this response
   * should be used (as opposed to one of the alternative responses).
   */
  _situation?: PrimitiveExtension;
}

/**
 * Identifies the resource (or resources) that are being addressed by the
 * event.  For example, the Encounter for an admit message or two Account
 * records for a merge.
 */
export interface MessageDefinitionFocus {

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
   * The kind of resource that must be the focus for this message.
   */
  code: ResourceType;

  /**
   * The kind of resource that must be the focus for this message.
   */
  _code?: PrimitiveExtension;

  /**
   * A profile that reflects constraints for the focal resource (and
   * potentially for related resources).
   */
  profile?: string;

  /**
   * A profile that reflects constraints for the focal resource (and
   * potentially for related resources).
   */
  _profile?: PrimitiveExtension;

  /**
   * Identifies the minimum number of resources of this type that must be
   * pointed to by a message in order for it to be valid against this
   * MessageDefinition.
   */
  min: number;

  /**
   * Identifies the minimum number of resources of this type that must be
   * pointed to by a message in order for it to be valid against this
   * MessageDefinition.
   */
  _min?: PrimitiveExtension;

  /**
   * Identifies the maximum number of resources of this type that must be
   * pointed to by a message in order for it to be valid against this
   * MessageDefinition.
   */
  max?: string;

  /**
   * Identifies the maximum number of resources of this type that must be
   * pointed to by a message in order for it to be valid against this
   * MessageDefinition.
   */
  _max?: PrimitiveExtension;
}
