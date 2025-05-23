// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file search/v1/search.proto (package search.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_validate_validate } from "../../buf/validate/validate_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file search/v1/search.proto.
 */
export const file_search_v1_search: GenFile = /*@__PURE__*/
  fileDesc("ChZzZWFyY2gvdjEvc2VhcmNoLnByb3RvEglzZWFyY2gudjEipQMKE1NlYXJjaEltYWdlc1JlcXVlc3QSHQoKdGV4dF9xdWVyeRgBIAEoCUIHukgEcgIQAUgAEiUKEXJlZmVyZW5jZV9wb3N0X2lkGAIgASgJQgi6SAVyA7ABAUgAEiAKCWF1dGhvcl9pZBgJIAEoCUIIukgFcgOwAQFIAYgBARI1CgtvcmllbnRhdGlvbhgDIAEoDjIbLnNlYXJjaC52MS5QaG90b09yaWVudGF0aW9uSAKIAQESJQoHc29ydF9ieRgEIAEoDjIULnNlYXJjaC52MS5Tb3J0RmllbGQSKAoKc29ydF9vcmRlchgFIAEoDjIULnNlYXJjaC52MS5Tb3J0T3JkZXISFgoFbGltaXQYBiABKA1CB7pIBCoCGGQSDgoGb2Zmc2V0GAcgASgNEjIKFG1pbl9zaW1pbGFyaXR5X3Njb3JlGAggASgCQg+6SAwKCh0AAIA/LQAAAABIA4gBAUILCglzZWFyY2hfYnlCDAoKX2F1dGhvcl9pZEIOCgxfb3JpZW50YXRpb25CFwoVX21pbl9zaW1pbGFyaXR5X3Njb3JlIl8KFFNlYXJjaEltYWdlc1Jlc3BvbnNlEigKB3Jlc3VsdHMYASADKAsyFy5zZWFyY2gudjEuU2VhcmNoUmVzdWx0Eg0KBWxpbWl0GAUgASgNEg4KBm9mZnNldBgGIAEoDSJiCgxTZWFyY2hSZXN1bHQSGQoHcG9zdF9pZBgBIAEoCUIIukgFcgOwAQESKAoKc2ltaWxhcml0eRgCIAEoAkIPukgMCgodAACAPy0AAAAASACIAQFCDQoLX3NpbWlsYXJpdHkqWAoQUGhvdG9PcmllbnRhdGlvbhIbChdPUklFTlRBVElPTl9VTlNQRUNJRklFRBAAEgwKCFBPUlRSQUlUEAESDQoJTEFORFNDQVBFEAISCgoGU1FVQVJFEAMqNwoJU29ydEZpZWxkEhoKFlNPUlRfRklFTERfVU5TUEVDSUZJRUQQABIOCgpDUkVBVEVEX0FUEAEqOgoJU29ydE9yZGVyEhoKFlNPUlRfT1JERVJfVU5TUEVDSUZJRUQQABIHCgNBU0MQARIICgRERVNDEAIyXwoNU2VhcmNoU2VydmljZRJOCgtTZWFyY2hQb3N0cxIeLnNlYXJjaC52MS5TZWFyY2hJbWFnZXNSZXF1ZXN0Gh8uc2VhcmNoLnYxLlNlYXJjaEltYWdlc1Jlc3BvbnNlQkVaQ2dpdGh1Yi5jb20vdGVjaC1pbnNwaXJlL2FwaS1jb250cmFjdHMvYXBpL2dlbi9nby9zZWFyY2gvdjE7c2VhcmNodjFiBnByb3RvMw", [file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * @generated from message search.v1.SearchImagesRequest
 */
export type SearchImagesRequest = Message<"search.v1.SearchImagesRequest"> & {
  /**
   * @generated from oneof search.v1.SearchImagesRequest.search_by
   */
  searchBy: {
    /**
     * @generated from field: string text_query = 1;
     */
    value: string;
    case: "textQuery";
  } | {
    /**
     * @generated from field: string reference_post_id = 2;
     */
    value: string;
    case: "referencePostId";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: optional string author_id = 9;
   */
  authorId?: string;

  /**
   * @generated from field: optional search.v1.PhotoOrientation orientation = 3;
   */
  orientation?: PhotoOrientation;

  /**
   * @generated from field: search.v1.SortField sort_by = 4;
   */
  sortBy: SortField;

  /**
   * @generated from field: search.v1.SortOrder sort_order = 5;
   */
  sortOrder: SortOrder;

  /**
   * @generated from field: uint32 limit = 6;
   */
  limit: number;

  /**
   * @generated from field: uint32 offset = 7;
   */
  offset: number;

  /**
   * Minimum similarity score threshold for embedding search. Default is 0.7 (subject to change)
   *
   * @generated from field: optional float min_similarity_score = 8;
   */
  minSimilarityScore?: number;
};

/**
 * Describes the message search.v1.SearchImagesRequest.
 * Use `create(SearchImagesRequestSchema)` to create a new message.
 */
export const SearchImagesRequestSchema: GenMessage<SearchImagesRequest> = /*@__PURE__*/
  messageDesc(file_search_v1_search, 0);

/**
 * @generated from message search.v1.SearchImagesResponse
 */
export type SearchImagesResponse = Message<"search.v1.SearchImagesResponse"> & {
  /**
   * Matches with score ≥ threshold
   *
   * @generated from field: repeated search.v1.SearchResult results = 1;
   */
  results: SearchResult[];

  /**
   * @generated from field: uint32 limit = 5;
   */
  limit: number;

  /**
   * @generated from field: uint32 offset = 6;
   */
  offset: number;
};

/**
 * Describes the message search.v1.SearchImagesResponse.
 * Use `create(SearchImagesResponseSchema)` to create a new message.
 */
export const SearchImagesResponseSchema: GenMessage<SearchImagesResponse> = /*@__PURE__*/
  messageDesc(file_search_v1_search, 1);

/**
 * @generated from message search.v1.SearchResult
 */
export type SearchResult = Message<"search.v1.SearchResult"> & {
  /**
   * @generated from field: string post_id = 1;
   */
  postId: string;

  /**
   * @generated from field: optional float similarity = 2;
   */
  similarity?: number;
};

/**
 * Describes the message search.v1.SearchResult.
 * Use `create(SearchResultSchema)` to create a new message.
 */
export const SearchResultSchema: GenMessage<SearchResult> = /*@__PURE__*/
  messageDesc(file_search_v1_search, 2);

/**
 * @generated from enum search.v1.PhotoOrientation
 */
export enum PhotoOrientation {
  /**
   * @generated from enum value: ORIENTATION_UNSPECIFIED = 0;
   */
  ORIENTATION_UNSPECIFIED = 0,

  /**
   * height > width
   *
   * @generated from enum value: PORTRAIT = 1;
   */
  PORTRAIT = 1,

  /**
   * width > height
   *
   * @generated from enum value: LANDSCAPE = 2;
   */
  LANDSCAPE = 2,

  /**
   * width == height (within tolerance)
   *
   * @generated from enum value: SQUARE = 3;
   */
  SQUARE = 3,
}

/**
 * Describes the enum search.v1.PhotoOrientation.
 */
export const PhotoOrientationSchema: GenEnum<PhotoOrientation> = /*@__PURE__*/
  enumDesc(file_search_v1_search, 0);

/**
 * --- Sorting Enums ---
 *
 * @generated from enum search.v1.SortField
 */
export enum SortField {
  /**
   * @generated from enum value: SORT_FIELD_UNSPECIFIED = 0;
   */
  SORT_FIELD_UNSPECIFIED = 0,

  /**
   * @generated from enum value: CREATED_AT = 1;
   */
  CREATED_AT = 1,
}

/**
 * Describes the enum search.v1.SortField.
 */
export const SortFieldSchema: GenEnum<SortField> = /*@__PURE__*/
  enumDesc(file_search_v1_search, 1);

/**
 * @generated from enum search.v1.SortOrder
 */
export enum SortOrder {
  /**
   * @generated from enum value: SORT_ORDER_UNSPECIFIED = 0;
   */
  SORT_ORDER_UNSPECIFIED = 0,

  /**
   * @generated from enum value: ASC = 1;
   */
  ASC = 1,

  /**
   * @generated from enum value: DESC = 2;
   */
  DESC = 2,
}

/**
 * Describes the enum search.v1.SortOrder.
 */
export const SortOrderSchema: GenEnum<SortOrder> = /*@__PURE__*/
  enumDesc(file_search_v1_search, 2);

/**
 * @generated from service search.v1.SearchService
 */
export const SearchService: GenService<{
  /**
   * @generated from rpc search.v1.SearchService.SearchPosts
   */
  searchPosts: {
    methodKind: "unary";
    input: typeof SearchImagesRequestSchema;
    output: typeof SearchImagesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_search_v1_search, 0);

