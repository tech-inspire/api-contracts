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
  fileDesc("ChJhdXRoL3YxL2F1dGgucHJvdG8SB2F1dGgudjEiuAEKBFVzZXISFAoCaWQYASABKAlCCLpIBXIDsAEBEj0KCHVzZXJuYW1lGAIgASgJQiu6SChyJhgoMiJeW2EtekEtWjAtOV0rKFtfLi1dP1thLXpBLVowLTldKSokEhUKBG5hbWUYAyABKAlCB7pIBHICEAESFwoKYXZhdGFyX3VybBgEIAEoCUgAiAEBEhwKC2Rlc2NyaXB0aW9uGAUgASgJQge6SARyAhABQg0KC19hdmF0YXJfdXJsItEBCg9SZWdpc3RlclJlcXVlc3QSFgoFZW1haWwYASABKAlCB7pIBHICYAESPQoIdXNlcm5hbWUYAiABKAlCK7pIKHImGCgyIl5bYS16QS1aMC05XSsoW18uLV0/W2EtekEtWjAtOV0pKiQSFQoEbmFtZRgDIAEoCUIHukgEcgIQARJQCghwYXNzd29yZBgEIAEoCUI+ukg7cjkQCBiAATIyXigoPz1cUyo/W0EtWl0pKD89XFMqP1thLXpdKSg/PVxTKj9bMC05XSkuezgsfSlcUyQiHwodRW1haWxDb2RlQ29uZmlybWF0aW9uUmVxdWlyZWQiogEKEFJlZ2lzdGVyUmVzcG9uc2USNwoObG9naW5fcmVzcG9uc2UYASABKAsyHS5hdXRoLnYxLlN1Y2Nlc3NMb2dpblJlc3BvbnNlSAASTQobZW1haWxfY29uZmlybWF0aW9uX3JlcXVpcmVkGAIgASgLMiYuYXV0aC52MS5FbWFpbENvZGVDb25maXJtYXRpb25SZXF1aXJlZEgAQgYKBGZsb3ciTgoTQ29uZmlybUVtYWlsUmVxdWVzdBIWCgVlbWFpbBgBIAEoCUIHukgEcgJgARIfCgRjb2RlGAIgASgJQhG6SA5yDDIKXlswLTldezZ9JCLEAQoMTG9naW5SZXF1ZXN0Ej8KCHVzZXJuYW1lGAEgASgJQiu6SChyJhgoMiJeW2EtekEtWjAtOV0rKFtfLi1dP1thLXpBLVowLTldKSokSAASGAoFZW1haWwYAiABKAlCB7pIBHICYAFIABJQCghwYXNzd29yZBgDIAEoCUI+ukg7cjkQCBiAATIyXigoPz1cUyo/W0EtWl0pKD89XFMqP1thLXpdKSg/PVxTKj9bMC05XSkuezgsfSlcUyRCBwoFbG9naW4i2wEKFFN1Y2Nlc3NMb2dpblJlc3BvbnNlEhQKDGFjY2Vzc190b2tlbhgBIAEoCRI7ChdhY2Nlc3NfdG9rZW5fZXhwaXJlc19hdBgCIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASFQoNcmVmcmVzaF90b2tlbhgDIAEoCRI8ChhyZWZyZXNoX3Rva2VuX2V4cGlyZXNfYXQYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhsKBHVzZXIYBSABKAsyDS5hdXRoLnYxLlVzZXIiNQoTUmVmcmVzaFRva2VuUmVxdWVzdBIeCg1yZWZyZXNoX3Rva2VuGAEgASgJQge6SARyAhABIi8KDUxvZ291dFJlcXVlc3QSHgoNcmVmcmVzaF90b2tlbhgBIAEoCUIHukgEcgIQASIQCg5Mb2dvdXRSZXNwb25zZSIuChRSZXNldFBhc3N3b3JkUmVxdWVzdBIWCgVlbWFpbBgBIAEoCUIHukgEcgJgASIXChVSZXNldFBhc3N3b3JkUmVzcG9uc2UiWAodQ2hlY2tQYXNzd29yZFJlc2V0Q29kZVJlcXVlc3QSFgoFZW1haWwYASABKAlCB7pIBHICYAESHwoEY29kZRgCIAEoCUIRukgOcgwyCl5bMC05XXs2fSQiIAoeQ2hlY2tQYXNzd29yZFJlc2V0Q29kZVJlc3BvbnNlIqgBChtDb25maXJtUGFzc3dvcmRSZXNldFJlcXVlc3QSFgoFZW1haWwYASABKAlCB7pIBHICYAESHwoEY29kZRgCIAEoCUIRukgOcgwyCl5bMC05XXs2fSQSUAoIcGFzc3dvcmQYAyABKAlCPrpIO3I5EAgYgAEyMl4oKD89XFMqP1tBLVpdKSg/PVxTKj9bYS16XSkoPz1cUyo/WzAtOV0pLns4LH0pXFMkIh4KHENvbmZpcm1QYXNzd29yZFJlc2V0UmVzcG9uc2UiDgoMR2V0TWVSZXF1ZXN0Ii4KD0dldFVzZXJSZXNwb25zZRIbCgR1c2VyGAEgASgLMg0uYXV0aC52MS5Vc2VyIiYKDkdldFVzZXJSZXF1ZXN0EhQKAmlkGAEgASgJQgi6SAVyA7ABASJhChFVcGRhdGVVc2VyUmVxdWVzdBIbCgR1c2VyGAEgASgLMg0uYXV0aC52MS5Vc2VyEi8KC3VwZGF0ZV9tYXNrGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFzayJCChdVcGxvYWRVc2VyQXZhdGFyUmVxdWVzdBIRCglmaWxlX3NpemUYASABKAUSFAoMY29udGVudF90eXBlGAIgASgJIjgKGFVwbG9hZFVzZXJBdmF0YXJSZXNwb25zZRIcChRwcmVzaWduZWRfdXBsb2FkX3VybBgBIAEoCSIvCh9Db21wbGV0ZVVzZXJBdmF0YXJVcGxvYWRSZXF1ZXN0EgwKBGV0YWcYASABKAkiNgogQ29tcGxldGVVc2VyQXZhdGFyVXBsb2FkUmVzcG9uc2USEgoKYXZhdGFyX3VybBgBIAEoCTL9BwoLQXV0aFNlcnZpY2USPQoFTG9naW4SFS5hdXRoLnYxLkxvZ2luUmVxdWVzdBodLmF1dGgudjEuU3VjY2Vzc0xvZ2luUmVzcG9uc2USPwoIUmVnaXN0ZXISGC5hdXRoLnYxLlJlZ2lzdGVyUmVxdWVzdBoZLmF1dGgudjEuUmVnaXN0ZXJSZXNwb25zZRJLCgxDb25maXJtRW1haWwSHC5hdXRoLnYxLkNvbmZpcm1FbWFpbFJlcXVlc3QaHS5hdXRoLnYxLlN1Y2Nlc3NMb2dpblJlc3BvbnNlEksKDFJlZnJlc2hUb2tlbhIcLmF1dGgudjEuUmVmcmVzaFRva2VuUmVxdWVzdBodLmF1dGgudjEuU3VjY2Vzc0xvZ2luUmVzcG9uc2USOQoGTG9nb3V0EhYuYXV0aC52MS5Mb2dvdXRSZXF1ZXN0GhcuYXV0aC52MS5Mb2dvdXRSZXNwb25zZRJOCg1SZXNldFBhc3N3b3JkEh0uYXV0aC52MS5SZXNldFBhc3N3b3JkUmVxdWVzdBoeLmF1dGgudjEuUmVzZXRQYXNzd29yZFJlc3BvbnNlEmMKFENvbmZpcm1QYXNzd29yZFJlc2V0EiQuYXV0aC52MS5Db25maXJtUGFzc3dvcmRSZXNldFJlcXVlc3QaJS5hdXRoLnYxLkNvbmZpcm1QYXNzd29yZFJlc2V0UmVzcG9uc2USaQoWQ2hlY2tQYXNzd29yZFJlc2V0Q29kZRImLmF1dGgudjEuQ2hlY2tQYXNzd29yZFJlc2V0Q29kZVJlcXVlc3QaJy5hdXRoLnYxLkNoZWNrUGFzc3dvcmRSZXNldENvZGVSZXNwb25zZRI4CgVHZXRNZRIVLmF1dGgudjEuR2V0TWVSZXF1ZXN0GhguYXV0aC52MS5HZXRVc2VyUmVzcG9uc2USNwoKVXBkYXRlVXNlchIaLmF1dGgudjEuVXBkYXRlVXNlclJlcXVlc3QaDS5hdXRoLnYxLlVzZXISPAoHR2V0VXNlchIXLmF1dGgudjEuR2V0VXNlclJlcXVlc3QaGC5hdXRoLnYxLkdldFVzZXJSZXNwb25zZRJXChBVcGxvYWRVc2VyQXZhdGFyEiAuYXV0aC52MS5VcGxvYWRVc2VyQXZhdGFyUmVxdWVzdBohLmF1dGgudjEuVXBsb2FkVXNlckF2YXRhclJlc3BvbnNlEm8KGENvbXBsZXRlVXNlckF2YXRhclVwbG9hZBIoLmF1dGgudjEuQ29tcGxldGVVc2VyQXZhdGFyVXBsb2FkUmVxdWVzdBopLmF1dGgudjEuQ29tcGxldGVVc2VyQXZhdGFyVXBsb2FkUmVzcG9uc2VCQVo/Z2l0aHViLmNvbS90ZWNoLWluc3BpcmUvYXBpLWNvbnRyYWN0cy9hcGkvZ2VuL2dvL2F1dGgvdjE7YXV0aHYxYgZwcm90bzM", [file_buf_validate_validate, file_google_protobuf_timestamp, file_google_protobuf_field_mask]);

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
   * @generated from field: int32 file_size = 1;
   */
  fileSize: number;

  /**
   * @generated from field: string content_type = 2;
   */
  contentType: string;
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
  /**
   * @generated from field: string presigned_upload_url = 1;
   */
  presignedUploadUrl: string;
};

/**
 * Describes the message auth.v1.UploadUserAvatarResponse.
 * Use `create(UploadUserAvatarResponseSchema)` to create a new message.
 */
export const UploadUserAvatarResponseSchema: GenMessage<UploadUserAvatarResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 21);

/**
 * @generated from message auth.v1.CompleteUserAvatarUploadRequest
 */
export type CompleteUserAvatarUploadRequest = Message<"auth.v1.CompleteUserAvatarUploadRequest"> & {
  /**
   * @generated from field: string etag = 1;
   */
  etag: string;
};

/**
 * Describes the message auth.v1.CompleteUserAvatarUploadRequest.
 * Use `create(CompleteUserAvatarUploadRequestSchema)` to create a new message.
 */
export const CompleteUserAvatarUploadRequestSchema: GenMessage<CompleteUserAvatarUploadRequest> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 22);

/**
 * @generated from message auth.v1.CompleteUserAvatarUploadResponse
 */
export type CompleteUserAvatarUploadResponse = Message<"auth.v1.CompleteUserAvatarUploadResponse"> & {
  /**
   * @generated from field: string avatar_url = 1;
   */
  avatarUrl: string;
};

/**
 * Describes the message auth.v1.CompleteUserAvatarUploadResponse.
 * Use `create(CompleteUserAvatarUploadResponseSchema)` to create a new message.
 */
export const CompleteUserAvatarUploadResponseSchema: GenMessage<CompleteUserAvatarUploadResponse> = /*@__PURE__*/
  messageDesc(file_auth_v1_auth, 23);

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
   * @generated from rpc auth.v1.AuthService.UploadUserAvatar
   */
  uploadUserAvatar: {
    methodKind: "unary";
    input: typeof UploadUserAvatarRequestSchema;
    output: typeof UploadUserAvatarResponseSchema;
  },
  /**
   * @generated from rpc auth.v1.AuthService.CompleteUserAvatarUpload
   */
  completeUserAvatarUpload: {
    methodKind: "unary";
    input: typeof CompleteUserAvatarUploadRequestSchema;
    output: typeof CompleteUserAvatarUploadResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_auth_v1_auth, 0);

