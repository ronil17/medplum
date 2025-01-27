/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { ContactPoint } from './ContactPoint';
import { Contributor } from './Contributor';
import { Count } from './Count';
import { DataRequirement } from './DataRequirement';
import { Distance } from './Distance';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Expression } from './Expression';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { ParameterDefinition } from './ParameterDefinition';
import { Period } from './Period';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Resource } from './Resource';
import { SampledData } from './SampledData';
import { Signature } from './Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * A Map of relationships between 2 structures that can be used to
 * transform data.
 */
export interface StructureMap {

  /**
   * This is a StructureMap resource
   */
  readonly resourceType: 'StructureMap';

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
   * An absolute URI that is used to identify this structure map when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this structure map is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the structure map is stored on different servers.
   */
  url: string;

  /**
   * An absolute URI that is used to identify this structure map when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this structure map is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the structure map is stored on different servers.
   */
  _url?: PrimitiveExtension;

  /**
   * A formal identifier that is used to identify this structure map when
   * it is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the structure
   * map when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the structure map
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  version?: string;

  /**
   * The identifier that is used to identify this version of the structure
   * map when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the structure map
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  _version?: PrimitiveExtension;

  /**
   * A natural language name identifying the structure map. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name: string;

  /**
   * A natural language name identifying the structure map. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  _name?: PrimitiveExtension;

  /**
   * A short, descriptive, user-friendly title for the structure map.
   */
  title?: string;

  /**
   * A short, descriptive, user-friendly title for the structure map.
   */
  _title?: PrimitiveExtension;

  /**
   * The status of this structure map. Enables tracking the life-cycle of
   * the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The status of this structure map. Enables tracking the life-cycle of
   * the content.
   */
  _status?: PrimitiveExtension;

  /**
   * A Boolean value to indicate that this structure map is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A Boolean value to indicate that this structure map is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  _experimental?: PrimitiveExtension;

  /**
   * The date  (and optionally time) when the structure map was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the structure map changes.
   */
  date?: string;

  /**
   * The date  (and optionally time) when the structure map was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the structure map changes.
   */
  _date?: PrimitiveExtension;

  /**
   * The name of the organization or individual that published the
   * structure map.
   */
  publisher?: string;

  /**
   * The name of the organization or individual that published the
   * structure map.
   */
  _publisher?: PrimitiveExtension;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the structure map from a
   * consumer's perspective.
   */
  description?: string;

  /**
   * A free text natural language description of the structure map from a
   * consumer's perspective.
   */
  _description?: PrimitiveExtension;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate structure map instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the structure map is intended to
   * be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this structure map is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * Explanation of why this structure map is needed and why it has been
   * designed as it has.
   */
  _purpose?: PrimitiveExtension;

  /**
   * A copyright statement relating to the structure map and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the structure map.
   */
  copyright?: string;

  /**
   * A copyright statement relating to the structure map and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the structure map.
   */
  _copyright?: PrimitiveExtension;

  /**
   * A structure definition used by this map. The structure definition may
   * describe instances that are converted, or the instances that are
   * produced.
   */
  structure?: StructureMapStructure[];

  /**
   * Other maps used by this map (canonical URLs).
   */
  import?: string[];

  /**
   * Other maps used by this map (canonical URLs).
   */
  _import?: (PrimitiveExtension | null)[];

  /**
   * Organizes the mapping into manageable chunks for human review/ease of
   * maintenance.
   */
  group: StructureMapGroup[];
}

/**
 * Organizes the mapping into manageable chunks for human review/ease of
 * maintenance.
 */
export interface StructureMapGroup {

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
   * A unique name for the group for the convenience of human readers.
   */
  name: string;

  /**
   * A unique name for the group for the convenience of human readers.
   */
  _name?: PrimitiveExtension;

  /**
   * Another group that this group adds rules to.
   */
  extends?: string;

  /**
   * Another group that this group adds rules to.
   */
  _extends?: PrimitiveExtension;

  /**
   * If this is the default rule set to apply for the source type or this
   * combination of types.
   */
  typeMode: 'none' | 'types' | 'type-and-types';

  /**
   * If this is the default rule set to apply for the source type or this
   * combination of types.
   */
  _typeMode?: PrimitiveExtension;

  /**
   * Additional supporting documentation that explains the purpose of the
   * group and the types of mappings within it.
   */
  documentation?: string;

  /**
   * Additional supporting documentation that explains the purpose of the
   * group and the types of mappings within it.
   */
  _documentation?: PrimitiveExtension;

  /**
   * A name assigned to an instance of data. The instance must be provided
   * when the mapping is invoked.
   */
  input: StructureMapGroupInput[];

  /**
   * Transform Rule from source to target.
   */
  rule: StructureMapGroupRule[];
}

/**
 * A name assigned to an instance of data. The instance must be provided
 * when the mapping is invoked.
 */
export interface StructureMapGroupInput {

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
   * Name for this instance of data.
   */
  name: string;

  /**
   * Name for this instance of data.
   */
  _name?: PrimitiveExtension;

  /**
   * Type for this instance of data.
   */
  type?: string;

  /**
   * Type for this instance of data.
   */
  _type?: PrimitiveExtension;

  /**
   * Mode for this instance of data.
   */
  mode: 'source' | 'target';

  /**
   * Mode for this instance of data.
   */
  _mode?: PrimitiveExtension;

  /**
   * Documentation for this instance of data.
   */
  documentation?: string;

  /**
   * Documentation for this instance of data.
   */
  _documentation?: PrimitiveExtension;
}

/**
 * Transform Rule from source to target.
 */
export interface StructureMapGroupRule {

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
   * Name of the rule for internal references.
   */
  name: string;

  /**
   * Name of the rule for internal references.
   */
  _name?: PrimitiveExtension;

  /**
   * Source inputs to the mapping.
   */
  source: StructureMapGroupRuleSource[];

  /**
   * Content to create because of this mapping rule.
   */
  target?: StructureMapGroupRuleTarget[];

  /**
   * Rules contained in this rule.
   */
  rule?: StructureMapGroupRule[];

  /**
   * Which other rules to apply in the context of this rule.
   */
  dependent?: StructureMapGroupRuleDependent[];

  /**
   * Documentation for this instance of data.
   */
  documentation?: string;

  /**
   * Documentation for this instance of data.
   */
  _documentation?: PrimitiveExtension;
}

/**
 * Which other rules to apply in the context of this rule.
 */
export interface StructureMapGroupRuleDependent {

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
   * Name of a rule or group to apply.
   */
  name: string;

  /**
   * Name of a rule or group to apply.
   */
  _name?: PrimitiveExtension;

  /**
   * Variable to pass to the rule or group.
   */
  variable: string[];

  /**
   * Variable to pass to the rule or group.
   */
  _variable?: (PrimitiveExtension | null)[];
}

/**
 * Source inputs to the mapping.
 */
export interface StructureMapGroupRuleSource {

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
   * Type or variable this rule applies to.
   */
  context: string;

  /**
   * Type or variable this rule applies to.
   */
  _context?: PrimitiveExtension;

  /**
   * Specified minimum cardinality for the element. This is optional; if
   * present, it acts an implicit check on the input content.
   */
  min?: number;

  /**
   * Specified minimum cardinality for the element. This is optional; if
   * present, it acts an implicit check on the input content.
   */
  _min?: PrimitiveExtension;

  /**
   * Specified maximum cardinality for the element - a number or a &quot;*&quot;.
   * This is optional; if present, it acts an implicit check on the input
   * content (* just serves as documentation; it's the default value).
   */
  max?: string;

  /**
   * Specified maximum cardinality for the element - a number or a &quot;*&quot;.
   * This is optional; if present, it acts an implicit check on the input
   * content (* just serves as documentation; it's the default value).
   */
  _max?: PrimitiveExtension;

  /**
   * Specified type for the element. This works as a condition on the
   * mapping - use for polymorphic elements.
   */
  type?: string;

  /**
   * Specified type for the element. This works as a condition on the
   * mapping - use for polymorphic elements.
   */
  _type?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBase64Binary?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueBase64Binary?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueBoolean?: boolean;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueBoolean?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCanonical?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueCanonical?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCode?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueCode?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDate?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueDate?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDateTime?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueDateTime?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDecimal?: number;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueDecimal?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueId?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueId?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInstant?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueInstant?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueInteger?: number;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueInteger?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMarkdown?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueMarkdown?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueOid?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueOid?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePositiveInt?: number;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValuePositiveInt?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueString?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueString?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTime?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueTime?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUnsignedInt?: number;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueUnsignedInt?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUri?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueUri?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUrl?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueUrl?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUuid?: string;

  /**
   * A value to use if there is no existing value in the source object.
   */
  _defaultValueUuid?: PrimitiveExtension;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAddress?: Address;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAge?: Age;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAnnotation?: Annotation;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueAttachment?: Attachment;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCodeableConcept?: CodeableConcept;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCoding?: Coding;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactPoint?: ContactPoint;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueCount?: Count;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDistance?: Distance;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDuration?: Duration;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueHumanName?: HumanName;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueIdentifier?: Identifier;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMoney?: Money;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValuePeriod?: Period;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueQuantity?: Quantity;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRange?: Range;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRatio?: Ratio;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueReference?: Reference;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSampledData?: SampledData;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueSignature?: Signature;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTiming?: Timing;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContactDetail?: ContactDetail;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueContributor?: Contributor;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDataRequirement?: DataRequirement;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueExpression?: Expression;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueParameterDefinition?: ParameterDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueRelatedArtifact?: RelatedArtifact;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueTriggerDefinition?: TriggerDefinition;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueUsageContext?: UsageContext;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueDosage?: Dosage;

  /**
   * A value to use if there is no existing value in the source object.
   */
  defaultValueMeta?: Meta;

  /**
   * Optional field for this source.
   */
  element?: string;

  /**
   * Optional field for this source.
   */
  _element?: PrimitiveExtension;

  /**
   * How to handle the list mode for this element.
   */
  listMode?: 'first' | 'not_first' | 'last' | 'not_last' | 'only_one';

  /**
   * How to handle the list mode for this element.
   */
  _listMode?: PrimitiveExtension;

  /**
   * Named context for field, if a field is specified.
   */
  variable?: string;

  /**
   * Named context for field, if a field is specified.
   */
  _variable?: PrimitiveExtension;

  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  condition?: string;

  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  _condition?: PrimitiveExtension;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an
   * error instead of completing.
   */
  check?: string;

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an
   * error instead of completing.
   */
  _check?: PrimitiveExtension;

  /**
   * A FHIRPath expression which specifies a message to put in the
   * transform log when content matching the source rule is found.
   */
  logMessage?: string;

  /**
   * A FHIRPath expression which specifies a message to put in the
   * transform log when content matching the source rule is found.
   */
  _logMessage?: PrimitiveExtension;
}

/**
 * A value to use if there is no existing value in the source object.
 */
export type StructureMapGroupRuleSourceDefaultValue = Address | Age | Annotation | Attachment | boolean |
    CodeableConcept | Coding | ContactDetail | ContactPoint | Contributor | Count | DataRequirement | Distance | Dosage |
    Duration | Expression | HumanName | Identifier | Meta | Money | number | ParameterDefinition | Period |
    PrimitiveExtension | Quantity | Range | Ratio | Reference | RelatedArtifact | SampledData | Signature | string | Timing
    | TriggerDefinition | UsageContext;

/**
 * Content to create because of this mapping rule.
 */
export interface StructureMapGroupRuleTarget {

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
   * Type or variable this rule applies to.
   */
  context?: string;

  /**
   * Type or variable this rule applies to.
   */
  _context?: PrimitiveExtension;

  /**
   * How to interpret the context.
   */
  contextType?: 'type' | 'variable';

  /**
   * How to interpret the context.
   */
  _contextType?: PrimitiveExtension;

  /**
   * Field to create in the context.
   */
  element?: string;

  /**
   * Field to create in the context.
   */
  _element?: PrimitiveExtension;

  /**
   * Named context for field, if desired, and a field is specified.
   */
  variable?: string;

  /**
   * Named context for field, if desired, and a field is specified.
   */
  _variable?: PrimitiveExtension;

  /**
   * If field is a list, how to manage the list.
   */
  listMode?: ('first' | 'share' | 'last' | 'collate')[];

  /**
   * If field is a list, how to manage the list.
   */
  _listMode?: (PrimitiveExtension | null)[];

  /**
   * Internal rule reference for shared list items.
   */
  listRuleId?: string;

  /**
   * Internal rule reference for shared list items.
   */
  _listRuleId?: PrimitiveExtension;

  /**
   * How the data is copied / created.
   */
  transform?: 'create' | 'copy' | 'truncate' | 'escape' | 'cast' | 'append' | 'translate' | 'reference' | 'dateOp' |
      'uuid' | 'pointer' | 'evaluate' | 'cc' | 'c' | 'qty' | 'id' | 'cp';

  /**
   * How the data is copied / created.
   */
  _transform?: PrimitiveExtension;

  /**
   * Parameters to the transform.
   */
  parameter?: StructureMapGroupRuleTargetParameter[];
}

/**
 * Parameters to the transform.
 */
export interface StructureMapGroupRuleTargetParameter {

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
   * Parameter value - variable or literal.
   */
  valueId?: string;

  /**
   * Parameter value - variable or literal.
   */
  _valueId?: PrimitiveExtension;

  /**
   * Parameter value - variable or literal.
   */
  valueString?: string;

  /**
   * Parameter value - variable or literal.
   */
  _valueString?: PrimitiveExtension;

  /**
   * Parameter value - variable or literal.
   */
  valueBoolean?: boolean;

  /**
   * Parameter value - variable or literal.
   */
  _valueBoolean?: PrimitiveExtension;

  /**
   * Parameter value - variable or literal.
   */
  valueInteger?: number;

  /**
   * Parameter value - variable or literal.
   */
  _valueInteger?: PrimitiveExtension;

  /**
   * Parameter value - variable or literal.
   */
  valueDecimal?: number;

  /**
   * Parameter value - variable or literal.
   */
  _valueDecimal?: PrimitiveExtension;
}

/**
 * Parameter value - variable or literal.
 */
export type StructureMapGroupRuleTargetParameterValue = boolean | number | PrimitiveExtension | string;

/**
 * A structure definition used by this map. The structure definition may
 * describe instances that are converted, or the instances that are
 * produced.
 */
export interface StructureMapStructure {

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
   * The canonical reference to the structure.
   */
  url: string;

  /**
   * The canonical reference to the structure.
   */
  _url?: PrimitiveExtension;

  /**
   * How the referenced structure is used in this mapping.
   */
  mode: 'source' | 'queried' | 'target' | 'produced';

  /**
   * How the referenced structure is used in this mapping.
   */
  _mode?: PrimitiveExtension;

  /**
   * The name used for this type in the map.
   */
  alias?: string;

  /**
   * The name used for this type in the map.
   */
  _alias?: PrimitiveExtension;

  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  documentation?: string;

  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  _documentation?: PrimitiveExtension;
}
