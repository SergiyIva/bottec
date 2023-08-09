type onPageChangeCallback = (newPage: HeaderPageState) => void;

export type HeaderProps = {
  selectedPage?: HeaderPageState;
  onPageChange: onPageChangeCallback;
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
