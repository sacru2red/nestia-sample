export type Message = {
  type: 0 | 1;
  payload?: string;
};

export interface GetHelloResponseDto {
  messages?: Array<Message> | Readonly<Array<Message>>;
}
