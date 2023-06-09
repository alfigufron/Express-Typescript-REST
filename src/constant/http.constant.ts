enum HTTPCode {
  Success = 200,
  Created = 201,
  ClientError = 400,
  NotFound = 404,
  ValidationError = 422,
  ServerError = 500,
}

enum HTTPMessage {
  ClientError = "Client Error",
  NotFound = "Not Found",
  ValidationError = "Validation Error",
  ServerError = "Internal Server Error",
}

export { HTTPCode, HTTPMessage };
