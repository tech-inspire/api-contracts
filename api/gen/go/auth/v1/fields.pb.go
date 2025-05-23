// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: auth/v1/fields.proto

package authv1

import (
	_ "buf.build/gen/go/bufbuild/protovalidate/protocolbuffers/go/buf/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/fieldmaskpb"
	_ "google.golang.org/protobuf/types/known/timestamppb"
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

// Reusable validated username
type Username struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Value         string                 `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Username) Reset() {
	*x = Username{}
	mi := &file_auth_v1_fields_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Username) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Username) ProtoMessage() {}

func (x *Username) ProtoReflect() protoreflect.Message {
	mi := &file_auth_v1_fields_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Username.ProtoReflect.Descriptor instead.
func (*Username) Descriptor() ([]byte, []int) {
	return file_auth_v1_fields_proto_rawDescGZIP(), []int{0}
}

func (x *Username) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

// Reusable validated name
type Name struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Value         string                 `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Name) Reset() {
	*x = Name{}
	mi := &file_auth_v1_fields_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Name) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Name) ProtoMessage() {}

func (x *Name) ProtoReflect() protoreflect.Message {
	mi := &file_auth_v1_fields_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Name.ProtoReflect.Descriptor instead.
func (*Name) Descriptor() ([]byte, []int) {
	return file_auth_v1_fields_proto_rawDescGZIP(), []int{1}
}

func (x *Name) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

// Reusable validated email
type Email struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Value         string                 `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Email) Reset() {
	*x = Email{}
	mi := &file_auth_v1_fields_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Email) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Email) ProtoMessage() {}

func (x *Email) ProtoReflect() protoreflect.Message {
	mi := &file_auth_v1_fields_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Email.ProtoReflect.Descriptor instead.
func (*Email) Descriptor() ([]byte, []int) {
	return file_auth_v1_fields_proto_rawDescGZIP(), []int{2}
}

func (x *Email) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

type Password struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Value         string                 `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Password) Reset() {
	*x = Password{}
	mi := &file_auth_v1_fields_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Password) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Password) ProtoMessage() {}

func (x *Password) ProtoReflect() protoreflect.Message {
	mi := &file_auth_v1_fields_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Password.ProtoReflect.Descriptor instead.
func (*Password) Descriptor() ([]byte, []int) {
	return file_auth_v1_fields_proto_rawDescGZIP(), []int{3}
}

func (x *Password) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

type ConfirmationCode struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Value         string                 `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ConfirmationCode) Reset() {
	*x = ConfirmationCode{}
	mi := &file_auth_v1_fields_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ConfirmationCode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ConfirmationCode) ProtoMessage() {}

func (x *ConfirmationCode) ProtoReflect() protoreflect.Message {
	mi := &file_auth_v1_fields_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ConfirmationCode.ProtoReflect.Descriptor instead.
func (*ConfirmationCode) Descriptor() ([]byte, []int) {
	return file_auth_v1_fields_proto_rawDescGZIP(), []int{4}
}

func (x *ConfirmationCode) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

var File_auth_v1_fields_proto protoreflect.FileDescriptor

const file_auth_v1_fields_proto_rawDesc = "" +
	"\n" +
	"\x14auth/v1/fields.proto\x12\aauth.v1\x1a\x1bbuf/validate/validate.proto\x1a google/protobuf/field_mask.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"]\n" +
	"\bUsername\x12Q\n" +
	"\x05value\x18\x01 \x01(\tB;\xbaH8r6\x10\x01\x18\x1e20^[a-zA-Z0-9](?:[a-zA-Z0-9._]{0,28}[a-zA-Z0-9])?$R\x05value\"E\n" +
	"\x04Name\x12=\n" +
	"\x05value\x18\x01 \x01(\tB'\xbaH$r\"\x10\x01\x1822\x1c^[A-Za-z0-9À-ÿ' .-]{1,50}$R\x05value\"&\n" +
	"\x05Email\x12\x1d\n" +
	"\x05value\x18\x01 \x01(\tB\a\xbaH\x04r\x02`\x01R\x05value\",\n" +
	"\bPassword\x12 \n" +
	"\x05value\x18\x01 \x01(\tB\n" +
	"\xbaH\ar\x05\x10\b\x18\x80\x01R\x05value\";\n" +
	"\x10ConfirmationCode\x12'\n" +
	"\x05value\x18\x01 \x01(\tB\x11\xbaH\x0er\f2\n" +
	"^[0-9]{6}$R\x05valueBAZ?github.com/tech-inspire/api-contracts/api/gen/go/auth/v1;authv1b\x06proto3"

var (
	file_auth_v1_fields_proto_rawDescOnce sync.Once
	file_auth_v1_fields_proto_rawDescData []byte
)

func file_auth_v1_fields_proto_rawDescGZIP() []byte {
	file_auth_v1_fields_proto_rawDescOnce.Do(func() {
		file_auth_v1_fields_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_auth_v1_fields_proto_rawDesc), len(file_auth_v1_fields_proto_rawDesc)))
	})
	return file_auth_v1_fields_proto_rawDescData
}

var file_auth_v1_fields_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_auth_v1_fields_proto_goTypes = []any{
	(*Username)(nil),         // 0: auth.v1.Username
	(*Name)(nil),             // 1: auth.v1.Name
	(*Email)(nil),            // 2: auth.v1.Email
	(*Password)(nil),         // 3: auth.v1.Password
	(*ConfirmationCode)(nil), // 4: auth.v1.ConfirmationCode
}
var file_auth_v1_fields_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_auth_v1_fields_proto_init() }
func file_auth_v1_fields_proto_init() {
	if File_auth_v1_fields_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_auth_v1_fields_proto_rawDesc), len(file_auth_v1_fields_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_auth_v1_fields_proto_goTypes,
		DependencyIndexes: file_auth_v1_fields_proto_depIdxs,
		MessageInfos:      file_auth_v1_fields_proto_msgTypes,
	}.Build()
	File_auth_v1_fields_proto = out.File
	file_auth_v1_fields_proto_goTypes = nil
	file_auth_v1_fields_proto_depIdxs = nil
}
