export type HeaderProps = {
  selectedPage?: HeaderPageState;
};

export enum HeaderPageState {
  None = 1,
  Turnkey,
  Cases,
  Solutions,
  Blog,
  Contacts,
}

export enum Socials {
  Instagram,
  Whatsapp,
  Telegram,
  VK,
}
