export interface ChatProps {
  id: number;
  picture: string;
  name: string;
  summary: string;
  time: string;
}

export interface DataChatProps {
  data: ChatProps[];
}
