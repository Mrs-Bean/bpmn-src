import inherits from "inherits";

import Modeler from "bpmn-js/lib/Modeler";

import CustomModule from "./custom";

function CustomModeler(options) {
  Modeler.call(this, options);

  this._customElements = [];
}

inherits(CustomModeler, Modeler);

CustomModeler.prototype._modules = [].concat(CustomModeler.prototype._modules, [
  CustomModule
]);

// customViewer

import Viewer from "bpmn-js/lib/Viewer";

import ZoomScrollModule from "diagram-js/lib/navigation/zoomscroll";
import MoveCanvasModule from "diagram-js/lib/navigation/movecanvas";

function CustomViewer(options) {
  Viewer.call(this, options);
}

inherits(CustomViewer, Viewer);

CustomViewer.prototype._modules = [].concat(Viewer.prototype._modules, [
  ZoomScrollModule,
  MoveCanvasModule
]);

export { CustomModeler, CustomViewer };
