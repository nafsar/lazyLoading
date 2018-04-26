import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
// import './js/StartThree';

@Component({
  selector: 'app-abstract-demo',
  templateUrl: './abstract-demo.component.html',
  styleUrls: ['./abstract-demo.component.css']
})
export class AbstractDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('abstract') elementRef: ElementRef;
  private abstract: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private triangle: THREE.Mesh;
  width: any;
  height: any;
  constructor() {
    // console.log(THREE);
  }

  ngOnInit() {
    this.abstract = this.elementRef.nativeElement;
    this.init();
  }

  init() {
    this.width = 650;
    this.height = 150;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, this.width / this.height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0xffffff, 0);
    this.scene.add(this.camera);
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.setSize(this.width, this.height);
    this.abstract.appendChild(this.renderer.domElement);
    const geometry = new THREE.TorusGeometry(20, 2, 12, 3, 6.3);
    const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    this.triangle = new THREE.Mesh(geometry, material);
    this.triangle.position.set(-50, -50, -50);
    const light = new THREE.PointLight(0xFFF000);
    light.position.set(-50, -50, -50);
    this.scene.add(light);

    this.scene.add(this.triangle);
  }

  render() {
    const animate: AbstractDemoComponent = this;
    (function render() {
      requestAnimationFrame(render);
      animate.renderer.render(animate.scene, animate.camera);
      animate.triangle.rotateX(0.01);
      animate.triangle.rotateY(0.02);
      animate.triangle.position.addScalar(0.1);
    })();
  }

  ngAfterViewInit() {
    this.render();
  }

}
