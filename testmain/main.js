/**
 * Created by gregrory on 17-5-18.
 */
function main(string) {
    var words = string.trim().split(/\s+/);
    var splitWords = [];
    var num = [];

    function findPositon(arr, w) {
        var ret = -1;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === w) {
                ret = i;
            }
        }
        return ret;
    }

    function classify(words,num) {
        for (var i = 0; i < words.length; i++) {
            var pos = findPositon(splitWords, words[i]);
            if (pos !== -1) {
                num[pos]++;
            } else {

                splitWords.push(words[i]);
                num.push(1);
            }
        }
    }

    function format(splitWords,num) {
        var answer = '';
        for (var i = 0; i < splitWords.length; i++) {
            answer += splitWords[i] + ' ' + num[i];
            if (i !== splitWords.length - 1) {
                answer += '\n';
            }
        }

        return answer;
    }

    function SortWords(splitWords,num) {
        for (var i = 0; i < num.length; i++) {
            for (var j = i; j < num.length; j++) {
                if (num[i] < num[j]) {
                    var temp = num[i];
                    num[i] = num[j];
                    num[j] = temp;
                    temp = splitWords[i];
                    splitWords[i] = splitWords[j];
                    splitWords[j] = temp;
                }
            }
        }
    }

    classify(words,num);

    SortWords(splitWords,num);

    return format(splitWords,num);
}


module.exports = main;