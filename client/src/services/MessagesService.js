import { baseService } from "./base";

export class MessagesService extends baseService {
  getMessages = (conversationId) => {
    return this.get(`/messages/${conversationId}`);
  };
  sendMessages = (data) => {
    return this.post(`/messages`, data);
  };
}

export const messagesService = new MessagesService();
