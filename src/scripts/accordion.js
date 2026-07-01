import { AccordionController } from "./shared/accordion-controller.js";

export default class DGAAccordion {
  constructor(element) {
    this.accordion = element;
    this.controller = new AccordionController(element);
  }

  toggle(header) {
    this.controller.toggle(header);
  }

  open(item) {
    this.controller.open(item);
  }

  close(item) {
    this.controller.close(item);
  }

  closeAll() {
    this.controller.closeAll();
  }

  destroy() {
    this.controller.destroy();
  }
}
