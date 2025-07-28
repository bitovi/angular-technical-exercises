import {
  Component,
  ElementRef,
  inject,
  inputBinding,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { ButtonComponent } from '../../../button-exercise/components/button/button.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  standalone: true,
  imports: [ButtonComponent],
})
export class MainContentComponent {
  @ViewChild('button', { read: ElementRef })
  buttonRef!: ElementRef<HTMLButtonElement>;

  open = false;

  private readonly modalService = inject(ModalService);

  openModal() {
    this.open = true;
    const modal = this.modalService.appendModal(ModalComponent, [
      inputBinding('anchor', () => this.buttonRef.nativeElement),
      inputBinding('onClose', () => () => {
        this.modalService.removeComponentRef(modal);
      }),
    ]);
  }
}
