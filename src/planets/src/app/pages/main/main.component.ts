import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../planet-card/particles/particlesjs-config';
// import * as particlesJS from 'particles.js';
declare let particlesJS: any

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  ngOnInit(): void {
  this.invokeParticles()
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
