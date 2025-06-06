# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: posts/v1/events.proto
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
    'posts/v1/events.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from buf.validate import validate_pb2 as buf_dot_validate_dot_validate__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from posts.v1 import posts_pb2 as posts_dot_v1_dot_posts__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15posts/v1/events.proto\x12\x08posts.v1\x1a\x1b\x62uf/validate/validate.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14posts/v1/posts.proto\"q\n\x10PostCreatedEvent\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12\"\n\x04post\x18\x02 \x01(\x0b\x32\x0e.posts.v1.PostR\x04post\"q\n\x10PostUpdatedEvent\x12\x39\n\nupdated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tupdatedAt\x12\"\n\x04post\x18\x02 \x01(\x0b\x32\x0e.posts.v1.PostR\x04post\"q\n\x10PostDeletedEvent\x12\x39\n\ndeleted_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tdeletedAt\x12\"\n\x04post\x18\x02 \x01(\x0b\x32\x0e.posts.v1.PostR\x04post\"\xc4\x01\n\x1fPostImageVariantsGeneratedEvent\x12\x39\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampR\tcreatedAt\x12!\n\x07post_id\x18\x02 \x01(\tB\x08\xbaH\x05r\x03\xb0\x01\x01R\x06postId\x12\x43\n\x0cnew_variants\x18\x03 \x03(\x0b\x32\x16.posts.v1.ImageVariantB\x08\xbaH\x05\x92\x01\x02\x08\x01R\x0bnewVariantsBCZAgithub.com/tech-inspire/api-contracts/api/gen/go/posts/v1;postsv1b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'posts.v1.events_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'ZAgithub.com/tech-inspire/api-contracts/api/gen/go/posts/v1;postsv1'
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT'].fields_by_name['post_id']._loaded_options = None
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT'].fields_by_name['post_id']._serialized_options = b'\272H\005r\003\260\001\001'
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT'].fields_by_name['new_variants']._loaded_options = None
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT'].fields_by_name['new_variants']._serialized_options = b'\272H\005\222\001\002\010\001'
  _globals['_POSTCREATEDEVENT']._serialized_start=119
  _globals['_POSTCREATEDEVENT']._serialized_end=232
  _globals['_POSTUPDATEDEVENT']._serialized_start=234
  _globals['_POSTUPDATEDEVENT']._serialized_end=347
  _globals['_POSTDELETEDEVENT']._serialized_start=349
  _globals['_POSTDELETEDEVENT']._serialized_end=462
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT']._serialized_start=465
  _globals['_POSTIMAGEVARIANTSGENERATEDEVENT']._serialized_end=661
# @@protoc_insertion_point(module_scope)
