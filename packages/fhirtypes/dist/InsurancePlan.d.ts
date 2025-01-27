/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Endpoint } from './Endpoint';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Period } from './Period';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Details of a Health Insurance product/plan provided by an
 * organization.
 */
export interface InsurancePlan {

  /**
   * This is a InsurancePlan resource
   */
  readonly resourceType: 'InsurancePlan';

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
   * Business identifiers assigned to this health insurance product which
   * remain constant as the resource is updated and propagates from server
   * to server.
   */
  identifier?: Identifier[];

  /**
   * The current state of the health insurance product.
   */
  status?: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The current state of the health insurance product.
   */
  _status?: PrimitiveExtension;

  /**
   * The kind of health insurance product.
   */
  type?: CodeableConcept[];

  /**
   * Official name of the health insurance product as designated by the
   * owner.
   */
  name?: string;

  /**
   * Official name of the health insurance product as designated by the
   * owner.
   */
  _name?: PrimitiveExtension;

  /**
   * A list of alternate names that the product is known as, or was known
   * as in the past.
   */
  alias?: string[];

  /**
   * A list of alternate names that the product is known as, or was known
   * as in the past.
   */
  _alias?: (PrimitiveExtension | null)[];

  /**
   * The period of time that the health insurance product is available.
   */
  period?: Period;

  /**
   * The entity that is providing  the health insurance product and
   * underwriting the risk.  This is typically an insurance carriers, other
   * third-party payers, or health plan sponsors comonly referred to as
   * 'payers'.
   */
  ownedBy?: Reference<Organization>;

  /**
   * An organization which administer other services such as underwriting,
   * customer service and/or claims processing on behalf of the health
   * insurance product owner.
   */
  administeredBy?: Reference<Organization>;

  /**
   * The geographic region in which a health insurance product's benefits
   * apply.
   */
  coverageArea?: Reference<Location>[];

  /**
   * The contact for the health insurance product for a certain purpose.
   */
  contact?: InsurancePlanContact[];

  /**
   * The technical endpoints providing access to services operated for the
   * health insurance product.
   */
  endpoint?: Reference<Endpoint>[];

  /**
   * Reference to the network included in the health insurance product.
   */
  network?: Reference<Organization>[];

  /**
   * Details about the coverage offered by the insurance product.
   */
  coverage?: InsurancePlanCoverage[];

  /**
   * Details about an insurance plan.
   */
  plan?: InsurancePlanPlan[];
}

/**
 * The contact for the health insurance product for a certain purpose.
 */
export interface InsurancePlanContact {

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
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: CodeableConcept;

  /**
   * A name associated with the contact.
   */
  name?: HumanName;

  /**
   * A contact detail (e.g. a telephone number or an email address) by
   * which the party may be contacted.
   */
  telecom?: ContactPoint[];

  /**
   * Visiting or postal addresses for the contact.
   */
  address?: Address;
}

/**
 * Details about the coverage offered by the insurance product.
 */
export interface InsurancePlanCoverage {

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
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse;
   * Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: CodeableConcept;

  /**
   * Reference to the network that providing the type of coverage.
   */
  network?: Reference<Organization>[];

  /**
   * Specific benefits under this type of coverage.
   */
  benefit: InsurancePlanCoverageBenefit[];
}

/**
 * Specific benefits under this type of coverage.
 */
export interface InsurancePlanCoverageBenefit {

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
   * Type of benefit (primary care; speciality care; inpatient;
   * outpatient).
   */
  type: CodeableConcept;

  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: string;

  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  _requirement?: PrimitiveExtension;

  /**
   * The specific limits on the benefit.
   */
  limit?: InsurancePlanCoverageBenefitLimit[];
}

/**
 * The specific limits on the benefit.
 */
export interface InsurancePlanCoverageBenefitLimit {

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
   * The maximum amount of a service item a plan will pay for a covered
   * benefit.  For examples. wellness visits, or eyeglasses.
   */
  value?: Quantity;

  /**
   * The specific limit on the benefit.
   */
  code?: CodeableConcept;
}

/**
 * Details about an insurance plan.
 */
export interface InsurancePlanPlan {

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
   * Business identifiers assigned to this health insurance plan which
   * remain constant as the resource is updated and propagates from server
   * to server.
   */
  identifier?: Identifier[];

  /**
   * Type of plan. For example, &quot;Platinum&quot; or &quot;High Deductable&quot;.
   */
  type?: CodeableConcept;

  /**
   * The geographic region in which a health insurance plan's benefits
   * apply.
   */
  coverageArea?: Reference<Location>[];

  /**
   * Reference to the network that providing the type of coverage.
   */
  network?: Reference<Organization>[];

  /**
   * Overall costs associated with the plan.
   */
  generalCost?: InsurancePlanPlanGeneralCost[];

  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: InsurancePlanPlanSpecificCost[];
}

/**
 * Overall costs associated with the plan.
 */
export interface InsurancePlanPlanGeneralCost {

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
   * Type of cost.
   */
  type?: CodeableConcept;

  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: number;

  /**
   * Number of participants enrolled in the plan.
   */
  _groupSize?: PrimitiveExtension;

  /**
   * Value of the cost.
   */
  cost?: Money;

  /**
   * Additional information about the general costs associated with this
   * plan.
   */
  comment?: string;

  /**
   * Additional information about the general costs associated with this
   * plan.
   */
  _comment?: PrimitiveExtension;
}

/**
 * Costs associated with the coverage provided by the product.
 */
export interface InsurancePlanPlanSpecificCost {

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
   * General category of benefit (Medical; Dental; Vision; Drug; Mental
   * Health; Substance Abuse; Hospice, Home Health).
   */
  category: CodeableConcept;

  /**
   * List of the specific benefits under this category of benefit.
   */
  benefit?: InsurancePlanPlanSpecificCostBenefit[];
}

/**
 * List of the specific benefits under this category of benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefit {

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
   * Type of specific benefit (preventative; primary care office visit;
   * speciality office visit; hospitalization; emergency room; urgent
   * care).
   */
  type: CodeableConcept;

  /**
   * List of the costs associated with a specific benefit.
   */
  cost?: InsurancePlanPlanSpecificCostBenefitCost[];
}

/**
 * List of the costs associated with a specific benefit.
 */
export interface InsurancePlanPlanSpecificCostBenefitCost {

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
   * Type of cost (copay; individual cap; family cap; coinsurance;
   * deductible).
   */
  type: CodeableConcept;

  /**
   * Whether the cost applies to in-network or out-of-network providers
   * (in-network; out-of-network; other).
   */
  applicability?: CodeableConcept;

  /**
   * Additional information about the cost, such as information about
   * funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  qualifiers?: CodeableConcept[];

  /**
   * The actual cost value. (some of the costs may be represented as
   * percentages rather than currency, e.g. 10% coinsurance).
   */
  value?: Quantity;
}
