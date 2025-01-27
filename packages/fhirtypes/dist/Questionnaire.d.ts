/*
 * This is a generated file
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ResourceType } from './ResourceType';
import { UsageContext } from './UsageContext';

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface Questionnaire {

  /**
   * This is a Questionnaire resource
   */
  readonly resourceType: 'Questionnaire';

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
   * An absolute URI that is used to identify this questionnaire when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this questionnaire is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the questionnaire is stored on different servers.
   */
  url?: string;

  /**
   * An absolute URI that is used to identify this questionnaire when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this questionnaire is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the questionnaire is stored on different servers.
   */
  _url?: PrimitiveExtension;

  /**
   * A formal identifier that is used to identify this questionnaire when
   * it is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the
   * questionnaire when it is referenced in a specification, model, design
   * or instance. This is an arbitrary value managed by the questionnaire
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  version?: string;

  /**
   * The identifier that is used to identify this version of the
   * questionnaire when it is referenced in a specification, model, design
   * or instance. This is an arbitrary value managed by the questionnaire
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  _version?: PrimitiveExtension;

  /**
   * A natural language name identifying the questionnaire. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A natural language name identifying the questionnaire. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  _name?: PrimitiveExtension;

  /**
   * A short, descriptive, user-friendly title for the questionnaire.
   */
  title?: string;

  /**
   * A short, descriptive, user-friendly title for the questionnaire.
   */
  _title?: PrimitiveExtension;

  /**
   * The URL of a Questionnaire that this Questionnaire is based on.
   */
  derivedFrom?: string[];

  /**
   * The URL of a Questionnaire that this Questionnaire is based on.
   */
  _derivedFrom?: (PrimitiveExtension | null)[];

  /**
   * The status of this questionnaire. Enables tracking the life-cycle of
   * the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * The status of this questionnaire. Enables tracking the life-cycle of
   * the content.
   */
  _status?: PrimitiveExtension;

  /**
   * A Boolean value to indicate that this questionnaire is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * A Boolean value to indicate that this questionnaire is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  _experimental?: PrimitiveExtension;

  /**
   * The types of subjects that can be the subject of responses created for
   * the questionnaire.
   */
  subjectType?: ResourceType[];

  /**
   * The types of subjects that can be the subject of responses created for
   * the questionnaire.
   */
  _subjectType?: (PrimitiveExtension | null)[];

  /**
   * The date  (and optionally time) when the questionnaire was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the questionnaire changes.
   */
  date?: string;

  /**
   * The date  (and optionally time) when the questionnaire was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the questionnaire changes.
   */
  _date?: PrimitiveExtension;

  /**
   * The name of the organization or individual that published the
   * questionnaire.
   */
  publisher?: string;

  /**
   * The name of the organization or individual that published the
   * questionnaire.
   */
  _publisher?: PrimitiveExtension;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the questionnaire from a
   * consumer's perspective.
   */
  description?: string;

  /**
   * A free text natural language description of the questionnaire from a
   * consumer's perspective.
   */
  _description?: PrimitiveExtension;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate questionnaire instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the questionnaire is intended to
   * be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this questionnaire is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * Explanation of why this questionnaire is needed and why it has been
   * designed as it has.
   */
  _purpose?: PrimitiveExtension;

  /**
   * A copyright statement relating to the questionnaire and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the questionnaire.
   */
  copyright?: string;

  /**
   * A copyright statement relating to the questionnaire and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the questionnaire.
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
   * The period during which the questionnaire content was or is planned to
   * be in active use.
   */
  effectivePeriod?: Period;

  /**
   * An identifier for this question or group of questions in a particular
   * terminology such as LOINC.
   */
  code?: Coding[];

  /**
   * A particular question, question grouping or display text that is part
   * of the questionnaire.
   */
  item?: QuestionnaireItem[];
}

/**
 * A particular question, question grouping or display text that is part
 * of the questionnaire.
 */
export interface QuestionnaireItem {

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
   * An identifier that is unique within the Questionnaire allowing linkage
   * to the equivalent item in a QuestionnaireResponse resource.
   */
  linkId: string;

  /**
   * An identifier that is unique within the Questionnaire allowing linkage
   * to the equivalent item in a QuestionnaireResponse resource.
   */
  _linkId?: PrimitiveExtension;

  /**
   * This element is a URI that refers to an
   * [ElementDefinition](elementdefinition.html) that provides information
   * about this item, including information that might otherwise be
   * included in the instance of the Questionnaire resource. A detailed
   * description of the construction of the URI is shown in Comments,
   * below. If this element is present then the following element values
   * MAY be derived from the Element Definition if the corresponding
   * elements of this Questionnaire resource instance have no value:
   *
   * * code (ElementDefinition.code)
   * * type (ElementDefinition.type)
   * * required (ElementDefinition.min)
   * * repeats (ElementDefinition.max)
   * * maxLength (ElementDefinition.maxLength)
   * * answerValueSet (ElementDefinition.binding)
   * * options (ElementDefinition.binding).
   */
  definition?: string;

  /**
   * This element is a URI that refers to an
   * [ElementDefinition](elementdefinition.html) that provides information
   * about this item, including information that might otherwise be
   * included in the instance of the Questionnaire resource. A detailed
   * description of the construction of the URI is shown in Comments,
   * below. If this element is present then the following element values
   * MAY be derived from the Element Definition if the corresponding
   * elements of this Questionnaire resource instance have no value:
   *
   * * code (ElementDefinition.code)
   * * type (ElementDefinition.type)
   * * required (ElementDefinition.min)
   * * repeats (ElementDefinition.max)
   * * maxLength (ElementDefinition.maxLength)
   * * answerValueSet (ElementDefinition.binding)
   * * options (ElementDefinition.binding).
   */
  _definition?: PrimitiveExtension;

  /**
   * A terminology code that corresponds to this group or question (e.g. a
   * code from LOINC, which defines many questions and answers).
   */
  code?: Coding[];

  /**
   * A short label for a particular group, question or set of display text
   * within the questionnaire used for reference by the individual
   * completing the questionnaire.
   */
  prefix?: string;

  /**
   * A short label for a particular group, question or set of display text
   * within the questionnaire used for reference by the individual
   * completing the questionnaire.
   */
  _prefix?: PrimitiveExtension;

  /**
   * The name of a section, the text of a question or text content for a
   * display item.
   */
  text?: string;

  /**
   * The name of a section, the text of a question or text content for a
   * display item.
   */
  _text?: PrimitiveExtension;

  /**
   * The type of questionnaire item this is - whether text for display, a
   * grouping of other items or a particular type of data to be captured
   * (string, integer, coded choice, etc.).
   */
  type: 'group' | 'display' | 'question' | 'boolean' | 'decimal' | 'integer' | 'date' | 'dateTime' | 'time' | 'string'
      | 'text' | 'url' | 'choice' | 'open-choice' | 'attachment' | 'reference' | 'quantity';

  /**
   * The type of questionnaire item this is - whether text for display, a
   * grouping of other items or a particular type of data to be captured
   * (string, integer, coded choice, etc.).
   */
  _type?: PrimitiveExtension;

  /**
   * A constraint indicating that this item should only be enabled
   * (displayed/allow answers to be captured) when the specified condition
   * is true.
   */
  enableWhen?: QuestionnaireItemEnableWhen[];

  /**
   * Controls how multiple enableWhen values are interpreted -  whether all
   * or any must be true.
   */
  enableBehavior?: 'all' | 'any';

  /**
   * Controls how multiple enableWhen values are interpreted -  whether all
   * or any must be true.
   */
  _enableBehavior?: PrimitiveExtension;

  /**
   * An indication, if true, that the item must be present in a &quot;completed&quot;
   * QuestionnaireResponse.  If false, the item may be skipped when
   * answering the questionnaire.
   */
  required?: boolean;

  /**
   * An indication, if true, that the item must be present in a &quot;completed&quot;
   * QuestionnaireResponse.  If false, the item may be skipped when
   * answering the questionnaire.
   */
  _required?: PrimitiveExtension;

  /**
   * An indication, if true, that the item may occur multiple times in the
   * response, collecting multiple answers for questions or multiple sets
   * of answers for groups.
   */
  repeats?: boolean;

  /**
   * An indication, if true, that the item may occur multiple times in the
   * response, collecting multiple answers for questions or multiple sets
   * of answers for groups.
   */
  _repeats?: PrimitiveExtension;

  /**
   * An indication, when true, that the value cannot be changed by a human
   * respondent to the Questionnaire.
   */
  readOnly?: boolean;

  /**
   * An indication, when true, that the value cannot be changed by a human
   * respondent to the Questionnaire.
   */
  _readOnly?: PrimitiveExtension;

  /**
   * The maximum number of characters that are permitted in the answer to
   * be considered a &quot;valid&quot; QuestionnaireResponse.
   */
  maxLength?: number;

  /**
   * The maximum number of characters that are permitted in the answer to
   * be considered a &quot;valid&quot; QuestionnaireResponse.
   */
  _maxLength?: PrimitiveExtension;

  /**
   * A reference to a value set containing a list of codes representing
   * permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
   */
  answerValueSet?: string;

  /**
   * A reference to a value set containing a list of codes representing
   * permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
   */
  _answerValueSet?: PrimitiveExtension;

  /**
   * One of the permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
   */
  answerOption?: QuestionnaireItemAnswerOption[];

  /**
   * One or more values that should be pre-populated in the answer when
   * initially rendering the questionnaire for user input.
   */
  initial?: QuestionnaireItemInitial[];

  /**
   * Text, questions and other groups to be nested beneath a question or
   * group.
   */
  item?: QuestionnaireItem[];
}

/**
 * One of the permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
 */
export interface QuestionnaireItemAnswerOption {

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
   * A potential answer that's allowed as the answer to this question.
   */
  valueInteger?: number;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  _valueInteger?: PrimitiveExtension;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueDate?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  _valueDate?: PrimitiveExtension;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueTime?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  _valueTime?: PrimitiveExtension;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueString?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  _valueString?: PrimitiveExtension;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueCoding?: Coding;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueReference?: Reference<Resource>;

  /**
   * Indicates whether the answer value is selected when the list of
   * possible answers is initially shown.
   */
  initialSelected?: boolean;

  /**
   * Indicates whether the answer value is selected when the list of
   * possible answers is initially shown.
   */
  _initialSelected?: PrimitiveExtension;
}

/**
 * A potential answer that's allowed as the answer to this question.
 */
export type QuestionnaireItemAnswerOptionValue = Coding | number | PrimitiveExtension | Reference<Resource> | string;

/**
 * A constraint indicating that this item should only be enabled
 * (displayed/allow answers to be captured) when the specified condition
 * is true.
 */
export interface QuestionnaireItemEnableWhen {

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
   * The linkId for the question whose answer (or lack of answer) governs
   * whether this item is enabled.
   */
  question: string;

  /**
   * The linkId for the question whose answer (or lack of answer) governs
   * whether this item is enabled.
   */
  _question?: PrimitiveExtension;

  /**
   * Specifies the criteria by which the question is enabled.
   */
  operator: 'exists' | '=' | '!=' | '>' | '<' | '>=' | '<=';

  /**
   * Specifies the criteria by which the question is enabled.
   */
  _operator?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerBoolean?: boolean;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerBoolean?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerDecimal?: number;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerDecimal?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerInteger?: number;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerInteger?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerDate?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerDate?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerDateTime?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerDateTime?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerTime?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerTime?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerString?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  _answerString?: PrimitiveExtension;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerCoding?: Coding;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerQuantity?: Quantity;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  answerReference?: Reference<Resource>;
}

/**
 * A value that the referenced question is tested using the specified
 * operator in order for the item to be enabled.
 */
export type QuestionnaireItemEnableWhenAnswer = boolean | Coding | number | PrimitiveExtension | Quantity | Reference<Resource> | string;

/**
 * One or more values that should be pre-populated in the answer when
 * initially rendering the questionnaire for user input.
 */
export interface QuestionnaireItemInitial {

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
   * The actual value to for an initial answer.
   */
  valueBoolean?: boolean;

  /**
   * The actual value to for an initial answer.
   */
  _valueBoolean?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueDecimal?: number;

  /**
   * The actual value to for an initial answer.
   */
  _valueDecimal?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueInteger?: number;

  /**
   * The actual value to for an initial answer.
   */
  _valueInteger?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueDate?: string;

  /**
   * The actual value to for an initial answer.
   */
  _valueDate?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueDateTime?: string;

  /**
   * The actual value to for an initial answer.
   */
  _valueDateTime?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueTime?: string;

  /**
   * The actual value to for an initial answer.
   */
  _valueTime?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueString?: string;

  /**
   * The actual value to for an initial answer.
   */
  _valueString?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueUri?: string;

  /**
   * The actual value to for an initial answer.
   */
  _valueUri?: PrimitiveExtension;

  /**
   * The actual value to for an initial answer.
   */
  valueAttachment?: Attachment;

  /**
   * The actual value to for an initial answer.
   */
  valueCoding?: Coding;

  /**
   * The actual value to for an initial answer.
   */
  valueQuantity?: Quantity;

  /**
   * The actual value to for an initial answer.
   */
  valueReference?: Reference<Resource>;
}

/**
 * The actual value to for an initial answer.
 */
export type QuestionnaireItemInitialValue = Attachment | boolean | Coding | number | PrimitiveExtension | Quantity | Reference<Resource> | string;
