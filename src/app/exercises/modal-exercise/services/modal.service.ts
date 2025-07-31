/*
 * This file does not need any updates.
 */

// source: https://netbasal.com/getting-to-know-the-createcomponent-api-in-angular-22fb115f08e2

import {
  ApplicationRef,
  Injectable,
  createComponent,
  ComponentRef,
  Type,
  Binding,
  inject,
} from '@angular/core';

const MODAL_LAYER_ID = 'modals';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly applicationRef = inject(ApplicationRef);

  /**
   * Dynamically append component to the modal layer in the body.
   *
   * ```ts
   * import { inputBinding } from '@angular/core';
   *
   * this.modalService.appendModal(MyComponentClass, [
   *   inputBinding('input-bind-1', () => SOME_VALUE),
   *   inputBinding('input-bind-2', () => SOME_FUNCTION),
   * ]);
   * ```
   */
  appendModal<T>(component: Type<T>, bindings?: Binding[]): ComponentRef<T> {
    const modalLayer = this.ensureModalLayer();

    // Create modal component dynamically and return reference
    // to be used later to remove itself
    return this.appendComponent(component, modalLayer, bindings);
  }

  /**
   * Clean up Component instance and remove from dom.
   */
  removeComponentRef<T>(componentRef: ComponentRef<T>): void {
    // Cleans up Component instance and dom element too
    this.applicationRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

  /**
   * Ensures that the expected div within the body element exists for modals to
   * populate.
   */
  private ensureModalLayer(): HTMLDivElement {
    const existingModalLayer = document.getElementById(MODAL_LAYER_ID);

    if (existingModalLayer) {
      return existingModalLayer as HTMLDivElement;
    }

    const modalLayer = document.createElement('div');
    modalLayer.id = MODAL_LAYER_ID;
    document.body.appendChild(modalLayer);

    return modalLayer;
  }

  /**
   * Create Component instance and attach to target in dom. To destroy Component
   * instance and clean up from dom, call `removeComponentRef`.
   */
  private appendComponent<T>(
    component: Type<T>,
    target: Element,
    bindings?: Binding[],
  ): ComponentRef<T> {
    const createComponentOptions = {
      bindings,
      environmentInjector: this.applicationRef.injector,
    };

    const componentRef = createComponent(component, createComponentOptions);

    this.applicationRef.attachView(componentRef.hostView);

    // Append element to the target in dom
    target.appendChild(componentRef.location.nativeElement);

    // Remove ComponentRef to destroy later
    return componentRef;
  }
}
