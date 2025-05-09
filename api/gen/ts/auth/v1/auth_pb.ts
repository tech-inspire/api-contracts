// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file auth/v1/auth.proto (package auth.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file auth/v1/auth.proto.
 */
export const file_auth_v1_auth: GenFile = /*@__PURE__*/
  fileDesc("ChJhdXRoL3YxL2F1dGgucHJvdG8SB2F1dGgudjEiuAEKBFVzZXISFAoCaWQYASABKAlCCLpIBXIDsAEBEj0KCHVzZXJuYW1lGAIgASgJQiu6SChyJhgoMiJeW2EtekEtWjAtOV0rKFtfLi1dP1thLXpBLVowLTldKSokEhUKBG5hbWUYAyABKAlCB7pIBHICEAESFwoKYXZhdGFyX3VybBgEIAEoCUgAiAEBEhwKC2Rlc2NyaXB0aW9uGAUgASgJQge6SARyAhABQg0KC19hdmF0YXJfdXJsInkKD1JlZ2lzdGVyUmVxdWVzdBIWCgVlbWFpbBgBIAEoCUIHukgEcgJgARIZCgh1c2VybmFtZRgCIAEoCUIHukgEcgIYKBIVCgRuYW1lGAMgASgJQge6SARyAhABEhwKCHBhc3N3b3JkGAQgASgJQgq6SAdyBRAIGIABIh8KHUVtYWlsQ29kZUNvbmZpcm1hdGlvblJlcXVpcmVkIqIBChBSZWdpc3RlclJlc3BvbnNlEjcKDmxvZ2luX3Jlc3BvbnNlGAEgASgLMh0uYXV0aC52MS5TdWNjZXNzTG9naW5SZXNwb25zZUgAEk0KG2VtYWlsX2NvbmZpcm1hdGlvbl9yZXF1aXJlZBgCIAEoCzImLmF1dGgudjEuRW1haWxDb2RlQ29uZmlybWF0aW9uUmVxdWlyZWRIAEIGCgRmbG93Ik4KE0NvbmZpcm1FbWFpbFJlcXVlc3QSFgoFZW1haWwYASABKAlCB7pIBHICYAESHwoEY29kZRgCIAEoCUIRukgOcgwyCl5bMC05XXs2fSQibAoMTG9naW5SZXF1ZXN0EhsKCHVzZXJuYW1lGAEgASgJQge6SARyAhgoSAASGAoFZW1haWwYAiABKAlCB7pIBHICYAFIABIcCghwYXNzd29yZBgDIAEoCUIKukgHcgUQCBiAAUIHCgVsb2dpbiLbAQoUU3VjY2Vzc0xvZ2luUmVzcG9uc2USFAoMYWNjZXNzX3Rva2VuGAEgASgJEjsKF2FjY2Vzc190b2tlbl9leHBpcmVzX2F0GAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIVCg1yZWZyZXNoX3Rva2VuGAMgASgJEjwKGHJlZnJlc2hfdG9rZW5fZXhwaXJlc19hdBgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASGwoEdXNlchgFIAEoCzINLmF1dGgudjEuVXNlciI1ChNSZWZyZXNoVG9rZW5SZXF1ZXN0Eh4KDXJlZnJlc2hfdG9rZW4YASABKAlCB7pIBHICEAEiLwoNTG9nb3V0UmVxdWVzdBIeCg1yZWZyZXNoX3Rva2VuGAEgASgJQge6SARyAhABIhAKDkxvZ291dFJlc3BvbnNlIi4KFFJlc2V0UGFzc3dvcmRSZXF1ZXN0EhYKBWVtYWlsGAEgASgJQge6SARyAmABIhcKFVJlc2V0UGFzc3dvcmRSZXNwb25zZSJYCh1DaGVja1Bhc3N3b3JkUmVzZXRDb2RlUmVxdWVzdBIWCgVlbWFpbBgBIAEoCUIHukgEcgJgARIfCgRjb2RlGAIgASgJQhG6SA5yDDIKXlswLTldezZ9JCIgCh5DaGVja1Bhc3N3b3JkUmVzZXRDb2RlUmVzcG9uc2UidAobQ29uZmlybVBhc3N3b3JkUmVzZXRSZXF1ZXN0EhYKBWVtYWlsGAEgASgJQge6SARyAmABEh8KBGNvZGUYAiABKAlCEbpIDnIMMgpeWzAtOV17Nn0kEhwKCHBhc3N3b3JkGAMgASgJQgq6SAdyBRAIGIABIh4KHENvbmZpcm1QYXNzd29yZFJlc2V0UmVzcG9uc2UiDgoMR2V0TWVSZXF1ZXN0Ii4KD0dldFVzZXJSZXNwb25zZRIbCgR1c2VyGAEgASgLMg0uYXV0aC52MS5Vc2VyIiYKDkdldFVzZXJSZXF1ZXN0EhQKAmlkGAEgASgJQgi6SAVyA7ABASJhChFVcGRhdGVVc2VyUmVxdWVzdBIbCgR1c2VyGAEgASgLMg0uYXV0aC52MS5Vc2VyEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayJAChdVcGxvYWRVc2VyQXZhdGFyUmVxdWVzdBIUCgxjb250ZW50X3R5cGUYASABKAkSDwoHY29udGVudBgCIAEoDCIaChhVcGxvYWRVc2VyQXZhdGFyUmVzcG9uc2UyiAcKC0F1dGhTZXJ2aWNlEj0KBUxvZ2luEhUuYXV0aC52MS5Mb2dpblJlcXVlc3QaHS5hdXRoLnYxLlN1Y2Nlc3NMb2dpblJlc3BvbnNlEj8KCFJlZ2lzdGVyEhguYXV0aC52MS5SZWdpc3RlclJlcXVlc3QaGS5hdXRoLnYxLlJlZ2lzdGVyUmVzcG9uc2USSwoMQ29uZmlybUVtYWlsEhwuYXV0aC52MS5Db25maXJtRW1haWxSZXF1ZXN0Gh0uYXV0aC52MS5TdWNjZXNzTG9naW5SZXNwb25zZRJLCgxSZWZyZXNoVG9rZW4SHC5hdXRoLnYxLlJlZnJlc2hUb2tlblJlcXVlc3QaHS5hdXRoLnYxLlN1Y2Nlc3NMb2dpblJlc3BvbnNlEjkKBkxvZ291dBIWLmF1dGgudjEuTG9nb3V0UmVxdWVzdBoXLmF1dGgudjEuTG9nb3V0UmVzcG9uc2USTgoNUmVzZXRQYXNzd29yZBIdLmF1dGgudjEuUmVzZXRQYXNzd29yZFJlcXVlc3QaHi5hdXRoLnYxLlJlc2V0UGFzc3dvcmRSZXNwb25zZRJjChRDb25maXJtUGFzc3dvcmRSZXNldBIkLmF1dGgudjEuQ29uZmlybVBhc3N3b3JkUmVzZXRSZXF1ZXN0GiUuYXV0aC52MS5Db25maXJtUGFzc3dvcmRSZXNldFJlc3BvbnNlEmkKFkNoZWNrUGFzc3dvcmRSZXNldENvZGUSJi5hdXRoLnYxLkNoZWNrUGFzc3dvcmRSZXNldENvZGVSZXF1ZXN0GicuYXV0aC52MS5DaGVja1Bhc3N3b3JkUmVzZXRDb2RlUmVzcG9uc2USOAoFR2V0TWUSFS5hdXRoLnYxLkdldE1lUmVxdWVzdBoYLmF1dGgudjEuR2V0VXNlclJlc3BvbnNlEjcKClVwZGF0ZVVzZXISGi5hdXRoLnYxLlVwZGF0ZVVzZXJSZXF1ZXN0Gg0uYXV0aC52MS5Vc2VyEjwKB0dldFVzZXISFy5hdXRoLnYxLkdldFVzZXJSZXF1ZXN0GhguYXV0aC52MS5HZXRVc2VyUmVzcG9uc2USUwoMVXBsb2FkQXZhdGFyEiAuYXV0aC52MS5VcGxvYWRVc2VyQXZhdGFyUmVxdWVzdBohLmF1dGgudjEuVXBsb2FkVXNlckF2YXRhclJlc3BvbnNlQkFaP2dpdGh1Yi5jb20vdGVjaC1pbnNwaXJlL2FwaS1jb250cmFjdHMvYXBpL2dlbi9nby9hdXRoL3YxO2F1dGh2MWIGcHJvdG8z", [file_buf_validate_validate, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * @generated from message auth.v1.User
 */
export type User = Message<"auth.v1.User"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string username = 2;
   */
  username: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: optional string avatar_url = 4;
   */
  avatarUrl?: string;

  /**
   * @generated from field: string description = 5;
   */
  description: string;
};

/**
 * Describes the message auth.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema: GenMessage<User> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 0);

/**
 * @generated from message auth.v1.RegisterRequest
 */
export type RegisterRequest = Message<"auth.v1.RegisterRequest"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string username = 2;
   */
  username: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string password = 4;
   */
  password: string;
};

/**
 * Describes the message auth.v1.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export const RegisterRequestSchema: GenMessage<RegisterRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 1);

/**
 * @generated from message auth.v1.EmailCodeConfirmationRequired
 */
export type EmailCodeConfirmationRequired = Message<"auth.v1.EmailCodeConfirmationRequired"> & {
};

/**
 * Describes the message auth.v1.EmailCodeConfirmationRequired.
 * Use `create(EmailCodeConfirmationRequiredSchema)` to create a new message.
 */
export const EmailCodeConfirmationRequiredSchema: GenMessage<EmailCodeConfirmationRequired> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 2);

/**
 * @generated from message auth.v1.RegisterResponse
 */
export type RegisterResponse = Message<"auth.v1.RegisterResponse"> & {
  /**
   * @generated from oneof auth.v1.RegisterResponse.flow
   */
  flow: {
    /**
     * @generated from field: auth.v1.SuccessLoginResponse login_response = 1;
     */
    value: SuccessLoginResponse;
    case: "loginResponse";
  } | {
    /**
     * @generated from field: auth.v1.EmailCodeConfirmationRequired email_confirmation_required = 2;
     */
    value: EmailCodeConfirmationRequired;
    case: "emailConfirmationRequired";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message auth.v1.RegisterResponse.
 * Use `create(RegisterResponseSchema)` to create a new message.
 */
export const RegisterResponseSchema: GenMessage<RegisterResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 3);

/**
 * @generated from message auth.v1.ConfirmEmailRequest
 */
export type ConfirmEmailRequest = Message<"auth.v1.ConfirmEmailRequest"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;
};

/**
 * Describes the message auth.v1.ConfirmEmailRequest.
 * Use `create(ConfirmEmailRequestSchema)` to create a new message.
 */
export const ConfirmEmailRequestSchema: GenMessage<ConfirmEmailRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 4);

/**
 * @generated from message auth.v1.LoginRequest
 */
export type LoginRequest = Message<"auth.v1.LoginRequest"> & {
  /**
   * @generated from oneof auth.v1.LoginRequest.login
   */
  login: {
    /**
     * @generated from field: string username = 1;
     */
    value: string;
    case: "username";
  } | {
    /**
     * @generated from field: string email = 2;
     */
    value: string;
    case: "email";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string password = 3;
   */
  password: string;
};

/**
 * Describes the message auth.v1.LoginRequest.
 * Use `create(LoginRequestSchema)` to create a new message.
 */
export const LoginRequestSchema: GenMessage<LoginRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 5);

/**
 * @generated from message auth.v1.SuccessLoginResponse
 */
export type SuccessLoginResponse = Message<"auth.v1.SuccessLoginResponse"> & {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  /**
   * @generated from field: google.protobuf.Timestamp access_token_expires_at = 2;
   */
  accessTokenExpiresAt?: Timestamp;

  /**
   * @generated from field: string refresh_token = 3;
   */
  refreshToken: string;

  /**
   * @generated from field: google.protobuf.Timestamp refresh_token_expires_at = 4;
   */
  refreshTokenExpiresAt?: Timestamp;

  /**
   * @generated from field: auth.v1.User user = 5;
   */
  user?: User;
};

/**
 * Describes the message auth.v1.SuccessLoginResponse.
 * Use `create(SuccessLoginResponseSchema)` to create a new message.
 */
export const SuccessLoginResponseSchema: GenMessage<SuccessLoginResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 6);

/**
 * @generated from message auth.v1.RefreshTokenRequest
 */
export type RefreshTokenRequest = Message<"auth.v1.RefreshTokenRequest"> & {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;
};

/**
 * Describes the message auth.v1.RefreshTokenRequest.
 * Use `create(RefreshTokenRequestSchema)` to create a new message.
 */
export const RefreshTokenRequestSchema: GenMessage<RefreshTokenRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 7);

/**
 * @generated from message auth.v1.LogoutRequest
 */
export type LogoutRequest = Message<"auth.v1.LogoutRequest"> & {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;
};

/**
 * Describes the message auth.v1.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export const LogoutRequestSchema: GenMessage<LogoutRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 8);

/**
 * @generated from message auth.v1.LogoutResponse
 */
export type LogoutResponse = Message<"auth.v1.LogoutResponse"> & {
};

/**
 * Describes the message auth.v1.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export const LogoutResponseSchema: GenMessage<LogoutResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 9);

/**
 * @generated from message auth.v1.ResetPasswordRequest
 */
export type ResetPasswordRequest = Message<"auth.v1.ResetPasswordRequest"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;
};

/**
 * Describes the message auth.v1.ResetPasswordRequest.
 * Use `create(ResetPasswordRequestSchema)` to create a new message.
 */
export const ResetPasswordRequestSchema: GenMessage<ResetPasswordRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 10);

/**
 * @generated from message auth.v1.ResetPasswordResponse
 */
export type ResetPasswordResponse = Message<"auth.v1.ResetPasswordResponse"> & {
};

/**
 * Describes the message auth.v1.ResetPasswordResponse.
 * Use `create(ResetPasswordResponseSchema)` to create a new message.
 */
export const ResetPasswordResponseSchema: GenMessage<ResetPasswordResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 11);

/**
 * @generated from message auth.v1.CheckPasswordResetCodeRequest
 */
export type CheckPasswordResetCodeRequest = Message<"auth.v1.CheckPasswordResetCodeRequest"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;
};

/**
 * Describes the message auth.v1.CheckPasswordResetCodeRequest.
 * Use `create(CheckPasswordResetCodeRequestSchema)` to create a new message.
 */
export const CheckPasswordResetCodeRequestSchema: GenMessage<CheckPasswordResetCodeRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 12);

/**
 * @generated from message auth.v1.CheckPasswordResetCodeResponse
 */
export type CheckPasswordResetCodeResponse = Message<"auth.v1.CheckPasswordResetCodeResponse"> & {
};

/**
 * Describes the message auth.v1.CheckPasswordResetCodeResponse.
 * Use `create(CheckPasswordResetCodeResponseSchema)` to create a new message.
 */
export const CheckPasswordResetCodeResponseSchema: GenMessage<CheckPasswordResetCodeResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 13);

/**
 * @generated from message auth.v1.ConfirmPasswordResetRequest
 */
export type ConfirmPasswordResetRequest = Message<"auth.v1.ConfirmPasswordResetRequest"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * @generated from field: string password = 3;
   */
  password: string;
};

/**
 * Describes the message auth.v1.ConfirmPasswordResetRequest.
 * Use `create(ConfirmPasswordResetRequestSchema)` to create a new message.
 */
export const ConfirmPasswordResetRequestSchema: GenMessage<ConfirmPasswordResetRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 14);

/**
 * @generated from message auth.v1.ConfirmPasswordResetResponse
 */
export type ConfirmPasswordResetResponse = Message<"auth.v1.ConfirmPasswordResetResponse"> & {
};

/**
 * Describes the message auth.v1.ConfirmPasswordResetResponse.
 * Use `create(ConfirmPasswordResetResponseSchema)` to create a new message.
 */
export const ConfirmPasswordResetResponseSchema: GenMessage<ConfirmPasswordResetResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 15);

/**
 * @generated from message auth.v1.GetMeRequest
 */
export type GetMeRequest = Message<"auth.v1.GetMeRequest"> & {
};

/**
 * Describes the message auth.v1.GetMeRequest.
 * Use `create(GetMeRequestSchema)` to create a new message.
 */
export const GetMeRequestSchema: GenMessage<GetMeRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 16);

/**
 * @generated from message auth.v1.GetUserResponse
 */
export type GetUserResponse = Message<"auth.v1.GetUserResponse"> & {
  /**
   * @generated from field: auth.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message auth.v1.GetUserResponse.
 * Use `create(GetUserResponseSchema)` to create a new message.
 */
export const GetUserResponseSchema: GenMessage<GetUserResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 17);

/**
 * @generated from message auth.v1.GetUserRequest
 */
export type GetUserRequest = Message<"auth.v1.GetUserRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message auth.v1.GetUserRequest.
 * Use `create(GetUserRequestSchema)` to create a new message.
 */
export const GetUserRequestSchema: GenMessage<GetUserRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 18);

/**
 * @generated from message auth.v1.UpdateUserRequest
 */
export type UpdateUserRequest = Message<"auth.v1.UpdateUserRequest"> & {
  /**
   * @generated from field: auth.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message auth.v1.UpdateUserRequest.
 * Use `create(UpdateUserRequestSchema)` to create a new message.
 */
export const UpdateUserRequestSchema: GenMessage<UpdateUserRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 19);

/**
 * @generated from message auth.v1.UploadUserAvatarRequest
 */
export type UploadUserAvatarRequest = Message<"auth.v1.UploadUserAvatarRequest"> & {
  /**
   * @generated from field: string content_type = 1;
   */
  contentType: string;

  /**
   * @generated from field: bytes content = 2;
   */
  content: Uint8Array;
};

/**
 * Describes the message auth.v1.UploadUserAvatarRequest.
 * Use `create(UploadUserAvatarRequestSchema)` to create a new message.
 */
export const UploadUserAvatarRequestSchema: GenMessage<UploadUserAvatarRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 20);

/**
 * @generated from message auth.v1.UploadUserAvatarResponse
 */
export type UploadUserAvatarResponse = Message<"auth.v1.UploadUserAvatarResponse"> & {
};

/**
 * Describes the message auth.v1.UploadUserAvatarResponse.
 * Use `create(UploadUserAvatarResponseSchema)` to create a new message.
 */
export const UploadUserAvatarResponseSchema: GenMessage<UploadUserAvatarResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 21);

/**
 * @generated from service auth.v1.AuthService
 */
export const AuthService: GenService<{
  /**
   * @generated from rpc auth.v1.AuthService.Login
   */
  login: {
    methodKind: "unary";
    input: typeof LoginRequestSchema;
    output: typeof SuccessLoginResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.Register
   */
  register: {
    methodKind: "unary";
    input: typeof RegisterRequestSchema;
    output: typeof RegisterResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.ConfirmEmail
   */
  confirmEmail: {
    methodKind: "unary";
    input: typeof ConfirmEmailRequestSchema;
    output: typeof SuccessLoginResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.RefreshToken
   */
  refreshToken: {
    methodKind: "unary";
    input: typeof RefreshTokenRequestSchema;
    output: typeof SuccessLoginResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.Logout
   */
  logout: {
    methodKind: "unary";
    input: typeof LogoutRequestSchema;
    output: typeof LogoutResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.ResetPassword
   */
  resetPassword: {
    methodKind: "unary";
    input: typeof ResetPasswordRequestSchema;
    output: typeof ResetPasswordResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.ConfirmPasswordReset
   */
  confirmPasswordReset: {
    methodKind: "unary";
    input: typeof ConfirmPasswordResetRequestSchema;
    output: typeof ConfirmPasswordResetResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.CheckPasswordResetCode
   */
  checkPasswordResetCode: {
    methodKind: "unary";
    input: typeof CheckPasswordResetCodeRequestSchema;
    output: typeof CheckPasswordResetCodeResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.GetMe
   */
  getMe: {
    methodKind: "unary";
    input: typeof GetMeRequestSchema;
    output: typeof GetUserResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.UpdateUser
   */
  updateUser: {
    methodKind: "unary";
    input: typeof UpdateUserRequestSchema;
    output: typeof UserSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.GetUser
   */
  getUser: {
    methodKind: "unary";
    input: typeof GetUserRequestSchema;
    output: typeof GetUserResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.UploadAvatar
   */
  uploadAvatar: {
    methodKind: "unary";
    input: typeof UploadUserAvatarRequestSchema;
    output: typeof UploadUserAvatarResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_auth_v1_auth, 0);

