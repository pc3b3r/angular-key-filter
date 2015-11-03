# angular-key-filter
A simple key filter for angular

Usage:

```javascript
var myObj = 
{
  "key1" : {
    "val1" : "valueA",
    "val2" : "valueB"
  },
  "key2" : {
    "val1" : "valueA",
    "val2" : "valueB"
  }
}
```

```html
<input name="clientName" ng-model="ctrl.filterValue">
<tag ng-repeat="(key, value) in ctrl.myObj | keyFilter:ctrl.filterValue">...</tag>
```
Require
[lodash](http://lodash.com)
