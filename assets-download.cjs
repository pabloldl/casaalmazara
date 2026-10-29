const fs=require('fs');
const path=require('path');
(async()=>{
const files=[['puerto-palomas','PuertoPalomasNorte.jpg',1920],['calles-el-bosque','ElBosque MIN-DSC09511.JPG',1024],['majaceite-sendero','Majaceite MIN-DSC09548.JPG',1024]];
const credits=[];
for(const [name,title,width] of files){
 const q=new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',iiurlwidth:String(width),titles:'File:'+title});
 const data=await(await fetch('https://commons.wikimedia.org/w/api.php?'+q)).json();
 const info=Object.values(data.query.pages)[0].imageinfo[0];
 const response=await fetch(info.thumburl);if(!response.ok)throw Error(response.status);
 fs.writeFileSync(path.join(__dirname,'imgs',name+'.jpg'),Buffer.from(await response.arrayBuffer()));
 credits.push({file:name+'.jpg',source:info.descriptionurl,metadata:info.extmetadata});
}
fs.writeFileSync(path.join(__dirname,'imgs','credits.json'),JSON.stringify(credits,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
