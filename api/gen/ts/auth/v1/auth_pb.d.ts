// @generated by protoc-gen-es v2.2.2 with parameter "import_extension=js"
// @generated from file auth/v1/auth.proto (package auth.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { ConfirmationCode, Email, Name, Password, Username } from "./fields_pb.js";
import type { FieldMask, Timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file auth/v1/auth.proto.
 */
export declare const file_auth_v1_auth: GenFile;

/**
 * @generated from message auth.v1.User
 */
export declare type User = Message<"auth.v1.User"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: auth.v1.Username username = 2;
   */
  username?: Username;

  /**
   * @generated from field: auth.v1.Name name = 3;
   */
  name?: Name;

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
export declare const UserSchema: GenMessage<User>;

/**
 * @generated from message auth.v1.RegisterRequest
 */
export declare type RegisterRequest = Message<"auth.v1.RegisterRequest"> & {
  /**
   * @generated from field: auth.v1.Email email = 1;
   */
  email?: Email;

  /**
   * @generated from field: auth.v1.Username username = 2;
   */
  username?: Username;

  /**
   * @generated from field: auth.v1.Name name = 3;
   */
  name?: Name;

  /**
   * @generated from field: auth.v1.Password password = 4;
   */
  password?: Password;
};

/**
 * Describes the message auth.v1.RegisterRequest.
 * Use `create(RegisterRequestSchema)` to create a new message.
 */
export declare const RegisterRequestSchema: GenMessage<RegisterRequest>;

/**
 * @generated from message auth.v1.EmailCodeConfirmationRequired
 */
export declare type EmailCodeConfirmationRequired = Message<"auth.v1.EmailCodeConfirmationRequired"> & {
};

/**
 * Describes the message auth.v1.EmailCodeConfirmationRequired.
 * Use `create(EmailCodeConfirmationRequiredSchema)` to create a new message.
 */
export declare const EmailCodeConfirmationRequiredSchema: GenMessage<EmailCodeConfirmationRequired>;

/**
 * @generated from message auth.v1.RegisterResponse
 */
export declare type RegisterResponse = Message<"auth.v1.RegisterResponse"> & {
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
export declare const RegisterResponseSchema: GenMessage<RegisterResponse>;

/**
 * @generated from message auth.v1.ConfirmEmailRequest
 */
export declare type ConfirmEmailRequest = Message<"auth.v1.ConfirmEmailRequest"> & {
  /**
   * @generated from field: auth.v1.Email email = 1;
   */
  email?: Email;

  /**
   * @generated from field: auth.v1.ConfirmationCode code = 2;
   */
  code?: ConfirmationCode;
};

/**
 * Describes the message auth.v1.ConfirmEmailRequest.
 * Use `create(ConfirmEmailRequestSchema)` to create a new message.
 */
export declare const ConfirmEmailRequestSchema: GenMessage<ConfirmEmailRequest>;

/**
 * @generated from message auth.v1.LoginRequest
 */
export declare type LoginRequest = Message<"auth.v1.LoginRequest"> & {
  /**
   * @generated from oneof auth.v1.LoginRequest.login
   */
  login: {
    /**
     * @generated from field: auth.v1.Username username = 1;
     */
    value: Username;
    case: "username";
  } | {
    /**
     * @generated from field: auth.v1.Email email = 2;
     */
    value: Email;
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
export declare const LoginRequestSchema: GenMessage<LoginRequest>;

/**
 * @generated from message auth.v1.SuccessLoginResponse
 */
export declare type SuccessLoginResponse = Message<"auth.v1.SuccessLoginResponse"> & {
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
export declare const SuccessLoginResponseSchema: GenMessage<SuccessLoginResponse>;

/**
 * @generated from message auth.v1.RefreshTokenRequest
 */
export declare type RefreshTokenRequest = Message<"auth.v1.RefreshTokenRequest"> & {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;
};

/**
 * Describes the message auth.v1.RefreshTokenRequest.
 * Use `create(RefreshTokenRequestSchema)` to create a new message.
 */
export declare const RefreshTokenRequestSchema: GenMessage<RefreshTokenRequest>;

/**
 * @generated from message auth.v1.LogoutRequest
 */
export declare type LogoutRequest = Message<"auth.v1.LogoutRequest"> & {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;
};

/**
 * Describes the message auth.v1.LogoutRequest.
 * Use `create(LogoutRequestSchema)` to create a new message.
 */
export declare const LogoutRequestSchema: GenMessage<LogoutRequest>;

/**
 * @generated from message auth.v1.LogoutResponse
 */
export declare type LogoutResponse = Message<"auth.v1.LogoutResponse"> & {
};

/**
 * Describes the message auth.v1.LogoutResponse.
 * Use `create(LogoutResponseSchema)` to create a new message.
 */
export declare const LogoutResponseSchema: GenMessage<LogoutResponse>;

/**
 * @generated from message auth.v1.ResetPasswordRequest
 */
export declare type ResetPasswordRequest = Message<"auth.v1.ResetPasswordRequest"> & {
  /**
   * @generated from field: auth.v1.Email email = 1;
   */
  email?: Email;
};

/**
 * Describes the message auth.v1.ResetPasswordRequest.
 * Use `create(ResetPasswordRequestSchema)` to create a new message.
 */
export declare const ResetPasswordRequestSchema: GenMessage<ResetPasswordRequest>;

/**
 * @generated from message auth.v1.ResetPasswordResponse
 */
export declare type ResetPasswordResponse = Message<"auth.v1.ResetPasswordResponse"> & {
};

/**
 * Describes the message auth.v1.ResetPasswordResponse.
 * Use `create(ResetPasswordResponseSchema)` to create a new message.
 */
export declare const ResetPasswordResponseSchema: GenMessage<ResetPasswordResponse>;

/**
 * @generated from message auth.v1.CheckPasswordResetCodeRequest
 */
export declare type CheckPasswordResetCodeRequest = Message<"auth.v1.CheckPasswordResetCodeRequest"> & {
  /**
   * @generated from field: auth.v1.Email email = 1;
   */
  email?: Email;

  /**
   * @generated from field: auth.v1.ConfirmationCode code = 2;
   */
  code?: ConfirmationCode;
};

/**
 * Describes the message auth.v1.CheckPasswordResetCodeRequest.
 * Use `create(CheckPasswordResetCodeRequestSchema)` to create a new message.
 */
export declare const CheckPasswordResetCodeRequestSchema: GenMessage<CheckPasswordResetCodeRequest>;

/**
 * @generated from message auth.v1.CheckPasswordResetCodeResponse
 */
export declare type CheckPasswordResetCodeResponse = Message<"auth.v1.CheckPasswordResetCodeResponse"> & {
};

/**
 * Describes the message auth.v1.CheckPasswordResetCodeResponse.
 * Use `create(CheckPasswordResetCodeResponseSchema)` to create a new message.
 */
export declare const CheckPasswordResetCodeResponseSchema: GenMessage<CheckPasswordResetCodeResponse>;

/**
 * @generated from message auth.v1.ConfirmPasswordResetRequest
 */
export declare type ConfirmPasswordResetRequest = Message<"auth.v1.ConfirmPasswordResetRequest"> & {
  /**
   * @generated from field: auth.v1.Email email = 1;
   */
  email?: Email;

  /**
   * @generated from field: auth.v1.ConfirmationCode code = 2;
   */
  code?: ConfirmationCode;

  /**
   * @generated from field: auth.v1.Password password = 3;
   */
  password?: Password;
};

/**
 * Describes the message auth.v1.ConfirmPasswordResetRequest.
 * Use `create(ConfirmPasswordResetRequestSchema)` to create a new message.
 */
export declare const ConfirmPasswordResetRequestSchema: GenMessage<ConfirmPasswordResetRequest>;

/**
 * @generated from message auth.v1.ConfirmPasswordResetResponse
 */
export declare type ConfirmPasswordResetResponse = Message<"auth.v1.ConfirmPasswordResetResponse"> & {
};

/**
 * Describes the message auth.v1.ConfirmPasswordResetResponse.
 * Use `create(ConfirmPasswordResetResponseSchema)` to create a new message.
 */
export declare const ConfirmPasswordResetResponseSchema: GenMessage<ConfirmPasswordResetResponse>;

/**
 * @generated from message auth.v1.GetMeRequest
 */
export declare type GetMeRequest = Message<"auth.v1.GetMeRequest"> & {
};

/**
 * Describes the message auth.v1.GetMeRequest.
 * Use `create(GetMeRequestSchema)` to create a new message.
 */
export declare const GetMeRequestSchema: GenMessage<GetMeRequest>;

/**
 * @generated from message auth.v1.GetUserResponse
 */
export declare type GetUserResponse = Message<"auth.v1.GetUserResponse"> & {
  /**
   * @generated from field: auth.v1.User user = 1;
   */
  user?: User;
};

/**
 * Describes the message auth.v1.GetUserResponse.
 * Use `create(GetUserResponseSchema)` to create a new message.
 */
export declare const GetUserResponseSchema: GenMessage<GetUserResponse>;

/**
 * @generated from message auth.v1.GetUserRequest
 */
export declare type GetUserRequest = Message<"auth.v1.GetUserRequest"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message auth.v1.GetUserRequest.
 * Use `create(GetUserRequestSchema)` to create a new message.
 */
export declare const GetUserRequestSchema: GenMessage<GetUserRequest>;

/**
 * @generated from message auth.v1.UpdateUserRequest
 */
export declare type UpdateUserRequest = Message<"auth.v1.UpdateUserRequest"> & {
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
export declare const UpdateUserRequestSchema: GenMessage<UpdateUserRequest>;

/**
 * @generated from message auth.v1.UploadUserAvatarRequest
 */
export declare type UploadUserAvatarRequest = Message<"auth.v1.UploadUserAvatarRequest"> & {
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
export declare const UploadUserAvatarRequestSchema: GenMessage<UploadUserAvatarRequest>;

/**
 * @generated from message auth.v1.UploadUserAvatarResponse
 */
export declare type UploadUserAvatarResponse = Message<"auth.v1.UploadUserAvatarResponse"> & {
};

/**
 * Describes the message auth.v1.UploadUserAvatarResponse.
 * Use `create(UploadUserAvatarResponseSchema)` to create a new message.
 */
export declare const UploadUserAvatarResponseSchema: GenMessage<UploadUserAvatarResponse>;

/**
 * @generated from service auth.v1.AuthService
 */
export declare const AuthService: GenService<{
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
}>;

