let environment = "staging";
let baseurl = environment === "production" ? "https://production.example.com" : "https://staging.example.com";
console.log(baseurl);


let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log(browserMode);


let responsetime = 1500;
let sla = 100;
let status = responsetime <= sla ? "Response time is within SLA" : "Response time is outside SLA";
console.log(`Output will be shown as following: ${status}`);
console.log('Output will be shown as following: ${status}');






