import {createServer} from 'node:http';
import {reconcile} from './sync.js';
createServer(async (req,res)=>{
 if (req.method==='GET' && req.url==='/health'){res.writeHead(200,{'content-type':'application/json'});return res.end(JSON.stringify({status:'ok'}));}
 if (req.method!=='POST'||req.url!=='/reconcile'){res.writeHead(404);return res.end('Not found');}
 let body='';for await (const chunk of req){body+=chunk;if(body.length>100000){res.writeHead(413);return res.end();}}
 try{const {local,remote}=JSON.parse(body);res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify(reconcile(local,remote)));}
 catch(e){res.writeHead(400,{'content-type':'application/json'});res.end(JSON.stringify({error:e.message}));}
}).listen(process.env.PORT||3000);
