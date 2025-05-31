import datetime

from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from posts.v1 import posts_pb2 as _posts_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PostCreatedEvent(_message.Message):
    __slots__ = ("created_at", "post")
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    POST_FIELD_NUMBER: _ClassVar[int]
    created_at: _timestamp_pb2.Timestamp
    post: _posts_pb2.Post
    def __init__(self, created_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., post: _Optional[_Union[_posts_pb2.Post, _Mapping]] = ...) -> None: ...

class PostUpdatedEvent(_message.Message):
    __slots__ = ("updated_at", "post")
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    POST_FIELD_NUMBER: _ClassVar[int]
    updated_at: _timestamp_pb2.Timestamp
    post: _posts_pb2.Post
    def __init__(self, updated_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., post: _Optional[_Union[_posts_pb2.Post, _Mapping]] = ...) -> None: ...

class PostDeletedEvent(_message.Message):
    __slots__ = ("deleted_at", "post")
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    POST_FIELD_NUMBER: _ClassVar[int]
    deleted_at: _timestamp_pb2.Timestamp
    post: _posts_pb2.Post
    def __init__(self, deleted_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., post: _Optional[_Union[_posts_pb2.Post, _Mapping]] = ...) -> None: ...
