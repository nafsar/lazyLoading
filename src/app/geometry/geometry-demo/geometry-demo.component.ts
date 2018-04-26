import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-geometry-demo',
  templateUrl: './geometry-demo.component.html',
  styleUrls: ['./geometry-demo.component.css']
})
export class GeometryDemoComponent implements OnInit {

  @ViewChild('ring') elementRef: ElementRef;
  private ring: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private donut: THREE.Mesh;
  width: any;
  height: any;
  constructor() {
   // console.log(THREE);
  }

  ngOnInit() {
    this.ring = this.elementRef.nativeElement;
    this.init();
  }

  init() {
    this.width = 650;
    this.height = 150;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(85, this.width / this.height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0xffffff, 0);
    this.scene.add(this.camera);
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.setSize(this.width, this.height);
    this.ring.appendChild(this.renderer.domElement);
    const geometry = new THREE.TorusGeometry(7, 2.2, 12, 54, 9.3);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
    this.donut = new THREE.Mesh(geometry, material);
    this.donut.position.set(-50, -50, -50);
    const light = new THREE.PointLight(0xFFF000);
    light.position.set(-50, -50, -50);
    this.scene.add(light);

    this.scene.add(this.donut);
    this.render();
  }

  render() {
    const animate: GeometryDemoComponent = this;
    (function render() {
      requestAnimationFrame(render);
      animate.renderer.render(animate.scene, animate.camera);
     /*  animate.donut.rotateX(0.1);
      animate.donut.rotateY(0.1); */
      animate.donut.position.addScalar(0.1);
    })();
  }


}

