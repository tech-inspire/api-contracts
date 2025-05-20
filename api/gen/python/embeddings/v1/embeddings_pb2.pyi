from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import field_mask_pb2 as _field_mask_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class GenerateTextEmbeddingsRequest(_message.Message):
    __slots__ = ("text",)
    TEXT_FIELD_NUMBER: _ClassVar[int]
    text: str
    def __init__(self, text: _Optional[str] = ...) -> None: ...

class GenerateTextEmbeddingsResponse(_message.Message):
    __slots__ = ("embedding_vector",)
    EMBEDDING_VECTOR_FIELD_NUMBER: _ClassVar[int]
    embedding_vector: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, embedding_vector: _Optional[_Iterable[float]] = ...) -> None: ...
