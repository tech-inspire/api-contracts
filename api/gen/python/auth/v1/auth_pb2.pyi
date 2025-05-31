import datetime

from auth.v1 import fields_pb2 as _fields_pb2
from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class User(_message.Message):
    __slots__ = ("id", "username", "name", "avatar_url", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AVATAR_URL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    username: _fields_pb2.Username
    name: _fields_pb2.Name
    avatar_url: str
    description: str
    def __init__(self, id: _Optional[str] = ..., username: _Optional[_Union[_fields_pb2.Username, _Mapping]] = ..., name: _Optional[_Union[_fields_pb2.Name, _Mapping]] = ..., avatar_url: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class RegisterRequest(_message.Message):
    __slots__ = ("email", "username", "name", "password")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: _fields_pb2.Email
    username: _fields_pb2.Username
    name: _fields_pb2.Name
    password: _fields_pb2.Password
    def __init__(self, email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ..., username: _Optional[_Union[_fields_pb2.Username, _Mapping]] = ..., name: _Optional[_Union[_fields_pb2.Name, _Mapping]] = ..., password: _Optional[_Union[_fields_pb2.Password, _Mapping]] = ...) -> None: ...

class EmailCodeConfirmationRequired(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class RegisterResponse(_message.Message):
    __slots__ = ("login_response", "email_confirmation_required")
    LOGIN_RESPONSE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_CONFIRMATION_REQUIRED_FIELD_NUMBER: _ClassVar[int]
    login_response: SuccessLoginResponse
    email_confirmation_required: EmailCodeConfirmationRequired
    def __init__(self, login_response: _Optional[_Union[SuccessLoginResponse, _Mapping]] = ..., email_confirmation_required: _Optional[_Union[EmailCodeConfirmationRequired, _Mapping]] = ...) -> None: ...

class ConfirmEmailRequest(_message.Message):
    __slots__ = ("email", "code")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    email: _fields_pb2.Email
    code: _fields_pb2.ConfirmationCode
    def __init__(self, email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ..., code: _Optional[_Union[_fields_pb2.ConfirmationCode, _Mapping]] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ("username", "email", "password")
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    username: _fields_pb2.Username
    email: _fields_pb2.Email
    password: str
    def __init__(self, username: _Optional[_Union[_fields_pb2.Username, _Mapping]] = ..., email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ..., password: _Optional[str] = ...) -> None: ...

class SuccessLoginResponse(_message.Message):
    __slots__ = ("access_token", "access_token_expires_at", "refresh_token", "refresh_token_expires_at", "user")
    ACCESS_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    USER_FIELD_NUMBER: _ClassVar[int]
    access_token: str
    access_token_expires_at: _timestamp_pb2.Timestamp
    refresh_token: str
    refresh_token_expires_at: _timestamp_pb2.Timestamp
    user: User
    def __init__(self, access_token: _Optional[str] = ..., access_token_expires_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., refresh_token: _Optional[str] = ..., refresh_token_expires_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class RefreshTokenRequest(_message.Message):
    __slots__ = ("refresh_token",)
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    refresh_token: str
    def __init__(self, refresh_token: _Optional[str] = ...) -> None: ...

class LogoutRequest(_message.Message):
    __slots__ = ("refresh_token",)
    REFRESH_TOKEN_FIELD_NUMBER: _ClassVar[int]
    refresh_token: str
    def __init__(self, refresh_token: _Optional[str] = ...) -> None: ...

class LogoutResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ResetPasswordRequest(_message.Message):
    __slots__ = ("email",)
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: _fields_pb2.Email
    def __init__(self, email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ...) -> None: ...

class ResetPasswordResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class CheckPasswordResetCodeRequest(_message.Message):
    __slots__ = ("email", "code")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    email: _fields_pb2.Email
    code: _fields_pb2.ConfirmationCode
    def __init__(self, email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ..., code: _Optional[_Union[_fields_pb2.ConfirmationCode, _Mapping]] = ...) -> None: ...

class CheckPasswordResetCodeResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ConfirmPasswordResetRequest(_message.Message):
    __slots__ = ("email", "code", "password")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    email: _fields_pb2.Email
    code: _fields_pb2.ConfirmationCode
    password: _fields_pb2.Password
    def __init__(self, email: _Optional[_Union[_fields_pb2.Email, _Mapping]] = ..., code: _Optional[_Union[_fields_pb2.ConfirmationCode, _Mapping]] = ..., password: _Optional[_Union[_fields_pb2.Password, _Mapping]] = ...) -> None: ...

class ConfirmPasswordResetResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetMeRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetUserResponse(_message.Message):
    __slots__ = ("user",)
    USER_FIELD_NUMBER: _ClassVar[int]
    user: User
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ...) -> None: ...

class GetUserRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class UpdateUserRequest(_message.Message):
    __slots__ = ("user", "update_mask")
    USER_FIELD_NUMBER: _ClassVar[int]
    UPDATE_MASK_FIELD_NUMBER: _ClassVar[int]
    user: User
    update_mask: _field_mask_pb2.FieldMask
    def __init__(self, user: _Optional[_Union[User, _Mapping]] = ..., update_mask: _Optional[_Union[_field_mask_pb2.FieldMask, _Mapping]] = ...) -> None: ...

class UploadUserAvatarRequest(_message.Message):
    __slots__ = ("content_type", "content")
    CONTENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    CONTENT_FIELD_NUMBER: _ClassVar[int]
    content_type: str
    content: bytes
    def __init__(self, content_type: _Optional[str] = ..., content: _Optional[bytes] = ...) -> None: ...

class UploadUserAvatarResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
