<template>
  <div>
    <Menu mode="horizontal" ref="active" :theme="theme" :active-name="active">
      <MenuItem name="/bpmn-modeler" to="/bpmn-modeler">
        <Icon type="md-film" />默认Modeler
      </MenuItem>
      <MenuItem name="/bpmn-viewer" to="/bpmn-viewer">
        <Icon type="md-cube" />默认Viewer
      </MenuItem>
      <MenuItem name="/custom-modeler" to="/custom-modeler">
        <Icon type="md-cafe" />自定义Modeler
      </MenuItem>
      <MenuItem name="/custom-viewer" to="/custom-viewer">
        <Icon type="md-bus" />自定义Viewer
      </MenuItem>
      <MenuItem
        name="/bpmn"
        to="https://blog.ops-coffee.cn/bpmn"
        target="_blank"
      >
        <Icon type="md-bookmarks" />中文文档
      </MenuItem>
      <MenuItem
        name="/bpmn"
        to="https://blog.ops-coffee.cn/t/bpmn-demo-source-code"
        target="_blank"
      >
        <Icon type="logo-github" />Demo源码
      </MenuItem>
    </Menu>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light",
      active: "/bpmn-modeler",
    };
  },
  watch: {
    $route() {
      this.active = this.$route.path;
      if (this.active == "/") {
        this.active = "/bpmn-modeler";
      }
    },
  },
};
</script>
