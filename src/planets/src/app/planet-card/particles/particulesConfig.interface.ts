export interface ParticulesConfig {
  particles:     Particles;
  interactivity: Interactivity;
  retina_detect: boolean;
}

export interface Interactivity {
  detect_on: string;
  events:    Events;
  modes:     Modes;
}

export interface Events {
  onhover: Onclick;
  onclick: Onclick;
  resize:  boolean;
}

export interface Onclick {
  enable: boolean;
  mode:   string;
}

export interface Modes {
  grab:    Grab;
  bubble:  Bubble;
  repulse: Repulse;
  push:    Push;
  remove:  Push;
}

export interface Bubble {
  distance: number;
  size:     number;
  duration: number;
  opacity:  number;
  speed:    number;
}

export interface Grab {
  distance:    number;
  line_linked: GrabLineLinked;
}

export interface GrabLineLinked {
  opacity: number;
}

export interface Push {
  particles_nb: number;
}

export interface Repulse {
  distance: number;
  duration: number;
}

export interface Particles {
  number:      Number;
  color:       Color;
  shape:       Shape;
  opacity:     Opacity;
  size:        Opacity;
  line_linked: ParticlesLineLinked;
  move:        Move;
}

export interface Color {
  value: string;
}

export interface ParticlesLineLinked {
  enable:   boolean;
  distance: number;
  color:    string;
  opacity:  number;
  width:    number;
}

export interface Move {
  enable:    boolean;
  speed:     number;
  direction: string;
  random:    boolean;
  straight:  boolean;
  out_mode:  string;
  bounce:    boolean;
  attract:   Attract;
}

export interface Attract {
  enable:  boolean;
  rotateX: number;
  rotateY: number;
}

export interface Number {
  value:   number;
  density: Density;
}

export interface Density {
  enable:     boolean;
  value_area: number;
}

export interface Opacity {
  value:  number;
  random: boolean;
  anim:   Anim;
}

export interface Anim {
  enable:       boolean;
  speed:        number;
  opacity_min?: number;
  sync:         boolean;
  size_min?:    number;
}

export interface Shape {
  type:    string;
  stroke:  Stroke;
  polygon: Polygon;
  image:   Image;
}

export interface Image {
  src:    string;
  width:  number;
  height: number;
}

export interface Polygon {
  nb_sides: number;
}

export interface Stroke {
  width: number;
  color: string;
}
