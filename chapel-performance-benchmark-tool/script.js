const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('parallel')) out+='- Parallel execution pattern detected\n';
if(txt.includes('distributed')) out+='- Distributed memory context\n';
if(txt.includes('task')) out+='- Task scheduling scenario\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Optimize parallelism and distributed performance\n';

res.innerText=out;
}