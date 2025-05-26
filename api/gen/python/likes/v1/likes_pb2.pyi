from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class GetLikesCountRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class GetLikesCountResponse(_message.Message):
    __slots__ = ("likes_count",)
    LIKES_COUNT_FIELD_NUMBER: _ClassVar[int]
    likes_count: int
    def __init__(self, likes_count: _Optional[int] = ...) -> None: ...

class HasUserLikedPostRequest(_message.Message):
    __slots__ = ("user_id", "post_id")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    post_id: str
    def __init__(self, user_id: _Optional[str] = ..., post_id: _Optional[str] = ...) -> None: ...

class HasUserLikedPostResponse(_message.Message):
    __slots__ = ("liked",)
    LIKED_FIELD_NUMBER: _ClassVar[int]
    liked: bool
    def __init__(self, liked: bool = ...) -> None: ...

class LikePostRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class LikePostResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class UnlikePostRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class UnlikePostResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetUserLikedPostsRequest(_message.Message):
    __slots__ = ("user_id", "limit", "offset")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    limit: int
    offset: int
    def __init__(self, user_id: _Optional[str] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class GetUserLikedPostsResponse(_message.Message):
    __slots__ = ("post_ids",)
    POST_IDS_FIELD_NUMBER: _ClassVar[int]
    post_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, post_ids: _Optional[_Iterable[str]] = ...) -> None: ...
