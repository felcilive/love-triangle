/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
       var sum = 0;
    for (var i = 0; i < preferences.length; i++) {
        var a = preferences[i];
        var b = preferences[a - 1];
        var c = preferences[b - 1];
        if ((preferences[i] == 0) || (preferences[a - 1] == a) || (preferences[b - 1] == b) || (preferences[c - 1] == c) || (c == a) || (a == b) || (b == c))
            continue;

        if (((preferences[a - 1] == b) && (preferences[b - 1] == c) && (preferences[c - 1] == a)) || ((preferences[a - 1] == c) && (preferences[b - 1] == a) && (preferences[c - 1] == b))) {
            preferences[i] = 0;
            preferences[a - 1] = 0;
            preferences[b - 1] = 0;
            sum++;
        }

    }


    return sum;
        };
