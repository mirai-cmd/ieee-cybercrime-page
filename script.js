async function downloadBadFile() {
  var textFile = null;
  const res = await fetch("https://ipinfo.io/json?token=e3649d97b03768");
  const geo_data = await res.json();
  console.log(geo_data);
  var text = `Merry Christmas!!\n\n${
    geo_data
      ? `Your public IP address: ${geo_data.ip}\nCity : ${geo_data.city}\nRegion : ${geo_data.region}\n`
      : ""
  }\nThis is a test.\nIf you are seeing this then its for the best, this is how dangerous files are used to inflict damage.\nThank you for being a part of this experiment.\nStay safe and have a nice day :)`;
  var data = new Blob([text], { type: "text/plain" });
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  var link = document.createElement("a");
  var name = "Feedback.txt";
  link.download = name;
  link.href = textFile;
  link.target = "_blank";
  link.click();
  delete link;
}
function handleLoad() {
  downloadBadFile();
}
