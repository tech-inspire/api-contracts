// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: views/v1/views.proto

package viewsv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/tech-inspire/api-contracts/api/gen/go/views/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// ViewsServiceName is the fully-qualified name of the ViewsService service.
	ViewsServiceName = "views.v1.ViewsService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// ViewsServiceGetPostViewsCountProcedure is the fully-qualified name of the ViewsService's
	// GetPostViewsCount RPC.
	ViewsServiceGetPostViewsCountProcedure = "/views.v1.ViewsService/GetPostViewsCount"
	// ViewsServiceGetPostsViewsCountProcedure is the fully-qualified name of the ViewsService's
	// GetPostsViewsCount RPC.
	ViewsServiceGetPostsViewsCountProcedure = "/views.v1.ViewsService/GetPostsViewsCount"
	// ViewsServiceViewPostProcedure is the fully-qualified name of the ViewsService's ViewPost RPC.
	ViewsServiceViewPostProcedure = "/views.v1.ViewsService/ViewPost"
)

// ViewsServiceClient is a client for the views.v1.ViewsService service.
type ViewsServiceClient interface {
	// Get current views count for a post
	GetPostViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error)
	GetPostsViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error)
	// View a post
	ViewPost(context.Context, *connect.Request[v1.ViewPostRequest]) (*connect.Response[v1.ViewPostResponse], error)
}

// NewViewsServiceClient constructs a client for the views.v1.ViewsService service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewViewsServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) ViewsServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	viewsServiceMethods := v1.File_views_v1_views_proto.Services().ByName("ViewsService").Methods()
	return &viewsServiceClient{
		getPostViewsCount: connect.NewClient[v1.GetViewsCountRequest, v1.GetViewsCountResponse](
			httpClient,
			baseURL+ViewsServiceGetPostViewsCountProcedure,
			connect.WithSchema(viewsServiceMethods.ByName("GetPostViewsCount")),
			connect.WithClientOptions(opts...),
		),
		getPostsViewsCount: connect.NewClient[v1.GetViewsCountRequest, v1.GetViewsCountResponse](
			httpClient,
			baseURL+ViewsServiceGetPostsViewsCountProcedure,
			connect.WithSchema(viewsServiceMethods.ByName("GetPostsViewsCount")),
			connect.WithClientOptions(opts...),
		),
		viewPost: connect.NewClient[v1.ViewPostRequest, v1.ViewPostResponse](
			httpClient,
			baseURL+ViewsServiceViewPostProcedure,
			connect.WithSchema(viewsServiceMethods.ByName("ViewPost")),
			connect.WithClientOptions(opts...),
		),
	}
}

// viewsServiceClient implements ViewsServiceClient.
type viewsServiceClient struct {
	getPostViewsCount  *connect.Client[v1.GetViewsCountRequest, v1.GetViewsCountResponse]
	getPostsViewsCount *connect.Client[v1.GetViewsCountRequest, v1.GetViewsCountResponse]
	viewPost           *connect.Client[v1.ViewPostRequest, v1.ViewPostResponse]
}

// GetPostViewsCount calls views.v1.ViewsService.GetPostViewsCount.
func (c *viewsServiceClient) GetPostViewsCount(ctx context.Context, req *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error) {
	return c.getPostViewsCount.CallUnary(ctx, req)
}

// GetPostsViewsCount calls views.v1.ViewsService.GetPostsViewsCount.
func (c *viewsServiceClient) GetPostsViewsCount(ctx context.Context, req *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error) {
	return c.getPostsViewsCount.CallUnary(ctx, req)
}

// ViewPost calls views.v1.ViewsService.ViewPost.
func (c *viewsServiceClient) ViewPost(ctx context.Context, req *connect.Request[v1.ViewPostRequest]) (*connect.Response[v1.ViewPostResponse], error) {
	return c.viewPost.CallUnary(ctx, req)
}

// ViewsServiceHandler is an implementation of the views.v1.ViewsService service.
type ViewsServiceHandler interface {
	// Get current views count for a post
	GetPostViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error)
	GetPostsViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error)
	// View a post
	ViewPost(context.Context, *connect.Request[v1.ViewPostRequest]) (*connect.Response[v1.ViewPostResponse], error)
}

// NewViewsServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewViewsServiceHandler(svc ViewsServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	viewsServiceMethods := v1.File_views_v1_views_proto.Services().ByName("ViewsService").Methods()
	viewsServiceGetPostViewsCountHandler := connect.NewUnaryHandler(
		ViewsServiceGetPostViewsCountProcedure,
		svc.GetPostViewsCount,
		connect.WithSchema(viewsServiceMethods.ByName("GetPostViewsCount")),
		connect.WithHandlerOptions(opts...),
	)
	viewsServiceGetPostsViewsCountHandler := connect.NewUnaryHandler(
		ViewsServiceGetPostsViewsCountProcedure,
		svc.GetPostsViewsCount,
		connect.WithSchema(viewsServiceMethods.ByName("GetPostsViewsCount")),
		connect.WithHandlerOptions(opts...),
	)
	viewsServiceViewPostHandler := connect.NewUnaryHandler(
		ViewsServiceViewPostProcedure,
		svc.ViewPost,
		connect.WithSchema(viewsServiceMethods.ByName("ViewPost")),
		connect.WithHandlerOptions(opts...),
	)
	return "/views.v1.ViewsService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case ViewsServiceGetPostViewsCountProcedure:
			viewsServiceGetPostViewsCountHandler.ServeHTTP(w, r)
		case ViewsServiceGetPostsViewsCountProcedure:
			viewsServiceGetPostsViewsCountHandler.ServeHTTP(w, r)
		case ViewsServiceViewPostProcedure:
			viewsServiceViewPostHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedViewsServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedViewsServiceHandler struct{}

func (UnimplementedViewsServiceHandler) GetPostViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("views.v1.ViewsService.GetPostViewsCount is not implemented"))
}

func (UnimplementedViewsServiceHandler) GetPostsViewsCount(context.Context, *connect.Request[v1.GetViewsCountRequest]) (*connect.Response[v1.GetViewsCountResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("views.v1.ViewsService.GetPostsViewsCount is not implemented"))
}

func (UnimplementedViewsServiceHandler) ViewPost(context.Context, *connect.Request[v1.ViewPostRequest]) (*connect.Response[v1.ViewPostResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("views.v1.ViewsService.ViewPost is not implemented"))
}
