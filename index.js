var ffi = require('ffi');
var path = require('path');
const ref = require('ref')
const refArray = require('ref-array')
var iconv = require('iconv-lite');

var dllPath = path.resolve('Termb.dll');
// console.log(dllPath)
var lib = ffi.Library(dllPath, {
  'CVR_InitComm': ['int', ['int']],
  'CVR_CloseComm': ['int',[]],
  'CVR_Authenticate': ['int',[]],
  'CVR_Read_FPContent': ['int', []],
  'GetPeopleName':['int' ,[ref.refType('char') , ref.refType('int')]]
})

var iRetUSB = lib.CVR_InitComm(1001)
console.log('iRetUSB', iRetUSB)
if (iRetUSB != 1) return;
var authenticate = lib.CVR_Authenticate();
console.log('authenticate', authenticate);
if (authenticate != 1) {
  lib.CVR_CloseComm();
  return;
}

var readContent = lib.CVR_Read_FPContent();
console.log('readContent',readContent)
if (readContent != 1) {
  lib.CVR_CloseComm();
  return;
}

// var charArray= refArray(ref.types.char, 128)
// var value = new charArray()

// var maxStringLength = 128;
// var theStringBuffer = new Buffer(maxStringLength);
// theStringBuffer.fill(0);

// var length = 128
// var data = new Buffer(length);

var handleRef = ref.alloc('int');
var lt = new Buffer(128).fill(" ");


lib.GetPeopleName(lt , handleRef);
var as_data = iconv.decode(lt, 'GBK');
console.log('GetPeopleName',as_data)


