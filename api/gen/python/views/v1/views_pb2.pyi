from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class GetViewsCountRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class GetViewsCountResponse(_message.Message):
    __slots__ = ("likes_count",)
    LIKES_COUNT_FIELD_NUMBER: _ClassVar[int]
    likes_count: int
    def __init__(self, likes_count: _Optional[int] = ...) -> None: ...

class GetPostsViewsCountRequest(_message.Message):
    __slots__ = ("post_ids",)
    POST_IDS_FIELD_NUMBER: _ClassVar[int]
    post_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, post_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class GetPostsViewsCountResponse(_message.Message):
    __slots__ = ("views_count",)
    class ViewsCountEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: int
        def __init__(self, key: _Optional[str] = ..., value: _Optional[int] = ...) -> None: ...
    VIEWS_COUNT_FIELD_NUMBER: _ClassVar[int]
    views_count: _containers.ScalarMap[str, int]
    def __init__(self, views_count: _Optional[_Mapping[str, int]] = ...) -> None: ...

class ViewPostRequest(_message.Message):
    __slots__ = ("post_id",)
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    def __init__(self, post_id: _Optional[str] = ...) -> None: ...

class ViewPostResponse(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetUserViewedPostsRequest(_message.Message):
    __slots__ = ("user_id", "limit", "offset")
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    user_id: str
    limit: int
    offset: int
    def __init__(self, user_id: _Optional[str] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class GetUserViewedPostsResponse(_message.Message):
    __slots__ = ("post_ids", "limit", "offset")
    POST_IDS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    post_ids: _containers.RepeatedScalarFieldContainer[str]
    limit: int
    offset: int
    def __init__(self, post_ids: _Optional[_Iterable[str]] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...
