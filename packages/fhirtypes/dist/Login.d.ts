/*
 * This is a generated file
 * Do not edit manually.
 */

import { Bot } from './Bot';
import { ClientApplication } from './ClientApplication';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { PrimitiveExtension } from './PrimitiveExtension';
import { Project } from './Project';
import { ProjectMembership } from './ProjectMembership';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ResourceType } from './ResourceType';
import { SmartAppLaunch } from './SmartAppLaunch';
import { User } from './User';

/**
 * Login event and session details.
 */
export interface Login {

  /**
   * This is a Login resource
   */
  readonly resourceType: 'Login';

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
   * The client requesting the code.
   */
  client?: Reference<ClientApplication>;

  /**
   * Optional required profile resource type.
   */
  profileType?: ResourceType;

  /**
   * Optional required profile resource type.
   */
  _profileType?: PrimitiveExtension;

  /**
   * Optional required project for the login.
   */
  project?: Reference<Project>;

  /**
   * The user requesting the code.
   */
  user: Reference<Bot | ClientApplication | User>;

  /**
   * Reference to the project membership which includes FHIR identity
   * (patient, practitioner, etc), access policy, and user configuration.
   */
  membership?: Reference<ProjectMembership>;

  /**
   * OAuth scope or scopes.
   */
  scope?: string;

  /**
   * OAuth scope or scopes.
   */
  _scope?: PrimitiveExtension;

  /**
   * The authentication method used to obtain the code (password or
   * google).
   */
  authMethod: 'client' | 'exchange' | 'execute' | 'external' | 'google' | 'password';

  /**
   * The authentication method used to obtain the code (password or
   * google).
   */
  _authMethod?: PrimitiveExtension;

  /**
   * Time when the End-User authentication occurred.
   */
  authTime: string;

  /**
   * Time when the End-User authentication occurred.
   */
  _authTime?: PrimitiveExtension;

  /**
   * The cookie value that can be used for session management.
   */
  cookie?: string;

  /**
   * The cookie value that can be used for session management.
   */
  _cookie?: PrimitiveExtension;

  /**
   * The authorization code generated by the authorization server.  The
   * authorization code MUST expire shortly after it is issued to mitigate
   * the risk of leaks.  A maximum authorization code lifetime of 10
   * minutes is RECOMMENDED.  The client MUST NOT use the authorization
   * code more than once.  If an authorization code is used more than once,
   * the authorization server MUST deny the request and SHOULD revoke (when
   * possible) all tokens previously issued based on that authorization
   * code.  The authorization code is bound to the client identifier and
   * redirection URI.
   */
  code?: string;

  /**
   * The authorization code generated by the authorization server.  The
   * authorization code MUST expire shortly after it is issued to mitigate
   * the risk of leaks.  A maximum authorization code lifetime of 10
   * minutes is RECOMMENDED.  The client MUST NOT use the authorization
   * code more than once.  If an authorization code is used more than once,
   * the authorization server MUST deny the request and SHOULD revoke (when
   * possible) all tokens previously issued based on that authorization
   * code.  The authorization code is bound to the client identifier and
   * redirection URI.
   */
  _code?: PrimitiveExtension;

  /**
   * PKCE code challenge presented in the authorization request.
   */
  codeChallenge?: string;

  /**
   * PKCE code challenge presented in the authorization request.
   */
  _codeChallenge?: PrimitiveExtension;

  /**
   * OPTIONAL, defaults to &quot;plain&quot; if not present in the request.  Code
   * verifier transformation method is &quot;S256&quot; or &quot;plain&quot;.
   */
  codeChallengeMethod?: 'plain' | 'S256';

  /**
   * OPTIONAL, defaults to &quot;plain&quot; if not present in the request.  Code
   * verifier transformation method is &quot;S256&quot; or &quot;plain&quot;.
   */
  _codeChallengeMethod?: PrimitiveExtension;

  /**
   * Optional secure random string that can be used in an OAuth refresh
   * token.
   */
  refreshSecret?: string;

  /**
   * Optional secure random string that can be used in an OAuth refresh
   * token.
   */
  _refreshSecret?: PrimitiveExtension;

  /**
   * Optional cryptographically random string that your app adds to the
   * initial request and the authorization server includes inside the ID
   * Token, used to prevent token replay attacks.
   */
  nonce?: string;

  /**
   * Optional cryptographically random string that your app adds to the
   * initial request and the authorization server includes inside the ID
   * Token, used to prevent token replay attacks.
   */
  _nonce?: PrimitiveExtension;

  /**
   * Whether the user has verified using multi-factor authentication (MFA).
   * This will only be set is the user has MFA enabled (see
   * User.mfaEnrolled).
   */
  mfaVerified?: boolean;

  /**
   * Whether the user has verified using multi-factor authentication (MFA).
   * This will only be set is the user has MFA enabled (see
   * User.mfaEnrolled).
   */
  _mfaVerified?: PrimitiveExtension;

  /**
   * Whether a token has been granted for this login.
   */
  granted?: boolean;

  /**
   * Whether a token has been granted for this login.
   */
  _granted?: PrimitiveExtension;

  /**
   * Whether this login has been revoked or invalidated.
   */
  revoked?: boolean;

  /**
   * Whether this login has been revoked or invalidated.
   */
  _revoked?: PrimitiveExtension;

  /**
   * @deprecated
   */
  admin?: boolean;

  /**
   * @deprecated
   */
  _admin?: PrimitiveExtension;

  /**
   * @deprecated
   */
  superAdmin?: boolean;

  /**
   * @deprecated
   */
  _superAdmin?: PrimitiveExtension;

  /**
   * Optional SMART App Launch context for this login.
   */
  launch?: Reference<SmartAppLaunch>;

  /**
   * The Internet Protocol (IP) address of the client or last proxy that
   * sent the request.
   */
  remoteAddress?: string;

  /**
   * The Internet Protocol (IP) address of the client or last proxy that
   * sent the request.
   */
  _remoteAddress?: PrimitiveExtension;

  /**
   * The User-Agent request header as sent by the client.
   */
  userAgent?: string;

  /**
   * The User-Agent request header as sent by the client.
   */
  _userAgent?: PrimitiveExtension;
}
