import { baseService } from "./base";

export class ConversationService extends baseService {
  getConversation = (userId) => {
    return this.get(`/conversation/${userId}`);
  };
  addConversation = (data) => {
    return this.post(`/conversation/`, data);
  };
}

export const conversationService = new ConversationService();
