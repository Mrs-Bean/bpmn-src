import store from "../../../store";
import { assign } from "min-dash";

export default function ContextPadProvider(
  config,
  injector,
  eventBus,
  contextPad,
  modeling,
  elementFactory,
  connect,
  create,
  popupMenu,
  canvas,
  rules,
  translate
) {
  this.modeling = modeling;
  this.elementFactory = elementFactory;
  this.connect = connect;
  this.create = create;
  this.translate = translate;
  config = config || {};

  if (config.autoPlace !== false) {
    this.autoPlace = injector.get("autoPlace", false);
  }

  contextPad.registerProvider(this);
}

ContextPadProvider.$inject = [
  "config.contextPad",
  "injector",
  "eventBus",
  "contextPad",
  "modeling",
  "elementFactory",
  "connect",
  "create",
  "popupMenu",
  "canvas",
  "rules",
  "translate"
];

ContextPadProvider.prototype.getContextPadEntries = function (element) {
  const {
    autoPlace,
    create,
    elementFactory,
    translate,
    modeling,
    connect
  } = this;

  function appendAction(type, className, title, options) {
    function appendStart(event, element) {
      var shape = elementFactory.createShape(assign({ type: type }, options));
      create.start(event, shape, {
        source: element
      });
    }

    var append = autoPlace
      ? function (event, element) {
        var shape = elementFactory.createShape(
          assign({ type: type }, options)
        );
        autoPlace.append(element, shape);
      }
      : appendStart;

    return {
      group: "model",
      className: className,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }

  function startConnect(event, element) {
    connect.start(event, element);
  }

  function removeElement(e) {
    modeling.removeElements([element]);
  }

  function clickElement(e) {
    store.commit("SETNODEINFO", element);
    store.commit("TOGGLENODEVISIBLE", true);
  }

  var actions = {};

  if (
    element.type === "bpmn:UserTask" ||
    element.type === "bpmn:ServiceTask" ||
    element.type === "bpmn:ScriptTask" ||
    element.type === "bpmn:StartEvent" ||
    element.type === "bpmn:ExclusiveGateway" ||
    element.type === "bpmn:ParallelGateway" ||
    element.type === "bpmn:IntermediateCatchEvent" ||
    element.type === "bpmn:IntermediateThrowEvent"
  ) {
    actions = {
      "append.user-task": appendAction(
        "bpmn:UserTask",
        "bpmn-icon-user-task",
        "用户任务"
      ),
      "append.servicetask": appendAction(
        "bpmn:ServiceTask",
        "bpmn-icon-service-task",
        "服务任务"
      ),
      "append.scripttask": appendAction(
        "bpmn:ScriptTask",
        "bpmn-icon-script-task",
        "脚本任务"
      ),
      "append.exclusive-gateway": appendAction(
        "bpmn:ExclusiveGateway",
        "bpmn-icon-gateway-xor",
        "排他网关"
      ),
      "append.parallel-gateway": appendAction(
        "bpmn:ParallelGateway",
        "bpmn-icon-gateway-parallel",
        "并行网关"
      ),
      "append.timer-intermediate-event": appendAction(
        "bpmn:IntermediateCatchEvent",
        "bpmn-icon-intermediate-event-catch-timer",
        translate("Append TimerIntermediateCatchEvent"),
        { eventDefinitionType: "bpmn:TimerEventDefinition" }
      ),
      "append.end-event": appendAction(
        "bpmn:EndEvent",
        "bpmn-icon-end-event-none",
        "结束"
      ),
      connect: {
        group: "edit",
        className: "bpmn-icon-connection-multi",
        title: translate("Connect using DataInputAssociation"),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    };
  }

  if (
    element.type === "bpmn:UserTask" ||
    element.type === "bpmn:ServiceTask" ||
    element.type === "bpmn:ScriptTask" ||
    element.type === "bpmn:SequenceFlow"
  ) {
    assign(actions, {
      edit: {
        group: "edit",
        className: "bpmn-icon-business-rule",
        title: translate("属性"),
        action: {
          click: clickElement
        }
      }
    });
  }

  if (element.type === "bpmn:Lane" || element.type === "bpmn:Participant") {
    actions = {
      "lane-insert-above": {
        group: "lane-insert-above",
        className: "bpmn-icon-lane-insert-above",
        title: translate("Add Lane above"),
        action: {
          click: function (event, element) {
            modeling.addLane(element, "top");
          }
        }
      },
      "lane-insert-below": {
        group: "lane-insert-below",
        className: "bpmn-icon-lane-insert-below",
        title: translate("Add Lane below"),
        action: {
          click: function (event, element) {
            modeling.addLane(element, "bottom");
          }
        }
      }
    };
  }

  assign(actions, {
    delete: {
      group: "edit",
      className: "bpmn-icon-trash",
      title: translate("Remove"),
      action: {
        click: removeElement
      }
    }
  });

  return actions;
};
