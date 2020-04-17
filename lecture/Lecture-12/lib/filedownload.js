exports.fakeAjax = function(url, cb) {
  var fake_responses = {
    file1: "The first  file's data",
    file2: "The second file's data",
    file3: "The third file's data "
  };
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
  console.log("Requesting: " + url);
  setTimeout(function() {
    cb(fake_responses[url]);
  }, randomDelay);
};
exports.trackCheckout = function(purchaseInfo, cb) {
  return new Promise(function(resolve, reject){
    resolve();//it will work only once and the first resolve be called again and again
    resolve();
    resolve();
    resolve();
    resolve();
    resolve();
  })
};
