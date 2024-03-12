<template>
  <div class="containers">
    <div class="canvas" ref="canvas" id="canvas"></div>
  </div>
</template>

<script>
// 引入相关的依赖
import { xmlStr } from "../mock/xmlStrPreview";
import { CustomViewer } from "../components/customBpmn";

export default {
  name: "",
  components: {},
  created() {},
  mounted() {
    this.init();
  },
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null
    };
  },
  // 方法集合
  methods: {
    init() {
      this.bpmnViewer = new CustomViewer({
        container: this.$refs.canvas
      });

      this.createNewDiagram();
    },
    async createNewDiagram() {
      try {
        const result = await this.bpmnViewer.importXML(xmlStr);
        const { warnings } = result;
        console.log(warnings);

        const canvas = this.bpmnViewer.get("canvas");
        canvas.zoom("fit-viewport", true);

        this.success();
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    },
    success() {
      this.setColor();
      // this.getParms();
      this.addEventBusListener();
    },
    setColor() {
      // access viewer components
      const canvas = this.bpmnViewer.get("canvas");

      // 获取到全部节点
      const allShapes = this.bpmnViewer.get("elementRegistry").getAll();

      //循环节点添加颜色
      allShapes.forEach(element => {
        const shapeId = element.businessObject.id;
        const shapeAttrs = element.businessObject.$attrs;

        // add marker
        if (element.businessObject.$type != "bpmn:Group") {
          if (element.businessObject.$type == "bpmn:SequenceFlow") {
            canvas.addMarker(shapeId, "highlight-2" + shapeAttrs.run_state);
          } else {
            canvas.addMarker(shapeId, "highlight-" + shapeAttrs.run_state);
          }
        }
      });
    },
    getParms() {
      // 获取节点属性
      console.log(
        "123",
        this.bpmnViewer.get("elementRegistry").get("Activity_0o8b5cf")
          .businessObject.$attrs
      );

      // 获取上一个节点的类型
      console.log(
        "234",
        this.bpmnViewer.get("elementRegistry").get("Flow_1d9q74f")
          .businessObject.sourceRef.$type
      );
    },
    addEventBusListener() {
      const that = this;
      const eventBus = this.bpmnViewer.get("eventBus");

      eventBus.on("element.click", function(e) {
        console.log(
          "点击了element",
          e.element.businessObject.id,
          e.element.businessObject.$type,
          e.element.businessObject.name
        );
      });
    }
  },
  // 计算属性
  computed: {}
};
</script>

<style>
.containers {
  width: 100%;
  height: calc(100vh - 60px);
}
.canvas {
  width: 100%;
  height: 100%;
}
.highlight .djs-visual > :nth-child(1) {
  fill: #dfdfdf !important;
  stroke: #dfdfdf !important;
}
.highlight-0 .djs-visual > :nth-child(1) {
  stroke: black !important;
}
.highlight-1 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #f8f8f8 !important;
}
.highlight-2 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #cff5fa !important;
}
.highlight-3 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #d7f6ce !important;
}
.highlight-4 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #ffafaf !important;
}
.highlight-5 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #fde1b0 !important;
}
.highlight-6 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #f6d5f0 !important;
}
.highlight-7 .djs-visual > :nth-child(1) {
  fill: #c9e2fa !important;
}
.highlight-8 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #e2dcf9 !important;
}
.highlight-9 .djs-visual > :nth-child(1) {
  stroke: black !important;
  fill: #fa7c7c !important;
}
/* 连线 */
.highlight-20 .djs-visual > :nth-child(1) {
  stroke: black !important;
}
.highlight-23 .djs-visual > :nth-child(1) {
  stroke: green !important;
}
.highlight-24 .djs-visual > :nth-child(1) {
  stroke: red !important;
}
</style>
