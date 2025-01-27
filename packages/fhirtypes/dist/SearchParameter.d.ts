/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Resource } from './Resource';
import { ResourceType } from './ResourceType';
import { UsageContext } from './UsageContext';

/**
 * A search parameter that defines a named search item that can be used
 * to search/filter on a resource.
 */
export interface SearchParameter {

  /**
   * This is a SearchParameter resource
   */
  readonly resourceType: 'SearchParameter';

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
   * An absolute URI that is used to identify this search parameter when it
   * is referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this search parameter is (or will be) published. This URL
   * can be the target of a canonical reference. It SHALL remain the same
   * when the search parameter is stored on different servers.
   */
  url: string;

  /**
   * An absolute URI that is used to identify this search parameter when it
   * is referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this search parameter is (or will be) published. This URL
   * can be the target of a canonical reference. It SHALL remain the same
   * when the search parameter is stored on different servers.
   */
  _url?: PrimitiveExtension;

  /**
   * The identifier that is used to identify this version of the search
   * parameter when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the search parameter
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  version?: string;

  /**
   * The identifier that is used to identify this version of the search
   * parameter when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the search parameter
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  _version?: PrimitiveExtension;

  /**
   * A natural language name identifying the search parameter. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name: string;

  /**
   * A natural language name identifying the search parameter. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  _name?: PrimitiveExtension;

  /**
   * Where this search parameter is originally defined. If a derivedFrom is
   * provided, then the details in the search parameter must be consistent
   * with the definition from which it is defined. i.e. the parameter
   * should have the same meaning, and (usually) the functionality should
   * be a proper subset of the underlying search parameter.
   */
  derivedFrom?: string;

  /**
   * Where this search parameter is originally defined. If a derivedFrom is
   * provided, then the details in the search parameter must be consistent
   * with the definition from which it is defined. i.e. the parameter
   * should have the same meaning, and (usually) the functionality should
   * be a proper subset of the underlying search parameter.
   */
  _derivedFrom?: PrimitiveExtension;

  /**
   * The status of this search parameter. Enables tracking the life-cycle
   * of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The status of this search parameter. Enables tracking the life-cycle
   * of the content.
   */
  _status?: PrimitiveExtension;

  /**
   * A Boolean value to indicate that this search parameter is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A Boolean value to indicate that this search parameter is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  _experimental?: PrimitiveExtension;

  /**
   * The date  (and optionally time) when the search parameter was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the search parameter changes.
   */
  date?: string;

  /**
   * The date  (and optionally time) when the search parameter was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the search parameter changes.
   */
  _date?: PrimitiveExtension;

  /**
   * The name of the organization or individual that published the search
   * parameter.
   */
  publisher?: string;

  /**
   * The name of the organization or individual that published the search
   * parameter.
   */
  _publisher?: PrimitiveExtension;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * And how it used.
   */
  description: string;

  /**
   * And how it used.
   */
  _description?: PrimitiveExtension;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate search parameter instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the search parameter is intended
   * to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this search parameter is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * Explanation of why this search parameter is needed and why it has been
   * designed as it has.
   */
  _purpose?: PrimitiveExtension;

  /**
   * The code used in the URL or the parameter name in a parameters
   * resource for this search parameter.
   */
  code: string;

  /**
   * The code used in the URL or the parameter name in a parameters
   * resource for this search parameter.
   */
  _code?: PrimitiveExtension;

  /**
   * The base resource type(s) that this search parameter can be used
   * against.
   */
  base: ResourceType[];

  /**
   * The base resource type(s) that this search parameter can be used
   * against.
   */
  _base?: (PrimitiveExtension | null)[];

  /**
   * The type of value that a search parameter may contain, and how the
   * content is interpreted.
   */
  type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';

  /**
   * The type of value that a search parameter may contain, and how the
   * content is interpreted.
   */
  _type?: PrimitiveExtension;

  /**
   * A FHIRPath expression that returns a set of elements for the search
   * parameter.
   */
  expression?: string;

  /**
   * A FHIRPath expression that returns a set of elements for the search
   * parameter.
   */
  _expression?: PrimitiveExtension;

  /**
   * An XPath expression that returns a set of elements for the search
   * parameter.
   */
  xpath?: string;

  /**
   * An XPath expression that returns a set of elements for the search
   * parameter.
   */
  _xpath?: PrimitiveExtension;

  /**
   * How the search parameter relates to the set of elements returned by
   * evaluating the xpath query.
   */
  xpathUsage?: 'normal' | 'phonetic' | 'nearby' | 'distance' | 'other';

  /**
   * How the search parameter relates to the set of elements returned by
   * evaluating the xpath query.
   */
  _xpathUsage?: PrimitiveExtension;

  /**
   * Types of resource (if a resource is referenced).
   */
  target?: ResourceType[];

  /**
   * Types of resource (if a resource is referenced).
   */
  _target?: (PrimitiveExtension | null)[];

  /**
   * Whether multiple values are allowed for each time the parameter
   * exists. Values are separated by commas, and the parameter matches if
   * any of the values match.
   */
  multipleOr?: boolean;

  /**
   * Whether multiple values are allowed for each time the parameter
   * exists. Values are separated by commas, and the parameter matches if
   * any of the values match.
   */
  _multipleOr?: PrimitiveExtension;

  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter
   * with the same name. The search matches if all the parameters match.
   */
  multipleAnd?: boolean;

  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter
   * with the same name. The search matches if all the parameters match.
   */
  _multipleAnd?: PrimitiveExtension;

  /**
   * Comparators supported for the search parameter.
   */
  comparator?: ('eq' | 'ne' | 'gt' | 'lt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap')[];

  /**
   * Comparators supported for the search parameter.
   */
  _comparator?: (PrimitiveExtension | null)[];

  /**
   * A modifier supported for the search parameter.
   */
  modifier?: ('missing' | 'exact' | 'contains' | 'not' | 'text' | 'in' | 'not-in' | 'below' | 'above' | 'type' | 'identifier' | 'ofType')[];

  /**
   * A modifier supported for the search parameter.
   */
  _modifier?: (PrimitiveExtension | null)[];

  /**
   * Contains the names of any search parameters which may be chained to
   * the containing search parameter. Chained parameters may be added to
   * search parameters of type reference and specify that resources will
   * only be returned if they contain a reference to a resource which
   * matches the chained parameter value. Values for this field should be
   * drawn from SearchParameter.code for a parameter on the target resource
   * type.
   */
  chain?: string[];

  /**
   * Contains the names of any search parameters which may be chained to
   * the containing search parameter. Chained parameters may be added to
   * search parameters of type reference and specify that resources will
   * only be returned if they contain a reference to a resource which
   * matches the chained parameter value. Values for this field should be
   * drawn from SearchParameter.code for a parameter on the target resource
   * type.
   */
  _chain?: (PrimitiveExtension | null)[];

  /**
   * Used to define the parts of a composite search parameter.
   */
  component?: SearchParameterComponent[];
}

/**
 * Used to define the parts of a composite search parameter.
 */
export interface SearchParameterComponent {

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
   * The definition of the search parameter that describes this part.
   */
  definition: string;

  /**
   * The definition of the search parameter that describes this part.
   */
  _definition?: PrimitiveExtension;

  /**
   * A sub-expression that defines how to extract values for this component
   * from the output of the main SearchParameter.expression.
   */
  expression: string;

  /**
   * A sub-expression that defines how to extract values for this component
   * from the output of the main SearchParameter.expression.
   */
  _expression?: PrimitiveExtension;
}
