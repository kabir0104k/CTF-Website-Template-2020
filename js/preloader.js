var strings = [
  "Initializing request",
  "Resolving internet address 127.0.0.1",
  "Requesting access to server",
  "Entering credentials",
  "Login denied",
  "Re-entering credentials",
  "Access granted",
  "Finding CTF backend services",
  "Services found on port 80",
  "Starting mcstausd",
  "Starting portmap",
  "Starting setroubleshootd",
  "Starting RPC idmapd",
  "Starting mdmonitor",
  "Starting system message bus",
  "Starting Bluetooth services",
  "Starting other filesystems",
  "Starting PC/SC smart card daemon (pcscd)",
  "Starting hidd",
  "Enabling /etc/fstab swaps",
  "INIT: Entering runlevel 3",
  "Entering non-interactive startup",
  "Applying INTEL CPU microcode update",
  "Checking for hardware changes",
  "Bringing up interface eth0",
  "Determining IP information for eth0... done.",
  "Connecting to backend service",
  "Connected to backend service",
  "Finding CTF database services",
  "Services found on port 3306",
  "Establishing connection to the database",
  "Connection established",
  "Logging into the database server",
  "Login successful",
  "Reading database",
  "Fetching data from database",
  "Data acquired",
  "Finding other resources",
  "Fetching resources",
  "Processing DOM",
  "Loading images",
  "Loading content",
  "Page rendered",
  "Starting display manager",
  "WELCOME TO VulnOps",
  "Initializing..."
];

var preloader = document.getElementById('preloader');
var delay = 1000;
var count = 0;
var repeat = 0;

// Load Sound File
var typingSound = new Audio("https://github.com/kabir0104k/HackerHub/raw/refs/heads/main/P.mp3");  // 🔹 Replace with your uploaded sound file URL

function addLog() {
  var row = createLog('ok', count);
  preloader.appendChild(row);
  
  goScrollToBottom();

  // 🔹 Play Sound Effect on Each Log Entry
  typingSound.currentTime = 0;  // Reset sound
  typingSound.play();

  count++;
  
  if (repeat == 0) {
    if (count > 3) delay = 300;
    if (count > 6) delay = 100;
    if (count > 8) delay = 50;
    if (count > 10) delay = 10;
  } else {
    if (count > 3) delay = 10;
  }
  
  if (count < strings.length) {
    setTimeout(function() {
      return addLog();
    }, delay);
  } else {
    setTimeout(function() {
      delay = 1000;
      typingSound.pause();  // 🔹 Stop Sound when Done
      return createLog("ok");
    }, 1000);
  }
}

function createLog(type, index) {
  var row = document.createElement('div');
  
  var spanStatus = document.createElement('span');
  spanStatus.className = type;
  spanStatus.innerHTML = type.toUpperCase();
  
  var message = (index != null) 
              ? strings[index] 
              : 'kernel: Initializing...';

  if(index == null) 
  {
    var preloader = $('#preloader');
    jQuery(preloader).fadeOut("slow");
    jQuery("#main").fadeIn("slow");
  }
  
  var spanMessage = document.createElement('span');
  spanMessage.innerHTML = message;
  
  row.appendChild(spanStatus);
  row.appendChild(spanMessage);
  
  return row;
}

function goScrollToBottom() {
  $(document).scrollTop($(document).height()); 
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

function checkCookie() {
  var user=getCookie("visited"); 
  if (user == 1) {   
    setCookie("visited", 1, 30);      
    jQuery("#main").fadeIn("slow"); 
  } else {  
    addLog();      
    setCookie("visited", 1, 30);   
  }
}

checkCookie();
