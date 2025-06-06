// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: embeddings/v1/events.proto

package embeddingsv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/fieldmaskpb"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GeneratePostEmbeddingsEvent struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	PostId        string                 `protobuf:"bytes,1,opt,name=post_id,json=postId,proto3" json:"post_id,omitempty"`
	ImageUrl      string                 `protobuf:"bytes,2,opt,name=image_url,json=imageUrl,proto3" json:"image_url,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GeneratePostEmbeddingsEvent) Reset() {
	*x = GeneratePostEmbeddingsEvent{}
	mi := &file_embeddings_v1_events_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GeneratePostEmbeddingsEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GeneratePostEmbeddingsEvent) ProtoMessage() {}

func (x *GeneratePostEmbeddingsEvent) ProtoReflect() protoreflect.Message {
	mi := &file_embeddings_v1_events_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GeneratePostEmbeddingsEvent.ProtoReflect.Descriptor instead.
func (*GeneratePostEmbeddingsEvent) Descriptor() ([]byte, []int) {
	return file_embeddings_v1_events_proto_rawDescGZIP(), []int{0}
}

func (x *GeneratePostEmbeddingsEvent) GetPostId() string {
	if x != nil {
		return x.PostId
	}
	return ""
}

func (x *GeneratePostEmbeddingsEvent) GetImageUrl() string {
	if x != nil {
		return x.ImageUrl
	}
	return ""
}

type PostEmbeddingsUpdatedEvent struct {
	state           protoimpl.MessageState `protogen:"open.v1"`
	PostId          string                 `protobuf:"bytes,1,opt,name=post_id,json=postId,proto3" json:"post_id,omitempty"`
	EmbeddingVector []float32              `protobuf:"fixed32,2,rep,packed,name=embedding_vector,json=embeddingVector,proto3" json:"embedding_vector,omitempty"`
	UpdatedAt       *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	unknownFields   protoimpl.UnknownFields
	sizeCache       protoimpl.SizeCache
}

func (x *PostEmbeddingsUpdatedEvent) Reset() {
	*x = PostEmbeddingsUpdatedEvent{}
	mi := &file_embeddings_v1_events_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *PostEmbeddingsUpdatedEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PostEmbeddingsUpdatedEvent) ProtoMessage() {}

func (x *PostEmbeddingsUpdatedEvent) ProtoReflect() protoreflect.Message {
	mi := &file_embeddings_v1_events_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PostEmbeddingsUpdatedEvent.ProtoReflect.Descriptor instead.
func (*PostEmbeddingsUpdatedEvent) Descriptor() ([]byte, []int) {
	return file_embeddings_v1_events_proto_rawDescGZIP(), []int{1}
}

func (x *PostEmbeddingsUpdatedEvent) GetPostId() string {
	if x != nil {
		return x.PostId
	}
	return ""
}

func (x *PostEmbeddingsUpdatedEvent) GetEmbeddingVector() []float32 {
	if x != nil {
		return x.EmbeddingVector
	}
	return nil
}

func (x *PostEmbeddingsUpdatedEvent) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

var File_embeddings_v1_events_proto protoreflect.FileDescriptor

const file_embeddings_v1_events_proto_rawDesc = "" +
	"\n" +
	"\x1aembeddings/v1/events.proto\x12\rembeddings.v1\x1a\x1bbuf/validate/validate.proto\x1a google/protobuf/field_mask.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"S\n" +
	"\x1bGeneratePostEmbeddingsEvent\x12\x17\n" +
	"\apost_id\x18\x01 \x01(\tR\x06postId\x12\x1b\n" +
	"\timage_url\x18\x02 \x01(\tR\bimageUrl\"\x9b\x01\n" +
	"\x1aPostEmbeddingsUpdatedEvent\x12\x17\n" +
	"\apost_id\x18\x01 \x01(\tR\x06postId\x12)\n" +
	"\x10embedding_vector\x18\x02 \x03(\x02R\x0fembeddingVector\x129\n" +
	"\n" +
	"updated_at\x18\x03 \x01(\v2\x1a.google.protobuf.TimestampR\tupdatedAtBMZKgithub.com/tech-inspire/api-contracts/api/gen/go/embeddings/v1;embeddingsv1b\x06proto3"

var (
	file_embeddings_v1_events_proto_rawDescOnce sync.Once
	file_embeddings_v1_events_proto_rawDescData []byte
)

func file_embeddings_v1_events_proto_rawDescGZIP() []byte {
	file_embeddings_v1_events_proto_rawDescOnce.Do(func() {
		file_embeddings_v1_events_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_embeddings_v1_events_proto_rawDesc), len(file_embeddings_v1_events_proto_rawDesc)))
	})
	return file_embeddings_v1_events_proto_rawDescData
}

var file_embeddings_v1_events_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_embeddings_v1_events_proto_goTypes = []any{
	(*GeneratePostEmbeddingsEvent)(nil), // 0: embeddings.v1.GeneratePostEmbeddingsEvent
	(*PostEmbeddingsUpdatedEvent)(nil),  // 1: embeddings.v1.PostEmbeddingsUpdatedEvent
	(*timestamppb.Timestamp)(nil),       // 2: google.protobuf.Timestamp
}
var file_embeddings_v1_events_proto_depIdxs = []int32{
	2, // 0: embeddings.v1.PostEmbeddingsUpdatedEvent.updated_at:type_name -> google.protobuf.Timestamp
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_embeddings_v1_events_proto_init() }
func file_embeddings_v1_events_proto_init() {
	if File_embeddings_v1_events_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_embeddings_v1_events_proto_rawDesc), len(file_embeddings_v1_events_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_embeddings_v1_events_proto_goTypes,
		DependencyIndexes: file_embeddings_v1_events_proto_depIdxs,
		MessageInfos:      file_embeddings_v1_events_proto_msgTypes,
	}.Build()
	File_embeddings_v1_events_proto = out.File
	file_embeddings_v1_events_proto_goTypes = nil
	file_embeddings_v1_events_proto_depIdxs = nil
}
