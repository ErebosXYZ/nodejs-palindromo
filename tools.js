function isPalindrome(str) {
    const net = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invers = net.split('').reverse().join('');
    return net === invers;
}

module.exports.isPalindrome = isPalindrome;