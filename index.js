const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static(__dirname));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

const Tone = require('Tone');
// import * as Tone from 'tone';
const now = Tone.now()
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");
