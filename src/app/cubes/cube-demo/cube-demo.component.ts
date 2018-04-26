import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube-demo',
  templateUrl: './cube-demo.component.html',
  styleUrls: ['./cube-demo.component.css']
})
export class CubeDemoComponent implements OnInit {

  @ViewChild('cubebox') elementRef: ElementRef;
  private cubebox: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh;
  width: any;
  height: any;
  constructor() {
   // console.log(THREE);
  }

  ngOnInit() {
    this.cubebox = this.elementRef.nativeElement;
    this.init();
  }

  init() {
    this.width = 400;
    this.height = 150;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(85, this.width / this.height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0xffffff, 0);
    this.scene.add(this.camera);
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.setSize(this.width, this.height);
    this.cubebox.appendChild(this.renderer.domElement);
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(-50, -50, -50);
    this.scene.add(this.cube);
    this.render();
  }

  render() {
    const animate: CubeDemoComponent = this;
    (function render() {
      requestAnimationFrame(render);
      animate.renderer.render(animate.scene, animate.camera);
      animate.cube.rotateX(0.1);
      animate.cube.rotateY(0.1);
      animate.cube.position.addScalar(0.2);
    })();
  }

 
}


