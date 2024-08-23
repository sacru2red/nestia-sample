export type Message = {
  // no errors if toggle to comment under line
  type: 0 | 1;
  payload?: string;
};

export interface GetHelloResponseDto {
  messages?: Array<Message> | Readonly<Array<Message>>;
}
