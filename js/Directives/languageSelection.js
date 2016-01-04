/**
 * Created by drewseph94 on 1/3/2016.
 */
//Playing around here with using a custom directive to create a dropdown menu with all of the different languages

app.directive('languageSelection', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/Directives/languageSelection.html'
    };
});
