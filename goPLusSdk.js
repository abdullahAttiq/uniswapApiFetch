

const { GoPlus, ErrorCode }= require('goplus-sdk-js');
let chainId = '1';
let addresses = ['0x0f23d49bc92ec52ff591d091b3e16c937034496e'];
// It will only return 1 result for the 1st token address if not called getAccessToken before
let ret = require(GoPlus.tokenSecurity(chainId, addresses));

if (ret.code != ErrorCode.SUCCESS) {
    console.error(ret.message);
} else {
    console.log(ret.result['0x408e41876cccdc0f92210600ef50372656052a38']);
}