<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
    <ul class="buttons">
      <li>
        <a href="javascript:" class="active" ref="saveXML" title="保存为bpmn"
          >保存为bpmn</a
        >
      </li>
      <li>
        <a href="javascript:" class="active" ref="saveSvg" title="保存为svg"
          >保存为svg</a
        >
      </li>
      <li>
        <a
          href="javascript:"
          class="active"
          @click="handlerUndo"
          title="撤销操作"
          >撤销</a
        >
      </li>
      <li>
        <a
          href="javascript:"
          class="active"
          @click="handlerRedo"
          title="恢复操作"
          >恢复</a
        >
      </li>
      <li>
        <a
          href="javascript:"
          class="active"
          @click="handlerZoom(0.1)"
          title="放大"
          >放大</a
        >
      </li>
      <li>
        <a
          href="javascript:"
          class="active"
          @click="handlerZoom(-0.1)"
          title="缩小"
          >缩小</a
        >
      </li>
      <li>
        <a
          href="javascript:"
          class="active"
          @click="handlerZoom(0)"
          title="还原"
          >还原</a
        >
      </li>
    </ul>

    <Drawer
      title="Create"
      v-model="userTask"
      width="720"
      :mask-closable="false"
    >
      <Form :model="formData">
        <FormItem label="节点类型" label-position="top">
          <Input v-model="formData.type" disabled />
        </FormItem>
        <FormItem label="节点名称" label-position="top">
          <Input v-model="formData.name" placeholder></Input>
        </FormItem>
        <FormItem label="处理场景" label-position="top">
          <Select>
            <Option value="beijing">先派单后处理</Option>
            <Option value="shanghai" disabled>London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="处理人" label-position="top">
          <Select multiple>
            <Option value="beijing">ops-coffee</Option>
            <Option value="shanghai" disabled>London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="是否可转单" label-position="top">
          <RadioGroup>
            <Radio label="yes">
              <span>是</span>
            </Radio>
            <Radio label="no">
              <span>否</span>
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="是否可终止" label-position="top">
          <RadioGroup>
            <Radio label="yes">
              <span>是</span>
            </Radio>
            <Radio label="no">
              <span>否</span>
            </Radio>
          </RadioGroup>
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="userTask = false"
          >Cancel</Button
        >
        <Button type="primary" @click="userTask = false">Submit</Button>
      </div>
    </Drawer>

    <Drawer
      title="Create"
      v-model="serviceTask"
      width="720"
      :mask-closable="false"
    >
      <Form :model="formData">
        <FormItem label="节点类型" label-position="top">
          <Input v-model="formData.type" disabled />
        </FormItem>
        <FormItem label="节点名称" label-position="top">
          <Input v-model="formData.name" placeholder></Input>
        </FormItem>

        <FormItem label="URL" label-position="top">
          <Input v-model="formData.url" placeholder></Input>
        </FormItem>

        <FormItem label label-position="top">
          <RadioGroup>
            <Radio label="get">
              <span>GET</span>
            </Radio>
            <Radio label="post">
              <span>POST</span>
            </Radio>
            <Radio label="put">
              <span>PUT</span>
            </Radio>
            <Radio label="delete">
              <span>DELETE</span>
            </Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="Header" label-position="top">
          <Input v-model="formData.url" placeholder></Input>
        </FormItem>

        <FormItem label="参数" label-position="top">
          <Input
            type="textarea"
            v-model="formData.desc"
            :rows="4"
            placeholder
          />
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="serviceTask = false"
          >Cancel</Button
        >
        <Button type="primary" @click="serviceTask = false">Submit</Button>
      </div>
    </Drawer>

    <Drawer
      title="Create"
      v-model="scriptTask"
      width="720"
      :mask-closable="false"
    >
      <Form :model="formData">
        <FormItem label="状态" label-position="top">
          <RadioGroup v-model="sequenceFlow">
            <Radio label="通过">
              <span>通过</span>
            </Radio>
            <Radio label="不通过">
              <span>不通过</span>
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="条件表达式" label-position="top">
          <Input placeholder></Input>
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="scriptTask = false"
          >Cancel</Button
        >
        <Button type="primary" @click="scriptTask = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
// 引入相关的依赖
import { xmlStr } from "../mock/xmlStrPreview";
import { CustomModeler } from "../components/customBpmn";

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
      canvas: null,
      scale: 1,
      userTask: false,
      serviceTask: false,
      scriptTask: false,
      sequenceFlow: "",
      formData: {
        name: "",
        type: ""
      }
    };
  },
  // 方法集合
  methods: {
    init() {
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas;
      // 建模
      this.bpmnModeler = new CustomModeler({
        container: canvas,
        additionalModules: [
          {
            // 禁止编辑label
            labelEditingProvider: ["value", ""]
          }
        ]
      });
      this.createNewDiagram();
    },
    async createNewDiagram() {
      try {
        const result = await this.bpmnModeler.importXML(xmlStr);
        const { warnings } = result;
        console.log(warnings);

        this.success();
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    },
    success() {
      this.addBpmnListener();
      this.addModelerListener();
      this.addEventBusListener();
    },
    addModelerListener() {
      const bpmnjs = this.bpmnModeler;
      const that = this;
      // 这里我是用了一个forEach给modeler上添加要绑定的事件
      const events = [
        "shape.added",
        "shape.move.end",
        "shape.removed",
        "connect.end",
        "connect.move"
      ];
      events.forEach(function(event) {
        that.bpmnModeler.on(event, e => {
          console.log(event, e);
          var elementRegistry = bpmnjs.get("elementRegistry");
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
          console.log(shape);
        });
      });
    },
    // 下载
    async addBpmnListener() {
      const that = this;
      const downloadLink = this.$refs.saveXML;
      const downloadSvgLink = this.$refs.saveSvg;

      async function opscoffee() {
        try {
          const result = await that.saveSVG();
          const { svg } = result;

          that.setEncoded(downloadSvgLink, "ops-coffee.svg", svg);
        } catch (err) {
          console.log(err);
        }

        try {
          const result = await that.saveXML();
          const { xml } = result;

          that.setEncoded(downloadLink, "ops-coffee.bpmn", xml);
        } catch (err) {
          console.log(err);
        }
      }

      opscoffee();
      this.bpmnModeler.on("commandStack.changed", opscoffee);
    },
    async saveSVG(done) {
      try {
        const result = await this.bpmnModeler.saveSVG(done);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    async saveXML(done) {
      try {
        const result = await this.bpmnModeler.saveXML({ format: true }, done);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    setEncoded(link, name, data) {
      const encodedData = encodeURIComponent(data);

      if (data) {
        link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
        link.download = name;
      }
    },
    handlerRedo() {
      this.bpmnModeler.get("commandStack").redo();
    },
    handlerUndo() {
      this.bpmnModeler.get("commandStack").undo();
    },
    handlerZoom(radio) {
      const newScale = !radio ? 1.0 : this.scale + radio;
      this.bpmnModeler.get("canvas").zoom(newScale);

      this.scale = newScale;
    },
    addEventBusListener() {
      const that = this;
      const eventBus = this.bpmnModeler.get("eventBus");
      const modeling = this.bpmnModeler.get("modeling");
      const elementRegistry = this.bpmnModeler.get("elementRegistry");

      eventBus.on("element.click", function(e) {
        console.log(
          "点击了element",
          e.element.businessObject.id,
          e.element.businessObject.$type,
          e.element.businessObject.name
        );

        if (e.element.businessObject.$type == "bpmn:SequenceFlow") {
          const sourceRef = e.element.businessObject.sourceRef;

          if (sourceRef.$type == "bpmn:ExclusiveGateway") {
            var targetElement = elementRegistry.get(sourceRef.id);

            modeling.updateProperties(targetElement, {
              default: e.element.businessObject
            });
          }
        }
      });
    }
  },
  // 计算属性
  computed: {
    task: {
      get: function() {
        const that = this;
        const element = this.$store.state.bpmn.nodeInfo;

        if (element.businessObject) {
          console.log(
            element.businessObject.id,
            element.businessObject.name,
            element.businessObject.$type
          );

          if (element.businessObject.$type === "bpmn:UserTask") {
            that.formData.type = "用户任务";
            that.formData.name = element.businessObject.name;
            that.userTask = this.$store.state.bpmn.nodeVisible;
          }

          if (element.businessObject.$type === "bpmn:ServiceTask") {
            that.formData.type = "服务任务";
            that.formData.name = element.businessObject.name;
            that.serviceTask = this.$store.state.bpmn.nodeVisible;
          }

          if (element.businessObject.$type === "bpmn:ScriptTask") {
            that.formData.type = "脚本任务";
            that.formData.name = element.businessObject.name;
            that.serviceTask = this.$store.state.bpmn.nodeVisible;
          }

          if (element.businessObject.$type === "bpmn:SequenceFlow") {
            that.sequenceFlow = element.businessObject.name;
            that.scriptTask = this.$store.state.bpmn.nodeVisible;
          }
        }

        return false;
      },
      set: function(val) {
        this.$store.state.bpmn.nodeVisible = val;
      }
    }
  },
  watch: {
    task(val) {},
    userTask(val) {
      this.$store.state.bpmn.nodeVisible = val;
    },
    serviceTask(val) {
      this.$store.state.bpmn.nodeVisible = val;
    },
    scriptTask(val) {
      this.$store.state.bpmn.nodeVisible = val;
    },
    sequenceFlow(val) {
      const element = this.$store.state.bpmn.nodeInfo;
      const modeling = this.bpmnModeler.get("modeling");
      modeling.updateLabel(element, val);
    },
    "formData.name": {
      handler(val, old) {
        const element = this.$store.state.bpmn.nodeInfo;
        const modeling = this.bpmnModeler.get("modeling");
        modeling.updateLabel(element, val);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.containers {
  background: white;
  overflow: auto;
  background-image: linear-gradient(
      90deg,
      rgba(220, 220, 220, 0.5) 6%,
      transparent 0
    ),
    linear-gradient(rgba(192, 192, 192, 0.5) 6%, transparent 0);
  background-size: 12px 12px;
  width: 100%;
  height: calc(100vh - 60px);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.canvas {
  width: 100%;
  height: 100%;
}
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
.buttons {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
.buttons li {
  display: inline-block;
  margin: 5px;
}
.buttons li a {
  color: #999;
  background: #eee;
  cursor: not-allowed;
  padding: 8px;
  border: 1px solid #ccc;
  text-decoration: none;
}
.buttons li a.active {
  color: #333;
  background: #fff;
  cursor: pointer;
}
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>
