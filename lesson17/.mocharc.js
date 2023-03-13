module.exports = {
    bail: false,
    color: true,
    delay: false,
    diff: true,
    exit: true, 
    growl: false,
    parallel: false,
    recursive: false,
    reporter: 'mochawesome',
    reporterOptions: {
        "reportTitle": "My test report",
        "reportDir": "results",
        "overwrite": false,
        "html": true,
        "json": true
    },
    retries: 0,
    slow: '1500',
    sort: false,
    spec: ['test/**/*.js'], 
    timeout: '1500', 
    watch: false,
};