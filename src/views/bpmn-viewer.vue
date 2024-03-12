<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
  </div>
</template>

<script>
import BpmnViewer from "bpmn-js/lib/Viewer";
import { xmlStr } from "../mock/xmlStrViewer";

export default {
  name: "ops-coffee",
  mounted() {
    this.init();
  },
  data() {
    return {
      bpmnViewer: null,
      container: null,
      canvas: null
    };
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      this.bpmnViewer = new BpmnViewer({
        container: canvas
      });

      this.createNewDiagram();
    },
    async createNewDiagram() {
      try {
        const result = await this.bpmnViewer.importXML(xmlStr);
        const { warnings } = result;
        console.log(warnings);

        // 屏幕自适应
        const canvas = this.bpmnViewer.get("canvas");
        canvas.zoom("fit-viewport", true);
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    }
  }
};
</script>

<style scoped>
.containers {
  width: 100%;
  height: calc(100vh - 60px);
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>
