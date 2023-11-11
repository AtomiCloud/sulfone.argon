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

import type {
  CreatePluginReq,
  CreatePluginVersionReq,
  CreateProcessorReq,
  CreateProcessorVersionReq,
  CreateTemplateReq,
  CreateTemplateVersionReq,
  CreateTokenReq,
  CreateUserReq,
  ErrorInfo,
  PluginPrincipalResp,
  PluginResp,
  PluginVersionPrincipalResp,
  PluginVersionResp,
  ProcessorPrincipalResp,
  ProcessorResp,
  ProcessorVersionPrincipalResp,
  ProcessorVersionResp,
  PushPluginReq,
  PushProcessorReq,
  PushTemplateReq,
  TemplatePrincipalResp,
  TemplateResp,
  TemplateVersionPrincipalResp,
  TemplateVersionResp,
  TokenOTPrincipalResp,
  TokenPrincipalResp,
  Unit,
  UpdatePluginReq,
  UpdatePluginVersionReq,
  UpdateProcessorReq,
  UpdateProcessorVersionReq,
  UpdateTemplateReq,
  UpdateTemplateVersionReq,
  UpdateTokenReq,
  UpdateUserReq,
  UserExistResp,
  UserPrincipalResp,
  UserResp,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginDetail
   * @request GET:/api/v{version}/Plugin
   * @secure
   */
  vPluginDetail = (
    version: string,
    query?: {
      Owner?: string;
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PluginPrincipalResp[], any>({
      path: `/api/v${version}/Plugin`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdDetail
   * @request GET:/api/v{version}/Plugin/id/{userId}/{pluginId}
   * @secure
   */
  vPluginIdDetail = (
    userId: string,
    pluginId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<PluginResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdUpdate
   * @request PUT:/api/v{version}/Plugin/id/{userId}/{pluginId}
   * @secure
   */
  vPluginIdUpdate = (
    userId: string,
    pluginId: string,
    version: string,
    data: UpdatePluginReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginPrincipalResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdDelete
   * @request DELETE:/api/v{version}/Plugin/id/{userId}/{pluginId}
   * @secure
   */
  vPluginIdDelete = (
    userId: string,
    pluginId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugDetail
   * @request GET:/api/v{version}/Plugin/slug/{username}/{name}
   * @secure
   */
  vPluginSlugDetail = (
    username: string,
    name: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<PluginResp, any>({
      path: `/api/v${version}/Plugin/slug/${username}/${name}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdCreate
   * @request POST:/api/v{version}/Plugin/id/{userId}
   * @secure
   */
  vPluginIdCreate = (
    userId: string,
    version: string,
    data: CreatePluginReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginPrincipalResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugLikeCreate
   * @request POST:/api/v{version}/Plugin/slug/{username}/{pluginName}/like/{likerId}/{like}
   * @secure
   */
  vPluginSlugLikeCreate = (
    username: string,
    pluginName: string,
    likerId: string,
    like: boolean,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Plugin/slug/${username}/${pluginName}/like/${likerId}/${like}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugVersionsDetail
   * @request GET:/api/v{version}/Plugin/slug/{username}/{pluginName}/versions
   * @secure
   */
  vPluginSlugVersionsDetail = (
    username: string,
    pluginName: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp[], any>({
      path: `/api/v${version}/Plugin/slug/${username}/${pluginName}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugVersionsCreate
   * @request POST:/api/v{version}/Plugin/slug/{username}/{pluginName}/versions
   * @secure
   */
  vPluginSlugVersionsCreate = (
    username: string,
    pluginName: string,
    version: string,
    data: CreatePluginVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp, any>({
      path: `/api/v${version}/Plugin/slug/${username}/${pluginName}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdVersionsDetail
   * @request GET:/api/v{version}/Plugin/id/{userId}/{pluginId}/versions
   * @secure
   */
  vPluginIdVersionsDetail = (
    userId: string,
    pluginId: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp[], any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdVersionsCreate
   * @request POST:/api/v{version}/Plugin/id/{userId}/{pluginId}/versions
   * @secure
   */
  vPluginIdVersionsCreate = (
    userId: string,
    pluginId: string,
    version: string,
    data: CreatePluginVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugVersionsDetail2
   * @request GET:/api/v{version}/Plugin/slug/{username}/{pluginName}/versions/{ver}
   * @originalName vPluginSlugVersionsDetail
   * @duplicate
   * @secure
   */
  vPluginSlugVersionsDetail2 = (
    username: string,
    pluginName: string,
    ver: number,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionResp, any>({
      path: `/api/v${version}/Plugin/slug/${username}/${pluginName}/versions/${ver}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginSlugVersionsLatestDetail
   * @request GET:/api/v{version}/Plugin/slug/{username}/{pluginName}/versions/latest
   * @secure
   */
  vPluginSlugVersionsLatestDetail = (
    username: string,
    pluginName: string,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionResp, any>({
      path: `/api/v${version}/Plugin/slug/${username}/${pluginName}/versions/latest`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdVersionsDetail2
   * @request GET:/api/v{version}/Plugin/id/{userId}/{pluginId}/versions/{ver}
   * @originalName vPluginIdVersionsDetail
   * @duplicate
   * @secure
   */
  vPluginIdVersionsDetail2 = (
    userId: string,
    pluginId: string,
    ver: number,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}/versions/${ver}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginIdVersionsUpdate
   * @request PUT:/api/v{version}/Plugin/id/{userId}/{pluginId}/versions/{ver}
   * @secure
   */
  vPluginIdVersionsUpdate = (
    userId: string,
    pluginId: string,
    ver: number,
    version: string,
    data: UpdatePluginVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp, any>({
      path: `/api/v${version}/Plugin/id/${userId}/${pluginId}/versions/${ver}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Plugin
   * @name VPluginPushCreate
   * @request POST:/api/v{version}/Plugin/push/{username}
   * @secure
   */
  vPluginPushCreate = (
    username: string,
    version: string,
    data: PushPluginReq,
    params: RequestParams = {},
  ) =>
    this.request<PluginVersionPrincipalResp, any>({
      path: `/api/v${version}/Plugin/push/${username}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorDetail
   * @request GET:/api/v{version}/Processor
   * @secure
   */
  vProcessorDetail = (
    version: string,
    query?: {
      Owner?: string;
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorPrincipalResp[], any>({
      path: `/api/v${version}/Processor`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdDetail
   * @request GET:/api/v{version}/Processor/id/{userId}/{processorId}
   * @secure
   */
  vProcessorIdDetail = (
    userId: string,
    processorId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorResp, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdUpdate
   * @request PUT:/api/v{version}/Processor/id/{userId}/{processorId}
   * @secure
   */
  vProcessorIdUpdate = (
    userId: string,
    processorId: string,
    version: string,
    data: UpdateProcessorReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorPrincipalResp, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdDelete
   * @request DELETE:/api/v{version}/Processor/id/{userId}/{processorId}
   * @secure
   */
  vProcessorIdDelete = (
    userId: string,
    processorId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugDetail
   * @request GET:/api/v{version}/Processor/slug/{username}/{name}
   * @secure
   */
  vProcessorSlugDetail = (
    username: string,
    name: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorResp, any>({
      path: `/api/v${version}/Processor/slug/${username}/${name}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdCreate
   * @request POST:/api/v{version}/Processor/id/{userId}
   * @secure
   */
  vProcessorIdCreate = (
    userId: string,
    version: string,
    data: CreateProcessorReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorPrincipalResp, any>({
      path: `/api/v${version}/Processor/id/${userId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugLikeCreate
   * @request POST:/api/v{version}/Processor/slug/{username}/{processorName}/like/{likerId}/{like}
   * @secure
   */
  vProcessorSlugLikeCreate = (
    username: string,
    processorName: string,
    likerId: string,
    like: boolean,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Processor/slug/${username}/${processorName}/like/${likerId}/${like}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugVersionsDetail
   * @request GET:/api/v{version}/Processor/slug/{username}/{processorName}/versions
   * @secure
   */
  vProcessorSlugVersionsDetail = (
    username: string,
    processorName: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp[], any>({
      path: `/api/v${version}/Processor/slug/${username}/${processorName}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugVersionsCreate
   * @request POST:/api/v{version}/Processor/slug/{username}/{processorName}/versions
   * @secure
   */
  vProcessorSlugVersionsCreate = (
    username: string,
    processorName: string,
    version: string,
    data: CreateProcessorVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp, any>({
      path: `/api/v${version}/Processor/slug/${username}/${processorName}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdVersionsDetail
   * @request GET:/api/v{version}/Processor/id/{userId}/{processorId}/versions
   * @secure
   */
  vProcessorIdVersionsDetail = (
    userId: string,
    processorId: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp[], any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdVersionsCreate
   * @request POST:/api/v{version}/Processor/id/{userId}/{processorId}/versions
   * @secure
   */
  vProcessorIdVersionsCreate = (
    userId: string,
    processorId: string,
    version: string,
    data: CreateProcessorVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugVersionsDetail2
   * @request GET:/api/v{version}/Processor/slug/{username}/{processorName}/versions/{ver}
   * @originalName vProcessorSlugVersionsDetail
   * @duplicate
   * @secure
   */
  vProcessorSlugVersionsDetail2 = (
    username: string,
    processorName: string,
    ver: number,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionResp, any>({
      path: `/api/v${version}/Processor/slug/${username}/${processorName}/versions/${ver}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorSlugVersionsLatestDetail
   * @request GET:/api/v{version}/Processor/slug/{username}/{processorName}/versions/latest
   * @secure
   */
  vProcessorSlugVersionsLatestDetail = (
    username: string,
    processorName: string,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionResp, any>({
      path: `/api/v${version}/Processor/slug/${username}/${processorName}/versions/latest`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdVersionsDetail2
   * @request GET:/api/v{version}/Processor/id/{userId}/{processorId}/versions/{ver}
   * @originalName vProcessorIdVersionsDetail
   * @duplicate
   * @secure
   */
  vProcessorIdVersionsDetail2 = (
    userId: string,
    processorId: string,
    ver: number,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionResp, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}/versions/${ver}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorIdVersionsUpdate
   * @request PUT:/api/v{version}/Processor/id/{userId}/{processorId}/versions/{ver}
   * @secure
   */
  vProcessorIdVersionsUpdate = (
    userId: string,
    processorId: string,
    ver: number,
    version: string,
    data: UpdateProcessorVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp, any>({
      path: `/api/v${version}/Processor/id/${userId}/${processorId}/versions/${ver}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Processor
   * @name VProcessorPushCreate
   * @request POST:/api/v{version}/Processor/push/{username}
   * @secure
   */
  vProcessorPushCreate = (
    username: string,
    version: string,
    data: PushProcessorReq,
    params: RequestParams = {},
  ) =>
    this.request<ProcessorVersionPrincipalResp, any>({
      path: `/api/v${version}/Processor/push/${username}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateDetail
   * @request GET:/api/v{version}/Template
   * @secure
   */
  vTemplateDetail = (
    version: string,
    query?: {
      Owner?: string;
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TemplatePrincipalResp[], any>({
      path: `/api/v${version}/Template`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdDetail
   * @request GET:/api/v{version}/Template/id/{userId}/{templateId}
   * @secure
   */
  vTemplateIdDetail = (
    userId: string,
    templateId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<TemplateResp, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdUpdate
   * @request PUT:/api/v{version}/Template/id/{userId}/{templateId}
   * @secure
   */
  vTemplateIdUpdate = (
    userId: string,
    templateId: string,
    version: string,
    data: UpdateTemplateReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplatePrincipalResp, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdDelete
   * @request DELETE:/api/v{version}/Template/id/{userId}/{templateId}
   * @secure
   */
  vTemplateIdDelete = (
    userId: string,
    templateId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugDetail
   * @request GET:/api/v{version}/Template/slug/{username}/{name}
   * @secure
   */
  vTemplateSlugDetail = (
    username: string,
    name: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<TemplateResp, any>({
      path: `/api/v${version}/Template/slug/${username}/${name}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdCreate
   * @request POST:/api/v{version}/Template/id/{userId}
   * @secure
   */
  vTemplateIdCreate = (
    userId: string,
    version: string,
    data: CreateTemplateReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplatePrincipalResp, any>({
      path: `/api/v${version}/Template/id/${userId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugLikeCreate
   * @request POST:/api/v{version}/Template/slug/{username}/{templateName}/like/{likerId}/{like}
   * @secure
   */
  vTemplateSlugLikeCreate = (
    username: string,
    templateName: string,
    likerId: string,
    like: boolean,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<Unit, any>({
      path: `/api/v${version}/Template/slug/${username}/${templateName}/like/${likerId}/${like}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugVersionsDetail
   * @request GET:/api/v{version}/Template/slug/{username}/{templateName}/versions
   * @secure
   */
  vTemplateSlugVersionsDetail = (
    username: string,
    templateName: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp[], any>({
      path: `/api/v${version}/Template/slug/${username}/${templateName}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugVersionsCreate
   * @request POST:/api/v{version}/Template/slug/{username}/{templateName}/versions
   * @secure
   */
  vTemplateSlugVersionsCreate = (
    username: string,
    templateName: string,
    version: string,
    data: CreateTemplateVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp, any>({
      path: `/api/v${version}/Template/slug/${username}/${templateName}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdVersionsDetail
   * @request GET:/api/v{version}/Template/id/{userId}/{templateId}/versions
   * @secure
   */
  vTemplateIdVersionsDetail = (
    userId: string,
    templateId: string,
    version: string,
    query?: {
      Search?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp[], any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}/versions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdVersionsCreate
   * @request POST:/api/v{version}/Template/id/{userId}/{templateId}/versions
   * @secure
   */
  vTemplateIdVersionsCreate = (
    userId: string,
    templateId: string,
    version: string,
    data: CreateTemplateVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}/versions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugVersionsDetail2
   * @request GET:/api/v{version}/Template/slug/{username}/{templateName}/versions/{ver}
   * @originalName vTemplateSlugVersionsDetail
   * @duplicate
   * @secure
   */
  vTemplateSlugVersionsDetail2 = (
    username: string,
    templateName: string,
    ver: number,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionResp, any>({
      path: `/api/v${version}/Template/slug/${username}/${templateName}/versions/${ver}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateSlugVersionsLatestDetail
   * @request GET:/api/v{version}/Template/slug/{username}/{templateName}/versions/latest
   * @secure
   */
  vTemplateSlugVersionsLatestDetail = (
    username: string,
    templateName: string,
    version: string,
    query?: {
      bumpDownload?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionResp, any>({
      path: `/api/v${version}/Template/slug/${username}/${templateName}/versions/latest`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdVersionsDetail2
   * @request GET:/api/v{version}/Template/id/{userId}/{templateId}/versions/{ver}
   * @originalName vTemplateIdVersionsDetail
   * @duplicate
   * @secure
   */
  vTemplateIdVersionsDetail2 = (
    userId: string,
    templateId: string,
    ver: number,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionResp, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}/versions/${ver}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplateIdVersionsUpdate
   * @request PUT:/api/v{version}/Template/id/{userId}/{templateId}/versions/{ver}
   * @secure
   */
  vTemplateIdVersionsUpdate = (
    userId: string,
    templateId: string,
    ver: number,
    version: string,
    data: UpdateTemplateVersionReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp, any>({
      path: `/api/v${version}/Template/id/${userId}/${templateId}/versions/${ver}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Template
   * @name VTemplatePushCreate
   * @request POST:/api/v{version}/Template/push/{username}
   * @secure
   */
  vTemplatePushCreate = (
    username: string,
    version: string,
    data: PushTemplateReq,
    params: RequestParams = {},
  ) =>
    this.request<TemplateVersionPrincipalResp, any>({
      path: `/api/v${version}/Template/push/${username}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserDetail
   * @request GET:/api/v{version}/User
   * @secure
   */
  vUserDetail = (
    version: string,
    query?: {
      Id?: string;
      Username?: string;
      /** @format int32 */
      Limit?: number;
      /** @format int32 */
      Skip?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<UserPrincipalResp[], any>({
      path: `/api/v${version}/User`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserCreate
   * @request POST:/api/v{version}/User
   * @secure
   */
  vUserCreate = (
    version: string,
    data: CreateUserReq,
    params: RequestParams = {},
  ) =>
    this.request<UserPrincipalResp, any>({
      path: `/api/v${version}/User`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserMeDetail
   * @request GET:/api/v{version}/User/Me
   * @secure
   */
  vUserMeDetail = (version: string, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/v${version}/User/Me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserDetail2
   * @request GET:/api/v{version}/User/{id}
   * @originalName vUserDetail
   * @duplicate
   * @secure
   */
  vUserDetail2 = (id: string, version: string, params: RequestParams = {}) =>
    this.request<UserResp, any>({
      path: `/api/v${version}/User/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserUpdate
   * @request PUT:/api/v{version}/User/{id}
   * @secure
   */
  vUserUpdate = (
    id: string,
    version: string,
    data: UpdateUserReq,
    params: RequestParams = {},
  ) =>
    this.request<UserPrincipalResp, any>({
      path: `/api/v${version}/User/${id}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserDelete
   * @request DELETE:/api/v{version}/User/{id}
   * @secure
   */
  vUserDelete = (id: string, version: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/v${version}/User/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserUsernameDetail
   * @request GET:/api/v{version}/User/username/{username}
   * @secure
   */
  vUserUsernameDetail = (
    username: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<UserResp, any>({
      path: `/api/v${version}/User/username/${username}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserExistDetail
   * @request GET:/api/v{version}/User/exist/{username}
   * @secure
   */
  vUserExistDetail = (
    username: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<UserExistResp, any>({
      path: `/api/v${version}/User/exist/${username}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserTokensDetail
   * @request GET:/api/v{version}/User/{userId}/tokens
   * @secure
   */
  vUserTokensDetail = (
    userId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<TokenPrincipalResp[], any>({
      path: `/api/v${version}/User/${userId}/tokens`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserTokensCreate
   * @request POST:/api/v{version}/User/{userId}/tokens
   * @secure
   */
  vUserTokensCreate = (
    userId: string,
    version: string,
    data: CreateTokenReq,
    params: RequestParams = {},
  ) =>
    this.request<TokenOTPrincipalResp, any>({
      path: `/api/v${version}/User/${userId}/tokens`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserTokensUpdate
   * @request PUT:/api/v{version}/User/{userId}/tokens/{tokenId}
   * @secure
   */
  vUserTokensUpdate = (
    userId: string,
    tokenId: string,
    version: string,
    data: UpdateTokenReq,
    params: RequestParams = {},
  ) =>
    this.request<TokenPrincipalResp, any>({
      path: `/api/v${version}/User/${userId}/tokens/${tokenId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserTokensDelete
   * @request DELETE:/api/v{version}/User/{userId}/tokens/{tokenId}
   * @secure
   */
  vUserTokensDelete = (
    userId: string,
    tokenId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v${version}/User/${userId}/tokens/${tokenId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags User
   * @name VUserTokensRevokeCreate
   * @request POST:/api/v{version}/User/{userId}/tokens/{tokenId}/revoke
   * @secure
   */
  vUserTokensRevokeCreate = (
    userId: string,
    tokenId: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/v${version}/User/${userId}/tokens/${tokenId}/revoke`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags V1Error
   * @name VErrorInfoDetail
   * @request GET:/api/v{version}/error-info
   * @secure
   */
  vErrorInfoDetail = (version: string, params: RequestParams = {}) =>
    this.request<string[], any>({
      path: `/api/v${version}/error-info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags V1Error
   * @name VErrorInfoDetail2
   * @request GET:/api/v{version}/error-info/{id}
   * @originalName vErrorInfoDetail
   * @duplicate
   * @secure
   */
  vErrorInfoDetail2 = (
    id: string,
    version: string,
    params: RequestParams = {},
  ) =>
    this.request<ErrorInfo, any>({
      path: `/api/v${version}/error-info/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
