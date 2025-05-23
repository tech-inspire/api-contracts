// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file embeddings/v1/events.proto (package embeddings.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file embeddings/v1/events.proto.
 */
export const file_embeddings_v1_events: GenFile = /*@__PURE__*/
  fileDesc("ChplbWJlZGRpbmdzL3YxL2V2ZW50cy5wcm90bxINZW1iZWRkaW5ncy52MSJBChtHZW5lcmF0ZVBvc3RFbWJlZGRpbmdzRXZlbnQSDwoHcG9zdF9pZBgBIAEoCRIRCglpbWFnZV91cmwYAiABKAkidwoaUG9zdEVtYmVkZGluZ3NVcGRhdGVkRXZlbnQSDwoHcG9zdF9pZBgBIAEoCRIYChBlbWJlZGRpbmdfdmVjdG9yGAIgAygCEi4KCnVwZGF0ZWRfYXQYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQk1aS2dpdGh1Yi5jb20vdGVjaC1pbnNwaXJlL2FwaS1jb250cmFjdHMvYXBpL2dlbi9nby9lbWJlZGRpbmdzL3YxO2VtYmVkZGluZ3N2MWIGcHJvdG8z", [file_buf_validate_validate, file_google_protobuf_field_mask, file_google_protobuf_timestamp]);

/**
 * @generated from message embeddings.v1.GeneratePostEmbeddingsEvent
 */
export type GeneratePostEmbeddingsEvent = Message<"embeddings.v1.GeneratePostEmbeddingsEvent"> & {
  /**
   * @generated from field: string post_id = 1;
   */
  postId: string;

  /**
   * @generated from field: string image_url = 2;
   */
  imageUrl: string;
};

/**
 * Describes the message embeddings.v1.GeneratePostEmbeddingsEvent.
 * Use `create(GeneratePostEmbeddingsEventSchema)` to create a new message.
 */
export const GeneratePostEmbeddingsEventSchema: GenMessage<GeneratePostEmbeddingsEvent> = /*@__PURE__*/
  messageDesc(file_embeddings_v1_events, 0);

/**
 * @generated from message embeddings.v1.PostEmbeddingsUpdatedEvent
 */
export type PostEmbeddingsUpdatedEvent = Message<"embeddings.v1.PostEmbeddingsUpdatedEvent"> & {
  /**
   * @generated from field: string post_id = 1;
   */
  postId: string;

  /**
   * @generated from field: repeated float embedding_vector = 2;
   */
  embeddingVector: number[];

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 3;
   */
  updatedAt?: Timestamp;
};

/**
 * Describes the message embeddings.v1.PostEmbeddingsUpdatedEvent.
 * Use `create(PostEmbeddingsUpdatedEventSchema)` to create a new message.
 */
export const PostEmbeddingsUpdatedEventSchema: GenMessage<PostEmbeddingsUpdatedEvent> = /*@__PURE__*/
  messageDesc(file_embeddings_v1_events, 1);

