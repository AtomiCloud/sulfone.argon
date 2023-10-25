/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreatePluginReq {
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface CreatePluginVersionReq {
  description?: string | null;
  dockerReference?: string | null;
  dockerSha?: string | null;
}

export interface CreateProcessorReq {
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface CreateProcessorVersionReq {
  description?: string | null;
  dockerReference?: string | null;
  dockerSha?: string | null;
}

export interface CreateTemplateReq {
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface CreateTemplateVersionReq {
  description?: string | null;
  blobDockerReference?: string | null;
  blobDockerSha?: string | null;
  templateDockerReference?: string | null;
  templateDockerSha?: string | null;
  plugins?: PluginReferenceReq[] | null;
  processors?: ProcessorReferenceReq[] | null;
}

export interface CreateTokenReq {
  name?: string | null;
}

export interface CreateUserReq {
  username?: string | null;
}

export interface ErrorInfo {
  schema?: any;
  id?: string | null;
  title?: string | null;
  version?: string | null;
}

export interface PluginInfoResp {
  /** @format int32 */
  downloads?: number;
  /** @format int32 */
  dependencies?: number;
  /** @format int32 */
  stars?: number;
}

export interface PluginPrincipalResp {
  /** @format uuid */
  id?: string;
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
  userId?: string | null;
}

export interface PluginReferenceReq {
  username?: string | null;
  name?: string | null;
  /** @format int32 */
  version?: number;
}

export interface PluginResp {
  principal?: PluginPrincipalResp;
  info?: PluginInfoResp;
  user?: UserPrincipalResp;
  versions?: PluginVersionPrincipalResp[] | null;
}

export interface PluginVersionPrincipalResp {
  /** @format uuid */
  id?: string;
  /** @format int64 */
  version?: number;
  /** @format date-time */
  createdAt?: string;
  description?: string | null;
  dockerReference?: string | null;
  dockerSha?: string | null;
}

export interface ProcessorInfoResp {
  /** @format int32 */
  downloads?: number;
  /** @format int32 */
  dependencies?: number;
  /** @format int32 */
  stars?: number;
}

export interface ProcessorPrincipalResp {
  /** @format uuid */
  id?: string;
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
  userId?: string | null;
}

export interface ProcessorReferenceReq {
  username?: string | null;
  name?: string | null;
  /** @format int32 */
  version?: number;
}

export interface ProcessorResp {
  principal?: ProcessorPrincipalResp;
  info?: ProcessorInfoResp;
  user?: UserPrincipalResp;
  versions?: ProcessorVersionPrincipalResp[] | null;
}

export interface ProcessorVersionPrincipalResp {
  /** @format uuid */
  id?: string;
  /** @format int64 */
  version?: number;
  /** @format date-time */
  createdAt?: string;
  description?: string | null;
  dockerReference?: string | null;
  dockerSha?: string | null;
}

export interface TemplateInfoResp {
  /** @format int32 */
  downloads?: number;
  /** @format int32 */
  stars?: number;
}

export interface TemplatePrincipalResp {
  /** @format uuid */
  id?: string;
  name?: string | null;
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
  userId?: string | null;
}

export interface TemplateResp {
  principal?: TemplatePrincipalResp;
  info?: TemplateInfoResp;
  user?: UserPrincipalResp;
  versions?: TemplateVersionPrincipalResp[] | null;
}

export interface TemplateVersionPrincipalResp {
  /** @format uuid */
  id?: string;
  /** @format int64 */
  version?: number;
  /** @format date-time */
  createdAt?: string;
  description?: string | null;
  blobDockerReference?: string | null;
  blobDockerSha?: string | null;
  templateDockerReference?: string | null;
  templateDockerSha?: string | null;
}

export interface TemplateVersionResp {
  principal?: TemplateVersionPrincipalResp;
  template?: TemplatePrincipalResp;
  plugins?: PluginVersionPrincipalResp[] | null;
  processors?: ProcessorVersionPrincipalResp[] | null;
}

export interface TokenOTPrincipalResp {
  /** @format uuid */
  id?: string;
  name?: string | null;
  apiKey?: string | null;
}

export interface TokenPrincipalResp {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export type Unit = object;

export interface UpdatePluginReq {
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface UpdatePluginVersionReq {
  description?: string | null;
}

export interface UpdateProcessorReq {
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface UpdateProcessorVersionReq {
  description?: string | null;
}

export interface UpdateTemplateReq {
  project?: string | null;
  source?: string | null;
  email?: string | null;
  tags?: string[] | null;
  description?: string | null;
  readme?: string | null;
}

export interface UpdateTemplateVersionReq {
  description?: string | null;
}

export interface UpdateTokenReq {
  name?: string | null;
}

export interface UpdateUserReq {
  username?: string | null;
}

export interface UserExistResp {
  exists?: boolean;
}

export interface UserPrincipalResp {
  id?: string | null;
  username?: string | null;
}

export interface UserResp {
  principal?: UserPrincipalResp;
  tokens?: TokenPrincipalResp[] | null;
}
