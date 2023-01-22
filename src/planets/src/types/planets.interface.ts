export interface Planet {
  geology: PlanetInfo;
  images: Images;
  name: string;
  overview: PlanetInfo;
  radius: string;
  revolution: string;
  rotation: string;
  structure: PlanetInfo;
  temperature: string;
  color?: string;
}

export interface DataInNumber {
  name: string;
  radius: string;
  revolution: string;
  rotation: string;
  temperature: string;
}

export interface DataDescription {
  name?: string;
  overview?: PlanetInfo;
  geology?: PlanetInfo;
  structure?: PlanetInfo;
  color?: string;
}

export interface PlanetInfo {
  source: string;
  content: string;
}

export interface Images {
  name?: string;
  geology: string;
  internal: string;
  planet: string;
}

export enum AvailableViews {
  Overview = 'overview',
  Geology = 'geology',
  Structure = 'structure',
}
