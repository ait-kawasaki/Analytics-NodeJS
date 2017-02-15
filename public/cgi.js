module.exports = function(callback) {
    var method = process.env['REQUEST_METHOD'];
    if (method == 'POST') {
        readPostData(callback);
    } else {
        var str = process.env['QUERY_STRING'] || process.argv[2] || '';
        parseQuery(str, callback);
    }
};

function readPostData(callback) {
    var str = '';
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(chunk) {
        str += chunk;
    });
    process.stdin.on('end', function() {
        parseQuery(str, callback);
    });
}

function parseQuery(str, callback) {
    var query = {};
    var arr = str.split('&');
    for (var i = 0; i < arr.length; i++) {
        var idx = arr[i].indexOf('=');
        if (idx >= 0) {
            var key = arr[i].substr(0, idx);
            var val = arr[i].substr(idx + 1);
            query[key] = decodeURIComponent(val);
        }
    }
    callback(query);
}