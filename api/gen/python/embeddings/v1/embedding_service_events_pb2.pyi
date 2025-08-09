import datetime

from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GeneratePostEmbeddingsEvent(_message.Message):
    __slots__ = ("post_id", "image_url")
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    image_url: str
    def __init__(self, post_id: _Optional[str] = ..., image_url: _Optional[str] = ...) -> None: ...

class PostEmbeddingsUpdatedEvent(_message.Message):
    __slots__ = ("post_id", "embedding_vector", "updated_at")
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    EMBEDDING_VECTOR_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    embedding_vector: _containers.RepeatedScalarFieldContainer[float]
    updated_at: _timestamp_pb2.Timestamp
    def __init__(self, post_id: _Optional[str] = ..., embedding_vector: _Optional[_Iterable[float]] = ..., updated_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...
