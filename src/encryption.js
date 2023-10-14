import CryptoJS from "crypto-js";

var iv  = CryptoJS.enc.Base64.parse("");//giving empty initialization vector
var key=CryptoJS.SHA256("Message");//hashing the key using SHA256

function encryptData(data){
    var encryptedString = "";
    if(typeof data=="string"){
        data=data.slice();
        encryptedString = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
	    });
    }
	else{
        encryptedString = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
	    });  
    }
	return encryptedString.toString();
}

function decryptData(encrypted){
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        	  iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    var decryptedString = decrypted.toString(CryptoJS.enc.Utf8)
    return decryptedString.toString()
}

// // Encryption
// var data="hello";
// var encrypted=encryptData(data, iv, key);
// console.log("> Encrypted message: " + encrypted);

// // Decryption
// var decrypteddata=decryptData("zSIG+LLedmdQ3rsPJD0uXw==", iv, key);
// console.log("> Decrypted message: " + decrypteddata);

export {encryptData, decryptData}