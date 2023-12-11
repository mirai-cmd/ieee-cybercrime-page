function getIP(){
  fetch("https://api.ipify.org",{
    method: "GET"
  }).then((res)=>{
    console.log("IP is ",res.ip)
  }).catch((err)=>{
    console.log("Error",err)
  })
  return;
}
function getfile() {
 var textFile=null;
  var text =
    "Merry Christmas!!\nThis is a test.\nIf you are seeing this then its for the best, this is how dangerous files are used to inflict damage.\nThank you for being a part of this experiment.\nStay safe and have a nice day :)";
  var data = new Blob([text], { type: "text/plain" });
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
}
function downloadBadFile() {
  var link = document.createElement("a");
  var name = "badfile.txt";
  link.download = name;
  link.href = getfile();
  link.click();
  delete link;
}
function handleLoad() {
  downloadBadFile();
}
