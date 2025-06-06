# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: views/v1/views.proto
# Protobuf Python Version: 6.31.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    6,
    31,
    1,
    '',
    'views/v1/views.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14views/v1/views.proto\x12\x08views.v1\x1a\x1b\x62uf/validate/validate.proto\"9\n\x14GetViewsCountRequest\x12!\n\x07post_id\x18\x01 \x01(\tB\x08\xbaH\x05r\x03\xb0\x01\x01R\x06postId\"8\n\x15GetViewsCountResponse\x12\x1f\n\x0blikes_count\x18\x01 \x01(\x03R\nlikesCount\"6\n\x19GetPostsViewsCountRequest\x12\x19\n\x08post_ids\x18\x01 \x03(\tR\x07postIds\"\xb2\x01\n\x1aGetPostsViewsCountResponse\x12U\n\x0bviews_count\x18\x01 \x03(\x0b\x32\x34.views.v1.GetPostsViewsCountResponse.ViewsCountEntryR\nviewsCount\x1a=\n\x0fViewsCountEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\x03R\x05value:\x02\x38\x01\"4\n\x0fViewPostRequest\x12!\n\x07post_id\x18\x02 \x01(\tB\x08\xbaH\x05r\x03\xb0\x01\x01R\x06postId\"\x12\n\x10ViewPostResponse\"l\n\x19GetUserViewedPostsRequest\x12!\n\x07user_id\x18\x01 \x01(\tB\x08\xbaH\x05r\x03\xb0\x01\x01R\x06userId\x12\x14\n\x05limit\x18\x02 \x01(\x05R\x05limit\x12\x16\n\x06offset\x18\x03 \x01(\x05R\x06offset\"e\n\x1aGetUserViewedPostsResponse\x12\x19\n\x08post_ids\x18\x01 \x03(\tR\x07postIds\x12\x14\n\x05limit\x18\x02 \x01(\x05R\x05limit\x12\x16\n\x06offset\x18\x03 \x01(\x05R\x06offset2\xfe\x01\n\x0cViewsService\x12T\n\x11GetPostViewsCount\x12\x1e.views.v1.GetViewsCountRequest\x1a\x1f.views.v1.GetViewsCountResponse\x12U\n\x12GetPostsViewsCount\x12\x1e.views.v1.GetViewsCountRequest\x1a\x1f.views.v1.GetViewsCountResponse\x12\x41\n\x08ViewPost\x12\x19.views.v1.ViewPostRequest\x1a\x1a.views.v1.ViewPostResponseBCZAgithub.com/tech-inspire/api-contracts/api/gen/go/views/v1;viewsv1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'views.v1.views_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZAgithub.com/tech-inspire/api-contracts/api/gen/go/views/v1;viewsv1'
  _globals['_GETVIEWSCOUNTREQUEST'].fields_by_name['post_id']._loaded_options = None
  _globals['_GETVIEWSCOUNTREQUEST'].fields_by_name['post_id']._serialized_options = b'\272H\005r\003\260\001\001'
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE_VIEWSCOUNTENTRY']._loaded_options = None
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE_VIEWSCOUNTENTRY']._serialized_options = b'8\001'
  _globals['_VIEWPOSTREQUEST'].fields_by_name['post_id']._loaded_options = None
  _globals['_VIEWPOSTREQUEST'].fields_by_name['post_id']._serialized_options = b'\272H\005r\003\260\001\001'
  _globals['_GETUSERVIEWEDPOSTSREQUEST'].fields_by_name['user_id']._loaded_options = None
  _globals['_GETUSERVIEWEDPOSTSREQUEST'].fields_by_name['user_id']._serialized_options = b'\272H\005r\003\260\001\001'
  _globals['_GETVIEWSCOUNTREQUEST']._serialized_start=63
  _globals['_GETVIEWSCOUNTREQUEST']._serialized_end=120
  _globals['_GETVIEWSCOUNTRESPONSE']._serialized_start=122
  _globals['_GETVIEWSCOUNTRESPONSE']._serialized_end=178
  _globals['_GETPOSTSVIEWSCOUNTREQUEST']._serialized_start=180
  _globals['_GETPOSTSVIEWSCOUNTREQUEST']._serialized_end=234
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE']._serialized_start=237
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE']._serialized_end=415
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE_VIEWSCOUNTENTRY']._serialized_start=354
  _globals['_GETPOSTSVIEWSCOUNTRESPONSE_VIEWSCOUNTENTRY']._serialized_end=415
  _globals['_VIEWPOSTREQUEST']._serialized_start=417
  _globals['_VIEWPOSTREQUEST']._serialized_end=469
  _globals['_VIEWPOSTRESPONSE']._serialized_start=471
  _globals['_VIEWPOSTRESPONSE']._serialized_end=489
  _globals['_GETUSERVIEWEDPOSTSREQUEST']._serialized_start=491
  _globals['_GETUSERVIEWEDPOSTSREQUEST']._serialized_end=599
  _globals['_GETUSERVIEWEDPOSTSRESPONSE']._serialized_start=601
  _globals['_GETUSERVIEWEDPOSTSRESPONSE']._serialized_end=702
  _globals['_VIEWSSERVICE']._serialized_start=705
  _globals['_VIEWSSERVICE']._serialized_end=959
# @@protoc_insertion_point(module_scope)
