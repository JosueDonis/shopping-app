export type ErrorType = {
  message: string;
  type: string;
};

export interface IError {
  [key: string]: {
    message: string;
  };
}
