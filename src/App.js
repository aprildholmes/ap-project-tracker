import { useState, useEffect } from "react";

const STAGES     = ["Kickoff & Discovery","Requirements & Design","Drafting & Analysis","Review & Validation","Finalization & Delivery"];
const TEAM       = ["April","Alex","Christine","Cveta","Scott","Josh","Unassigned"];
const LEADS      = ["April","Christine","Josh"];
const CATEGORIES    = ["New Implementation","Process Design/Standardization","Enhancement","Ongoing Support"];
const TASK_STATUSES = ["Not Started","In Progress","Complete","On Hold","Cancelled"];

const DEFAULT_TASKS = () => [
  {stage:0,text:"Kickoff / discovery call with stakeholders",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:0,text:"Review existing project documents",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:1,text:"Define objectives and requirements",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:1,text:"Develop project plan and timeline",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:2,text:"Execute core project deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:2,text:"Document progress and findings",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:3,text:"Stakeholder review of draft deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:3,text:"Incorporate feedback / revisions",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:4,text:"Final delivery and handoff",done:false,owners:[],status:"Not Started",taskNotes:[]},
  {stage:4,text:"Project close-out documentation",done:false,owners:[],status:"Not Started",taskNotes:[]},
];

const INIT = [ // v2
  { id:"AS-002", type:"AS", title:"Chiesi Medical Affairs Dashboard", sub:"New Implementation", status:"In Progress", activeStage:2, health:"On Track", healthNote:"", dueDate:"2026-05-30", lead:"Christine", notes:"Waiting on final KPI sign-off from Chiesi leadership before proceeding to build.", nextSteps:"", completedDate:"", tasks:[
    {stage:0,text:"Kickoff / discovery session with stakeholders",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:1,text:"Configure Power BI connection to Veeva CRM data sources",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:1,text:"Establish data refresh schedules and pipeline architecture",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Validate data integrity between source systems and reporting environment",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Document technical specifications for future phase scalability",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Review existing KPIs, assess gaps, and develop best practice recommendations",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Document final metrics definitions and calculation methodologies",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Facilitate working sessions to align stakeholders on priority KPIs",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Present metrics recommendations with rationale and benchmarks",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Obtain existing Chiesi dashboard designs for aesthetic reference",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Develop design concepts and wireframes for all three audience views",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Conduct iterative design reviews and incorporate feedback",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Finalize visual standards and dashboard specifications",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build MSL-level dashboard view",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build manager-level dashboard view",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build senior leadership dashboard view",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Conduct QA / testing across all views",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Stakeholder review of draft deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Incorporate feedback / revisions",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Secure executive approval on final dashboard specifications",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Document governance model for ongoing metrics management",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Develop user training materials",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Conduct training sessions for each audience group",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver final documentation and handoff package",done:false,owners:[],status:"Not Started",taskNotes:[]},
  ]},
  { id:"AS-001", type:"AS", title:"Chiesi HCP Segmentation & Prioritization", sub:"Process Design/Standardization", status:"In Progress", activeStage:2, health:"Delayed", healthNote:"", dueDate:"2026-04-15", lead:"Josh", notes:"Build a strategic segmentation framework for Chiesi's U.S. respiratory launch that identifies and prioritizes HCPs by role, belief alignment, and influence — translating into a capacity plan, tiered candidate lists, and Veeva-ready files for field execution.", nextSteps:"", completedDate:"", tasks:[
    {stage:0,text:"Kickoff / discovery call with stakeholders",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:0,text:"Estimate belief alignment using available proxies and Sermo analytics",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:1,text:"Define preference fields and framework for future data capture",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Apply demographic segmentation",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Define Share of Scientific Voice (SOSV) signals",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Review field parameters and align on time allocation by segment",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Define digital-first vs. MSL priority segments",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build candidate lists by segment using available data sources",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Create within-segment prioritization tiers (Tier 1 / 2 / 3)",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Document scoring logic and rationale",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Produce final segmentation tables and data dictionary",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build Veeva upload files",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Review current Veeva configuration and document requirements for changes",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Develop governance guidance",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Conduct field review session and capture MSL/FL feedback",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Obtain field input before any KOL list changes are made in Veeva",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Incorporate validated adjustments",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Stakeholder review of draft deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Incorporate feedback / revisions",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver Segmentation Framework Document",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver Capacity & Prioritization Model",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver Segmented HCP Universe File",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver Field Validation Package",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver final Veeva-Ready Load Files + data dictionary + admin notes",done:false,owners:[],status:"Not Started",taskNotes:[]},
  ]},
  { id:"FMS-001", type:"FMS", title:"Field Medical Strategy Support", sub:"Process Design/Standardization", status:"In Progress", activeStage:2, health:"On Track", healthNote:"", dueDate:"2026-06-30", lead:"Josh", notes:"", nextSteps:"", completedDate:"", tasks:[
    {stage:0,text:"Kickoff / discovery call with stakeholders",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:0,text:"Review existing Medical Strategy documents",done:true,owners:[],status:"Complete",taskNotes:[]},
    {stage:1,text:"Define Field Medical objectives aligned to Medical Strategy",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Establish prioritized segmentation across KOL development and field activities",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Map existing content to KOL segments and engagement stages",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Build engagement logic",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Draft shared Field Medical narrative / plan",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Review existing datasets and confirm priority vs. non-priority state logic",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Assess territory coverage and develop prioritization strategy",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Document directional territory recommendations",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Model MSL capacity across responsibilities",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Set engagement targets by activity type",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Align segmentation and engagement logic with Veeva structures",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Recommend activity tracking and insight capture approach in Veeva",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Document initial site archetype definitions",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Identify key questions and dependencies for site readiness team",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Stakeholder review of draft deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Incorporate feedback / revisions",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Final leadership alignment meeting",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver final Field Medical plan to client",done:false,owners:[],status:"Not Started",taskNotes:[]},
  ]},
  { id:"AS-003", type:"AS", title:"Medical Affairs Dashboard Phase 1", sub:"New Implementation", status:"Not Started", activeStage:0, health:"On Track", healthNote:"", dueDate:"2026-08-01", lead:"Christine", notes:"Pending kickoff scheduling.", nextSteps:"", completedDate:"", tasks:[
    {stage:0,text:"Kickoff / discovery call with stakeholders",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:0,text:"Review existing Medical Strategy documents and current data infrastructure",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:0,text:"Map existing content and identify data gaps",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:0,text:"Document directional recommendations for Phase 1 scope",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Define dashboard requirements and KPI framework",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Align on data sources, refresh logic, and architecture",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Develop stakeholder communication plan",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:1,text:"Develop Phase 2 architecture recommendation",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Build project map across all functional teams",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Develop complete parameter taxonomy",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:2,text:"Document data collection plan per team",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Stakeholder review of draft deliverables",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:3,text:"Incorporate feedback / revisions",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver project map across all functional teams",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver complete parameter taxonomy",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver data collection plan per team",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver stakeholder communication plan",done:false,owners:[],status:"Not Started",taskNotes:[]},
    {stage:4,text:"Deliver Phase 2 architecture recommendation",done:false,owners:[],status:"Not Started",taskNotes:[]},
  ]},
];

const TC    = {AS:{bg:"#E6F1FB",color:"#0C447C",border:"#B5D4F4"},FMS:{bg:"#EAF3DE",color:"#27500A",border:"#C0DD97"},MS:{bg:"#FAEEDA",color:"#633806",border:"#FAC775"},OTH:{bg:"#F1EFE8",color:"#444441",border:"#D3D1C7"}};
const TC_DK = {AS:{bg:"#0C447C22",color:"#60A5FA",border:"#1e3a5f"},FMS:{bg:"#14532d22",color:"#4ade80",border:"#14532d"},MS:{bg:"#78350f22",color:"#fbbf24",border:"#78350f"},OTH:{bg:"#1f293799",color:"#9ca3af",border:"#374151"}};
const SC    = {"In Progress":{bg:"#EAF3DE",color:"#3B6D11"},"Not Started":{bg:"#F1EFE8",color:"#5F5E5A"},"At Risk":{bg:"#FAEEDA",color:"#854F0B"},"Complete":{bg:"#E1F5EE",color:"#085041"},"Delayed":{bg:"#FAEEDA",color:"#854F0B"}};
const SC_DK = {"In Progress":{bg:"#14532d33",color:"#4ade80"},"Not Started":{bg:"#1f293799",color:"#9ca3af"},"At Risk":{bg:"#78350f33",color:"#fbbf24"},"Complete":{bg:"#065f4633",color:"#34d399"},"Delayed":{bg:"#78350f33",color:"#fbbf24"}};
const HC    = {"On Track":{bg:"#EAF3DE",color:"#3B6D11",border:"#C0DD97"},"At Risk":{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},"Delayed":{bg:"#FAEEDA",color:"#854F0B",border:"#FAC775"},"Off Track":{bg:"#FCEBEB",color:"#A32D2D",border:"#F7C1C1"},"On Hold":{bg:"#EEEDFE",color:"#3C3489",border:"#AFA9EC"}};
const HC_DK = {"On Track":{bg:"#14532d33",color:"#4ade80",border:"#14532d"},"At Risk":{bg:"#78350f33",color:"#fbbf24",border:"#854F0B"},"Delayed":{bg:"#78350f33",color:"#fbbf24",border:"#854F0B"},"Off Track":{bg:"#7f1d1d33",color:"#f87171",border:"#7f1d1d"},"On Hold":{bg:"#3730a333",color:"#a78bfa",border:"#4338ca"}};
const OC    = {April:"#7c3aed",Alex:"#2563eb",Christine:"#db2777",Cveta:"#059669",Scott:"#d97706",Josh:"#ea580c",Unassigned:"#6b7280"};
const OC_DK = {April:"#a78bfa",Alex:"#60a5fa",Christine:"#f472b6",Cveta:"#34d399",Scott:"#fbbf24",Josh:"#fb923c",Unassigned:"#6b7280"};
const TSC   = {"Not Started":{color:"#6b7280",bg:"#6b728015"},"In Progress":{color:"#2563eb",bg:"#2563eb15"},"Complete":{color:"#1D9E75",bg:"#1D9E7515"},"On Hold":{color:"#7c3aed",bg:"#7c3aed15"},"Cancelled":{color:"#dc2626",bg:"#dc262615"}};
const TSC_DK= {"Not Started":{color:"#9ca3af",bg:"#9ca3af15"},"In Progress":{color:"#60a5fa",bg:"#60a5fa15"},"Complete":{color:"#34d399",bg:"#34d39915"},"On Hold":{color:"#a78bfa",bg:"#a78bfa15"},"Cancelled":{color:"#f87171",bg:"#f8717115"}};
const LIGHT = {bg:"#f8f9fb",surface:"#ffffff",card:"#ffffff",border:"#e2e6ed",border2:"#cbd2db",text:"#1e2235",muted:"#6b7280",hint:"#9ca3af",green:"#1D9E75",blue:"#2563eb",red:"#dc2626",amber:"#E8721C"};
const DARK  = {bg:"#0f1117",surface:"#161b27",card:"#1c2333",border:"#2a3347",border2:"#374151",text:"#e2e8f0",muted:"#8b9ab0",hint:"#4b5a6e",green:"#1D9E75",blue:"#378ADD",red:"#f87171",amber:"#E8721C"};

const STORAGE_KEY = "ap_dashboard_state";

const todayDate = new Date(); todayDate.setHours(0,0,0,0);
const isMonday  = new Date().getDay() === 1;

function fmtDate(d) {
  if (!d) return "—";
  return new Date(d+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
}
function dueMeta(dueDate, dk) {
  if (!dueDate) return null;
  const diff = Math.round((new Date(dueDate+"T00:00:00") - todayDate) / 86400000);
  if (diff < 0)   return {label:`${Math.abs(diff)}d overdue`, color:dk.red,   bg:dk.red+"22"};
  if (diff === 0) return {label:"Due today",                  color:dk.red,   bg:dk.red+"22"};
  if (diff <= 7)  return {label:`Due in ${diff}d`,            color:dk.amber, bg:dk.amber+"22"};
  if (diff <= 14) return {label:`Due in ${diff}d`,            color:dk.blue,  bg:dk.blue+"22"};
  return {label:fmtDate(dueDate), color:dk.muted, bg:"transparent"};
}

const BLANK_FORM = {id:"",title:"",type:"AS",sub:"New Implementation",status:"Not Started",lead:"April",dueDate:"",notes:"",nextSteps:""};
const BLANK_H    = {id:"",title:"",type:"AS",sub:"New Implementation",status:"Not Started",lead:"April",dueDate:"",notes:"",nextSteps:"",health:"On Track",healthNote:""};


// ── Metrics ───────────────────────────────────────────────────────────────────
function MetricsTab({projects, taskMap, dk, tcFn}) {
  const allT=taskMap.flat(), doneT=allT.filter(t=>t.done).length;
  const pct=allT.length?Math.round(doneT/allT.length*100):0;
  const onTrack=projects.filter(p=>p.health==="On Track").length;
  const needsAttn=projects.filter(p=>p.health!=="On Track").length;
  const overdue=projects.filter(p=>{if(!p.dueDate||p.status==="Complete")return false;return new Date(p.dueDate+"T00:00:00")<todayDate;}).length;
  const statCards=[
    {label:"Tasks complete",  value:`${pct}%`, sub:`${doneT} of ${allT.length}`,    color:dk.green},
    {label:"On track",        value:onTrack,   sub:`of ${projects.length} projects`, color:dk.green},
    {label:"Needs attention", value:needsAttn, sub:"At risk or delayed",             color:needsAttn>0?dk.amber:dk.green},
    {label:"Overdue",         value:overdue,   sub:"Past projected date",            color:overdue>0?dk.red:dk.green},
  ];
  const H_STATUSES=["On Track","Delayed","At Risk","Off Track","On Hold"];
  const H_COLORS={"On Track":dk.green,"Delayed":dk.amber,"At Risk":dk.amber,"Off Track":dk.red,"On Hold":"#a78bfa"};
  const hCounts=H_STATUSES.map(s=>({s,n:projects.filter(p=>p.health===s).length})).filter(x=>x.n>0);
  const hTotal=projects.length||1;
  let cum=0;
  const segs=hCounts.map(x=>{const p=x.n/hTotal*100;const start=cum;cum+=p;return{...x,p,start};});
  const R=52,CX=70,CY=70,SW=14,CIRC=2*Math.PI*R;
  const stageCounts=STAGES.map((s,si)=>({full:s,n:projects.filter(p=>p.activeStage===si).length}));
  const stageMax=Math.max(...stageCounts.map(x=>x.n),1);
  const buckets=[
    {label:"Overdue",           color:dk.red,   ps:projects.filter(p=>{if(!p.dueDate||p.status==="Complete")return false;return new Date(p.dueDate+"T00:00:00")<todayDate;})},
    {label:"Due within 14 days",color:dk.amber, ps:projects.filter(p=>{if(!p.dueDate||p.status==="Complete")return false;const d=Math.round((new Date(p.dueDate+"T00:00:00")-todayDate)/86400000);return d>=0&&d<=14;})},
    {label:"On schedule",       color:dk.green, ps:projects.filter(p=>{if(!p.dueDate||p.status==="Complete")return false;return Math.round((new Date(p.dueDate+"T00:00:00")-todayDate)/86400000)>14;})},
    {label:"No date set",       color:dk.hint,  ps:projects.filter(p=>!p.dueDate&&p.status!=="Complete")},
  ];
  return (
    <div>
      <div style={{fontSize:13,color:dk.muted,marginBottom:"1rem"}}>Portfolio health snapshot</div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:10,marginBottom:16}}>
        {statCards.map((c,i)=>(
          <div key={i} style={{background:dk.surface,border:`0.5px solid ${c.color}22`,borderRadius:10,padding:"0.85rem 1rem"}}>
            <div style={{fontSize:11,color:dk.muted,marginBottom:6}}>{c.label}</div>
            <div style={{fontSize:26,fontWeight:500,color:c.color,lineHeight:1,marginBottom:4}}>{c.value}</div>
            <div style={{fontSize:11,color:dk.hint}}>{c.sub}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
        <div style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,padding:"1rem 1.25rem"}}>
          <div style={{fontSize:13,fontWeight:500,color:dk.text,marginBottom:12}}>Health breakdown</div>
          <div style={{display:"flex",alignItems:"center",gap:20}}>
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx={CX} cy={CY} r={R} fill="none" stroke={dk.border} strokeWidth={SW}/>
              {segs.map((seg,i)=>(
                <circle key={i} cx={CX} cy={CY} r={R} fill="none" stroke={H_COLORS[seg.s]||dk.muted} strokeWidth={SW}
                  strokeDasharray={`${seg.p/100*CIRC} ${CIRC}`} strokeDashoffset={-seg.start/100*CIRC} transform="rotate(-90,70,70)"/>
              ))}
              <text x={CX} y={CY-6} textAnchor="middle" fontSize="20" fontWeight="500" fill={dk.text}>{projects.length}</text>
              <text x={CX} y={CY+12} textAnchor="middle" fontSize="10" fill={dk.muted}>projects</text>
            </svg>
            <div style={{display:"flex",flexDirection:"column",gap:8,flex:1}}>
              {hCounts.map((x,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:10,height:10,borderRadius:2,background:H_COLORS[x.s]||dk.muted,flexShrink:0}}/>
                  <span style={{fontSize:12,color:dk.muted,flex:1}}>{x.s}</span>
                  <span style={{fontSize:13,fontWeight:500,color:dk.text}}>{x.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,padding:"1rem 1.25rem"}}>
          <div style={{fontSize:13,fontWeight:500,color:dk.text,marginBottom:12}}>Stage distribution</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {stageCounts.map((s,i)=>(
              <div key={i}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:dk.muted,marginBottom:3}}>
                  <span style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:"80%"}}>{i+1}. {s.full}</span>
                  <span style={{fontWeight:500,color:s.n>0?dk.text:dk.hint,flexShrink:0,marginLeft:8}}>{s.n}</span>
                </div>
                <div style={{height:6,background:dk.border,borderRadius:3,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${Math.round(s.n/stageMax*100)}%`,background:s.n>0?dk.blue:dk.border,borderRadius:3}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,padding:"1rem 1.25rem"}}>
        <div style={{fontSize:13,fontWeight:500,color:dk.text,marginBottom:12}}>Timeline status</div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {buckets.map((b,i)=>(
            <div key={i} style={{flex:1,minWidth:120,background:dk.surface,borderRadius:8,padding:"0.75rem 1rem",border:`0.5px solid ${b.color}33`}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:b.color}}/>
                <span style={{fontSize:11,color:dk.muted}}>{b.label}</span>
              </div>
              <div style={{fontSize:22,fontWeight:500,color:b.color,marginBottom:6}}>{b.ps.length}</div>
              {b.ps.length>0 && (
                <div style={{display:"flex",flexDirection:"column",gap:3}}>
                  {b.ps.map((p,j)=>{const ptc=tcFn(p.type);return <span key={j} style={{fontSize:10,padding:"1px 6px",borderRadius:10,background:ptc.bg,color:ptc.color,border:`0.5px solid ${ptc.border}`,display:"inline-block",width:"fit-content"}}>{p.id}</span>;})}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function normSub(s) { return CATEGORIES.includes(s) ? s : "New Implementation"; }

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditModal({hForm, setHForm, onSave, onCancel, projectId, leads, dk, inp, bCancel, bGreen}) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:"1rem"}}>
      <div style={{background:dk.card,border:`0.5px solid ${dk.border2}`,borderRadius:16,padding:"1.5rem",width:"100%",maxWidth:480,maxHeight:"90vh",overflowY:"auto"}}>
        <div style={{fontSize:16,fontWeight:500,color:dk.text,marginBottom:4}}>Edit project details</div>
        <div style={{fontSize:13,color:dk.muted,marginBottom:18}}>{projectId}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:12,marginBottom:14}}>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project ID</label>
            <input style={inp} value={hForm.id||""} onChange={e=>setHForm(f=>({...f,id:e.target.value}))}/>
          </div>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project name</label>
            <input style={inp} value={hForm.title||""} onChange={e=>setHForm(f=>({...f,title:e.target.value}))}/>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Type</label>
            <select style={inp} value={hForm.type||"AS"} onChange={e=>setHForm(f=>({...f,type:e.target.value}))}>
              <option value="AS">AS — Analytics &amp; Segmentation</option>
              <option value="FMS">FMS — Field Medical Strategy</option>
              <option value="MS">MS — Managed Services</option>
              <option value="OTH">OTH — Other</option>
            </select>
          </div>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Status</label>
            <select style={inp} value={hForm.status||"In Progress"} onChange={e=>setHForm(f=>({...f,status:e.target.value}))}>
              {["In Progress","Not Started","Complete","At Risk","Delayed"].map(s=><option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project lead</label>
            <select style={inp} value={hForm.lead||"April"} onChange={e=>setHForm(f=>({...f,lead:e.target.value}))}>{leads.map(l=><option key={l}>{l}</option>)}</select>
          </div>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project category</label>
            <select style={inp} value={hForm.sub||"New Implementation"} onChange={e=>setHForm(f=>({...f,sub:e.target.value}))}>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Health</label>
            <select style={inp} value={hForm.health||"On Track"} onChange={e=>setHForm(f=>({...f,health:e.target.value}))}>
              <option>On Track</option><option>At Risk</option><option>Delayed</option><option>Off Track</option><option>On Hold</option>
            </select>
          </div>
          <div>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Projected completion</label>
            <input type="date" style={inp} value={hForm.dueDate||""} onChange={e=>setHForm(f=>({...f,dueDate:e.target.value}))}/>
          </div>
        </div>
        {hForm.health!=="On Track" && (
          <div style={{marginBottom:14}}>
            <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Reason <span style={{color:dk.red}}>*</span></label>
            <input style={{...inp,borderColor:!(hForm.healthNote||"").trim()?dk.red:dk.border2}} placeholder="What's causing the risk or delay?" value={hForm.healthNote||""} onChange={e=>setHForm(f=>({...f,healthNote:e.target.value}))}/>
          </div>
        )}
        <div style={{marginBottom:14}}>
          <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Notes / blockers</label>
          <textarea style={{...inp,resize:"vertical",minHeight:72}} placeholder="e.g. Waiting on client data..." value={hForm.notes||""} onChange={e=>setHForm(f=>({...f,notes:e.target.value}))}/>
        </div>
        <div style={{marginBottom:18}}>
          <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Next steps</label>
          <textarea style={{...inp,resize:"vertical",minHeight:72}} placeholder="e.g. Schedule review call, finalize draft..." value={hForm.nextSteps||""} onChange={e=>setHForm(f=>({...f,nextSteps:e.target.value}))}/>
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",gap:10}}>
          <button style={bCancel} onClick={onCancel}>Cancel</button>
          <button style={bGreen} onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded]             = useState(false);
  const [dark, setDark]                 = useState(true);
  const [projects, setProjects]         = useState(INIT);
  const [taskMap, setTaskMap]           = useState(()=>INIT.map(p=>p.tasks.map(t=>({...t,status:t.status||(t.done?"Complete":"Not Started"),taskNotes:t.taskNotes||[]}))));
  const [projectNotes, setPNotes]       = useState(()=>INIT.map(()=>[]));
  const [view, setView]                 = useState("home");
  const [tab, setTab]                   = useState("projects");
  const [detailTab, setDetailTab]       = useState("tasks");
  const [current, setCurrent]           = useState(null);
  const [stage, setStage]               = useState(0);
  const [showAdd, setShowAdd]           = useState(false);
  const [confirmDel, setConfirmDel]     = useState(null);
  const [confirmDelNote, setConfirmDelNote] = useState(null);
  const [editHealth, setEditHealth]     = useState(null);
  const [form, setForm]                 = useState(BLANK_FORM);
  const [errors, setErrors]             = useState({});
  const [hForm, setHForm]               = useState(BLANK_H);
  const [editingTask, setEditingTask]   = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [addingTask, setAddingTask]     = useState(null);
  const [newTaskText, setNewTaskText]   = useState("");
  const [noteInput, setNoteInput]       = useState("");
  const [editCompIdx, setEditCompIdx]   = useState(null);
  const [editCompVal, setEditCompVal]   = useState("");
  const [filterLead, setFilterLead]     = useState("All");
  const [customPeople, setCustomPeople] = useState([]);
  const [editLeadIdx, setEditLeadIdx]           = useState(null);
  const [editLeadName, setEditLeadName]         = useState("");
  const [newLeadName, setNewLeadName]           = useState("");
  const [confirmDelLead, setConfirmDelLead]     = useState(null);
  const [openPicker, setOpenPicker]     = useState(null);
  const [addingPerson, setAddingPerson] = useState(false);
  const [newPersonName, setNewPersonName] = useState("");
  const [taskNoteExpanded, setTaskNoteExpanded] = useState(null);
  const [taskNoteInput, setTaskNoteInput]       = useState("");
  const [leads, setLeads]                       = useState(LEADS);

  useEffect(()=>{
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s.projects) {
          const patches = {
            "AS-001": {notes:"Build a strategic segmentation framework for Chiesi's U.S. respiratory launch that identifies and prioritizes HCPs by role, belief alignment, and influence — translating into a capacity plan, tiered candidate lists, and Veeva-ready files for field execution.", healthNote:""}
          };
          s.projects = s.projects.map(p=>patches[p.id]?{...p,...patches[p.id]}:p);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
          setProjects(s.projects);
        }
        if (s.taskMap) {
          const migrated = s.taskMap.map(pt => pt.map(t => {
            let task = t;
            if (t.owners === undefined) {
              const {owner, ...rest} = t;
              task = {...rest, owners: owner && owner !== "Unassigned" ? [owner] : []};
            }
            return {
              ...task,
              status:    task.status    || (task.done ? "Complete" : "Not Started"),
              taskNotes: task.taskNotes || [],
            };
          }));
          setTaskMap(migrated);
        }
        if (s.notes)   setPNotes(s.notes);
        if (s.dark !== undefined) setDark(s.dark);
        if (s.customPeople && s.customPeople.length) setCustomPeople(s.customPeople);
        if (s.leads && s.leads.length) setLeads(s.leads);
      }
    } catch(e) {}
    setLoaded(true);
  },[]);

  const persist = (p,t,n,d,cp,ls) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({projects:p,taskMap:t,notes:n,dark:d,customPeople:cp!==undefined?cp:customPeople,leads:ls!==undefined?ls:leads})); } catch(e) {}
  };

  const allPeople = [...TEAM.filter(m=>m!=="Unassigned"), ...customPeople];
  const dk    = dark ? DARK : LIGHT;
  const tcFn  = t => (dark?TC_DK:TC)[t]||(dark?TC_DK:TC).OTH;
  const sc    = s => (dark?SC_DK:SC)[s]||(dark?SC_DK:SC)["Not Started"];
  const hc    = h => (dark?HC_DK:HC)[h]||(dark?HC_DK:HC)["On Track"];
  const oc    = o => (dark?OC_DK:OC)[o]||dk.muted;
  const tsc   = s => (dark?TSC_DK:TSC)[s]||(dark?TSC_DK:TSC)["Not Started"];
  const inp   = {width:"100%",background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:8,color:dk.text,fontSize:14,padding:"9px 12px",boxSizing:"border-box"};
  const mWrap = {position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:"1rem"};
  const mBox  = (w=460) => ({background:dk.card,border:`0.5px solid ${dk.border2}`,borderRadius:16,padding:"1.5rem",width:"100%",maxWidth:w,maxHeight:"90vh",overflowY:"auto"});
  const bCancel = {fontSize:13,padding:"8px 18px",borderRadius:8,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"};
  const bGreen  = {fontSize:13,padding:"8px 18px",borderRadius:8,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer"};
  const bRed    = {fontSize:13,padding:"8px 18px",borderRadius:8,border:`0.5px solid ${dk.red}`,background:dark?"#2d1a1a":"#FEF2F2",color:dk.red,cursor:"pointer"};
  const tabBtn  = a => ({fontSize:13,padding:"6px 16px",borderRadius:20,border:`0.5px solid ${a?dk.blue:dk.border}`,background:a?(dark?"#1a2a3f":"#EBF2FF"):"transparent",color:a?dk.blue:dk.muted,cursor:"pointer"});
  const stageBtn= (a,d) => ({fontSize:12,padding:"5px 12px",borderRadius:20,cursor:"pointer",border:`0.5px solid ${a?dk.blue:d?dk.green:dk.border}`,background:a?(dark?"#1a2a3f":"#EBF2FF"):d?(dark?"#0d2b1f":"#EAF3DE"):"transparent",color:a?dk.blue:d?dk.green:dk.muted,whiteSpace:"nowrap"});
  const pip     = st => ({height:5,flex:1,borderRadius:3,background:st==="done"?dk.green:st==="active"?dk.blue:dk.border});
  const chk     = d  => ({width:18,height:18,borderRadius:"50%",border:d?"none":`1.5px solid ${dk.border2}`,background:d?dk.green:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2,cursor:"pointer"});

  const nextId = type => {
    const nums=projects.filter(p=>p.type===type).map(p=>parseInt(p.id.split("-")[1]||0));
    return type+"-"+String(nums.length?Math.max(...nums)+1:1).padStart(3,"0");
  };
  const openEditModal = i => {
    const p=projects[i];
    setHForm({id:p.id,title:p.title,type:p.type,sub:normSub(p.sub||""),status:p.status,lead:p.lead,dueDate:p.dueDate,notes:p.notes,nextSteps:p.nextSteps||"",health:p.health,healthNote:p.healthNote});
    setEditHealth(i);
  };
  const handleAdd = () => {
    if (!form.title.trim()) { setErrors({title:"Required"}); return; }
    const p={id:form.id||nextId(form.type),type:form.type,title:form.title.trim(),sub:form.sub||"New Implementation",status:form.status||"Not Started",activeStage:0,health:"On Track",healthNote:"",dueDate:form.dueDate,lead:form.lead||"April",notes:form.notes||"",nextSteps:form.nextSteps||"",completedDate:""};
    const np=[...projects,p], nt=[...taskMap,DEFAULT_TASKS()], nn=[...projectNotes,[]];
    setProjects(np); setTaskMap(nt); setPNotes(nn); persist(np,nt,nn,dark);
    setForm(BLANK_FORM); setErrors({}); setShowAdd(false);
  };
  const handleDel = i => {
    const np=projects.filter((_,idx)=>idx!==i), nt=taskMap.filter((_,idx)=>idx!==i), nn=projectNotes.filter((_,idx)=>idx!==i);
    setProjects(np); setTaskMap(nt); setPNotes(nn); persist(np,nt,nn,dark); setConfirmDel(null);
  };
  const saveHealth = i => {
    if (hForm.health!=="On Track" && !(hForm.healthNote||"").trim()) return;
    const np=projects.map((p,idx)=>idx===i?{...p,...hForm}:p);
    setProjects(np); persist(np,taskMap,projectNotes,dark); setEditHealth(null);
  };
  const toggleTask = (pi,ti) => {
    const n=taskMap.map(pt=>pt.map(t=>({...t})));
    n[pi][ti].done   = !n[pi][ti].done;
    n[pi][ti].status = n[pi][ti].done ? "Complete" : "Not Started";
    const allDone=n[pi].length>0&&n[pi].every(t=>t.done);
    const np=allDone?projects.map((p,idx)=>idx===pi&&!p.completedDate?{...p,completedDate:new Date().toISOString().split("T")[0]}:p):projects;
    setTaskMap(n); setProjects(np); persist(np,n,projectNotes,dark);
  };
  const setTaskStatus = (pi,ti,status) => {
    const n=taskMap.map(pt=>pt.map(t=>({...t})));
    n[pi][ti].status = status;
    n[pi][ti].done   = status==="Complete";
    const allDone=n[pi].length>0&&n[pi].every(t=>t.done);
    const np=allDone?projects.map((p,idx)=>idx===pi&&!p.completedDate?{...p,completedDate:new Date().toISOString().split("T")[0]}:p):projects;
    setTaskMap(n); setProjects(np); persist(np,n,projectNotes,dark);
  };
  const addTaskNote = (pi,ti) => {
    if(!taskNoteInput.trim()) return;
    const n=taskMap.map(pt=>pt.map(t=>({...t})));
    const note={text:taskNoteInput.trim(),date:new Date().toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})};
    n[pi][ti].taskNotes=[...(n[pi][ti].taskNotes||[]),note];
    setTaskMap(n); persist(projects,n,projectNotes,dark);
    setTaskNoteInput(""); setTaskNoteExpanded(null);
  };
  const toggleOwner = (pi,ti,name) => {
    const n=taskMap.map(pt=>pt.map(t=>({...t})));
    const cur=n[pi][ti].owners||[];
    n[pi][ti].owners=cur.includes(name)?cur.filter(o=>o!==name):[...cur,name];
    setTaskMap(n); persist(projects,n,projectNotes,dark);
  };
  const addCustomPerson = () => {
    const name=newPersonName.trim();
    if(!name||customPeople.includes(name)||TEAM.includes(name)) return;
    const ncp=[...customPeople,name];
    setCustomPeople(ncp); persist(projects,taskMap,projectNotes,dark,ncp);
    setNewPersonName(""); setAddingPerson(false);
  };
  const addLead = () => {
    const name=newLeadName.trim();
    if(!name||leads.includes(name)) return;
    const nl=[...leads,name];
    setLeads(nl); persist(projects,taskMap,projectNotes,dark,customPeople,nl);
    setNewLeadName("");
  };
  const renameLead = () => {
    const newName=editLeadName.trim();
    if(!newName) return;
    const oldName=leads[editLeadIdx];
    if(newName!==oldName && leads.includes(newName)) return;
    const nl=leads.map((l,i)=>i===editLeadIdx?newName:l);
    const np=projects.map(p=>p.lead===oldName?{...p,lead:newName}:p);
    setLeads(nl); setProjects(np);
    persist(np,taskMap,projectNotes,dark,customPeople,nl);
    if(filterLead===oldName) setFilterLead(newName);
    setEditLeadIdx(null); setEditLeadName("");
  };
  const deleteLead = idx => {
    const nl=leads.filter((_,i)=>i!==idx);
    setLeads(nl);
    persist(projects,taskMap,projectNotes,dark,customPeople,nl);
    if(filterLead===leads[idx]) setFilterLead("All");
    setConfirmDelLead(null);
  };
  const updateLead   = (i,lead)  => { const np=projects.map((p,idx)=>idx===i?{...p,lead}:p); setProjects(np); persist(np,taskMap,projectNotes,dark); };
  const updateDue    = (i,d)     => { const np=projects.map((p,idx)=>idx===i?{...p,dueDate:d}:p); setProjects(np); persist(np,taskMap,projectNotes,dark); };
  const saveEditTask = (pi,ri)   => {
    if (!editTaskText.trim()) return;
    const n=taskMap.map(pt=>pt.map(t=>({...t}))); n[pi][ri].text=editTaskText.trim();
    setTaskMap(n); persist(projects,n,projectNotes,dark); setEditingTask(null); setEditTaskText("");
  };
  const moveTask = (pi,riA,riB) => {
    const n=taskMap.map(pt=>pt.map(t=>({...t})));
    [n[pi][riA],n[pi][riB]]=[n[pi][riB],n[pi][riA]];
    setTaskMap(n); persist(projects,n,projectNotes,dark);
  };
  const deleteTask = (pi,ri) => {
    const n=taskMap.map(pt=>pt.map(t=>({...t}))); n[pi]=n[pi].filter((_,idx)=>idx!==ri);
    setTaskMap(n); persist(projects,n,projectNotes,dark);
  };
  const addTask = (pi,si) => {
    if (!newTaskText.trim()) return;
    const n=taskMap.map(pt=>pt.map(t=>({...t}))); n[pi].push({stage:si,text:newTaskText.trim(),done:false,owners:[],status:"Not Started",taskNotes:[]});
    setTaskMap(n); persist(projects,n,projectNotes,dark); setAddingTask(null); setNewTaskText("");
  };
  const addNote = pi => {
    if (!noteInput.trim()) return;
    const entry={text:noteInput.trim(),author:"April",date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})};
    const nn=[...projectNotes]; nn[pi]=[entry,...(nn[pi]||[])];
    setPNotes(nn); persist(projects,taskMap,nn,dark); setNoteInput("");
  };
  const deleteNote = (pi,ni) => {
    const nn=[...projectNotes]; nn[pi]=nn[pi].filter((_,idx)=>idx!==ni);
    setPNotes(nn); persist(projects,taskMap,nn,dark); setConfirmDelNote(null);
  };
  const saveEditComp = () => {
    const np=projects.map((p,i)=>i===editCompIdx?{...p,completedDate:editCompVal}:p);
    setProjects(np); persist(np,taskMap,projectNotes,dark); setEditCompIdx(null);
  };
  const clearComp = () => {
    const np=projects.map((p,i)=>i===editCompIdx?{...p,completedDate:""}:p);
    setProjects(np); persist(np,taskMap,projectNotes,dark); setEditCompIdx(null);
  };

  const allTasks  = taskMap.flat();
  const doneTasks = allTasks.filter(t=>t.done).length;
  const overallPct= allTasks.length?Math.round(doneTasks/allTasks.length*100):0;
  const atRisk    = projects.filter(p=>["At Risk","Off Track","Delayed","On Hold"].includes(p.health)).length;
  const capData = leads.map(m=>{
    const myProjs      = projects.filter(p=>p.lead===m);
    const active       = myProjs.filter(p=>p.status!=="Complete"&&p.health!=="On Hold");
    const onHoldPs     = myProjs.filter(p=>p.health==="On Hold"&&p.status!=="Complete");
    const donePs       = myProjs.filter(p=>p.status==="Complete");
    const openTasks    = active.reduce((sum,p)=>{const pi=projects.indexOf(p);return sum+(taskMap[pi]||[]).filter(t=>!t.done).length;},0);
    const totalTasks   = active.reduce((sum,p)=>{const pi=projects.indexOf(p);return sum+(taskMap[pi]||[]).length;},0);
    const doneTasks    = totalTasks-openTasks;
    const onTrack      = active.filter(p=>p.health==="On Track").length;
    const atRisk       = active.filter(p=>["At Risk","Delayed"].includes(p.health)).length;
    const offTrack     = active.filter(p=>p.health==="Off Track").length;
    const upcoming     = active.filter(p=>p.dueDate).map(p=>({id:p.id,dueDate:p.dueDate,ms:new Date(p.dueDate+"T00:00:00").getTime()})).filter(x=>x.ms>=todayDate.getTime()).sort((a,b)=>a.ms-b.ms);
    const workloadScore= active.length*5+Math.round(openTasks/2);
    const projDetails  = p=>{const pi=projects.indexOf(p);const tasks=taskMap[pi]||[];const td=tasks.filter(t=>t.done).length;return{done:td,total:tasks.length,dueDate:p.dueDate};};
    return {
      member:m,
      active:active.length,
      onHoldCount:onHoldPs.length,
      done:donePs.length,
      openTasks,totalTasks,doneTasks,
      onTrack,atRisk,offTrack,
      byActive:active.map(p=>({id:p.id,type:p.type,health:p.health,...projDetails(p)})),
      byOnHold:onHoldPs.map(p=>({id:p.id,type:p.type,...projDetails(p)})),
      nearestDue:upcoming[0]||null,
      workloadScore,
    };
  });
  const maxScore   = Math.max(...capData.map(d=>d.workloadScore),1);
  const loadColor  = n => n>=5?dk.red:n>=3?dk.amber:dk.green;
  const loadLabel  = n => n>=5?"Critical":n>=3?"Heavy":"Healthy";

  if (!loaded) return <div style={{background:"#0f1117",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"#8b9ab0",fontSize:14}}>Loading...</div>;

  // ── DETAIL VIEW ──────────────────────────────────────────────
  if (view==="detail" && current!==null) {
    const p=projects[current], pt=taskMap[current];
    const done=pt.filter(t=>t.done).length, pct=Math.round(done/pt.length*100);
    const dm=dueMeta(p.dueDate,dk), phc=hc(p.health), ptc=tcFn(p.type);
    const isOTH=p.type==="OTH";
    const showMondayBanner = p.id==="OTH-008" && !p.completedDate && isMonday;
    const visibleTasks=isOTH?pt.map((t,i)=>({...t,realIdx:i})):pt.map((t,i)=>({...t,realIdx:i})).filter(t=>t.stage===stage);
    const notes=projectNotes[current]||[];
    const allDone=pt.length>0&&pt.every(t=>t.done);

    return (
      <div style={{background:dk.bg,minHeight:"100vh",padding:"1.25rem 1rem",fontFamily:"var(--font-sans,sans-serif)",color:dk.text}}>
        {editHealth!==null && (
          <EditModal hForm={hForm} setHForm={setHForm} projectId={projects[editHealth]?.id}
            onSave={()=>saveHealth(editHealth)} onCancel={()=>setEditHealth(null)}
            leads={leads} dk={dk} inp={inp} bCancel={bCancel} bGreen={bGreen}/>
        )}
        {confirmDelNote!==null && (
          <div style={mWrap}>
            <div style={mBox(380)}>
              <div style={{fontSize:15,fontWeight:500,color:dk.text,marginBottom:8}}>Delete this note?</div>
              <div style={{fontSize:13,color:dk.muted,background:dk.surface,borderRadius:8,padding:"0.6rem 0.9rem",marginBottom:20,lineHeight:1.5}}>
                "{(projectNotes[current]||[])[confirmDelNote?.ni]?.text.slice(0,100)}"
              </div>
              <div style={{display:"flex",justifyContent:"flex-end",gap:10}}>
                <button style={bCancel} onClick={()=>setConfirmDelNote(null)}>Cancel</button>
                <button style={bRed} onClick={()=>deleteNote(confirmDelNote.pi,confirmDelNote.ni)}>Delete</button>
              </div>
            </div>
          </div>
        )}

        <button style={{background:"none",border:"none",cursor:"pointer",fontSize:13,color:dk.muted,marginBottom:16,padding:0}} onClick={()=>setView("home")}>← all projects</button>

        <div style={{marginBottom:12}}>
          <span style={{fontSize:12,fontWeight:500,padding:"3px 8px",borderRadius:6,background:ptc.bg,color:ptc.color,border:`0.5px solid ${ptc.border}`,display:"inline-block",marginBottom:8}}>{p.id} · {p.type}</span>
          <div style={{fontSize:18,fontWeight:500,color:dk.text,marginBottom:3}}>{p.title}</div>
          <div style={{fontSize:13,color:dk.muted,marginBottom:10}}>{p.sub}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",marginBottom:10}}>
            <span style={{fontSize:12,padding:"3px 10px",borderRadius:20,background:phc.bg,color:phc.color,border:`0.5px solid ${phc.border}`}}>{p.health}</span>
            {dm && <span style={{fontSize:12,padding:"3px 10px",borderRadius:20,background:dm.bg,color:dm.color}}>{dm.label}</span>}
            <button onClick={()=>openEditModal(current)} style={{fontSize:12,padding:"3px 10px",borderRadius:20,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Edit details</button>
          </div>
          {showMondayBanner && (
            <div style={{background:dark?"#1a2a3f":"#EBF2FF",border:`0.5px solid ${dk.blue}44`,borderRadius:8,padding:"0.65rem 1rem",marginBottom:8,display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:14}}>🔔</span>
              <span style={{fontSize:13,color:dk.blue,fontWeight:500}}>Monday reminder:</span>
              <span style={{fontSize:13,color:dk.blue}}>Refresh OBO dashboard</span>
            </div>
          )}
          {p.healthNote && (
            <div style={{fontSize:13,color:dk.amber,background:dk.amber+"22",border:`0.5px solid ${dk.amber}44`,borderRadius:8,padding:"0.6rem 0.9rem",marginBottom:8}}>
              ⚠ {p.healthNote}
            </div>
          )}
          {(p.notes||p.nextSteps) && (
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
              <div>
                <div style={{fontSize:11,color:dk.hint,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>Description</div>
                <div style={{fontSize:13,color:dk.muted,background:dk.surface,border:`0.5px solid ${dk.border}`,borderRadius:8,padding:"0.6rem 0.9rem",minHeight:48,lineHeight:1.5}}>
                  {p.notes||<span style={{color:dk.hint,fontStyle:"italic"}}>No description</span>}
                </div>
              </div>
              <div>
                <div style={{fontSize:11,color:dk.hint,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.05em"}}>Next steps</div>
                <div style={{fontSize:13,color:dk.muted,background:dk.surface,border:`0.5px solid ${dk.border}`,borderRadius:8,padding:"0.6rem 0.9rem",minHeight:48,lineHeight:1.5}}>
                  {p.nextSteps||<span style={{color:dk.hint,fontStyle:"italic"}}>None added yet</span>}
                </div>
              </div>
            </div>
          )}
          {!p.notes && !p.nextSteps && !p.healthNote && (
            <div style={{fontSize:13,color:dk.hint,fontStyle:"italic",marginBottom:8}}>No description or next steps. Edit details to add.</div>
          )}
        </div>

        <div style={{background:dk.surface,borderRadius:8,padding:"0.75rem 1rem",marginBottom:allDone?8:16,display:"flex",alignItems:"center",gap:16}}>
          <div style={{flex:1,height:8,background:dk.border,borderRadius:4,overflow:"hidden"}}>
            <div style={{height:"100%",width:pct+"%",background:dk.green,borderRadius:4,transition:"width 0.3s"}}/>
          </div>
          <span style={{fontSize:13,fontWeight:500,whiteSpace:"nowrap",color:dk.text}}>{pct}% · {done}/{pt.length} tasks</span>
        </div>

        {allDone && (
          <div style={{background:dark?"#0d2b1f":"#EAF3DE",border:`0.5px solid ${dk.green}44`,borderRadius:8,padding:"0.65rem 1rem",marginBottom:16,display:"flex",alignItems:"center",flexWrap:"wrap",gap:10}}>
            <span style={{fontSize:13,color:dk.green,fontWeight:500}}>✓ All tasks complete</span>
            <span style={{fontSize:13,color:dk.muted}}>·</span>
            <span style={{fontSize:13,color:dk.muted}}>Actual completed:</span>
            {editCompIdx===current ? (
              <>
                <input type="date" value={editCompVal} onChange={e=>setEditCompVal(e.target.value)} style={{fontSize:12,background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:6,color:dk.text,padding:"3px 8px"}}/>
                <button onClick={saveEditComp} style={{fontSize:12,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer"}}>Save</button>
                <button onClick={()=>setEditCompIdx(null)} style={{fontSize:12,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Cancel</button>
                <button onClick={clearComp} style={{fontSize:12,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.red}44`,background:"transparent",color:dk.red,cursor:"pointer"}}>Clear & reopen</button>
              </>
            ) : (
              <>
                <strong style={{fontSize:13,color:dk.green}}>{p.completedDate?fmtDate(p.completedDate):"—"}</strong>
                <button onClick={()=>{setEditCompIdx(current);setEditCompVal(p.completedDate||"");}} style={{fontSize:11,padding:"2px 8px",borderRadius:6,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.hint,cursor:"pointer"}}>edit</button>
              </>
            )}
          </div>
        )}

        <div style={{display:"flex",gap:6,marginBottom:16}}>
          <button style={stageBtn(detailTab==="tasks",false)} onClick={()=>setDetailTab("tasks")}>Tasks</button>
          <button style={stageBtn(detailTab==="notes",false)} onClick={()=>setDetailTab("notes")}>
            Notes{notes.length>0 && <span style={{marginLeft:4,fontSize:10,padding:"1px 6px",borderRadius:10,background:dk.amber+"33",color:dk.amber}}>{notes.length}</span>}
          </button>
        </div>

        {detailTab==="tasks" && (
          <div>
            {!isOTH && (
              <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
                {STAGES.map((st,si)=>{ const sp=pt.filter(t=>t.stage===si); const sd=sp.length>0&&sp.every(t=>t.done); return <button key={si} style={stageBtn(si===stage,sd)} onClick={()=>setStage(si)}>{si+1}. {st}</button>; })}
              </div>
            )}
            {visibleTasks.length===0 && (
              <div style={{fontSize:14,color:dk.muted,padding:"1rem 0"}}>{isOTH?"No tasks yet.":"No tasks in this stage."}</div>
            )}
            {visibleTasks.map((t,i)=>(
              <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"0.75rem 1rem",background:dk.surface,border:`0.5px solid ${editingTask?.realIdx===t.realIdx&&editingTask?.pi===current?dk.blue:dk.border}`,borderRadius:8,marginBottom:6}}>
                <div style={{display:"flex",flexDirection:"column",alignSelf:"flex-start",flexShrink:0,marginTop:1}}>
                  {i>0 ? <button onClick={()=>moveTask(current,t.realIdx,visibleTasks[i-1].realIdx)} style={{background:"none",border:"none",cursor:"pointer",color:dk.hint,fontSize:10,lineHeight:1,padding:"1px 3px"}}>↑</button> : <span style={{display:"block",height:14,width:14}}/>}
                  {i<visibleTasks.length-1 ? <button onClick={()=>moveTask(current,t.realIdx,visibleTasks[i+1].realIdx)} style={{background:"none",border:"none",cursor:"pointer",color:dk.hint,fontSize:10,lineHeight:1,padding:"1px 3px"}}>↓</button> : <span style={{display:"block",height:14,width:14}}/>}
                </div>
                <div style={chk(t.done)} onClick={()=>toggleTask(current,t.realIdx)}>
                  {t.done && <span style={{color:"#fff",fontSize:11}}>✓</span>}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  {editingTask?.pi===current&&editingTask?.realIdx===t.realIdx ? (
                    <div>
                      <input autoFocus value={editTaskText} onChange={e=>setEditTaskText(e.target.value)}
                        onKeyDown={e=>{if(e.key==="Enter")saveEditTask(current,t.realIdx);if(e.key==="Escape"){setEditingTask(null);setEditTaskText("");}}}
                        style={{width:"100%",background:"transparent",border:"none",outline:"none",color:dk.text,fontSize:14,marginBottom:8}}/>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>{setEditingTask(null);setEditTaskText("");}} style={{fontSize:11,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Cancel</button>
                        <button onClick={()=>saveEditTask(current,t.realIdx)} style={{fontSize:11,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.blue}`,background:dark?"#1a2a3f":"#EBF2FF",color:dk.blue,cursor:"pointer"}}>Save</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{fontSize:14,lineHeight:1.5,color:t.done?dk.hint:(t.status==="Cancelled"?dk.red:dk.text),textDecoration:(t.done||t.status==="Cancelled")?"line-through":"none",opacity:t.status==="Cancelled"?0.6:1,cursor:"text"}} onClick={()=>{setEditingTask({pi:current,realIdx:t.realIdx});setEditTaskText(t.text);}}>
                      {t.text}
                    </div>
                  )}
                  <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:4,marginTop:5,position:"relative"}}>
                    {(t.owners||[]).length===0 && <span style={{fontSize:11,color:dk.hint,fontStyle:"italic"}}>Unassigned</span>}
                    {(t.owners||[]).map(name=>(
                      <span key={name} style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:11,padding:"2px 7px",borderRadius:20,background:oc(name)+"22",color:oc(name),border:`0.5px solid ${oc(name)}44`}}>
                        <span style={{width:6,height:6,borderRadius:"50%",background:oc(name),flexShrink:0,display:"inline-block"}}/>
                        {name}
                      </span>
                    ))}
                    <button
                      onClick={e=>{e.stopPropagation();setOpenPicker(openPicker?.pi===current&&openPicker?.ti===t.realIdx?null:{pi:current,ti:t.realIdx});setAddingPerson(false);setNewPersonName("");}}
                      style={{fontSize:13,width:18,height:18,borderRadius:"50%",border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1,padding:0}}
                    >+</button>
                    {openPicker?.pi===current&&openPicker?.ti===t.realIdx && (
                      <>
                        <div style={{position:"fixed",inset:0,zIndex:49}} onClick={()=>{setOpenPicker(null);setAddingPerson(false);setNewPersonName("");}}/>
                        <div style={{position:"absolute",top:"100%",left:0,zIndex:50,background:dk.card,border:`0.5px solid ${dk.border2}`,borderRadius:8,padding:"6px 0",minWidth:160,boxShadow:"0 4px 16px rgba(0,0,0,0.3)",marginTop:2}}>
                          {allPeople.map(name=>{
                            const sel=(t.owners||[]).includes(name);
                            return (
                              <div key={name} onClick={e=>{e.stopPropagation();toggleOwner(current,t.realIdx,name);}}
                                style={{display:"flex",alignItems:"center",gap:8,padding:"5px 12px",cursor:"pointer",background:sel?oc(name)+"18":"transparent"}}>
                                <div style={{width:8,height:8,borderRadius:"50%",background:oc(name),flexShrink:0}}/>
                                <span style={{fontSize:12,color:sel?oc(name):dk.text,flex:1}}>{name}</span>
                                {sel && <span style={{fontSize:11,color:oc(name)}}>✓</span>}
                              </div>
                            );
                          })}
                          <div style={{height:"0.5px",background:dk.border,margin:"4px 0"}}/>
                          {addingPerson ? (
                            <div style={{padding:"4px 10px",display:"flex",gap:6,alignItems:"center"}}>
                              <input autoFocus placeholder="Name..." value={newPersonName}
                                onChange={e=>setNewPersonName(e.target.value)}
                                onKeyDown={e=>{if(e.key==="Enter")addCustomPerson();if(e.key==="Escape"){setAddingPerson(false);setNewPersonName("");}}}
                                style={{flex:1,background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:5,color:dk.text,fontSize:12,padding:"3px 7px",outline:"none"}}/>
                              <button onClick={addCustomPerson} style={{fontSize:11,padding:"3px 8px",borderRadius:5,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer"}}>Add</button>
                            </div>
                          ) : (
                            <div onClick={e=>{e.stopPropagation();setAddingPerson(true);}}
                              style={{padding:"5px 12px",fontSize:12,color:dk.muted,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
                              <span style={{fontSize:14,lineHeight:1}}>+</span> Add person
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {/* Task-level notes */}
                  {(t.taskNotes||[]).length>0 && (
                    <div style={{marginTop:6,paddingTop:5,borderTop:`0.5px solid ${dk.border}`}}>
                      {(t.taskNotes||[]).map((tn,tni)=>(
                        <div key={tni} style={{fontSize:12,color:dk.muted,lineHeight:1.5,marginBottom:tni<t.taskNotes.length-1?4:0,paddingBottom:tni<t.taskNotes.length-1?4:0,borderBottom:tni<t.taskNotes.length-1?`0.5px solid ${dk.border}`:"none"}}>
                          <span style={{fontSize:10,color:dk.hint,marginRight:5}}>{tn.date}</span>{tn.text}
                        </div>
                      ))}
                    </div>
                  )}
                  {taskNoteExpanded===t.realIdx ? (
                    <div style={{marginTop:5}}>
                      <textarea autoFocus placeholder="Add a task note..." value={taskNoteInput}
                        onChange={e=>setTaskNoteInput(e.target.value)}
                        onKeyDown={e=>{if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)){e.preventDefault();addTaskNote(current,t.realIdx);}if(e.key==="Escape"){setTaskNoteExpanded(null);setTaskNoteInput("");}}}
                        style={{width:"100%",background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:6,color:dk.text,fontSize:12,padding:"6px 8px",resize:"none",height:52,boxSizing:"border-box",outline:"none"}}/>
                      <div style={{display:"flex",gap:6,marginTop:4}}>
                        <button onClick={()=>{setTaskNoteExpanded(null);setTaskNoteInput("");}} style={{fontSize:11,padding:"2px 8px",borderRadius:5,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Cancel</button>
                        <button onClick={()=>addTaskNote(current,t.realIdx)} style={{fontSize:11,padding:"2px 8px",borderRadius:5,border:`0.5px solid ${dk.blue}`,background:dark?"#1a2a3f":"#EBF2FF",color:dk.blue,cursor:"pointer"}}>Save</button>
                      </div>
                    </div>
                  ) : (
                    <button onClick={()=>{setTaskNoteExpanded(t.realIdx);setTaskNoteInput("");}} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:dk.hint,padding:"2px 0",marginTop:4,display:"block"}}>＋ add note</button>
                  )}
                </div>
                {(()=>{const ts=tsc(t.status||"Not Started");return(
                  <select value={t.status||"Not Started"} onChange={e=>setTaskStatus(current,t.realIdx,e.target.value)}
                    style={{fontSize:10,background:ts.bg,border:`0.5px solid ${ts.color}55`,borderRadius:10,color:ts.color,padding:"2px 5px",cursor:"pointer",alignSelf:"flex-start",flexShrink:0,marginTop:2,outline:"none",fontWeight:500}}>
                    {TASK_STATUSES.map(s=><option key={s} value={s}>{s}</option>)}
                  </select>
                );})()}
                <button onClick={()=>deleteTask(current,t.realIdx)} style={{background:"none",border:"none",cursor:"pointer",color:dk.hint,fontSize:15,lineHeight:1,padding:"2px 4px",alignSelf:"flex-start",flexShrink:0}}>✕</button>
              </div>
            ))}
            {addingTask?.pi===current ? (
              <div style={{background:dk.surface,border:`0.5px solid ${dk.blue}`,borderRadius:8,padding:"0.75rem 1rem",marginTop:4}}>
                <input autoFocus placeholder="Describe the new task..." value={newTaskText} onChange={e=>setNewTaskText(e.target.value)}
                  onKeyDown={e=>{if(e.key==="Enter")addTask(current,isOTH?0:stage);if(e.key==="Escape"){setAddingTask(null);setNewTaskText("");}}}
                  style={{width:"100%",background:"transparent",border:"none",outline:"none",color:dk.text,fontSize:14,marginBottom:10}}/>
                <div style={{display:"flex",justifyContent:"flex-end",gap:8}}>
                  <button onClick={()=>{setAddingTask(null);setNewTaskText("");}} style={{fontSize:12,padding:"4px 12px",borderRadius:6,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Cancel</button>
                  <button onClick={()=>addTask(current,isOTH?0:stage)} style={{fontSize:12,padding:"4px 12px",borderRadius:6,border:`0.5px solid ${dk.blue}`,background:dark?"#1a2a3f":"#EBF2FF",color:dk.blue,cursor:"pointer"}}>Add task</button>
                </div>
              </div>
            ) : (
              <button onClick={()=>{setAddingTask({pi:current,stage:isOTH?0:stage});setNewTaskText("");}} style={{marginTop:6,fontSize:12,padding:"6px 14px",borderRadius:8,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.muted,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
                <span style={{fontSize:16,lineHeight:1}}>+</span> {isOTH?"Add task...":"Add task to "+STAGES[stage].split(" ")[0]+"..."}
              </button>
            )}
          </div>
        )}

        {detailTab==="notes" && (
          <div>
            <div style={{marginBottom:16}}>
              <textarea placeholder="Add a note — decisions, blockers, updates, client feedback..." value={noteInput} onChange={e=>setNoteInput(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter"&&(e.metaKey||e.ctrlKey)){e.preventDefault();addNote(current);}}}
                style={{width:"100%",background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:8,color:dk.text,fontSize:14,padding:"10px 12px",resize:"vertical",minHeight:80,boxSizing:"border-box"}}/>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}>
                <span style={{fontSize:11,color:dk.hint}}>⌘ + Enter to save</span>
                <button onClick={()=>addNote(current)} style={bGreen}>Add note</button>
              </div>
            </div>
            {notes.length===0 && <div style={{fontSize:14,color:dk.muted,padding:"1rem 0",textAlign:"center"}}>No notes yet.</div>}
            {notes.map((n,ni)=>(
              <div key={ni} style={{background:dk.surface,border:`0.5px solid ${dk.border}`,borderRadius:8,padding:"0.75rem 1rem",marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginBottom:8}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:22,height:22,borderRadius:"50%",background:oc(n.author)+"33",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:500,color:oc(n.author)}}>{n.author[0]}</div>
                    <span style={{fontSize:12,fontWeight:500,color:dk.text}}>{n.author}</span>
                    <span style={{fontSize:11,color:dk.hint}}>{n.date}</span>
                  </div>
                  <button onClick={()=>setConfirmDelNote({pi:current,ni})} style={{background:"none",border:"none",cursor:"pointer",color:dk.hint,fontSize:13,padding:0}}>✕</button>
                </div>
                <div style={{fontSize:14,color:dk.text,lineHeight:1.6,whiteSpace:"pre-wrap",paddingLeft:30}}>{n.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── HOME VIEW ────────────────────────────────────────────────
  return (
    <div style={{background:dk.bg,minHeight:"100vh",padding:"1.25rem 1rem",fontFamily:"var(--font-sans,sans-serif)",color:dk.text}}>

      {showAdd && (
        <div style={mWrap}>
          <div style={mBox()}>
            <div style={{fontSize:17,fontWeight:500,color:dk.text,marginBottom:4}}>Add new project</div>
            <div style={{fontSize:13,color:dk.muted,marginBottom:18}}>Standard tasks will be created automatically.</div>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project name *</label>
              <input style={{...inp,borderColor:errors.title?dk.red:dk.border2}} placeholder="e.g. Chiesi MSL Engagement Strategy" value={form.title} onChange={e=>{setForm(f=>({...f,title:e.target.value}));setErrors({});}}/>
              {errors.title && <div style={{fontSize:12,color:dk.red,marginTop:4}}>{errors.title}</div>}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
              <div><label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Type</label>
                <select style={inp} value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>
                  <option value="AS">AS — Analytics &amp; Segmentation</option>
                  <option value="FMS">FMS — Field Medical Strategy</option>
                  <option value="MS">MS — Managed Services</option>
                  <option value="OTH">OTH — Other</option>
                </select></div>
              <div><label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Status</label>
                <select style={inp} value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>
                  {Object.keys(SC).map(s=><option key={s}>{s}</option>)}
                </select></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
              <div><label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project lead</label>
                <select style={inp} value={form.lead} onChange={e=>setForm(f=>({...f,lead:e.target.value}))}>{leads.map(l=><option key={l}>{l}</option>)}</select></div>
              <div><label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Project category</label>
                <select style={inp} value={form.sub} onChange={e=>setForm(f=>({...f,sub:e.target.value}))}>{CATEGORIES.map(c=><option key={c}>{c}</option>)}</select></div>
            </div>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Projected completion <span style={{color:dk.hint}}>(optional)</span></label>
              <input type="date" style={inp} value={form.dueDate} onChange={e=>setForm(f=>({...f,dueDate:e.target.value}))}/>
            </div>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Notes <span style={{color:dk.hint}}>(optional)</span></label>
              <input style={inp} placeholder="Any blockers or context?" value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/>
            </div>
            <div style={{marginBottom:18}}>
              <label style={{fontSize:13,color:dk.muted,display:"block",marginBottom:6}}>Next steps <span style={{color:dk.hint}}>(optional)</span></label>
              <input style={inp} placeholder="e.g. Schedule kickoff, send intake form..." value={form.nextSteps} onChange={e=>setForm(f=>({...f,nextSteps:e.target.value}))}/>
            </div>
            <div style={{fontSize:12,color:dk.hint,background:dk.surface,borderRadius:8,padding:"0.6rem 0.9rem",marginBottom:20}}>ID auto-assigned · Tasks pre-loaded from the 5-stage framework</div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:10}}>
              <button style={bCancel} onClick={()=>{setShowAdd(false);setForm(BLANK_FORM);setErrors({});}}>Cancel</button>
              <button style={bGreen} onClick={handleAdd}>Add project</button>
            </div>
          </div>
        </div>
      )}

      {confirmDel!==null && (
        <div style={mWrap}>
          <div style={mBox(380)}>
            <div style={{fontSize:16,fontWeight:500,color:dk.text,marginBottom:8}}>Delete project?</div>
            <div style={{fontSize:14,color:dk.muted,marginBottom:20}}><span style={{color:dk.red,fontWeight:500}}>{projects[confirmDel]?.id}</span> — {projects[confirmDel]?.title} will be permanently removed.</div>
            <div style={{display:"flex",justifyContent:"flex-end",gap:10}}>
              <button style={bCancel} onClick={()=>setConfirmDel(null)}>Cancel</button>
              <button style={bRed} onClick={()=>handleDel(confirmDel)}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {editHealth!==null && (
        <EditModal hForm={hForm} setHForm={setHForm} projectId={projects[editHealth]?.id}
          onSave={()=>saveHealth(editHealth)} onCancel={()=>setEditHealth(null)}
          leads={leads} dk={dk} inp={inp} bCancel={bCancel} bGreen={bGreen}/>
      )}

      {/* Header */}
      <div style={{borderBottom:`0.5px solid ${dk.border}`,paddingBottom:"1rem",marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:16}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" stroke="#E8721C" strokeWidth="2.5" fill="none"/><circle cx="14" cy="14" r="4" fill="#E8721C"/></svg>
          <div style={{display:"flex",flexDirection:"column",lineHeight:1.15}}>
            <span style={{fontSize:13,fontWeight:700,color:dark?"#e2e8f0":"#1e2235",letterSpacing:"0.01em"}}>acceleration</span>
            <span style={{fontSize:13,fontWeight:400,color:dark?"#8b9ab0":"#6b7280",letterSpacing:"0.01em"}}>point</span>
          </div>
        </div>
        <div style={{width:"0.5px",height:36,background:dk.border,flexShrink:0}}/>
        <div style={{flex:1}}>
          <div style={{fontSize:16,fontWeight:500,color:dk.text}}>Medical Analytics Project Tracker</div>
          <div style={{fontSize:12,color:dk.muted,marginTop:2}}>Internal · April</div>
        </div>
        <button onClick={()=>{const d=!dark;setDark(d);persist(projects,taskMap,projectNotes,d);}} style={{fontSize:12,padding:"5px 14px",borderRadius:20,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer",flexShrink:0}}>
          {dark?"☀ Light":"☾ Dark"}
        </button>
        <button onClick={()=>{if(window.confirm("Reset all data to defaults? This cannot be undone.")){localStorage.removeItem(STORAGE_KEY);window.location.reload();}}} style={{fontSize:11,padding:"4px 10px",borderRadius:20,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.hint,cursor:"pointer",flexShrink:0}}>Reset</button>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:4,marginBottom:"1.25rem",alignItems:"center"}}>
        <button style={tabBtn(tab==="projects")} onClick={()=>setTab("projects")}>Projects</button>
        <button style={tabBtn(tab==="capacity")} onClick={()=>setTab("capacity")}>Capacity</button>
        <button style={tabBtn(tab==="metrics")}  onClick={()=>setTab("metrics")}>Metrics</button>
        <button style={{...tabBtn(tab==="leads"),marginLeft:"auto"}} onClick={()=>setTab("leads")}>Team</button>
        <button style={{fontSize:13,padding:"6px 16px",borderRadius:20,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer"}} onClick={()=>{setForm(f=>({...f,lead:leads[0]||"April"}));setShowAdd(true);}}>+ Add project</button>
      </div>

      {/* Projects tab */}
      {tab==="projects" && (
        <div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:10,marginBottom:"1.5rem"}}>
            {[
              {label:"Projects",        value:projects.length,                                     alert:false},
              {label:"In progress",     value:projects.filter(p=>p.status==="In Progress").length, alert:false},
              {label:"Needs attention", value:atRisk,                                              alert:atRisk>0},
              {label:"Tasks done",      value:`${doneTasks}/${allTasks.length} · ${overallPct}%`,  alert:false},
            ].map((m,i)=>(
              <div key={i} style={{background:m.alert?dk.card:dk.surface,border:m.alert?`0.5px solid ${dk.amber}44`:"0.5px solid transparent",borderRadius:8,padding:"0.75rem 1rem"}}>
                <div style={{fontSize:12,color:m.alert?dk.amber:dk.muted,marginBottom:4}}>{m.label}</div>
                <div style={{fontSize:typeof m.value==="string"&&m.value.length>5?15:22,fontWeight:500,color:m.alert?dk.amber:dk.text}}>{m.value}</div>
              </div>
            ))}
          </div>
          <div style={{marginBottom:14}}>
            <select value={filterLead} onChange={e=>setFilterLead(e.target.value)} style={{fontSize:12,background:"transparent",border:`0.5px solid ${dk.border}`,borderRadius:6,color:dk.muted,padding:"4px 8px",cursor:"pointer"}}>
              {["All",...leads].map(l=><option key={l} value={l}>{l==="All"?"All leads":l}</option>)}
            </select>
          </div>
          {projects.filter(p=>filterLead==="All"||p.lead===filterLead).map((p,i)=>{
            const i_real=projects.indexOf(p);
            const pt=taskMap[i_real], done=pt.filter(t=>t.done).length, pct=Math.round(done/pt.length*100);
            const ptc=tcFn(p.type), psc=sc(p.status), phc=hc(p.health), dm=dueMeta(p.dueDate,dk);
            const cardBorder=p.health==="Off Track"?dk.red:(p.health==="At Risk"||p.health==="Delayed")?dk.amber+"88":dk.border;
            const allDone=pt.length>0&&pt.every(t=>t.done);
            const stageState=si=>{const sp=pt.filter(t=>t.stage===si);if(!sp.length)return"none";if(sp.every(t=>t.done))return"done";if(sp.some(t=>t.done))return"active";return"none";};
            return (
              <div key={i_real} style={{background:dk.card,border:`0.5px solid ${cardBorder}`,borderRadius:12,padding:"1rem 1.25rem",marginBottom:10,cursor:"pointer"}} onClick={()=>{setCurrent(i_real);setStage(p.activeStage);setDetailTab("tasks");setView("detail");}}>
                <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12,marginBottom:8}}>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
                    <span style={{fontSize:12,fontWeight:500,padding:"3px 8px",borderRadius:6,background:ptc.bg,color:ptc.color,border:`0.5px solid ${ptc.border}`,whiteSpace:"nowrap"}}>{p.id} · {p.type}</span>
                    <span style={{fontSize:11,padding:"3px 8px",borderRadius:20,background:phc.bg,color:phc.color,border:`0.5px solid ${phc.border}`,whiteSpace:"nowrap"}}>{p.health}</span>
                    {dm && <span style={{fontSize:11,padding:"3px 8px",borderRadius:20,background:dm.bg,color:dm.color,whiteSpace:"nowrap"}}>{dm.label}</span>}
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                    <span style={{fontSize:11,padding:"3px 10px",borderRadius:20,background:psc.bg,color:psc.color}}>{p.status}</span>
                    <button onClick={e=>{e.stopPropagation();openEditModal(i_real);}} style={{background:"none",border:`0.5px solid ${dk.border}`,borderRadius:4,cursor:"pointer",color:dk.muted,fontSize:11,padding:"2px 8px"}}>Edit</button>
                    <button onClick={e=>{e.stopPropagation();setConfirmDel(i_real);}} style={{background:"none",border:"none",cursor:"pointer",color:dk.hint,fontSize:15,lineHeight:1,padding:"2px 4px"}}>✕</button>
                  </div>
                </div>
                <div style={{fontSize:15,fontWeight:500,color:dk.text,marginBottom:2}}>{p.title}</div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:(p.notes||p.healthNote||p.nextSteps)?6:8}}>
                  <div style={{fontSize:12,color:dk.muted}}>{p.sub}</div>
                  <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:5,flexShrink:0}}>
                    <div style={{width:7,height:7,borderRadius:"50%",background:oc(p.lead||"Unassigned")}}/>
                    <select value={p.lead||"April"} onClick={e=>e.stopPropagation()} onChange={e=>{e.stopPropagation();updateLead(i_real,e.target.value);}} style={{fontSize:11,background:"transparent",border:`0.5px solid ${dk.border}`,borderRadius:6,color:dk.muted,padding:"2px 6px",cursor:"pointer"}}>
                      {leads.map(l=><option key={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                {(p.healthNote||p.notes||p.nextSteps) && (
                  <div style={{display:"grid",gridTemplateColumns:p.nextSteps?"1fr 1fr":"1fr",gap:0,background:p.healthNote?dk.amber+"18":dk.surface,border:`0.5px solid ${p.healthNote?dk.amber+"44":dk.border}`,borderRadius:6,marginBottom:10,overflow:"hidden"}}>
                    <div style={{padding:"6px 10px",lineHeight:1.5}}>
                      <div style={{fontSize:10,color:dk.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:2}}>Description</div>
                      <div style={{fontSize:13,color:p.healthNote?dk.amber:dk.muted,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}>
                        {p.healthNote||p.notes||<span style={{fontStyle:"italic",color:dk.hint}}>No description</span>}
                      </div>
                    </div>
                    {p.nextSteps && (
                      <div style={{padding:"6px 10px",borderLeft:`2px solid ${dk.border2}`,lineHeight:1.5}}>
                        <div style={{fontSize:10,color:dk.hint,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:2}}>Next steps</div>
                        <div style={{fontSize:13,color:dk.text,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}>{p.nextSteps}</div>
                      </div>
                    )}
                  </div>
                )}
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,flexWrap:"wrap"}}>
                  <span style={{fontSize:11,color:dk.muted}}>Projected completion:</span>
                  <input type="date" value={p.dueDate||""} onClick={e=>e.stopPropagation()} onChange={e=>{e.stopPropagation();updateDue(i_real,e.target.value);}} style={{fontSize:11,background:"transparent",border:`0.5px solid ${dk.border}`,borderRadius:6,color:dk.muted,padding:"2px 6px",cursor:"pointer"}}/>
                  {allDone && p.completedDate && (
                    <span style={{fontSize:11,padding:"2px 8px",borderRadius:20,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,border:`0.5px solid ${dk.green}44`}}>✓ Completed {fmtDate(p.completedDate)}</span>
                  )}
                </div>
                {p.type!=="OTH" && (
                  <div style={{marginBottom:8}}>
                    <div style={{display:"flex",gap:4,marginBottom:3}}>{STAGES.map((_,si)=><div key={si} style={pip(stageState(si))}/>)}</div>
                    <div style={{display:"flex",gap:4}}>{STAGES.map((st,si)=>{const s=stageState(si);return <div key={si} style={{flex:1,fontSize:9,color:s==="done"?dk.green:s==="active"?dk.blue:dk.hint,textAlign:"center",lineHeight:1.2,overflow:"hidden",whiteSpace:"nowrap"}}>{si+1}. {st}</div>;})}</div>
                  </div>
                )}
                <div style={{display:"flex",gap:8,alignItems:"center"}}>
                  <div style={{flex:1,height:4,background:dk.border,borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",background:dk.green,borderRadius:2}}/></div>
                  <span style={{fontSize:12,color:dk.muted,whiteSpace:"nowrap"}}>{done}/{pt.length} · {pct}%</span>
                  <span style={{fontSize:12,color:dk.hint}}>→</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Capacity tab */}
      {tab==="capacity" && (
        <div>
          <div style={{fontSize:13,color:dk.muted,marginBottom:12}}>Active project load per lead · On Hold excluded from load &amp; score</div>

          {/* ── Workload comparison bar ── */}
          <div style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,padding:"1rem 1.25rem",marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:500,color:dk.text,marginBottom:10}}>Workload comparison</div>
            {[...capData].sort((a,b)=>b.workloadScore-a.workloadScore).map((d,i)=>{
              const lc=loadColor(d.active);
              const pct=Math.round(d.workloadScore/maxScore*100);
              return (
                <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:i<capData.length-1?8:0}}>
                  <div style={{fontSize:12,color:dk.muted,width:70,flexShrink:0}}>{d.member}</div>
                  <div style={{flex:1,height:8,background:dk.border,borderRadius:4,overflow:"hidden"}}>
                    <div style={{height:"100%",width:pct+"%",background:lc,borderRadius:4,transition:"width 0.3s"}}/>
                  </div>
                  <div style={{fontSize:13,fontWeight:600,color:lc,width:26,textAlign:"right",flexShrink:0}}>{d.workloadScore}</div>
                  <div style={{fontSize:10,padding:"1px 7px",borderRadius:10,background:lc+"22",color:lc,width:50,textAlign:"center",flexShrink:0}}>{loadLabel(d.active)}</div>
                </div>
              );
            })}
          </div>

          {/* ── Three-column cards ── */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:12,marginBottom:12}}>
            {[...capData].sort((a,b)=>b.workloadScore-a.workloadScore).map((d,i)=>{
              const lc=loadColor(d.active);
              const ll=loadLabel(d.active);
              const rR=30,rCX=40,rCY=40,rSW=8,rCIRC=2*Math.PI*rR;
              const taskPct=d.totalTasks>0?d.doneTasks/d.totalTasks:0;
              return (
                <div key={i} style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,padding:"1rem",display:"flex",flexDirection:"column",gap:10}}>

                  {/* Header */}
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:30,height:30,borderRadius:"50%",background:oc(d.member)+"33",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:600,color:oc(d.member),flexShrink:0}}>{d.member[0]}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,fontWeight:600,color:dk.text}}>{d.member}</div>
                      <div style={{fontSize:10,color:dk.muted}}>{d.active} active{d.onHoldCount>0?` · ${d.onHoldCount} hold`:""} · {d.done} done</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{fontSize:20,fontWeight:700,color:lc,lineHeight:1}}>{d.workloadScore}</div>
                      <div style={{fontSize:9,padding:"1px 5px",borderRadius:8,background:lc+"22",color:lc,marginTop:2,textAlign:"center"}}>{ll}</div>
                    </div>
                  </div>

                  {/* Donut ring — task completion */}
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx={rCX} cy={rCY} r={rR} fill="none" stroke={dk.border} strokeWidth={rSW}/>
                      {d.totalTasks>0 && (
                        <circle cx={rCX} cy={rCY} r={rR} fill="none" stroke={dk.green} strokeWidth={rSW}
                          strokeDasharray={`${taskPct*rCIRC} ${rCIRC}`}
                          strokeDashoffset={0} transform={`rotate(-90,${rCX},${rCY})`}/>
                      )}
                      <text x={rCX} y={rCY-4} textAnchor="middle" fontSize="13" fontWeight="700" fill={dk.text}>{Math.round(taskPct*100)}%</text>
                      <text x={rCX} y={rCY+9} textAnchor="middle" fontSize="8" fill={dk.muted}>{d.doneTasks}/{d.totalTasks} tasks</text>
                    </svg>
                  </div>

                  {/* Segmented health bar */}
                  <div>
                    <div style={{height:6,borderRadius:3,overflow:"hidden",display:"flex",background:dk.border}}>
                      {d.active>0 && [
                        {n:d.onTrack,  color:dk.green},
                        {n:d.atRisk,   color:dk.amber},
                        {n:d.offTrack, color:dk.red},
                      ].filter(s=>s.n>0).map((seg,si)=>(
                        <div key={si} style={{flex:seg.n,height:"100%",background:seg.color}}/>
                      ))}
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginTop:5,flexWrap:"wrap"}}>
                      {d.onTrack>0  && <span style={{display:"flex",alignItems:"center",gap:3,fontSize:10,color:dk.green}}><span style={{width:6,height:6,borderRadius:"50%",background:dk.green,display:"inline-block"}}/>{d.onTrack} on track</span>}
                      {d.atRisk>0   && <span style={{display:"flex",alignItems:"center",gap:3,fontSize:10,color:dk.amber}}><span style={{width:6,height:6,borderRadius:"50%",background:dk.amber,display:"inline-block"}}/>{d.atRisk} at risk</span>}
                      {d.offTrack>0 && <span style={{display:"flex",alignItems:"center",gap:3,fontSize:10,color:dk.red}}><span style={{width:6,height:6,borderRadius:"50%",background:dk.red,display:"inline-block"}}/>{d.offTrack} off track</span>}
                      {d.active===0 && <span style={{fontSize:10,color:dk.hint,fontStyle:"italic"}}>No active projects</span>}
                      <span style={{marginLeft:"auto",fontSize:10,color:dk.muted,flexShrink:0}}>{d.openTasks} open tasks</span>
                    </div>
                  </div>

                  {/* Active projects with mini progress bars */}
                  {d.byActive.length>0 && (
                    <div style={{display:"flex",flexDirection:"column",gap:6}}>
                      {d.byActive.map(bp=>{
                        const ptc=tcFn(bp.type),phc=hc(bp.health);
                        const bpPct=bp.total>0?Math.round(bp.done/bp.total*100):0;
                        const dm=bp.dueDate?dueMeta(bp.dueDate,dk):null;
                        return (
                          <div key={bp.id}>
                            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:2}}>
                              <span style={{fontSize:10,padding:"1px 5px",borderRadius:20,background:ptc.bg,color:ptc.color,border:`0.5px solid ${ptc.border}`,whiteSpace:"nowrap",flexShrink:0}}>{bp.id}</span>
                              {dm && <span style={{fontSize:9,padding:"1px 5px",borderRadius:20,background:dm.bg,color:dm.color,whiteSpace:"nowrap",marginLeft:"auto",flexShrink:0}}>{dm.label}</span>}
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:4}}>
                              <div style={{flex:1,height:3,background:dk.border,borderRadius:2,overflow:"hidden"}}>
                                <div style={{height:"100%",width:bpPct+"%",background:phc.color,borderRadius:2}}/>
                              </div>
                              <span style={{fontSize:9,color:dk.hint,flexShrink:0,width:24,textAlign:"right"}}>{bpPct}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* On Hold projects */}
                  {d.byOnHold.length>0 && (
                    <div style={{display:"flex",flexDirection:"column",gap:5}}>
                      <div style={{fontSize:9,color:dk.hint,textTransform:"uppercase",letterSpacing:"0.05em"}}>On Hold</div>
                      {d.byOnHold.map(bp=>{
                        const bpPct=bp.total>0?Math.round(bp.done/bp.total*100):0;
                        return (
                          <div key={bp.id} style={{opacity:0.65}}>
                            <div style={{display:"flex",alignItems:"center",gap:4,marginBottom:2}}>
                              <span style={{fontSize:10,padding:"1px 5px",borderRadius:20,background:"#3730a322",color:"#a78bfa",border:`0.5px solid #4338ca44`,whiteSpace:"nowrap",flexShrink:0}}>{bp.id}</span>
                              <span style={{fontSize:9,color:"#a78bfa",marginLeft:"auto"}}>on hold</span>
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:4}}>
                              <div style={{flex:1,height:3,background:dk.border,borderRadius:2,overflow:"hidden"}}>
                                <div style={{height:"100%",width:bpPct+"%",background:"#a78bfa",borderRadius:2}}/>
                              </div>
                              <span style={{fontSize:9,color:dk.hint,flexShrink:0,width:24,textAlign:"right"}}>{bpPct}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Footer — nearest due date */}
                  {d.nearestDue ? (
                    <div style={{paddingTop:8,borderTop:`0.5px solid ${dk.border}`,display:"flex",alignItems:"center",gap:5,fontSize:10,marginTop:"auto"}}>
                      <span style={{color:dk.hint}}>Next due:</span>
                      <span style={{fontWeight:500,color:dk.text}}>{d.nearestDue.id}</span>
                      {(()=>{const dm=dueMeta(d.nearestDue.dueDate,dk);return dm?<span style={{padding:"1px 5px",borderRadius:20,background:dm.bg,color:dm.color}}>{dm.label}</span>:null;})()}
                    </div>
                  ) : (
                    <div style={{paddingTop:8,borderTop:`0.5px solid ${dk.border}`,fontSize:10,color:dk.hint,fontStyle:"italic",marginTop:"auto"}}>No upcoming due dates</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{padding:"0.75rem 1rem",background:dk.surface,borderRadius:8}}>
            <div style={{fontSize:11,color:dk.hint,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.05em"}}>Load thresholds (active projects)</div>
            <div style={{display:"flex",gap:20,flexWrap:"wrap",alignItems:"center"}}>
              {[{label:"Critical (5+)",color:dk.red},{label:"Heavy (3–4)",color:dk.amber},{label:"Healthy (1–2)",color:dk.green}].map(l=>(
                <div key={l.label} style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:dk.muted}}>
                  <div style={{width:10,height:10,borderRadius:2,background:l.color}}/>{l.label}
                </div>
              ))}
              <div style={{marginLeft:"auto",fontSize:11,color:dk.hint}}>Workload score = active × 5 + open tasks ÷ 2</div>
            </div>
          </div>
        </div>
      )}

      {/* Leads tab */}
      {tab==="leads" && (
        <div style={{maxWidth:480}}>
          <div style={{fontSize:13,color:dk.muted,marginBottom:16}}>Manage project leads. Leads appear in all dropdowns and the capacity view.</div>
          {confirmDelLead!==null && (
            <div style={mWrap}>
              <div style={mBox(380)}>
                <div style={{fontSize:15,fontWeight:500,color:dk.text,marginBottom:8}}>Remove this lead?</div>
                <div style={{fontSize:13,color:dk.muted,background:dk.surface,borderRadius:8,padding:"0.6rem 0.9rem",marginBottom:20}}>{leads[confirmDelLead]}</div>
                <div style={{display:"flex",justifyContent:"flex-end",gap:10}}>
                  <button style={bCancel} onClick={()=>setConfirmDelLead(null)}>Cancel</button>
                  <button style={bRed} onClick={()=>deleteLead(confirmDelLead)}>Remove</button>
                </div>
              </div>
            </div>
          )}
          <div style={{background:dk.card,border:`0.5px solid ${dk.border}`,borderRadius:12,overflow:"hidden"}}>
            {leads.map((l,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"0.75rem 1rem",borderBottom:i<leads.length-1?`0.5px solid ${dk.border}`:"none"}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:oc(l)+"33",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:600,color:oc(l),flexShrink:0}}>{l[0]}</div>
                {editLeadIdx===i ? (
                  <>
                    <input autoFocus value={editLeadName} onChange={e=>setEditLeadName(e.target.value)}
                      onKeyDown={e=>{if(e.key==="Enter")renameLead();if(e.key==="Escape"){setEditLeadIdx(null);setEditLeadName("");}}}
                      style={{flex:1,background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:6,color:dk.text,fontSize:13,padding:"5px 9px",outline:"none"}}/>
                    <button onClick={renameLead} style={{fontSize:12,padding:"4px 12px",borderRadius:6,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer"}}>Save</button>
                    <button onClick={()=>{setEditLeadIdx(null);setEditLeadName("");}} style={{fontSize:12,padding:"4px 10px",borderRadius:6,border:`0.5px solid ${dk.border2}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span style={{flex:1,fontSize:13,color:dk.text}}>{l}</span>
                    <button onClick={()=>{setEditLeadIdx(i);setEditLeadName(l);}} style={{fontSize:11,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.muted,cursor:"pointer"}}>Rename</button>
                    <button onClick={()=>setConfirmDelLead(i)} style={{fontSize:11,padding:"3px 10px",borderRadius:6,border:`0.5px solid ${dk.border}`,background:"transparent",color:dk.hint,cursor:"pointer"}}>Remove</button>
                  </>
                )}
              </div>
            ))}
            <div style={{padding:"0.75rem 1rem",display:"flex",gap:8,alignItems:"center"}}>
              <input value={newLeadName} onChange={e=>setNewLeadName(e.target.value)}
                onKeyDown={e=>{if(e.key==="Enter")addLead();}}
                placeholder="New lead name..." style={{flex:1,background:dk.surface,border:`0.5px solid ${dk.border2}`,borderRadius:6,color:dk.text,fontSize:13,padding:"6px 10px",outline:"none"}}/>
              <button onClick={addLead} style={{fontSize:12,padding:"6px 16px",borderRadius:6,border:`0.5px solid ${dk.green}`,background:dark?"#0d2b1f":"#EAF3DE",color:dk.green,cursor:"pointer",whiteSpace:"nowrap"}}>+ Add lead</button>
            </div>
          </div>
        </div>
      )}

      {/* Metrics tab */}
      {tab==="metrics" && <MetricsTab projects={projects} taskMap={taskMap} dk={dk} tcFn={tcFn}/>}
    </div>
  );
}
