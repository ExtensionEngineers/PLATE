var app = angular.module('app');
app.service('todoStorage', function () {
    var copy = this;
    this.data = [];
    this.findAll = function(callback) {
        chrome.storage.sync.get('todo', function(keys) {
            if (keys.todo != null) {
                copy.data = keys.todo;
                for (var i=0; i<copy.data.length; i++) {
                    copy.data[i]['id'] = i + 1;
                }
                console.log(copy.data);
                callback(copy.data);
            }
        });
    }
    this.sync = function() {
        chrome.storage.sync.set({todo: this.data}, function() {
            console.log('Data is stored in Chrome storage');
        });
    }
    this.add = function (newContent) {
        var id = this.data.length + 1;
        var todo = {
            id: id,
            content: newContent,
            completed: false,
            createdAt: new Date()
        };
        this.data.push(todo);
        this.sync();
    }
    this.remove = function(todo) {
        this.data.splice(this.data.indexOf(todo), 1);
        this.sync();
    }
    this.removeAll = function() {
        this.data = [];
        this.sync();
    }
});