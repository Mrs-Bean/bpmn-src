export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
      <outgoing>Flow_0jfbnmb</outgoing>
    </startEvent>
    <userTask id="Activity_1w1vj9r" name="提交申请">
      <incoming>Flow_0jfbnmb</incoming>
      <outgoing>Flow_1325ww1</outgoing>
    </userTask>
    <sequenceFlow id="Flow_0jfbnmb" sourceRef="StartEvent_1y45yut" targetRef="Activity_1w1vj9r" />
    <exclusiveGateway id="Gateway_1x6u0hn" default="Flow_15zzkck">
      <incoming>Flow_1325ww1</incoming>
      <outgoing>Flow_0we0595</outgoing>
      <outgoing>Flow_15zzkck</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="Flow_1325ww1" sourceRef="Activity_1w1vj9r" targetRef="Gateway_1x6u0hn" />
    <sequenceFlow id="Flow_0we0595" name="大于7天" sourceRef="Gateway_1x6u0hn" targetRef="Activity_1149ksn" />
    <sequenceFlow id="Flow_15zzkck" name="小于7天" sourceRef="Gateway_1x6u0hn" targetRef="Activity_17lsppc" />
    <userTask id="Activity_1149ksn" name="总监审批">
      <outgoing>Flow_0nto1w2</outgoing>
    </userTask>
    <sequenceFlow id="Flow_0nto1w2" sourceRef="Activity_1149ksn" targetRef="Activity_0h7nxlj" />
    <userTask id="Activity_17lsppc" name="主管审批">
      <outgoing>Flow_0we5cp9</outgoing>
    </userTask>
    <sequenceFlow id="Flow_0we5cp9" sourceRef="Activity_17lsppc" targetRef="Activity_0h7nxlj" />
    <endEvent id="Event_0lnbw1h" name="结束">
      <incoming>Flow_1exe8d4</incoming>
    </endEvent>
    <sequenceFlow id="Flow_1exe8d4" sourceRef="Activity_0h7nxlj" targetRef="Event_0lnbw1h" />
    <serviceTask id="Activity_0h7nxlj" name="EHR系统处理" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_0jfbnmb_di" bpmnElement="Flow_0jfbnmb">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="300" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1325ww1_di" bpmnElement="Flow_1325ww1">
        <omgdi:waypoint x="400" y="120" />
        <omgdi:waypoint x="515" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0we0595_di" bpmnElement="Flow_0we0595">
        <omgdi:waypoint x="540" y="95" />
        <omgdi:waypoint x="540" y="0" />
        <omgdi:waypoint x="680" y="0" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="535" y="45" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_15zzkck_di" bpmnElement="Flow_15zzkck">
        <omgdi:waypoint x="540" y="145" />
        <omgdi:waypoint x="540" y="230" />
        <omgdi:waypoint x="680" y="230" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="535" y="185" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nto1w2_di" bpmnElement="Flow_0nto1w2">
        <omgdi:waypoint x="780" y="0" />
        <omgdi:waypoint x="860" y="0" />
        <omgdi:waypoint x="860" y="120" />
        <omgdi:waypoint x="1000" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0we5cp9_di" bpmnElement="Flow_0we5cp9">
        <omgdi:waypoint x="780" y="230" />
        <omgdi:waypoint x="860" y="230" />
        <omgdi:waypoint x="860" y="120" />
        <omgdi:waypoint x="1000" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1exe8d4_di" bpmnElement="Flow_1exe8d4">
        <omgdi:waypoint x="1100" y="120" />
        <omgdi:waypoint x="1202" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1w1vj9r_di" bpmnElement="Activity_1w1vj9r">
        <omgdc:Bounds x="300" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1x6u0hn_di" bpmnElement="Gateway_1x6u0hn" isMarkerVisible="true">
        <omgdc:Bounds x="515" y="95" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1qqgn53_di" bpmnElement="Activity_1149ksn">
        <omgdc:Bounds x="680" y="-40" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1owyb7m_di" bpmnElement="Activity_17lsppc">
        <omgdc:Bounds x="680" y="190" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0lnbw1h_di" bpmnElement="Event_0lnbw1h">
        <omgdc:Bounds x="1202" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="1209" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1umtko1_di" bpmnElement="Activity_0h7nxlj">
        <omgdc:Bounds x="1000" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`;
