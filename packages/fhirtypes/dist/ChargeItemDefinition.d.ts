/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Device } from './Device';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Medication } from './Medication';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Substance } from './Substance';
import { UsageContext } from './UsageContext';

/**
 * The ChargeItemDefinition resource provides the properties that apply
 * to the (billing) codes necessary to calculate costs and prices. The
 * properties may differ largely depending on type and realm, therefore
 * this resource gives only a rough structure and requires profiling for
 * each type of billing code system.
 */
export interface ChargeItemDefinition {

  /**
   * This is a ChargeItemDefinition resource
   */
  readonly resourceType: 'ChargeItemDefinition';

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
   * An absolute URI that is used to identify this charge item definition
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this charge item definition is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the charge item definition is stored on
   * different servers.
   */
  url: string;

  /**
   * An absolute URI that is used to identify this charge item definition
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this charge item definition is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the charge item definition is stored on
   * different servers.
   */
  _url?: PrimitiveExtension;

  /**
   * A formal identifier that is used to identify this charge item
   * definition when it is represented in other formats, or referenced in a
   * specification, model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the charge
   * item definition when it is referenced in a specification, model,
   * design or instance. This is an arbitrary value managed by the charge
   * item definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence. To provide a version consistent
   * with the Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active assets.
   */
  version?: string;

  /**
   * The identifier that is used to identify this version of the charge
   * item definition when it is referenced in a specification, model,
   * design or instance. This is an arbitrary value managed by the charge
   * item definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence. To provide a version consistent
   * with the Decision Support Service specification, use the format
   * Major.Minor.Revision (e.g. 1.0.0). For more information on versioning
   * knowledge assets, refer to the Decision Support Service specification.
   * Note that a version is required for non-experimental active assets.
   */
  _version?: PrimitiveExtension;

  /**
   * A short, descriptive, user-friendly title for the charge item
   * definition.
   */
  title?: string;

  /**
   * A short, descriptive, user-friendly title for the charge item
   * definition.
   */
  _title?: PrimitiveExtension;

  /**
   * The URL pointing to an externally-defined charge item definition that
   * is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: string[];

  /**
   * The URL pointing to an externally-defined charge item definition that
   * is adhered to in whole or in part by this definition.
   */
  _derivedFromUri?: (PrimitiveExtension | null)[];

  /**
   * A larger definition of which this particular definition is a component
   * or step.
   */
  partOf?: string[];

  /**
   * A larger definition of which this particular definition is a component
   * or step.
   */
  _partOf?: (PrimitiveExtension | null)[];

  /**
   * As new versions of a protocol or guideline are defined, allows
   * identification of what versions are replaced by a new instance.
   */
  replaces?: string[];

  /**
   * As new versions of a protocol or guideline are defined, allows
   * identification of what versions are replaced by a new instance.
   */
  _replaces?: (PrimitiveExtension | null)[];

  /**
   * The current state of the ChargeItemDefinition.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The current state of the ChargeItemDefinition.
   */
  _status?: PrimitiveExtension;

  /**
   * A Boolean value to indicate that this charge item definition is
   * authored for testing purposes (or education/evaluation/marketing) and
   * is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A Boolean value to indicate that this charge item definition is
   * authored for testing purposes (or education/evaluation/marketing) and
   * is not intended to be used for genuine usage.
   */
  _experimental?: PrimitiveExtension;

  /**
   * The date  (and optionally time) when the charge item definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the charge item definition
   * changes.
   */
  date?: string;

  /**
   * The date  (and optionally time) when the charge item definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the charge item definition
   * changes.
   */
  _date?: PrimitiveExtension;

  /**
   * The name of the organization or individual that published the charge
   * item definition.
   */
  publisher?: string;

  /**
   * The name of the organization or individual that published the charge
   * item definition.
   */
  _publisher?: PrimitiveExtension;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the charge item definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * A free text natural language description of the charge item definition
   * from a consumer's perspective.
   */
  _description?: PrimitiveExtension;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate charge item definition
   * instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the charge item definition is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * A copyright statement relating to the charge item definition and/or
   * its contents. Copyright statements are generally legal restrictions on
   * the use and publishing of the charge item definition.
   */
  copyright?: string;

  /**
   * A copyright statement relating to the charge item definition and/or
   * its contents. Copyright statements are generally legal restrictions on
   * the use and publishing of the charge item definition.
   */
  _copyright?: PrimitiveExtension;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  approvalDate?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  _approvalDate?: PrimitiveExtension;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  lastReviewDate?: string;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  _lastReviewDate?: PrimitiveExtension;

  /**
   * The period during which the charge item definition content was or is
   * planned to be in active use.
   */
  effectivePeriod?: Period;

  /**
   * The defined billing details in this resource pertain to the given
   * billing code.
   */
  code?: CodeableConcept;

  /**
   * The defined billing details in this resource pertain to the given
   * product instance(s).
   */
  instance?: Reference<Medication | Substance | Device>[];

  /**
   * Expressions that describe applicability criteria for the billing code.
   */
  applicability?: ChargeItemDefinitionApplicability[];

  /**
   * Group of properties which are applicable under the same conditions. If
   * no applicability rules are established for the group, then all
   * properties always apply.
   */
  propertyGroup?: ChargeItemDefinitionPropertyGroup[];
}

/**
 * Expressions that describe applicability criteria for the billing code.
 */
export interface ChargeItemDefinitionApplicability {

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
   * A brief, natural language description of the condition that
   * effectively communicates the intended semantics.
   */
  description?: string;

  /**
   * A brief, natural language description of the condition that
   * effectively communicates the intended semantics.
   */
  _description?: PrimitiveExtension;

  /**
   * The media type of the language for the expression, e.g. &quot;text/cql&quot; for
   * Clinical Query Language expressions or &quot;text/fhirpath&quot; for FHIRPath
   * expressions.
   */
  language?: string;

  /**
   * The media type of the language for the expression, e.g. &quot;text/cql&quot; for
   * Clinical Query Language expressions or &quot;text/fhirpath&quot; for FHIRPath
   * expressions.
   */
  _language?: PrimitiveExtension;

  /**
   * An expression that returns true or false, indicating whether the
   * condition is satisfied. When using FHIRPath expressions, the %context
   * environment variable must be replaced at runtime with the ChargeItem
   * resource to which this definition is applied.
   */
  expression?: string;

  /**
   * An expression that returns true or false, indicating whether the
   * condition is satisfied. When using FHIRPath expressions, the %context
   * environment variable must be replaced at runtime with the ChargeItem
   * resource to which this definition is applied.
   */
  _expression?: PrimitiveExtension;
}

/**
 * Group of properties which are applicable under the same conditions. If
 * no applicability rules are established for the group, then all
 * properties always apply.
 */
export interface ChargeItemDefinitionPropertyGroup {

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
   * Expressions that describe applicability criteria for the
   * priceComponent.
   */
  applicability?: ChargeItemDefinitionApplicability[];

  /**
   * The price for a ChargeItem may be calculated as a base price with
   * surcharges/deductions that apply in certain conditions. A
   * ChargeItemDefinition resource that defines the prices, factors and
   * conditions that apply to a billing code is currently under
   * development. The priceComponent element can be used to offer
   * transparency to the recipient of the Invoice of how the prices have
   * been calculated.
   */
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[];
}

/**
 * The price for a ChargeItem may be calculated as a base price with
 * surcharges/deductions that apply in certain conditions. A
 * ChargeItemDefinition resource that defines the prices, factors and
 * conditions that apply to a billing code is currently under
 * development. The priceComponent element can be used to offer
 * transparency to the recipient of the Invoice of how the prices have
 * been calculated.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponent {

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
   * This code identifies the type of the component.
   */
  type: 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';

  /**
   * This code identifies the type of the component.
   */
  _type?: PrimitiveExtension;

  /**
   * A code that identifies the component. Codes may be used to
   * differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: CodeableConcept;

  /**
   * The factor that has been applied on the base price for calculating
   * this component.
   */
  factor?: number;

  /**
   * The factor that has been applied on the base price for calculating
   * this component.
   */
  _factor?: PrimitiveExtension;

  /**
   * The amount calculated for this component.
   */
  amount?: Money;
}
