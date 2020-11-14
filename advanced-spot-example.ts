import {
  api,
  body,
  endpoint,
  headers,
  Int32,
  pathParams,
  queryParams,
  request,
  response,
  securityHeader,
  String,
} from "@airtasker/spot";

/** My API description */
@api({ name: "My API" })
class MyAPI {
  /** Security header description */
  @securityHeader
  "security-header": String;
}

/** My endpoint description */
@endpoint({
  method: "GET",
  path: "/users/:id/posts",
})
class MyEndpoint {
  @request
  request(
    @pathParams
    pathParams: {
      /** Id path param description */
      id: Int32;
    },
    @queryParams
    queryParams: {
      /** Visible query param description */
      visible?: boolean;
    },
    @headers
    headers: {
      /** My header description */
      "X-My-Header": String;
    }
  ) {}

  /** Ok response description */
  @response({ status: 200 })
  okResponse(
    @body
    body: ResponseBodyType
  ) {}

  /** Error response description in the docs! */
  @response({ status: 500 })
  errorResponse(
    @body
    body: ErrorResponseBodyType
  ) {}
}

/** Response body type description */
interface ResponseBodyType {
  /** Property description */
  property: String;
}

/** Response body type description */
interface ErrorResponseBodyType {
  /** Property description */
  message: String;
}
