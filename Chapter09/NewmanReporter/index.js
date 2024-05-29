function MyCustomNewmanReporter (newman, reporterOptions,
 collectionRunOptions) {   
    newman.on('start', function (err) {
        if (err) { return; }
        console.log('Collection run starting')
    });
    newman.on('item', function (err,args) {
        console.log('Ran: '+args.item.name)
    });
    newman.on('done', function () {
        console.log('all done!')
    });
  };
module.exports = MyCustomNewmanReporter

