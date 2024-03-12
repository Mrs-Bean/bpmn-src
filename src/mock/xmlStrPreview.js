export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="7.3.0">
  <process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始" run_state="1">
      <outgoing>Flow_0bh3hrz</outgoing>
    </startEvent>
    <sequenceFlow id="Flow_0bh3hrz" sourceRef="StartEvent_1y45yut" targetRef="Activity_0ikhe67" run_state="3" />
    <userTask id="Activity_0ikhe67" name="用户节点" run_state="2">
      <incoming>Flow_0bh3hrz</incoming>
      <outgoing>Flow_0fc3iv5</outgoing>
    </userTask>
    <sequenceFlow id="Flow_0fc3iv5" sourceRef="Activity_0ikhe67" targetRef="Activity_03zljea" run_state="3" />
    <serviceTask id="Activity_03zljea" name="服务节点" run_state="3">
      <incoming>Flow_0fc3iv5</incoming>
      <outgoing>Flow_0gm581s</outgoing>
    </serviceTask>
    <scriptTask id="Activity_0o8b5cf" name="脚本节点" run_state="5">
      <incoming>Flow_05z3etb</incoming>
      <outgoing>Flow_0b23d51</outgoing>
    </scriptTask>
    <sequenceFlow id="Flow_0b23d51" sourceRef="Activity_0o8b5cf" targetRef="Event_0idqhms" run_state="3" />
    <intermediateCatchEvent id="Event_0idqhms" name="定时" run_state="6">
      <incoming>Flow_0b23d51</incoming>
      <outgoing>Flow_17tttbw</outgoing>
      <timerEventDefinition id="TimerEventDefinition_1w7apdl" />
    </intermediateCatchEvent>
    <sequenceFlow id="Flow_17tttbw" sourceRef="Event_0idqhms" targetRef="Activity_0qkzn5l" run_state="3" />
    <manualTask id="Activity_0qkzn5l" name="手动节点" run_state="7">
      <incoming>Flow_17tttbw</incoming>
      <outgoing>Flow_0h1ee5i</outgoing>
    </manualTask>
    <exclusiveGateway id="Gateway_0wt35op" name="排他测试" run_state="8">
      <incoming>Flow_0h1ee5i</incoming>
      <outgoing>Flow_0epzve3</outgoing>
      <outgoing>Flow_1c7owwx</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="Flow_0h1ee5i" sourceRef="Activity_0qkzn5l" targetRef="Gateway_0wt35op" run_state="3" />
    <endEvent id="Event_169etvv">
      <incoming>Flow_0epzve3</incoming>
    </endEvent>
    <sequenceFlow id="Flow_0epzve3" sourceRef="Gateway_0wt35op" targetRef="Event_169etvv" run_state="0" />
    <sequenceFlow id="Flow_1c7owwx" sourceRef="Gateway_0wt35op" targetRef="Gateway_1twf21v" run_state="3" />
    <parallelGateway id="Gateway_1twf21v" name="并行网关" run_state="9">
      <incoming>Flow_1c7owwx</incoming>
      <outgoing>Flow_1hhbsin</outgoing>
      <outgoing>Flow_0iwk8my</outgoing>
      <outgoing>Flow_1u6fy41</outgoing>
    </parallelGateway>
    <task id="Activity_1l1mnne" name="并发1" run_state="2">
      <incoming>Flow_1hhbsin</incoming>
      <outgoing>Flow_00oo87f</outgoing>
    </task>
    <sequenceFlow id="Flow_1hhbsin" sourceRef="Gateway_1twf21v" targetRef="Activity_1l1mnne" run_state="4" />
    <task id="Activity_01yvw7v" name="并发2" run_state="2">
      <incoming>Flow_0iwk8my</incoming>
      <outgoing>Flow_0i0otp8</outgoing>
    </task>
    <sequenceFlow id="Flow_0iwk8my" sourceRef="Gateway_1twf21v" targetRef="Activity_01yvw7v" run_state="3" />
    <task id="Activity_0hm4v6g" name="并发3" run_state="2">
      <incoming>Flow_1u6fy41</incoming>
      <outgoing>Flow_18f94jd</outgoing>
    </task>
    <sequenceFlow id="Flow_1u6fy41" sourceRef="Gateway_1twf21v" targetRef="Activity_0hm4v6g" run_state="0" />
    <endEvent id="Event_0rhajm3">
      <incoming>Flow_00oo87f</incoming>
      <incoming>Flow_0i0otp8</incoming>
      <incoming>Flow_18f94jd</incoming>
    </endEvent>
    <sequenceFlow id="Flow_00oo87f" sourceRef="Activity_1l1mnne" targetRef="Event_0rhajm3" run_state="0" />
    <sequenceFlow id="Flow_0i0otp8" sourceRef="Activity_01yvw7v" targetRef="Event_0rhajm3" run_state="0" />
    <sequenceFlow id="Flow_18f94jd" sourceRef="Activity_0hm4v6g" targetRef="Event_0rhajm3" run_state="0" />
    <exclusiveGateway id="Gateway_1m2lvzc" default="Flow_115sy5h" run_state="2">
      <incoming>Flow_0gm581s</incoming>
      <outgoing>Flow_115sy5h</outgoing>
      <outgoing>Flow_05z3etb</outgoing>
    </exclusiveGateway>
    <userTask id="Activity_1e7vl70" name="用户确认">
      <incoming>Flow_115sy5h</incoming>
      <outgoing>Flow_07e0mr3</outgoing>
    </userTask>
    <sequenceFlow id="Flow_115sy5h" name="表达式A" sourceRef="Gateway_1m2lvzc" targetRef="Activity_1e7vl70" run_state="4" />
    <endEvent id="Event_17jw6l9">
      <incoming>Flow_097ql0t</incoming>
    </endEvent>
    <sequenceFlow id="Flow_0gm581s" sourceRef="Activity_03zljea" targetRef="Gateway_1m2lvzc" run_state="3" />
    <sequenceFlow id="Flow_05z3etb" name="表达式B" sourceRef="Gateway_1m2lvzc" targetRef="Activity_0o8b5cf" run_state="3" />
    <serviceTask id="Activity_18mxo9a" name="后置任务">
      <incoming>Flow_07e0mr3</incoming>
      <outgoing>Flow_097ql0t</outgoing>
    </serviceTask>
    <sequenceFlow id="Flow_07e0mr3" sourceRef="Activity_1e7vl70" targetRef="Activity_18mxo9a" />
    <sequenceFlow id="Flow_097ql0t" sourceRef="Activity_18mxo9a" targetRef="Event_17jw6l9" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNEdge id="Flow_097ql0t_di" bpmnElement="Flow_097ql0t">
        <omgdi:waypoint x="1070" y="320" />
        <omgdi:waypoint x="1202" y="320" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07e0mr3_di" bpmnElement="Flow_07e0mr3">
        <omgdi:waypoint x="1030" y="160" />
        <omgdi:waypoint x="1030" y="280" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_05z3etb_di" bpmnElement="Flow_05z3etb">
        <omgdi:waypoint x="750" y="145" />
        <omgdi:waypoint x="750" y="250" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="745" y="195" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0gm581s_di" bpmnElement="Flow_0gm581s">
        <omgdi:waypoint x="620" y="120" />
        <omgdi:waypoint x="725" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_115sy5h_di" bpmnElement="Flow_115sy5h">
        <omgdi:waypoint x="775" y="120" />
        <omgdi:waypoint x="980" y="120" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="867" y="95" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18f94jd_di" bpmnElement="Flow_18f94jd">
        <omgdi:waypoint x="970" y="830" />
        <omgdi:waypoint x="1090" y="830" />
        <omgdi:waypoint x="1090" y="720" />
        <omgdi:waypoint x="1182" y="720" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0i0otp8_di" bpmnElement="Flow_0i0otp8">
        <omgdi:waypoint x="970" y="720" />
        <omgdi:waypoint x="1182" y="720" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00oo87f_di" bpmnElement="Flow_00oo87f">
        <omgdi:waypoint x="970" y="610" />
        <omgdi:waypoint x="1090" y="610" />
        <omgdi:waypoint x="1090" y="720" />
        <omgdi:waypoint x="1182" y="720" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1u6fy41_di" bpmnElement="Flow_1u6fy41">
        <omgdi:waypoint x="720" y="635" />
        <omgdi:waypoint x="720" y="830" />
        <omgdi:waypoint x="870" y="830" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0iwk8my_di" bpmnElement="Flow_0iwk8my">
        <omgdi:waypoint x="720" y="635" />
        <omgdi:waypoint x="720" y="720" />
        <omgdi:waypoint x="870" y="720" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1hhbsin_di" bpmnElement="Flow_1hhbsin">
        <omgdi:waypoint x="745" y="610" />
        <omgdi:waypoint x="870" y="610" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1c7owwx_di" bpmnElement="Flow_1c7owwx">
        <omgdi:waypoint x="595" y="610" />
        <omgdi:waypoint x="695" y="610" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0epzve3_di" bpmnElement="Flow_0epzve3">
        <omgdi:waypoint x="570" y="635" />
        <omgdi:waypoint x="570" y="782" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0h1ee5i_di" bpmnElement="Flow_0h1ee5i">
        <omgdi:waypoint x="570" y="480" />
        <omgdi:waypoint x="570" y="585" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_17tttbw_di" bpmnElement="Flow_17tttbw">
        <omgdi:waypoint x="732" y="440" />
        <omgdi:waypoint x="620" y="440" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0b23d51_di" bpmnElement="Flow_0b23d51">
        <omgdi:waypoint x="750" y="330" />
        <omgdi:waypoint x="750" y="422" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0fc3iv5_di" bpmnElement="Flow_0fc3iv5">
        <omgdi:waypoint x="390" y="120" />
        <omgdi:waypoint x="520" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0bh3hrz_di" bpmnElement="Flow_0bh3hrz">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="290" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="134" y="145" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0y4oezl_di" bpmnElement="Activity_0ikhe67">
        <omgdc:Bounds x="290" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0m5xx5e_di" bpmnElement="Activity_03zljea">
        <omgdc:Bounds x="520" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_15km6mc_di" bpmnElement="Activity_0o8b5cf">
        <omgdc:Bounds x="700" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1rngba3_di" bpmnElement="Event_0idqhms">
        <omgdc:Bounds x="732" y="422" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="740" y="465" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ufmfo5_di" bpmnElement="Activity_0qkzn5l">
        <omgdc:Bounds x="520" y="400" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0wt35op_di" bpmnElement="Gateway_0wt35op" isMarkerVisible="true">
        <omgdc:Bounds x="545" y="585" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="491" y="603" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_169etvv_di" bpmnElement="Event_169etvv">
        <omgdc:Bounds x="552" y="782" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_121cvfo_di" bpmnElement="Gateway_1twf21v">
        <omgdc:Bounds x="695" y="585" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="698" y="561" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1l1mnne_di" bpmnElement="Activity_1l1mnne">
        <omgdc:Bounds x="870" y="570" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_01yvw7v_di" bpmnElement="Activity_01yvw7v">
        <omgdc:Bounds x="870" y="680" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0hm4v6g_di" bpmnElement="Activity_0hm4v6g">
        <omgdc:Bounds x="870" y="790" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0rhajm3_di" bpmnElement="Event_0rhajm3">
        <omgdc:Bounds x="1182" y="702" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1m2lvzc_di" bpmnElement="Gateway_1m2lvzc" isMarkerVisible="true">
        <omgdc:Bounds x="725" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="588" y="71" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1e7vl70_di" bpmnElement="Activity_1e7vl70">
        <omgdc:Bounds x="980" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_17jw6l9_di" bpmnElement="Event_17jw6l9">
        <omgdc:Bounds x="1202" y="302" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_18mxo9a_di" bpmnElement="Activity_18mxo9a">
        <omgdc:Bounds x="970" y="280" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`;
