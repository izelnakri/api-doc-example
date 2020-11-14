import { api, endpoint, request, response, body } from "@airtasker/spot";

@api({
  name: "My API",
})
class Api {}

@endpoint({
  method: "POST",
  path: "/users",
})
class CreateUser {
  @request
  request(@body body: CreateUserRequest) {}

  @response({ status: 201 })
  successResponse(@body body: CreateUserResponse) {}

  @response({ status: 500 })
  errorResponse(@body body: ErrorResponse) {}
}

interface ErrorResponse {
  message: string;
}

interface CreateUserRequest {
  firstName: string;
  lastName: string;
}

interface CreateUserResponse {
  firstName: string;
  lastName: string;
  role: string;
}

@endpoint({
  method: "GET",
  path: "/users",
})
class GetUser {
  @request
  request(body: any) {
    console.log("GET called!! biatch");
    console.log(body);
  }

  @response({ status: 200 })
  response(@body body: CreateUserResponse) {}
}
