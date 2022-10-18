import { ServerError } from "../../definitions/generated/graphql";

export default function handleErrorResponse(error: Error): ServerError {
  if (process.env.NODE_ENV === 'production') {
    return {
      __typename: 'ServerError',
      message: error.message,
    };
  }

  return {
    __typename: 'ServerError',
    message: error.message,
    stack: error.stack,
  };
}
