export namespace RequestModel {
  export interface SendMessage {
    model: string
    messages: MessageModel[]
  }

  export interface MessageModel {
    role: string
    content: string
  }

}
