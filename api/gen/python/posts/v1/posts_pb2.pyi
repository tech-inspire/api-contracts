import datetime

from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class VariantType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VARIANT_TYPE_UNSPECIFIED: _ClassVar[VariantType]
    ORIGINAL: _ClassVar[VariantType]
    THUMBNAIL: _ClassVar[VariantType]
VARIANT_TYPE_UNSPECIFIED: VariantType
ORIGINAL: VariantType
THUMBNAIL: VariantType

class ImageVariant(_message.Message):
    __slots__ = ("url", "width", "height", "size", "variant_type")
    URL_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    VARIANT_TYPE_FIELD_NUMBER: _ClassVar[int]
    url: str
    width: int
    height: int
    size: int
    variant_type: VariantType
    def __init__(self, url: _Optional[str] = ..., width: _Optional[int] = ..., height: _Optional[int] = ..., size: _Optional[int] = ..., variant_type: _Optional[_Union[VariantType, str]] = ...) -> None: ...

class Post(_message.Message):
    __slots__ = ("post_id", "author_id", "images", "soundcloud_song", "soundcloud_song_start", "description", "created_at")
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    AUTHOR_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    SOUNDCLOUD_SONG_FIELD_NUMBER: _ClassVar[int]
    SOUNDCLOUD_SONG_START_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    author_id: str
    images: _containers.RepeatedCompositeFieldContainer[ImageVariant]
    soundcloud_song: str
    soundcloud_song_start: int
    description: str
    created_at: _timestamp_pb2.Timestamp
    def __init__(self, post_id: _Optional[str] = ..., author_id: _Optional[str] = ..., images: _Optional[_Iterable[_Union[ImageVariant, _Mapping]]] = ..., soundcloud_song: _Optional[str] = ..., soundcloud_song_start: _Optional[int] = ..., description: _Optional[str] = ..., created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class AddPostRequest(_message.Message):
    __slots__ = ("upload_session_key", "image_width", "image_height", "image_size", "soundcloud_song", "soundcloud_song_start", "description")
    UPLOAD_SESSION_KEY_FIELD_NUMBER: _ClassVar[int]
    IMAGE_WIDTH_FIELD_NUMBER: _ClassVar[int]
    IMAGE_HEIGHT_FIELD_NUMBER: _ClassVar[int]
    IMAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    SOUNDCLOUD_SONG_FIELD_NUMBER: _ClassVar[int]
    SOUNDCLOUD_SONG_START_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    upload_session_key: str
    image_width: int
    image_height: int
    image_size: int
    soundcloud_song: str
    soundcloud_song_start: int
    description: str
    def __init__(self, upload_session_key: _Optional[str] = ..., image_width: _Optional[int] = ..., image_height: _Optional[int] = ..., image_size: _Optional[int] = ..., soundcloud_song: _Optional[str] = ..., soundcloud_song_start: _Optional[int] = ..., description: _Optional[str] = ...) -> None: ...

class AddPostResponse(_message.Message):
    __slots__ = ("post",)
    POST_FIELD_NUMBER: _ClassVar[int]
    post: Post
    def __init__(self, post: _Optional[_Union[Post, _Mapping]] = ...) -> None: ...

class GetPostByIDRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class GetPostByIDResponse(_message.Message):
    __slots__ = ("post",)
    POST_FIELD_NUMBER: _ClassVar[int]
    post: Post
    def __init__(self, post: _Optional[_Union[Post, _Mapping]] = ...) -> None: ...

class GetPostsRequest(_message.Message):
    __slots__ = ("post_ids",)
    POST_IDS_FIELD_NUMBER: _ClassVar[int]
    post_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, post_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class GetPostsResponse(_message.Message):
    __slots__ = ("posts",)
    POSTS_FIELD_NUMBER: _ClassVar[int]
    posts: _containers.RepeatedCompositeFieldContainer[Post]
    def __init__(self, posts: _Optional[_Iterable[_Union[Post, _Mapping]]] = ...) -> None: ...

class DeletePostRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class DeletePostResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetUploadUrlRequest(_message.Message):
    __slots__ = ("mime_type", "file_size")
    MIME_TYPE_FIELD_NUMBER: _ClassVar[int]
    FILE_SIZE_FIELD_NUMBER: _ClassVar[int]
    mime_type: str
    file_size: int
    def __init__(self, mime_type: _Optional[str] = ..., file_size: _Optional[int] = ...) -> None: ...

class GetUploadUrlResponse(_message.Message):
    __slots__ = ("upload_url", "upload_session_key", "method", "headers")
    class HeadersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    UPLOAD_URL_FIELD_NUMBER: _ClassVar[int]
    UPLOAD_SESSION_KEY_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    HEADERS_FIELD_NUMBER: _ClassVar[int]
    upload_url: str
    upload_session_key: str
    method: str
    headers: _containers.ScalarMap[str, str]
    def __init__(self, upload_url: _Optional[str] = ..., upload_session_key: _Optional[str] = ..., method: _Optional[str] = ..., headers: _Optional[_Mapping[str, str]] = ...) -> None: ...
