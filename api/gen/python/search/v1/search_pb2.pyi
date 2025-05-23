from buf.validate import validate_pb2 as _validate_pb2
from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PhotoOrientation(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORIENTATION_UNSPECIFIED: _ClassVar[PhotoOrientation]
    PORTRAIT: _ClassVar[PhotoOrientation]
    LANDSCAPE: _ClassVar[PhotoOrientation]
    SQUARE: _ClassVar[PhotoOrientation]

class SortField(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SORT_FIELD_UNSPECIFIED: _ClassVar[SortField]
    CREATED_AT: _ClassVar[SortField]

class SortOrder(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SORT_ORDER_UNSPECIFIED: _ClassVar[SortOrder]
    ASC: _ClassVar[SortOrder]
    DESC: _ClassVar[SortOrder]
ORIENTATION_UNSPECIFIED: PhotoOrientation
PORTRAIT: PhotoOrientation
LANDSCAPE: PhotoOrientation
SQUARE: PhotoOrientation
SORT_FIELD_UNSPECIFIED: SortField
CREATED_AT: SortField
SORT_ORDER_UNSPECIFIED: SortOrder
ASC: SortOrder
DESC: SortOrder

class SearchImagesRequest(_message.Message):
    __slots__ = ("text_query", "reference_post_id", "author_id", "orientation", "sort_by", "sort_order", "limit", "offset", "min_similarity_score")
    TEXT_QUERY_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_POST_ID_FIELD_NUMBER: _ClassVar[int]
    AUTHOR_ID_FIELD_NUMBER: _ClassVar[int]
    ORIENTATION_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SORT_ORDER_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    MIN_SIMILARITY_SCORE_FIELD_NUMBER: _ClassVar[int]
    text_query: str
    reference_post_id: str
    author_id: str
    orientation: PhotoOrientation
    sort_by: SortField
    sort_order: SortOrder
    limit: int
    offset: int
    min_similarity_score: float
    def __init__(self, text_query: _Optional[str] = ..., reference_post_id: _Optional[str] = ..., author_id: _Optional[str] = ..., orientation: _Optional[_Union[PhotoOrientation, str]] = ..., sort_by: _Optional[_Union[SortField, str]] = ..., sort_order: _Optional[_Union[SortOrder, str]] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ..., min_similarity_score: _Optional[float] = ...) -> None: ...

class SearchImagesResponse(_message.Message):
    __slots__ = ("main_results", "see_also_results", "total_main_results", "total_see_also_results", "limit", "offset")
    MAIN_RESULTS_FIELD_NUMBER: _ClassVar[int]
    SEE_ALSO_RESULTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_MAIN_RESULTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_SEE_ALSO_RESULTS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    main_results: _containers.RepeatedCompositeFieldContainer[SearchResult]
    see_also_results: _containers.RepeatedCompositeFieldContainer[SearchResult]
    total_main_results: int
    total_see_also_results: int
    limit: int
    offset: int
    def __init__(self, main_results: _Optional[_Iterable[_Union[SearchResult, _Mapping]]] = ..., see_also_results: _Optional[_Iterable[_Union[SearchResult, _Mapping]]] = ..., total_main_results: _Optional[int] = ..., total_see_also_results: _Optional[int] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ...) -> None: ...

class SearchResult(_message.Message):
    __slots__ = ("post_id", "similarity")
    POST_ID_FIELD_NUMBER: _ClassVar[int]
    SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    post_id: str
    similarity: float
    def __init__(self, post_id: _Optional[str] = ..., similarity: _Optional[float] = ...) -> None: ...
