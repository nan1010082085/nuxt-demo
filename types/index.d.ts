export interface URLGlo {
  label: string;
  url: string;
  icon?: string;
}

export interface NpmGlo {
  badge?: string;
  title: string;
  descrpition: string;
  url: string | URLGlo[];
}

export interface GlogGlo {
  title: string;
  descitpion: string;
  url: string | URLGlo | URLGlo[];
}

// view file export default
export interface ViewDef {
  title: string;
  type: string;
  children: NpmGlo[];
}
