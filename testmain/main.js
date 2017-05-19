/**
 * Created by gregrory on 17-5-18.
 */
function main(string) {
    var words = string.trim().split(/\s+/);

    if (words.length === 1 )
        return words[0] + ' ' + 1;
    else if(words.length === 2){
        return words[0] + ' ' + 1 + '\n' + words[1] + ' ' + 1 ;
    }
}
module.exports = main;