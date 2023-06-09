var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[Object.keys(cb)[0]])((mod2 = {exports: {}}).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports, module2) {
    (function(nacl4) {
      "use strict";
      var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init)
          for (i = 0; i < init.length; i++)
            r[i] = init[i];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++)
          d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++)
          z[i] = 0;
        for (i = 0; i < 8; i++)
          z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++)
            c[cpos + i] = m[mpos + i] ^ x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++)
            c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++)
          z[i] = 0;
        for (i = 0; i < 8; i++)
          z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++)
            c[cpos + i] = x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++)
            c[cpos + i] = x[i];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++)
          sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++)
          sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask2, f, i;
        if (this.leftover) {
          i = this.leftover;
          this.buffer[i++] = 1;
          for (; i < 16; i++)
            this.buffer[i] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this.h[i] += c;
          c = this.h[i] >>> 13;
          this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g[i] = this.h[i] + c;
          c = g[i] >>> 13;
          g[i] &= 8191;
        }
        g[9] -= 1 << 13;
        mask2 = (c ^ 1) - 1;
        for (i = 0; i < 10; i++)
          g[i] &= mask2;
        mask2 = ~mask2;
        for (i = 0; i < 10; i++)
          this.h[i] = this.h[i] & mask2 | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i = 1; i < 8; i++) {
          f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
          this.h[i] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i = 0; i < want; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i = 0; i < bytes; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32)
          return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i = 0; i < 16; i++)
          c[i] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32)
          return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0)
          return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (i = 0; i < 32; i++)
          m[i] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++)
          r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++)
          t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++)
          o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++)
          z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
      }
      function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j = 8 * i + pos;
            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++)
          x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++)
          ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i;
        if (!seeded)
          randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i = 0; i < 32; i++)
          sk[i + 32] = pk[i];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++)
          x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++)
          x[i] = r[i];
        for (i = 0; i < 64; i++)
          r[i] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i = 0; i < n; i++)
          sm[64 + i] = m[i];
        for (i = 0; i < 32; i++)
          sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 32; i < 64; i++)
          sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++)
          x[i] = 0;
        for (i = 0; i < 32; i++)
          x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          return -1;
        if (par25519(r[0]) === p[31] >> 7)
          Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64)
          return -1;
        if (unpackneg(q, pk))
          return -1;
        for (i = 0; i < n; i++)
          m[i] = sm[i];
        for (i = 0; i < 32; i++)
          m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++)
            m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++)
          m[i] = sm[i + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl4.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES)
          throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES)
          throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i = 0; i < arguments.length; i++) {
          if (!(arguments[i] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i = 0; i < arr.length; i++)
          arr[i] = 0;
      }
      nacl4.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl4.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for (var i = 0; i < msg.length; i++)
          m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl4.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for (var i = 0; i < box.length; i++)
          c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32)
          return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0)
          return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl4.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl4.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl4.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl4.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES)
          throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl4.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl4.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl4.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl4.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl4.box.before(publicKey, secretKey);
        return nacl4.secretbox(msg, nonce, k);
      };
      nacl4.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl4.box.after = nacl4.secretbox;
      nacl4.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl4.box.before(publicKey, secretKey);
        return nacl4.secretbox.open(msg, nonce, k);
      };
      nacl4.box.open.after = nacl4.secretbox.open;
      nacl4.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return {publicKey: pk, secretKey: sk};
      };
      nacl4.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
      };
      nacl4.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl4.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl4.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl4.box.nonceLength = crypto_box_NONCEBYTES;
      nacl4.box.overheadLength = nacl4.secretbox.overheadLength;
      nacl4.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl4.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0)
          return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++)
          m[i] = tmp[i];
        return m;
      };
      nacl4.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl4.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i = 0; i < sig.length; i++)
          sig[i] = signedMsg[i];
        return sig;
      };
      nacl4.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for (i = 0; i < crypto_sign_BYTES; i++)
          sm[i] = sig[i];
        for (i = 0; i < msg.length; i++)
          sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl4.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return {publicKey: pk, secretKey: sk};
      };
      nacl4.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i = 0; i < pk.length; i++)
          pk[i] = secretKey[32 + i];
        return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
      };
      nacl4.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i = 0; i < 32; i++)
          sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return {publicKey: pk, secretKey: sk};
      };
      nacl4.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl4.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl4.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl4.sign.signatureLength = crypto_sign_BYTES;
      nacl4.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl4.hash.hashLength = crypto_hash_BYTES;
      nacl4.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0)
          return false;
        if (x.length !== y.length)
          return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl4.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto2 = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto2 && crypto2.getRandomValues) {
          var QUOTA = 65536;
          nacl4.setPRNG(function(x, n) {
            var i, v = new Uint8Array(n);
            for (i = 0; i < n; i += QUOTA) {
              crypto2.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            for (i = 0; i < n; i++)
              x[i] = v[i];
            cleanup(v);
          });
        } else if (typeof require !== "undefined") {
          crypto2 = require_crypto();
          if (crypto2 && crypto2.randomBytes) {
            nacl4.setPRNG(function(x, n) {
              var i, v = crypto2.randomBytes(n);
              for (i = 0; i < n; i++)
                x[i] = v[i];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module2 !== "undefined" && module2.exports ? module2.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/base-x/src/index.js"(exports, module2) {
    "use strict";
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode2(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          pbegin++;
        }
        var it2 = size - length;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        var zeroes = 0;
        var length = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length = i2;
          psz++;
        }
        var it4 = size - length;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode2(string2) {
        var buffer = decodeUnsafe(string2);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode: encode2,
        decodeUnsafe,
        decode: decode2
      };
    }
    module2.exports = base;
  }
});

// node_modules/bs58/index.js
var require_bs58 = __commonJS({
  "node_modules/bs58/index.js"(exports, module2) {
    var basex = require_src();
    var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    module2.exports = basex(ALPHABET);
  }
});

// node_modules/@noble/hashes/_assert.js
var require_assert = __commonJS({
  "node_modules/@noble/hashes/_assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
    function number2(n) {
      if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
    }
    exports.number = number2;
    function bool(b) {
      if (typeof b !== "boolean")
        throw new Error(`Expected boolean, not ${b}`);
    }
    exports.bool = bool;
    function bytes(b, ...lengths) {
      if (!(b instanceof Uint8Array))
        throw new TypeError("Expected Uint8Array");
      if (lengths.length > 0 && !lengths.includes(b.length))
        throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
    }
    exports.bytes = bytes;
    function hash(hash2) {
      if (typeof hash2 !== "function" || typeof hash2.create !== "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
      number2(hash2.outputLen);
      number2(hash2.blockLen);
    }
    exports.hash = hash;
    function exists(instance, checkFinished = true) {
      if (instance.destroyed)
        throw new Error("Hash instance has been destroyed");
      if (checkFinished && instance.finished)
        throw new Error("Hash#digest() has already been called");
    }
    exports.exists = exists;
    function output(out, instance) {
      bytes(out);
      const min = instance.outputLen;
      if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
      }
    }
    exports.output = output;
    var assert2 = {
      number: number2,
      bool,
      bytes,
      hash,
      exists,
      output
    };
    exports.default = assert2;
  }
});

// node_modules/@noble/hashes/crypto.js
var require_crypto2 = __commonJS({
  "node_modules/@noble/hashes/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.crypto = void 0;
    exports.crypto = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// node_modules/@noble/hashes/utils.js
var require_utils = __commonJS({
  "node_modules/@noble/hashes/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
    var crypto_1 = require_crypto2();
    var u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.u8 = u8;
    var u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
    exports.u32 = u32;
    var createView2 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    exports.createView = createView2;
    var rotr = (word, shift) => word << 32 - shift | word >>> shift;
    exports.rotr = rotr;
    exports.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    if (!exports.isLE)
      throw new Error("Non little-endian hardware is not supported");
    var hexes = Array.from({length: 256}, (v, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex4(uint8a) {
      if (!(uint8a instanceof Uint8Array))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < uint8a.length; i++) {
        hex += hexes[uint8a[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex4;
    function hexToBytes2(hex) {
      if (typeof hex !== "string") {
        throw new TypeError("hexToBytes: expected string, got " + typeof hex);
      }
      if (hex.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex");
      const array2 = new Uint8Array(hex.length / 2);
      for (let i = 0; i < array2.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
          throw new Error("Invalid byte sequence");
        array2[i] = byte;
      }
      return array2;
    }
    exports.hexToBytes = hexToBytes2;
    var nextTick = async () => {
    };
    exports.nextTick = nextTick;
    async function asyncLoop(iters, tick, cb) {
      let ts = Date.now();
      for (let i = 0; i < iters; i++) {
        cb(i);
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
          continue;
        await (0, exports.nextTick)();
        ts += diff;
      }
    }
    exports.asyncLoop = asyncLoop;
    function utf8ToBytes2(str) {
      if (typeof str !== "string") {
        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
      }
      return new TextEncoder().encode(str);
    }
    exports.utf8ToBytes = utf8ToBytes2;
    function toBytes(data) {
      if (typeof data === "string")
        data = utf8ToBytes2(data);
      if (!(data instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
      return data;
    }
    exports.toBytes = toBytes;
    function concatBytes2(...arrays) {
      if (!arrays.every((a) => a instanceof Uint8Array))
        throw new Error("Uint8Array list expected");
      if (arrays.length === 1)
        return arrays[0];
      const length = arrays.reduce((a, arr) => a + arr.length, 0);
      const result = new Uint8Array(length);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
      }
      return result;
    }
    exports.concatBytes = concatBytes2;
    var Hash = class {
      clone() {
        return this._cloneInto();
      }
    };
    exports.Hash = Hash;
    var isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
    function checkOpts(defaults, opts) {
      if (opts !== void 0 && (typeof opts !== "object" || !isPlainObject(opts)))
        throw new TypeError("Options should be object or undefined");
      const merged = Object.assign(defaults, opts);
      return merged;
    }
    exports.checkOpts = checkOpts;
    function wrapConstructor(hashConstructor) {
      const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
      const tmp = hashConstructor();
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = () => hashConstructor();
      return hashC;
    }
    exports.wrapConstructor = wrapConstructor;
    function wrapConstructorWithOpts(hashCons) {
      const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
      const tmp = hashCons({});
      hashC.outputLen = tmp.outputLen;
      hashC.blockLen = tmp.blockLen;
      hashC.create = (opts) => hashCons(opts);
      return hashC;
    }
    exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
    function randomBytes(bytesLength = 32) {
      if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
        return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
      }
      throw new Error("crypto.getRandomValues must be defined");
    }
    exports.randomBytes = randomBytes;
  }
});

// node_modules/@noble/hashes/_sha2.js
var require_sha2 = __commonJS({
  "node_modules/@noble/hashes/_sha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.SHA2 = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils();
    function setBigUint64(view, byteOffset, value, isLE) {
      if (typeof view.setBigUint64 === "function")
        return view.setBigUint64(byteOffset, value, isLE);
      const _32n = BigInt(32);
      const _u32_max = BigInt(4294967295);
      const wh = Number(value >> _32n & _u32_max);
      const wl = Number(value & _u32_max);
      const h = isLE ? 4 : 0;
      const l = isLE ? 0 : 4;
      view.setUint32(byteOffset + h, wh, isLE);
      view.setUint32(byteOffset + l, wl, isLE);
    }
    var SHA2 = class extends utils_js_1.Hash {
      constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
      }
      update(data) {
        _assert_js_1.default.exists(this);
        const {view, buffer, blockLen} = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = (0, utils_js_1.createView)(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        this.finished = true;
        const {buffer, view, blockLen, isLE} = this;
        let {pos} = this;
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i = pos; i < blockLen; i++)
          buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i = 0; i < outLen; i++)
          oview.setUint32(4 * i, state[i], isLE);
      }
      digest() {
        const {buffer, outputLen} = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const {blockLen, buffer, length, finished, destroyed, pos} = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen)
          to.buffer.set(buffer);
        return to;
      }
    };
    exports.SHA2 = SHA2;
  }
});

// node_modules/@noble/hashes/sha256.js
var require_sha256 = __commonJS({
  "node_modules/@noble/hashes/sha256.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sha224 = exports.sha256 = void 0;
    var _sha2_js_1 = require_sha2();
    var utils_js_1 = require_utils();
    var Chi = (a, b, c) => a & b ^ ~a & c;
    var Maj = (a, b, c) => a & b ^ a & c ^ b & c;
    var SHA256_K = new Uint32Array([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    var IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SHA256_W = new Uint32Array(64);
    var SHA256 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(64, 32, 8, false);
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
      }
      get() {
        const {A, B, C, D, E, F, G, H} = this;
        return [A, B, C, D, E, F, G, H];
      }
      set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
          const W15 = SHA256_W[i - 15];
          const W2 = SHA256_W[i - 2];
          const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
          const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
          SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        let {A, B, C, D, E, F, G, H} = this;
        for (let i = 0; i < 64; i++) {
          const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
          const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
          const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
          const T2 = sigma0 + Maj(A, B, C) | 0;
          H = G;
          G = F;
          F = E;
          E = D + T1 | 0;
          D = C;
          C = B;
          B = A;
          A = T1 + T2 | 0;
        }
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
      }
      roundClean() {
        SHA256_W.fill(0);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
      }
    };
    var SHA224 = class extends SHA256 {
      constructor() {
        super();
        this.A = 3238371032 | 0;
        this.B = 914150663 | 0;
        this.C = 812702999 | 0;
        this.D = 4144912697 | 0;
        this.E = 4290775857 | 0;
        this.F = 1750603025 | 0;
        this.G = 1694076839 | 0;
        this.H = 3204075428 | 0;
        this.outputLen = 28;
      }
    };
    exports.sha256 = (0, utils_js_1.wrapConstructor)(() => new SHA256());
    exports.sha224 = (0, utils_js_1.wrapConstructor)(() => new SHA224());
  }
});

// node_modules/@noble/hashes/_blake2.js
var require_blake2 = __commonJS({
  "node_modules/@noble/hashes/_blake2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.BLAKE2 = exports.SIGMA = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils();
    exports.SIGMA = new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3
    ]);
    var BLAKE2 = class extends utils_js_1.Hash {
      constructor(blockLen, outputLen, opts = {}, keyLen, saltLen, persLen) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.length = 0;
        this.pos = 0;
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.number(blockLen);
        _assert_js_1.default.number(outputLen);
        _assert_js_1.default.number(keyLen);
        if (outputLen < 0 || outputLen > keyLen)
          throw new Error("outputLen bigger than keyLen");
        if (opts.key !== void 0 && (opts.key.length < 1 || opts.key.length > keyLen))
          throw new Error(`key must be up 1..${keyLen} byte long or undefined`);
        if (opts.salt !== void 0 && opts.salt.length !== saltLen)
          throw new Error(`salt must be ${saltLen} byte long or undefined`);
        if (opts.personalization !== void 0 && opts.personalization.length !== persLen)
          throw new Error(`personalization must be ${persLen} byte long or undefined`);
        this.buffer32 = (0, utils_js_1.u32)(this.buffer = new Uint8Array(blockLen));
      }
      update(data) {
        _assert_js_1.default.exists(this);
        const {blockLen, buffer, buffer32} = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          if (this.pos === blockLen) {
            this.compress(buffer32, 0, false);
            this.pos = 0;
          }
          const take = Math.min(blockLen - this.pos, len - pos);
          const dataOffset = data.byteOffset + pos;
          if (take === blockLen && !(dataOffset % 4) && pos + take < len) {
            const data32 = new Uint32Array(data.buffer, dataOffset, Math.floor((len - pos) / 4));
            for (let pos32 = 0; pos + blockLen < len; pos32 += buffer32.length, pos += blockLen) {
              this.length += blockLen;
              this.compress(data32, pos32, false);
            }
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          this.length += take;
          pos += take;
        }
        return this;
      }
      digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        const {pos, buffer32} = this;
        this.finished = true;
        this.buffer.subarray(pos).fill(0);
        this.compress(buffer32, 0, true);
        const out32 = (0, utils_js_1.u32)(out);
        this.get().forEach((v, i) => out32[i] = v);
      }
      digest() {
        const {buffer, outputLen} = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to) {
        const {buffer, length, finished, destroyed, outputLen, pos} = this;
        to || (to = new this.constructor({dkLen: outputLen}));
        to.set(...this.get());
        to.length = length;
        to.finished = finished;
        to.destroyed = destroyed;
        to.outputLen = outputLen;
        to.buffer.set(buffer);
        to.pos = pos;
        return to;
      }
    };
    exports.BLAKE2 = BLAKE2;
  }
});

// node_modules/@noble/hashes/_u64.js
var require_u64 = __commonJS({
  "node_modules/@noble/hashes/_u64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.add = exports.toBig = exports.split = exports.fromBig = void 0;
    var U32_MASK64 = BigInt(2 ** 32 - 1);
    var _32n = BigInt(32);
    function fromBig(n, le = false) {
      if (le)
        return {h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64)};
      return {h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0};
    }
    exports.fromBig = fromBig;
    function split(lst, le = false) {
      let Ah = new Uint32Array(lst.length);
      let Al = new Uint32Array(lst.length);
      for (let i = 0; i < lst.length; i++) {
        const {h, l} = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
      }
      return [Ah, Al];
    }
    exports.split = split;
    var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
    exports.toBig = toBig;
    var shrSH = (h, l, s) => h >>> s;
    var shrSL = (h, l, s) => h << 32 - s | l >>> s;
    var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
    var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
    var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
    var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
    var rotr32H = (h, l) => l;
    var rotr32L = (h, l) => h;
    var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
    var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
    var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
    var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
    function add(Ah, Al, Bh, Bl) {
      const l = (Al >>> 0) + (Bl >>> 0);
      return {h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0};
    }
    exports.add = add;
    var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
    var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
    var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
    var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
    var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
    var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
    var u64 = {
      fromBig,
      split,
      toBig: exports.toBig,
      shrSH,
      shrSL,
      rotrSH,
      rotrSL,
      rotrBH,
      rotrBL,
      rotr32H,
      rotr32L,
      rotlSH,
      rotlSL,
      rotlBH,
      rotlBL,
      add,
      add3L,
      add3H,
      add4L,
      add4H,
      add5H,
      add5L
    };
    exports.default = u64;
  }
});

// node_modules/@noble/hashes/blake2b.js
var require_blake2b = __commonJS({
  "node_modules/@noble/hashes/blake2b.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.blake2b = void 0;
    var _blake2_js_1 = require_blake2();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var IV = new Uint32Array([
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var BUF = new Uint32Array(32);
    function G1(a, b, c, d, msg, x) {
      const Xl = msg[x], Xh = msg[x + 1];
      let Al = BUF[2 * a], Ah = BUF[2 * a + 1];
      let Bl = BUF[2 * b], Bh = BUF[2 * b + 1];
      let Cl = BUF[2 * c], Ch = BUF[2 * c + 1];
      let Dl = BUF[2 * d], Dh = BUF[2 * d + 1];
      let ll = _u64_js_1.default.add3L(Al, Bl, Xl);
      Ah = _u64_js_1.default.add3H(ll, Ah, Bh, Xh);
      Al = ll | 0;
      ({Dh, Dl} = {Dh: Dh ^ Ah, Dl: Dl ^ Al});
      ({Dh, Dl} = {Dh: _u64_js_1.default.rotr32H(Dh, Dl), Dl: _u64_js_1.default.rotr32L(Dh, Dl)});
      ({h: Ch, l: Cl} = _u64_js_1.default.add(Ch, Cl, Dh, Dl));
      ({Bh, Bl} = {Bh: Bh ^ Ch, Bl: Bl ^ Cl});
      ({Bh, Bl} = {Bh: _u64_js_1.default.rotrSH(Bh, Bl, 24), Bl: _u64_js_1.default.rotrSL(Bh, Bl, 24)});
      BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
      BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
      BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
      BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
    }
    function G2(a, b, c, d, msg, x) {
      const Xl = msg[x], Xh = msg[x + 1];
      let Al = BUF[2 * a], Ah = BUF[2 * a + 1];
      let Bl = BUF[2 * b], Bh = BUF[2 * b + 1];
      let Cl = BUF[2 * c], Ch = BUF[2 * c + 1];
      let Dl = BUF[2 * d], Dh = BUF[2 * d + 1];
      let ll = _u64_js_1.default.add3L(Al, Bl, Xl);
      Ah = _u64_js_1.default.add3H(ll, Ah, Bh, Xh);
      Al = ll | 0;
      ({Dh, Dl} = {Dh: Dh ^ Ah, Dl: Dl ^ Al});
      ({Dh, Dl} = {Dh: _u64_js_1.default.rotrSH(Dh, Dl, 16), Dl: _u64_js_1.default.rotrSL(Dh, Dl, 16)});
      ({h: Ch, l: Cl} = _u64_js_1.default.add(Ch, Cl, Dh, Dl));
      ({Bh, Bl} = {Bh: Bh ^ Ch, Bl: Bl ^ Cl});
      ({Bh, Bl} = {Bh: _u64_js_1.default.rotrBH(Bh, Bl, 63), Bl: _u64_js_1.default.rotrBL(Bh, Bl, 63)});
      BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
      BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
      BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
      BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
    }
    var BLAKE2b = class extends _blake2_js_1.BLAKE2 {
      constructor(opts = {}) {
        super(128, opts.dkLen === void 0 ? 64 : opts.dkLen, opts, 64, 16, 16);
        this.v0l = IV[0] | 0;
        this.v0h = IV[1] | 0;
        this.v1l = IV[2] | 0;
        this.v1h = IV[3] | 0;
        this.v2l = IV[4] | 0;
        this.v2h = IV[5] | 0;
        this.v3l = IV[6] | 0;
        this.v3h = IV[7] | 0;
        this.v4l = IV[8] | 0;
        this.v4h = IV[9] | 0;
        this.v5l = IV[10] | 0;
        this.v5h = IV[11] | 0;
        this.v6l = IV[12] | 0;
        this.v6h = IV[13] | 0;
        this.v7l = IV[14] | 0;
        this.v7h = IV[15] | 0;
        const keyLength = opts.key ? opts.key.length : 0;
        this.v0l ^= this.outputLen | keyLength << 8 | 1 << 16 | 1 << 24;
        if (opts.salt) {
          const salt = (0, utils_js_1.u32)((0, utils_js_1.toBytes)(opts.salt));
          this.v4l ^= salt[0];
          this.v4h ^= salt[1];
          this.v5l ^= salt[2];
          this.v5h ^= salt[3];
        }
        if (opts.personalization) {
          const pers = (0, utils_js_1.u32)((0, utils_js_1.toBytes)(opts.personalization));
          this.v6l ^= pers[0];
          this.v6h ^= pers[1];
          this.v7l ^= pers[2];
          this.v7h ^= pers[3];
        }
        if (opts.key) {
          const tmp = new Uint8Array(this.blockLen);
          tmp.set((0, utils_js_1.toBytes)(opts.key));
          this.update(tmp);
        }
      }
      get() {
        let {v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h} = this;
        return [v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h];
      }
      set(v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h) {
        this.v0l = v0l | 0;
        this.v0h = v0h | 0;
        this.v1l = v1l | 0;
        this.v1h = v1h | 0;
        this.v2l = v2l | 0;
        this.v2h = v2h | 0;
        this.v3l = v3l | 0;
        this.v3h = v3h | 0;
        this.v4l = v4l | 0;
        this.v4h = v4h | 0;
        this.v5l = v5l | 0;
        this.v5h = v5h | 0;
        this.v6l = v6l | 0;
        this.v6h = v6h | 0;
        this.v7l = v7l | 0;
        this.v7h = v7h | 0;
      }
      compress(msg, offset, isLast) {
        this.get().forEach((v, i) => BUF[i] = v);
        BUF.set(IV, 16);
        let {h, l} = _u64_js_1.default.fromBig(BigInt(this.length));
        BUF[24] = IV[8] ^ l;
        BUF[25] = IV[9] ^ h;
        if (isLast) {
          BUF[28] = ~BUF[28];
          BUF[29] = ~BUF[29];
        }
        let j = 0;
        const s = _blake2_js_1.SIGMA;
        for (let i = 0; i < 12; i++) {
          G1(0, 4, 8, 12, msg, offset + 2 * s[j++]);
          G2(0, 4, 8, 12, msg, offset + 2 * s[j++]);
          G1(1, 5, 9, 13, msg, offset + 2 * s[j++]);
          G2(1, 5, 9, 13, msg, offset + 2 * s[j++]);
          G1(2, 6, 10, 14, msg, offset + 2 * s[j++]);
          G2(2, 6, 10, 14, msg, offset + 2 * s[j++]);
          G1(3, 7, 11, 15, msg, offset + 2 * s[j++]);
          G2(3, 7, 11, 15, msg, offset + 2 * s[j++]);
          G1(0, 5, 10, 15, msg, offset + 2 * s[j++]);
          G2(0, 5, 10, 15, msg, offset + 2 * s[j++]);
          G1(1, 6, 11, 12, msg, offset + 2 * s[j++]);
          G2(1, 6, 11, 12, msg, offset + 2 * s[j++]);
          G1(2, 7, 8, 13, msg, offset + 2 * s[j++]);
          G2(2, 7, 8, 13, msg, offset + 2 * s[j++]);
          G1(3, 4, 9, 14, msg, offset + 2 * s[j++]);
          G2(3, 4, 9, 14, msg, offset + 2 * s[j++]);
        }
        this.v0l ^= BUF[0] ^ BUF[16];
        this.v0h ^= BUF[1] ^ BUF[17];
        this.v1l ^= BUF[2] ^ BUF[18];
        this.v1h ^= BUF[3] ^ BUF[19];
        this.v2l ^= BUF[4] ^ BUF[20];
        this.v2h ^= BUF[5] ^ BUF[21];
        this.v3l ^= BUF[6] ^ BUF[22];
        this.v3h ^= BUF[7] ^ BUF[23];
        this.v4l ^= BUF[8] ^ BUF[24];
        this.v4h ^= BUF[9] ^ BUF[25];
        this.v5l ^= BUF[10] ^ BUF[26];
        this.v5h ^= BUF[11] ^ BUF[27];
        this.v6l ^= BUF[12] ^ BUF[28];
        this.v6h ^= BUF[13] ^ BUF[29];
        this.v7l ^= BUF[14] ^ BUF[30];
        this.v7h ^= BUF[15] ^ BUF[31];
        BUF.fill(0);
      }
      destroy() {
        this.destroyed = true;
        this.buffer32.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    };
    exports.blake2b = (0, utils_js_1.wrapConstructorWithOpts)((opts) => new BLAKE2b(opts));
  }
});

// node_modules/@noble/curves/abstract/utils.js
var require_utils2 = __commonJS({
  "node_modules/@noble/curves/abstract/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = void 0;
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var u8a = (a) => a instanceof Uint8Array;
    var hexes = Array.from({length: 256}, (v, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex4(bytes) {
      if (!u8a(bytes))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
      }
      return hex;
    }
    exports.bytesToHex = bytesToHex4;
    function numberToHexUnpadded(num) {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    }
    exports.numberToHexUnpadded = numberToHexUnpadded;
    function hexToNumber(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      return BigInt(hex === "" ? "0" : `0x${hex}`);
    }
    exports.hexToNumber = hexToNumber;
    function hexToBytes2(hex) {
      if (typeof hex !== "string")
        throw new Error("hex string expected, got " + typeof hex);
      if (hex.length % 2)
        throw new Error("hex string is invalid: unpadded " + hex.length);
      const array2 = new Uint8Array(hex.length / 2);
      for (let i = 0; i < array2.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
          throw new Error("invalid byte sequence");
        array2[i] = byte;
      }
      return array2;
    }
    exports.hexToBytes = hexToBytes2;
    function bytesToNumberBE(bytes) {
      return hexToNumber(bytesToHex4(bytes));
    }
    exports.bytesToNumberBE = bytesToNumberBE;
    function bytesToNumberLE(bytes) {
      if (!u8a(bytes))
        throw new Error("Uint8Array expected");
      return hexToNumber(bytesToHex4(Uint8Array.from(bytes).reverse()));
    }
    exports.bytesToNumberLE = bytesToNumberLE;
    var numberToBytesBE = (n, len) => hexToBytes2(n.toString(16).padStart(len * 2, "0"));
    exports.numberToBytesBE = numberToBytesBE;
    var numberToBytesLE = (n, len) => (0, exports.numberToBytesBE)(n, len).reverse();
    exports.numberToBytesLE = numberToBytesLE;
    var numberToVarBytesBE = (n) => hexToBytes2(numberToHexUnpadded(n));
    exports.numberToVarBytesBE = numberToVarBytesBE;
    function ensureBytes(title, hex, expectedLength) {
      let res;
      if (typeof hex === "string") {
        try {
          res = hexToBytes2(hex);
        } catch (e) {
          throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
      } else if (u8a(hex)) {
        res = Uint8Array.from(hex);
      } else {
        throw new Error(`${title} must be hex string or Uint8Array`);
      }
      const len = res.length;
      if (typeof expectedLength === "number" && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
      return res;
    }
    exports.ensureBytes = ensureBytes;
    function concatBytes2(...arrs) {
      const r = new Uint8Array(arrs.reduce((sum, a) => sum + a.length, 0));
      let pad = 0;
      arrs.forEach((a) => {
        if (!u8a(a))
          throw new Error("Uint8Array expected");
        r.set(a, pad);
        pad += a.length;
      });
      return r;
    }
    exports.concatBytes = concatBytes2;
    function equalBytes(b1, b2) {
      if (b1.length !== b2.length)
        return false;
      for (let i = 0; i < b1.length; i++)
        if (b1[i] !== b2[i])
          return false;
      return true;
    }
    exports.equalBytes = equalBytes;
    function utf8ToBytes2(str) {
      if (typeof str !== "string") {
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
      }
      return new TextEncoder().encode(str);
    }
    exports.utf8ToBytes = utf8ToBytes2;
    function bitLen(n) {
      let len;
      for (len = 0; n > _0n; n >>= _1n, len += 1)
        ;
      return len;
    }
    exports.bitLen = bitLen;
    var bitGet = (n, pos) => n >> BigInt(pos) & _1n;
    exports.bitGet = bitGet;
    var bitSet = (n, pos, value) => n | (value ? _1n : _0n) << BigInt(pos);
    exports.bitSet = bitSet;
    var bitMask = (n) => (_2n << BigInt(n - 1)) - _1n;
    exports.bitMask = bitMask;
    var u8n = (data) => new Uint8Array(data);
    var u8fr = (arr) => Uint8Array.from(arr);
    function createHmacDrbg(hashLen, qByteLen, hmacFn) {
      if (typeof hashLen !== "number" || hashLen < 2)
        throw new Error("hashLen must be a number");
      if (typeof qByteLen !== "number" || qByteLen < 2)
        throw new Error("qByteLen must be a number");
      if (typeof hmacFn !== "function")
        throw new Error("hmacFn must be a function");
      let v = u8n(hashLen);
      let k = u8n(hashLen);
      let i = 0;
      const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
      };
      const h = (...b) => hmacFn(k, v, ...b);
      const reseed = (seed = u8n()) => {
        k = h(u8fr([0]), seed);
        v = h();
        if (seed.length === 0)
          return;
        k = h(u8fr([1]), seed);
        v = h();
      };
      const gen = () => {
        if (i++ >= 1e3)
          throw new Error("drbg: tried 1000 values");
        let len = 0;
        const out = [];
        while (len < qByteLen) {
          v = h();
          const sl = v.slice();
          out.push(sl);
          len += v.length;
        }
        return concatBytes2(...out);
      };
      const genUntil = (seed, pred) => {
        reset();
        reseed(seed);
        let res = void 0;
        while (!(res = pred(gen())))
          reseed();
        reset();
        return res;
      };
      return genUntil;
    }
    exports.createHmacDrbg = createHmacDrbg;
    var validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object2) => object2.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
    function validateObject(object2, validators, optValidators = {}) {
      const checkField = (fieldName, type2, isOptional) => {
        const checkVal = validatorFns[type2];
        if (typeof checkVal !== "function")
          throw new Error(`Invalid validator "${type2}", expected function`);
        const val = object2[fieldName];
        if (isOptional && val === void 0)
          return;
        if (!checkVal(val, object2)) {
          throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type2}`);
        }
      };
      for (const [fieldName, type2] of Object.entries(validators))
        checkField(fieldName, type2, false);
      for (const [fieldName, type2] of Object.entries(optValidators))
        checkField(fieldName, type2, true);
      return object2;
    }
    exports.validateObject = validateObject;
  }
});

// node_modules/@noble/curves/abstract/modular.js
var require_modular = __commonJS({
  "node_modules/@noble/curves/abstract/modular.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
    var utils_js_1 = require_utils2();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    var _5n = BigInt(5);
    var _8n = BigInt(8);
    var _9n = BigInt(9);
    var _16n = BigInt(16);
    function mod2(a, b) {
      const result = a % b;
      return result >= _0n ? result : b + result;
    }
    exports.mod = mod2;
    function pow(num, power, modulo) {
      if (modulo <= _0n || power < _0n)
        throw new Error("Expected power/modulo > 0");
      if (modulo === _1n)
        return _0n;
      let res = _1n;
      while (power > _0n) {
        if (power & _1n)
          res = res * num % modulo;
        num = num * num % modulo;
        power >>= _1n;
      }
      return res;
    }
    exports.pow = pow;
    function pow2(x, power, modulo) {
      let res = x;
      while (power-- > _0n) {
        res *= res;
        res %= modulo;
      }
      return res;
    }
    exports.pow2 = pow2;
    function invert(number2, modulo) {
      if (number2 === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
      }
      let a = mod2(number2, modulo);
      let b = modulo;
      let x = _0n, y = _1n, u = _1n, v = _0n;
      while (a !== _0n) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n)
        throw new Error("invert: does not exist");
      return mod2(x, modulo);
    }
    exports.invert = invert;
    function tonelliShanks(P) {
      const legendreC = (P - _1n) / _2n;
      let Q, S, Z;
      for (Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++)
        ;
      for (Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++)
        ;
      if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      const Q1div2 = (Q + _1n) / _2n;
      return function tonelliSlow(Fp, n) {
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
          throw new Error("Cannot find square root");
        let r = S;
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q);
        let x = Fp.pow(n, Q1div2);
        let b = Fp.pow(n, Q);
        while (!Fp.eql(b, Fp.ONE)) {
          if (Fp.eql(b, Fp.ZERO))
            return Fp.ZERO;
          let m = 1;
          for (let t2 = Fp.sqr(b); m < r; m++) {
            if (Fp.eql(t2, Fp.ONE))
              break;
            t2 = Fp.sqr(t2);
          }
          const ge = Fp.pow(g, _1n << BigInt(r - m - 1));
          g = Fp.sqr(ge);
          x = Fp.mul(x, ge);
          b = Fp.mul(b, g);
          r = m;
        }
        return x;
      };
    }
    exports.tonelliShanks = tonelliShanks;
    function FpSqrt(P) {
      if (P % _4n === _3n) {
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
          const root = Fp.pow(n, p1div4);
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
          const n2 = Fp.mul(n, _2n);
          const v = Fp.pow(n2, c1);
          const nv = Fp.mul(n, v);
          const i = Fp.mul(Fp.mul(nv, _2n), v);
          const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
          if (!Fp.eql(Fp.sqr(root), n))
            throw new Error("Cannot find square root");
          return root;
        };
      }
      if (P % _16n === _9n) {
      }
      return tonelliShanks(P);
    }
    exports.FpSqrt = FpSqrt;
    var isNegativeLE = (num, modulo) => (mod2(num, modulo) & _1n) === _1n;
    exports.isNegativeLE = isNegativeLE;
    var FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
    function validateField(field) {
      const initial = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
      };
      const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = "function";
        return map;
      }, initial);
      return (0, utils_js_1.validateObject)(field, opts);
    }
    exports.validateField = validateField;
    function FpPow(f, num, power) {
      if (power < _0n)
        throw new Error("Expected power > 0");
      if (power === _0n)
        return f.ONE;
      if (power === _1n)
        return num;
      let p = f.ONE;
      let d = num;
      while (power > _0n) {
        if (power & _1n)
          p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
      }
      return p;
    }
    exports.FpPow = FpPow;
    function FpInvertBatch(f, nums) {
      const tmp = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
          return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
      }, f.ONE);
      const inverted = f.inv(lastMultiplied);
      nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
          return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
      }, inverted);
      return tmp;
    }
    exports.FpInvertBatch = FpInvertBatch;
    function FpDiv(f, lhs, rhs) {
      return f.mul(lhs, typeof rhs === "bigint" ? invert(rhs, f.ORDER) : f.inv(rhs));
    }
    exports.FpDiv = FpDiv;
    function FpIsSquare(f) {
      const legendreConst = (f.ORDER - _1n) / _2n;
      return (x) => {
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
      };
    }
    exports.FpIsSquare = FpIsSquare;
    function nLength(n, nBitLength) {
      const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
      const nByteLength = Math.ceil(_nBitLength / 8);
      return {nBitLength: _nBitLength, nByteLength};
    }
    exports.nLength = nLength;
    function Field(ORDER, bitLen, isLE = false, redef = {}) {
      if (ORDER <= _0n)
        throw new Error(`Expected Fp ORDER > 0, got ${ORDER}`);
      const {nBitLength: BITS, nByteLength: BYTES} = nLength(ORDER, bitLen);
      if (BYTES > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
      const sqrtP = FpSqrt(ORDER);
      const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num) => mod2(num, ORDER),
        isValid: (num) => {
          if (typeof num !== "bigint")
            throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
          return _0n <= num && num < ORDER;
        },
        is0: (num) => num === _0n,
        isOdd: (num) => (num & _1n) === _1n,
        neg: (num) => mod2(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod2(num * num, ORDER),
        add: (lhs, rhs) => mod2(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod2(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod2(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod2(lhs * invert(rhs, ORDER), ORDER),
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        cmov: (a, b, c) => c ? b : a,
        toBytes: (num) => isLE ? (0, utils_js_1.numberToBytesLE)(num, BYTES) : (0, utils_js_1.numberToBytesBE)(num, BYTES),
        fromBytes: (bytes) => {
          if (bytes.length !== BYTES)
            throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
          return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
      });
      return Object.freeze(f);
    }
    exports.Field = Field;
    function FpSqrtOdd(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? root : Fp.neg(root);
    }
    exports.FpSqrtOdd = FpSqrtOdd;
    function FpSqrtEven(Fp, elm) {
      if (!Fp.isOdd)
        throw new Error(`Field doesn't have isOdd`);
      const root = Fp.sqrt(elm);
      return Fp.isOdd(root) ? Fp.neg(root) : root;
    }
    exports.FpSqrtEven = FpSqrtEven;
    function hashToPrivateScalar(hash, groupOrder, isLE = false) {
      hash = (0, utils_js_1.ensureBytes)("privateHash", hash);
      const hashLen = hash.length;
      const minLen = nLength(groupOrder).nByteLength + 8;
      if (minLen < 24 || hashLen < minLen || hashLen > 1024)
        throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
      const num = isLE ? (0, utils_js_1.bytesToNumberLE)(hash) : (0, utils_js_1.bytesToNumberBE)(hash);
      return mod2(num, groupOrder - _1n) + _1n;
    }
    exports.hashToPrivateScalar = hashToPrivateScalar;
  }
});

// node_modules/@noble/curves/abstract/curve.js
var require_curve = __commonJS({
  "node_modules/@noble/curves/abstract/curve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.validateBasic = exports.wNAF = void 0;
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    function wNAF(c, bits) {
      const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
      };
      const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1;
        const windowSize = 2 ** (W - 1);
        return {windows, windowSize};
      };
      return {
        constTimeNegate,
        unsafeLadder(elm, n) {
          let p = c.ZERO;
          let d = elm;
          while (n > _0n) {
            if (n & _1n)
              p = p.add(d);
            d = d.double();
            n >>= _1n;
          }
          return p;
        },
        precomputeWindow(elm, W) {
          const {windows, windowSize} = opts(W);
          const points = [];
          let p = elm;
          let base = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base = p;
            points.push(base);
            for (let i = 1; i < windowSize; i++) {
              base = base.add(p);
              points.push(base);
            }
            p = base.double();
          }
          return points;
        },
        wNAF(W, precomputes, n) {
          const {windows, windowSize} = opts(W);
          let p = c.ZERO;
          let f = c.BASE;
          const mask2 = BigInt(2 ** W - 1);
          const maxNumber = 2 ** W;
          const shiftBy = BigInt(W);
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask2);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window2 % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) {
              f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            } else {
              p = p.add(constTimeNegate(cond2, precomputes[offset2]));
            }
          }
          return {p, f};
        },
        wNAFCached(P, precomputesMap, n, transform) {
          const W = P._WINDOW_SIZE || 1;
          let comp = precomputesMap.get(P);
          if (!comp) {
            comp = this.precomputeWindow(P, W);
            if (W !== 1) {
              precomputesMap.set(P, transform(comp));
            }
          }
          return this.wNAF(W, comp, n);
        }
      };
    }
    exports.wNAF = wNAF;
    function validateBasic(curve) {
      (0, modular_js_1.validateField)(curve.Fp);
      (0, utils_js_1.validateObject)(curve, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
      }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
      });
      return Object.freeze({
        ...(0, modular_js_1.nLength)(curve.n, curve.nBitLength),
        ...curve,
        ...{p: curve.Fp.ORDER}
      });
    }
    exports.validateBasic = validateBasic;
  }
});

// node_modules/@noble/curves/abstract/weierstrass.js
var require_weierstrass = __commonJS({
  "node_modules/@noble/curves/abstract/weierstrass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mapToCurveSimpleSWU = exports.SWUFpSqrtRatio = exports.weierstrass = exports.weierstrassPoints = exports.DER = void 0;
    var mod2 = require_modular();
    var ut = require_utils2();
    var utils_js_1 = require_utils2();
    var curve_js_1 = require_curve();
    function validatePointOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        a: "field",
        b: "field"
      }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
      });
      const {endo, Fp, a} = opts;
      if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
          throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        }
        if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
          throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
        }
      }
      return Object.freeze({...opts});
    }
    var {bytesToNumberBE: b2n, hexToBytes: h2b} = ut;
    exports.DER = {
      Err: class DERErr extends Error {
        constructor(m = "") {
          super(m);
        }
      },
      _parseInt(data) {
        const {Err: E} = exports.DER;
        if (data.length < 2 || data[0] !== 2)
          throw new E("Invalid signature integer tag");
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
          throw new E("Invalid signature integer: wrong length");
        if (res[0] & 128)
          throw new E("Invalid signature integer: negative");
        if (res[0] === 0 && !(res[1] & 128))
          throw new E("Invalid signature integer: unnecessary leading zero");
        return {d: b2n(res), l: data.subarray(len + 2)};
      },
      toSig(hex) {
        const {Err: E} = exports.DER;
        const data = typeof hex === "string" ? h2b(hex) : hex;
        if (!(data instanceof Uint8Array))
          throw new Error("ui8a expected");
        let l = data.length;
        if (l < 2 || data[0] != 48)
          throw new E("Invalid signature tag");
        if (data[1] !== l - 2)
          throw new E("Invalid signature: incorrect length");
        const {d: r, l: sBytes} = exports.DER._parseInt(data.subarray(2));
        const {d: s, l: rBytesLeft} = exports.DER._parseInt(sBytes);
        if (rBytesLeft.length)
          throw new E("Invalid signature: left bytes after parsing");
        return {r, s};
      },
      hexFromSig(sig) {
        const slice = (s2) => Number.parseInt(s2[0], 16) & 8 ? "00" + s2 : s2;
        const h = (num) => {
          const hex = num.toString(16);
          return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
      }
    };
    var _0n = BigInt(0);
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var _3n = BigInt(3);
    var _4n = BigInt(4);
    function weierstrassPoints(opts) {
      const CURVE = validatePointOpts(opts);
      const {Fp} = CURVE;
      const toBytes = CURVE.toBytes || ((c, point, isCompressed) => {
        const a = point.toAffine();
        return ut.concatBytes(Uint8Array.from([4]), Fp.toBytes(a.x), Fp.toBytes(a.y));
      });
      const fromBytes = CURVE.fromBytes || ((bytes) => {
        const tail = bytes.subarray(1);
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return {x, y};
      });
      function weierstrassEquation(x) {
        const {a, b} = CURVE;
        const x2 = Fp.sqr(x);
        const x3 = Fp.mul(x2, x);
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b);
      }
      if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx)))
        throw new Error("bad generator point: equation left != right");
      function isWithinCurveOrder(num) {
        return typeof num === "bigint" && _0n < num && num < CURVE.n;
      }
      function assertGE(num) {
        if (!isWithinCurveOrder(num))
          throw new Error("Expected valid bigint: 0 < bigint < curve.n");
      }
      function normPrivateKeyToScalar(key) {
        const {allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n} = CURVE;
        if (lengths && typeof key !== "bigint") {
          if (key instanceof Uint8Array)
            key = ut.bytesToHex(key);
          if (typeof key !== "string" || !lengths.includes(key.length))
            throw new Error("Invalid key");
          key = key.padStart(nByteLength * 2, "0");
        }
        let num;
        try {
          num = typeof key === "bigint" ? key : ut.bytesToNumberBE((0, utils_js_1.ensureBytes)("private key", key, nByteLength));
        } catch (error) {
          throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
          num = mod2.mod(num, n);
        assertGE(num);
        return num;
      }
      const pointPrecomputes = new Map();
      function assertPrjPoint(other) {
        if (!(other instanceof Point2))
          throw new Error("ProjectivePoint expected");
      }
      class Point2 {
        constructor(px, py, pz) {
          this.px = px;
          this.py = py;
          this.pz = pz;
          if (px == null || !Fp.isValid(px))
            throw new Error("x required");
          if (py == null || !Fp.isValid(py))
            throw new Error("y required");
          if (pz == null || !Fp.isValid(pz))
            throw new Error("z required");
        }
        static fromAffine(p) {
          const {x, y} = p || {};
          if (!p || !Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("invalid affine point");
          if (p instanceof Point2)
            throw new Error("projective point not allowed");
          const is0 = (i) => Fp.eql(i, Fp.ZERO);
          if (is0(x) && is0(y))
            return Point2.ZERO;
          return new Point2(x, y, Fp.ONE);
        }
        get x() {
          return this.toAffine().x;
        }
        get y() {
          return this.toAffine().y;
        }
        static normalizeZ(points) {
          const toInv = Fp.invertBatch(points.map((p) => p.pz));
          return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
        }
        static fromHex(hex) {
          const P = Point2.fromAffine(fromBytes((0, utils_js_1.ensureBytes)("pointHex", hex)));
          P.assertValidity();
          return P;
        }
        static fromPrivateKey(privateKey) {
          return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        _setWindowSize(windowSize) {
          this._WINDOW_SIZE = windowSize;
          pointPrecomputes.delete(this);
        }
        assertValidity() {
          if (this.is0()) {
            if (CURVE.allowInfinityPoint)
              return;
            throw new Error("bad point: ZERO");
          }
          const {x, y} = this.toAffine();
          if (!Fp.isValid(x) || !Fp.isValid(y))
            throw new Error("bad point: x or y not FE");
          const left = Fp.sqr(y);
          const right = weierstrassEquation(x);
          if (!Fp.eql(left, right))
            throw new Error("bad point: equation left != right");
          if (!this.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        }
        hasEvenY() {
          const {y} = this.toAffine();
          if (Fp.isOdd)
            return !Fp.isOdd(y);
          throw new Error("Field doesn't support isOdd");
        }
        equals(other) {
          assertPrjPoint(other);
          const {px: X1, py: Y1, pz: Z1} = this;
          const {px: X2, py: Y2, pz: Z2} = other;
          const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
          const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
          return U1 && U2;
        }
        negate() {
          return new Point2(this.px, Fp.neg(this.py), this.pz);
        }
        double() {
          const {a, b} = CURVE;
          const b3 = Fp.mul(b, _3n);
          const {px: X1, py: Y1, pz: Z1} = this;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          let t0 = Fp.mul(X1, X1);
          let t1 = Fp.mul(Y1, Y1);
          let t2 = Fp.mul(Z1, Z1);
          let t3 = Fp.mul(X1, Y1);
          t3 = Fp.add(t3, t3);
          Z3 = Fp.mul(X1, Z1);
          Z3 = Fp.add(Z3, Z3);
          X3 = Fp.mul(a, Z3);
          Y3 = Fp.mul(b3, t2);
          Y3 = Fp.add(X3, Y3);
          X3 = Fp.sub(t1, Y3);
          Y3 = Fp.add(t1, Y3);
          Y3 = Fp.mul(X3, Y3);
          X3 = Fp.mul(t3, X3);
          Z3 = Fp.mul(b3, Z3);
          t2 = Fp.mul(a, t2);
          t3 = Fp.sub(t0, t2);
          t3 = Fp.mul(a, t3);
          t3 = Fp.add(t3, Z3);
          Z3 = Fp.add(t0, t0);
          t0 = Fp.add(Z3, t0);
          t0 = Fp.add(t0, t2);
          t0 = Fp.mul(t0, t3);
          Y3 = Fp.add(Y3, t0);
          t2 = Fp.mul(Y1, Z1);
          t2 = Fp.add(t2, t2);
          t0 = Fp.mul(t2, t3);
          X3 = Fp.sub(X3, t0);
          Z3 = Fp.mul(t2, t1);
          Z3 = Fp.add(Z3, Z3);
          Z3 = Fp.add(Z3, Z3);
          return new Point2(X3, Y3, Z3);
        }
        add(other) {
          assertPrjPoint(other);
          const {px: X1, py: Y1, pz: Z1} = this;
          const {px: X2, py: Y2, pz: Z2} = other;
          let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO;
          const a = CURVE.a;
          const b3 = Fp.mul(CURVE.b, _3n);
          let t0 = Fp.mul(X1, X2);
          let t1 = Fp.mul(Y1, Y2);
          let t2 = Fp.mul(Z1, Z2);
          let t3 = Fp.add(X1, Y1);
          let t4 = Fp.add(X2, Y2);
          t3 = Fp.mul(t3, t4);
          t4 = Fp.add(t0, t1);
          t3 = Fp.sub(t3, t4);
          t4 = Fp.add(X1, Z1);
          let t5 = Fp.add(X2, Z2);
          t4 = Fp.mul(t4, t5);
          t5 = Fp.add(t0, t2);
          t4 = Fp.sub(t4, t5);
          t5 = Fp.add(Y1, Z1);
          X3 = Fp.add(Y2, Z2);
          t5 = Fp.mul(t5, X3);
          X3 = Fp.add(t1, t2);
          t5 = Fp.sub(t5, X3);
          Z3 = Fp.mul(a, t4);
          X3 = Fp.mul(b3, t2);
          Z3 = Fp.add(X3, Z3);
          X3 = Fp.sub(t1, Z3);
          Z3 = Fp.add(t1, Z3);
          Y3 = Fp.mul(X3, Z3);
          t1 = Fp.add(t0, t0);
          t1 = Fp.add(t1, t0);
          t2 = Fp.mul(a, t2);
          t4 = Fp.mul(b3, t4);
          t1 = Fp.add(t1, t2);
          t2 = Fp.sub(t0, t2);
          t2 = Fp.mul(a, t2);
          t4 = Fp.add(t4, t2);
          t0 = Fp.mul(t1, t4);
          Y3 = Fp.add(Y3, t0);
          t0 = Fp.mul(t5, t4);
          X3 = Fp.mul(t3, X3);
          X3 = Fp.sub(X3, t0);
          t0 = Fp.mul(t3, t1);
          Z3 = Fp.mul(t5, Z3);
          Z3 = Fp.add(Z3, t0);
          return new Point2(X3, Y3, Z3);
        }
        subtract(other) {
          return this.add(other.negate());
        }
        is0() {
          return this.equals(Point2.ZERO);
        }
        wNAF(n) {
          return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
            const toInv = Fp.invertBatch(comp.map((p) => p.pz));
            return comp.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
          });
        }
        multiplyUnsafe(n) {
          const I = Point2.ZERO;
          if (n === _0n)
            return I;
          assertGE(n);
          if (n === _1n)
            return this;
          const {endo} = CURVE;
          if (!endo)
            return wnaf.unsafeLadder(this, n);
          let {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
          let k1p = I;
          let k2p = I;
          let d = this;
          while (k1 > _0n || k2 > _0n) {
            if (k1 & _1n)
              k1p = k1p.add(d);
            if (k2 & _1n)
              k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
          }
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new Point2(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
          return k1p.add(k2p);
        }
        multiply(scalar) {
          assertGE(scalar);
          let n = scalar;
          let point, fake;
          const {endo} = CURVE;
          if (endo) {
            const {k1neg, k1, k2neg, k2} = endo.splitScalar(n);
            let {p: k1p, f: f1p} = this.wNAF(k1);
            let {p: k2p, f: f2p} = this.wNAF(k2);
            k1p = wnaf.constTimeNegate(k1neg, k1p);
            k2p = wnaf.constTimeNegate(k2neg, k2p);
            k2p = new Point2(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
          } else {
            const {p, f} = this.wNAF(n);
            point = p;
            fake = f;
          }
          return Point2.normalizeZ([point, fake])[0];
        }
        multiplyAndAddUnsafe(Q, a, b) {
          const G = Point2.BASE;
          const mul = (P, a2) => a2 === _0n || a2 === _1n || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
          const sum = mul(this, a).add(mul(Q, b));
          return sum.is0() ? void 0 : sum;
        }
        toAffine(iz) {
          const {px: x, py: y, pz: z} = this;
          const is0 = this.is0();
          if (iz == null)
            iz = is0 ? Fp.ONE : Fp.inv(z);
          const ax = Fp.mul(x, iz);
          const ay = Fp.mul(y, iz);
          const zz = Fp.mul(z, iz);
          if (is0)
            return {x: Fp.ZERO, y: Fp.ZERO};
          if (!Fp.eql(zz, Fp.ONE))
            throw new Error("invZ was invalid");
          return {x: ax, y: ay};
        }
        isTorsionFree() {
          const {h: cofactor, isTorsionFree} = CURVE;
          if (cofactor === _1n)
            return true;
          if (isTorsionFree)
            return isTorsionFree(Point2, this);
          throw new Error("isTorsionFree() has not been declared for the elliptic curve");
        }
        clearCofactor() {
          const {h: cofactor, clearCofactor} = CURVE;
          if (cofactor === _1n)
            return this;
          if (clearCofactor)
            return clearCofactor(Point2, this);
          return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
          this.assertValidity();
          return toBytes(Point2, this, isCompressed);
        }
        toHex(isCompressed = true) {
          return ut.bytesToHex(this.toRawBytes(isCompressed));
        }
      }
      Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp.ONE);
      Point2.ZERO = new Point2(Fp.ZERO, Fp.ONE, Fp.ZERO);
      const _bits = CURVE.nBitLength;
      const wnaf = (0, curve_js_1.wNAF)(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
      return {
        CURVE,
        ProjectivePoint: Point2,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
      };
    }
    exports.weierstrassPoints = weierstrassPoints;
    function validateOpts(curve) {
      const opts = (0, curve_js_1.validateBasic)(curve);
      ut.validateObject(opts, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
      }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
      });
      return Object.freeze({lowS: true, ...opts});
    }
    function weierstrass(curveDef) {
      const CURVE = validateOpts(curveDef);
      const {Fp, n: CURVE_ORDER} = CURVE;
      const compressedLen = Fp.BYTES + 1;
      const uncompressedLen = 2 * Fp.BYTES + 1;
      function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER;
      }
      function modN(a) {
        return mod2.mod(a, CURVE_ORDER);
      }
      function invN(a) {
        return mod2.invert(a, CURVE_ORDER);
      }
      const {ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder} = weierstrassPoints({
        ...CURVE,
        toBytes(c, point, isCompressed) {
          const a = point.toAffine();
          const x = Fp.toBytes(a.x);
          const cat = ut.concatBytes;
          if (isCompressed) {
            return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
          } else {
            return cat(Uint8Array.from([4]), x, Fp.toBytes(a.y));
          }
        },
        fromBytes(bytes) {
          const len = bytes.length;
          const head = bytes[0];
          const tail = bytes.subarray(1);
          if (len === compressedLen && (head === 2 || head === 3)) {
            const x = ut.bytesToNumberBE(tail);
            if (!isValidFieldElement(x))
              throw new Error("Point is not on curve");
            const y2 = weierstrassEquation(x);
            let y = Fp.sqrt(y2);
            const isYOdd = (y & _1n) === _1n;
            const isHeadOdd = (head & 1) === 1;
            if (isHeadOdd !== isYOdd)
              y = Fp.neg(y);
            return {x, y};
          } else if (len === uncompressedLen && head === 4) {
            const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
            const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
            return {x, y};
          } else {
            throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
          }
        }
      });
      const numToNByteStr = (num) => ut.bytesToHex(ut.numberToBytesBE(num, CURVE.nByteLength));
      function isBiggerThanHalfOrder(number2) {
        const HALF = CURVE_ORDER >> _1n;
        return number2 > HALF;
      }
      function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
      }
      const slcNum = (b, from, to) => ut.bytesToNumberBE(b.slice(from, to));
      class Signature {
        constructor(r, s, recovery) {
          this.r = r;
          this.s = s;
          this.recovery = recovery;
          this.assertValidity();
        }
        static fromCompact(hex) {
          const l = CURVE.nByteLength;
          hex = (0, utils_js_1.ensureBytes)("compactSignature", hex, l * 2);
          return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        static fromDER(hex) {
          const {r, s} = exports.DER.toSig((0, utils_js_1.ensureBytes)("DER", hex));
          return new Signature(r, s);
        }
        assertValidity() {
          if (!isWithinCurveOrder(this.r))
            throw new Error("r must be 0 < r < CURVE.n");
          if (!isWithinCurveOrder(this.s))
            throw new Error("s must be 0 < s < CURVE.n");
        }
        addRecoveryBit(recovery) {
          return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
          const {r, s, recovery: rec} = this;
          const h = bits2int_modN((0, utils_js_1.ensureBytes)("msgHash", msgHash));
          if (rec == null || ![0, 1, 2, 3].includes(rec))
            throw new Error("recovery id invalid");
          const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
          if (radj >= Fp.ORDER)
            throw new Error("recovery id 2 or 3 invalid");
          const prefix = (rec & 1) === 0 ? "02" : "03";
          const R = Point2.fromHex(prefix + numToNByteStr(radj));
          const ir = invN(radj);
          const u1 = modN(-h * ir);
          const u2 = modN(s * ir);
          const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
          if (!Q)
            throw new Error("point at infinify");
          Q.assertValidity();
          return Q;
        }
        hasHighS() {
          return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
          return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        toDERRawBytes() {
          return ut.hexToBytes(this.toDERHex());
        }
        toDERHex() {
          return exports.DER.hexFromSig({r: this.r, s: this.s});
        }
        toCompactRawBytes() {
          return ut.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
          return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
      }
      const utils = {
        isValidPrivateKey(privateKey) {
          try {
            normPrivateKeyToScalar(privateKey);
            return true;
          } catch (error) {
            return false;
          }
        },
        normPrivateKeyToScalar,
        randomPrivateKey: () => {
          const rand = CURVE.randomBytes(Fp.BYTES + 8);
          const num = mod2.hashToPrivateScalar(rand, CURVE_ORDER);
          return ut.numberToBytesBE(num, CURVE.nByteLength);
        },
        precompute(windowSize = 8, point = Point2.BASE) {
          point._setWindowSize(windowSize);
          point.multiply(BigInt(3));
          return point;
        }
      };
      function getPublicKey(privateKey, isCompressed = true) {
        return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
      }
      function isProbPub(item) {
        const arr = item instanceof Uint8Array;
        const str = typeof item === "string";
        const len = (arr || str) && item.length;
        if (arr)
          return len === compressedLen || len === uncompressedLen;
        if (str)
          return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point2)
          return true;
        return false;
      }
      function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
          throw new Error("first arg must be private key");
        if (!isProbPub(publicB))
          throw new Error("second arg must be public key");
        const b = Point2.fromHex(publicB);
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
      }
      const bits2int = CURVE.bits2int || function(bytes) {
        const num = ut.bytesToNumberBE(bytes);
        const delta = bytes.length * 8 - CURVE.nBitLength;
        return delta > 0 ? num >> BigInt(delta) : num;
      };
      const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes));
      };
      const ORDER_MASK = ut.bitMask(CURVE.nBitLength);
      function int2octets(num) {
        if (typeof num !== "bigint")
          throw new Error("bigint expected");
        if (!(_0n <= num && num < ORDER_MASK))
          throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        return ut.numberToBytesBE(num, CURVE.nByteLength);
      }
      function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (["recovered", "canonical"].some((k) => k in opts))
          throw new Error("sign() legacy options not supported");
        const {hash, randomBytes} = CURVE;
        let {lowS, prehash, extraEntropy: ent} = opts;
        if (lowS == null)
          lowS = true;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        if (prehash)
          msgHash = (0, utils_js_1.ensureBytes)("prehashed msgHash", hash(msgHash));
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey);
        const seedArgs = [int2octets(d), int2octets(h1int)];
        if (ent != null) {
          const e = ent === true ? randomBytes(Fp.BYTES) : ent;
          seedArgs.push((0, utils_js_1.ensureBytes)("extraEntropy", e, Fp.BYTES));
        }
        const seed = ut.concatBytes(...seedArgs);
        const m = h1int;
        function k2sig(kBytes) {
          const k = bits2int(kBytes);
          if (!isWithinCurveOrder(k))
            return;
          const ik = invN(k);
          const q = Point2.BASE.multiply(k).toAffine();
          const r = modN(q.x);
          if (r === _0n)
            return;
          const s = modN(ik * modN(m + r * d));
          if (s === _0n)
            return;
          let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n);
          let normS = s;
          if (lowS && isBiggerThanHalfOrder(s)) {
            normS = normalizeS(s);
            recovery ^= 1;
          }
          return new Signature(r, normS, recovery);
        }
        return {seed, k2sig};
      }
      const defaultSigOpts = {lowS: CURVE.lowS, prehash: false};
      const defaultVerOpts = {lowS: CURVE.lowS, prehash: false};
      function sign2(msgHash, privKey, opts = defaultSigOpts) {
        const {seed, k2sig} = prepSig(msgHash, privKey, opts);
        const drbg = ut.createHmacDrbg(CURVE.hash.outputLen, CURVE.nByteLength, CURVE.hmac);
        return drbg(seed, k2sig);
      }
      Point2.BASE._setWindowSize(8);
      function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = (0, utils_js_1.ensureBytes)("msgHash", msgHash);
        publicKey = (0, utils_js_1.ensureBytes)("publicKey", publicKey);
        if ("strict" in opts)
          throw new Error("options.strict was renamed to lowS");
        const {lowS, prehash} = opts;
        let _sig = void 0;
        let P;
        try {
          if (typeof sg === "string" || sg instanceof Uint8Array) {
            try {
              _sig = Signature.fromDER(sg);
            } catch (derError) {
              if (!(derError instanceof exports.DER.Err))
                throw derError;
              _sig = Signature.fromCompact(sg);
            }
          } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
            const {r: r2, s: s2} = sg;
            _sig = new Signature(r2, s2);
          } else {
            throw new Error("PARSE");
          }
          P = Point2.fromHex(publicKey);
        } catch (error) {
          if (error.message === "PARSE")
            throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
          return false;
        }
        if (lowS && _sig.hasHighS())
          return false;
        if (prehash)
          msgHash = CURVE.hash(msgHash);
        const {r, s} = _sig;
        const h = bits2int_modN(msgHash);
        const is2 = invN(s);
        const u1 = modN(h * is2);
        const u2 = modN(r * is2);
        const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine();
        if (!R)
          return false;
        const v = modN(R.x);
        return v === r;
      }
      return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign: sign2,
        verify,
        ProjectivePoint: Point2,
        Signature,
        utils
      };
    }
    exports.weierstrass = weierstrass;
    function SWUFpSqrtRatio(Fp, Z) {
      const q = Fp.ORDER;
      let l = _0n;
      for (let o = q - _1n; o % _2n === _0n; o /= _2n)
        l += _1n;
      const c1 = l;
      const c2 = (q - _1n) / _2n ** c1;
      const c3 = (c2 - _1n) / _2n;
      const c4 = _2n ** c1 - _1n;
      const c5 = _2n ** (c1 - _1n);
      const c6 = Fp.pow(Z, c2);
      const c7 = Fp.pow(Z, (c2 + _1n) / _2n);
      let sqrtRatio = (u, v) => {
        let tv1 = c6;
        let tv2 = Fp.pow(v, c4);
        let tv3 = Fp.sqr(tv2);
        tv3 = Fp.mul(tv3, v);
        let tv5 = Fp.mul(u, tv3);
        tv5 = Fp.pow(tv5, c3);
        tv5 = Fp.mul(tv5, tv2);
        tv2 = Fp.mul(tv5, v);
        tv3 = Fp.mul(tv5, u);
        let tv4 = Fp.mul(tv3, tv2);
        tv5 = Fp.pow(tv4, c5);
        let isQR = Fp.eql(tv5, Fp.ONE);
        tv2 = Fp.mul(tv3, c7);
        tv5 = Fp.mul(tv4, tv1);
        tv3 = Fp.cmov(tv2, tv3, isQR);
        tv4 = Fp.cmov(tv5, tv4, isQR);
        for (let i = c1; i > _1n; i--) {
          let tv52 = _2n ** (i - _2n);
          let tvv5 = Fp.pow(tv4, tv52);
          const e1 = Fp.eql(tvv5, Fp.ONE);
          tv2 = Fp.mul(tv3, tv1);
          tv1 = Fp.mul(tv1, tv1);
          tvv5 = Fp.mul(tv4, tv1);
          tv3 = Fp.cmov(tv2, tv3, e1);
          tv4 = Fp.cmov(tvv5, tv4, e1);
        }
        return {isValid: isQR, value: tv3};
      };
      if (Fp.ORDER % _4n === _3n) {
        const c12 = (Fp.ORDER - _3n) / _4n;
        const c22 = Fp.sqrt(Fp.neg(Z));
        sqrtRatio = (u, v) => {
          let tv1 = Fp.sqr(v);
          const tv2 = Fp.mul(u, v);
          tv1 = Fp.mul(tv1, tv2);
          let y1 = Fp.pow(tv1, c12);
          y1 = Fp.mul(y1, tv2);
          const y2 = Fp.mul(y1, c22);
          const tv3 = Fp.mul(Fp.sqr(y1), v);
          const isQR = Fp.eql(tv3, u);
          let y = Fp.cmov(y2, y1, isQR);
          return {isValid: isQR, value: y};
        };
      }
      return sqrtRatio;
    }
    exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
    function mapToCurveSimpleSWU(Fp, opts) {
      mod2.validateField(Fp);
      if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
      const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
      if (!Fp.isOdd)
        throw new Error("Fp.isOdd is not implemented!");
      return (u) => {
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u);
        tv1 = Fp.mul(tv1, opts.Z);
        tv2 = Fp.sqr(tv1);
        tv2 = Fp.add(tv2, tv1);
        tv3 = Fp.add(tv2, Fp.ONE);
        tv3 = Fp.mul(tv3, opts.B);
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
        tv4 = Fp.mul(tv4, opts.A);
        tv2 = Fp.sqr(tv3);
        tv6 = Fp.sqr(tv4);
        tv5 = Fp.mul(tv6, opts.A);
        tv2 = Fp.add(tv2, tv5);
        tv2 = Fp.mul(tv2, tv3);
        tv6 = Fp.mul(tv6, tv4);
        tv5 = Fp.mul(tv6, opts.B);
        tv2 = Fp.add(tv2, tv5);
        x = Fp.mul(tv1, tv3);
        const {isValid, value} = sqrtRatio(tv2, tv6);
        y = Fp.mul(tv1, u);
        y = Fp.mul(y, value);
        x = Fp.cmov(x, tv3, isValid);
        y = Fp.cmov(y, value, isValid);
        const e1 = Fp.isOdd(u) === Fp.isOdd(y);
        y = Fp.cmov(Fp.neg(y), y, e1);
        x = Fp.div(x, tv4);
        return {x, y};
      };
    }
    exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;
  }
});

// node_modules/@noble/curves/abstract/hash-to-curve.js
var require_hash_to_curve = __commonJS({
  "node_modules/@noble/curves/abstract/hash-to-curve.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createHasher = exports.isogenyMap = exports.hash_to_field = exports.expand_message_xof = exports.expand_message_xmd = void 0;
    var modular_js_1 = require_modular();
    var utils_js_1 = require_utils2();
    function validateDST(dst) {
      if (dst instanceof Uint8Array)
        return dst;
      if (typeof dst === "string")
        return (0, utils_js_1.utf8ToBytes)(dst);
      throw new Error("DST must be Uint8Array or string");
    }
    var os2ip = utils_js_1.bytesToNumberBE;
    function i2osp(value, length) {
      if (value < 0 || value >= 1 << 8 * length) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
      }
      const res = Array.from({length}).fill(0);
      for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 255;
        value >>>= 8;
      }
      return new Uint8Array(res);
    }
    function strxor(a, b) {
      const arr = new Uint8Array(a.length);
      for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] ^ b[i];
      }
      return arr;
    }
    function isBytes(item) {
      if (!(item instanceof Uint8Array))
        throw new Error("Uint8Array expected");
    }
    function isNum(item) {
      if (!Number.isSafeInteger(item))
        throw new Error("number expected");
    }
    function expand_message_xmd(msg, DST, lenInBytes, H) {
      isBytes(msg);
      isBytes(DST);
      isNum(lenInBytes);
      if (DST.length > 255)
        DST = H((0, utils_js_1.concatBytes)((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-"), DST));
      const {outputLen: b_in_bytes, blockLen: r_in_bytes} = H;
      const ell = Math.ceil(lenInBytes / b_in_bytes);
      if (ell > 255)
        throw new Error("Invalid xmd length");
      const DST_prime = (0, utils_js_1.concatBytes)(DST, i2osp(DST.length, 1));
      const Z_pad = i2osp(0, r_in_bytes);
      const l_i_b_str = i2osp(lenInBytes, 2);
      const b = new Array(ell);
      const b_0 = H((0, utils_js_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
      b[0] = H((0, utils_js_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
      for (let i = 1; i <= ell; i++) {
        const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
        b[i] = H((0, utils_js_1.concatBytes)(...args));
      }
      const pseudo_random_bytes = (0, utils_js_1.concatBytes)(...b);
      return pseudo_random_bytes.slice(0, lenInBytes);
    }
    exports.expand_message_xmd = expand_message_xmd;
    function expand_message_xof(msg, DST, lenInBytes, k, H) {
      isBytes(msg);
      isBytes(DST);
      isNum(lenInBytes);
      if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({dkLen}).update((0, utils_js_1.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(DST).digest();
      }
      if (lenInBytes > 65535 || DST.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
      return H.create({dkLen: lenInBytes}).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
    }
    exports.expand_message_xof = expand_message_xof;
    function hash_to_field(msg, count, options) {
      (0, utils_js_1.validateObject)(options, {
        DST: "string",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
      });
      const {p, k, m, hash, expand, DST: _DST} = options;
      isBytes(msg);
      isNum(count);
      const DST = validateDST(_DST);
      const log2p = p.toString(2).length;
      const L = Math.ceil((log2p + k) / 8);
      const len_in_bytes = count * m * L;
      let prb;
      if (expand === "xmd") {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
      } else if (expand === "xof") {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
      } else if (expand === "_internal_pass") {
        prb = msg;
      } else {
        throw new Error('expand must be "xmd" or "xof"');
      }
      const u = new Array(count);
      for (let i = 0; i < count; i++) {
        const e = new Array(m);
        for (let j = 0; j < m; j++) {
          const elm_offset = L * (j + i * m);
          const tv = prb.subarray(elm_offset, elm_offset + L);
          e[j] = (0, modular_js_1.mod)(os2ip(tv), p);
        }
        u[i] = e;
      }
      return u;
    }
    exports.hash_to_field = hash_to_field;
    function isogenyMap(field, map) {
      const COEFF = map.map((i) => Array.from(i).reverse());
      return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen);
        y = field.mul(y, field.div(yNum, yDen));
        return {x, y};
      };
    }
    exports.isogenyMap = isogenyMap;
    function createHasher(Point2, mapToCurve, def) {
      if (typeof mapToCurve !== "function")
        throw new Error("mapToCurve() must be defined");
      return {
        hashToCurve(msg, options) {
          const u = hash_to_field(msg, 2, {...def, DST: def.DST, ...options});
          const u0 = Point2.fromAffine(mapToCurve(u[0]));
          const u1 = Point2.fromAffine(mapToCurve(u[1]));
          const P = u0.add(u1).clearCofactor();
          P.assertValidity();
          return P;
        },
        encodeToCurve(msg, options) {
          const u = hash_to_field(msg, 1, {...def, DST: def.encodeDST, ...options});
          const P = Point2.fromAffine(mapToCurve(u[0])).clearCofactor();
          P.assertValidity();
          return P;
        }
      };
    }
    exports.createHasher = createHasher;
  }
});

// node_modules/@noble/hashes/hmac.js
var require_hmac = __commonJS({
  "node_modules/@noble/hashes/hmac.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.hmac = void 0;
    var _assert_js_1 = require_assert();
    var utils_js_1 = require_utils();
    var HMAC = class extends utils_js_1.Hash {
      constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.hash(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function")
          throw new TypeError("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54;
        this.iHash.update(pad);
        this.oHash = hash.create();
        for (let i = 0; i < pad.length; i++)
          pad[i] ^= 54 ^ 92;
        this.oHash.update(pad);
        pad.fill(0);
      }
      update(buf) {
        _assert_js_1.default.exists(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to) {
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash, iHash, finished, destroyed, blockLen, outputLen} = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    var hmac3 = (hash, key, message) => new HMAC(hash, key).update(message).digest();
    exports.hmac = hmac3;
    exports.hmac.create = (hash, key) => new HMAC(hash, key);
  }
});

// node_modules/@noble/curves/_shortw_utils.js
var require_shortw_utils = __commonJS({
  "node_modules/@noble/curves/_shortw_utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createCurve = exports.getHash = void 0;
    var hmac_1 = require_hmac();
    var utils_1 = require_utils();
    var weierstrass_js_1 = require_weierstrass();
    function getHash(hash) {
      return {
        hash,
        hmac: (key, ...msgs) => (0, hmac_1.hmac)(hash, key, (0, utils_1.concatBytes)(...msgs)),
        randomBytes: utils_1.randomBytes
      };
    }
    exports.getHash = getHash;
    function createCurve(curveDef, defHash) {
      const create3 = (hash) => (0, weierstrass_js_1.weierstrass)({...curveDef, ...getHash(hash)});
      return Object.freeze({...create3(defHash), create: create3});
    }
    exports.createCurve = createCurve;
  }
});

// node_modules/@noble/curves/secp256k1.js
var require_secp256k1 = __commonJS({
  "node_modules/@noble/curves/secp256k1.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.encodeToCurve = exports.hashToCurve = exports.schnorr = exports.secp256k1 = void 0;
    var sha256_1 = require_sha256();
    var utils_1 = require_utils();
    var modular_js_1 = require_modular();
    var weierstrass_js_1 = require_weierstrass();
    var utils_js_1 = require_utils2();
    var htf = require_hash_to_curve();
    var _shortw_utils_js_1 = require_shortw_utils();
    var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
    var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
    var _1n = BigInt(1);
    var _2n = BigInt(2);
    var divNearest = (a, b) => (a + b / _2n) / b;
    function sqrtMod(y) {
      const P = secp256k1P;
      const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
      const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
      const b2 = y * y * y % P;
      const b3 = b2 * b2 * y % P;
      const b6 = (0, modular_js_1.pow2)(b3, _3n, P) * b3 % P;
      const b9 = (0, modular_js_1.pow2)(b6, _3n, P) * b3 % P;
      const b11 = (0, modular_js_1.pow2)(b9, _2n, P) * b2 % P;
      const b22 = (0, modular_js_1.pow2)(b11, _11n, P) * b11 % P;
      const b44 = (0, modular_js_1.pow2)(b22, _22n, P) * b22 % P;
      const b88 = (0, modular_js_1.pow2)(b44, _44n, P) * b44 % P;
      const b176 = (0, modular_js_1.pow2)(b88, _88n, P) * b88 % P;
      const b220 = (0, modular_js_1.pow2)(b176, _44n, P) * b44 % P;
      const b223 = (0, modular_js_1.pow2)(b220, _3n, P) * b3 % P;
      const t1 = (0, modular_js_1.pow2)(b223, _23n, P) * b22 % P;
      const t2 = (0, modular_js_1.pow2)(t1, _6n, P) * b2 % P;
      const root = (0, modular_js_1.pow2)(t2, _2n, P);
      if (!Fp.eql(Fp.sqr(root), y))
        throw new Error("Cannot find square root");
      return root;
    }
    var Fp = (0, modular_js_1.Field)(secp256k1P, void 0, void 0, {sqrt: sqrtMod});
    exports.secp256k1 = (0, _shortw_utils_js_1.createCurve)({
      a: BigInt(0),
      b: BigInt(7),
      Fp,
      n: secp256k1N,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      lowS: true,
      endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k) => {
          const n = secp256k1N;
          const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
          const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
          const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
          const b2 = a1;
          const POW_2_128 = BigInt("0x100000000000000000000000000000000");
          const c1 = divNearest(b2 * k, n);
          const c2 = divNearest(-b1 * k, n);
          let k1 = (0, modular_js_1.mod)(k - c1 * a1 - c2 * a2, n);
          let k2 = (0, modular_js_1.mod)(-c1 * b1 - c2 * b2, n);
          const k1neg = k1 > POW_2_128;
          const k2neg = k2 > POW_2_128;
          if (k1neg)
            k1 = n - k1;
          if (k2neg)
            k2 = n - k2;
          if (k1 > POW_2_128 || k2 > POW_2_128) {
            throw new Error("splitScalar: Endomorphism failed, k=" + k);
          }
          return {k1neg, k1, k2neg, k2};
        }
      }
    }, sha256_1.sha256);
    var _0n = BigInt(0);
    var fe = (x) => typeof x === "bigint" && _0n < x && x < secp256k1P;
    var ge = (x) => typeof x === "bigint" && _0n < x && x < secp256k1N;
    var TAGGED_HASH_PREFIXES = {};
    function taggedHash(tag, ...messages) {
      let tagP = TAGGED_HASH_PREFIXES[tag];
      if (tagP === void 0) {
        const tagH = (0, sha256_1.sha256)(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = (0, utils_js_1.concatBytes)(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
      }
      return (0, sha256_1.sha256)((0, utils_js_1.concatBytes)(tagP, ...messages));
    }
    var pointToBytes = (point) => point.toRawBytes(true).slice(1);
    var numTo32b = (n) => (0, utils_js_1.numberToBytesBE)(n, 32);
    var modP = (x) => (0, modular_js_1.mod)(x, secp256k1P);
    var modN = (x) => (0, modular_js_1.mod)(x, secp256k1N);
    var Point2 = exports.secp256k1.ProjectivePoint;
    var GmulAdd = (Q, a, b) => Point2.BASE.multiplyAndAddUnsafe(Q, a, b);
    function schnorrGetExtPubKey(priv) {
      let d_ = exports.secp256k1.utils.normPrivateKeyToScalar(priv);
      let p = Point2.fromPrivateKey(d_);
      const scalar = p.hasEvenY() ? d_ : modN(-d_);
      return {scalar, bytes: pointToBytes(p)};
    }
    function lift_x(x) {
      if (!fe(x))
        throw new Error("bad x: need 0 < x < p");
      const xx = modP(x * x);
      const c = modP(xx * x + BigInt(7));
      let y = sqrtMod(c);
      if (y % _2n !== _0n)
        y = modP(-y);
      const p = new Point2(x, y, _1n);
      p.assertValidity();
      return p;
    }
    function challenge(...args) {
      return modN((0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/challenge", ...args)));
    }
    function schnorrGetPublicKey(privateKey) {
      return schnorrGetExtPubKey(privateKey).bytes;
    }
    function schnorrSign(message, privateKey, auxRand = (0, utils_1.randomBytes)(32)) {
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const {bytes: px, scalar: d} = schnorrGetExtPubKey(privateKey);
      const a = (0, utils_js_1.ensureBytes)("auxRand", auxRand, 32);
      const t = numTo32b(d ^ (0, utils_js_1.bytesToNumberBE)(taggedHash("BIP0340/aux", a)));
      const rand = taggedHash("BIP0340/nonce", t, px, m);
      const k_ = modN((0, utils_js_1.bytesToNumberBE)(rand));
      if (k_ === _0n)
        throw new Error("sign failed: k is zero");
      const {bytes: rx, scalar: k} = schnorrGetExtPubKey(k_);
      const e = challenge(rx, px, m);
      const sig = new Uint8Array(64);
      sig.set(rx, 0);
      sig.set(numTo32b(modN(k + e * d)), 32);
      if (!schnorrVerify(sig, m, px))
        throw new Error("sign: Invalid signature produced");
      return sig;
    }
    function schnorrVerify(signature, message, publicKey) {
      const sig = (0, utils_js_1.ensureBytes)("signature", signature, 64);
      const m = (0, utils_js_1.ensureBytes)("message", message);
      const pub = (0, utils_js_1.ensureBytes)("publicKey", publicKey, 32);
      try {
        const P = lift_x((0, utils_js_1.bytesToNumberBE)(pub));
        const r = (0, utils_js_1.bytesToNumberBE)(sig.subarray(0, 32));
        if (!fe(r))
          return false;
        const s = (0, utils_js_1.bytesToNumberBE)(sig.subarray(32, 64));
        if (!ge(s))
          return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m);
        const R = GmulAdd(P, s, modN(-e));
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
          return false;
        return true;
      } catch (error) {
        return false;
      }
    }
    exports.schnorr = {
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: exports.secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE: utils_js_1.numberToBytesBE,
        bytesToNumberBE: utils_js_1.bytesToNumberBE,
        taggedHash,
        mod: modular_js_1.mod
      }
    };
    var isoMap = htf.isogenyMap(Fp, [
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ],
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ]
    ].map((i) => i.map((j) => BigInt(j))));
    var mapSWU = (0, weierstrass_js_1.mapToCurveSimpleSWU)(Fp, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fp.create(BigInt("-11"))
    });
    _a = htf.createHasher(exports.secp256k1.ProjectivePoint, (scalars) => {
      const {x, y} = mapSWU(Fp.create(scalars[0]));
      return isoMap(x, y);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fp.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha256_1.sha256
    }), exports.hashToCurve = _a.hashToCurve, exports.encodeToCurve = _a.encodeToCurve;
  }
});

// node_modules/@noble/hashes/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/@noble/hashes/pbkdf2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.pbkdf2Async = exports.pbkdf2 = void 0;
    var _assert_js_1 = require_assert();
    var hmac_js_1 = require_hmac();
    var utils_js_1 = require_utils();
    function pbkdf2Init(hash, _password, _salt, _opts) {
      _assert_js_1.default.hash(hash);
      const opts = (0, utils_js_1.checkOpts)({dkLen: 32, asyncTick: 10}, _opts);
      const {c, dkLen, asyncTick} = opts;
      _assert_js_1.default.number(c);
      _assert_js_1.default.number(dkLen);
      _assert_js_1.default.number(asyncTick);
      if (c < 1)
        throw new Error("PBKDF2: iterations (c) should be >= 1");
      const password = (0, utils_js_1.toBytes)(_password);
      const salt = (0, utils_js_1.toBytes)(_salt);
      const DK = new Uint8Array(dkLen);
      const PRF = hmac_js_1.hmac.create(hash, password);
      const PRFSalt = PRF._cloneInto().update(salt);
      return {c, dkLen, asyncTick, DK, PRF, PRFSalt};
    }
    function pbkdf2Output(PRF, PRFSalt, DK, prfW, u) {
      PRF.destroy();
      PRFSalt.destroy();
      if (prfW)
        prfW.destroy();
      u.fill(0);
      return DK;
    }
    function pbkdf2(hash, password, salt, opts) {
      const {c, dkLen, DK, PRF, PRFSalt} = pbkdf2Init(hash, password, salt, opts);
      let prfW;
      const arr = new Uint8Array(4);
      const view = (0, utils_js_1.createView)(arr);
      const u = new Uint8Array(PRF.outputLen);
      for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for (let ui = 1; ui < c; ui++) {
          PRF._cloneInto(prfW).update(u).digestInto(u);
          for (let i = 0; i < Ti.length; i++)
            Ti[i] ^= u[i];
        }
      }
      return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
    }
    exports.pbkdf2 = pbkdf2;
    async function pbkdf2Async(hash, password, salt, opts) {
      const {c, dkLen, asyncTick, DK, PRF, PRFSalt} = pbkdf2Init(hash, password, salt, opts);
      let prfW;
      const arr = new Uint8Array(4);
      const view = (0, utils_js_1.createView)(arr);
      const u = new Uint8Array(PRF.outputLen);
      for (let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen) {
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        await (0, utils_js_1.asyncLoop)(c - 1, asyncTick, (i) => {
          PRF._cloneInto(prfW).update(u).digestInto(u);
          for (let i2 = 0; i2 < Ti.length; i2++)
            Ti[i2] ^= u[i2];
        });
      }
      return pbkdf2Output(PRF, PRFSalt, DK, prfW, u);
    }
    exports.pbkdf2Async = pbkdf2Async;
  }
});

// node_modules/@noble/hashes/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@noble/hashes/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
    var _sha2_js_1 = require_sha2();
    var _u64_js_1 = require_u64();
    var utils_js_1 = require_utils();
    var [SHA512_Kh, SHA512_Kl] = _u64_js_1.default.split([
      "0x428a2f98d728ae22",
      "0x7137449123ef65cd",
      "0xb5c0fbcfec4d3b2f",
      "0xe9b5dba58189dbbc",
      "0x3956c25bf348b538",
      "0x59f111f1b605d019",
      "0x923f82a4af194f9b",
      "0xab1c5ed5da6d8118",
      "0xd807aa98a3030242",
      "0x12835b0145706fbe",
      "0x243185be4ee4b28c",
      "0x550c7dc3d5ffb4e2",
      "0x72be5d74f27b896f",
      "0x80deb1fe3b1696b1",
      "0x9bdc06a725c71235",
      "0xc19bf174cf692694",
      "0xe49b69c19ef14ad2",
      "0xefbe4786384f25e3",
      "0x0fc19dc68b8cd5b5",
      "0x240ca1cc77ac9c65",
      "0x2de92c6f592b0275",
      "0x4a7484aa6ea6e483",
      "0x5cb0a9dcbd41fbd4",
      "0x76f988da831153b5",
      "0x983e5152ee66dfab",
      "0xa831c66d2db43210",
      "0xb00327c898fb213f",
      "0xbf597fc7beef0ee4",
      "0xc6e00bf33da88fc2",
      "0xd5a79147930aa725",
      "0x06ca6351e003826f",
      "0x142929670a0e6e70",
      "0x27b70a8546d22ffc",
      "0x2e1b21385c26c926",
      "0x4d2c6dfc5ac42aed",
      "0x53380d139d95b3df",
      "0x650a73548baf63de",
      "0x766a0abb3c77b2a8",
      "0x81c2c92e47edaee6",
      "0x92722c851482353b",
      "0xa2bfe8a14cf10364",
      "0xa81a664bbc423001",
      "0xc24b8b70d0f89791",
      "0xc76c51a30654be30",
      "0xd192e819d6ef5218",
      "0xd69906245565a910",
      "0xf40e35855771202a",
      "0x106aa07032bbd1b8",
      "0x19a4c116b8d2d0c8",
      "0x1e376c085141ab53",
      "0x2748774cdf8eeb99",
      "0x34b0bcb5e19b48a8",
      "0x391c0cb3c5c95a63",
      "0x4ed8aa4ae3418acb",
      "0x5b9cca4f7763e373",
      "0x682e6ff3d6b2b8a3",
      "0x748f82ee5defb2fc",
      "0x78a5636f43172f60",
      "0x84c87814a1f0ab72",
      "0x8cc702081a6439ec",
      "0x90befffa23631e28",
      "0xa4506cebde82bde9",
      "0xbef9a3f7b2c67915",
      "0xc67178f2e372532b",
      "0xca273eceea26619c",
      "0xd186b8c721c0c207",
      "0xeada7dd6cde0eb1e",
      "0xf57d4f7fee6ed178",
      "0x06f067aa72176fba",
      "0x0a637dc5a2c898a6",
      "0x113f9804bef90dae",
      "0x1b710b35131c471b",
      "0x28db77f523047d84",
      "0x32caab7b40c72493",
      "0x3c9ebe0a15c9bebc",
      "0x431d67c49c100d4c",
      "0x4cc5d4becb3e42b6",
      "0x597f299cfc657e2a",
      "0x5fcb6fab3ad6faec",
      "0x6c44198c4a475817"
    ].map((n) => BigInt(n)));
    var SHA512_W_H = new Uint32Array(80);
    var SHA512_W_L = new Uint32Array(80);
    var SHA512 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(128, 64, 16, false);
        this.Ah = 1779033703 | 0;
        this.Al = 4089235720 | 0;
        this.Bh = 3144134277 | 0;
        this.Bl = 2227873595 | 0;
        this.Ch = 1013904242 | 0;
        this.Cl = 4271175723 | 0;
        this.Dh = 2773480762 | 0;
        this.Dl = 1595750129 | 0;
        this.Eh = 1359893119 | 0;
        this.El = 2917565137 | 0;
        this.Fh = 2600822924 | 0;
        this.Fl = 725511199 | 0;
        this.Gh = 528734635 | 0;
        this.Gl = 4215389547 | 0;
        this.Hh = 1541459225 | 0;
        this.Hl = 327033209 | 0;
      }
      get() {
        const {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
        return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
      }
      set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4) {
          SHA512_W_H[i] = view.getUint32(offset);
          SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for (let i = 16; i < 80; i++) {
          const W15h = SHA512_W_H[i - 15] | 0;
          const W15l = SHA512_W_L[i - 15] | 0;
          const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
          const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
          const W2h = SHA512_W_H[i - 2] | 0;
          const W2l = SHA512_W_L[i - 2] | 0;
          const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
          const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
          const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
          const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
          SHA512_W_H[i] = SUMh | 0;
          SHA512_W_L[i] = SUMl | 0;
        }
        let {Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl} = this;
        for (let i = 0; i < 80; i++) {
          const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
          const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
          const CHIh = Eh & Fh ^ ~Eh & Gh;
          const CHIl = El & Fl ^ ~El & Gl;
          const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
          const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
          const T1l = T1ll | 0;
          const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
          const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
          const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
          const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
          Hh = Gh | 0;
          Hl = Gl | 0;
          Gh = Fh | 0;
          Gl = Fl | 0;
          Fh = Eh | 0;
          Fl = El | 0;
          ({h: Eh, l: El} = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
          Dh = Ch | 0;
          Dl = Cl | 0;
          Ch = Bh | 0;
          Cl = Bl | 0;
          Bh = Ah | 0;
          Bl = Al | 0;
          const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
          Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
          Al = All | 0;
        }
        ({h: Ah, l: Al} = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({h: Bh, l: Bl} = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({h: Ch, l: Cl} = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({h: Dh, l: Dl} = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({h: Eh, l: El} = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({h: Fh, l: Fl} = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({h: Gh, l: Gl} = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({h: Hh, l: Hl} = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
      }
      roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
      }
      destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    };
    exports.SHA512 = SHA512;
    var SHA512_224 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 2352822216 | 0;
        this.Al = 424955298 | 0;
        this.Bh = 1944164710 | 0;
        this.Bl = 2312950998 | 0;
        this.Ch = 502970286 | 0;
        this.Cl = 855612546 | 0;
        this.Dh = 1738396948 | 0;
        this.Dl = 1479516111 | 0;
        this.Eh = 258812777 | 0;
        this.El = 2077511080 | 0;
        this.Fh = 2011393907 | 0;
        this.Fl = 79989058 | 0;
        this.Gh = 1067287976 | 0;
        this.Gl = 1780299464 | 0;
        this.Hh = 286451373 | 0;
        this.Hl = 2446758561 | 0;
        this.outputLen = 28;
      }
    };
    var SHA512_256 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 573645204 | 0;
        this.Al = 4230739756 | 0;
        this.Bh = 2673172387 | 0;
        this.Bl = 3360449730 | 0;
        this.Ch = 596883563 | 0;
        this.Cl = 1867755857 | 0;
        this.Dh = 2520282905 | 0;
        this.Dl = 1497426621 | 0;
        this.Eh = 2519219938 | 0;
        this.El = 2827943907 | 0;
        this.Fh = 3193839141 | 0;
        this.Fl = 1401305490 | 0;
        this.Gh = 721525244 | 0;
        this.Gl = 746961066 | 0;
        this.Hh = 246885852 | 0;
        this.Hl = 2177182882 | 0;
        this.outputLen = 32;
      }
    };
    var SHA384 = class extends SHA512 {
      constructor() {
        super();
        this.Ah = 3418070365 | 0;
        this.Al = 3238371032 | 0;
        this.Bh = 1654270250 | 0;
        this.Bl = 914150663 | 0;
        this.Ch = 2438529370 | 0;
        this.Cl = 812702999 | 0;
        this.Dh = 355462360 | 0;
        this.Dl = 4144912697 | 0;
        this.Eh = 1731405415 | 0;
        this.El = 4290775857 | 0;
        this.Fh = 2394180231 | 0;
        this.Fl = 1750603025 | 0;
        this.Gh = 3675008525 | 0;
        this.Gl = 1694076839 | 0;
        this.Hh = 1203062813 | 0;
        this.Hl = 3204075428 | 0;
        this.outputLen = 48;
      }
    };
    exports.sha512 = (0, utils_js_1.wrapConstructor)(() => new SHA512());
    exports.sha512_224 = (0, utils_js_1.wrapConstructor)(() => new SHA512_224());
    exports.sha512_256 = (0, utils_js_1.wrapConstructor)(() => new SHA512_256());
    exports.sha384 = (0, utils_js_1.wrapConstructor)(() => new SHA384());
  }
});

// node_modules/@scure/base/lib/index.js
var require_lib = __commonJS({
  "node_modules/@scure/base/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.bytes = exports.stringToBytes = exports.str = exports.bytesToString = exports.hex = exports.utf8 = exports.bech32m = exports.bech32 = exports.base58check = exports.base58xmr = exports.base58xrp = exports.base58flickr = exports.base58 = exports.base64url = exports.base64 = exports.base32crockford = exports.base32hex = exports.base32 = exports.base16 = exports.utils = exports.assertNumber = void 0;
    function assertNumber(n) {
      if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
    }
    exports.assertNumber = assertNumber;
    function chain(...args) {
      const wrap = (a, b) => (c) => a(b(c));
      const encode2 = Array.from(args).reverse().reduce((acc, i) => acc ? wrap(acc, i.encode) : i.encode, void 0);
      const decode2 = args.reduce((acc, i) => acc ? wrap(acc, i.decode) : i.decode, void 0);
      return {encode: encode2, decode: decode2};
    }
    function alphabet(alphabet2) {
      return {
        encode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("alphabet.encode input should be an array of numbers");
          return digits.map((i) => {
            assertNumber(i);
            if (i < 0 || i >= alphabet2.length)
              throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet2.length})`);
            return alphabet2[i];
          });
        },
        decode: (input) => {
          if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
            throw new Error("alphabet.decode input should be array of strings");
          return input.map((letter) => {
            if (typeof letter !== "string")
              throw new Error(`alphabet.decode: not string element=${letter}`);
            const index = alphabet2.indexOf(letter);
            if (index === -1)
              throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
            return index;
          });
        }
      };
    }
    function join(separator = "") {
      if (typeof separator !== "string")
        throw new Error("join separator should be string");
      return {
        encode: (from) => {
          if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
            throw new Error("join.encode input should be array of strings");
          for (let i of from)
            if (typeof i !== "string")
              throw new Error(`join.encode: non-string input=${i}`);
          return from.join(separator);
        },
        decode: (to) => {
          if (typeof to !== "string")
            throw new Error("join.decode input should be string");
          return to.split(separator);
        }
      };
    }
    function padding(bits, chr = "=") {
      assertNumber(bits);
      if (typeof chr !== "string")
        throw new Error("padding chr should be string");
      return {
        encode(data) {
          if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
            throw new Error("padding.encode input should be array of strings");
          for (let i of data)
            if (typeof i !== "string")
              throw new Error(`padding.encode: non-string input=${i}`);
          while (data.length * bits % 8)
            data.push(chr);
          return data;
        },
        decode(input) {
          if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
            throw new Error("padding.encode input should be array of strings");
          for (let i of input)
            if (typeof i !== "string")
              throw new Error(`padding.decode: non-string input=${i}`);
          let end = input.length;
          if (end * bits % 8)
            throw new Error("Invalid padding: string should have whole number of bytes");
          for (; end > 0 && input[end - 1] === chr; end--) {
            if (!((end - 1) * bits % 8))
              throw new Error("Invalid padding: string has too much padding");
          }
          return input.slice(0, end);
        }
      };
    }
    function normalize(fn) {
      if (typeof fn !== "function")
        throw new Error("normalize fn should be function");
      return {encode: (from) => from, decode: (to) => fn(to)};
    }
    function convertRadix(data, from, to) {
      if (from < 2)
        throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
      if (to < 2)
        throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
      if (!Array.isArray(data))
        throw new Error("convertRadix: data should be array");
      if (!data.length)
        return [];
      let pos = 0;
      const res = [];
      const digits = Array.from(data);
      digits.forEach((d) => {
        assertNumber(d);
        if (d < 0 || d >= from)
          throw new Error(`Wrong integer: ${d}`);
      });
      while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < digits.length; i++) {
          const digit = digits[i];
          const digitBase = from * carry + digit;
          if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
            throw new Error("convertRadix: carry overflow");
          }
          carry = digitBase % to;
          digits[i] = Math.floor(digitBase / to);
          if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase)
            throw new Error("convertRadix: carry overflow");
          if (!done)
            continue;
          else if (!digits[i])
            pos = i;
          else
            done = false;
        }
        res.push(carry);
        if (done)
          break;
      }
      for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
      return res.reverse();
    }
    var gcd = (a, b) => !b ? a : gcd(b, a % b);
    var radix2carry = (from, to) => from + (to - gcd(from, to));
    function convertRadix2(data, from, to, padding2) {
      if (!Array.isArray(data))
        throw new Error("convertRadix2: data should be array");
      if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
      if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
      if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
      }
      let carry = 0;
      let pos = 0;
      const mask2 = 2 ** to - 1;
      const res = [];
      for (const n of data) {
        assertNumber(n);
        if (n >= 2 ** from)
          throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = carry << from | n;
        if (pos + from > 32)
          throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
          res.push((carry >> pos - to & mask2) >>> 0);
        carry &= 2 ** pos - 1;
      }
      carry = carry << to - pos & mask2;
      if (!padding2 && pos >= from)
        throw new Error("Excess padding");
      if (!padding2 && carry)
        throw new Error(`Non-zero padding: ${carry}`);
      if (padding2 && pos > 0)
        res.push(carry >>> 0);
      return res;
    }
    function radix(num) {
      assertNumber(num);
      return {
        encode: (bytes) => {
          if (!(bytes instanceof Uint8Array))
            throw new Error("radix.encode input should be Uint8Array");
          return convertRadix(Array.from(bytes), 2 ** 8, num);
        },
        decode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("radix.decode input should be array of strings");
          return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
        }
      };
    }
    function radix2(bits, revPadding = false) {
      assertNumber(bits);
      if (bits <= 0 || bits > 32)
        throw new Error("radix2: bits should be in (0..32]");
      if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error("radix2: carry overflow");
      return {
        encode: (bytes) => {
          if (!(bytes instanceof Uint8Array))
            throw new Error("radix2.encode input should be Uint8Array");
          return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
          if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
            throw new Error("radix2.decode input should be array of strings");
          return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        }
      };
    }
    function unsafeWrapper(fn) {
      if (typeof fn !== "function")
        throw new Error("unsafeWrapper fn should be function");
      return function(...args) {
        try {
          return fn.apply(null, args);
        } catch (e) {
        }
      };
    }
    function checksum(len, fn) {
      assertNumber(len);
      if (typeof fn !== "function")
        throw new Error("checksum fn should be function");
      return {
        encode(data) {
          if (!(data instanceof Uint8Array))
            throw new Error("checksum.encode: input should be Uint8Array");
          const checksum2 = fn(data).slice(0, len);
          const res = new Uint8Array(data.length + len);
          res.set(data);
          res.set(checksum2, data.length);
          return res;
        },
        decode(data) {
          if (!(data instanceof Uint8Array))
            throw new Error("checksum.decode: input should be Uint8Array");
          const payload = data.slice(0, -len);
          const newChecksum = fn(payload).slice(0, len);
          const oldChecksum = data.slice(-len);
          for (let i = 0; i < len; i++)
            if (newChecksum[i] !== oldChecksum[i])
              throw new Error("Invalid checksum");
          return payload;
        }
      };
    }
    exports.utils = {alphabet, chain, checksum, radix, radix2, join, padding};
    exports.base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
    exports.base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
    exports.base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
    exports.base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
    exports.base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
    exports.base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
    var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
    exports.base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    exports.base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
    exports.base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
    var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
    exports.base58xmr = {
      encode(data) {
        let res = "";
        for (let i = 0; i < data.length; i += 8) {
          const block = data.subarray(i, i + 8);
          res += exports.base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
        }
        return res;
      },
      decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
          const slice = str.slice(i, i + 11);
          const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
          const block = exports.base58.decode(slice);
          for (let j = 0; j < block.length - blockLen; j++) {
            if (block[j] !== 0)
              throw new Error("base58xmr: wrong padding");
          }
          res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
      }
    };
    var base58check2 = (sha2563) => chain(checksum(4, (data) => sha2563(sha2563(data))), exports.base58);
    exports.base58check = base58check2;
    var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
    var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
    function bech32Polymod(pre) {
      const b = pre >> 25;
      let chk = (pre & 33554431) << 5;
      for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if ((b >> i & 1) === 1)
          chk ^= POLYMOD_GENERATORS[i];
      }
      return chk;
    }
    function bechChecksum(prefix, words, encodingConst = 1) {
      const len = prefix.length;
      let chk = 1;
      for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
          throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ c >> 5;
      }
      chk = bech32Polymod(chk);
      for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
      for (let v of words)
        chk = bech32Polymod(chk) ^ v;
      for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
      chk ^= encodingConst;
      return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
    }
    function genBech32(encoding) {
      const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
      const _words = radix2(5);
      const fromWords = _words.decode;
      const toWords = _words.encode;
      const fromWordsUnsafe = unsafeWrapper(fromWords);
      function encode2(prefix, words, limit = 90) {
        if (typeof prefix !== "string")
          throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
          throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit)
          throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
      }
      function decode2(str, limit = 90) {
        if (typeof str !== "string")
          throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || limit !== false && str.length > limit)
          throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
          throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf("1");
        if (sepIndex === 0 || sepIndex === -1)
          throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words2 = str.slice(sepIndex + 1);
        if (_words2.length < 6)
          throw new Error("Data must be at least 6 characters long");
        const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words2.endsWith(sum))
          throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return {prefix, words};
      }
      const decodeUnsafe = unsafeWrapper(decode2);
      function decodeToBytes(str) {
        const {prefix, words} = decode2(str, false);
        return {prefix, words, bytes: fromWords(words)};
      }
      return {encode: encode2, decode: decode2, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords};
    }
    exports.bech32 = genBech32("bech32");
    exports.bech32m = genBech32("bech32m");
    exports.utf8 = {
      encode: (data) => new TextDecoder().decode(data),
      decode: (str) => new TextEncoder().encode(str)
    };
    exports.hex = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
      if (typeof s !== "string" || s.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
      return s.toLowerCase();
    }));
    var CODERS = {
      utf8: exports.utf8,
      hex: exports.hex,
      base16: exports.base16,
      base32: exports.base32,
      base64: exports.base64,
      base64url: exports.base64url,
      base58: exports.base58,
      base58xmr: exports.base58xmr
    };
    var coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(", ")}`;
    var bytesToString = (type2, bytes) => {
      if (typeof type2 !== "string" || !CODERS.hasOwnProperty(type2))
        throw new TypeError(coderTypeError);
      if (!(bytes instanceof Uint8Array))
        throw new TypeError("bytesToString() expects Uint8Array");
      return CODERS[type2].encode(bytes);
    };
    exports.bytesToString = bytesToString;
    exports.str = exports.bytesToString;
    var stringToBytes = (type2, str) => {
      if (!CODERS.hasOwnProperty(type2))
        throw new TypeError(coderTypeError);
      if (typeof str !== "string")
        throw new TypeError("stringToBytes() expects string");
      return CODERS[type2].decode(str);
    };
    exports.stringToBytes = stringToBytes;
    exports.bytes = exports.stringToBytes;
  }
});

// node_modules/@scure/bip39/index.js
var require_bip39 = __commonJS({
  "node_modules/@scure/bip39/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mnemonicToSeedSync = exports.mnemonicToSeed = exports.validateMnemonic = exports.entropyToMnemonic = exports.mnemonicToEntropy = exports.generateMnemonic = void 0;
    var _assert_1 = require_assert();
    var pbkdf2_1 = require_pbkdf2();
    var sha256_1 = require_sha256();
    var sha512_1 = require_sha512();
    var utils_1 = require_utils();
    var base_1 = require_lib();
    var isJapanese = (wordlist) => wordlist[0] === "\u3042\u3044\u3053\u304F\u3057\u3093";
    function nfkd(str) {
      if (typeof str !== "string")
        throw new TypeError(`Invalid mnemonic type: ${typeof str}`);
      return str.normalize("NFKD");
    }
    function normalize(str) {
      const norm = nfkd(str);
      const words = norm.split(" ");
      if (![12, 15, 18, 21, 24].includes(words.length))
        throw new Error("Invalid mnemonic");
      return {nfkd: norm, words};
    }
    function assertEntropy(entropy) {
      _assert_1.default.bytes(entropy, 16, 20, 24, 28, 32);
    }
    function generateMnemonic(wordlist, strength = 128) {
      _assert_1.default.number(strength);
      if (strength % 32 !== 0 || strength > 256)
        throw new TypeError("Invalid entropy");
      return entropyToMnemonic((0, utils_1.randomBytes)(strength / 8), wordlist);
    }
    exports.generateMnemonic = generateMnemonic;
    var calcChecksum = (entropy) => {
      const bitsLeft = 8 - entropy.length / 4;
      return new Uint8Array([(0, sha256_1.sha256)(entropy)[0] >> bitsLeft << bitsLeft]);
    };
    function getCoder(wordlist) {
      if (!Array.isArray(wordlist) || wordlist.length !== 2048 || typeof wordlist[0] !== "string")
        throw new Error("Worlist: expected array of 2048 strings");
      wordlist.forEach((i) => {
        if (typeof i !== "string")
          throw new Error(`Wordlist: non-string element: ${i}`);
      });
      return base_1.utils.chain(base_1.utils.checksum(1, calcChecksum), base_1.utils.radix2(11, true), base_1.utils.alphabet(wordlist));
    }
    function mnemonicToEntropy(mnemonic, wordlist) {
      const {words} = normalize(mnemonic);
      const entropy = getCoder(wordlist).decode(words);
      assertEntropy(entropy);
      return entropy;
    }
    exports.mnemonicToEntropy = mnemonicToEntropy;
    function entropyToMnemonic(entropy, wordlist) {
      assertEntropy(entropy);
      const words = getCoder(wordlist).encode(entropy);
      return words.join(isJapanese(wordlist) ? "\u3000" : " ");
    }
    exports.entropyToMnemonic = entropyToMnemonic;
    function validateMnemonic(mnemonic, wordlist) {
      try {
        mnemonicToEntropy(mnemonic, wordlist);
      } catch (e) {
        return false;
      }
      return true;
    }
    exports.validateMnemonic = validateMnemonic;
    var salt = (passphrase) => nfkd(`mnemonic${passphrase}`);
    function mnemonicToSeed2(mnemonic, passphrase = "") {
      return (0, pbkdf2_1.pbkdf2Async)(sha512_1.sha512, normalize(mnemonic).nfkd, salt(passphrase), {c: 2048, dkLen: 64});
    }
    exports.mnemonicToSeed = mnemonicToSeed2;
    function mnemonicToSeedSync(mnemonic, passphrase = "") {
      return (0, pbkdf2_1.pbkdf2)(sha512_1.sha512, normalize(mnemonic).nfkd, salt(passphrase), {c: 2048, dkLen: 64});
    }
    exports.mnemonicToSeedSync = mnemonicToSeedSync;
  }
});

// node_modules/@noble/hashes/ripemd160.js
var require_ripemd160 = __commonJS({
  "node_modules/@noble/hashes/ripemd160.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ripemd160 = exports.RIPEMD160 = void 0;
    var _sha2_js_1 = require_sha2();
    var utils_js_1 = require_utils();
    var Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
    var Id = Uint8Array.from({length: 16}, (_4, i) => i);
    var Pi = Id.map((i) => (9 * i + 5) % 16);
    var idxL = [Id];
    var idxR = [Pi];
    for (let i = 0; i < 4; i++)
      for (let j of [idxL, idxR])
        j.push(j[i].map((k) => Rho[k]));
    var shifts = [
      [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
      [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
      [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
      [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
      [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
    ].map((i) => new Uint8Array(i));
    var shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
    var shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
    var Kl = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]);
    var Kr = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]);
    var rotl = (word, shift) => word << shift | word >>> 32 - shift;
    function f(group, x, y, z) {
      if (group === 0)
        return x ^ y ^ z;
      else if (group === 1)
        return x & y | ~x & z;
      else if (group === 2)
        return (x | ~y) ^ z;
      else if (group === 3)
        return x & z | y & ~z;
      else
        return x ^ (y | ~z);
    }
    var BUF = new Uint32Array(16);
    var RIPEMD160 = class extends _sha2_js_1.SHA2 {
      constructor() {
        super(64, 20, 8, true);
        this.h0 = 1732584193 | 0;
        this.h1 = 4023233417 | 0;
        this.h2 = 2562383102 | 0;
        this.h3 = 271733878 | 0;
        this.h4 = 3285377520 | 0;
      }
      get() {
        const {h0, h1, h2, h3, h4} = this;
        return [h0, h1, h2, h3, h4];
      }
      set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
      }
      process(view, offset) {
        for (let i = 0; i < 16; i++, offset += 4)
          BUF[i] = view.getUint32(offset, true);
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        for (let group = 0; group < 5; group++) {
          const rGroup = 4 - group;
          const hbl = Kl[group], hbr = Kr[group];
          const rl = idxL[group], rr = idxR[group];
          const sl = shiftsL[group], sr = shiftsR[group];
          for (let i = 0; i < 16; i++) {
            const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
            al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
          }
          for (let i = 0; i < 16; i++) {
            const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
            ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
          }
        }
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
      }
      roundClean() {
        BUF.fill(0);
      }
      destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
      }
    };
    exports.RIPEMD160 = RIPEMD160;
    exports.ripemd160 = (0, utils_js_1.wrapConstructor)(() => new RIPEMD160());
  }
});

// node_modules/uuid/dist/rng-browser.js
var require_rng_browser = __commonJS({
  "node_modules/uuid/dist/rng-browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return getRandomValues(rnds8);
    }
  }
});

// node_modules/uuid/dist/regex.js
var require_regex = __commonJS({
  "node_modules/uuid/dist/regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/validate.js
var require_validate = __commonJS({
  "node_modules/uuid/dist/validate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require_regex());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function validate2(uuid) {
      return typeof uuid === "string" && _regex.default.test(uuid);
    }
    var _default = validate2;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/stringify.js
var require_stringify = __commonJS({
  "node_modules/uuid/dist/stringify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    function stringify(arr, offset = 0) {
      const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/v1.js
var require_v1 = __commonJS({
  "node_modules/uuid/dist/v1.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng_browser());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var _nodeId;
    var _clockseq;
    var _lastMSecs = 0;
    var _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        if (node == null) {
          node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }
        if (clockseq == null) {
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
        }
      }
      let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
      let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      if (dt < 0 && options.clockseq === void 0) {
        clockseq = clockseq + 1 & 16383;
      }
      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
        nsecs = 0;
      }
      if (nsecs >= 1e4) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = tl & 255;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = tmh & 255;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = clockseq & 255;
      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }
      return buf || (0, _stringify.default)(b);
    }
    var _default = v1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/parse.js
var require_parse = __commonJS({
  "node_modules/uuid/dist/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = v & 255;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = v & 255;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = v & 255;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = v & 255;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = v & 255;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/v35.js
var require_v35 = __commonJS({
  "node_modules/uuid/dist/v35.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }
      return bytes;
    }
    var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    var URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL2;
    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === "string") {
          value = stringToBytes(value);
        }
        if (typeof namespace === "string") {
          namespace = (0, _parse.default)(namespace);
        }
        if (namespace.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {
      }
      generateUUID.DNS = DNS;
      generateUUID.URL = URL2;
      return generateUUID;
    }
  }
});

// node_modules/uuid/dist/md5-browser.js
var require_md5_browser = __commonJS({
  "node_modules/uuid/dist/md5-browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = input.length * 32;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [a, b, c, d];
    }
    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }
      const length8 = input.length * 8;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 255) << i % 32;
      }
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (x & 65535) + (y & 65535);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/v3.js
var require_v3 = __commonJS({
  "node_modules/uuid/dist/v3.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _md = _interopRequireDefault(require_md5_browser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/v4.js
var require_v4 = __commonJS({
  "node_modules/uuid/dist/v4.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require_rng_browser());
    var _stringify = _interopRequireDefault(require_stringify());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function v4(options, buf, offset) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/sha1-browser.js
var require_sha1_browser = __commonJS({
  "node_modules/uuid/dist/sha1-browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;
        case 1:
          return x ^ y ^ z;
        case 2:
          return x & y ^ x & z ^ y & z;
        case 3:
          return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [1518500249, 1859775393, 2400959708, 3395469782];
      const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof bytes === "string") {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      } else if (!Array.isArray(bytes)) {
        bytes = Array.prototype.slice.call(bytes);
      }
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) {
          arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        }
        M[i] = arr;
      }
      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) {
          W[t] = M[i][t];
        }
        for (let t = 16; t < 80; ++t) {
          W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        }
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
    }
    var _default = sha1;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/v5.js
var require_v5 = __commonJS({
  "node_modules/uuid/dist/v5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require_v35());
    var _sha = _interopRequireDefault(require_sha1_browser());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    var v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/nil.js
var require_nil = __commonJS({
  "node_modules/uuid/dist/nil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }
});

// node_modules/uuid/dist/version.js
var require_version = __commonJS({
  "node_modules/uuid/dist/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require_validate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError("Invalid UUID");
      }
      return parseInt(uuid.substr(14, 1), 16);
    }
    var _default = version;
    exports.default = _default;
  }
});

// node_modules/uuid/dist/index.js
var require_dist = __commonJS({
  "node_modules/uuid/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require_v1());
    var _v2 = _interopRequireDefault(require_v3());
    var _v3 = _interopRequireDefault(require_v4());
    var _v4 = _interopRequireDefault(require_v5());
    var _nil = _interopRequireDefault(require_nil());
    var _version = _interopRequireDefault(require_version());
    var _validate = _interopRequireDefault(require_validate());
    var _stringify = _interopRequireDefault(require_stringify());
    var _parse = _interopRequireDefault(require_parse());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj};
    }
  }
});

// node_modules/jayson/lib/generateRequest.js
var require_generateRequest = __commonJS({
  "node_modules/jayson/lib/generateRequest.js"(exports, module2) {
    "use strict";
    var uuid = require_dist().v4;
    var generateRequest = function(method, params, id, options) {
      if (typeof method !== "string") {
        throw new TypeError(method + " must be a string");
      }
      options = options || {};
      const version = typeof options.version === "number" ? options.version : 2;
      if (version !== 1 && version !== 2) {
        throw new TypeError(version + " must be 1 or 2");
      }
      const request = {
        method
      };
      if (version === 2) {
        request.jsonrpc = "2.0";
      }
      if (params) {
        if (typeof params !== "object" && !Array.isArray(params)) {
          throw new TypeError(params + " must be an object, array or omitted");
        }
        request.params = params;
      }
      if (typeof id === "undefined") {
        const generator = typeof options.generator === "function" ? options.generator : function() {
          return uuid();
        };
        request.id = generator(request, options);
      } else if (version === 2 && id === null) {
        if (options.notificationIdNull) {
          request.id = null;
        }
      } else {
        request.id = id;
      }
      return request;
    };
    module2.exports = generateRequest;
  }
});

// node_modules/jayson/lib/client/browser/index.js
var require_browser = __commonJS({
  "node_modules/jayson/lib/client/browser/index.js"(exports, module2) {
    "use strict";
    var uuid = require_dist().v4;
    var generateRequest = require_generateRequest();
    var ClientBrowser = function(callServer, options) {
      if (!(this instanceof ClientBrowser)) {
        return new ClientBrowser(callServer, options);
      }
      if (!options) {
        options = {};
      }
      this.options = {
        reviver: typeof options.reviver !== "undefined" ? options.reviver : null,
        replacer: typeof options.replacer !== "undefined" ? options.replacer : null,
        generator: typeof options.generator !== "undefined" ? options.generator : function() {
          return uuid();
        },
        version: typeof options.version !== "undefined" ? options.version : 2,
        notificationIdNull: typeof options.notificationIdNull === "boolean" ? options.notificationIdNull : false
      };
      this.callServer = callServer;
    };
    module2.exports = ClientBrowser;
    ClientBrowser.prototype.request = function(method, params, id, callback) {
      const self2 = this;
      let request = null;
      const isBatch = Array.isArray(method) && typeof params === "function";
      if (this.options.version === 1 && isBatch) {
        throw new TypeError("JSON-RPC 1.0 does not support batching");
      }
      const isRaw = !isBatch && method && typeof method === "object" && typeof params === "function";
      if (isBatch || isRaw) {
        callback = params;
        request = method;
      } else {
        if (typeof id === "function") {
          callback = id;
          id = void 0;
        }
        const hasCallback = typeof callback === "function";
        try {
          request = generateRequest(method, params, id, {
            generator: this.options.generator,
            version: this.options.version,
            notificationIdNull: this.options.notificationIdNull
          });
        } catch (err) {
          if (hasCallback) {
            return callback(err);
          }
          throw err;
        }
        if (!hasCallback) {
          return request;
        }
      }
      let message;
      try {
        message = JSON.stringify(request, this.options.replacer);
      } catch (err) {
        return callback(err);
      }
      this.callServer(message, function(err, response) {
        self2._parseResponse(err, response, callback);
      });
      return request;
    };
    ClientBrowser.prototype._parseResponse = function(err, responseText, callback) {
      if (err) {
        callback(err);
        return;
      }
      if (!responseText) {
        return callback();
      }
      let response;
      try {
        response = JSON.parse(responseText, this.options.reviver);
      } catch (err2) {
        return callback(err2);
      }
      if (callback.length === 3) {
        if (Array.isArray(response)) {
          const isError = function(res) {
            return typeof res.error !== "undefined";
          };
          const isNotError = function(res) {
            return !isError(res);
          };
          return callback(null, response.filter(isError), response.filter(isNotError));
        } else {
          return callback(null, response.error, response.result);
        }
      }
      callback(null, response);
    };
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module2) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module2.exports = _interopRequireDefault, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/typeof.js"(exports, module2) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return module2.exports = _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _typeof(obj);
    }
    module2.exports = _typeof, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module2) {
    var _typeof = require_typeof()["default"];
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    module2.exports = _toPrimitive, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module2) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function _toPropertyKey(arg) {
      var key = toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    module2.exports = _toPropertyKey, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/createClass.js"(exports, module2) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module2.exports = _createClass, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module2) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module2.exports = _classCallCheck, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module2) {
    function _setPrototypeOf(o, p) {
      module2.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      return _setPrototypeOf(o, p);
    }
    module2.exports = _setPrototypeOf, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/inherits.js"(exports, module2) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module2.exports = _inherits, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module2) {
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    module2.exports = _assertThisInitialized, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module2) {
    var _typeof = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized(self2);
    }
    module2.exports = _possibleConstructorReturn, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module2) {
    function _getPrototypeOf(o) {
      module2.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      return _getPrototypeOf(o);
    }
    module2.exports = _getPrototypeOf, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event2, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event2 : event2;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners2(event2) {
      var evt = prefix ? prefix + event2 : event2, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event2) {
      var evt = prefix ? prefix + event2 : event2, listeners2 = this._events[evt];
      if (!listeners2)
        return 0;
      if (listeners2.fn)
        return 1;
      return listeners2.length;
    };
    EventEmitter.prototype.emit = function emit(event2, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event2 : event2;
      if (!this._events[evt])
        return false;
      var listeners2 = this._events[evt], len = arguments.length, args, i;
      if (listeners2.fn) {
        if (listeners2.once)
          this.removeListener(event2, listeners2.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners2.fn.call(listeners2.context), true;
          case 2:
            return listeners2.fn.call(listeners2.context, a1), true;
          case 3:
            return listeners2.fn.call(listeners2.context, a1, a2), true;
          case 4:
            return listeners2.fn.call(listeners2.context, a1, a2, a3), true;
          case 5:
            return listeners2.fn.call(listeners2.context, a1, a2, a3, a4), true;
          case 6:
            return listeners2.fn.call(listeners2.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners2.fn.apply(listeners2.context, args);
      } else {
        var length = listeners2.length, j;
        for (i = 0; i < length; i++) {
          if (listeners2[i].once)
            this.removeListener(event2, listeners2[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners2[i].fn.call(listeners2[i].context);
              break;
            case 2:
              listeners2[i].fn.call(listeners2[i].context, a1);
              break;
            case 3:
              listeners2[i].fn.call(listeners2[i].context, a1, a2);
              break;
            case 4:
              listeners2[i].fn.call(listeners2[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners2[i].fn.apply(listeners2[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on2(event2, fn, context) {
      return addListener(this, event2, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event2, fn, context) {
      return addListener(this, event2, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event2, fn, context, once) {
      var evt = prefix ? prefix + event2 : event2;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners2 = this._events[evt];
      if (listeners2.fn) {
        if (listeners2.fn === fn && (!once || listeners2.once) && (!context || listeners2.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners2.length; i < length; i++) {
          if (listeners2[i].fn !== fn || once && !listeners2[i].once || context && listeners2[i].context !== context) {
            events.push(listeners2[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event2) {
      var evt;
      if (event2) {
        evt = prefix ? prefix + event2 : event2;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if (typeof module2 !== "undefined") {
      module2.exports = EventEmitter;
    }
  }
});

// node_modules/rpc-websockets/dist/lib/client/websocket.browser.js
var require_websocket_browser = __commonJS({
  "node_modules/rpc-websockets/dist/lib/client/websocket.browser.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _eventemitter = require_eventemitter3();
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var WebSocketBrowserImpl = /* @__PURE__ */ function(_EventEmitter) {
      (0, _inherits2["default"])(WebSocketBrowserImpl2, _EventEmitter);
      var _super = _createSuper(WebSocketBrowserImpl2);
      function WebSocketBrowserImpl2(address2, options, protocols) {
        var _this;
        (0, _classCallCheck2["default"])(this, WebSocketBrowserImpl2);
        _this = _super.call(this);
        _this.socket = new window.WebSocket(address2, protocols);
        _this.socket.onopen = function() {
          return _this.emit("open");
        };
        _this.socket.onmessage = function(event2) {
          return _this.emit("message", event2.data);
        };
        _this.socket.onerror = function(error) {
          return _this.emit("error", error);
        };
        _this.socket.onclose = function(event2) {
          _this.emit("close", event2.code, event2.reason);
        };
        return _this;
      }
      (0, _createClass2["default"])(WebSocketBrowserImpl2, [{
        key: "send",
        value: function send(data, optionsOrCallback, callback) {
          var cb = callback || optionsOrCallback;
          try {
            this.socket.send(data);
            cb();
          } catch (error) {
            cb(error);
          }
        }
      }, {
        key: "close",
        value: function close(code, reason) {
          this.socket.close(code, reason);
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(type2, listener, options) {
          this.socket.addEventListener(type2, listener, options);
        }
      }]);
      return WebSocketBrowserImpl2;
    }(_eventemitter.EventEmitter);
    function _default(address2, options) {
      return new WebSocketBrowserImpl(address2, options);
    }
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module2) {
    var _typeof = require_typeof()["default"];
    function _regeneratorRuntime() {
      "use strict";
      module2.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return exports2;
      }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      var exports2 = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      }, $Symbol = typeof Symbol == "function" ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define3(obj, key, value) {
        return Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        }), obj[key];
      }
      try {
        define3({}, "");
      } catch (err) {
        define3 = function define4(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
          value: makeInvokeMethod(innerFn, self2, context)
        }), generator;
      }
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      exports2.wrap = wrap;
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define3(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define3(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record2 = tryCatch(generator[method], generator, arg);
          if (record2.type !== "throw") {
            var result = record2.arg, value = result.value;
            return value && _typeof(value) == "object" && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
          reject(record2.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
          value: function value(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(innerFn, self2, context) {
        var state = "suspendedStart";
        return function(method, arg) {
          if (state === "executing")
            throw new Error("Generator is already running");
          if (state === "completed") {
            if (method === "throw")
              throw arg;
            return doneResult();
          }
          for (context.method = method, context.arg = arg; ; ) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if (context.method === "next")
              context.sent = context._sent = context.arg;
            else if (context.method === "throw") {
              if (state === "suspendedStart")
                throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else
              context.method === "return" && context.abrupt("return", context.arg);
            state = "executing";
            var record2 = tryCatch(innerFn, self2, context);
            if (record2.type === "normal") {
              if (state = context.done ? "completed" : "suspendedYield", record2.arg === ContinueSentinel)
                continue;
              return {
                value: record2.arg,
                done: context.done
              };
            }
            record2.type === "throw" && (state = "completed", context.method = "throw", context.arg = record2.arg);
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (method === void 0)
          return context.delegate = null, methodName === "throw" && delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), context.method === "throw") || methodName !== "return" && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record2 = tryCatch(method, delegate.iterator, context.arg);
        if (record2.type === "throw")
          return context.method = "throw", context.arg = record2.arg, context.delegate = null, ContinueSentinel;
        var info = record2.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, context.method !== "return" && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record2 = entry.completion || {};
        record2.type = "normal", delete record2.arg, entry.completion = record2;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{
          tryLoc: "root"
        }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod)
            return iteratorMethod.call(iterable);
          if (typeof iterable.next == "function")
            return iterable;
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return next2.value = iterable[i], next2.done = false, next2;
              return next2.value = void 0, next2.done = true, next2;
            };
            return next.next = next;
          }
        }
        return {
          next: doneResult
        };
      }
      function doneResult() {
        return {
          value: void 0,
          done: true
        };
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define3(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun == "function" && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction");
      }, exports2.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define3(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports2.awrap = function(arg) {
        return {
          __await: arg
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define3(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      }), exports2.AsyncIterator = AsyncIterator, exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        PromiseImpl === void 0 && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define3(Gp, toStringTagSymbol, "Generator"), define3(Gp, iteratorSymbol, function() {
        return this;
      }), define3(Gp, "toString", function() {
        return "[object Generator]";
      }), exports2.keys = function(val) {
        var object2 = Object(val), keys = [];
        for (var key in object2)
          keys.push(key);
        return keys.reverse(), function next() {
          for (; keys.length; ) {
            var key2 = keys.pop();
            if (key2 in object2)
              return next.value = key2, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, exports2.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
            for (var name in this)
              name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
        },
        stop: function stop() {
          this.done = true;
          var rootRecord = this.tryEntries[0].completion;
          if (rootRecord.type === "throw")
            throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done)
            throw exception;
          var context = this;
          function handle(loc, caught) {
            return record2.type = "throw", record2.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i], record2 = entry.completion;
            if (entry.tryLoc === "root")
              return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally)
                  throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type2, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry && (type2 === "break" || type2 === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
          var record2 = finallyEntry ? finallyEntry.completion : {};
          return record2.type = type2, record2.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record2);
        },
        complete: function complete(record2, afterLoc) {
          if (record2.type === "throw")
            throw record2.arg;
          return record2.type === "break" || record2.type === "continue" ? this.next = record2.arg : record2.type === "return" ? (this.rval = this.arg = record2.arg, this.method = "return", this.next = "end") : record2.type === "normal" && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record2 = entry.completion;
              if (record2.type === "throw") {
                var thrown = record2.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          }, this.method === "next" && (this.arg = void 0), ContinueSentinel;
        }
      }, exports2;
    }
    module2.exports = _regeneratorRuntime, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/regenerator/index.js"(exports, module2) {
    var runtime = require_regeneratorRuntime()();
    module2.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var require_asyncToGenerator = __commonJS({
  "node_modules/rpc-websockets/node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module2) {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    module2.exports = _asyncToGenerator, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/rpc-websockets/dist/lib/client.js
var require_client = __commonJS({
  "node_modules/rpc-websockets/dist/lib/client.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _eventemitter = require_eventemitter3();
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var __rest = function(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var CommonClient = /* @__PURE__ */ function(_EventEmitter) {
      (0, _inherits2["default"])(CommonClient2, _EventEmitter);
      var _super = _createSuper(CommonClient2);
      function CommonClient2(webSocketFactory) {
        var _this;
        var address2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080";
        var _a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var generate_request_id = arguments.length > 3 ? arguments[3] : void 0;
        (0, _classCallCheck2["default"])(this, CommonClient2);
        var _a$autoconnect = _a.autoconnect, autoconnect = _a$autoconnect === void 0 ? true : _a$autoconnect, _a$reconnect = _a.reconnect, reconnect = _a$reconnect === void 0 ? true : _a$reconnect, _a$reconnect_interval = _a.reconnect_interval, reconnect_interval = _a$reconnect_interval === void 0 ? 1e3 : _a$reconnect_interval, _a$max_reconnects = _a.max_reconnects, max_reconnects = _a$max_reconnects === void 0 ? 5 : _a$max_reconnects, rest_options = __rest(_a, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
        _this = _super.call(this);
        _this.webSocketFactory = webSocketFactory;
        _this.queue = {};
        _this.rpc_id = 0;
        _this.address = address2;
        _this.autoconnect = autoconnect;
        _this.ready = false;
        _this.reconnect = reconnect;
        _this.reconnect_timer_id = void 0;
        _this.reconnect_interval = reconnect_interval;
        _this.max_reconnects = max_reconnects;
        _this.rest_options = rest_options;
        _this.current_reconnects = 0;
        _this.generate_request_id = generate_request_id || function() {
          return ++_this.rpc_id;
        };
        if (_this.autoconnect)
          _this._connect(_this.address, Object.assign({
            autoconnect: _this.autoconnect,
            reconnect: _this.reconnect,
            reconnect_interval: _this.reconnect_interval,
            max_reconnects: _this.max_reconnects
          }, _this.rest_options));
        return _this;
      }
      (0, _createClass2["default"])(CommonClient2, [{
        key: "connect",
        value: function connect() {
          if (this.socket)
            return;
          this._connect(this.address, Object.assign({
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects
          }, this.rest_options));
        }
      }, {
        key: "call",
        value: function call(method, params, timeout, ws_opts) {
          var _this2 = this;
          if (!ws_opts && (0, _typeof2["default"])(timeout) === "object") {
            ws_opts = timeout;
            timeout = null;
          }
          return new Promise(function(resolve, reject) {
            if (!_this2.ready)
              return reject(new Error("socket not ready"));
            var rpc_id = _this2.generate_request_id(method, params);
            var message = {
              jsonrpc: "2.0",
              method,
              params: params || null,
              id: rpc_id
            };
            _this2.socket.send(JSON.stringify(message), ws_opts, function(error) {
              if (error)
                return reject(error);
              _this2.queue[rpc_id] = {
                promise: [resolve, reject]
              };
              if (timeout) {
                _this2.queue[rpc_id].timeout = setTimeout(function() {
                  delete _this2.queue[rpc_id];
                  reject(new Error("reply timeout"));
                }, timeout);
              }
            });
          });
        }
      }, {
        key: "login",
        value: function() {
          var _login = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee(params) {
            var resp;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.call("rpc.login", params);
                  case 2:
                    resp = _context.sent;
                    if (resp) {
                      _context.next = 5;
                      break;
                    }
                    throw new Error("authentication failed");
                  case 5:
                    return _context.abrupt("return", resp);
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function login2(_x) {
            return _login.apply(this, arguments);
          }
          return login2;
        }()
      }, {
        key: "listMethods",
        value: function() {
          var _listMethods = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee2() {
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.call("__listMethods");
                  case 2:
                    return _context2.abrupt("return", _context2.sent);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function listMethods() {
            return _listMethods.apply(this, arguments);
          }
          return listMethods;
        }()
      }, {
        key: "notify",
        value: function notify(method, params) {
          var _this3 = this;
          return new Promise(function(resolve, reject) {
            if (!_this3.ready)
              return reject(new Error("socket not ready"));
            var message = {
              jsonrpc: "2.0",
              method,
              params: params || null
            };
            _this3.socket.send(JSON.stringify(message), function(error) {
              if (error)
                return reject(error);
              resolve();
            });
          });
        }
      }, {
        key: "subscribe",
        value: function() {
          var _subscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee3(event2) {
            var result;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (typeof event2 === "string")
                      event2 = [event2];
                    _context3.next = 3;
                    return this.call("rpc.on", event2);
                  case 3:
                    result = _context3.sent;
                    if (!(typeof event2 === "string" && result[event2] !== "ok")) {
                      _context3.next = 6;
                      break;
                    }
                    throw new Error("Failed subscribing to an event '" + event2 + "' with: " + result[event2]);
                  case 6:
                    return _context3.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
          function subscribe(_x2) {
            return _subscribe.apply(this, arguments);
          }
          return subscribe;
        }()
      }, {
        key: "unsubscribe",
        value: function() {
          var _unsubscribe = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee4(event2) {
            var result;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (typeof event2 === "string")
                      event2 = [event2];
                    _context4.next = 3;
                    return this.call("rpc.off", event2);
                  case 3:
                    result = _context4.sent;
                    if (!(typeof event2 === "string" && result[event2] !== "ok")) {
                      _context4.next = 6;
                      break;
                    }
                    throw new Error("Failed unsubscribing from an event with: " + result);
                  case 6:
                    return _context4.abrupt("return", result);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
          function unsubscribe(_x3) {
            return _unsubscribe.apply(this, arguments);
          }
          return unsubscribe;
        }()
      }, {
        key: "close",
        value: function close(code, data) {
          this.socket.close(code || 1e3, data);
        }
      }, {
        key: "_connect",
        value: function _connect(address2, options) {
          var _this4 = this;
          clearTimeout(this.reconnect_timer_id);
          this.socket = this.webSocketFactory(address2, options);
          this.socket.addEventListener("open", function() {
            _this4.ready = true;
            _this4.emit("open");
            _this4.current_reconnects = 0;
          });
          this.socket.addEventListener("message", function(_ref) {
            var message = _ref.data;
            if (message instanceof ArrayBuffer)
              message = Buffer.from(message).toString();
            try {
              message = JSON.parse(message);
            } catch (error) {
              return;
            }
            if (message.notification && _this4.listeners(message.notification).length) {
              if (!Object.keys(message.params).length)
                return _this4.emit(message.notification);
              var args = [message.notification];
              if (message.params.constructor === Object)
                args.push(message.params);
              else
                for (var i = 0; i < message.params.length; i++) {
                  args.push(message.params[i]);
                }
              return Promise.resolve().then(function() {
                _this4.emit.apply(_this4, args);
              });
            }
            if (!_this4.queue[message.id]) {
              if (message.method && message.params) {
                return Promise.resolve().then(function() {
                  _this4.emit(message.method, message.params);
                });
              }
              return;
            }
            if ("error" in message === "result" in message)
              _this4.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
            if (_this4.queue[message.id].timeout)
              clearTimeout(_this4.queue[message.id].timeout);
            if (message.error)
              _this4.queue[message.id].promise[1](message.error);
            else
              _this4.queue[message.id].promise[0](message.result);
            delete _this4.queue[message.id];
          });
          this.socket.addEventListener("error", function(error) {
            return _this4.emit("error", error);
          });
          this.socket.addEventListener("close", function(_ref2) {
            var code = _ref2.code, reason = _ref2.reason;
            if (_this4.ready)
              setTimeout(function() {
                return _this4.emit("close", code, reason);
              }, 0);
            _this4.ready = false;
            _this4.socket = void 0;
            if (code === 1e3)
              return;
            _this4.current_reconnects++;
            if (_this4.reconnect && (_this4.max_reconnects > _this4.current_reconnects || _this4.max_reconnects === 0))
              _this4.reconnect_timer_id = setTimeout(function() {
                return _this4._connect(address2, options);
              }, _this4.reconnect_interval);
          });
        }
      }]);
      return CommonClient2;
    }(_eventemitter.EventEmitter);
    exports["default"] = CommonClient;
  }
});

// node_modules/rpc-websockets/dist/index.browser.js
var require_index_browser = __commonJS({
  "node_modules/rpc-websockets/dist/index.browser.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Client = void 0;
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
    var _websocket = _interopRequireDefault(require_websocket_browser());
    var _client = _interopRequireDefault(require_client());
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = (0, _getPrototypeOf2["default"])(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2["default"])(this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var Client = /* @__PURE__ */ function(_CommonClient) {
      (0, _inherits2["default"])(Client2, _CommonClient);
      var _super = _createSuper(Client2);
      function Client2() {
        var address2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ws://localhost:8080";
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$autoconnect = _ref.autoconnect, autoconnect = _ref$autoconnect === void 0 ? true : _ref$autoconnect, _ref$reconnect = _ref.reconnect, reconnect = _ref$reconnect === void 0 ? true : _ref$reconnect, _ref$reconnect_interv = _ref.reconnect_interval, reconnect_interval = _ref$reconnect_interv === void 0 ? 1e3 : _ref$reconnect_interv, _ref$max_reconnects = _ref.max_reconnects, max_reconnects = _ref$max_reconnects === void 0 ? 5 : _ref$max_reconnects;
        var generate_request_id = arguments.length > 2 ? arguments[2] : void 0;
        (0, _classCallCheck2["default"])(this, Client2);
        return _super.call(this, _websocket["default"], address2, {
          autoconnect,
          reconnect,
          reconnect_interval,
          max_reconnects
        }, generate_request_id);
      }
      return (0, _createClass2["default"])(Client2);
    }(_client["default"]);
    exports.Client = Client;
  }
});

// node_modules/@suchipi/femver/index.js
var require_femver = __commonJS({
  "node_modules/@suchipi/femver/index.js"(exports, module2) {
    function isValid(versionString) {
      return /^\d+\.\d+\.\d+$/.test(versionString);
    }
    function parse(versionString) {
      if (!isValid(versionString)) {
        throw new Error("Invalid semver version: " + versionString);
      }
      const [major, minor, patch] = versionString.split(".").map((part) => parseInt(part, 10));
      return {major, minor, patch};
    }
    function lt2(firstVersionString, secondVersionString) {
      const ver1 = parse(firstVersionString);
      const ver2 = parse(secondVersionString);
      if (ver1.major !== ver2.major) {
        return ver1.major < ver2.major;
      }
      if (ver1.minor !== ver2.minor) {
        return ver1.minor < ver2.minor;
      }
      if (ver1.patch !== ver2.patch) {
        return ver1.patch < ver2.patch;
      }
      return false;
    }
    function lte(firstVersionString, secondVersionString) {
      const ver1 = parse(firstVersionString);
      const ver2 = parse(secondVersionString);
      if (ver1.major !== ver2.major) {
        return ver1.major <= ver2.major;
      }
      if (ver1.minor !== ver2.minor) {
        return ver1.minor <= ver2.minor;
      }
      if (ver1.patch !== ver2.patch) {
        return ver1.patch <= ver2.patch;
      }
      return true;
    }
    function gt(firstVersionString, secondVersionString) {
      const ver1 = parse(firstVersionString);
      const ver2 = parse(secondVersionString);
      if (ver1.major !== ver2.major) {
        return ver1.major > ver2.major;
      }
      if (ver1.minor !== ver2.minor) {
        return ver1.minor > ver2.minor;
      }
      if (ver1.patch !== ver2.patch) {
        return ver1.patch > ver2.patch;
      }
      return false;
    }
    function gte(firstVersionString, secondVersionString) {
      const ver1 = parse(firstVersionString);
      const ver2 = parse(secondVersionString);
      if (ver1.major !== ver2.major) {
        return ver1.major >= ver2.major;
      }
      if (ver1.minor !== ver2.minor) {
        return ver1.minor >= ver2.minor;
      }
      if (ver1.patch !== ver2.patch) {
        return ver1.patch >= ver2.patch;
      }
      return true;
    }
    function eq(firstVersionString, secondVersionString) {
      parse(firstVersionString);
      parse(secondVersionString);
      return firstVersionString === secondVersionString;
    }
    module2.exports = {
      isValid,
      parse,
      lt: lt2,
      lte,
      gt,
      gte,
      eq
    };
  }
});

// node_modules/store2/dist/store2.js
var require_store2 = __commonJS({
  "node_modules/store2/dist/store2.js"(exports, module2) {
    (function(window2, define3) {
      var _4 = {
        version: "2.14.2",
        areas: {},
        apis: {},
        nsdelim: ".",
        inherit: function(api, o) {
          for (var p in api) {
            if (!o.hasOwnProperty(p)) {
              Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
            }
          }
          return o;
        },
        stringify: function(d, fn) {
          return d === void 0 || typeof d === "function" ? d + "" : JSON.stringify(d, fn || _4.replace);
        },
        parse: function(s, fn) {
          try {
            return JSON.parse(s, fn || _4.revive);
          } catch (e) {
            return s;
          }
        },
        fn: function(name, fn) {
          _4.storeAPI[name] = fn;
          for (var api in _4.apis) {
            _4.apis[api][name] = fn;
          }
        },
        get: function(area, key) {
          return area.getItem(key);
        },
        set: function(area, key, string2) {
          area.setItem(key, string2);
        },
        remove: function(area, key) {
          area.removeItem(key);
        },
        key: function(area, i) {
          return area.key(i);
        },
        length: function(area) {
          return area.length;
        },
        clear: function(area) {
          area.clear();
        },
        Store: function(id, area, namespace) {
          var store10 = _4.inherit(_4.storeAPI, function(key, data, overwrite) {
            if (arguments.length === 0) {
              return store10.getAll();
            }
            if (typeof data === "function") {
              return store10.transact(key, data, overwrite);
            }
            if (data !== void 0) {
              return store10.set(key, data, overwrite);
            }
            if (typeof key === "string" || typeof key === "number") {
              return store10.get(key);
            }
            if (typeof key === "function") {
              return store10.each(key);
            }
            if (!key) {
              return store10.clear();
            }
            return store10.setAll(key, data);
          });
          store10._id = id;
          try {
            var testKey = "__store2_test";
            area.setItem(testKey, "ok");
            store10._area = area;
            area.removeItem(testKey);
          } catch (e) {
            store10._area = _4.storage("fake");
          }
          store10._ns = namespace || "";
          if (!_4.areas[id]) {
            _4.areas[id] = store10._area;
          }
          if (!_4.apis[store10._ns + store10._id]) {
            _4.apis[store10._ns + store10._id] = store10;
          }
          return store10;
        },
        storeAPI: {
          area: function(id, area) {
            var store10 = this[id];
            if (!store10 || !store10.area) {
              store10 = _4.Store(id, area, this._ns);
              if (!this[id]) {
                this[id] = store10;
              }
            }
            return store10;
          },
          namespace: function(namespace, singleArea, delim) {
            delim = delim || this._delim || _4.nsdelim;
            if (!namespace) {
              return this._ns ? this._ns.substring(0, this._ns.length - delim.length) : "";
            }
            var ns = namespace, store10 = this[ns];
            if (!store10 || !store10.namespace) {
              store10 = _4.Store(this._id, this._area, this._ns + ns + delim);
              store10._delim = delim;
              if (!this[ns]) {
                this[ns] = store10;
              }
              if (!singleArea) {
                for (var name in _4.areas) {
                  store10.area(name, _4.areas[name]);
                }
              }
            }
            return store10;
          },
          isFake: function(force) {
            if (force) {
              this._real = this._area;
              this._area = _4.storage("fake");
            } else if (force === false) {
              this._area = this._real || this._area;
            }
            return this._area.name === "fake";
          },
          toString: function() {
            return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
          },
          has: function(key) {
            if (this._area.has) {
              return this._area.has(this._in(key));
            }
            return !!(this._in(key) in this._area);
          },
          size: function() {
            return this.keys().length;
          },
          each: function(fn, fill) {
            for (var i = 0, m = _4.length(this._area); i < m; i++) {
              var key = this._out(_4.key(this._area, i));
              if (key !== void 0) {
                if (fn.call(this, key, this.get(key), fill) === false) {
                  break;
                }
              }
              if (m > _4.length(this._area)) {
                m--;
                i--;
              }
            }
            return fill || this;
          },
          keys: function(fillList) {
            return this.each(function(k, v, list) {
              list.push(k);
            }, fillList || []);
          },
          get: function(key, alt) {
            var s = _4.get(this._area, this._in(key)), fn;
            if (typeof alt === "function") {
              fn = alt;
              alt = null;
            }
            return s !== null ? _4.parse(s, fn) : alt != null ? alt : s;
          },
          getAll: function(fillObj) {
            return this.each(function(k, v, all) {
              all[k] = v;
            }, fillObj || {});
          },
          transact: function(key, fn, alt) {
            var val = this.get(key, alt), ret = fn(val);
            this.set(key, ret === void 0 ? val : ret);
            return this;
          },
          set: function(key, data, overwrite) {
            var d = this.get(key), replacer;
            if (d != null && overwrite === false) {
              return data;
            }
            if (typeof overwrite === "function") {
              replacer = overwrite;
              overwrite = void 0;
            }
            return _4.set(this._area, this._in(key), _4.stringify(data, replacer), overwrite) || d;
          },
          setAll: function(data, overwrite) {
            var changed, val;
            for (var key in data) {
              val = data[key];
              if (this.set(key, val, overwrite) !== val) {
                changed = true;
              }
            }
            return changed;
          },
          add: function(key, data, replacer) {
            var d = this.get(key);
            if (d instanceof Array) {
              data = d.concat(data);
            } else if (d !== null) {
              var type2 = typeof d;
              if (type2 === typeof data && type2 === "object") {
                for (var k in data) {
                  d[k] = data[k];
                }
                data = d;
              } else {
                data = d + data;
              }
            }
            _4.set(this._area, this._in(key), _4.stringify(data, replacer));
            return data;
          },
          remove: function(key, alt) {
            var d = this.get(key, alt);
            _4.remove(this._area, this._in(key));
            return d;
          },
          clear: function() {
            if (!this._ns) {
              _4.clear(this._area);
            } else {
              this.each(function(k) {
                _4.remove(this._area, this._in(k));
              }, 1);
            }
            return this;
          },
          clearAll: function() {
            var area = this._area;
            for (var id in _4.areas) {
              if (_4.areas.hasOwnProperty(id)) {
                this._area = _4.areas[id];
                this.clear();
              }
            }
            this._area = area;
            return this;
          },
          _in: function(k) {
            if (typeof k !== "string") {
              k = _4.stringify(k);
            }
            return this._ns ? this._ns + k : k;
          },
          _out: function(k) {
            return this._ns ? k && k.indexOf(this._ns) === 0 ? k.substring(this._ns.length) : void 0 : k;
          }
        },
        storage: function(name) {
          return _4.inherit(_4.storageAPI, {items: {}, name});
        },
        storageAPI: {
          length: 0,
          has: function(k) {
            return this.items.hasOwnProperty(k);
          },
          key: function(i) {
            var c = 0;
            for (var k in this.items) {
              if (this.has(k) && i === c++) {
                return k;
              }
            }
          },
          setItem: function(k, v) {
            if (!this.has(k)) {
              this.length++;
            }
            this.items[k] = v;
          },
          removeItem: function(k) {
            if (this.has(k)) {
              delete this.items[k];
              this.length--;
            }
          },
          getItem: function(k) {
            return this.has(k) ? this.items[k] : null;
          },
          clear: function() {
            for (var k in this.items) {
              this.removeItem(k);
            }
          }
        }
      };
      var store9 = _4.Store("local", function() {
        try {
          return localStorage;
        } catch (e) {
        }
      }());
      store9.local = store9;
      store9._ = _4;
      store9.area("session", function() {
        try {
          return sessionStorage;
        } catch (e) {
        }
      }());
      store9.area("page", _4.storage("page"));
      if (typeof define3 === "function" && define3.amd !== void 0) {
        define3("store2", [], function() {
          return store9;
        });
      } else if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports = store9;
      } else {
        if (window2.store) {
          _4.conflict = window2.store;
        }
        window2.store = store9;
      }
    })(exports, exports && exports.define);
  }
});

// node_modules/bignumber.js/bignumber.js
var require_bignumber = __commonJS({
  "node_modules/bignumber.js/bignumber.js"(exports, module2) {
    (function(globalObject) {
      "use strict";
      var BigNumber2, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
      function clone(configObject) {
        var div, convertBase, parseNumeric, P = BigNumber3.prototype = {constructor: BigNumber3, toString: null, valueOf: null}, ONE = new BigNumber3(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
          prefix: "",
          groupSize: 3,
          secondaryGroupSize: 0,
          groupSeparator: ",",
          decimalSeparator: ".",
          fractionGroupSize: 0,
          fractionGroupSeparator: "\xA0",
          suffix: ""
        }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
        function BigNumber3(v, b) {
          var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
          if (!(x instanceof BigNumber3))
            return new BigNumber3(v, b);
          if (b == null) {
            if (v && v._isBigNumber === true) {
              x.s = v.s;
              if (!v.c || v.e > MAX_EXP) {
                x.c = x.e = null;
              } else if (v.e < MIN_EXP) {
                x.c = [x.e = 0];
              } else {
                x.e = v.e;
                x.c = v.c.slice();
              }
              return;
            }
            if ((isNum = typeof v == "number") && v * 0 == 0) {
              x.s = 1 / v < 0 ? (v = -v, -1) : 1;
              if (v === ~~v) {
                for (e = 0, i = v; i >= 10; i /= 10, e++)
                  ;
                if (e > MAX_EXP) {
                  x.c = x.e = null;
                } else {
                  x.e = e;
                  x.c = [v];
                }
                return;
              }
              str = String(v);
            } else {
              if (!isNumeric.test(str = String(v)))
                return parseNumeric(x, str, isNum);
              x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            if ((i = str.search(/e/i)) > 0) {
              if (e < 0)
                e = i;
              e += +str.slice(i + 1);
              str = str.substring(0, i);
            } else if (e < 0) {
              e = str.length;
            }
          } else {
            intCheck(b, 2, ALPHABET.length, "Base");
            if (b == 10 && alphabetHasNormalDecimalDigits) {
              x = new BigNumber3(v);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
            str = String(v);
            if (isNum = typeof v == "number") {
              if (v * 0 != 0)
                return parseNumeric(x, str, isNum, b);
              x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
              if (BigNumber3.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
                throw Error(tooManyDigits + v);
              }
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
            for (len = str.length; i < len; i++) {
              if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                if (c == ".") {
                  if (i > e) {
                    e = len;
                    continue;
                  }
                } else if (!caseChanged) {
                  if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                    caseChanged = true;
                    i = -1;
                    e = 0;
                    continue;
                  }
                }
                return parseNumeric(x, String(v), isNum, b);
              }
            }
            isNum = false;
            str = convertBase(str, b, 10, x.s);
            if ((e = str.indexOf(".")) > -1)
              str = str.replace(".", "");
            else
              e = str.length;
          }
          for (i = 0; str.charCodeAt(i) === 48; i++)
            ;
          for (len = str.length; str.charCodeAt(--len) === 48; )
            ;
          if (str = str.slice(i, ++len)) {
            len -= i;
            if (isNum && BigNumber3.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
              throw Error(tooManyDigits + x.s * v);
            }
            if ((e = e - i - 1) > MAX_EXP) {
              x.c = x.e = null;
            } else if (e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = [];
              i = (e + 1) % LOG_BASE;
              if (e < 0)
                i += LOG_BASE;
              if (i < len) {
                if (i)
                  x.c.push(+str.slice(0, i));
                for (len -= LOG_BASE; i < len; ) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }
                i = LOG_BASE - (str = str.slice(i)).length;
              } else {
                i -= len;
              }
              for (; i--; str += "0")
                ;
              x.c.push(+str);
            }
          } else {
            x.c = [x.e = 0];
          }
        }
        BigNumber3.clone = clone;
        BigNumber3.ROUND_UP = 0;
        BigNumber3.ROUND_DOWN = 1;
        BigNumber3.ROUND_CEIL = 2;
        BigNumber3.ROUND_FLOOR = 3;
        BigNumber3.ROUND_HALF_UP = 4;
        BigNumber3.ROUND_HALF_DOWN = 5;
        BigNumber3.ROUND_HALF_EVEN = 6;
        BigNumber3.ROUND_HALF_CEIL = 7;
        BigNumber3.ROUND_HALF_FLOOR = 8;
        BigNumber3.EUCLID = 9;
        BigNumber3.config = BigNumber3.set = function(obj) {
          var p, v;
          if (obj != null) {
            if (typeof obj == "object") {
              if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                DECIMAL_PLACES = v;
              }
              if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
                v = obj[p];
                intCheck(v, 0, 8, p);
                ROUNDING_MODE = v;
              }
              if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, 0, p);
                  intCheck(v[1], 0, MAX, p);
                  TO_EXP_NEG = v[0];
                  TO_EXP_POS = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                }
              }
              if (obj.hasOwnProperty(p = "RANGE")) {
                v = obj[p];
                if (v && v.pop) {
                  intCheck(v[0], -MAX, -1, p);
                  intCheck(v[1], 1, MAX, p);
                  MIN_EXP = v[0];
                  MAX_EXP = v[1];
                } else {
                  intCheck(v, -MAX, MAX, p);
                  if (v) {
                    MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                  } else {
                    throw Error(bignumberError + p + " cannot be zero: " + v);
                  }
                }
              }
              if (obj.hasOwnProperty(p = "CRYPTO")) {
                v = obj[p];
                if (v === !!v) {
                  if (v) {
                    if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                      CRYPTO = v;
                    } else {
                      CRYPTO = !v;
                      throw Error(bignumberError + "crypto unavailable");
                    }
                  } else {
                    CRYPTO = v;
                  }
                } else {
                  throw Error(bignumberError + p + " not true or false: " + v);
                }
              }
              if (obj.hasOwnProperty(p = "MODULO_MODE")) {
                v = obj[p];
                intCheck(v, 0, 9, p);
                MODULO_MODE = v;
              }
              if (obj.hasOwnProperty(p = "POW_PRECISION")) {
                v = obj[p];
                intCheck(v, 0, MAX, p);
                POW_PRECISION = v;
              }
              if (obj.hasOwnProperty(p = "FORMAT")) {
                v = obj[p];
                if (typeof v == "object")
                  FORMAT = v;
                else
                  throw Error(bignumberError + p + " not an object: " + v);
              }
              if (obj.hasOwnProperty(p = "ALPHABET")) {
                v = obj[p];
                if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                  alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                  ALPHABET = v;
                } else {
                  throw Error(bignumberError + p + " invalid: " + v);
                }
              }
            } else {
              throw Error(bignumberError + "Object expected: " + obj);
            }
          }
          return {
            DECIMAL_PLACES,
            ROUNDING_MODE,
            EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
            RANGE: [MIN_EXP, MAX_EXP],
            CRYPTO,
            MODULO_MODE,
            POW_PRECISION,
            FORMAT,
            ALPHABET
          };
        };
        BigNumber3.isBigNumber = function(v) {
          if (!v || v._isBigNumber !== true)
            return false;
          if (!BigNumber3.DEBUG)
            return true;
          var i, n, c = v.c, e = v.e, s = v.s;
          out:
            if ({}.toString.call(c) == "[object Array]") {
              if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                if (c[0] === 0) {
                  if (e === 0 && c.length === 1)
                    return true;
                  break out;
                }
                i = (e + 1) % LOG_BASE;
                if (i < 1)
                  i += LOG_BASE;
                if (String(c[0]).length == i) {
                  for (i = 0; i < c.length; i++) {
                    n = c[i];
                    if (n < 0 || n >= BASE || n !== mathfloor(n))
                      break out;
                  }
                  if (n !== 0)
                    return true;
                }
              }
            } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
              return true;
            }
          throw Error(bignumberError + "Invalid BigNumber: " + v);
        };
        BigNumber3.maximum = BigNumber3.max = function() {
          return maxOrMin(arguments, P.lt);
        };
        BigNumber3.minimum = BigNumber3.min = function() {
          return maxOrMin(arguments, P.gt);
        };
        BigNumber3.random = function() {
          var pow2_53 = 9007199254740992;
          var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
            return mathfloor(Math.random() * pow2_53);
          } : function() {
            return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
          };
          return function(dp) {
            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber3(ONE);
            if (dp == null)
              dp = DECIMAL_PLACES;
            else
              intCheck(dp, 0, MAX);
            k = mathceil(dp / LOG_BASE);
            if (CRYPTO) {
              if (crypto.getRandomValues) {
                a = crypto.getRandomValues(new Uint32Array(k *= 2));
                for (; i < k; ) {
                  v = a[i] * 131072 + (a[i + 1] >>> 11);
                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {
                    c.push(v % 1e14);
                    i += 2;
                  }
                }
                i = k / 2;
              } else if (crypto.randomBytes) {
                a = crypto.randomBytes(k *= 7);
                for (; i < k; ) {
                  v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {
                    c.push(v % 1e14);
                    i += 7;
                  }
                }
                i = k / 7;
              } else {
                CRYPTO = false;
                throw Error(bignumberError + "crypto unavailable");
              }
            }
            if (!CRYPTO) {
              for (; i < k; ) {
                v = random53bitInt();
                if (v < 9e15)
                  c[i++] = v % 1e14;
              }
            }
            k = c[--i];
            dp %= LOG_BASE;
            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            }
            for (; c[i] === 0; c.pop(), i--)
              ;
            if (i < 0) {
              c = [e = 0];
            } else {
              for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
                ;
              for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
                ;
              if (i < LOG_BASE)
                e -= LOG_BASE - i;
            }
            rand.e = e;
            rand.c = c;
            return rand;
          };
        }();
        BigNumber3.sum = function() {
          var i = 1, args = arguments, sum = new BigNumber3(args[0]);
          for (; i < args.length; )
            sum = sum.plus(args[i++]);
          return sum;
        };
        convertBase = function() {
          var decimal = "0123456789";
          function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j, arr = [0], arrL, i = 0, len = str.length;
            for (; i < len; ) {
              for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
                ;
              arr[0] += alphabet.indexOf(str.charAt(i++));
              for (j = 0; j < arr.length; j++) {
                if (arr[j] > baseOut - 1) {
                  if (arr[j + 1] == null)
                    arr[j + 1] = 0;
                  arr[j + 1] += arr[j] / baseOut | 0;
                  arr[j] %= baseOut;
                }
              }
            }
            return arr.reverse();
          }
          return function(str, baseIn, baseOut, sign2, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
            if (i >= 0) {
              k = POW_PRECISION;
              POW_PRECISION = 0;
              str = str.replace(".", "");
              y = new BigNumber3(baseIn);
              x = y.pow(str.length - i);
              POW_PRECISION = k;
              y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, "0"), 10, baseOut, decimal);
              y.e = y.c.length;
            }
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
            e = k = xc.length;
            for (; xc[--k] == 0; xc.pop())
              ;
            if (!xc[0])
              return alphabet.charAt(0);
            if (i < 0) {
              --e;
            } else {
              x.c = xc;
              x.e = e;
              x.s = sign2;
              x = div(x, y, dp, rm, baseOut);
              xc = x.c;
              r = x.r;
              e = x.e;
            }
            d = e + dp + 1;
            i = xc[d];
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
            if (d < 1 || !xc[0]) {
              str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {
              xc.length = d;
              if (r) {
                for (--baseOut; ++xc[--d] > baseOut; ) {
                  xc[d] = 0;
                  if (!d) {
                    ++e;
                    xc = [1].concat(xc);
                  }
                }
              }
              for (k = xc.length; !xc[--k]; )
                ;
              for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++]))
                ;
              str = toFixedPoint(str, e, alphabet.charAt(0));
            }
            return str;
          };
        }();
        div = function() {
          function multiply(x, k, base) {
            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
            for (x = x.slice(); i--; ) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }
            if (carry)
              x = [carry].concat(x);
            return x;
          }
          function compare2(a, b, aL, bL) {
            var i, cmp;
            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {
              for (i = cmp = 0; i < aL; i++) {
                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }
            return cmp;
          }
          function subtract(a, b, aL, base) {
            var i = 0;
            for (; aL--; ) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            }
            for (; !a[0] && a.length > 1; a.splice(0, 1))
              ;
          }
          return function(x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
            if (!xc || !xc[0] || !yc || !yc[0]) {
              return new BigNumber3(!x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
            }
            q = new BigNumber3(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            }
            for (i = 0; yc[i] == (xc[i] || 0); i++)
              ;
            if (yc[i] > (xc[i] || 0))
              e--;
            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2;
              n = mathfloor(base / (yc[0] + 1));
              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }
              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length;
              for (; remL < yL; rem[remL++] = 0)
                ;
              yz = yc.slice();
              yz = [0].concat(yz);
              yc0 = yc[0];
              if (yc[1] >= base / 2)
                yc0++;
              do {
                n = 0;
                cmp = compare2(yc, rem, yL, remL);
                if (cmp < 0) {
                  rem0 = rem[0];
                  if (yL != remL)
                    rem0 = rem0 * base + (rem[1] || 0);
                  n = mathfloor(rem0 / yc0);
                  if (n > 1) {
                    if (n >= base)
                      n = base - 1;
                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length;
                    while (compare2(prod, rem, prodL, remL) == 1) {
                      n--;
                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {
                    if (n == 0) {
                      cmp = n = 1;
                    }
                    prod = yc.slice();
                    prodL = prod.length;
                  }
                  if (prodL < remL)
                    prod = [0].concat(prod);
                  subtract(rem, prod, remL, base);
                  remL = rem.length;
                  if (cmp == -1) {
                    while (compare2(yc, rem, yL, remL) < 1) {
                      n++;
                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                }
                qc[i++] = n;
                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);
              more = rem[0] != null;
              if (!qc[0])
                qc.splice(0, 1);
            }
            if (base == BASE) {
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++)
                ;
              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
            } else {
              q.e = e;
              q.r = +more;
            }
            return q;
          };
        }();
        function format(n, i, rm, id) {
          var c0, e, ne, len, str;
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          if (!n.c)
            return n.toString();
          c0 = n.c[0];
          ne = n.e;
          if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
          } else {
            n = round(new BigNumber3(n), i, rm);
            e = n.e;
            str = coeffToString(n.c);
            len = str.length;
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
              for (; len < i; str += "0", len++)
                ;
              str = toExponential(str, e);
            } else {
              i -= ne;
              str = toFixedPoint(str, e, "0");
              if (e + 1 > len) {
                if (--i > 0)
                  for (str += "."; i--; str += "0")
                    ;
              } else {
                i += e - len;
                if (i > 0) {
                  if (e + 1 == len)
                    str += ".";
                  for (; i--; str += "0")
                    ;
                }
              }
            }
          }
          return n.s < 0 && c0 ? "-" + str : str;
        }
        function maxOrMin(args, method) {
          var n, i = 1, m = new BigNumber3(args[0]);
          for (; i < args.length; i++) {
            n = new BigNumber3(args[i]);
            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }
          return m;
        }
        function normalise(n, c, e) {
          var i = 1, j = c.length;
          for (; !c[--j]; c.pop())
            ;
          for (j = c[0]; j >= 10; j /= 10, i++)
            ;
          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            n.c = n.e = null;
          } else if (e < MIN_EXP) {
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }
          return n;
        }
        parseNumeric = function() {
          var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
          return function(x, str, isNum, b) {
            var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!isNum) {
                s = s.replace(basePrefix, function(m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });
                if (b) {
                  base = b;
                  s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
                }
                if (str != s)
                  return new BigNumber3(s, base);
              }
              if (BigNumber3.DEBUG) {
                throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
              }
              x.s = null;
            }
            x.c = x.e = null;
          };
        }();
        function round(x, sd, rm, r) {
          var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
          if (xc) {
            out: {
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
                ;
              i = sd - d;
              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0];
                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);
                if (ni >= xc.length) {
                  if (r) {
                    for (; xc.length <= ni; xc.push(0))
                      ;
                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni];
                  for (d = 1; k >= 10; k /= 10, d++)
                    ;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + d;
                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }
              r = r || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
              r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
              if (sd < 1 || !xc[0]) {
                xc.length = 0;
                if (r) {
                  sd -= x.e + 1;
                  xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                  x.e = -sd || 0;
                } else {
                  xc[0] = x.e = 0;
                }
                return x;
              }
              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i];
                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              }
              if (r) {
                for (; ; ) {
                  if (ni == 0) {
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                      ;
                    j = xc[0] += k;
                    for (k = 1; j >= 10; j /= 10, k++)
                      ;
                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE)
                        xc[0] = 1;
                    }
                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE)
                      break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              }
              for (i = xc.length; xc[--i] === 0; xc.pop())
                ;
            }
            if (x.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }
          return x;
        }
        function valueOf(n) {
          var str, e = n.e;
          if (e === null)
            return n.toString();
          str = coeffToString(n.c);
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
          return n.s < 0 ? "-" + str : str;
        }
        P.absoluteValue = P.abs = function() {
          var x = new BigNumber3(this);
          if (x.s < 0)
            x.s = 1;
          return x;
        };
        P.comparedTo = function(y, b) {
          return compare(this, new BigNumber3(y, b));
        };
        P.decimalPlaces = P.dp = function(dp, rm) {
          var c, n, v, x = this;
          if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber3(x), dp + x.e + 1, rm);
          }
          if (!(c = x.c))
            return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
          if (v = c[v])
            for (; v % 10 == 0; v /= 10, n--)
              ;
          if (n < 0)
            n = 0;
          return n;
        };
        P.dividedBy = P.div = function(y, b) {
          return div(this, new BigNumber3(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        P.dividedToIntegerBy = P.idiv = function(y, b) {
          return div(this, new BigNumber3(y, b), 0, 1);
        };
        P.exponentiatedBy = P.pow = function(n, m) {
          var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
          n = new BigNumber3(n);
          if (n.c && !n.isInteger()) {
            throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
          }
          if (m != null)
            m = new BigNumber3(m);
          nIsBig = n.e > 14;
          if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
            y = new BigNumber3(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
            return m ? y.mod(m) : y;
          }
          nIsNeg = n.s < 0;
          if (m) {
            if (m.c ? !m.c[0] : !m.s)
              return new BigNumber3(NaN);
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
            if (isModExp)
              x = x.mod(m);
          } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
            k = x.s < 0 && isOdd(n) ? -0 : 0;
            if (x.e > -1)
              k = 1 / k;
            return new BigNumber3(nIsNeg ? 1 / k : k);
          } else if (POW_PRECISION) {
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
          }
          if (nIsBig) {
            half = new BigNumber3(0.5);
            if (nIsNeg)
              n.s = 1;
            nIsOdd = isOdd(n);
          } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
          }
          y = new BigNumber3(ONE);
          for (; ; ) {
            if (nIsOdd) {
              y = y.times(x);
              if (!y.c)
                break;
              if (k) {
                if (y.c.length > k)
                  y.c.length = k;
              } else if (isModExp) {
                y = y.mod(m);
              }
            }
            if (i) {
              i = mathfloor(i / 2);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            } else {
              n = n.times(half);
              round(n, n.e + 1, 1);
              if (n.e > 14) {
                nIsOdd = isOdd(n);
              } else {
                i = +valueOf(n);
                if (i === 0)
                  break;
                nIsOdd = i % 2;
              }
            }
            x = x.times(x);
            if (k) {
              if (x.c && x.c.length > k)
                x.c.length = k;
            } else if (isModExp) {
              x = x.mod(m);
            }
          }
          if (isModExp)
            return y;
          if (nIsNeg)
            y = ONE.div(y);
          return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
        };
        P.integerValue = function(rm) {
          var n = new BigNumber3(this);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(n, n.e + 1, rm);
        };
        P.isEqualTo = P.eq = function(y, b) {
          return compare(this, new BigNumber3(y, b)) === 0;
        };
        P.isFinite = function() {
          return !!this.c;
        };
        P.isGreaterThan = P.gt = function(y, b) {
          return compare(this, new BigNumber3(y, b)) > 0;
        };
        P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
          return (b = compare(this, new BigNumber3(y, b))) === 1 || b === 0;
        };
        P.isInteger = function() {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        P.isLessThan = P.lt = function(y, b) {
          return compare(this, new BigNumber3(y, b)) < 0;
        };
        P.isLessThanOrEqualTo = P.lte = function(y, b) {
          return (b = compare(this, new BigNumber3(y, b))) === -1 || b === 0;
        };
        P.isNaN = function() {
          return !this.s;
        };
        P.isNegative = function() {
          return this.s < 0;
        };
        P.isPositive = function() {
          return this.s > 0;
        };
        P.isZero = function() {
          return !!this.c && this.c[0] == 0;
        };
        P.minus = function(y, b) {
          var i, j, t, xLTy, x = this, a = x.s;
          y = new BigNumber3(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber3(NaN);
          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return xc ? (y.s = -b, y) : new BigNumber3(yc ? x : NaN);
            if (!xc[0] || !yc[0]) {
              return yc[0] ? (y.s = -b, y) : new BigNumber3(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
            }
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }
            t.reverse();
            for (b = a; b--; t.push(0))
              ;
            t.reverse();
          } else {
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          }
          if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
          }
          b = (j = yc.length) - (i = xc.length);
          if (b > 0)
            for (; b--; xc[i++] = 0)
              ;
          b = BASE - 1;
          for (; j > a; ) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b)
                ;
              --xc[i];
              xc[j] += BASE;
            }
            xc[j] -= yc[j];
          }
          for (; xc[0] == 0; xc.splice(0, 1), --ye)
            ;
          if (!xc[0]) {
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          }
          return normalise(y, xc, ye);
        };
        P.modulo = P.mod = function(y, b) {
          var q, s, x = this;
          y = new BigNumber3(y, b);
          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber3(NaN);
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber3(x);
          }
          if (MODULO_MODE == 9) {
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }
          y = x.minus(q.times(y));
          if (!y.c[0] && MODULO_MODE == 1)
            y.s = x.s;
          return y;
        };
        P.multipliedBy = P.times = function(y, b) {
          var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber3(y, b)).c;
          if (!xc || !yc || !xc[0] || !yc[0]) {
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s;
              if (!xc || !yc) {
                y.c = y.e = null;
              } else {
                y.c = [0];
                y.e = 0;
              }
            }
            return y;
          }
          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length;
          if (xcL < ycL) {
            zc = xc;
            xc = yc;
            yc = zc;
            i = xcL;
            xcL = ycL;
            ycL = i;
          }
          for (i = xcL + ycL, zc = []; i--; zc.push(0))
            ;
          base = BASE;
          sqrtBase = SQRT_BASE;
          for (i = ycL; --i >= 0; ) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
            for (k = xcL, j = i + k; j > i; ) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }
            zc[j] = c;
          }
          if (c) {
            ++e;
          } else {
            zc.splice(0, 1);
          }
          return normalise(y, zc, e);
        };
        P.negated = function() {
          var x = new BigNumber3(this);
          x.s = -x.s || null;
          return x;
        };
        P.plus = function(y, b) {
          var t, x = this, a = x.s;
          y = new BigNumber3(y, b);
          b = y.s;
          if (!a || !b)
            return new BigNumber3(NaN);
          if (a != b) {
            y.s = -b;
            return x.minus(y);
          }
          var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
          if (!xe || !ye) {
            if (!xc || !yc)
              return new BigNumber3(a / 0);
            if (!xc[0] || !yc[0])
              return yc[0] ? y : new BigNumber3(xc[0] ? x : a * 0);
          }
          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice();
          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }
            t.reverse();
            for (; a--; t.push(0))
              ;
            t.reverse();
          }
          a = xc.length;
          b = yc.length;
          if (a - b < 0) {
            t = yc;
            yc = xc;
            xc = t;
            b = a;
          }
          for (a = 0; b; ) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
          }
          if (a) {
            xc = [a].concat(xc);
            ++ye;
          }
          return normalise(y, xc, ye);
        };
        P.precision = P.sd = function(sd, rm) {
          var c, n, v, x = this;
          if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null)
              rm = ROUNDING_MODE;
            else
              intCheck(rm, 0, 8);
            return round(new BigNumber3(x), sd, rm);
          }
          if (!(c = x.c))
            return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;
          if (v = c[v]) {
            for (; v % 10 == 0; v /= 10, n--)
              ;
            for (v = c[0]; v >= 10; v /= 10, n++)
              ;
          }
          if (sd && x.e + 1 > n)
            n = x.e + 1;
          return n;
        };
        P.shiftedBy = function(k) {
          intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
          return this.times("1e" + k);
        };
        P.squareRoot = P.sqrt = function() {
          var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber3("0.5");
          if (s !== 1 || !c || !c[0]) {
            return new BigNumber3(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          }
          s = Math.sqrt(+valueOf(x));
          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0)
              n += "0";
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
              n = "5e" + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf("e") + 1) + e;
            }
            r = new BigNumber3(n);
          } else {
            r = new BigNumber3(s + "");
          }
          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3)
              s = 0;
            for (; ; ) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));
              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                if (r.e < e)
                  --s;
                n = n.slice(s - 3, s + 1);
                if (n == "9999" || !rep && n == "4999") {
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);
                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }
                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {
                  if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }
                  break;
                }
              }
            }
          }
          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        P.toExponential = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
          }
          return format(this, dp, rm, 1);
        };
        P.toFixed = function(dp, rm) {
          if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
          }
          return format(this, dp, rm);
        };
        P.toFormat = function(dp, rm, format2) {
          var str, x = this;
          if (format2 == null) {
            if (dp != null && rm && typeof rm == "object") {
              format2 = rm;
              rm = null;
            } else if (dp && typeof dp == "object") {
              format2 = dp;
              dp = rm = null;
            } else {
              format2 = FORMAT;
            }
          } else if (typeof format2 != "object") {
            throw Error(bignumberError + "Argument not an object: " + format2);
          }
          str = x.toFixed(dp, rm);
          if (x.c) {
            var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
            if (g2) {
              i = g1;
              g1 = g2;
              g2 = i;
              len -= i;
            }
            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);
              for (; i < len; i += g1)
                intPart += groupSeparator + intDigits.substr(i, g1);
              if (g2 > 0)
                intPart += groupSeparator + intDigits.slice(i);
              if (isNeg)
                intPart = "-" + intPart;
            }
            str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(new RegExp("\\d{" + g2 + "}\\B", "g"), "$&" + (format2.fractionGroupSeparator || "")) : fractionPart) : intPart;
          }
          return (format2.prefix || "") + str + (format2.suffix || "");
        };
        P.toFraction = function(md) {
          var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
          if (md != null) {
            n = new BigNumber3(md);
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
              throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
            }
          }
          if (!xc)
            return new BigNumber3(x);
          d = new BigNumber3(ONE);
          n1 = d0 = new BigNumber3(ONE);
          d1 = n0 = new BigNumber3(ONE);
          s = coeffToString(xc);
          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber3(s);
          n0.c[0] = 0;
          for (; ; ) {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1)
              break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }
          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e = e * 2;
          r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
          MAX_EXP = exp;
          return r;
        };
        P.toNumber = function() {
          return +valueOf(this);
        };
        P.toPrecision = function(sd, rm) {
          if (sd != null)
            intCheck(sd, 1, MAX);
          return format(this, sd, rm, 2);
        };
        P.toString = function(b) {
          var str, n = this, s = n.s, e = n.e;
          if (e === null) {
            if (s) {
              str = "Infinity";
              if (s < 0)
                str = "-" + str;
            } else {
              str = "NaN";
            }
          } else {
            if (b == null) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
            } else if (b === 10 && alphabetHasNormalDecimalDigits) {
              n = round(new BigNumber3(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
              str = toFixedPoint(coeffToString(n.c), n.e, "0");
            } else {
              intCheck(b, 2, ALPHABET.length, "Base");
              str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
            }
            if (s < 0 && n.c[0])
              str = "-" + str;
          }
          return str;
        };
        P.valueOf = P.toJSON = function() {
          return valueOf(this);
        };
        P._isBigNumber = true;
        if (configObject != null)
          BigNumber3.set(configObject);
        return BigNumber3;
      }
      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      }
      function coeffToString(a) {
        var s, z, i = 1, j = a.length, r = a[0] + "";
        for (; i < j; ) {
          s = a[i++] + "";
          z = LOG_BASE - s.length;
          for (; z--; s = "0" + s)
            ;
          r += s;
        }
        for (j = r.length; r.charCodeAt(--j) === 48; )
          ;
        return r.slice(0, j + 1 || 1);
      }
      function compare(x, y) {
        var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
        if (!i || !j)
          return null;
        a = xc && !xc[0];
        b = yc && !yc[0];
        if (a || b)
          return a ? b ? 0 : -j : i;
        if (i != j)
          return i;
        a = i < 0;
        b = k == l;
        if (!xc || !yc)
          return b ? 0 : !xc ^ a ? 1 : -1;
        if (!b)
          return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;
        for (i = 0; i < j; i++)
          if (xc[i] != yc[i])
            return xc[i] > yc[i] ^ a ? 1 : -1;
        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }
      function intCheck(n, min, max, name) {
        if (n < min || n > max || n !== mathfloor(n)) {
          throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
        }
      }
      function isOdd(n) {
        var k = n.c.length - 1;
        return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
      }
      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
      }
      function toFixedPoint(str, e, z) {
        var len, zs;
        if (e < 0) {
          for (zs = z + "."; ++e; zs += z)
            ;
          str = zs + str;
        } else {
          len = str.length;
          if (++e > len) {
            for (zs = z, e -= len; --e; zs += z)
              ;
            str += zs;
          } else if (e < len) {
            str = str.slice(0, e) + "." + str.slice(e);
          }
        }
        return str;
      }
      BigNumber2 = clone();
      BigNumber2["default"] = BigNumber2.BigNumber = BigNumber2;
      if (typeof define == "function" && define.amd) {
        define(function() {
          return BigNumber2;
        });
      } else if (typeof module2 != "undefined" && module2.exports) {
        module2.exports = BigNumber2;
      } else {
        if (!globalObject) {
          globalObject = typeof self != "undefined" && self ? self : window;
        }
        globalObject.BigNumber = BigNumber2;
      }
    })(exports);
  }
});

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array2, setter, iteratee, accumulator) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          var value = array2[index];
          setter(accumulator, value, iteratee(value), array2);
        }
        return accumulator;
      }
      function arrayEach(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (iteratee(array2[index], index, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEachRight(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        while (length--) {
          if (iteratee(array2[length], length, array2) === false) {
            break;
          }
        }
        return array2;
      }
      function arrayEvery(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (!predicate(array2[index], index, array2)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array2, value) {
        var length = array2 == null ? 0 : array2.length;
        return !!length && baseIndexOf(array2, value, 0) > -1;
      }
      function arrayIncludesWith(array2, value, comparator) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (comparator(value, array2[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array2[index], index, array2);
        }
        return result;
      }
      function arrayPush(array2, values) {
        var index = -1, length = values.length, offset = array2.length;
        while (++index < length) {
          array2[offset + index] = values[index];
        }
        return array2;
      }
      function arrayReduce(array2, iteratee, accumulator, initAccum) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array2[index], index, array2);
        }
        return accumulator;
      }
      function arrayReduceRight(array2, iteratee, accumulator, initAccum) {
        var length = array2 == null ? 0 : array2.length;
        if (initAccum && length) {
          accumulator = array2[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array2[length], length, array2);
        }
        return accumulator;
      }
      function arraySome(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (predicate(array2[index], index, array2)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string2) {
        return string2.split("");
      }
      function asciiWords(string2) {
        return string2.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array2, predicate, fromIndex, fromRight) {
        var length = array2.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array2[index], index, array2)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array2, value, fromIndex) {
        return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array2, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array2.length;
        while (++index < length) {
          if (comparator(array2[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array2, iteratee) {
        var length = array2 == null ? 0 : array2.length;
        return length ? baseSum(array2, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object2) {
          return object2 == null ? undefined2 : object2[key];
        };
      }
      function basePropertyOf(object2) {
        return function(key) {
          return object2 == null ? undefined2 : object2[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array2, comparer) {
        var length = array2.length;
        array2.sort(comparer);
        while (length--) {
          array2[length] = array2[length].value;
        }
        return array2;
      }
      function baseSum(array2, iteratee) {
        var result, index = -1, length = array2.length;
        while (++index < length) {
          var current = iteratee(array2[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object2, props) {
        return arrayMap(props, function(key) {
          return [key, object2[key]];
        });
      }
      function baseTrim(string2) {
        return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object2, props) {
        return arrayMap(props, function(key) {
          return object2[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array2, placeholder) {
        var length = array2.length, result = 0;
        while (length--) {
          if (array2[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object2, key) {
        return object2 == null ? undefined2 : object2[key];
      }
      function hasUnicode(string2) {
        return reHasUnicode.test(string2);
      }
      function hasUnicodeWord(string2) {
        return reHasUnicodeWord.test(string2);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array2, placeholder) {
        var index = -1, length = array2.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array2[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array2[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array2, value, fromIndex) {
        var index = fromIndex - 1, length = array2.length;
        while (++index < length) {
          if (array2[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array2, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array2[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string2) {
        return hasUnicode(string2) ? unicodeSize(string2) : asciiSize(string2);
      }
      function stringToArray(string2) {
        return hasUnicode(string2) ? unicodeToArray(string2) : asciiToArray(string2);
      }
      function trimmedEndIndex(string2) {
        var index = string2.length;
        while (index-- && reWhitespace.test(string2.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string2) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string2)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string2) {
        return string2.match(reUnicode) || [];
      }
      function unicodeWords(string2) {
        return string2.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _4.defaults(root.Object(), context, _4.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object2() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object2.prototype = proto;
            var result2 = new object2();
            object2.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array2 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array2), isRight = dir < 0, arrLength = isArr ? array2.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array2, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array2[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type2 = data.type, computed = iteratee2(value);
                if (type2 == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type2 == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array2) {
          var length = array2.length;
          return length ? array2[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array2, n) {
          return shuffleSelf(copyArray(array2), baseClamp(n, 0, array2.length));
        }
        function arrayShuffle(array2) {
          return shuffleSelf(copyArray(array2));
        }
        function assignMergeValue(object2, key, value) {
          if (value !== undefined2 && !eq(object2[key], value) || value === undefined2 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assignValue(object2, key, value) {
          var objValue = object2[key];
          if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === undefined2 && !(key in object2)) {
            baseAssignValue(object2, key, value);
          }
        }
        function assocIndexOf(array2, key) {
          var length = array2.length;
          while (length--) {
            if (eq(array2[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object2, source) {
          return object2 && copyObject(source, keys(source), object2);
        }
        function baseAssignIn(object2, source) {
          return object2 && copyObject(source, keysIn(source), object2);
        }
        function baseAssignValue(object2, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object2, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object2[key] = value;
          }
        }
        function baseAt(object2, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object2 == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get2(object2, paths[index]);
          }
          return result2;
        }
        function baseClamp(number2, lower, upper) {
          if (number2 === number2) {
            if (upper !== undefined2) {
              number2 = number2 <= upper ? number2 : upper;
            }
            if (lower !== undefined2) {
              number2 = number2 >= lower ? number2 : lower;
            }
          }
          return number2;
        }
        function baseClone(value, bitmask, customizer, key, object2, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object2 ? customizer(value, key, object2, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject2(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object2) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object2 ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object2) {
            return baseConformsTo(object2, source, props);
          };
        }
        function baseConformsTo(object2, source, props) {
          var length = props.length;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (length--) {
            var key = props[length], predicate = source[key], value = object2[key];
            if (value === undefined2 && !(key in object2) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array2, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array2.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array2[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array2, iteratee2, comparator) {
          var index = -1, length = array2.length;
          while (++index < length) {
            var value = array2[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array2, value, start, end) {
          var length = array2.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array2[start++] = value;
          }
          return array2;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array2, depth, predicate, isStrict, result2) {
          var index = -1, length = array2.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array2[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object2, iteratee2) {
          return object2 && baseFor(object2, iteratee2, keys);
        }
        function baseForOwnRight(object2, iteratee2) {
          return object2 && baseForRight(object2, iteratee2, keys);
        }
        function baseFunctions(object2, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object2[key]);
          });
        }
        function baseGet(object2, path) {
          path = castPath(path, object2);
          var index = 0, length = path.length;
          while (object2 != null && index < length) {
            object2 = object2[toKey(path[index++])];
          }
          return index && index == length ? object2 : undefined2;
        }
        function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object2);
          return isArray(object2) ? result2 : arrayPush(result2, symbolsFunc(object2));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object2, key) {
          return object2 != null && hasOwnProperty.call(object2, key);
        }
        function baseHasIn(object2, key) {
          return object2 != null && key in Object2(object2);
        }
        function baseInRange(number2, start, end) {
          return number2 >= nativeMin(start, end) && number2 < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array2 = arrays[othIndex];
            if (othIndex && iteratee2) {
              array2 = arrayMap(array2, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array2.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array2.length >= 120) ? new SetCache(othIndex && array2) : undefined2;
          }
          array2 = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object2, setter, iteratee2, accumulator) {
          baseForOwn(object2, function(value, key, object3) {
            setter(accumulator, iteratee2(value), key, object3);
          });
          return accumulator;
        }
        function baseInvoke(object2, path, args) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          var func = object2 == null ? object2 : object2[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object2, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object2)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object2, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object2 == null) {
            return !length;
          }
          object2 = Object2(object2);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object2[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object2)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object2, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject2(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object2) {
          if (!isPrototype(object2)) {
            return nativeKeys(object2);
          }
          var result2 = [];
          for (var key in Object2(object2)) {
            if (hasOwnProperty.call(object2, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object2) {
          if (!isObject2(object2)) {
            return nativeKeysIn(object2);
          }
          var isProto = isPrototype(object2), result2 = [];
          for (var key in object2) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object2) {
            return object2 === source || baseIsMatch(object2, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object2) {
            var objValue = get2(object2, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object2, source, srcIndex, customizer, stack) {
          if (object2 === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject2(srcValue)) {
              baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object2, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object2, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object2, key, newValue);
        }
        function baseNth(array2, n) {
          var length = array2.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array2[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return {"criteria": criteria, "index": ++index, "value": value};
          });
          return baseSortBy(result2, function(object2, other) {
            return compareMultiple(object2, other, orders);
          });
        }
        function basePick(object2, paths) {
          return basePickBy(object2, paths, function(value, path) {
            return hasIn(object2, path);
          });
        }
        function basePickBy(object2, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object2, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object2), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object2) {
            return baseGet(object2, path);
          };
        }
        function basePullAll(array2, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array2;
          if (array2 === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array2, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array2) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array2, fromIndex, 1);
            }
          }
          return array2;
        }
        function basePullAt(array2, indexes) {
          var length = array2 ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array2, index, 1);
              } else {
                baseUnset(array2, index);
              }
            }
          }
          return array2;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string2, n) {
          var result2 = "";
          if (!string2 || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string2;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string2 += string2;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array2 = values(collection);
          return shuffleSelf(array2, baseClamp(n, 0, array2.length));
        }
        function baseSet(object2, path, value, customizer) {
          if (!isObject2(object2)) {
            return object2;
          }
          path = castPath(path, object2);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object2;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object2;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string2) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string2),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array2, start, end) {
          var index = -1, length = array2.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array2[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array2, value, retHighest) {
          var low = 0, high = array2 == null ? low : array2.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array2[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array2, value, identity, retHighest);
        }
        function baseSortedIndexBy(array2, value, iteratee2, retHighest) {
          var low = 0, high = array2 == null ? 0 : array2.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array2[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array2, iteratee2) {
          var index = -1, length = array2.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array2.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array2);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array2[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object2, path) {
          path = castPath(path, object2);
          object2 = parent(object2, path);
          return object2 == null || delete object2[toKey(last(path))];
        }
        function baseUpdate(object2, path, updater, customizer) {
          return baseSet(object2, path, updater(baseGet(object2, path)), customizer);
        }
        function baseWhile(array2, predicate, isDrop, fromRight) {
          var length = array2.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array2[index], index, array2)) {
          }
          return isDrop ? baseSlice(array2, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array2, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array2 = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array2, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object2) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object2) ? [value] : stringToPath(toString2(value));
        }
        var castRest = baseRest;
        function castSlice(array2, start, end) {
          var length = array2.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array2 : baseSlice(array2, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object2, other, orders) {
          var index = -1, objCriteria = object2.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object2.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array2) {
          var index = -1, length = source.length;
          array2 || (array2 = Array2(length));
          while (++index < length) {
            array2[index] = source[index];
          }
          return array2;
        }
        function copyObject(source, props, object2, customizer) {
          var isNew = !object2;
          object2 || (object2 = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object2, key, newValue);
            } else {
              assignValue(object2, key, newValue);
            }
          }
          return object2;
        }
        function copySymbols(source, object2) {
          return copyObject(source, getSymbols(source), object2);
        }
        function copySymbolsIn(source, object2) {
          return copyObject(source, getSymbolsIn(source), object2);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object2, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard2 = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object2 = Object2(object2);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object2, source, index, customizer);
              }
            }
            return object2;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object2, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object2), props = keysFunc(object2), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object2;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string2) {
            string2 = toString2(string2);
            var strSymbols = hasUnicode(string2) ? stringToArray(string2) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string2) {
            return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object2, iteratee2) {
            return baseInverter(object2, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number2, precision) {
            number2 = toNumber(number2);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number2)) {
              var pair = (toString2(number2) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString2(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number2);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object2) {
            var tag = getTag(object2);
            if (tag == mapTag) {
              return mapToArray(object2);
            }
            if (tag == setTag) {
              return setToPairs(object2);
            }
            return baseToPairs(object2, keysFunc(object2));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object2) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object2, source, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array2);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array2;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array2, other);
          stack.set(other, array2);
          while (++index < arrLength) {
            var arrValue = array2[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array2);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
                return false;
              }
              object2 = object2.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object2, +other);
            case errorTag:
              return object2.name == other.name && object2.message == other.message;
            case regexpTag:
            case stringTag:
              return object2 == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object2.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object2);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object2, other);
              var result2 = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object2);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object2) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object2);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object2;
          }
          var result2 = true;
          stack.set(object2, other);
          stack.set(other, object2);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object2[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object2.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object2);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object2) {
          return baseGetAllKeys(object2, keys, getSymbols);
        }
        function getAllKeysIn(object2) {
          return baseGetAllKeys(object2, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array2 = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array2.length : 0;
          while (length--) {
            var data = array2[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object2 = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object2.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object2) {
          var result2 = keys(object2), length = result2.length;
          while (length--) {
            var key = result2[length], value = object2[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object2, key) {
          var value = getValue(object2, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
          if (object2 == null) {
            return [];
          }
          object2 = Object2(object2);
          return arrayFilter(nativeGetSymbols(object2), function(symbol) {
            return propertyIsEnumerable.call(object2, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
          var result2 = [];
          while (object2) {
            arrayPush(result2, getSymbols(object2));
            object2 = getPrototype(object2);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return {"start": start, "end": end};
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object2, path, hasFunc) {
          path = castPath(path, object2);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object2 != null && hasFunc(object2, key))) {
              break;
            }
            object2 = object2[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object2 == null ? 0 : object2.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
        }
        function initCloneArray(array2) {
          var length = array2.length, result2 = new array2.constructor(length);
          if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
            result2.index = array2.index;
            result2.input = array2.input;
          }
          return result2;
        }
        function initCloneObject(object2) {
          return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
        }
        function initCloneByTag(object2, tag, isDeep) {
          var Ctor = object2.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object2);
            case boolTag:
            case dateTag:
              return new Ctor(+object2);
            case dataViewTag:
              return cloneDataView(object2, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object2, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object2);
            case regexpTag:
              return cloneRegExp(object2);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object2);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type2 = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object2) {
          if (!isObject2(object2)) {
            return false;
          }
          var type2 = typeof index;
          if (type2 == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type2 == "string" && index in object2) {
            return eq(object2[index], value);
          }
          return false;
        }
        function isKey(value, object2) {
          if (isArray(value)) {
            return false;
          }
          var type2 = typeof value;
          if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object2(object2);
        }
        function isKeyable(value) {
          var type2 = typeof value;
          return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject2(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object2) {
            if (object2 == null) {
              return false;
            }
            return object2[key] === srcValue && (srcValue !== undefined2 || key in Object2(object2));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object2) {
          var result2 = [];
          if (object2 != null) {
            for (var key in Object2(object2)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array2 = Array2(length);
            while (++index < length) {
              array2[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array2);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object2, path) {
          return path.length < 2 ? object2 : baseGet(object2, baseSlice(path, 0, -1));
        }
        function reorder(array2, indexes) {
          var arrLength = array2.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array2);
          while (length--) {
            var index = indexes[length];
            array2[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array2;
        }
        function safeGet(object2, key) {
          if (key === "constructor" && typeof object2[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object2[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array2, size2) {
          var index = -1, length = array2.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array2[rand];
            array2[rand] = array2[index];
            array2[index] = value;
          }
          array2.length = size2;
          return array2;
        }
        var stringToPath = memoizeCapped(function(string2) {
          var result2 = [];
          if (string2.charCodeAt(0) === 46) {
            result2.push("");
          }
          string2.replace(rePropName, function(match, number2, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk2(array2, size2, guard2) {
          if (guard2 ? isIterateeCall(array2, size2, guard2) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array2 == null ? 0 : array2.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array2, index, index += size2);
          }
          return result2;
        }
        function compact(array2) {
          var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array2[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array2 = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array2) ? copyArray(array2) : [array2], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array2, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array2, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array2) ? baseDifference(array2, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array2, n, guard2) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function dropRight(array2, n, guard2) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), true) : [];
        }
        function fill(array2, value, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array2, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array2, value, start, end);
        }
        function findIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array2, predicate, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array2, getIteratee(predicate, 3), index, true);
        }
        function flatten(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, 1) : [];
        }
        function flattenDeep(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseFlatten(array2, INFINITY) : [];
        }
        function flattenDepth(array2, depth) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array2, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array2) {
          return array2 && array2.length ? array2[0] : undefined2;
        }
        function indexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array2, value, index);
        }
        function initial(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array2, separator) {
          return array2 == null ? "" : nativeJoin.call(array2, separator);
        }
        function last(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? array2[length - 1] : undefined2;
        }
        function lastIndexOf(array2, value, fromIndex) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array2, value, index) : baseFindIndex(array2, baseIsNaN, index, true);
        }
        function nth(array2, n) {
          return array2 && array2.length ? baseNth(array2, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array2, values2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2) : array2;
        }
        function pullAllBy(array2, values2, iteratee2) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, getIteratee(iteratee2, 2)) : array2;
        }
        function pullAllWith(array2, values2, comparator) {
          return array2 && array2.length && values2 && values2.length ? basePullAll(array2, values2, undefined2, comparator) : array2;
        }
        var pullAt = flatRest(function(array2, indexes) {
          var length = array2 == null ? 0 : array2.length, result2 = baseAt(array2, indexes);
          basePullAt(array2, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array2, predicate) {
          var result2 = [];
          if (!(array2 && array2.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array2.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array2[index];
            if (predicate(value, index, array2)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array2, indexes);
          return result2;
        }
        function reverse(array2) {
          return array2 == null ? array2 : nativeReverse.call(array2);
        }
        function slice(array2, start, end) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array2, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array2, start, end);
        }
        function sortedIndex(array2, value) {
          return baseSortedIndex(array2, value);
        }
        function sortedIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index = baseSortedIndex(array2, value);
            if (index < length && eq(array2[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array2, value) {
          return baseSortedIndex(array2, value, true);
        }
        function sortedLastIndexBy(array2, value, iteratee2) {
          return baseSortedIndexBy(array2, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array2, value) {
          var length = array2 == null ? 0 : array2.length;
          if (length) {
            var index = baseSortedIndex(array2, value, true) - 1;
            if (eq(array2[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array2) {
          return array2 && array2.length ? baseSortedUniq(array2) : [];
        }
        function sortedUniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseSortedUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array2) {
          var length = array2 == null ? 0 : array2.length;
          return length ? baseSlice(array2, 1, length) : [];
        }
        function take(array2, n, guard2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array2, 0, n < 0 ? 0 : n);
        }
        function takeRight(array2, n, guard2) {
          var length = array2 == null ? 0 : array2.length;
          if (!length) {
            return [];
          }
          n = guard2 || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array2, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array2, predicate) {
          return array2 && array2.length ? baseWhile(array2, getIteratee(predicate, 3)) : [];
        }
        var union2 = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array2) {
          return array2 && array2.length ? baseUniq(array2) : [];
        }
        function uniqBy(array2, iteratee2) {
          return array2 && array2.length ? baseUniq(array2, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array2, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array2 && array2.length ? baseUniq(array2, undefined2, comparator) : [];
        }
        function unzip(array2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var length = 0;
          array2 = arrayFilter(array2, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array2, baseProperty(index));
          });
        }
        function unzipWith(array2, iteratee2) {
          if (!(array2 && array2.length)) {
            return [];
          }
          var result2 = unzip(array2);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array2, values2) {
          return isArrayLikeObject(array2) ? baseDifference(array2, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object2) {
            return baseAt(object2, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array2) {
            if (length && !array2.length) {
              array2.push(undefined2);
            }
            return array2;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return {"done": done, "value": value};
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard2) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard2 && isIterateeCall(collection, predicate, guard2)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard2) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard2 ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard2) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard2 ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard2) {
          if (guard2 ? isIterateeCall(collection, n, guard2) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard2) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard2 && isIterateeCall(collection, predicate, guard2)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard2) {
          n = guard2 ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object2, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object2, partials, holders);
        });
        function curry(func, arity, guard2) {
          arity = guard2 ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard2) {
          arity = guard2 ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array2 = args[start], otherArgs = castSlice(args, 0, start);
            if (array2) {
              arrayPush(otherArgs, array2);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object2, source) {
          return source == null || baseConformsTo(object2, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject2(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject2(value) {
          var type2 = typeof value;
          return value != null && (type2 == "object" || type2 == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object2, source) {
          return object2 === source || baseIsMatch(object2, source, getMatchData(source));
        }
        function isMatchWith(object2, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object2, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt2 = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign2 = value < 0 ? -1 : 1;
            return sign2 * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject2(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject2(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString2(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign2 = createAssigner(function(object2, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object2);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object2, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object2, source) {
          copyObject(source, keysIn(source), object2);
        });
        var assignInWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object2, customizer);
        });
        var assignWith = createAssigner(function(object2, source, srcIndex, customizer) {
          copyObject(source, keys(source), object2, customizer);
        });
        var at = flatRest(baseAt);
        function create3(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object2, sources) {
          object2 = Object2(object2);
          var index = -1;
          var length = sources.length;
          var guard2 = length > 2 ? sources[2] : undefined2;
          if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object2[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object2, key)) {
                object2[key] = source[key];
              }
            }
          }
          return object2;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object2, predicate) {
          return baseFindKey(object2, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object2, iteratee2) {
          return object2 == null ? object2 : baseFor(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object2, iteratee2) {
          return object2 == null ? object2 : baseForRight(object2, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object2, iteratee2) {
          return object2 && baseForOwn(object2, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object2, iteratee2) {
          return object2 && baseForOwnRight(object2, getIteratee(iteratee2, 3));
        }
        function functions(object2) {
          return object2 == null ? [] : baseFunctions(object2, keys(object2));
        }
        function functionsIn(object2) {
          return object2 == null ? [] : baseFunctions(object2, keysIn(object2));
        }
        function get2(object2, path, defaultValue) {
          var result2 = object2 == null ? undefined2 : baseGet(object2, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object2, path) {
          return object2 != null && hasPath(object2, path, baseHas);
        }
        function hasIn(object2, path) {
          return object2 != null && hasPath(object2, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
        }
        function keysIn(object2) {
          return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
        }
        function mapKeys(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, iteratee2(value, key, object3), value);
          });
          return result2;
        }
        function mapValues(object2, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object2, function(value, key, object3) {
            baseAssignValue(result2, key, iteratee2(value, key, object3));
          });
          return result2;
        }
        var merge = createAssigner(function(object2, source, srcIndex) {
          baseMerge(object2, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object2, source, srcIndex, customizer) {
          baseMerge(object2, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object2, paths) {
          var result2 = {};
          if (object2 == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object2);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object2, getAllKeysIn(object2), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object2, predicate) {
          return pickBy(object2, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object2, paths) {
          return object2 == null ? {} : basePick(object2, paths);
        });
        function pickBy(object2, predicate) {
          if (object2 == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object2), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object2, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object2, path, defaultValue) {
          path = castPath(path, object2);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object2 = undefined2;
          }
          while (++index < length) {
            var value = object2 == null ? undefined2 : object2[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object2 = isFunction(value) ? value.call(object2) : value;
          }
          return object2;
        }
        function set(object2, path, value) {
          return object2 == null ? object2 : baseSet(object2, path, value);
        }
        function setWith(object2, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object2 == null ? object2 : baseSet(object2, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object2, iteratee2, accumulator) {
          var isArr = isArray(object2), isArrLike = isArr || isBuffer(object2) || isTypedArray(object2);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object2 && object2.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object2)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object2)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object2, function(value, index, object3) {
            return iteratee2(accumulator, value, index, object3);
          });
          return accumulator;
        }
        function unset(object2, path) {
          return object2 == null ? true : baseUnset(object2, path);
        }
        function update(object2, path, updater) {
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater));
        }
        function updateWith(object2, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object2 == null ? object2 : baseUpdate(object2, path, castFunction(updater), customizer);
        }
        function values(object2) {
          return object2 == null ? [] : baseValues(object2, keys(object2));
        }
        function valuesIn(object2) {
          return object2 == null ? [] : baseValues(object2, keysIn(object2));
        }
        function clamp(number2, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number2), lower, upper);
        }
        function inRange(number2, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number2 = toNumber(number2);
          return baseInRange(number2, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string2) {
          return upperFirst(toString2(string2).toLowerCase());
        }
        function deburr(string2) {
          string2 = toString2(string2);
          return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string2, target, position) {
          string2 = toString2(string2);
          target = baseToString(target);
          var length = string2.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string2.slice(position, end) == target;
        }
        function escape(string2) {
          string2 = toString2(string2);
          return string2 && reHasUnescapedHtml.test(string2) ? string2.replace(reUnescapedHtml, escapeHtmlChar) : string2;
        }
        function escapeRegExp(string2) {
          string2 = toString2(string2);
          return string2 && reHasRegExpChar.test(string2) ? string2.replace(reRegExpChar, "\\$&") : string2;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          if (!length || strLength >= length) {
            return string2;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string2 + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? string2 + createPadding(length - strLength, chars) : string2;
        }
        function padStart(string2, length, chars) {
          string2 = toString2(string2);
          length = toInteger(length);
          var strLength = length ? stringSize(string2) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string2 : string2;
        }
        function parseInt2(string2, radix, guard2) {
          if (guard2 || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString2(string2).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string2, n, guard2) {
          if (guard2 ? isIterateeCall(string2, n, guard2) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString2(string2), n);
        }
        function replace() {
          var args = arguments, string2 = toString2(args[0]);
          return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string2, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string2, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string2 = toString2(string2);
          if (string2 && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string2)) {
              return castSlice(stringToArray(string2), 0, limit);
            }
          }
          return string2.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string2, target, position) {
          string2 = toString2(string2);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string2.length);
          target = baseToString(target);
          return string2.slice(position, position + target.length) == target;
        }
        function template(string2, options, guard2) {
          var settings = lodash.templateSettings;
          if (guard2 && isIterateeCall(string2, options, guard2)) {
            options = undefined2;
          }
          string2 = toString2(string2);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string2.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString2(value).toLowerCase();
        }
        function toUpper(value) {
          return toString2(value).toUpperCase();
        }
        function trim(string2, chars, guard2) {
          string2 = toString2(string2);
          if (string2 && (guard2 || chars === undefined2)) {
            return baseTrim(string2);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string2, chars, guard2) {
          string2 = toString2(string2);
          if (string2 && (guard2 || chars === undefined2)) {
            return string2.slice(0, trimmedEndIndex(string2) + 1);
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string2, chars, guard2) {
          string2 = toString2(string2);
          if (string2 && (guard2 || chars === undefined2)) {
            return string2.replace(reTrimStart, "");
          }
          if (!string2 || !(chars = baseToString(chars))) {
            return string2;
          }
          var strSymbols = stringToArray(string2), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string2, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string2 = toString2(string2);
          var strLength = string2.length;
          if (hasUnicode(string2)) {
            var strSymbols = stringToArray(string2);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string2;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string2.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string2.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString2(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string2.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape2(string2) {
          string2 = toString2(string2);
          return string2 && reHasEscapedHtml.test(string2) ? string2.replace(reEscapedHtml, unescapeHtmlChar) : string2;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string2, pattern, guard2) {
          string2 = toString2(string2);
          pattern = guard2 ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
          }
          return string2.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object2, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object2, key, bind(object2[key], object2));
          });
          return object2;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object2) {
            return baseInvoke(object2, path, args);
          };
        });
        var methodOf = baseRest(function(object2, args) {
          return function(path) {
            return baseInvoke(object2, path, args);
          };
        });
        function mixin(object2, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject2(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object2;
            object2 = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object2);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object2[methodName] = func;
            if (isFunc) {
              object2.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object2(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({"func": func, "args": arguments, "thisArg": object2});
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object2, arrayPush([this.value()], arguments));
              };
            }
          });
          return object2;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object2) {
          return function(path) {
            return object2 == null ? undefined2 : baseGet(object2, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString2(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString2(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseGt) : undefined2;
        }
        function maxBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array2) {
          return baseMean(array2, identity);
        }
        function meanBy(array2, iteratee2) {
          return baseMean(array2, getIteratee(iteratee2, 2));
        }
        function min(array2) {
          return array2 && array2.length ? baseExtremum(array2, identity, baseLt) : undefined2;
        }
        function minBy(array2, iteratee2) {
          return array2 && array2.length ? baseExtremum(array2, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array2) {
          return array2 && array2.length ? baseSum(array2, identity) : 0;
        }
        function sumBy(array2, iteratee2) {
          return array2 && array2.length ? baseSum(array2, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign2;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk2;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create3;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union2;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get2;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject2;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt2;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString2;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape2;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), {"chain": false});
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type2 = index + 1, isFilter = type2 == LAZY_FILTER_FLAG || type2 == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type2
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({"func": thru, "args": [interceptor], "thisArg": undefined2});
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({"name": methodName, "func": lodashFunc});
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _4 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _4;
        define(function() {
          return _4;
        });
      } else if (freeModule) {
        (freeModule.exports = _4)._ = _4;
        freeExports._ = _4;
      } else {
        root._ = _4;
      }
    }).call(exports);
  }
});

// src/index.ts
__markAsModule(exports);
__export(exports, {
  Chain: () => Chain,
  DetachedEthosConnectProvider: () => DetachedEthosConnectProvider_default,
  EthosConnectProvider: () => EthosConnectProvider_default,
  EthosConnectStatus: () => EthosConnectStatus,
  IntentScope: () => IntentScope,
  SignInButton: () => SignInButton_default,
  TransactionBlock: () => TransactionBlock,
  ethos: () => ethos,
  verifyMessage: () => verifyMessage
});

// node_modules/@mysten/sui.js/dist/index.mjs
var import_tweetnacl = __toModule(require_nacl_fast());

// node_modules/@mysten/bcs/dist/index.mjs
var import_bs58 = __toModule(require_bs58());
function b64ToUint6(nChr) {
  return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
}
function fromB64(sBase64, nBlocksSize) {
  var sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, ""), nInLen = sB64Enc.length, nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);
  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 6 * (3 - nMod4);
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
    }
  }
  return taBytes;
}
function uint6ToB64(nUint6) {
  return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65;
}
function toB64(aBytes) {
  var nMod3 = 2, sB64Enc = "";
  for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
    nMod3 = nIdx % 3;
    if (nIdx > 0 && nIdx * 4 / 3 % 76 === 0) {
      sB64Enc += "";
    }
    nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
    if (nMod3 === 2 || aBytes.length - nIdx === 1) {
      sB64Enc += String.fromCodePoint(uint6ToB64(nUint24 >>> 18 & 63), uint6ToB64(nUint24 >>> 12 & 63), uint6ToB64(nUint24 >>> 6 & 63), uint6ToB64(nUint24 & 63));
      nUint24 = 0;
    }
  }
  return sB64Enc.slice(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==");
}
function fromHEX(hexStr) {
  let intArr = hexStr.replace("0x", "").match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
  if (intArr === null) {
    throw new Error(`Unable to parse HEX: ${hexStr}`);
  }
  return Uint8Array.from(intArr);
}
function toHEX(bytes) {
  return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
}
var SUI_ADDRESS_LENGTH = 32;
function toLittleEndian(bigint, size) {
  let result = new Uint8Array(size);
  let i = 0;
  while (bigint > 0) {
    result[i] = Number(bigint % BigInt(256));
    bigint = bigint / BigInt(256);
    i += 1;
  }
  return result;
}
var toB58 = (buffer) => import_bs58.default.encode(buffer);
var fromB58 = (str) => import_bs58.default.decode(str);
var BcsReader = class {
  constructor(data) {
    this.bytePosition = 0;
    this.dataView = new DataView(data.buffer);
  }
  shift(bytes) {
    this.bytePosition += bytes;
    return this;
  }
  read8() {
    let value = this.dataView.getUint8(this.bytePosition);
    this.shift(1);
    return value;
  }
  read16() {
    let value = this.dataView.getUint16(this.bytePosition, true);
    this.shift(2);
    return value;
  }
  read32() {
    let value = this.dataView.getUint32(this.bytePosition, true);
    this.shift(4);
    return value;
  }
  read64() {
    let value1 = this.read32();
    let value2 = this.read32();
    let result = value2.toString(16) + value1.toString(16).padStart(8, "0");
    return BigInt("0x" + result).toString(10);
  }
  read128() {
    let value1 = BigInt(this.read64());
    let value2 = BigInt(this.read64());
    let result = value2.toString(16) + value1.toString(16).padStart(8, "0");
    return BigInt("0x" + result).toString(10);
  }
  read256() {
    let value1 = BigInt(this.read128());
    let value2 = BigInt(this.read128());
    let result = value2.toString(16) + value1.toString(16).padStart(16, "0");
    return BigInt("0x" + result).toString(10);
  }
  readBytes(num) {
    let start = this.bytePosition + this.dataView.byteOffset;
    let value = new Uint8Array(this.dataView.buffer, start, num);
    this.shift(num);
    return value;
  }
  readULEB() {
    let start = this.bytePosition + this.dataView.byteOffset;
    let buffer = new Uint8Array(this.dataView.buffer, start);
    let {value, length} = ulebDecode(buffer);
    this.shift(length);
    return value;
  }
  readVec(cb) {
    let length = this.readULEB();
    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(cb(this, i, length));
    }
    return result;
  }
};
var BcsWriter = class {
  constructor({
    size = 1024,
    maxSize,
    allocateSize = 1024
  } = {}) {
    this.bytePosition = 0;
    this.size = size;
    this.maxSize = maxSize || size;
    this.allocateSize = allocateSize;
    this.dataView = new DataView(new ArrayBuffer(size));
  }
  ensureSizeOrGrow(bytes) {
    const requiredSize = this.bytePosition + bytes;
    if (requiredSize > this.size) {
      const nextSize = Math.min(this.maxSize, this.size + this.allocateSize);
      if (requiredSize > nextSize) {
        throw new Error(`Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${requiredSize}`);
      }
      this.size = nextSize;
      const nextBuffer = new ArrayBuffer(this.size);
      new Uint8Array(nextBuffer).set(new Uint8Array(this.dataView.buffer));
      this.dataView = new DataView(nextBuffer);
    }
  }
  shift(bytes) {
    this.bytePosition += bytes;
    return this;
  }
  write8(value) {
    this.ensureSizeOrGrow(1);
    this.dataView.setUint8(this.bytePosition, Number(value));
    return this.shift(1);
  }
  write16(value) {
    this.ensureSizeOrGrow(2);
    this.dataView.setUint16(this.bytePosition, Number(value), true);
    return this.shift(2);
  }
  write32(value) {
    this.ensureSizeOrGrow(4);
    this.dataView.setUint32(this.bytePosition, Number(value), true);
    return this.shift(4);
  }
  write64(value) {
    toLittleEndian(BigInt(value), 8).forEach((el) => this.write8(el));
    return this;
  }
  write128(value) {
    toLittleEndian(BigInt(value), 16).forEach((el) => this.write8(el));
    return this;
  }
  write256(value) {
    toLittleEndian(BigInt(value), 32).forEach((el) => this.write8(el));
    return this;
  }
  writeULEB(value) {
    ulebEncode(value).forEach((el) => this.write8(el));
    return this;
  }
  writeVec(vector, cb) {
    this.writeULEB(vector.length);
    Array.from(vector).forEach((el, i) => cb(this, el, i, vector.length));
    return this;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.bytePosition; i++) {
      yield this.dataView.getUint8(i);
    }
    return this.toBytes();
  }
  toBytes() {
    return new Uint8Array(this.dataView.buffer.slice(0, this.bytePosition));
  }
  toString(encoding) {
    return encodeStr(this.toBytes(), encoding);
  }
};
function ulebEncode(num) {
  let arr = [];
  let len = 0;
  if (num === 0) {
    return [0];
  }
  while (num > 0) {
    arr[len] = num & 127;
    if (num >>= 7) {
      arr[len] |= 128;
    }
    len += 1;
  }
  return arr;
}
function ulebDecode(arr) {
  let total = 0;
  let shift = 0;
  let len = 0;
  while (true) {
    let byte = arr[len];
    len += 1;
    total |= (byte & 127) << shift;
    if ((byte & 128) === 0) {
      break;
    }
    shift += 7;
  }
  return {
    value: total,
    length: len
  };
}
var _BCS = class {
  constructor(schema) {
    this.types = /* @__PURE__ */ new Map();
    this.counter = 0;
    if (schema instanceof _BCS) {
      this.schema = schema.schema;
      this.types = new Map(schema.types);
      return;
    }
    this.schema = schema;
    this.registerAddressType(_BCS.ADDRESS, schema.addressLength, schema.addressEncoding);
    this.registerVectorType(schema.vectorType);
    if (schema.types && schema.types.structs) {
      for (let name of Object.keys(schema.types.structs)) {
        this.registerStructType(name, schema.types.structs[name]);
      }
    }
    if (schema.types && schema.types.enums) {
      for (let name of Object.keys(schema.types.enums)) {
        this.registerEnumType(name, schema.types.enums[name]);
      }
    }
    if (schema.types && schema.types.aliases) {
      for (let name of Object.keys(schema.types.aliases)) {
        this.registerAlias(name, schema.types.aliases[name]);
      }
    }
    if (schema.withPrimitives !== false) {
      registerPrimitives(this);
    }
  }
  tempKey() {
    return `bcs-struct-${++this.counter}`;
  }
  ser(type2, data, options) {
    if (typeof type2 === "string" || Array.isArray(type2)) {
      const {name, params} = this.parseTypeName(type2);
      return this.getTypeInterface(name).encode(this, data, options, params);
    }
    if (typeof type2 === "object") {
      const key = this.tempKey();
      const temp = new _BCS(this);
      return temp.registerStructType(key, type2).ser(key, data, options);
    }
    throw new Error(`Incorrect type passed into the '.ser()' function. 
${JSON.stringify(type2)}`);
  }
  de(type2, data, encoding) {
    if (typeof data === "string") {
      if (encoding) {
        data = decodeStr(data, encoding);
      } else {
        throw new Error("To pass a string to `bcs.de`, specify encoding");
      }
    }
    if (typeof type2 === "string" || Array.isArray(type2)) {
      const {name, params} = this.parseTypeName(type2);
      return this.getTypeInterface(name).decode(this, data, params);
    }
    if (typeof type2 === "object") {
      const temp = new _BCS(this);
      const key = this.tempKey();
      return temp.registerStructType(key, type2).de(key, data, encoding);
    }
    throw new Error(`Incorrect type passed into the '.de()' function. 
${JSON.stringify(type2)}`);
  }
  hasType(type2) {
    return this.types.has(type2);
  }
  registerAlias(name, forType) {
    this.types.set(name, forType);
    return this;
  }
  registerType(typeName, encodeCb, decodeCb, validateCb = () => true) {
    const {name, params: generics} = this.parseTypeName(typeName);
    this.types.set(name, {
      encode(self2, data, options, typeParams) {
        const typeMap = generics.reduce((acc, value, index) => {
          return Object.assign(acc, {[value]: typeParams[index]});
        }, {});
        return this._encodeRaw.call(self2, new BcsWriter(options), data, typeParams, typeMap);
      },
      decode(self2, data, typeParams) {
        const typeMap = generics.reduce((acc, value, index) => {
          return Object.assign(acc, {[value]: typeParams[index]});
        }, {});
        return this._decodeRaw.call(self2, new BcsReader(data), typeParams, typeMap);
      },
      _encodeRaw(writer, data, typeParams, typeMap) {
        if (validateCb(data)) {
          return encodeCb.call(this, writer, data, typeParams, typeMap);
        } else {
          throw new Error(`Validation failed for type ${name}, data: ${data}`);
        }
      },
      _decodeRaw(reader, typeParams, typeMap) {
        return decodeCb.call(this, reader, typeParams, typeMap);
      }
    });
    return this;
  }
  registerAddressType(name, length, encoding = "hex") {
    switch (encoding) {
      case "base64":
        return this.registerType(name, function encodeAddress(writer, data) {
          return fromB64(data).reduce((writer2, el) => writer2.write8(el), writer);
        }, function decodeAddress(reader) {
          return toB64(reader.readBytes(length));
        });
      case "hex":
        return this.registerType(name, function encodeAddress(writer, data) {
          return fromHEX(data).reduce((writer2, el) => writer2.write8(el), writer);
        }, function decodeAddress(reader) {
          return toHEX(reader.readBytes(length));
        });
      default:
        throw new Error("Unsupported encoding! Use either hex or base64");
    }
  }
  registerVectorType(typeName) {
    let {name, params} = this.parseTypeName(typeName);
    if (params.length > 1) {
      throw new Error("Vector can have only one type parameter; got " + name);
    }
    return this.registerType(typeName, function encodeVector(writer, data, typeParams, typeMap) {
      return writer.writeVec(data, (writer2, el) => {
        let elementType = typeParams[0];
        if (!elementType) {
          throw new Error(`Incorrect number of type parameters passed a to vector '${typeName}'`);
        }
        let {name: name2, params: params2} = this.parseTypeName(elementType);
        if (this.hasType(name2)) {
          return this.getTypeInterface(name2)._encodeRaw.call(this, writer2, el, params2, typeMap);
        }
        if (!(name2 in typeMap)) {
          throw new Error(`Unable to find a matching type definition for ${name2} in vector; make sure you passed a generic`);
        }
        let {name: innerName, params: innerParams} = this.parseTypeName(typeMap[name2]);
        return this.getTypeInterface(innerName)._encodeRaw.call(this, writer2, el, innerParams, typeMap);
      });
    }, function decodeVector(reader, typeParams, typeMap) {
      return reader.readVec((reader2) => {
        let elementType = typeParams[0];
        if (!elementType) {
          throw new Error(`Incorrect number of type parameters passed to a vector '${typeName}'`);
        }
        let {name: name2, params: params2} = this.parseTypeName(elementType);
        if (this.hasType(name2)) {
          return this.getTypeInterface(name2)._decodeRaw.call(this, reader2, params2, typeMap);
        }
        if (!(name2 in typeMap)) {
          throw new Error(`Unable to find a matching type definition for ${name2} in vector; make sure you passed a generic`);
        }
        let {name: innerName, params: innerParams} = this.parseTypeName(typeMap[name2]);
        this.getTypeInterface(innerName)._decodeRaw.call(this, reader2, innerParams, typeMap);
      });
    });
  }
  registerStructType(typeName, fields) {
    for (let key in fields) {
      let internalName = this.tempKey();
      let value = fields[key];
      if (!Array.isArray(value) && typeof value !== "string") {
        fields[key] = internalName;
        this.registerStructType(internalName, value);
      }
    }
    let struct = Object.freeze(fields);
    let canonicalOrder = Object.keys(struct);
    let {name: structName, params: generics} = this.parseTypeName(typeName);
    return this.registerType(typeName, function encodeStruct(writer, data, typeParams, typeMap) {
      if (!data || data.constructor !== Object) {
        throw new Error(`Expected ${structName} to be an Object, got: ${data}`);
      }
      if (typeParams.length !== generics.length) {
        throw new Error(`Incorrect number of generic parameters passed; expected: ${generics.length}, got: ${typeParams.length}`);
      }
      for (let key of canonicalOrder) {
        if (!(key in data)) {
          throw new Error(`Struct ${structName} requires field ${key}:${struct[key]}`);
        }
        const {name: fieldType, params: fieldParams} = this.parseTypeName(struct[key]);
        if (!generics.includes(fieldType)) {
          this.getTypeInterface(fieldType)._encodeRaw.call(this, writer, data[key], fieldParams, typeMap);
        } else {
          const paramIdx = generics.indexOf(fieldType);
          let {name, params} = this.parseTypeName(typeParams[paramIdx]);
          if (this.hasType(name)) {
            this.getTypeInterface(name)._encodeRaw.call(this, writer, data[key], params, typeMap);
            continue;
          }
          if (!(name in typeMap)) {
            throw new Error(`Unable to find a matching type definition for ${name} in ${structName}; make sure you passed a generic`);
          }
          let {name: innerName, params: innerParams} = this.parseTypeName(typeMap[name]);
          this.getTypeInterface(innerName)._encodeRaw.call(this, writer, data[key], innerParams, typeMap);
        }
      }
      return writer;
    }, function decodeStruct(reader, typeParams, typeMap) {
      if (typeParams.length !== generics.length) {
        throw new Error(`Incorrect number of generic parameters passed; expected: ${generics.length}, got: ${typeParams.length}`);
      }
      let result = {};
      for (let key of canonicalOrder) {
        const {name: fieldName, params: fieldParams} = this.parseTypeName(struct[key]);
        if (!generics.includes(fieldName)) {
          result[key] = this.getTypeInterface(fieldName)._decodeRaw.call(this, reader, fieldParams, typeMap);
        } else {
          const paramIdx = generics.indexOf(fieldName);
          let {name, params} = this.parseTypeName(typeParams[paramIdx]);
          if (this.hasType(name)) {
            result[key] = this.getTypeInterface(name)._decodeRaw.call(this, reader, params, typeMap);
            continue;
          }
          if (!(name in typeMap)) {
            throw new Error(`Unable to find a matching type definition for ${name} in ${structName}; make sure you passed a generic`);
          }
          let {name: innerName, params: innerParams} = this.parseTypeName(typeMap[name]);
          result[key] = this.getTypeInterface(innerName)._decodeRaw.call(this, reader, innerParams, typeMap);
        }
      }
      return result;
    });
  }
  registerEnumType(typeName, variants) {
    for (let key in variants) {
      let internalName = this.tempKey();
      let value = variants[key];
      if (value !== null && !Array.isArray(value) && typeof value !== "string") {
        variants[key] = internalName;
        this.registerStructType(internalName, value);
      }
    }
    let struct = Object.freeze(variants);
    let canonicalOrder = Object.keys(struct);
    let {name, params: canonicalTypeParams} = this.parseTypeName(typeName);
    return this.registerType(typeName, function encodeEnum(writer, data, typeParams, typeMap) {
      if (!data) {
        throw new Error(`Unable to write enum "${name}", missing data.
Received: "${data}"`);
      }
      if (typeof data !== "object") {
        throw new Error(`Incorrect data passed into enum "${name}", expected object with properties: "${canonicalOrder.join(" | ")}".
Received: "${JSON.stringify(data)}"`);
      }
      let key = Object.keys(data)[0];
      if (key === void 0) {
        throw new Error(`Empty object passed as invariant of the enum "${name}"`);
      }
      let orderByte = canonicalOrder.indexOf(key);
      if (orderByte === -1) {
        throw new Error(`Unknown invariant of the enum "${name}", allowed values: "${canonicalOrder.join(" | ")}"; received "${key}"`);
      }
      let invariant = canonicalOrder[orderByte];
      let invariantType = struct[invariant];
      writer.write8(orderByte);
      if (invariantType === null) {
        return writer;
      }
      let paramIndex = canonicalTypeParams.indexOf(invariantType);
      let typeOrParam = paramIndex === -1 ? invariantType : typeParams[paramIndex];
      {
        let {name: name2, params} = this.parseTypeName(typeOrParam);
        return this.getTypeInterface(name2)._encodeRaw.call(this, writer, data[key], params, typeMap);
      }
    }, function decodeEnum(reader, typeParams, typeMap) {
      let orderByte = reader.readULEB();
      let invariant = canonicalOrder[orderByte];
      let invariantType = struct[invariant];
      if (orderByte === -1) {
        throw new Error(`Decoding type mismatch, expected enum "${name}" invariant index, received "${orderByte}"`);
      }
      if (invariantType === null) {
        return {[invariant]: true};
      }
      let paramIndex = canonicalTypeParams.indexOf(invariantType);
      let typeOrParam = paramIndex === -1 ? invariantType : typeParams[paramIndex];
      {
        let {name: name2, params} = this.parseTypeName(typeOrParam);
        return {
          [invariant]: this.getTypeInterface(name2)._decodeRaw.call(this, reader, params, typeMap)
        };
      }
    });
  }
  getTypeInterface(type2) {
    let typeInterface = this.types.get(type2);
    if (typeof typeInterface === "string") {
      let chain = [];
      while (typeof typeInterface === "string") {
        if (chain.includes(typeInterface)) {
          throw new Error(`Recursive definition found: ${chain.join(" -> ")} -> ${typeInterface}`);
        }
        chain.push(typeInterface);
        typeInterface = this.types.get(typeInterface);
      }
    }
    if (typeInterface === void 0) {
      throw new Error(`Type ${type2} is not registered`);
    }
    return typeInterface;
  }
  parseTypeName(name) {
    if (Array.isArray(name)) {
      let [typeName2, ...params2] = name;
      return {name: typeName2, params: params2};
    }
    if (typeof name !== "string") {
      throw new Error(`Illegal type passed as a name of the type: ${name}`);
    }
    let [left, right] = this.schema.genericSeparators || ["<", ">"];
    let l_bound = name.indexOf(left);
    let r_bound = Array.from(name).reverse().indexOf(right);
    if (l_bound === -1 && r_bound === -1) {
      return {name, params: []};
    }
    if (l_bound === -1 || r_bound === -1) {
      throw new Error(`Unclosed generic in name '${name}'`);
    }
    let typeName = name.slice(0, l_bound);
    let params = name.slice(l_bound + 1, name.length - r_bound - 1).split(",").map((e) => e.trim());
    return {name: typeName, params};
  }
};
var BCS = _BCS;
BCS.U8 = "u8";
BCS.U16 = "u16";
BCS.U32 = "u32";
BCS.U64 = "u64";
BCS.U128 = "u128";
BCS.U256 = "u256";
BCS.BOOL = "bool";
BCS.VECTOR = "vector";
BCS.ADDRESS = "address";
BCS.STRING = "string";
BCS.HEX = "hex-string";
BCS.BASE58 = "base58-string";
BCS.BASE64 = "base64-string";
function encodeStr(data, encoding) {
  switch (encoding) {
    case "base58":
      return toB58(data);
    case "base64":
      return toB64(data);
    case "hex":
      return toHEX(data);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function decodeStr(data, encoding) {
  switch (encoding) {
    case "base58":
      return fromB58(data);
    case "base64":
      return fromB64(data);
    case "hex":
      return fromHEX(data);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function registerPrimitives(bcs2) {
  bcs2.registerType(BCS.U8, function(writer, data) {
    return writer.write8(data);
  }, function(reader) {
    return reader.read8();
  }, (u8) => u8 < 256);
  bcs2.registerType(BCS.U16, function(writer, data) {
    return writer.write16(data);
  }, function(reader) {
    return reader.read16();
  }, (u16) => u16 < 65536);
  bcs2.registerType(BCS.U32, function(writer, data) {
    return writer.write32(data);
  }, function(reader) {
    return reader.read32();
  }, (u32) => u32 <= 4294967296n);
  bcs2.registerType(BCS.U64, function(writer, data) {
    return writer.write64(data);
  }, function(reader) {
    return reader.read64();
  });
  bcs2.registerType(BCS.U128, function(writer, data) {
    return writer.write128(data);
  }, function(reader) {
    return reader.read128();
  });
  bcs2.registerType(BCS.U256, function(writer, data) {
    return writer.write256(data);
  }, function(reader) {
    return reader.read256();
  });
  bcs2.registerType(BCS.BOOL, function(writer, data) {
    return writer.write8(data);
  }, function(reader) {
    return reader.read8().toString(10) === "1";
  });
  bcs2.registerType(BCS.STRING, function(writer, data) {
    return writer.writeVec(Array.from(data), (writer2, el) => writer2.write8(el.charCodeAt(0)));
  }, function(reader) {
    return reader.readVec((reader2) => reader2.read8()).map((el) => String.fromCharCode(Number(el))).join("");
  }, (_str) => true);
  bcs2.registerType(BCS.HEX, function(writer, data) {
    return writer.writeVec(Array.from(fromHEX(data)), (writer2, el) => writer2.write8(el));
  }, function(reader) {
    let bytes = reader.readVec((reader2) => reader2.read8());
    return toHEX(new Uint8Array(bytes));
  });
  bcs2.registerType(BCS.BASE58, function(writer, data) {
    return writer.writeVec(Array.from(fromB58(data)), (writer2, el) => writer2.write8(el));
  }, function(reader) {
    let bytes = reader.readVec((reader2) => reader2.read8());
    return toB58(new Uint8Array(bytes));
  });
  bcs2.registerType(BCS.BASE64, function(writer, data) {
    return writer.writeVec(Array.from(fromB64(data)), (writer2, el) => writer2.write8(el));
  }, function(reader) {
    let bytes = reader.readVec((reader2) => reader2.read8());
    return toB64(new Uint8Array(bytes));
  });
}
function getSuiMoveConfig() {
  return {
    genericSeparators: ["<", ">"],
    vectorType: "vector",
    addressLength: SUI_ADDRESS_LENGTH,
    addressEncoding: "hex"
  };
}

// node_modules/@mysten/sui.js/dist/index.mjs
var import_sha2562 = __toModule(require_sha256());
var import_blake2b = __toModule(require_blake2b());
var import_utils2 = __toModule(require_utils());

// node_modules/superstruct/dist/index.mjs
var StructError = class extends TypeError {
  constructor(failure, failures) {
    let cached;
    const {message, explanation, ...rest} = failure;
    const {path} = failure;
    const msg = path.length === 0 ? message : `At path: ${path.join(".")} -- ${message}`;
    super(explanation ?? msg);
    if (explanation != null)
      this.cause = msg;
    Object.assign(this, rest);
    this.name = this.constructor.name;
    this.failures = () => {
      return cached ?? (cached = [failure, ...failures()]);
    };
  }
};
function isIterable(x) {
  return isObject(x) && typeof x[Symbol.iterator] === "function";
}
function isObject(x) {
  return typeof x === "object" && x != null;
}
function print(value) {
  if (typeof value === "symbol") {
    return value.toString();
  }
  return typeof value === "string" ? JSON.stringify(value) : `${value}`;
}
function shiftIterator(input) {
  const {done, value} = input.next();
  return done ? void 0 : value;
}
function toFailure(result, context, struct, value) {
  if (result === true) {
    return;
  } else if (result === false) {
    result = {};
  } else if (typeof result === "string") {
    result = {message: result};
  }
  const {path, branch} = context;
  const {type: type2} = struct;
  const {refinement, message = `Expected a value of type \`${type2}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\``} = result;
  return {
    value,
    type: type2,
    refinement,
    key: path[path.length - 1],
    path,
    branch,
    ...result,
    message
  };
}
function* toFailures(result, context, struct, value) {
  if (!isIterable(result)) {
    result = [result];
  }
  for (const r of result) {
    const failure = toFailure(r, context, struct, value);
    if (failure) {
      yield failure;
    }
  }
}
function* run(value, struct, options = {}) {
  const {path = [], branch = [value], coerce = false, mask: mask2 = false} = options;
  const ctx = {path, branch};
  if (coerce) {
    value = struct.coercer(value, ctx);
    if (mask2 && struct.type !== "type" && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) {
      for (const key in value) {
        if (struct.schema[key] === void 0) {
          delete value[key];
        }
      }
    }
  }
  let status = "valid";
  for (const failure of struct.validator(value, ctx)) {
    failure.explanation = options.message;
    status = "not_valid";
    yield [failure, void 0];
  }
  for (let [k, v, s] of struct.entries(value, ctx)) {
    const ts = run(v, s, {
      path: k === void 0 ? path : [...path, k],
      branch: k === void 0 ? branch : [...branch, v],
      coerce,
      mask: mask2,
      message: options.message
    });
    for (const t of ts) {
      if (t[0]) {
        status = t[0].refinement != null ? "not_refined" : "not_valid";
        yield [t[0], void 0];
      } else if (coerce) {
        v = t[1];
        if (k === void 0) {
          value = v;
        } else if (value instanceof Map) {
          value.set(k, v);
        } else if (value instanceof Set) {
          value.add(v);
        } else if (isObject(value)) {
          if (v !== void 0 || k in value)
            value[k] = v;
        }
      }
    }
  }
  if (status !== "not_valid") {
    for (const failure of struct.refiner(value, ctx)) {
      failure.explanation = options.message;
      status = "not_refined";
      yield [failure, void 0];
    }
  }
  if (status === "valid") {
    yield [void 0, value];
  }
}
var Struct = class {
  constructor(props) {
    const {type: type2, schema, validator, refiner, coercer = (value) => value, entries = function* () {
    }} = props;
    this.type = type2;
    this.schema = schema;
    this.entries = entries;
    this.coercer = coercer;
    if (validator) {
      this.validator = (value, context) => {
        const result = validator(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.validator = () => [];
    }
    if (refiner) {
      this.refiner = (value, context) => {
        const result = refiner(value, context);
        return toFailures(result, context, this, value);
      };
    } else {
      this.refiner = () => [];
    }
  }
  assert(value, message) {
    return assert(value, this, message);
  }
  create(value, message) {
    return create(value, this, message);
  }
  is(value) {
    return is(value, this);
  }
  mask(value, message) {
    return mask(value, this, message);
  }
  validate(value, options = {}) {
    return validate(value, this, options);
  }
};
function assert(value, struct, message) {
  const result = validate(value, struct, {message});
  if (result[0]) {
    throw result[0];
  }
}
function create(value, struct, message) {
  const result = validate(value, struct, {coerce: true, message});
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function mask(value, struct, message) {
  const result = validate(value, struct, {coerce: true, mask: true, message});
  if (result[0]) {
    throw result[0];
  } else {
    return result[1];
  }
}
function is(value, struct) {
  const result = validate(value, struct);
  return !result[0];
}
function validate(value, struct, options = {}) {
  const tuples = run(value, struct, options);
  const tuple2 = shiftIterator(tuples);
  if (tuple2[0]) {
    const error = new StructError(tuple2[0], function* () {
      for (const t of tuples) {
        if (t[0]) {
          yield t[0];
        }
      }
    });
    return [error, void 0];
  } else {
    const v = tuple2[1];
    return [void 0, v];
  }
}
function assign(...Structs) {
  const isType = Structs[0].type === "type";
  const schemas = Structs.map((s) => s.schema);
  const schema = Object.assign({}, ...schemas);
  return isType ? type(schema) : object(schema);
}
function define2(name, validator) {
  return new Struct({type: name, schema: null, validator});
}
function any() {
  return define2("any", () => true);
}
function array(Element) {
  return new Struct({
    type: "array",
    schema: Element,
    *entries(value) {
      if (Element && Array.isArray(value)) {
        for (const [i, v] of value.entries()) {
          yield [i, v, Element];
        }
      }
    },
    coercer(value) {
      return Array.isArray(value) ? value.slice() : value;
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array value, but received: ${print(value)}`;
    }
  });
}
function boolean() {
  return define2("boolean", (value) => {
    return typeof value === "boolean";
  });
}
function integer() {
  return define2("integer", (value) => {
    return typeof value === "number" && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${print(value)}`;
  });
}
function literal(constant) {
  const description = print(constant);
  const t = typeof constant;
  return new Struct({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? constant : null,
    validator(value) {
      return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
    }
  });
}
function never() {
  return define2("never", () => false);
}
function nullable(struct) {
  return new Struct({
    ...struct,
    validator: (value, ctx) => value === null || struct.validator(value, ctx),
    refiner: (value, ctx) => value === null || struct.refiner(value, ctx)
  });
}
function number() {
  return define2("number", (value) => {
    return typeof value === "number" && !isNaN(value) || `Expected a number, but received: ${print(value)}`;
  });
}
function object(schema) {
  const knowns = schema ? Object.keys(schema) : [];
  const Never = never();
  return new Struct({
    type: "object",
    schema: schema ? schema : null,
    *entries(value) {
      if (schema && isObject(value)) {
        const unknowns = new Set(Object.keys(value));
        for (const key of knowns) {
          unknowns.delete(key);
          yield [key, value[key], schema[key]];
        }
        for (const key of unknowns) {
          yield [key, value[key], Never];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? {...value} : value;
    }
  });
}
function optional(struct) {
  return new Struct({
    ...struct,
    validator: (value, ctx) => value === void 0 || struct.validator(value, ctx),
    refiner: (value, ctx) => value === void 0 || struct.refiner(value, ctx)
  });
}
function record(Key, Value) {
  return new Struct({
    type: "record",
    schema: null,
    *entries(value) {
      if (isObject(value)) {
        for (const k in value) {
          const v = value[k];
          yield [k, k, Key];
          yield [k, v, Value];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    }
  });
}
function string() {
  return define2("string", (value) => {
    return typeof value === "string" || `Expected a string, but received: ${print(value)}`;
  });
}
function tuple(Structs) {
  const Never = never();
  return new Struct({
    type: "tuple",
    schema: null,
    *entries(value) {
      if (Array.isArray(value)) {
        const length = Math.max(Structs.length, value.length);
        for (let i = 0; i < length; i++) {
          yield [i, value[i], Structs[i] || Never];
        }
      }
    },
    validator(value) {
      return Array.isArray(value) || `Expected an array, but received: ${print(value)}`;
    }
  });
}
function type(schema) {
  const keys = Object.keys(schema);
  return new Struct({
    type: "type",
    schema,
    *entries(value) {
      if (isObject(value)) {
        for (const k of keys) {
          yield [k, value[k], schema[k]];
        }
      }
    },
    validator(value) {
      return isObject(value) || `Expected an object, but received: ${print(value)}`;
    },
    coercer(value) {
      return isObject(value) ? {...value} : value;
    }
  });
}
function union(Structs) {
  const description = Structs.map((s) => s.type).join(" | ");
  return new Struct({
    type: "union",
    schema: null,
    coercer(value) {
      for (const S of Structs) {
        const [error, coerced] = S.validate(value, {coerce: true});
        if (!error) {
          return coerced;
        }
      }
      return value;
    },
    validator(value, ctx) {
      const failures = [];
      for (const S of Structs) {
        const [...tuples] = run(value, S, ctx);
        const [first] = tuples;
        if (!first[0]) {
          return [];
        } else {
          for (const [failure] of tuples) {
            if (failure) {
              failures.push(failure);
            }
          }
        }
      }
      return [
        `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`,
        ...failures
      ];
    }
  });
}

// node_modules/@mysten/sui.js/dist/index.mjs
var import_blake2b2 = __toModule(require_blake2b());
var import_utils3 = __toModule(require_utils());
var import_secp256k12 = __toModule(require_secp256k1());
var import_bip39 = __toModule(require_bip39());

// node_modules/@scure/bip32/lib/esm/index.js
var import_hmac = __toModule(require_hmac());
var import_ripemd160 = __toModule(require_ripemd160());
var import_sha256 = __toModule(require_sha256());
var import_sha512 = __toModule(require_sha512());
var import_assert = __toModule(require_assert());
var import_utils = __toModule(require_utils());
var import_secp256k1 = __toModule(require_secp256k1());
var import_modular = __toModule(require_modular());
var import_base = __toModule(require_lib());
var Point = import_secp256k1.secp256k1.ProjectivePoint;
var base58check = (0, import_base.base58check)(import_sha256.sha256);
var MASTER_SECRET = (0, import_utils.utf8ToBytes)("Bitcoin seed");

// node_modules/@mysten/sui.js/dist/index.mjs
var import_utils4 = __toModule(require_utils());
var import_blake2b3 = __toModule(require_blake2b());
var import_sha5122 = __toModule(require_sha512());
var import_hmac2 = __toModule(require_hmac());
var import_tweetnacl2 = __toModule(require_nacl_fast());
var import_browser = __toModule(require_browser());
var import_rpc_websockets = __toModule(require_index_browser());
var import_blake2b4 = __toModule(require_blake2b());
var import_femver = __toModule(require_femver());
var import_blake2b5 = __toModule(require_blake2b());
var import_tweetnacl3 = __toModule(require_nacl_fast());
var import_secp256k13 = __toModule(require_secp256k1());
var import_sha2563 = __toModule(require_sha256());
var import_blake2b6 = __toModule(require_blake2b());
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var TransactionDigest = string();
var TransactionEffectsDigest = string();
var TransactionEventDigest = string();
var ObjectId = string();
var SuiAddress = string();
var SequenceNumber = string();
var ObjectOwner = union([
  object({
    AddressOwner: SuiAddress
  }),
  object({
    ObjectOwner: SuiAddress
  }),
  object({
    Shared: object({
      initial_shared_version: number()
    })
  }),
  literal("Immutable")
]);
var SuiJsonValue = define2("SuiJsonValue", () => true);
var TX_DIGEST_LENGTH = 32;
function isValidTransactionDigest(value) {
  try {
    const buffer = fromB58(value);
    return buffer.length === TX_DIGEST_LENGTH;
  } catch (e) {
    return false;
  }
}
var SUI_ADDRESS_LENGTH2 = 32;
function isValidSuiAddress(value) {
  return isHex(value) && getHexByteLength(value) === SUI_ADDRESS_LENGTH2;
}
function isValidSuiObjectId(value) {
  return isValidSuiAddress(value);
}
function normalizeSuiAddress(value, forceAdd0x = false) {
  let address2 = value.toLowerCase();
  if (!forceAdd0x && address2.startsWith("0x")) {
    address2 = address2.slice(2);
  }
  return `0x${address2.padStart(SUI_ADDRESS_LENGTH2 * 2, "0")}`;
}
function normalizeSuiObjectId(value, forceAdd0x = false) {
  return normalizeSuiAddress(value, forceAdd0x);
}
function isHex(value) {
  return /^(0x|0X)?[a-fA-F0-9]+$/.test(value) && value.length % 2 === 0;
}
function getHexByteLength(value) {
  return /^(0x|0X)/.test(value) ? (value.length - 2) / 2 : value.length / 2;
}
var ObjectType = union([string(), literal("package")]);
var SuiObjectRef = object({
  digest: TransactionDigest,
  objectId: string(),
  version: union([number(), string()])
});
var SuiGasData = object({
  payment: array(SuiObjectRef),
  owner: string(),
  price: string(),
  budget: string()
});
var SuiObjectInfo = assign(SuiObjectRef, object({
  type: string(),
  owner: ObjectOwner,
  previousTransaction: TransactionDigest
}));
var ObjectContentFields = record(string(), any());
var MovePackageContent = record(string(), string());
var SuiMoveObject = object({
  type: string(),
  fields: ObjectContentFields,
  hasPublicTransfer: boolean()
});
var SuiMovePackage = object({
  disassembled: MovePackageContent
});
var SuiParsedData = union([
  assign(SuiMoveObject, object({dataType: literal("moveObject")})),
  assign(SuiMovePackage, object({dataType: literal("package")}))
]);
var SuiRawMoveObject = object({
  type: string(),
  hasPublicTransfer: boolean(),
  version: SequenceNumber,
  bcsBytes: array(number())
});
var SuiRawMovePackage = object({
  id: ObjectId,
  moduleMap: record(string(), string())
});
var SuiRawData = union([
  assign(SuiMoveObject, object({dataType: literal("moveObject")})),
  assign(SuiRawMovePackage, object({dataType: literal("package")}))
]);
var MIST_PER_SUI = BigInt(1e9);
var ObjectDigest = string();
var SuiObjectResponseError = object({
  code: string(),
  error: optional(string()),
  object_id: optional(ObjectId),
  version: optional(SequenceNumber),
  digest: optional(ObjectDigest)
});
var DisplayFieldsResponse = object({
  data: nullable(record(string(), string())),
  error: nullable(SuiObjectResponseError)
});
var DisplayFieldsBackwardCompatibleResponse = union([
  DisplayFieldsResponse,
  optional(record(string(), string()))
]);
var SuiObjectData = object({
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest,
  type: optional(string()),
  content: optional(SuiParsedData),
  bcs: optional(SuiRawData),
  owner: optional(ObjectOwner),
  previousTransaction: optional(TransactionDigest),
  storageRebate: optional(string()),
  display: optional(DisplayFieldsBackwardCompatibleResponse)
});
var SuiObjectDataOptions = object({
  showType: optional(boolean()),
  showContent: optional(boolean()),
  showBcs: optional(boolean()),
  showOwner: optional(boolean()),
  showPreviousTransaction: optional(boolean()),
  showStorageRebate: optional(boolean()),
  showDisplay: optional(boolean())
});
var ObjectStatus = union([
  literal("Exists"),
  literal("notExists"),
  literal("Deleted")
]);
var GetOwnedObjectsResponse = array(SuiObjectInfo);
var SuiObjectResponse = object({
  data: optional(SuiObjectData),
  error: optional(SuiObjectResponseError)
});
function getSuiObjectData(resp) {
  return resp.data;
}
function getObjectDeletedResponse(resp) {
  if (resp.error && "object_id" in resp.error && "version" in resp.error && "digest" in resp.error) {
    const error = resp.error;
    return {
      objectId: error.object_id,
      version: error.version,
      digest: error.digest
    };
  }
  return void 0;
}
function getObjectReference(resp) {
  if ("reference" in resp) {
    return resp.reference;
  }
  const exists = getSuiObjectData(resp);
  if (exists) {
    return {
      objectId: exists.objectId,
      version: exists.version,
      digest: exists.digest
    };
  }
  return getObjectDeletedResponse(resp);
}
function getObjectOwner(resp) {
  if (is(resp, ObjectOwner)) {
    return resp;
  }
  return getSuiObjectData(resp)?.owner;
}
function getSharedObjectInitialVersion(resp) {
  const owner = getObjectOwner(resp);
  if (typeof owner === "object" && "Shared" in owner) {
    return owner.Shared.initial_shared_version;
  } else {
    return void 0;
  }
}
function getObjectFields(resp) {
  if ("fields" in resp) {
    return resp.fields;
  }
  return getMoveObject(resp)?.fields;
}
function isSuiObjectDataWithContent(data) {
  return data.content !== void 0;
}
function getMoveObject(data) {
  const suiObject = "data" in data ? getSuiObjectData(data) : data;
  if (!suiObject || !isSuiObjectDataWithContent(suiObject) || suiObject.content.dataType !== "moveObject") {
    return void 0;
  }
  return suiObject.content;
}
var CheckpointedObjectId = object({
  objectId: ObjectId,
  atCheckpoint: optional(number())
});
var PaginatedObjectsResponse = object({
  data: array(SuiObjectResponse),
  nextCursor: union([nullable(ObjectId), nullable(CheckpointedObjectId)]),
  hasNextPage: boolean()
});
var EventId = object({
  txDigest: TransactionDigest,
  eventSeq: SequenceNumber
});
var SuiEvent = object({
  id: EventId,
  packageId: ObjectId,
  transactionModule: string(),
  sender: SuiAddress,
  type: string(),
  parsedJson: optional(record(string(), any())),
  bcs: optional(string()),
  timestampMs: optional(string())
});
var PaginatedEvents = object({
  data: array(SuiEvent),
  nextCursor: nullable(EventId),
  hasNextPage: boolean()
});
var SubscriptionId = number();
var SubscriptionEvent = object({
  subscription: SubscriptionId,
  result: SuiEvent
});
var EpochId = string();
var SuiChangeEpoch = object({
  epoch: EpochId,
  storage_charge: string(),
  computation_charge: string(),
  storage_rebate: string(),
  epoch_start_timestamp_ms: optional(string())
});
var SuiConsensusCommitPrologue = object({
  epoch: EpochId,
  round: string(),
  commit_timestamp_ms: string()
});
var Genesis = object({
  objects: array(ObjectId)
});
var SuiArgument = union([
  literal("GasCoin"),
  object({Input: number()}),
  object({Result: number()}),
  object({NestedResult: tuple([number(), number()])})
]);
var MoveCallSuiTransaction = object({
  arguments: optional(array(SuiArgument)),
  type_arguments: optional(array(string())),
  package: ObjectId,
  module: string(),
  function: string()
});
var SuiTransaction = union([
  object({MoveCall: MoveCallSuiTransaction}),
  object({TransferObjects: tuple([array(SuiArgument), SuiArgument])}),
  object({SplitCoins: tuple([SuiArgument, array(SuiArgument)])}),
  object({MergeCoins: tuple([SuiArgument, array(SuiArgument)])}),
  object({
    Publish: union([
      tuple([SuiMovePackage, array(ObjectId)]),
      array(ObjectId)
    ])
  }),
  object({
    Upgrade: union([
      tuple([SuiMovePackage, array(ObjectId), ObjectId, SuiArgument]),
      tuple([array(ObjectId), ObjectId, SuiArgument])
    ])
  }),
  object({MakeMoveVec: tuple([nullable(string()), array(SuiArgument)])})
]);
var SuiCallArg = union([
  object({
    type: literal("pure"),
    valueType: optional(string()),
    value: SuiJsonValue
  }),
  object({
    type: literal("object"),
    objectType: literal("immOrOwnedObject"),
    objectId: ObjectId,
    version: SequenceNumber,
    digest: ObjectDigest
  }),
  object({
    type: literal("object"),
    objectType: literal("sharedObject"),
    objectId: ObjectId,
    initialSharedVersion: SequenceNumber,
    mutable: boolean()
  })
]);
var ProgrammableTransaction = object({
  transactions: array(SuiTransaction),
  inputs: array(SuiCallArg)
});
var SuiTransactionBlockKind = union([
  assign(SuiChangeEpoch, object({kind: literal("ChangeEpoch")})),
  assign(SuiConsensusCommitPrologue, object({
    kind: literal("ConsensusCommitPrologue")
  })),
  assign(Genesis, object({kind: literal("Genesis")})),
  assign(ProgrammableTransaction, object({kind: literal("ProgrammableTransaction")}))
]);
var SuiTransactionBlockData = object({
  messageVersion: literal("v1"),
  transaction: SuiTransactionBlockKind,
  sender: SuiAddress,
  gasData: SuiGasData
});
var AuthoritySignature = string();
var GenericAuthoritySignature = union([
  AuthoritySignature,
  array(AuthoritySignature)
]);
var AuthorityQuorumSignInfo = object({
  epoch: EpochId,
  signature: GenericAuthoritySignature,
  signers_map: array(number())
});
var GasCostSummary = object({
  computationCost: string(),
  storageCost: string(),
  storageRebate: string(),
  nonRefundableStorageFee: string()
});
var ExecutionStatusType = union([
  literal("success"),
  literal("failure")
]);
var ExecutionStatus = object({
  status: ExecutionStatusType,
  error: optional(string())
});
var OwnedObjectRef = object({
  owner: ObjectOwner,
  reference: SuiObjectRef
});
var TransactionEffectsModifiedAtVersions = object({
  objectId: ObjectId,
  sequenceNumber: SequenceNumber
});
var TransactionEffects = object({
  messageVersion: literal("v1"),
  status: ExecutionStatus,
  executedEpoch: EpochId,
  modifiedAtVersions: optional(array(TransactionEffectsModifiedAtVersions)),
  gasUsed: GasCostSummary,
  sharedObjects: optional(array(SuiObjectRef)),
  transactionDigest: TransactionDigest,
  created: optional(array(OwnedObjectRef)),
  mutated: optional(array(OwnedObjectRef)),
  unwrapped: optional(array(OwnedObjectRef)),
  deleted: optional(array(SuiObjectRef)),
  unwrapped_then_deleted: optional(array(SuiObjectRef)),
  wrapped: optional(array(SuiObjectRef)),
  gasObject: OwnedObjectRef,
  eventsDigest: optional(TransactionEventDigest),
  dependencies: optional(array(TransactionDigest))
});
var TransactionEvents = array(SuiEvent);
var ReturnValueType = tuple([array(number()), string()]);
var MutableReferenceOutputType = tuple([
  SuiArgument,
  array(number()),
  string()
]);
var ExecutionResultType = object({
  mutableReferenceOutputs: optional(array(MutableReferenceOutputType)),
  returnValues: optional(array(ReturnValueType))
});
var DevInspectResults = object({
  effects: TransactionEffects,
  events: TransactionEvents,
  results: optional(array(ExecutionResultType)),
  error: optional(string())
});
var AuthorityName = string();
var SuiTransactionBlock = object({
  data: SuiTransactionBlockData,
  txSignatures: array(string())
});
var SuiObjectChangePublished = object({
  type: literal("published"),
  packageId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest,
  modules: array(string())
});
var SuiObjectChangeTransferred = object({
  type: literal("transferred"),
  sender: SuiAddress,
  recipient: ObjectOwner,
  objectType: string(),
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChangeMutated = object({
  type: literal("mutated"),
  sender: SuiAddress,
  owner: ObjectOwner,
  objectType: string(),
  objectId: ObjectId,
  version: SequenceNumber,
  previousVersion: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChangeDeleted = object({
  type: literal("deleted"),
  sender: SuiAddress,
  objectType: string(),
  objectId: ObjectId,
  version: SequenceNumber
});
var SuiObjectChangeWrapped = object({
  type: literal("wrapped"),
  sender: SuiAddress,
  objectType: string(),
  objectId: ObjectId,
  version: SequenceNumber
});
var SuiObjectChangeCreated = object({
  type: literal("created"),
  sender: SuiAddress,
  owner: ObjectOwner,
  objectType: string(),
  objectId: ObjectId,
  version: SequenceNumber,
  digest: ObjectDigest
});
var SuiObjectChange = union([
  SuiObjectChangePublished,
  SuiObjectChangeTransferred,
  SuiObjectChangeMutated,
  SuiObjectChangeDeleted,
  SuiObjectChangeWrapped,
  SuiObjectChangeCreated
]);
var BalanceChange = object({
  owner: ObjectOwner,
  coinType: string(),
  amount: string()
});
var SuiTransactionBlockResponse = object({
  digest: TransactionDigest,
  transaction: optional(SuiTransactionBlock),
  effects: optional(TransactionEffects),
  events: optional(TransactionEvents),
  timestampMs: optional(string()),
  checkpoint: optional(string()),
  confirmedLocalExecution: optional(boolean()),
  objectChanges: optional(array(SuiObjectChange)),
  balanceChanges: optional(array(BalanceChange)),
  errors: optional(array(string()))
});
var SuiTransactionBlockResponseOptions = object({
  showInput: optional(boolean()),
  showEffects: optional(boolean()),
  showEvents: optional(boolean()),
  showObjectChanges: optional(boolean()),
  showBalanceChanges: optional(boolean())
});
var PaginatedTransactionResponse = object({
  data: array(SuiTransactionBlockResponse),
  nextCursor: nullable(TransactionDigest),
  hasNextPage: boolean()
});
var DryRunTransactionBlockResponse = object({
  effects: TransactionEffects,
  events: TransactionEvents,
  objectChanges: array(SuiObjectChange),
  balanceChanges: array(BalanceChange),
  input: optional(SuiTransactionBlockData)
});
function getExecutionStatusGasSummary(data) {
  if (is(data, TransactionEffects)) {
    return data.gasUsed;
  }
  return getTransactionEffects(data)?.gasUsed;
}
function getTotalGasUsedUpperBound(data) {
  const gasSummary = getExecutionStatusGasSummary(data);
  return gasSummary ? BigInt(gasSummary.computationCost) + BigInt(gasSummary.storageCost) : void 0;
}
function getTransactionEffects(data) {
  return data.effects;
}
function getOption(option2) {
  if (typeof option2 === "object" && option2 !== null && "type" in option2 && option2.type.startsWith("0x1::option::Option<")) {
    return void 0;
  }
  return option2;
}
var SUI_FRAMEWORK_ADDRESS = "0x2";
var MOVE_STDLIB_ADDRESS = "0x1";
var OBJECT_MODULE_NAME = "object";
var ID_STRUCT_NAME = "ID";
var SUI_TYPE_ARG = `${SUI_FRAMEWORK_ADDRESS}::sui::SUI`;
var SUI_CLOCK_OBJECT_ID = normalizeSuiObjectId("0x6");
var CoinMetadataStruct = object({
  decimals: number(),
  name: string(),
  symbol: string(),
  description: string(),
  iconUrl: nullable(string()),
  id: nullable(ObjectId)
});
var _Delegation = class {
  static isDelegationSuiObject(obj) {
    return "type" in obj && obj.type === _Delegation.SUI_OBJECT_TYPE;
  }
  constructor(obj) {
    this.suiObject = obj;
  }
  nextRewardUnclaimedEpoch() {
    return this.suiObject.data.fields.next_reward_unclaimed_epoch;
  }
  activeDelegation() {
    return BigInt(getOption(this.suiObject.data.fields.active_delegation) || 0);
  }
  delegateAmount() {
    return this.suiObject.data.fields.delegate_amount;
  }
  endingEpoch() {
    return getOption(this.suiObject.data.fields.ending_epoch);
  }
  validatorAddress() {
    return this.suiObject.data.fields.validator_address;
  }
  isActive() {
    return this.activeDelegation() > 0 && !this.endingEpoch();
  }
  hasUnclaimedRewards(epoch) {
    return this.nextRewardUnclaimedEpoch() <= epoch && (this.isActive() || (this.endingEpoch() || 0) > epoch);
  }
};
var Delegation = _Delegation;
Delegation.SUI_OBJECT_TYPE = "0x2::delegation::Delegation";
var VECTOR = "vector";
var TransactionDataV1 = {
  kind: "TransactionKind",
  sender: BCS.ADDRESS,
  gasData: "GasData",
  expiration: "TransactionExpiration"
};
var BCS_SPEC = {
  enums: {
    "Option<T>": {
      None: null,
      Some: "T"
    },
    ObjectArg: {
      ImmOrOwned: "SuiObjectRef",
      Shared: "SharedObjectRef"
    },
    CallArg: {
      Pure: [VECTOR, BCS.U8],
      Object: "ObjectArg",
      ObjVec: [VECTOR, "ObjectArg"]
    },
    TypeTag: {
      bool: null,
      u8: null,
      u64: null,
      u128: null,
      address: null,
      signer: null,
      vector: "TypeTag",
      struct: "StructTag",
      u16: null,
      u32: null,
      u256: null
    },
    TransactionKind: {
      ProgrammableTransaction: "ProgrammableTransaction",
      ChangeEpoch: null,
      Genesis: null,
      ConsensusCommitPrologue: null
    },
    TransactionExpiration: {
      None: null,
      Epoch: BCS.U64
    },
    TransactionData: {
      V1: "TransactionDataV1"
    }
  },
  structs: {
    SuiObjectRef: {
      objectId: BCS.ADDRESS,
      version: BCS.U64,
      digest: "ObjectDigest"
    },
    SharedObjectRef: {
      objectId: BCS.ADDRESS,
      initialSharedVersion: BCS.U64,
      mutable: BCS.BOOL
    },
    StructTag: {
      address: BCS.ADDRESS,
      module: BCS.STRING,
      name: BCS.STRING,
      typeParams: [VECTOR, "TypeTag"]
    },
    GasData: {
      payment: [VECTOR, "SuiObjectRef"],
      owner: BCS.ADDRESS,
      price: BCS.U64,
      budget: BCS.U64
    },
    SenderSignedData: {
      data: "TransactionData",
      txSignatures: [VECTOR, [VECTOR, BCS.U8]]
    },
    TransactionDataV1
  },
  aliases: {
    ObjectDigest: BCS.BASE58
  }
};
var bcs = new BCS({...getSuiMoveConfig(), types: BCS_SPEC});
bcs.registerType("utf8string", (writer, str) => {
  const bytes = Array.from(new TextEncoder().encode(str));
  return writer.writeVec(bytes, (writer2, el) => writer2.write8(el));
}, (reader) => {
  let bytes = reader.readVec((reader2) => reader2.read8());
  return new TextDecoder().decode(new Uint8Array(bytes));
});
var FaucetCoinInfo = object({
  amount: number(),
  id: ObjectId,
  transferTxDigest: TransactionDigest
});
var FaucetResponse = object({
  transferredGasObjects: array(FaucetCoinInfo),
  error: nullable(string())
});
var SuiMoveFunctionArgType = union([
  string(),
  object({Object: string()})
]);
var SuiMoveFunctionArgTypes = array(SuiMoveFunctionArgType);
var SuiMoveModuleId = object({
  address: string(),
  name: string()
});
var SuiMoveVisibility = union([
  literal("Private"),
  literal("Public"),
  literal("Friend")
]);
var SuiMoveAbilitySet = object({
  abilities: array(string())
});
var SuiMoveStructTypeParameter = object({
  constraints: SuiMoveAbilitySet,
  isPhantom: boolean()
});
var SuiMoveNormalizedTypeParameterType = object({
  TypeParameter: number()
});
var MoveCallMetric = tuple([
  object({
    module: string(),
    package: string(),
    function: string()
  }),
  string()
]);
var MoveCallMetrics = object({
  rank3Days: array(MoveCallMetric),
  rank7Days: array(MoveCallMetric),
  rank30Days: array(MoveCallMetric)
});
function isSuiMoveNormalizedType(value) {
  if (!value)
    return false;
  if (typeof value === "string")
    return true;
  if (is(value, SuiMoveNormalizedTypeParameterType))
    return true;
  if (isSuiMoveNormalizedStructType(value))
    return true;
  if (typeof value !== "object")
    return false;
  const valueProperties = value;
  if (is(valueProperties.Reference, SuiMoveNormalizedType))
    return true;
  if (is(valueProperties.MutableReference, SuiMoveNormalizedType))
    return true;
  if (is(valueProperties.Vector, SuiMoveNormalizedType))
    return true;
  return false;
}
var SuiMoveNormalizedType = define2("SuiMoveNormalizedType", isSuiMoveNormalizedType);
function isSuiMoveNormalizedStructType(value) {
  if (!value || typeof value !== "object")
    return false;
  const valueProperties = value;
  if (!valueProperties.Struct || typeof valueProperties.Struct !== "object")
    return false;
  const structProperties = valueProperties.Struct;
  if (typeof structProperties.address !== "string" || typeof structProperties.module !== "string" || typeof structProperties.name !== "string" || !Array.isArray(structProperties.typeArguments) || !structProperties.typeArguments.every((value2) => isSuiMoveNormalizedType(value2))) {
    return false;
  }
  return true;
}
var SuiMoveNormalizedStructType = define2("SuiMoveNormalizedStructType", isSuiMoveNormalizedStructType);
var SuiMoveNormalizedFunction = object({
  visibility: SuiMoveVisibility,
  isEntry: boolean(),
  typeParameters: array(SuiMoveAbilitySet),
  parameters: array(SuiMoveNormalizedType),
  return: array(SuiMoveNormalizedType)
});
var SuiMoveNormalizedField = object({
  name: string(),
  type: SuiMoveNormalizedType
});
var SuiMoveNormalizedStruct = object({
  abilities: SuiMoveAbilitySet,
  typeParameters: array(SuiMoveStructTypeParameter),
  fields: array(SuiMoveNormalizedField)
});
var SuiMoveNormalizedModule = object({
  fileFormatVersion: number(),
  address: string(),
  name: string(),
  friends: array(SuiMoveModuleId),
  structs: record(string(), SuiMoveNormalizedStruct),
  exposedFunctions: record(string(), SuiMoveNormalizedFunction)
});
var SuiMoveNormalizedModules = record(string(), SuiMoveNormalizedModule);
function extractMutableReference(normalizedType) {
  return typeof normalizedType === "object" && "MutableReference" in normalizedType ? normalizedType.MutableReference : void 0;
}
function extractReference(normalizedType) {
  return typeof normalizedType === "object" && "Reference" in normalizedType ? normalizedType.Reference : void 0;
}
function extractStructTag(normalizedType) {
  if (typeof normalizedType === "object" && "Struct" in normalizedType) {
    return normalizedType;
  }
  const ref = extractReference(normalizedType);
  const mutRef = extractMutableReference(normalizedType);
  if (typeof ref === "object" && "Struct" in ref) {
    return ref;
  }
  if (typeof mutRef === "object" && "Struct" in mutRef) {
    return mutRef;
  }
  return void 0;
}
var Apy = object({
  apy: number(),
  address: SuiAddress
});
var ValidatorsApy = object({
  epoch: string(),
  apys: array(Apy)
});
var Balance = object({
  value: number()
});
var StakeObject = object({
  stakedSuiId: ObjectId,
  stakeRequestEpoch: EpochId,
  stakeActiveEpoch: EpochId,
  principal: string(),
  status: union([literal("Active"), literal("Pending"), literal("Unstaked")]),
  estimatedReward: optional(string())
});
var DelegatedStake = object({
  validatorAddress: SuiAddress,
  stakingPool: ObjectId,
  stakes: array(StakeObject)
});
var StakeSubsidyFields = object({
  balance: object({value: number()}),
  distribution_counter: number(),
  current_distribution_amount: number(),
  stake_subsidy_period_length: number(),
  stake_subsidy_decrease_rate: number()
});
var StakeSubsidy = object({
  type: string(),
  fields: StakeSubsidyFields
});
var SuiSupplyFields = object({
  value: number()
});
var ContentsFields = object({
  id: string(),
  size: number(),
  head: object({vec: array()}),
  tail: object({vec: array()})
});
var ContentsFieldsWithdraw = object({
  id: string(),
  size: number()
});
var Contents = object({
  type: string(),
  fields: ContentsFields
});
var DelegationStakingPoolFields = object({
  exchangeRates: object({
    id: string(),
    size: number()
  }),
  id: string(),
  pendingStake: number(),
  pendingPoolTokenWithdraw: number(),
  pendingTotalSuiWithdraw: number(),
  poolTokenBalance: number(),
  rewardsPool: object({value: number()}),
  activationEpoch: object({vec: array()}),
  deactivationEpoch: object({vec: array()}),
  suiBalance: number()
});
var DelegationStakingPool = object({
  type: string(),
  fields: DelegationStakingPoolFields
});
var Validators = array(tuple([AuthorityName, string()]));
var CommitteeInfo = object({
  epoch: EpochId,
  validators: Validators
});
var SuiValidatorSummary = object({
  suiAddress: SuiAddress,
  protocolPubkeyBytes: string(),
  networkPubkeyBytes: string(),
  workerPubkeyBytes: string(),
  proofOfPossessionBytes: string(),
  operationCapId: string(),
  name: string(),
  description: string(),
  imageUrl: string(),
  projectUrl: string(),
  p2pAddress: string(),
  netAddress: string(),
  primaryAddress: string(),
  workerAddress: string(),
  nextEpochProtocolPubkeyBytes: nullable(string()),
  nextEpochProofOfPossession: nullable(string()),
  nextEpochNetworkPubkeyBytes: nullable(string()),
  nextEpochWorkerPubkeyBytes: nullable(string()),
  nextEpochNetAddress: nullable(string()),
  nextEpochP2pAddress: nullable(string()),
  nextEpochPrimaryAddress: nullable(string()),
  nextEpochWorkerAddress: nullable(string()),
  votingPower: string(),
  gasPrice: string(),
  commissionRate: string(),
  nextEpochStake: string(),
  nextEpochGasPrice: string(),
  nextEpochCommissionRate: string(),
  stakingPoolId: string(),
  stakingPoolActivationEpoch: nullable(string()),
  stakingPoolDeactivationEpoch: nullable(string()),
  stakingPoolSuiBalance: string(),
  rewardsPool: string(),
  poolTokenBalance: string(),
  pendingStake: string(),
  pendingPoolTokenWithdraw: string(),
  pendingTotalSuiWithdraw: string(),
  exchangeRatesId: string(),
  exchangeRatesSize: string()
});
var SuiSystemStateSummary = object({
  epoch: string(),
  protocolVersion: string(),
  systemStateVersion: string(),
  storageFundTotalObjectStorageRebates: string(),
  storageFundNonRefundableBalance: string(),
  referenceGasPrice: string(),
  safeMode: boolean(),
  safeModeStorageRewards: string(),
  safeModeComputationRewards: string(),
  safeModeStorageRebates: string(),
  safeModeNonRefundableStorageFee: string(),
  epochStartTimestampMs: string(),
  epochDurationMs: string(),
  stakeSubsidyStartEpoch: string(),
  maxValidatorCount: string(),
  minValidatorJoiningStake: string(),
  validatorLowStakeThreshold: string(),
  validatorVeryLowStakeThreshold: string(),
  validatorLowStakeGracePeriod: string(),
  stakeSubsidyBalance: string(),
  stakeSubsidyDistributionCounter: string(),
  stakeSubsidyCurrentDistributionAmount: string(),
  stakeSubsidyPeriodLength: string(),
  stakeSubsidyDecreaseRate: number(),
  totalStake: string(),
  activeValidators: array(SuiValidatorSummary),
  pendingActiveValidatorsId: string(),
  pendingActiveValidatorsSize: string(),
  pendingRemovals: array(string()),
  stakingPoolMappingsId: string(),
  stakingPoolMappingsSize: string(),
  inactivePoolsId: string(),
  inactivePoolsSize: string(),
  validatorCandidatesId: string(),
  validatorCandidatesSize: string(),
  atRiskValidators: array(tuple([SuiAddress, string()])),
  validatorReportRecords: array(tuple([SuiAddress, array(SuiAddress)]))
});
var CoinStruct = object({
  coinType: string(),
  coinObjectId: ObjectId,
  version: string(),
  digest: TransactionDigest,
  balance: string(),
  lockedUntilEpoch: optional(nullable(number())),
  previousTransaction: TransactionDigest
});
var PaginatedCoins = object({
  data: array(CoinStruct),
  nextCursor: nullable(ObjectId),
  hasNextPage: boolean()
});
var CoinBalance = object({
  coinType: string(),
  coinObjectCount: number(),
  totalBalance: string(),
  lockedBalance: object({
    epochId: optional(number()),
    number: optional(number())
  })
});
var CoinSupply = object({
  value: string()
});
var EndOfEpochInfo = object({
  lastCheckpointId: string(),
  epochEndTimestamp: string(),
  protocolVersion: string(),
  referenceGasPrice: string(),
  totalStake: string(),
  storageFundReinvestment: string(),
  storageCharge: string(),
  storageRebate: string(),
  storageFundBalance: string(),
  stakeSubsidyAmount: string(),
  totalGasFees: string(),
  totalStakeRewardsDistributed: string(),
  leftoverStorageFundInflow: string()
});
var EpochInfo = object({
  epoch: string(),
  validators: array(SuiValidatorSummary),
  epochTotalTransactions: string(),
  firstCheckpointId: string(),
  epochStartTimestamp: string(),
  endOfEpochInfo: nullable(EndOfEpochInfo)
});
var EpochPage = object({
  data: array(EpochInfo),
  nextCursor: nullable(string()),
  hasNextPage: boolean()
});
var GasCostSummary2 = object({
  computationCost: string(),
  storageCost: string(),
  storageRebate: string(),
  nonRefundableStorageFee: string()
});
var CheckPointContentsDigest = string();
var CheckpointDigest = string();
var ECMHLiveObjectSetDigest = object({
  digest: array(number())
});
var CheckpointCommitment = any();
var ValidatorSignature = string();
var EndOfEpochData = object({
  nextEpochCommittee: array(tuple([string(), string()])),
  nextEpochProtocolVersion: string(),
  epochCommitments: array(CheckpointCommitment)
});
var ExecutionDigests = object({
  transaction: TransactionDigest,
  effects: TransactionEffectsDigest
});
var Checkpoint = object({
  epoch: string(),
  sequenceNumber: string(),
  digest: CheckpointDigest,
  networkTotalTransactions: string(),
  previousDigest: optional(CheckpointDigest),
  epochRollingGasCostSummary: GasCostSummary2,
  timestampMs: string(),
  endOfEpochData: optional(EndOfEpochData),
  validatorSignature: optional(ValidatorSignature),
  transactions: array(TransactionDigest),
  checkpointCommitments: array(CheckpointCommitment)
});
var CheckpointPage = object({
  data: array(Checkpoint),
  nextCursor: nullable(string()),
  hasNextPage: boolean()
});
var SIGNATURE_SCHEME_TO_FLAG = {
  ED25519: 0,
  Secp256k1: 1
};
var SIGNATURE_FLAG_TO_SCHEME = {
  0: "ED25519",
  1: "Secp256k1"
};
function toSerializedSignature({
  signature,
  signatureScheme,
  pubKey
}) {
  const serializedSignature = new Uint8Array(1 + signature.length + pubKey.toBytes().length);
  serializedSignature.set([SIGNATURE_SCHEME_TO_FLAG[signatureScheme]]);
  serializedSignature.set(signature, 1);
  serializedSignature.set(pubKey.toBytes(), 1 + signature.length);
  return toB64(serializedSignature);
}
function fromSerializedSignature(serializedSignature) {
  const bytes = fromB64(serializedSignature);
  const signatureScheme = SIGNATURE_FLAG_TO_SCHEME[bytes[0]];
  const PublicKey2 = signatureScheme === "ED25519" ? Ed25519PublicKey : Secp256k1PublicKey;
  const signature = bytes.slice(1, bytes.length - PublicKey2.SIZE);
  const pubkeyBytes = bytes.slice(1 + signature.length);
  const pubKey = new PublicKey2(pubkeyBytes);
  return {
    signatureScheme,
    signature,
    pubKey
  };
}
var PUBLIC_KEY_SIZE = 32;
var Ed25519PublicKey = class {
  constructor(value) {
    if (typeof value === "string") {
      this.data = fromB64(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== PUBLIC_KEY_SIZE) {
      throw new Error(`Invalid public key input. Expected ${PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`);
    }
  }
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  toBase64() {
    return toB64(this.toBytes());
  }
  toBytes() {
    return this.data;
  }
  toString() {
    return this.toBase64();
  }
  toSuiAddress() {
    let tmp = new Uint8Array(PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["ED25519"]]);
    tmp.set(this.toBytes(), 1);
    return normalizeSuiAddress((0, import_utils3.bytesToHex)((0, import_blake2b2.blake2b)(tmp, {dkLen: 32})).slice(0, SUI_ADDRESS_LENGTH2 * 2));
  }
};
Ed25519PublicKey.SIZE = PUBLIC_KEY_SIZE;
function bytesEqual(a, b) {
  if (a === b)
    return true;
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var SECP256K1_PUBLIC_KEY_SIZE = 33;
var Secp256k1PublicKey = class {
  constructor(value) {
    if (typeof value === "string") {
      this.data = fromB64(value);
    } else if (value instanceof Uint8Array) {
      this.data = value;
    } else {
      this.data = Uint8Array.from(value);
    }
    if (this.data.length !== SECP256K1_PUBLIC_KEY_SIZE) {
      throw new Error(`Invalid public key input. Expected ${SECP256K1_PUBLIC_KEY_SIZE} bytes, got ${this.data.length}`);
    }
  }
  equals(publicKey) {
    return bytesEqual(this.toBytes(), publicKey.toBytes());
  }
  toBase64() {
    return toB64(this.toBytes());
  }
  toBytes() {
    return this.data;
  }
  toString() {
    return this.toBase64();
  }
  toSuiAddress() {
    let tmp = new Uint8Array(SECP256K1_PUBLIC_KEY_SIZE + 1);
    tmp.set([SIGNATURE_SCHEME_TO_FLAG["Secp256k1"]]);
    tmp.set(this.toBytes(), 1);
    return normalizeSuiAddress((0, import_utils2.bytesToHex)((0, import_blake2b.blake2b)(tmp, {dkLen: 32})).slice(0, SUI_ADDRESS_LENGTH2 * 2));
  }
};
Secp256k1PublicKey.SIZE = SECP256K1_PUBLIC_KEY_SIZE;
function isValidHardenedPath(path) {
  if (!new RegExp("^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$").test(path)) {
    return false;
  }
  return true;
}
function mnemonicToSeed(mnemonics) {
  return (0, import_bip39.mnemonicToSeedSync)(mnemonics, "");
}
function mnemonicToSeedHex(mnemonics) {
  return toHEX(mnemonicToSeed(mnemonics));
}
var PRIVATE_KEY_SIZE = 32;
var ED25519_CURVE = "ed25519 seed";
var HARDENED_OFFSET = 2147483648;
var pathRegex = new RegExp("^m(\\/[0-9]+')+$");
var replaceDerive = (val) => val.replace("'", "");
var getMasterKeyFromSeed = (seed) => {
  const h = import_hmac2.hmac.create(import_sha5122.sha512, ED25519_CURVE);
  const I = h.update(fromHEX(seed)).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var CKDPriv = ({key, chainCode}, index) => {
  const indexBuffer = new ArrayBuffer(4);
  const cv = new DataView(indexBuffer);
  cv.setUint32(0, index);
  const data = new Uint8Array(1 + key.length + indexBuffer.byteLength);
  data.set(new Uint8Array(1).fill(0));
  data.set(key, 1);
  data.set(new Uint8Array(indexBuffer, 0, indexBuffer.byteLength), key.length + 1);
  const I = import_hmac2.hmac.create(import_sha5122.sha512, chainCode).update(data).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
var isValidPath = (path) => {
  if (!pathRegex.test(path)) {
    return false;
  }
  return !path.split("/").slice(1).map(replaceDerive).some(isNaN);
};
var derivePath = (path, seed, offset = HARDENED_OFFSET) => {
  if (!isValidPath(path)) {
    throw new Error("Invalid derivation path");
  }
  const {key, chainCode} = getMasterKeyFromSeed(seed);
  const segments = path.split("/").slice(1).map(replaceDerive).map((el) => parseInt(el, 10));
  return segments.reduce((parentKeys, segment) => CKDPriv(parentKeys, segment + offset), {key, chainCode});
};
var DEFAULT_ED25519_DERIVATION_PATH = "m/44'/784'/0'/0'/0'";
var Ed25519Keypair = class {
  constructor(keypair) {
    if (keypair) {
      this.keypair = keypair;
    } else {
      this.keypair = import_tweetnacl.default.sign.keyPair();
    }
  }
  getKeyScheme() {
    return "ED25519";
  }
  static generate() {
    return new Ed25519Keypair(import_tweetnacl.default.sign.keyPair());
  }
  static fromSecretKey(secretKey, options) {
    const secretKeyLength = secretKey.length;
    if (secretKeyLength !== PRIVATE_KEY_SIZE) {
      throw new Error(`Wrong secretKey size. Expected ${PRIVATE_KEY_SIZE} bytes, got ${secretKeyLength}.`);
    }
    const keypair = import_tweetnacl.default.sign.keyPair.fromSeed(secretKey);
    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode("sui validation");
      const signature = import_tweetnacl.default.sign.detached(signData, keypair.secretKey);
      if (!import_tweetnacl.default.sign.detached.verify(signData, signature, keypair.publicKey)) {
        throw new Error("provided secretKey is invalid");
      }
    }
    return new Ed25519Keypair(keypair);
  }
  getPublicKey() {
    return new Ed25519PublicKey(this.keypair.publicKey);
  }
  signData(data) {
    return import_tweetnacl.default.sign.detached(data, this.keypair.secretKey);
  }
  static deriveKeypair(mnemonics, path) {
    if (path == null) {
      path = DEFAULT_ED25519_DERIVATION_PATH;
    }
    if (!isValidHardenedPath(path)) {
      throw new Error("Invalid derivation path");
    }
    const {key} = derivePath(path, mnemonicToSeedHex(mnemonics));
    return Ed25519Keypair.fromSecretKey(key);
  }
  export() {
    return {
      schema: "ED25519",
      privateKey: toB64(this.keypair.secretKey.slice(0, PRIVATE_KEY_SIZE))
    };
  }
};
var PACKAGE_VERSION = "0.33.0";
var TARGETED_RPC_VERSION = "1.1.0";
var RPCError = class extends Error {
  constructor(options) {
    super(options.cause ? `RPC Error: ${options.cause.message}` : "Unknown RPC Error", {cause: options.cause});
    this.req = options.req;
    this.code = options.code;
    this.data = options.data;
  }
};
var RPCValidationError = class extends Error {
  constructor(options) {
    super("RPC Validation Error: The response returned from RPC server does not match the TypeScript definition. This is likely because the SDK version is not compatible with the RPC server.", {cause: options.cause});
    this.req = options.req;
    this.result = options.result;
    this.message = this.toString();
  }
  toString() {
    let str = super.toString();
    if (this.cause) {
      str += `
Cause: ${this.cause}`;
    }
    if (this.result) {
      str += `
Reponse Received: ${JSON.stringify(this.result, null, 2)}`;
    }
    return str;
  }
};
var FaucetRateLimitError = class extends Error {
};
var ValidResponse = object({
  jsonrpc: literal("2.0"),
  id: string(),
  result: any()
});
var ErrorResponse = object({
  jsonrpc: literal("2.0"),
  id: string(),
  error: object({
    code: any(),
    message: string(),
    data: optional(any())
  })
});
var JsonRpcClient = class {
  constructor(url, httpHeaders) {
    this.rpcClient = new import_browser.default(async (request, callback) => {
      const options = {
        method: "POST",
        body: request,
        headers: {
          "Content-Type": "application/json",
          "Client-Sdk-Type": "typescript",
          "Client-Sdk-Version": PACKAGE_VERSION,
          "Client-Target-Api-Version": TARGETED_RPC_VERSION,
          ...httpHeaders
        }
      };
      try {
        let res = await fetch(url, options);
        const result = await res.text();
        if (res.ok) {
          callback(null, result);
        } else {
          const isHtml = res.headers.get("content-type") === "text/html";
          callback(new Error(`${res.status} ${res.statusText}${isHtml ? "" : `: ${result}`}`));
        }
      } catch (err) {
        callback(err);
      }
    }, {});
  }
  async requestWithType(method, args, struct) {
    const req = {method, args};
    const response = await this.request(method, args);
    if (is(response, ErrorResponse)) {
      throw new RPCError({
        req,
        code: response.error.code,
        data: response.error.data,
        cause: new Error(response.error.message)
      });
    } else if (is(response, ValidResponse)) {
      const [err] = validate(response.result, struct);
      if (err) {
        console.warn(new RPCValidationError({
          req,
          result: response.result,
          cause: err
        }));
        return response.result;
      }
      return response.result;
    }
    throw new RPCError({req, data: response});
  }
  async request(method, args) {
    return new Promise((resolve, reject) => {
      this.rpcClient.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  }
};
var DynamicFieldType = union([
  literal("DynamicField"),
  literal("DynamicObject")
]);
var DynamicFieldName = object({
  type: string(),
  value: any()
});
var DynamicFieldInfo = object({
  name: DynamicFieldName,
  bcsName: string(),
  type: DynamicFieldType,
  objectType: string(),
  objectId: ObjectId,
  version: number(),
  digest: string()
});
var DynamicFieldPage = object({
  data: array(DynamicFieldInfo),
  nextCursor: nullable(ObjectId),
  hasNextPage: boolean()
});
var getWebsocketUrl = (httpUrl, port) => {
  const url = new URL(httpUrl);
  url.protocol = url.protocol.replace("http", "ws");
  if (port) {
    url.port = port.toString();
  }
  return url.toString();
};
var isMinimumSubscriptionMessage = (msg) => msg && "subscription" in msg && typeof msg["subscription"] === "number" && "result" in msg && typeof msg["result"] === "object";
var DEFAULT_CLIENT_OPTIONS = {
  connectTimeout: 15e3,
  callTimeout: 3e4,
  reconnectInterval: 3e3,
  maxReconnects: 5
};
var SUBSCRIBE_EVENT_METHOD = "suix_subscribeEvent";
var UNSUBSCRIBE_EVENT_METHOD = "suix_unsubscribeEvent";
var WebsocketClient = class {
  constructor(endpoint, options = DEFAULT_CLIENT_OPTIONS) {
    this.endpoint = endpoint;
    this.options = options;
    this.connectionState = 0;
    this.connectionTimeout = null;
    this.isSetup = false;
    this.connectionPromise = null;
    this.eventSubscriptions = /* @__PURE__ */ new Map();
    if (this.endpoint.startsWith("http"))
      this.endpoint = getWebsocketUrl(this.endpoint);
    this.rpcClient = new import_rpc_websockets.Client(this.endpoint, {
      reconnect_interval: this.options.reconnectInterval,
      max_reconnects: this.options.maxReconnects,
      autoconnect: false
    });
  }
  setupSocket() {
    if (this.isSetup)
      return;
    this.rpcClient.on("open", () => {
      if (this.connectionTimeout) {
        clearTimeout(this.connectionTimeout);
        this.connectionTimeout = null;
      }
      this.connectionState = 2;
      this.rpcClient.socket.on("message", this.onSocketMessage.bind(this));
    });
    this.rpcClient.on("close", () => {
      this.connectionState = 0;
    });
    this.rpcClient.on("error", console.error);
    this.isSetup = true;
  }
  onSocketMessage(rawMessage) {
    const msg = JSON.parse(rawMessage);
    const params = msg.params;
    if (msg.method === SUBSCRIBE_EVENT_METHOD) {
      if (isMinimumSubscriptionMessage(params)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      } else if (is(params, SubscriptionEvent)) {
        const sub = this.eventSubscriptions.get(params.subscription);
        if (sub)
          sub.onMessage(params.result);
      }
    }
  }
  async connect() {
    if (this.connectionPromise)
      return this.connectionPromise;
    if (this.connectionState === 2)
      return Promise.resolve();
    this.setupSocket();
    this.rpcClient.connect();
    this.connectionState = 1;
    this.connectionPromise = new Promise((resolve, reject) => {
      this.connectionTimeout = setTimeout(() => reject(new Error("timeout")), this.options.connectTimeout);
      this.rpcClient.once("open", () => {
        this.refreshSubscriptions();
        this.connectionPromise = null;
        resolve();
      });
      this.rpcClient.once("error", (err) => {
        this.connectionPromise = null;
        reject(err);
      });
    });
    return this.connectionPromise;
  }
  async refreshSubscriptions() {
    if (this.eventSubscriptions.size === 0)
      return;
    try {
      let newSubs = /* @__PURE__ */ new Map();
      let newSubsArr = await Promise.all(Array.from(this.eventSubscriptions.values()).map(async (sub) => {
        const onMessage = sub.onMessage;
        const filter = sub.filter;
        if (!filter || !onMessage)
          return Promise.resolve(null);
        const id = await this.subscribeEvent(filter, onMessage);
        return {id, onMessage, filter};
      }));
      newSubsArr.forEach((entry) => {
        if (entry === null)
          return;
        const filter = entry.filter;
        const onMessage = entry.onMessage;
        newSubs.set(entry.id, {filter, onMessage});
      });
      this.eventSubscriptions = newSubs;
    } catch (err) {
      throw new Error(`error refreshing event subscriptions: ${err}`);
    }
  }
  async subscribeEvent(filter, onMessage) {
    try {
      if (this.connectionState !== 2)
        await this.connect();
      let subId = await this.rpcClient.call(SUBSCRIBE_EVENT_METHOD, [filter], this.options.callTimeout);
      this.eventSubscriptions.set(subId, {filter, onMessage});
      return subId;
    } catch (err) {
      throw new Error(`Error subscribing to event: ${JSON.stringify(err, null, 2)}, filter: ${JSON.stringify(filter)}`);
    }
  }
  async unsubscribeEvent(id) {
    try {
      if (this.connectionState !== 2)
        await this.connect();
      let removedOnNode = await this.rpcClient.call(UNSUBSCRIBE_EVENT_METHOD, [id], this.options.callTimeout);
      return this.eventSubscriptions.delete(id) || removedOnNode;
    } catch (err) {
      throw new Error(`Error unsubscribing from event: ${err}, subscription: ${id}`);
    }
  }
};
async function requestSuiFromFaucet(endpoint, recipient, httpHeaders) {
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      FixedAmountRequest: {
        recipient
      }
    }),
    headers: {
      "Content-Type": "application/json",
      ...httpHeaders || {}
    }
  });
  if (res.status === 429) {
    throw new FaucetRateLimitError(`Too many requests from this client have been sent to the faucet. Please retry later`);
  }
  let parsed;
  try {
    parsed = await res.json();
  } catch (e) {
    throw new Error(`Encountered error when parsing response from faucet, error: ${e}, status ${res.status}, response ${res}`);
  }
  if (parsed.error) {
    throw new Error(`Faucet returns error: ${parsed.error}`);
  }
  return parsed;
}
var _options;
var Connection = class {
  constructor(options) {
    __privateAdd(this, _options, void 0);
    __privateSet(this, _options, options);
  }
  get fullnode() {
    return __privateGet(this, _options).fullnode;
  }
  get websocket() {
    return __privateGet(this, _options).websocket || __privateGet(this, _options).fullnode;
  }
  get faucet() {
    return __privateGet(this, _options).faucet;
  }
};
_options = new WeakMap();
var localnetConnection = new Connection({
  fullnode: "http://127.0.0.1:9000",
  faucet: "http://127.0.0.1:9123/gas"
});
var devnetConnection = new Connection({
  fullnode: "https://fullnode.devnet.sui.io:443/",
  faucet: "https://faucet.devnet.sui.io/gas"
});
var testnetConnection = new Connection({
  fullnode: "https://fullnode.testnet.sui.io:443/",
  faucet: "https://faucet.testnet.sui.io/gas"
});
function create2(value, struct) {
  return create(value, struct);
}
var TRANSACTION_TYPE = Symbol("transaction-argument-type");
var option = (some) => union([
  object({None: union([literal(true), literal(null)])}),
  object({Some: some})
]);
var TransactionBlockInput = object({
  kind: literal("Input"),
  index: integer(),
  value: optional(any()),
  type: optional(union([literal("pure"), literal("object")]))
});
var TransactionArgumentTypes = [
  TransactionBlockInput,
  object({kind: literal("GasCoin")}),
  object({kind: literal("Result"), index: integer()}),
  object({
    kind: literal("NestedResult"),
    index: integer(),
    resultIndex: integer()
  })
];
var TransactionArgument = union([...TransactionArgumentTypes]);
var ObjectTransactionArgument = union([...TransactionArgumentTypes]);
ObjectTransactionArgument[TRANSACTION_TYPE] = {
  kind: "object"
};
var PureTransactionArgument = (type2) => {
  const struct = union([...TransactionArgumentTypes]);
  struct[TRANSACTION_TYPE] = {
    kind: "pure",
    type: type2
  };
  return struct;
};
var MoveCallTransaction = object({
  kind: literal("MoveCall"),
  target: define2("target", string().validator),
  typeArguments: array(string()),
  arguments: array(TransactionArgument)
});
var TransferObjectsTransaction = object({
  kind: literal("TransferObjects"),
  objects: array(ObjectTransactionArgument),
  address: PureTransactionArgument(BCS.ADDRESS)
});
var SplitCoinsTransaction = object({
  kind: literal("SplitCoins"),
  coin: ObjectTransactionArgument,
  amounts: array(PureTransactionArgument("u64"))
});
var MergeCoinsTransaction = object({
  kind: literal("MergeCoins"),
  destination: ObjectTransactionArgument,
  sources: array(ObjectTransactionArgument)
});
var MakeMoveVecTransaction = object({
  kind: literal("MakeMoveVec"),
  type: optional(option(string())),
  objects: array(ObjectTransactionArgument)
});
var PublishTransaction = object({
  kind: literal("Publish"),
  modules: array(array(integer())),
  dependencies: array(ObjectId)
});
var UpgradeTransaction = object({
  kind: literal("Upgrade"),
  modules: array(array(integer())),
  dependencies: array(ObjectId),
  packageId: ObjectId,
  ticket: ObjectTransactionArgument
});
var TransactionTypes = [
  MoveCallTransaction,
  TransferObjectsTransaction,
  SplitCoinsTransaction,
  MergeCoinsTransaction,
  PublishTransaction,
  UpgradeTransaction,
  MakeMoveVecTransaction
];
var TransactionType = union([...TransactionTypes]);
function getTransactionType(data) {
  assert(data, TransactionType);
  return TransactionTypes.find((schema) => is(data, schema));
}
var Transactions = {
  MoveCall(input) {
    return create2({
      kind: "MoveCall",
      target: input.target,
      arguments: input.arguments ?? [],
      typeArguments: input.typeArguments ?? []
    }, MoveCallTransaction);
  },
  TransferObjects(objects, address2) {
    return create2({kind: "TransferObjects", objects, address: address2}, TransferObjectsTransaction);
  },
  SplitCoins(coin, amounts) {
    return create2({kind: "SplitCoins", coin, amounts}, SplitCoinsTransaction);
  },
  MergeCoins(destination, sources) {
    return create2({kind: "MergeCoins", destination, sources}, MergeCoinsTransaction);
  },
  Publish({
    modules,
    dependencies
  }) {
    return create2({
      kind: "Publish",
      modules: modules.map((module2) => typeof module2 === "string" ? Array.from(fromB64(module2)) : module2),
      dependencies: dependencies.map((dep) => normalizeSuiObjectId(dep))
    }, PublishTransaction);
  },
  Upgrade({
    modules,
    dependencies,
    packageId,
    ticket
  }) {
    return create2({
      kind: "Upgrade",
      modules: modules.map((module2) => typeof module2 === "string" ? Array.from(fromB64(module2)) : module2),
      dependencies: dependencies.map((dep) => normalizeSuiObjectId(dep)),
      packageId,
      ticket
    }, UpgradeTransaction);
  },
  MakeMoveVec({
    type: type2,
    objects
  }) {
    return create2({
      kind: "MakeMoveVec",
      type: type2 ? {Some: type2} : {None: null},
      objects
    }, MakeMoveVecTransaction);
  }
};
var VECTOR_REGEX = /^vector<(.+)>$/;
var STRUCT_REGEX = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/;
var TypeTagSerializer = class {
  static parseFromStr(str, normalizeAddress = false) {
    if (str === "address") {
      return {address: null};
    } else if (str === "bool") {
      return {bool: null};
    } else if (str === "u8") {
      return {u8: null};
    } else if (str === "u16") {
      return {u16: null};
    } else if (str === "u32") {
      return {u32: null};
    } else if (str === "u64") {
      return {u64: null};
    } else if (str === "u128") {
      return {u128: null};
    } else if (str === "u256") {
      return {u256: null};
    } else if (str === "signer") {
      return {signer: null};
    }
    const vectorMatch = str.match(VECTOR_REGEX);
    if (vectorMatch) {
      return {
        vector: TypeTagSerializer.parseFromStr(vectorMatch[1], normalizeAddress)
      };
    }
    const structMatch = str.match(STRUCT_REGEX);
    if (structMatch) {
      const address2 = normalizeAddress ? normalizeSuiAddress(structMatch[1]) : structMatch[1];
      return {
        struct: {
          address: address2,
          module: structMatch[2],
          name: structMatch[3],
          typeParams: structMatch[5] === void 0 ? [] : TypeTagSerializer.parseStructTypeArgs(structMatch[5], normalizeAddress)
        }
      };
    }
    throw new Error(`Encountered unexpected token when parsing type args for ${str}`);
  }
  static parseStructTypeArgs(str, normalizeAddress = false) {
    const tok = [];
    let word = "";
    let nestedAngleBrackets = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === "<") {
        nestedAngleBrackets++;
      }
      if (char === ">") {
        nestedAngleBrackets--;
      }
      if (nestedAngleBrackets === 0 && char === ",") {
        tok.push(word.trim());
        word = "";
        continue;
      }
      word += char;
    }
    tok.push(word.trim());
    return tok.map((tok2) => TypeTagSerializer.parseFromStr(tok2, normalizeAddress));
  }
  static tagToString(tag) {
    if ("bool" in tag) {
      return "bool";
    }
    if ("u8" in tag) {
      return "u8";
    }
    if ("u16" in tag) {
      return "u16";
    }
    if ("u32" in tag) {
      return "u32";
    }
    if ("u64" in tag) {
      return "u64";
    }
    if ("u128" in tag) {
      return "u128";
    }
    if ("u256" in tag) {
      return "u256";
    }
    if ("address" in tag) {
      return "address";
    }
    if ("signer" in tag) {
      return "signer";
    }
    if ("vector" in tag) {
      return `vector<${TypeTagSerializer.tagToString(tag.vector)}>`;
    }
    if ("struct" in tag) {
      const struct = tag.struct;
      const typeParams = struct.typeParams.map(TypeTagSerializer.tagToString).join(", ");
      return `${struct.address}::${struct.module}::${struct.name}${typeParams ? `<${typeParams}>` : ""}`;
    }
    throw new Error("Invalid TypeTag");
  }
};
var ARGUMENT_INNER = "Argument";
var VECTOR2 = "vector";
var OPTION = "Option";
var CALL_ARG = "CallArg";
var TYPE_TAG = "TypeTag";
var PROGRAMMABLE_TX_BLOCK = "ProgrammableTransaction";
var PROGRAMMABLE_CALL_INNER = "ProgrammableMoveCall";
var TRANSACTION_INNER = "Transaction";
var ENUM_KIND = "EnumKind";
var TRANSACTION = [ENUM_KIND, TRANSACTION_INNER];
var ARGUMENT = [ENUM_KIND, ARGUMENT_INNER];
var PROGRAMMABLE_CALL = "SimpleProgrammableMoveCall";
var builder = new BCS(bcs).registerStructType(PROGRAMMABLE_TX_BLOCK, {
  inputs: [VECTOR2, CALL_ARG],
  transactions: [VECTOR2, TRANSACTION]
}).registerEnumType(ARGUMENT_INNER, {
  GasCoin: null,
  Input: {index: BCS.U16},
  Result: {index: BCS.U16},
  NestedResult: {index: BCS.U16, resultIndex: BCS.U16}
}).registerStructType(PROGRAMMABLE_CALL_INNER, {
  package: BCS.ADDRESS,
  module: BCS.STRING,
  function: BCS.STRING,
  type_arguments: [VECTOR2, TYPE_TAG],
  arguments: [VECTOR2, ARGUMENT]
}).registerEnumType(TRANSACTION_INNER, {
  MoveCall: PROGRAMMABLE_CALL,
  TransferObjects: {
    objects: [VECTOR2, ARGUMENT],
    address: ARGUMENT
  },
  SplitCoins: {coin: ARGUMENT, amounts: [VECTOR2, ARGUMENT]},
  MergeCoins: {destination: ARGUMENT, sources: [VECTOR2, ARGUMENT]},
  Publish: {
    modules: [VECTOR2, [VECTOR2, BCS.U8]],
    dependencies: [VECTOR2, BCS.ADDRESS]
  },
  MakeMoveVec: {
    type: [OPTION, TYPE_TAG],
    objects: [VECTOR2, ARGUMENT]
  },
  Upgrade: {
    modules: [VECTOR2, [VECTOR2, BCS.U8]],
    dependencies: [VECTOR2, BCS.ADDRESS],
    packageId: BCS.ADDRESS,
    ticket: ARGUMENT
  }
});
builder.registerType([ENUM_KIND, "T"], function encode(writer, data, typeParams, typeMap) {
  const kind = data.kind;
  const invariant = {[kind]: data};
  const [enumType] = typeParams;
  return this.getTypeInterface(enumType)._encodeRaw.call(this, writer, invariant, typeParams, typeMap);
}, function decode(reader, typeParams, typeMap) {
  const [enumType] = typeParams;
  const data = this.getTypeInterface(enumType)._decodeRaw.call(this, reader, typeParams, typeMap);
  const kind = Object.keys(data)[0];
  return {kind, ...data[kind]};
}, (data) => {
  if (typeof data !== "object" && !("kind" in data)) {
    throw new Error(`EnumKind: Missing property "kind" in the input ${JSON.stringify(data)}`);
  }
  return true;
});
builder.registerType(PROGRAMMABLE_CALL, function encodeProgrammableTx(writer, data, typeParams, typeMap) {
  const [pkg, module2, fun] = data.target.split("::");
  const type_arguments = data.typeArguments.map((tag) => TypeTagSerializer.parseFromStr(tag, true));
  return this.getTypeInterface(PROGRAMMABLE_CALL_INNER)._encodeRaw.call(this, writer, {
    package: normalizeSuiAddress(pkg),
    module: module2,
    function: fun,
    type_arguments,
    arguments: data.arguments
  }, typeParams, typeMap);
}, function decodeProgrammableTx(reader, typeParams, typeMap) {
  let data = builder.getTypeInterface(PROGRAMMABLE_CALL_INNER)._decodeRaw.call(this, reader, typeParams, typeMap);
  return {
    target: [data.package, data.module, data.function].join("::"),
    arguments: data.arguments,
    typeArguments: data.type_arguments.map(TypeTagSerializer.tagToString)
  };
}, (data) => {
  return data.target.split("::").length === 3;
});
var ObjectArg = union([
  object({ImmOrOwned: SuiObjectRef}),
  object({
    Shared: object({
      objectId: string(),
      initialSharedVersion: union([integer(), string()]),
      mutable: boolean()
    })
  })
]);
var PureCallArg = object({Pure: array(integer())});
var ObjectCallArg = object({Object: ObjectArg});
var BuilderCallArg = union([PureCallArg, ObjectCallArg]);
var MAX_PURE_ARGUMENT_SIZE = 16 * 1024;
var Inputs = {
  Pure(data, type2) {
    return {
      Pure: Array.from(data instanceof Uint8Array ? data : builder.ser(type2, data, {maxSize: MAX_PURE_ARGUMENT_SIZE}).toBytes())
    };
  },
  ObjectRef({objectId, digest, version}) {
    return {
      Object: {
        ImmOrOwned: {
          digest,
          version,
          objectId: normalizeSuiAddress(objectId)
        }
      }
    };
  },
  SharedObjectRef({
    objectId,
    mutable,
    initialSharedVersion
  }) {
    return {
      Object: {
        Shared: {
          mutable,
          initialSharedVersion,
          objectId: normalizeSuiAddress(objectId)
        }
      }
    };
  }
};
function getIdFromCallArg(arg) {
  if (typeof arg === "string") {
    return normalizeSuiAddress(arg);
  }
  if ("ImmOrOwned" in arg.Object) {
    return normalizeSuiAddress(arg.Object.ImmOrOwned.objectId);
  }
  return normalizeSuiAddress(arg.Object.Shared.objectId);
}
function getSharedObjectInput(arg) {
  return typeof arg === "object" && "Object" in arg && "Shared" in arg.Object ? arg.Object.Shared : void 0;
}
function isMutableSharedObjectInput(arg) {
  return getSharedObjectInput(arg)?.mutable ?? false;
}
var STD_ASCII_MODULE_NAME = "ascii";
var STD_ASCII_STRUCT_NAME = "String";
var STD_UTF8_MODULE_NAME = "string";
var STD_UTF8_STRUCT_NAME = "String";
var STD_OPTION_MODULE_NAME = "option";
var STD_OPTION_STRUCT_NAME = "Option";
var RESOLVED_SUI_ID = {
  address: SUI_FRAMEWORK_ADDRESS,
  module: OBJECT_MODULE_NAME,
  name: ID_STRUCT_NAME
};
var RESOLVED_ASCII_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_ASCII_MODULE_NAME,
  name: STD_ASCII_STRUCT_NAME
};
var RESOLVED_UTF8_STR = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_UTF8_MODULE_NAME,
  name: STD_UTF8_STRUCT_NAME
};
var RESOLVED_STD_OPTION = {
  address: MOVE_STDLIB_ADDRESS,
  module: STD_OPTION_MODULE_NAME,
  name: STD_OPTION_STRUCT_NAME
};
var isSameStruct = (a, b) => a.address === b.address && a.module === b.module && a.name === b.name;
function isTxContext(param) {
  const struct = extractStructTag(param)?.Struct;
  return struct?.address === "0x2" && struct?.module === "tx_context" && struct?.name === "TxContext";
}
function expectType(typeName, argVal) {
  if (typeof argVal === "undefined") {
    return;
  }
  if (typeof argVal !== typeName) {
    throw new Error(`Expect ${argVal} to be ${typeName}, received ${typeof argVal}`);
  }
}
var allowedTypes = [
  "Address",
  "Bool",
  "U8",
  "U16",
  "U32",
  "U64",
  "U128",
  "U256"
];
function getPureSerializationType(normalizedType, argVal) {
  if (typeof normalizedType === "string" && allowedTypes.includes(normalizedType)) {
    if (normalizedType in ["U8", "U16", "U32", "U64", "U128", "U256"]) {
      expectType("number", argVal);
    } else if (normalizedType === "Bool") {
      expectType("boolean", argVal);
    } else if (normalizedType === "Address") {
      expectType("string", argVal);
      if (argVal && !isValidSuiAddress(argVal)) {
        throw new Error("Invalid Sui Address");
      }
    }
    return normalizedType.toLowerCase();
  } else if (typeof normalizedType === "string") {
    throw new Error(`Unknown pure normalized type ${JSON.stringify(normalizedType, null, 2)}`);
  }
  if ("Vector" in normalizedType) {
    if ((argVal === void 0 || typeof argVal === "string") && normalizedType.Vector === "U8") {
      return "string";
    }
    if (argVal !== void 0 && !Array.isArray(argVal)) {
      throw new Error(`Expect ${argVal} to be a array, received ${typeof argVal}`);
    }
    const innerType = getPureSerializationType(normalizedType.Vector, argVal ? argVal[0] : void 0);
    if (innerType === void 0) {
      return;
    }
    return `vector<${innerType}>`;
  }
  if ("Struct" in normalizedType) {
    if (isSameStruct(normalizedType.Struct, RESOLVED_ASCII_STR)) {
      return "string";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_UTF8_STR)) {
      return "utf8string";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_SUI_ID)) {
      return "address";
    } else if (isSameStruct(normalizedType.Struct, RESOLVED_STD_OPTION)) {
      const optionToVec = {
        Vector: normalizedType.Struct.typeArguments[0]
      };
      return getPureSerializationType(optionToVec, argVal);
    }
  }
  return void 0;
}
function hashTypedData(typeTag, data) {
  const typeTagBytes = Array.from(`${typeTag}::`).map((e) => e.charCodeAt(0));
  const dataWithTag = new Uint8Array(typeTagBytes.length + data.length);
  dataWithTag.set(typeTagBytes);
  dataWithTag.set(data, typeTagBytes.length);
  return (0, import_blake2b4.blake2b)(dataWithTag, {dkLen: 32});
}
var TransactionExpiration = optional(nullable(union([
  object({Epoch: integer()}),
  object({None: union([literal(true), literal(null)])})
])));
var SuiAddress3 = string();
var StringEncodedBigint = define2("StringEncodedBigint", (val) => {
  if (!["string", "number", "bigint"].includes(typeof val))
    return false;
  try {
    BigInt(val);
    return true;
  } catch {
    return false;
  }
});
var GasConfig = object({
  budget: optional(StringEncodedBigint),
  price: optional(StringEncodedBigint),
  payment: optional(array(SuiObjectRef)),
  owner: optional(SuiAddress3)
});
var SerializedTransactionDataBuilder = object({
  version: literal(1),
  sender: optional(SuiAddress3),
  expiration: TransactionExpiration,
  gasConfig: GasConfig,
  inputs: array(TransactionBlockInput),
  transactions: array(TransactionType)
});
function prepareSuiAddress(address2) {
  return normalizeSuiAddress(address2).replace("0x", "");
}
var TRANSACTION_DATA_MAX_SIZE = 128 * 1024;
var TransactionBlockDataBuilder = class {
  constructor(clone) {
    this.version = 1;
    this.sender = clone?.sender;
    this.expiration = clone?.expiration;
    this.gasConfig = clone?.gasConfig ?? {};
    this.inputs = clone?.inputs ?? [];
    this.transactions = clone?.transactions ?? [];
  }
  static fromKindBytes(bytes) {
    const kind = builder.de("TransactionKind", bytes);
    const programmableTx = kind?.ProgrammableTransaction;
    if (!programmableTx) {
      throw new Error("Unable to deserialize from bytes.");
    }
    const serialized = create2({
      version: 1,
      gasConfig: {},
      inputs: programmableTx.inputs.map((value, index) => create2({
        kind: "Input",
        value,
        index,
        type: is(value, PureCallArg) ? "pure" : "object"
      }, TransactionBlockInput)),
      transactions: programmableTx.transactions
    }, SerializedTransactionDataBuilder);
    return TransactionBlockDataBuilder.restore(serialized);
  }
  static fromBytes(bytes) {
    const rawData = builder.de("TransactionData", bytes);
    const data = rawData?.V1;
    const programmableTx = data?.kind?.ProgrammableTransaction;
    if (!data || !programmableTx) {
      throw new Error("Unable to deserialize from bytes.");
    }
    const serialized = create2({
      version: 1,
      sender: data.sender,
      expiration: data.expiration,
      gasConfig: data.gasData,
      inputs: programmableTx.inputs.map((value, index) => create2({
        kind: "Input",
        value,
        index,
        type: is(value, PureCallArg) ? "pure" : "object"
      }, TransactionBlockInput)),
      transactions: programmableTx.transactions
    }, SerializedTransactionDataBuilder);
    return TransactionBlockDataBuilder.restore(serialized);
  }
  static restore(data) {
    assert(data, SerializedTransactionDataBuilder);
    const transactionData = new TransactionBlockDataBuilder();
    Object.assign(transactionData, data);
    return transactionData;
  }
  static getDigestFromBytes(bytes) {
    const hash = hashTypedData("TransactionData", bytes);
    return toB58(hash);
  }
  build({
    overrides,
    onlyTransactionKind
  } = {}) {
    const inputs = this.inputs.map((input) => {
      assert(input.value, BuilderCallArg);
      return input.value;
    });
    const kind = {
      ProgrammableTransaction: {
        inputs,
        transactions: this.transactions
      }
    };
    if (onlyTransactionKind) {
      return builder.ser("TransactionKind", kind, {maxSize: TRANSACTION_DATA_MAX_SIZE}).toBytes();
    }
    const expiration = overrides?.expiration ?? this.expiration;
    const sender = overrides?.sender ?? this.sender;
    const gasConfig = {...this.gasConfig, ...overrides?.gasConfig};
    if (!sender) {
      throw new Error("Missing transaction sender");
    }
    if (!gasConfig.budget) {
      throw new Error("Missing gas budget");
    }
    if (!gasConfig.payment) {
      throw new Error("Missing gas payment");
    }
    if (!gasConfig.price) {
      throw new Error("Missing gas price");
    }
    const transactionData = {
      sender: prepareSuiAddress(sender),
      expiration: expiration ? expiration : {None: true},
      gasData: {
        payment: gasConfig.payment,
        owner: prepareSuiAddress(this.gasConfig.owner ?? sender),
        price: BigInt(gasConfig.price),
        budget: BigInt(gasConfig.budget)
      },
      kind: {
        ProgrammableTransaction: {
          inputs,
          transactions: this.transactions
        }
      }
    };
    return builder.ser("TransactionData", {V1: transactionData}, {maxSize: TRANSACTION_DATA_MAX_SIZE}).toBytes();
  }
  getDigest() {
    const bytes = this.build({onlyTransactionKind: false});
    return TransactionBlockDataBuilder.getDigestFromBytes(bytes);
  }
  snapshot() {
    return create2(this, SerializedTransactionDataBuilder);
  }
};
function createTransactionResult(index) {
  const baseResult = {kind: "Result", index};
  const nestedResults = [];
  const nestedResultFor = (resultIndex) => nestedResults[resultIndex] ?? (nestedResults[resultIndex] = {
    kind: "NestedResult",
    index,
    resultIndex
  });
  return new Proxy(baseResult, {
    set() {
      throw new Error("The transaction result is a proxy, and does not support setting properties directly");
    },
    get(target, property) {
      if (property in target) {
        return Reflect.get(target, property);
      }
      if (property === Symbol.iterator) {
        return function* () {
          let i = 0;
          while (true) {
            yield nestedResultFor(i);
            i++;
          }
        };
      }
      if (typeof property === "symbol")
        return;
      const resultIndex = parseInt(property, 10);
      if (Number.isNaN(resultIndex) || resultIndex < 0)
        return;
      return nestedResultFor(resultIndex);
    }
  });
}
function expectProvider(provider) {
  if (!provider) {
    throw new Error(`No provider passed to Transaction#build, but transaction data was not sufficient to build offline.`);
  }
  return provider;
}
var TRANSACTION_BRAND = Symbol.for("@mysten/transaction");
var MAX_GAS_OBJECTS = 256;
var MAX_GAS = 5e10;
var GAS_SAFE_OVERHEAD = 1000n;
var MAX_OBJECTS_PER_FETCH = 50;
var chunk = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (_4, i) => arr.slice(i * size, i * size + size));
var _blockData;
var _input;
var input_fn;
var _prepareGasPayment;
var prepareGasPayment_fn;
var _prepareGasPrice;
var prepareGasPrice_fn;
var _prepareTransactions;
var prepareTransactions_fn;
var _prepare;
var prepare_fn;
var _TransactionBlock = class {
  constructor(transaction) {
    __privateAdd(this, _input);
    __privateAdd(this, _prepareGasPayment);
    __privateAdd(this, _prepareGasPrice);
    __privateAdd(this, _prepareTransactions);
    __privateAdd(this, _prepare);
    __privateAdd(this, _blockData, void 0);
    __privateSet(this, _blockData, new TransactionBlockDataBuilder(transaction ? transaction.blockData : void 0));
  }
  static is(obj) {
    return !!obj && typeof obj === "object" && obj[TRANSACTION_BRAND] === true;
  }
  static fromKind(serialized) {
    const tx = new _TransactionBlock();
    __privateSet(tx, _blockData, TransactionBlockDataBuilder.fromKindBytes(typeof serialized === "string" ? fromB64(serialized) : serialized));
    return tx;
  }
  static from(serialized) {
    const tx = new _TransactionBlock();
    if (typeof serialized !== "string" || !serialized.startsWith("{")) {
      __privateSet(tx, _blockData, TransactionBlockDataBuilder.fromBytes(typeof serialized === "string" ? fromB64(serialized) : serialized));
    } else {
      __privateSet(tx, _blockData, TransactionBlockDataBuilder.restore(JSON.parse(serialized)));
    }
    return tx;
  }
  static get Transactions() {
    return Transactions;
  }
  static get Inputs() {
    return Inputs;
  }
  setSender(sender) {
    __privateGet(this, _blockData).sender = sender;
  }
  setSenderIfNotSet(sender) {
    if (!__privateGet(this, _blockData).sender) {
      __privateGet(this, _blockData).sender = sender;
    }
  }
  setExpiration(expiration) {
    __privateGet(this, _blockData).expiration = expiration;
  }
  setGasPrice(price) {
    __privateGet(this, _blockData).gasConfig.price = String(price);
  }
  setGasBudget(budget) {
    __privateGet(this, _blockData).gasConfig.budget = String(budget);
  }
  setGasOwner(owner) {
    __privateGet(this, _blockData).gasConfig.owner = owner;
  }
  setGasPayment(payments) {
    if (payments.length >= MAX_GAS_OBJECTS) {
      throw new Error(`Payment objects exceed maximum amount ${MAX_GAS_OBJECTS}`);
    }
    __privateGet(this, _blockData).gasConfig.payment = payments.map((payment) => mask(payment, SuiObjectRef));
  }
  get blockData() {
    return __privateGet(this, _blockData).snapshot();
  }
  get [TRANSACTION_BRAND]() {
    return true;
  }
  get gas() {
    return {kind: "GasCoin"};
  }
  object(value) {
    const id = getIdFromCallArg(value);
    const inserted = __privateGet(this, _blockData).inputs.find((i) => i.type === "object" && id === getIdFromCallArg(i.value));
    return inserted ?? __privateMethod(this, _input, input_fn).call(this, "object", value);
  }
  objectRef(...args) {
    return this.object(Inputs.ObjectRef(...args));
  }
  sharedObjectRef(...args) {
    return this.object(Inputs.SharedObjectRef(...args));
  }
  pure(value, type2) {
    return __privateMethod(this, _input, input_fn).call(this, "pure", value instanceof Uint8Array ? Inputs.Pure(value) : type2 ? Inputs.Pure(value, type2) : value);
  }
  add(transaction) {
    const index = __privateGet(this, _blockData).transactions.push(transaction);
    return createTransactionResult(index - 1);
  }
  splitCoins(...args) {
    return this.add(Transactions.SplitCoins(...args));
  }
  mergeCoins(...args) {
    return this.add(Transactions.MergeCoins(...args));
  }
  publish(...args) {
    return this.add(Transactions.Publish(...args));
  }
  upgrade(...args) {
    return this.add(Transactions.Upgrade(...args));
  }
  moveCall(...args) {
    return this.add(Transactions.MoveCall(...args));
  }
  transferObjects(...args) {
    return this.add(Transactions.TransferObjects(...args));
  }
  makeMoveVec(...args) {
    return this.add(Transactions.MakeMoveVec(...args));
  }
  serialize() {
    return JSON.stringify(__privateGet(this, _blockData).snapshot());
  }
  async build({
    provider,
    onlyTransactionKind
  } = {}) {
    await __privateMethod(this, _prepare, prepare_fn).call(this, {provider, onlyTransactionKind});
    return __privateGet(this, _blockData).build({onlyTransactionKind});
  }
  async getDigest({
    provider
  } = {}) {
    await __privateMethod(this, _prepare, prepare_fn).call(this, {provider});
    return __privateGet(this, _blockData).getDigest();
  }
};
var TransactionBlock = _TransactionBlock;
_blockData = new WeakMap();
_input = new WeakSet();
input_fn = function(type2, value) {
  const index = __privateGet(this, _blockData).inputs.length;
  const input = create2({
    kind: "Input",
    value: typeof value === "bigint" ? String(value) : value,
    index,
    type: type2
  }, TransactionBlockInput);
  __privateGet(this, _blockData).inputs.push(input);
  return input;
};
_prepareGasPayment = new WeakSet();
prepareGasPayment_fn = async function({provider, onlyTransactionKind}) {
  if (onlyTransactionKind || __privateGet(this, _blockData).gasConfig.payment) {
    return;
  }
  const gasOwner = __privateGet(this, _blockData).gasConfig.owner ?? __privateGet(this, _blockData).sender;
  const coins = await expectProvider(provider).getCoins({
    owner: gasOwner,
    coinType: SUI_TYPE_ARG
  });
  const paymentCoins = coins.data.filter((coin) => {
    const matchingInput = __privateGet(this, _blockData).inputs.find((input) => {
      if (is(input.value, BuilderCallArg) && "Object" in input.value && "ImmOrOwned" in input.value.Object) {
        return coin.coinObjectId === input.value.Object.ImmOrOwned.objectId;
      }
      return false;
    });
    return !matchingInput;
  }).slice(0, MAX_GAS_OBJECTS - 1).map((coin) => ({
    objectId: coin.coinObjectId,
    digest: coin.digest,
    version: coin.version
  }));
  if (!paymentCoins.length) {
    throw new Error("No valid gas coins found for the transaction.");
  }
  this.setGasPayment(paymentCoins);
};
_prepareGasPrice = new WeakSet();
prepareGasPrice_fn = async function({provider, onlyTransactionKind}) {
  if (onlyTransactionKind || __privateGet(this, _blockData).gasConfig.price) {
    return;
  }
  this.setGasPrice(await expectProvider(provider).getReferenceGasPrice());
};
_prepareTransactions = new WeakSet();
prepareTransactions_fn = async function(provider) {
  const {inputs, transactions} = __privateGet(this, _blockData);
  const moveModulesToResolve = [];
  const objectsToResolve = [];
  transactions.forEach((transaction) => {
    if (transaction.kind === "MoveCall") {
      const needsResolution = transaction.arguments.some((arg) => arg.kind === "Input" && !is(inputs[arg.index].value, BuilderCallArg));
      if (needsResolution) {
        moveModulesToResolve.push(transaction);
      }
      return;
    }
    const transactionType = getTransactionType(transaction);
    if (!transactionType.schema)
      return;
    Object.entries(transaction).forEach(([key, value]) => {
      if (key === "kind")
        return;
      const keySchema = transactionType.schema[key];
      const isArray = keySchema.type === "array";
      const wellKnownEncoding = isArray ? keySchema.schema[TRANSACTION_TYPE] : keySchema[TRANSACTION_TYPE];
      if (!wellKnownEncoding)
        return;
      const encodeInput = (index) => {
        const input = inputs[index];
        if (!input) {
          throw new Error(`Missing input ${value.index}`);
        }
        if (is(input.value, BuilderCallArg))
          return;
        if (wellKnownEncoding.kind === "object" && typeof input.value === "string") {
          objectsToResolve.push({id: input.value, input});
        } else if (wellKnownEncoding.kind === "pure") {
          input.value = Inputs.Pure(input.value, wellKnownEncoding.type);
        } else {
          throw new Error("Unexpected input format.");
        }
      };
      if (isArray) {
        value.forEach((arrayItem) => {
          if (arrayItem.kind !== "Input")
            return;
          encodeInput(arrayItem.index);
        });
      } else {
        if (value.kind !== "Input")
          return;
        encodeInput(value.index);
      }
    });
  });
  if (moveModulesToResolve.length) {
    await Promise.all(moveModulesToResolve.map(async (moveCall) => {
      const [packageId, moduleName, functionName] = moveCall.target.split("::");
      const normalized = await expectProvider(provider).getNormalizedMoveFunction({
        package: normalizeSuiObjectId(packageId),
        module: moduleName,
        function: functionName
      });
      const hasTxContext = normalized.parameters.length > 0 && isTxContext(normalized.parameters.at(-1));
      const params = hasTxContext ? normalized.parameters.slice(0, normalized.parameters.length - 1) : normalized.parameters;
      if (params.length !== moveCall.arguments.length) {
        throw new Error("Incorrect number of arguments.");
      }
      params.forEach((param, i) => {
        const arg = moveCall.arguments[i];
        if (arg.kind !== "Input")
          return;
        const input = inputs[arg.index];
        if (is(input.value, BuilderCallArg))
          return;
        const inputValue = input.value;
        const serType = getPureSerializationType(param, inputValue);
        if (serType) {
          input.value = Inputs.Pure(inputValue, serType);
          return;
        }
        const structVal = extractStructTag(param);
        if (structVal != null || typeof param === "object" && "TypeParameter" in param) {
          if (typeof inputValue !== "string") {
            throw new Error(`Expect the argument to be an object id string, got ${JSON.stringify(inputValue, null, 2)}`);
          }
          objectsToResolve.push({
            id: inputValue,
            input,
            normalizedType: param
          });
          return;
        }
        throw new Error(`Unknown call arg type ${JSON.stringify(param, null, 2)} for value ${JSON.stringify(inputValue, null, 2)}`);
      });
    }));
  }
  if (objectsToResolve.length) {
    const dedupedIds = [...new Set(objectsToResolve.map(({id}) => id))];
    const objectChunks = chunk(dedupedIds, MAX_OBJECTS_PER_FETCH);
    const objects = (await Promise.all(objectChunks.map((chunk2) => expectProvider(provider).multiGetObjects({
      ids: chunk2,
      options: {showOwner: true}
    })))).flat();
    let objectsById = new Map(dedupedIds.map((id, index) => {
      return [id, objects[index]];
    }));
    const invalidObjects = Array.from(objectsById).filter(([_4, obj]) => obj.error).map(([id, _4]) => id);
    if (invalidObjects.length) {
      throw new Error(`The following input objects are not invalid: ${invalidObjects.join(", ")}`);
    }
    objectsToResolve.forEach(({id, input, normalizedType}) => {
      const object18 = objectsById.get(id);
      const initialSharedVersion = getSharedObjectInitialVersion(object18);
      if (initialSharedVersion) {
        const mutable = isMutableSharedObjectInput(input.value) || normalizedType != null && extractMutableReference(normalizedType) != null;
        input.value = Inputs.SharedObjectRef({
          objectId: id,
          initialSharedVersion,
          mutable
        });
      } else {
        input.value = Inputs.ObjectRef(getObjectReference(object18));
      }
    });
  }
};
_prepare = new WeakSet();
prepare_fn = async function({provider, onlyTransactionKind}) {
  if (!onlyTransactionKind && !__privateGet(this, _blockData).sender) {
    throw new Error("Missing transaction sender");
  }
  await Promise.all([
    __privateMethod(this, _prepareGasPrice, prepareGasPrice_fn).call(this, {provider, onlyTransactionKind}),
    __privateMethod(this, _prepareTransactions, prepareTransactions_fn).call(this, provider)
  ]);
  if (!onlyTransactionKind) {
    await __privateMethod(this, _prepareGasPayment, prepareGasPayment_fn).call(this, {provider, onlyTransactionKind});
    if (!__privateGet(this, _blockData).gasConfig.budget) {
      const dryRunResult = await expectProvider(provider).dryRunTransactionBlock({
        transactionBlock: __privateGet(this, _blockData).build({
          overrides: {
            gasConfig: {
              budget: String(MAX_GAS),
              payment: []
            }
          }
        })
      });
      if (dryRunResult.effects.status.status !== "success") {
        throw new Error(`Dry run failed, could not automatically determine a budget: ${dryRunResult.effects.status.error}`, {cause: dryRunResult});
      }
      const safeOverhead = GAS_SAFE_OVERHEAD * BigInt(this.blockData.gasConfig.price || 1n);
      const baseComputationCostWithOverhead = BigInt(dryRunResult.effects.gasUsed.computationCost) + safeOverhead;
      const gasBudget = baseComputationCostWithOverhead + BigInt(dryRunResult.effects.gasUsed.storageCost) - BigInt(dryRunResult.effects.gasUsed.storageRebate);
      this.setGasBudget(gasBudget > baseComputationCostWithOverhead ? gasBudget : baseComputationCostWithOverhead);
    }
  }
};
var NetworkMetrics = object({
  currentTps: number(),
  tps30Days: number(),
  currentCheckpoint: string(),
  currentEpoch: string(),
  totalAddresses: string(),
  totalObjects: string(),
  totalPackages: string()
});
var DEFAULT_OPTIONS = {
  socketOptions: DEFAULT_CLIENT_OPTIONS,
  versionCacheTimeoutInSeconds: 600
};
var JsonRpcProvider = class {
  constructor(connection = devnetConnection, options = DEFAULT_OPTIONS) {
    this.options = options;
    this.connection = connection;
    const opts = {...DEFAULT_OPTIONS, ...options};
    this.options = opts;
    this.client = opts.rpcClient ?? new JsonRpcClient(this.connection.fullnode);
    this.wsClient = opts.websocketClient ?? new WebsocketClient(this.connection.websocket, opts.socketOptions);
  }
  async getRpcApiVersion() {
    if (this.rpcApiVersion && this.cacheExpiry && this.cacheExpiry <= Date.now()) {
      return this.rpcApiVersion;
    }
    try {
      const resp = await this.client.requestWithType("rpc.discover", [], any());
      this.rpcApiVersion = resp.info.version;
      this.cacheExpiry = Date.now() + (this.options.versionCacheTimeoutInSeconds ?? 0) * 1e3;
      return this.rpcApiVersion;
    } catch (err) {
      console.warn("Error fetching version number of the RPC API", err);
    }
    return void 0;
  }
  async requestSuiFromFaucet(recipient, httpHeaders) {
    if (!this.connection.faucet) {
      throw new Error("Faucet URL is not specified");
    }
    return requestSuiFromFaucet(this.connection.faucet, recipient, httpHeaders);
  }
  async getCoins(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getCoins", [input.owner, input.coinType, input.cursor, input.limit], PaginatedCoins);
  }
  async getAllCoins(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getAllCoins", [input.owner, input.cursor, input.limit], PaginatedCoins);
  }
  async getBalance(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getBalance", [input.owner, input.coinType], CoinBalance);
  }
  async getAllBalances(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getAllBalances", [input.owner], array(CoinBalance));
  }
  async getCoinMetadata(input) {
    return await this.client.requestWithType("suix_getCoinMetadata", [input.coinType], CoinMetadataStruct);
  }
  async getTotalSupply(input) {
    return await this.client.requestWithType("suix_getTotalSupply", [input.coinType], CoinSupply);
  }
  async call(method, args) {
    const response = await this.client.request(method, args);
    if (is(response, ErrorResponse)) {
      throw new RPCError({
        req: {method, args},
        code: response.error.code,
        data: response.error.data,
        cause: new Error(response.error.message)
      });
    }
    return response.result;
  }
  async getMoveFunctionArgTypes(input) {
    return await this.client.requestWithType("sui_getMoveFunctionArgTypes", [input.package, input.module, input.function], SuiMoveFunctionArgTypes);
  }
  async getNormalizedMoveModulesByPackage(input) {
    return await this.client.requestWithType("sui_getNormalizedMoveModulesByPackage", [input.package], SuiMoveNormalizedModules);
  }
  async getNormalizedMoveModule(input) {
    return await this.client.requestWithType("sui_getNormalizedMoveModule", [input.package, input.module], SuiMoveNormalizedModule);
  }
  async getNormalizedMoveFunction(input) {
    return await this.client.requestWithType("sui_getNormalizedMoveFunction", [input.package, input.module, input.function], SuiMoveNormalizedFunction);
  }
  async getNormalizedMoveStruct(input) {
    return await this.client.requestWithType("sui_getNormalizedMoveStruct", [input.package, input.module, input.struct], SuiMoveNormalizedStruct);
  }
  async getOwnedObjects(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getOwnedObjects", [
      input.owner,
      {
        filter: input.filter,
        options: input.options
      },
      input.cursor,
      input.limit
    ], PaginatedObjectsResponse);
  }
  async getObject(input) {
    if (!input.id || !isValidSuiObjectId(normalizeSuiObjectId(input.id))) {
      throw new Error("Invalid Sui Object id");
    }
    return await this.client.requestWithType("sui_getObject", [input.id, input.options], SuiObjectResponse);
  }
  async multiGetObjects(input) {
    input.ids.forEach((id) => {
      if (!id || !isValidSuiObjectId(normalizeSuiObjectId(id))) {
        throw new Error(`Invalid Sui Object id ${id}`);
      }
    });
    const hasDuplicates = input.ids.length !== new Set(input.ids).size;
    if (hasDuplicates) {
      throw new Error(`Duplicate object ids in batch call ${input.ids}`);
    }
    return await this.client.requestWithType("sui_multiGetObjects", [input.ids, input.options], array(SuiObjectResponse));
  }
  async queryTransactionBlocks(input) {
    return await this.client.requestWithType("suix_queryTransactionBlocks", [
      {
        filter: input.filter,
        options: input.options
      },
      input.cursor,
      input.limit,
      (input.order || "descending") === "descending"
    ], PaginatedTransactionResponse);
  }
  async getTransactionBlock(input) {
    if (!isValidTransactionDigest(input.digest)) {
      throw new Error("Invalid Transaction digest");
    }
    return await this.client.requestWithType("sui_getTransactionBlock", [input.digest, input.options], SuiTransactionBlockResponse);
  }
  async multiGetTransactionBlocks(input) {
    input.digests.forEach((d) => {
      if (!isValidTransactionDigest(d)) {
        throw new Error(`Invalid Transaction digest ${d}`);
      }
    });
    const hasDuplicates = input.digests.length !== new Set(input.digests).size;
    if (hasDuplicates) {
      throw new Error(`Duplicate digests in batch call ${input.digests}`);
    }
    return await this.client.requestWithType("sui_multiGetTransactionBlocks", [input.digests, input.options], array(SuiTransactionBlockResponse));
  }
  async executeTransactionBlock(input) {
    return await this.client.requestWithType("sui_executeTransactionBlock", [
      typeof input.transactionBlock === "string" ? input.transactionBlock : toB64(input.transactionBlock),
      Array.isArray(input.signature) ? input.signature : [input.signature],
      input.options,
      input.requestType
    ], SuiTransactionBlockResponse);
  }
  async getTotalTransactionBlocks() {
    const resp = await this.client.requestWithType("sui_getTotalTransactionBlocks", [], string());
    return BigInt(resp);
  }
  async getReferenceGasPrice() {
    const resp = await this.client.requestWithType("suix_getReferenceGasPrice", [], string());
    return BigInt(resp);
  }
  async getStakes(input) {
    if (!input.owner || !isValidSuiAddress(normalizeSuiAddress(input.owner))) {
      throw new Error("Invalid Sui address");
    }
    return await this.client.requestWithType("suix_getStakes", [input.owner], array(DelegatedStake));
  }
  async getStakesByIds(input) {
    input.stakedSuiIds.forEach((id) => {
      if (!id || !isValidSuiObjectId(normalizeSuiObjectId(id))) {
        throw new Error(`Invalid Sui Stake id ${id}`);
      }
    });
    return await this.client.requestWithType("suix_getStakesByIds", [input.stakedSuiIds], array(DelegatedStake));
  }
  async getLatestSuiSystemState() {
    return await this.client.requestWithType("suix_getLatestSuiSystemState", [], SuiSystemStateSummary);
  }
  async queryEvents(input) {
    return await this.client.requestWithType("suix_queryEvents", [
      input.query,
      input.cursor,
      input.limit,
      (input.order || "descending") === "descending"
    ], PaginatedEvents);
  }
  async subscribeEvent(input) {
    return this.wsClient.subscribeEvent(input.filter, input.onMessage);
  }
  async unsubscribeEvent(input) {
    return this.wsClient.unsubscribeEvent(input.id);
  }
  async devInspectTransactionBlock(input) {
    let devInspectTxBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(input.sender);
      devInspectTxBytes = toB64(await input.transactionBlock.build({
        provider: this,
        onlyTransactionKind: true
      }));
    } else if (typeof input.transactionBlock === "string") {
      devInspectTxBytes = input.transactionBlock;
    } else if (input.transactionBlock instanceof Uint8Array) {
      devInspectTxBytes = toB64(input.transactionBlock);
    } else {
      throw new Error("Unknown transaction block format.");
    }
    return await this.client.requestWithType("sui_devInspectTransactionBlock", [input.sender, devInspectTxBytes, input.gasPrice, input.epoch], DevInspectResults);
  }
  async dryRunTransactionBlock(input) {
    return await this.client.requestWithType("sui_dryRunTransactionBlock", [
      typeof input.transactionBlock === "string" ? input.transactionBlock : toB64(input.transactionBlock)
    ], DryRunTransactionBlockResponse);
  }
  async getDynamicFields(input) {
    if (!input.parentId || !isValidSuiObjectId(normalizeSuiObjectId(input.parentId))) {
      throw new Error("Invalid Sui Object id");
    }
    return await this.client.requestWithType("suix_getDynamicFields", [input.parentId, input.cursor, input.limit], DynamicFieldPage);
  }
  async getDynamicFieldObject(input) {
    return await this.client.requestWithType("suix_getDynamicFieldObject", [input.parentId, input.name], SuiObjectResponse);
  }
  async getLatestCheckpointSequenceNumber() {
    const resp = await this.client.requestWithType("sui_getLatestCheckpointSequenceNumber", [], string());
    return String(resp);
  }
  async getCheckpoint(input) {
    return await this.client.requestWithType("sui_getCheckpoint", [input.id], Checkpoint);
  }
  async getCheckpoints(input) {
    const version = await this.getRpcApiVersion();
    const resp = await this.client.requestWithType("sui_getCheckpoints", [
      input.cursor,
      version && (0, import_femver.lt)(version, "0.32.0") ? String(input?.limit) : input?.limit,
      input.descendingOrder
    ], CheckpointPage);
    return resp;
  }
  async getCommitteeInfo(input) {
    return await this.client.requestWithType("suix_getCommitteeInfo", [input?.epoch], CommitteeInfo);
  }
  async getNetworkMetrics() {
    return await this.client.requestWithType("suix_getNetworkMetrics", [], NetworkMetrics);
  }
  async getEpochs(input) {
    const version = await this.getRpcApiVersion();
    return await this.client.requestWithType("suix_getEpochs", [
      input?.cursor,
      version && (0, import_femver.lt)(version, "0.32.0") ? String(input?.limit) : input?.limit,
      input?.descendingOrder
    ], EpochPage);
  }
  async getMoveCallMetrics() {
    return await this.client.requestWithType("suix_getMoveCallMetrics", [], MoveCallMetrics);
  }
  async getCurrentEpoch() {
    return await this.client.requestWithType("suix_getCurrentEpoch", [], EpochInfo);
  }
  async getValidatorsApy() {
    return await this.client.requestWithType("suix_getValidatorsApy", [], ValidatorsApy);
  }
  async waitForTransactionBlock({
    signal,
    timeout = 60 * 1e3,
    pollInterval = 2 * 1e3,
    ...input
  }) {
    const timeoutSignal = AbortSignal.timeout(timeout);
    const timeoutPromise = new Promise((_4, reject) => {
      timeoutSignal.addEventListener("abort", () => reject(timeoutSignal.reason));
    });
    while (!timeoutSignal.aborted) {
      signal?.throwIfAborted();
      try {
        return await this.getTransactionBlock(input);
      } catch (e) {
        await Promise.race([
          new Promise((resolve) => setTimeout(resolve, pollInterval)),
          timeoutPromise
        ]);
      }
    }
    timeoutSignal.throwIfAborted();
    throw new Error("Unexpected error while waiting for transaction block.");
  }
};
var IntentScope = /* @__PURE__ */ ((IntentScope3) => {
  IntentScope3[IntentScope3["TransactionData"] = 0] = "TransactionData";
  IntentScope3[IntentScope3["TransactionEffects"] = 1] = "TransactionEffects";
  IntentScope3[IntentScope3["CheckpointSummary"] = 2] = "CheckpointSummary";
  IntentScope3[IntentScope3["PersonalMessage"] = 3] = "PersonalMessage";
  return IntentScope3;
})(IntentScope || {});
function intentWithScope(scope) {
  return [scope, 0, 0];
}
function messageWithIntent(scope, message) {
  const intent = intentWithScope(scope);
  const intentMessage = new Uint8Array(intent.length + message.length);
  intentMessage.set(intent);
  intentMessage.set(message, intent.length);
  return intentMessage;
}
var SignerWithProvider = class {
  async requestSuiFromFaucet(httpHeaders) {
    return this.provider.requestSuiFromFaucet(await this.getAddress(), httpHeaders);
  }
  constructor(provider) {
    this.provider = provider;
  }
  async signMessage(input) {
    const signature = await this.signData(messageWithIntent(3, input.message));
    return {
      messageBytes: toB64(input.message),
      signature
    };
  }
  async signTransactionBlock(input) {
    let transactionBlockBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(await this.getAddress());
      transactionBlockBytes = await input.transactionBlock.build({
        provider: this.provider
      });
    } else if (input.transactionBlock instanceof Uint8Array) {
      transactionBlockBytes = input.transactionBlock;
    } else {
      throw new Error("Unknown transaction format");
    }
    const intentMessage = messageWithIntent(0, transactionBlockBytes);
    const signature = await this.signData(intentMessage);
    return {
      transactionBlockBytes: toB64(transactionBlockBytes),
      signature
    };
  }
  async signAndExecuteTransactionBlock(input) {
    const {transactionBlockBytes, signature} = await this.signTransactionBlock({
      transactionBlock: input.transactionBlock
    });
    return await this.provider.executeTransactionBlock({
      transactionBlock: transactionBlockBytes,
      signature,
      options: input.options,
      requestType: input.requestType
    });
  }
  async getTransactionBlockDigest(tx) {
    if (TransactionBlock.is(tx)) {
      tx.setSenderIfNotSet(await this.getAddress());
      return tx.getDigest({provider: this.provider});
    } else if (tx instanceof Uint8Array) {
      return TransactionBlockDataBuilder.getDigestFromBytes(tx);
    } else {
      throw new Error("Unknown transaction format.");
    }
  }
  async devInspectTransactionBlock(input) {
    const address2 = await this.getAddress();
    return this.provider.devInspectTransactionBlock({
      sender: address2,
      ...input
    });
  }
  async dryRunTransactionBlock(input) {
    let dryRunTxBytes;
    if (TransactionBlock.is(input.transactionBlock)) {
      input.transactionBlock.setSenderIfNotSet(await this.getAddress());
      dryRunTxBytes = await input.transactionBlock.build({
        provider: this.provider
      });
    } else if (typeof input.transactionBlock === "string") {
      dryRunTxBytes = fromB64(input.transactionBlock);
    } else if (input.transactionBlock instanceof Uint8Array) {
      dryRunTxBytes = input.transactionBlock;
    } else {
      throw new Error("Unknown transaction format");
    }
    return this.provider.dryRunTransactionBlock({
      transactionBlock: dryRunTxBytes
    });
  }
  async getGasCostEstimation(...args) {
    const txEffects = await this.dryRunTransactionBlock(...args);
    const gasEstimation = getTotalGasUsedUpperBound(txEffects.effects);
    if (typeof gasEstimation === "undefined") {
      throw new Error("Failed to estimate the gas cost from transaction");
    }
    return gasEstimation;
  }
};
var RawSigner = class extends SignerWithProvider {
  constructor(keypair, provider) {
    super(provider);
    this.keypair = keypair;
  }
  async getAddress() {
    return this.keypair.getPublicKey().toSuiAddress();
  }
  async signData(data) {
    const pubkey = this.keypair.getPublicKey();
    const digest = (0, import_blake2b5.blake2b)(data, {dkLen: 32});
    const signature = this.keypair.signData(digest);
    const signatureScheme = this.keypair.getKeyScheme();
    return toSerializedSignature({
      signatureScheme,
      signature,
      pubKey: pubkey
    });
  }
  connect(provider) {
    return new RawSigner(this.keypair, provider);
  }
};
async function verifyMessage(message, serializedSignature, scope) {
  const signature = fromSerializedSignature(serializedSignature);
  const messageBytes = messageWithIntent(scope, typeof message === "string" ? fromB64(message) : message);
  const digest = (0, import_blake2b6.blake2b)(messageBytes, {dkLen: 32});
  switch (signature.signatureScheme) {
    case "ED25519":
      return import_tweetnacl3.default.sign.detached.verify(digest, signature.signature, signature.pubKey.toBytes());
    case "Secp256k1":
      return import_secp256k13.secp256k1.verify(import_secp256k13.secp256k1.Signature.fromCompact(signature.signature), (0, import_sha2563.sha256)(digest), signature.pubKey.toBytes());
    default:
      throw new Error(`Unknown signature scheme: "${signature.signatureScheme}"`);
  }
}
var SUI_SYSTEM_STATE_OBJECT_ID = normalizeSuiObjectId("0x5");

// src/components/EthosConnectProvider.tsx
var import_react28 = __toModule(require("react"));

// src/components/styled/SignInModal.tsx
var import_react23 = __toModule(require("react"));

// src/components/svg/Loader.tsx
var import_react = __toModule(require("react"));
var Loader = ({width = 100, color = "#333"}) => /* @__PURE__ */ import_react.default.createElement("svg", {
  version: "1.1",
  id: "L4",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 54 20",
  width,
  height: width * (20 / 54),
  enableBackground: "new 0 0 0 0"
}, /* @__PURE__ */ import_react.default.createElement("circle", {
  fill: color,
  stroke: "none",
  cx: "6",
  cy: "10",
  r: "6"
}, /* @__PURE__ */ import_react.default.createElement("animate", {
  attributeName: "opacity",
  dur: "1.5s",
  values: "0;1;0",
  repeatCount: "indefinite",
  begin: "0.1"
})), /* @__PURE__ */ import_react.default.createElement("circle", {
  fill: color,
  stroke: "none",
  cx: "26",
  cy: "10",
  r: "6"
}, /* @__PURE__ */ import_react.default.createElement("animate", {
  attributeName: "opacity",
  dur: "1.5s",
  values: "0;1;0",
  repeatCount: "indefinite",
  begin: "0.5"
})), /* @__PURE__ */ import_react.default.createElement("circle", {
  fill: color,
  stroke: "none",
  cx: "46",
  cy: "10",
  r: "6"
}, /* @__PURE__ */ import_react.default.createElement("animate", {
  attributeName: "opacity",
  dur: "1.5s",
  values: "0;1;0",
  repeatCount: "indefinite",
  begin: "1.0"
})));
var Loader_default = Loader;

// src/components/svg/WalletsIcon.tsx
var import_react2 = __toModule(require("react"));
var WalletsIcon = ({width = 32}) => /* @__PURE__ */ import_react2.default.createElement("img", {
  src: dataUri,
  width,
  height: width
});
var WalletsIcon_default = WalletsIcon;
var dataUri = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAAQdIdCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjU2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjU2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiB3yYcAAAgwSURBVFgJrZddiJ1HGcefmXfe9z3n7G42yTYamy9sklZT0XilAeuFdwXxQrD4gVKwF6IXohdS8CYXJWJFwQvprXhTaOhVFakFjbGWioqItKYXprVda0OaNNnd8/F+jr//nN1k16RCwLM778w8M2f+//k/zzzzHme3+Zw+/Zuw+94TK7mvDucxHCws3h2ie19u9p68d3vy3kaFuYG3diH4We/9dJaF2SzLKG58xWfTyz4b/zvPJqsun6zW9eS1j2785ap76Gz333Buu+H0M2+OwrQ5Wzj/YBbNhWiWR2eAG+CxiJ6+WeijK5KNMWssy6YGCdWR4pwbWwgTbGNsam9QxtH5jSfqS6vfuv+hs/UW7g0C33l69WARu38GMx/Mxaw3l5uAXQypPScjQihgxSY51cE3mwQmAApY9Rx8Xs8JZNm6y/z6uCjHRw5+7GdXRMLr8bmnYtZZe6Hx0TdQalUYaVy02qKTjfpGUb/xLjbeotpdn1uMZey60vp+sFlKm/dxYJRddR77mC+0bfZyjKcTNhs221e89khjbhTZTc+DDbrAwmgWIx0sUMGgj6MbkQE3yOY8hTnWFy74HlB1OnOuTaXvW8BZ3eUOEtE5EQn73njxwleY+FMRcJ23M1BL6wQWjJDQ4n3sXX+TiAMSQoBDTNj84SAm43XYQqSkyZS+x9IB1lJvEaghUtOvWB8Sff6DRODrT720UFm717uMfTrWnxPp5VuBg8KSLnrUoEMcYmQO+8eDPMRHIokWoduVLkge1yXwmwTkkgqCBTVh7sPKhec/sxTqpeye2MKSBWPEsS5jB2wGcJFgYzBXu8MGCW1Wam0S2VJLdqbyBUK4G9CUC+SKDkAFacPUGn2IpjgDo3QL+cL7Q9O3xwnF6NmlAc6IdgtgFg/sLu3LJ1fcgeVCS+uTMObN2z53jM/GtV144YJV641IMFZBpKZdooACM9wXWl8fz5JgWfSA9z7AFAlQ5Esn73YXrkztr29xtFAjFThkYCM2tUs29jzvy0ZRX8d3tOjcoRNH7JUX1llPKtSclArwASoUwJTHyTHN0R4JCDnAgQDcm1c02PdffD1WtUAUIT7mSB9UEwvzXOBSPiixFXBWTijx2QAxKW5A0AyH5Jx+gd12gDeAb5EYupDNjobeNUcURYouoOZuYEGcZSujwj1y6qAd2lVK7y15t+rtPridzaYbnf3t3FWbrin4dCIatK6oZxAiX8TyMATa/TEpAAGCjJ0TTiLU2Vc/csxevrJmf740D3+FmcY0C0QiZu4WuUJp+0ZNWxlz12Kwwx9espfP1wQmIU1K0zH0viJTzmLXTvZLgZUEmBbPmCAAojLL4mN//LubNQJnaSnU4wg8zHFjVsAluAIg+bsg4AesgQtSe8isAbbdRWBmsEG3IAWso2RZzcGb4o7RXaHz7aLETwBKe0CwbgJZGZX2tQ/da0eWRtvltrcnjT3661f5SmYd5Fpi49EHD9reUUqsW+5wG+PWfnv+HZtWMCFdu3YXB4yk39aAJwUW2G49FKuOC2WzxN63Ue1vn/zALeBictcot6JouTMq7oTaFtnCJvgOoosLwT5+atnGxPaEUsXSte0ujuEuFFgiNS+XvnUtV3zDGaAA2rua01CTnmvbNxzsWHB75wv3v9f2LMRE5NP3LW8f2tFe2V0kAmOO9QTPVt3QmmY5EWm7xSKwW6U7PImL0pNZ8rfy/c3I37GoOg8cWEnlloHbGDa0lBJLRzzpr1s03yovVBbKjszEaJ/h+5TUcS2HheeWL2+z5J2Z1nRLEictSyrLKF35djdx0MQwaGrdXSRBT4Q6FXI+9wH1ncG8++w13VESgA2S7ri5kKHjZNV72jDqmoqoJxB1oyYCUoIY+N8ueHe4W0fGWU3A5rzgoIRncyDo7vTdoAnDtpr20Q+VfuZF11Jq/98UaMIYF5Sx4RqucUUdUJvXUw79LAyb9hqS7NXZl9vlfmKCE+Hj6vXL7uDyvlu3dAeWy7OpVdm6Zb7idJXWdgOrRQYNeO275kdVdWnU1kaJo7oylYWmjov1zD39p1/atcnaHcDtnHpx4x0789IfrM7XrQprbPe6zYprcZJfd1fyqb0Z2kth2NcX0fyUAkMxoIPCoZASce3tVffjZ35CctTdKGWQDWWSSvhQth7VFFyKGQq+9lw7ngSVWRMCL668H2WB3Sqd58R/4ZqsjDnvBE278I8wqGbnvPdf1GKQSGBC2GzLTyI1J5cIklXlrnRSAYXuZuyk+gYZEfEqEMnmZQaZJuSxznJXe37a+Py5EKb1s2WZ6fbV4dAjPclJMuEphkDTmKaIkKZIKeWt+Ty1PQTS24RebrFLFdRhXg8JyEglq7MM8GD8lLK1xp8XsHvyiW+us+ZIgHMeetObExGHBK7BTRLCTqQSmTkx2cQwqYUdYonknKyIY9h0JW7D6378jYfP7ArazJM/XPvgMC9f1wJbsFpbfX2SCKigQyLkZEqDEkZC6V/jtJMkvGGk9uZyvNUq/2HizYpET32tqk5gSotRm/388YcfKDN/PnW0fxoq+iCiFhbXTTt1wo2WycjZVl9trjjJqJd8ARF0OANb1ne8pDCgV+wufvKe7/3id/O1E8T88exjnz+0lGWvADwUqAIg1VKG72q3XFWprcX17qzzke4aEjpgAqSvObKnLwlUDX1/YzKLJ4796FdvbMFubXKrr9r9/rufPTwo4icG0T5F/yjy7WeHe1iIG94VLM7VlX6qCEgy8g9i1M9FXvzMJkhyFa5vMXiRS/D5qqueO/b4uX9p4naw/wDv1ZplvOGRpgAAAABJRU5ErkJggg==`;

// src/enums/Breakpoints.ts
var Breakpoints;
(function(Breakpoints2) {
  Breakpoints2[Breakpoints2["sm"] = 640] = "sm";
  Breakpoints2[Breakpoints2["md"] = 768] = "md";
  Breakpoints2[Breakpoints2["lg"] = 1024] = "lg";
  Breakpoints2[Breakpoints2["xl"] = 1280] = "xl";
  Breakpoints2[Breakpoints2["2xl"] = 1536] = "2xl";
})(Breakpoints || (Breakpoints = {}));

// src/components/styled/signInModalStyles.ts
var COLOR_LIGHT_TEXT_MEDIUM = "#74777C";
var ethosWalletTitleText = () => ({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "600",
  marginLeft: "10px"
});
var secondaryText = () => ({
  color: "#6B7280",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});
var dialog = (isOpen) => ({
  visibility: isOpen ? "" : "hidden",
  position: "relative",
  zIndex: "100"
});
var backdrop = (isOpen) => ({
  position: "fixed",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  backgroundColor: "rgb(107 114 128)",
  opacity: isOpen ? ".75" : "0",
  transition: "all 300ms ease-in-out"
});
var highlighted = () => ({
  color: "#6D28D9"
});
var modalOuterWrapper = (isOpen) => ({
  position: "fixed",
  zIndex: "99",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  overflowY: "auto",
  opacity: isOpen ? "1" : "0",
  scale: isOpen ? "1" : ".95",
  transition: "all 300ms ease-in-out"
});
var modalInnerWrapper = (width) => {
  const styles12 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    padding: "1rem",
    textAlign: "center"
  };
  const sm = {
    padding: "0",
    alignItems: "center"
  };
  return width < Breakpoints.sm ? styles12 : {...styles12, ...sm};
};
var dialogPanel = (width) => {
  const styles12 = {
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#ffffff",
    transitionProperty: "all",
    borderRadius: "0.5rem",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  };
  const sm = {
    width: "360px"
  };
  return width < Breakpoints.sm ? styles12 : {...styles12, ...sm};
};
var topPanelStyle = () => ({
  padding: "24px 24px 0px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
});
var closeStyle = () => ({
  width: "24px",
  height: "24px",
  color: "#A0AEBA",
  cursor: "pointer"
});
var backStyle = () => ({
  color: COLOR_LIGHT_TEXT_MEDIUM,
  cursor: "pointer",
  display: "flex",
  gap: "6px",
  alignItems: "center"
});
var backStyleText = () => ({
  fontSize: "16px",
  lineHeight: "24px"
});
var headerStyle = (withIcon = false) => ({
  padding: withIcon ? "24px 24px 32px" : "0 24px 32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "12px"
});
var headerLogosStyle = () => ({
  display: "flex",
  justifyContent: "center",
  gap: "-6px"
});
var titleStyle = () => ({
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "32px",
  margin: "0"
});
var subTitleStyle = () => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  margin: "0",
  color: COLOR_LIGHT_TEXT_MEDIUM
});
var strikeThroughOrContainer = () => ({
  padding: "0px 24px 24px",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  justifyContent: "space-between",
  alignItems: "center",
  color: COLOR_LIGHT_TEXT_MEDIUM
});
var line = () => ({
  height: "1px",
  width: "100%",
  background: "rgba(0, 0, 0, 0.12)",
  borderRadius: "16px"
});
var emailInput = () => ({
  boxSizing: "border-box",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  borderRadius: "16px",
  background: "#F2F2F2",
  padding: "20px",
  width: "100%"
});
var walletOptionContainer = (width) => {
  const styles12 = {
    padding: "0px 24px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px"
  };
  const sm = {};
  return width < Breakpoints.sm ? styles12 : {...styles12, ...sm};
};
var iconButton = (width, disabled = false, primary2 = false, noIcon = false) => {
  const styles12 = {
    textDecoration: "none",
    fontWeight: primary2 ? "500" : "400",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: noIcon ? "center" : "space-between",
    alignItems: "center",
    padding: primary2 ? "20px 20px" : "16px 16px 16px 20px",
    width: "100%",
    background: primary2 ? "#6D28D9" : "#F2F2F2",
    color: primary2 ? "white" : "black",
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: "16px",
    flex: "none",
    order: "0",
    flexGrow: "0",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    border: "none",
    fontSize: "inherit"
  };
  const sm = {};
  return width < Breakpoints.sm ? styles12 : {...styles12, ...sm};
};
var submitButtonContainer = () => ({
  padding: "0px 24px 24px"
});
var loaderStyle = () => ({
  display: "flex",
  justifyContent: "center",
  padding: "45px 0"
});
var walletExplanation = () => ({
  padding: "6px 0",
  color: "#666",
  width: "100%",
  fontSize: "smaller",
  marginBottom: "12px"
});

// src/lib/useHandleElementWithIdClicked.ts
var import_react3 = __toModule(require("react"));
function useHandleElementWithIdClicked(clickId, onClickOutside) {
  (0, import_react3.useEffect)(() => {
    function handleClickOutside(event2) {
      if (event2.target.id === clickId) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

// src/components/styled/EmailSent.tsx
var import_react7 = __toModule(require("react"));

// src/components/svg/EthosEnclosed.tsx
var import_react4 = __toModule(require("react"));
var EthosEnclosed = ({width = 24, color = "#6D28D9"}) => /* @__PURE__ */ import_react4.default.createElement("svg", {
  width,
  height: width,
  viewBox: "0 0 56 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react4.default.createElement("rect", {
  width: "56",
  height: "56",
  rx: "16",
  fill: color
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  opacity: "0.8",
  d: "M17.9631 13H36.9268C37.7997 13 38.5073 13.7076 38.5073 14.5805V35.9802C38.5073 36.8531 37.7997 37.5607 36.9268 37.5607H17.9631C17.0902 37.5607 16.3826 36.8531 16.3826 35.9802V14.5805C16.3826 13.7076 17.0902 13 17.9631 13Z",
  stroke: "url(#paint0_linear_514_2169)",
  strokeOpacity: "0.9",
  strokeWidth: "0.790251"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  d: "M17.2471 14.0457L30.1651 20.0566C30.7225 20.316 31.0789 20.8749 31.0789 21.4896V42.6676C31.0789 43.8113 29.9018 44.5763 28.8566 44.112L15.9386 38.3725C15.3677 38.1189 14.9998 37.5528 14.9998 36.9281V15.4787C14.9998 14.3231 16.1994 13.5582 17.2471 14.0457Z",
  fill: "white",
  fillOpacity: "0.9"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  d: "M42.9117 27.9093C43.0029 27.4813 43.219 27.0901 43.5329 26.7851C43.8467 26.4801 44.2441 26.2753 44.6746 26.1965L45.8205 25.9872L44.6745 25.7779H44.6746C44.2441 25.6991 43.8467 25.4943 43.5329 25.1893C43.219 24.8843 43.0029 24.4931 42.9117 24.0651L42.6596 22.8774L42.4074 24.0651C42.3162 24.4931 42.1001 24.8843 41.7862 25.1893C41.4724 25.4943 41.075 25.6992 40.6445 25.7779L39.4985 25.9872L40.6446 26.1965H40.6445C41.075 26.2753 41.4724 26.4801 41.7861 26.7851C42.1 27.0901 42.3162 27.4813 42.4073 27.9093L42.6595 29.097L42.9117 27.9093Z",
  fill: "white",
  fillOpacity: "0.9"
}), /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", {
  id: "paint0_linear_514_2169",
  x1: "38.5073",
  y1: "19.5371",
  x2: "27.4445",
  y2: "25.0685",
  gradientUnits: "userSpaceOnUse"
}, /* @__PURE__ */ import_react4.default.createElement("stop", {
  stopColor: "white"
}), /* @__PURE__ */ import_react4.default.createElement("stop", {
  offset: "1",
  stopColor: "white",
  stopOpacity: "0"
}))));
var EthosEnclosed_default = EthosEnclosed;

// src/components/svg/Ethos.tsx
var import_react5 = __toModule(require("react"));
var Ethos = ({width = 24, color = "#1e293b"}) => /* @__PURE__ */ import_react5.default.createElement("svg", {
  width,
  height: width * 65 / 47,
  viewBox: "0 0 47 65",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ import_react5.default.createElement("path", {
  d: "M6.00471 1H40.0029C42.7644 1 45.0029 3.23858 45.0029 6V44.8425C45.0029 47.604 42.7643 49.8425 40.0029 49.8425H6.0047C3.24328 49.8425 1.0047 47.604 1.0047 44.8425V6C1.0047 3.23858 3.24329 1 6.00471 1Z",
  stroke: color,
  strokeWidth: "2"
}), /* @__PURE__ */ import_react5.default.createElement("path", {
  d: "M6.68764 3.64648L30.6631 14.8026C32.0736 15.4589 32.9756 16.8735 32.9756 18.4292V58.6799C32.9756 61.5743 29.9966 63.5105 27.3515 62.3353L3.37601 51.683C1.93126 51.0411 1.00013 49.6085 1.00013 48.0276V7.27309C1.00013 4.34854 4.03609 2.41268 6.68764 3.64648Z",
  fill: color
}));
var Ethos_default = Ethos;

// src/components/styled/Header.tsx
var import_react6 = __toModule(require("react"));
var Header = ({title, subTitle, dappIcon, showEthos = false, children}) => {
  return /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("div", {
    style: headerStyle(!!dappIcon)
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    style: headerLogosStyle()
  }, dappIcon && (typeof dappIcon === "string" ? /* @__PURE__ */ import_react6.default.createElement("img", {
    src: dappIcon
  }) : dappIcon), showEthos && /* @__PURE__ */ import_react6.default.createElement(Ethos_default, null)), title && /* @__PURE__ */ import_react6.default.createElement("div", {
    style: titleStyle()
  }, title), subTitle && /* @__PURE__ */ import_react6.default.createElement("div", {
    style: subTitleStyle()
  }, subTitle)), children);
};
var Header_default = Header;

// src/components/styled/EmailSent.tsx
var EmailSent = () => {
  return /* @__PURE__ */ import_react7.default.createElement(Header_default, {
    title: "Ethos sent you an email",
    dappIcon: /* @__PURE__ */ import_react7.default.createElement(EthosEnclosed_default, {
      width: 60
    })
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    style: secondaryText()
  }, /* @__PURE__ */ import_react7.default.createElement("p", null, "An email has been sent to you with a link to login."), /* @__PURE__ */ import_react7.default.createElement("p", null, "If you don't receive it, please check your spam folder or contact us at:"), /* @__PURE__ */ import_react7.default.createElement("p", null, "support@ethoswallet.xyz")));
};
var EmailSent_default = EmailSent;

// src/components/styled/Wallets.tsx
var import_react9 = __toModule(require("react"));

// src/components/styled/IconButton.tsx
var import_react8 = __toModule(require("react"));
var IconButton = (props) => {
  const {text, icon, width, disabled, primary: primary2, type: type2, ...reactProps} = props;
  return /* @__PURE__ */ import_react8.default.createElement("button", {
    style: iconButton(width, disabled, primary2, !icon),
    ...reactProps,
    type: type2
  }, /* @__PURE__ */ import_react8.default.createElement("div", null, text), icon);
};
var IconButton_default = IconButton;

// src/components/styled/Wallets.tsx
var Wallets = ({wallets: wallets2, selectWallet, width}) => {
  const _connectExtension = (0, import_react9.useCallback)((e) => {
    if (!selectWallet)
      return;
    let element = e.target;
    let name;
    while (!name && element.parentNode) {
      name = element.dataset.name;
      element = element.parentNode;
    }
    selectWallet(name);
  }, []);
  const icon = (0, import_react9.useCallback)((wallet) => {
    return /* @__PURE__ */ import_react9.default.createElement("img", {
      src: wallet.icon,
      height: 32,
      width: 32
    });
  }, []);
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    role: "wallet-sign-in"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    style: walletOptionContainer(width)
  }, wallets2?.map((wallet, index) => /* @__PURE__ */ import_react9.default.createElement(IconButton_default, {
    key: `select-wallet-${index}`,
    icon: icon(wallet),
    "data-name": wallet.name,
    text: wallet.name,
    onClick: _connectExtension,
    width
  }))));
};
var Wallets_default = Wallets;

// src/components/styled/Email.tsx
var import_react10 = __toModule(require("react"));

// src/lib/getConfiguration.ts
var import_store2 = __toModule(require_store2());
var getConfiguration = () => {
  const ethosStore = import_store2.default.namespace("ethos");
  const configuration = ethosStore("configuration");
  return configuration || {};
};
var getConfiguration_default = getConfiguration;

// src/lib/postIFrameMessage.ts
var import_store24 = __toModule(require_store2());

// src/lib/getIframe.ts
var import_store23 = __toModule(require_store2());

// src/lib/log.ts
var import_store22 = __toModule(require_store2());
var allowLog = (label) => {
  const logStore = import_store22.default.namespace("log");
  const allowed = logStore("allowed") || [];
  if (allowed.includes(label))
    return;
  logStore("allowed", [...allowed, label]);
  return `Logging enabled for ${label}. Call ethos.clearAllowLog() to turn off this logging.`;
};
var clearAllowLog = () => {
  const logStore = import_store22.default.namespace("log");
  logStore("allowed", []);
};
var log = (label, ...message) => {
  const logStore = import_store22.default.namespace("log");
  const allowed = logStore("allowed");
  if (!allowed || !(allowed.includes(label) || allowed.includes("all"))) {
    return;
  }
  console.log(label, ...message);
};
if (typeof window !== "undefined") {
  ;
  window.ethos = {
    allowLog,
    clearAllowLog
  };
}
var log_default = log;

// src/lib/getIframe.ts
var getIframe = (show) => {
  const {apiKey, walletAppUrl, network} = getConfiguration_default();
  log_default("getIframe", "getIframe", apiKey, walletAppUrl);
  if (!apiKey || !walletAppUrl)
    return;
  const iframeId = "ethos-wallet-iframe";
  let scrollY = 0;
  let iframe = document.getElementById(iframeId);
  const close = () => {
    if (!iframe)
      return;
    iframe.style.width = "1px";
    iframe.style.height = "1px";
  };
  const queryParams = new URLSearchParams(window.location.search);
  const accessToken = queryParams.get("access_token");
  const refreshToken = queryParams.get("refresh_token");
  let fullWalletAppUrl = walletAppUrl + `/wallet?apiKey=${apiKey}&network=${network}`;
  if (accessToken && refreshToken) {
    fullWalletAppUrl += `&access_token=${accessToken}&refresh_token=${refreshToken}`;
    queryParams.delete("access_token");
    queryParams.delete("refresh_token");
    let fullPath = location.protocol + "//" + location.host + location.pathname;
    if (queryParams.toString().length > 0) {
      fullPath += "?" + queryParams.toString();
    }
    import_store23.default.namespace("auth")("access_token", accessToken);
    import_store23.default.namespace("auth")("refresh_token", refreshToken);
    window.history.pushState({}, "", fullPath);
  } else {
    const accessToken2 = import_store23.default.namespace("auth")("access_token");
    const refreshToken2 = import_store23.default.namespace("auth")("refresh_token");
    if (accessToken2 && refreshToken2) {
      fullWalletAppUrl += `&access_token=${accessToken2}&refresh_token=${refreshToken2}`;
    }
  }
  if (!iframe) {
    log_default("getIframe", "Load Iframe", fullWalletAppUrl);
    iframe = document.createElement("IFRAME");
    iframe.src = fullWalletAppUrl;
    iframe.id = iframeId;
    iframe.style.border = "none";
    iframe.style.position = "absolute";
    iframe.style.top = scrollY - 1 + "px";
    iframe.style.right = "60px";
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.style.zIndex = "99";
    iframe.style.backgroundColor = "transparent";
    iframe.setAttribute("allow", "payment; clipboard-read; clipboard-write");
    document.body.appendChild(iframe);
    window.addEventListener("message", (message) => {
      if (message.origin === walletAppUrl) {
        const {action} = message.data;
        switch (action) {
          case "close":
            close();
            break;
          case "ready":
            iframe.setAttribute("readyToReceiveMessages", "true");
            const messageStore = import_store23.default.namespace("iframeMessages");
            const messages = messageStore("messages") || [];
            for (const message2 of messages) {
              postIFrameMessage_default(message2);
            }
            messageStore("messages", null);
            break;
        }
      }
    });
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      iframe.style.top = scrollY + "px";
    });
  } else if (iframe.src !== fullWalletAppUrl) {
    iframe.src = fullWalletAppUrl;
  }
  if (show) {
    iframe.style.width = "360px";
    iframe.style.height = "600px";
  } else if (show !== void 0) {
    close();
  }
  return iframe;
};
var getIframe_default = getIframe;

// src/lib/postIFrameMessage.ts
var postIFrameMessage = (message) => {
  const iframe = getIframe_default();
  if (!iframe?.getAttribute("readyToReceiveMessages")) {
    const messageStore = import_store24.default.namespace("iframeMessages");
    const existingMessages = messageStore("messages") || [];
    const result = messageStore("messages", [...existingMessages, message]);
    log_default("iframe", "Storing iframe message", result);
    return;
  }
  iframe?.contentWindow?.postMessage(message, "*");
};
var postIFrameMessage_default = postIFrameMessage;

// src/lib/event.ts
var event = async (eventProps) => {
  postIFrameMessage_default({
    action: "event",
    data: eventProps
  });
};
var event_default = event;

// src/lib/login.ts
var import_store28 = __toModule(require_store2());

// src/lib/bigNumber.ts
var import_bignumber = __toModule(require_bignumber());
var newBN = (value) => new import_bignumber.default(value);
var sumBN = (balance, addition) => {
  let bn = new import_bignumber.default(balance.toString());
  let bnAddition = new import_bignumber.default(addition.toString());
  return bn.plus(bnAddition);
};
var formatBalance = (balance, decimals = 9) => {
  if (balance === void 0)
    return "---";
  let postfix = "";
  let bn = new import_bignumber.default(balance.toString()).shiftedBy(-1 * decimals);
  if (bn.gte(1e9)) {
    bn = bn.shiftedBy(-9);
    postfix = " B";
  } else if (bn.gte(1e6)) {
    bn = bn.shiftedBy(-6);
    postfix = " M";
  } else if (bn.gte(1e4)) {
    bn = bn.shiftedBy(-3);
    postfix = " K";
  }
  if (bn.gte(1)) {
    bn = bn.decimalPlaces(3, import_bignumber.default.ROUND_DOWN);
  } else {
    bn = bn.decimalPlaces(6, import_bignumber.default.ROUND_DOWN);
  }
  return bn.toFormat() + postfix;
};

// src/lib/getBagNFT.ts
var import_lodash = __toModule(require_lodash());
var UrlDomainRegex = /0x2::dynamic_field::Field<(0x[a-f0-9]{39,40})::utils::Marker<(0x[a-f0-9]{39,40})::display::UrlDomain>, (0x[a-f0-9]{39,40})::display::UrlDomain>/;
var DisplayDomainRegex = /0x2::dynamic_field::Field<(0x[a-f0-9]{39,40})::utils::Marker<(0x[a-f0-9]{39,40})::display::DisplayDomain>, (0x[a-f0-9]{39,40})::display::DisplayDomain>/;
var ID_PATH = "reference.objectId";
var BAG_ID_PATH = "data.fields.bag.fields.id.id";
var LOGICAL_OWNER_PATH = "data.fields.logical_owner";
var isTypeMatchRegex = (d, regex) => {
  const {data} = d;
  if (is(data, SuiObjectData)) {
    const {content} = data;
    if (content && "type" in content) {
      return content.type.match(regex);
    }
  }
  return false;
};
var parseDomains = (domains) => {
  const response = {};
  const urlDomain = domains.find((d) => isTypeMatchRegex(d, UrlDomainRegex));
  const displayDomain = domains.find((d) => isTypeMatchRegex(d, DisplayDomainRegex));
  if (urlDomain && getObjectFields(urlDomain)) {
    const url = getObjectFields(urlDomain).value.fields.url;
    response.url = ipfsConversion(url);
  }
  if (displayDomain && getObjectFields(displayDomain)) {
    response.description = getObjectFields(displayDomain).value.fields.description;
    response.name = getObjectFields(displayDomain).value.fields.name;
  }
  return response;
};
var isBagNFT = (data) => {
  return !!data.content && "fields" in data.content && "logical_owner" in data.content.fields && "bag" in data.content.fields;
};
var getBagNFT = async (provider, data) => {
  if (!isBagNFT(data) || !import_lodash.default.has(data, ID_PATH) || !import_lodash.default.has(data, BAG_ID_PATH) || !import_lodash.default.has(data, LOGICAL_OWNER_PATH))
    return data;
  const id = import_lodash.default.get(data, ID_PATH);
  const bagId = import_lodash.default.get(data, BAG_ID_PATH);
  const owner = import_lodash.default.get(data, LOGICAL_OWNER_PATH);
  const bagObjects = await provider.getDynamicFields({parentId: bagId || ""});
  const objectIds = bagObjects.data.map((bagObject) => bagObject.objectId);
  const objects = await provider.multiGetObjects({
    ids: objectIds,
    options: {
      showContent: true,
      showDisplay: true,
      showOwner: true,
      showType: true
    }
  });
  return {
    id,
    owner,
    ...parseDomains(objects)
  };
};
var getBagNFT_default = getBagNFT;

// src/enums/Chain.ts
var Chain;
(function(Chain2) {
  Chain2["SUI_MAINNET"] = "sui:mainnet";
  Chain2["SUI_TESTNET"] = "sui:testnet";
  Chain2["SUI_DEVNET"] = "sui:devnet";
  Chain2["SUI_CUSTOM"] = "sui:custom";
})(Chain || (Chain = {}));

// src/lib/constants.ts
var primaryColor = "#6f53e4";
var appBaseUrl = typeof window !== "undefined" && window.location.origin.indexOf("http://localhost") === 0 ? "http://localhost:3000" : "https://ethoswallet.onrender.com";
var DEFAULT_NETWORK = "https://fullnode.mainnet.sui.io/";
var DEFAULT_FAUCET = "https://faucet.mainnet.sui.io/";
var DEFAULT_CHAIN = Chain.SUI_MAINNET;

// src/lib/getDisplay.ts
var getDisplay = (display) => {
  if (!display)
    return;
  if (display?.data && typeof display?.data === "object") {
    return display.data;
  }
  if (!("error" in display))
    return display;
  return;
};
var getDisplay_default = getDisplay;

// src/lib/getKioskNFT.ts
var import_lodash2 = __toModule(require_lodash());
var isKiosk = (data) => {
  return !!data.type && data.type.includes("kiosk") && !!data.content && "fields" in data.content && "kiosk" in data.content.fields;
};
var getKioskObjects = async (provider, data) => {
  if (!isKiosk(data))
    return [];
  const kiosk = import_lodash2.default.get(data, "content.fields.kiosk");
  if (!kiosk)
    return [];
  let allKioskObjects = [];
  let cursor;
  while (cursor !== null) {
    const response = await provider.getDynamicFields({
      parentId: kiosk
    });
    if (!response.data)
      return [];
    allKioskObjects = [...allKioskObjects || [], ...response.data];
    if (response.hasNextPage && response.nextCursor !== cursor) {
      cursor = response.nextCursor;
    } else {
      cursor = null;
    }
  }
  const relevantKioskObjects = allKioskObjects.filter((kioskObject) => kioskObject.name.type === "0x2::kiosk::Item");
  const objectIds = relevantKioskObjects.map((item) => item.objectId);
  let objects = [];
  const groupSize = 30;
  for (let i = 0; i < objectIds.length; i += groupSize) {
    const group = objectIds.slice(i, i + groupSize);
    const groupObjects = await provider.multiGetObjects({
      ids: group,
      options: {
        showContent: true,
        showType: true,
        showDisplay: true,
        showOwner: true
      }
    });
    objects = [...objects, ...groupObjects];
  }
  return objects;
};

// src/lib/getWalletContents.ts
var ipfsConversion = (src) => {
  if (!src)
    return "";
  if (src.indexOf("ipfs") === 0) {
    return src.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/");
  }
  return src;
};
var empty = {
  suiBalance: newBN(0),
  balances: {},
  nfts: [],
  tokens: {},
  objects: []
};
var getWalletContents = async ({address: address2, network, existingContents}) => {
  try {
    const connection = new Connection({fullnode: network || DEFAULT_NETWORK});
    const provider = new JsonRpcProvider(connection);
    if (!address2) {
      return empty;
    }
    const coinBalances = await provider.getAllBalances({owner: address2});
    let objectInfos = [];
    let nextCursor = void 0;
    let limitedNextCursor = void 0;
    let page = 0;
    let hasNextPage = false;
    while (limitedNextCursor !== null) {
      page += 1;
      const pageObjectInfos = await provider.getOwnedObjects({
        owner: address2,
        options: {
          showType: true,
          showOwner: true,
          showContent: true,
          showDisplay: true
        },
        cursor: limitedNextCursor
      });
      objectInfos = [
        ...objectInfos,
        ...pageObjectInfos.data
      ];
      hasNextPage = pageObjectInfos.hasNextPage;
      if (page > 20) {
        limitedNextCursor = null;
      } else {
        if (hasNextPage && nextCursor !== pageObjectInfos.nextCursor) {
          limitedNextCursor = nextCursor ?? null;
        } else {
          limitedNextCursor = null;
        }
      }
    }
    if (objectInfos.length === 0) {
      if (existingContents === empty) {
        return null;
      }
      return empty;
    }
    const currentObjects = [];
    let newObjectInfos = [];
    if (existingContents?.objects && existingContents.objects.length > 0) {
      for (const objectInfo of objectInfos) {
        if (!objectInfo.data || objectInfo.error)
          continue;
        const existingObject = existingContents?.objects.find((existingObject2) => {
          if (typeof objectInfo.data === "object") {
            return existingObject2.objectId === objectInfo.data.objectId && existingObject2.version.toString() === objectInfo.data.version.toString();
          } else {
            return false;
          }
        });
        if (existingObject) {
          currentObjects.push(existingObject);
        } else {
          newObjectInfos.push(objectInfo.data);
        }
      }
    } else {
      newObjectInfos = objectInfos.filter((objectInfo) => !!objectInfo.data && !objectInfo.error).map((objectInfo) => objectInfo.data);
    }
    if (newObjectInfos.length === 0)
      return null;
    const newObjects = newObjectInfos;
    const objects = currentObjects.concat(newObjects);
    let suiBalance = newBN(0);
    const balances = coinBalances.reduce((acc, coinBalance) => {
      acc[coinBalance.coinType] = coinBalance;
      if (coinBalance.coinType === SUI_TYPE_ARG) {
        suiBalance = newBN(coinBalance.totalBalance);
      }
      return acc;
    }, {});
    for (const object2 of objects) {
      if (isKiosk(object2)) {
        const kioskObjects = await getKioskObjects(provider, object2);
        for (const kioskObject of kioskObjects) {
          if (kioskObject.data) {
            objects.push({
              ...kioskObject.data,
              kiosk: object2
            });
          }
        }
      }
    }
    const nfts = [];
    const tokens = {};
    const convenenienceObjects = [];
    for (const data of objects) {
      const {display, content} = data;
      const {fields} = content?.dataType === "moveObject" ? content : {fields: {}};
      const safeDisplay = getDisplay_default(display);
      try {
        const typeStringComponents = (data.type || "").split("<");
        const subtype = (typeStringComponents[1] || "").replace(/>/, "");
        const typeComponents = typeStringComponents[0].split("::");
        const packageObjectId = typeComponents[0];
        const moduleName = typeComponents[1];
        const structName = typeComponents[typeComponents.length - 1];
        const safeUrl = ipfsConversion(safeDisplay?.image_url ?? safeDisplay?.img_url ?? safeDisplay?.url ?? fields?.url ?? fields?.image_url ?? fields?.img_url);
        convenenienceObjects.push({
          ...data,
          packageObjectId,
          moduleName,
          structName,
          name: safeDisplay?.name ?? fields?.name,
          description: safeDisplay?.description ?? fields?.description,
          imageUrl: safeUrl,
          display: safeDisplay,
          fields,
          isCoin: structName === "Coin"
        });
        if (structName === "Coin") {
          tokens[subtype] || (tokens[subtype] = {
            balance: 0,
            coins: []
          });
          tokens[subtype].balance = sumBN(tokens[subtype].balance, fields.balance);
          tokens[subtype].coins.push({
            objectId: data?.objectId,
            type: data?.type,
            balance: newBN(fields.balance),
            digest: data?.digest,
            version: data?.version,
            display: safeDisplay
          });
        } else if (isBagNFT(data)) {
          const bagNFT = await getBagNFT_default(provider, data);
          if ("name" in bagNFT) {
            nfts.push({
              type: data.type ?? "unknown",
              packageObjectId,
              moduleName,
              structName,
              chain: "Sui",
              address: data?.objectId,
              objectId: data?.objectId,
              name: safeDisplay?.name ?? bagNFT.name,
              description: safeDisplay?.description ?? bagNFT.description,
              imageUrl: safeUrl,
              link: safeDisplay?.link,
              creator: safeDisplay?.creator,
              projectUrl: safeDisplay?.project_url,
              display: safeDisplay,
              links: {
                "Explorer": `https://explorer.sui.io/objects/${data.objectId}`
              },
              kiosk: data.kiosk
            });
          }
        } else {
          if (safeUrl) {
            nfts.push({
              type: data.type ?? "Unknown",
              packageObjectId,
              moduleName,
              structName,
              chain: "Sui",
              address: data?.objectId,
              objectId: data?.objectId,
              name: safeDisplay?.name ?? fields?.name,
              description: safeDisplay?.description ?? fields?.description,
              imageUrl: safeUrl,
              link: safeDisplay?.link,
              creator: safeDisplay?.creator,
              projectUrl: safeDisplay?.project_url,
              display: safeDisplay,
              fields,
              links: {
                "Explorer": `https://explorer.sui.io/objects/${data.objectId}`
              },
              kiosk: data.kiosk
            });
          }
        }
      } catch (error) {
        console.log("Error retrieving object", data, error);
      }
    }
    return {
      suiBalance,
      balances,
      tokens,
      nfts,
      objects: convenenienceObjects,
      hasNextPage,
      nextCursor: nextCursor ?? void 0
    };
  } catch (error) {
    console.log("Error retrieving wallet contents", error);
    return null;
  }
};
var getWalletContents_default = getWalletContents;

// src/lib/getEthosSigner.ts
var import_store26 = __toModule(require_store2());

// src/types/Signer.ts
var SignerType;
(function(SignerType2) {
  SignerType2["Extension"] = "extension";
  SignerType2["Hosted"] = "hosted";
})(SignerType || (SignerType = {}));

// src/lib/activeUser.ts
var activeUser = () => {
  log_default("activeUser", "Calling Active User");
  const {walletAppUrl, apiKey} = getConfiguration_default();
  log_default("activeUser", "Configuration", walletAppUrl, apiKey);
  const resolver = (resolve) => {
    const listener = (message2) => {
      log_default("activeUser", "Message Origin: ", message2.origin, walletAppUrl, message2);
      if (message2.origin === walletAppUrl) {
        const {action, data} = message2.data;
        log_default("activeUser", "Message From Wallet", action, data);
        if (action === "user" && data.apiKey === apiKey) {
          window.removeEventListener("message", listener);
          resolve(data?.user);
        }
      }
    };
    window.addEventListener("message", listener);
    const message = {action: "activeUser"};
    log_default("activeUser", "getIframe");
    getIframe_default();
    log_default('activeUser", "Post message to the iframe', message);
    postIFrameMessage_default(message);
  };
  return new Promise(resolver);
};
var activeUser_default = activeUser;

// src/lib/hostedInteraction.ts
var import_store25 = __toModule(require_store2());
var hostedInteraction = ({id, action, data, onResponse, showWallet: showWallet2 = false}) => {
  const {walletAppUrl} = getConfiguration_default();
  const iframeListener = (message) => {
    log_default("hostedInteraction", "response: ", message);
    if (message.origin === walletAppUrl) {
      const {approved, action: responseAction, data: responseData} = message.data;
      if (responseAction !== action)
        return;
      onResponse({approved, data: responseData});
      window.removeEventListener("message", iframeListener);
      getIframe_default(false);
    }
  };
  window.addEventListener("message", iframeListener);
  const ethosStore = import_store25.default.namespace("ethos");
  const configuration = ethosStore("configuration");
  const {network} = configuration;
  log_default("hostedInteraction", "Posting interaction", id, action, data);
  postIFrameMessage_default({id, network, action, data});
  getIframe_default(showWallet2);
};
var hostedInteraction_default = hostedInteraction;

// src/lib/getEthosSigner.ts
var getEthosSigner = async ({provider, defaultChain}) => {
  const user = await activeUser_default();
  const accounts = (user?.accounts || []).filter((account) => account.chain === "sui");
  const currentAccount = accounts[0];
  const signAndExecuteTransactionBlock = (input) => {
    return new Promise((resolve, reject) => {
      const transactionEventListener = ({approved, data}) => {
        if (approved) {
          resolve(data.response);
        } else {
          reject({error: data?.response?.error || "User rejected transaction."});
        }
      };
      const serializedTransaction = input.transactionBlock.serialize();
      const account = input.account ?? currentAccount.address;
      const chain = input.chain ?? defaultChain ?? DEFAULT_CHAIN;
      hostedInteraction_default({
        action: "transaction",
        data: {
          input,
          serializedTransaction,
          account,
          chain
        },
        onResponse: transactionEventListener,
        showWallet: true
      });
    });
  };
  const executeTransactionBlock2 = (input) => {
    return provider.executeTransactionBlock(input);
  };
  const signTransactionBlock2 = (input) => {
    return new Promise((resolve, reject) => {
      const transactionEventListener = ({approved, data}) => {
        if (approved) {
          resolve(data.response);
        } else {
          reject({error: data?.response?.error || "User rejected transaction."});
        }
      };
      const serializedTransaction = input.transactionBlock.serialize();
      const account = input.account ?? currentAccount.address;
      const chain = input.chain ?? defaultChain ?? DEFAULT_CHAIN;
      hostedInteraction_default({
        action: "transaction",
        data: {
          input,
          serializedTransaction,
          account,
          chain
        },
        onResponse: transactionEventListener,
        showWallet: true
      });
    });
  };
  const requestPreapproval = () => {
    return Promise.resolve(true);
  };
  const signMessage = (input) => {
    return new Promise((resolve, reject) => {
      const transactionEventListener = ({approved, data}) => {
        if (approved) {
          resolve(data.response);
        } else {
          reject({error: data?.response?.error || "User rejected signing."});
        }
      };
      hostedInteraction_default({
        action: "sign",
        data: {...input, signData: input.message},
        onResponse: transactionEventListener,
        showWallet: true
      });
    });
  };
  const disconnect = (fromWallet = false) => {
    return new Promise((resolve) => {
      const transactionEventListener = () => {
        resolve(true);
      };
      hostedInteraction_default({
        action: "logout",
        data: {
          fromWallet: typeof fromWallet === "boolean" ? fromWallet : false
        },
        onResponse: transactionEventListener
      });
      import_store26.default.namespace("auth")("access_token", null);
    });
  };
  const logout2 = () => {
    return disconnect(true);
  };
  return user ? {
    type: SignerType.Hosted,
    name: "Ethos",
    icon: dataIcon,
    email: user.email,
    getAddress: async () => currentAccount?.address,
    accounts,
    currentAccount,
    signAndExecuteTransactionBlock,
    executeTransactionBlock: executeTransactionBlock2,
    signTransactionBlock: signTransactionBlock2,
    requestPreapproval,
    signMessage,
    disconnect,
    logout: logout2,
    provider
  } : null;
};
var getEthosSigner_default = getEthosSigner;
var dataIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzZEMjhEOSIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik05LjEyMTg3IDYuODU3MDZIMTkuOTU4M0MyMC40NTcxIDYuODU3MDYgMjAuODYxNCA3LjI2MTQxIDIwLjg2MTQgNy43NjAyVjE5Ljk4ODZDMjAuODYxNCAyMC40ODc0IDIwLjQ1NzEgMjAuODkxOCAxOS45NTgzIDIwLjg5MThIOS4xMjE4N0M4LjYyMzA4IDIwLjg5MTggOC4yMTg3MiAyMC40ODc0IDguMjE4NzIgMTkuOTg4NlY3Ljc2MDJDOC4yMTg3MiA3LjI2MTQxIDguNjIzMDggNi44NTcwNiA5LjEyMTg3IDYuODU3MDZaIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl82OTlfMjY5OCkiIHN0cm9rZS13aWR0aD0iMC40NTE1NzIiLz4KPHBhdGggZD0iTTguNzEyNzQgNy40NTQ1OUwxNi4wOTQ1IDEwLjg4OTRDMTYuNDEyOSAxMS4wMzc2IDE2LjYxNjYgMTEuMzU3IDE2LjYxNjYgMTEuNzA4M1YyMy44MUMxNi42MTY2IDI0LjQ2MzUgMTUuOTQ0IDI0LjkwMDcgMTUuMzQ2OCAyNC42MzUzTDcuOTY1MDIgMjEuMzU1NkM3LjYzODgyIDIxLjIxMDcgNy40Mjg1OCAyMC44ODcyIDcuNDI4NTggMjAuNTMwM1Y4LjI3MzQzQzcuNDI4NTggNy42MTMxMSA4LjExNDA2IDcuMTc2MDIgOC43MTI3NCA3LjQ1NDU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIzLjM3ODIgMTUuMzc2N0MyMy40MzAzIDE1LjEzMjEgMjMuNTUzOCAxNC45MDg2IDIzLjczMzIgMTQuNzM0M0MyMy45MTI1IDE0LjU2IDI0LjEzOTYgMTQuNDQzIDI0LjM4NTYgMTQuMzk3OUwyNS4wNDA0IDE0LjI3ODRMMjQuMzg1NSAxNC4xNTg4SDI0LjM4NTZDMjQuMTM5NiAxNC4xMTM3IDIzLjkxMjUgMTMuOTk2NyAyMy43MzMyIDEzLjgyMjRDMjMuNTUzOCAxMy42NDgxIDIzLjQzMDMgMTMuNDI0NiAyMy4zNzgyIDEzLjE4TDIzLjIzNDEgMTIuNTAxM0wyMy4wOSAxMy4xOEMyMy4wMzc5IDEzLjQyNDYgMjIuOTE0NCAxMy42NDgxIDIyLjczNTEgMTMuODIyNEMyMi41NTU4IDEzLjk5NjcgMjIuMzI4NyAxNC4xMTM4IDIyLjA4MjcgMTQuMTU4OEwyMS40Mjc4IDE0LjI3ODRMMjIuMDgyNyAxNC4zOTc5SDIyLjA4MjdDMjIuMzI4NyAxNC40NDMgMjIuNTU1NyAxNC41NiAyMi43MzUgMTQuNzM0M0MyMi45MTQ0IDE0LjkwODYgMjMuMDM3OSAxNS4xMzIxIDIzLjA5IDE1LjM3NjdMMjMuMjM0MSAxNi4wNTU0TDIzLjM3ODIgMTUuMzc2N1oiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNjk5XzI2OTgiIHgxPSIyMC44NjE0IiB5MT0iMTAuNTkyNiIgeDI9IjE0LjUzOTgiIHkyPSIxMy43NTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;

// src/lib/initializeEthos.ts
var import_store27 = __toModule(require_store2());
var initializeEthos = (ethosConfiguration) => {
  const ethosStore = import_store27.default.namespace("ethos");
  log_default("initialize", "Ethos Configuration", ethosConfiguration);
  ethosStore("configuration", ethosConfiguration);
};
var initializeEthos_default = initializeEthos;

// src/lib/listenForMobileConnection.ts
var listenForMobileConnection = async () => {
  const {walletAppUrl} = getConfiguration_default();
  const connectionEventListener = (message) => {
    if (message.origin === walletAppUrl) {
      const {action, data} = message.data;
      if (action !== "connect")
        return;
      if (!data.address) {
        return;
      }
      ;
      window.removeEventListener("message", connectionEventListener);
      const signer = {
        currentAccount: {address: data.address}
      };
      const provider = {
        getSigner: signer
      };
      log_default("mobile", "Mobile connection established", provider, signer);
    }
  };
  window.removeEventListener("message", connectionEventListener);
  window.addEventListener("message", connectionEventListener);
};
var listenForMobileConnection_default = listenForMobileConnection;

// src/lib/lib.ts
var lib = {
  getWalletContents: getWalletContents_default,
  postIFrameMessage: postIFrameMessage_default,
  getEthosSigner: getEthosSigner_default,
  getConfiguration: getConfiguration_default,
  initializeEthos: initializeEthos_default,
  listenForMobileConnection: listenForMobileConnection_default
};
var lib_default = lib;

// src/lib/login.ts
var login = async ({email, provider, apiKey}) => {
  const {walletAppUrl, redirectTo} = lib_default.getConfiguration();
  const userStore = import_store28.default.namespace("users");
  if (provider) {
    const returnTo = redirectTo ?? location.href;
    const fullUrl = `${walletAppUrl}/auth?apiKey=${apiKey}&returnTo=${encodeURIComponent(returnTo)}`;
    location.href = `${walletAppUrl}/socialauth?provider=${provider}&redirectTo=${encodeURIComponent(fullUrl)}`;
    return;
  }
  return new Promise((resolve, _reject) => {
    const loginEventListener = (message) => {
      if (message.origin === walletAppUrl) {
        const {action, data} = message.data;
        if (action !== "login")
          return;
        window.removeEventListener("message", loginEventListener);
        userStore("current", data);
        resolve(data);
      }
    };
    window.addEventListener("message", loginEventListener);
    lib_default.postIFrameMessage({
      action: "login",
      data: {
        email,
        provider,
        returnTo: redirectTo ?? window.location.href,
        apiKey
      }
    });
  });
};
var login_default = login;

// src/components/styled/Email.tsx
var Email = ({setSigningIn, setEmailSent, width}) => {
  const {apiKey} = getConfiguration_default();
  const [email, setEmail] = (0, import_react10.useState)("");
  const validEmail = (0, import_react10.useMemo)(() => {
    if (!email)
      return false;
    if (email.length === 0)
      return false;
    return !!email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
  }, [email]);
  const sendEmail = (0, import_react10.useCallback)(async () => {
    if (!validEmail)
      return;
    await login_default({email, apiKey});
    setEmail("");
    setSigningIn(false);
    setEmailSent(true);
    event_default({action: "send_email", category: "sign_in", label: email, value: 1});
  }, [validEmail, login_default, email, apiKey]);
  const _handleChange = (0, import_react10.useCallback)((e) => {
    setEmail(e.target.value);
  }, []);
  const onSubmit = (0, import_react10.useCallback)(async (e) => {
    if (!validEmail) {
      e.preventDefault();
      return;
    }
    setSigningIn(true);
    sendEmail();
  }, [sendEmail]);
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    role: "email-sign-in"
  }, /* @__PURE__ */ import_react10.default.createElement("form", {
    onSubmit,
    style: walletOptionContainer(width)
  }, /* @__PURE__ */ import_react10.default.createElement("input", {
    style: emailInput(),
    type: "email",
    placeholder: "Enter your email address...",
    value: email,
    onChange: _handleChange
  }), /* @__PURE__ */ import_react10.default.createElement(IconButton_default, {
    text: "Sign In With Email",
    type: "submit",
    width,
    disabled: !validEmail,
    primary: true
  })));
};
var Email_default = Email;

// src/components/styled/Dialog.tsx
var import_react11 = __toModule(require("react"));

// src/components/styled/FontProvider.tsx
var React10 = __toModule(require("react"));
var FontProvider = ({children}) => {
  const styles12 = () => ({
    fontFamily: "'Inter', sans-serif",
    color: "black",
    lineHeight: "1.5",
    fontSize: "16px"
  });
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement("link", {
    href: "https://rsms.me/inter/inter.css",
    rel: "stylesheet"
  }), /* @__PURE__ */ React10.createElement("div", {
    style: styles12()
  }, children));
};
var FontProvider_default = FontProvider;

// src/components/styled/Dialog.tsx
var Dialog = ({isOpenAll, children}) => {
  return /* @__PURE__ */ import_react11.default.createElement(FontProvider_default, null, /* @__PURE__ */ import_react11.default.createElement("div", {
    style: dialog(isOpenAll),
    role: "dialog"
  }, /* @__PURE__ */ import_react11.default.createElement("div", {
    style: backdrop(isOpenAll)
  }), children));
};
var Dialog_default = Dialog;

// src/components/styled/ModalWrapper.tsx
var import_react12 = __toModule(require("react"));
var ModalWrapper = ({closeOnClickId, onClose, isOpenAll, width, back, children}) => {
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    style: modalOuterWrapper(isOpenAll)
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    id: closeOnClickId,
    style: modalInnerWrapper(width)
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    style: dialogPanel(width)
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    style: topPanelStyle()
  }, /* @__PURE__ */ import_react12.default.createElement("span", null, back && /* @__PURE__ */ import_react12.default.createElement("span", {
    style: backStyle(),
    onClick: back
  }, "\u2190", /* @__PURE__ */ import_react12.default.createElement("span", {
    style: backStyleText()
  }, "Back"))), /* @__PURE__ */ import_react12.default.createElement("span", {
    style: closeStyle(),
    onClick: onClose
  }, /* @__PURE__ */ import_react12.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor"
  }, /* @__PURE__ */ import_react12.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  })))), children)));
};
var ModalWrapper_default = ModalWrapper;

// src/components/svg/InstallWalletIcon.tsx
var import_react13 = __toModule(require("react"));
var InstallWalletIcon = ({width = 60}) => {
  return /* @__PURE__ */ import_react13.default.createElement("svg", {
    width,
    height: width,
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react13.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "17",
    fill: "#1A1C26"
  }), /* @__PURE__ */ import_react13.default.createElement("path", {
    d: "M17.0307 21.5C18.1258 20.5314 19.538 19.9977 21 20H39C40.5213 20 41.9107 20.5667 42.9693 21.5C42.8475 20.5332 42.377 19.6442 41.6462 18.9998C40.9153 18.3553 39.9744 17.9998 39 18H21C20.0256 17.9998 19.0847 18.3553 18.3538 18.9998C17.623 19.6442 17.1525 20.5332 17.0307 21.5ZM17.0307 25.5C18.1258 24.5314 19.538 23.9977 21 24H39C40.5213 24 41.9107 24.5667 42.9693 25.5C42.8475 24.5332 42.377 23.6442 41.6462 22.9998C40.9153 22.3553 39.9744 21.9998 39 22H21C20.0256 21.9998 19.0847 22.3553 18.3538 22.9998C17.623 23.6442 17.1525 24.5332 17.0307 25.5ZM21 26C19.9391 26 18.9217 26.4214 18.1716 27.1716C17.4214 27.9217 17 28.9391 17 30V38C17 39.0609 17.4214 40.0783 18.1716 40.8284C18.9217 41.5786 19.9391 42 21 42H39C40.0609 42 41.0783 41.5786 41.8284 40.8284C42.5786 40.0783 43 39.0609 43 38V30C43 28.9391 42.5786 27.9217 41.8284 27.1716C41.0783 26.4214 40.0609 26 39 26H34C33.7348 26 33.4804 26.1054 33.2929 26.2929C33.1054 26.4804 33 26.7348 33 27C33 27.7956 32.6839 28.5587 32.1213 29.1213C31.5587 29.6839 30.7956 30 30 30C29.2044 30 28.4413 29.6839 27.8787 29.1213C27.3161 28.5587 27 27.7956 27 27C27 26.7348 26.8946 26.4804 26.7071 26.2929C26.5196 26.1054 26.2652 26 26 26H21Z",
    fill: "white"
  }), /* @__PURE__ */ import_react13.default.createElement("rect", {
    x: "1",
    y: "1",
    width: "58",
    height: "58",
    rx: "17",
    stroke: "#060914",
    strokeWidth: "2"
  }));
};
var InstallWalletIcon_default = InstallWalletIcon;

// src/components/styled/InstallWallet.tsx
var import_react16 = __toModule(require("react"));

// src/components/svg/SuiEnclosed.tsx
var import_react14 = __toModule(require("react"));
var SuiEnclosed = ({width = 32}) => {
  return /* @__PURE__ */ import_react14.default.createElement("svg", {
    width,
    height: width,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react14.default.createElement("rect", {
    width: "32",
    height: "32",
    rx: "8",
    fill: "#81BAEB"
  }), /* @__PURE__ */ import_react14.default.createElement("g", {
    clipPath: "url(#clip0_315_6756)"
  }, /* @__PURE__ */ import_react14.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.4932 22.2659C11.0635 23.2776 11.8925 24.1195 12.8953 24.7053C13.898 25.2912 15.0385 25.5999 16.1999 25.5999C17.3613 25.5999 18.5017 25.2912 19.5045 24.7053C20.5073 24.1195 21.3363 23.2776 21.9066 22.2659C22.4918 21.2523 22.7999 20.1025 22.7999 18.932C22.7999 17.7616 22.4918 16.6118 21.9066 15.5982L16.8874 6.80155C16.8187 6.67967 16.7188 6.57825 16.598 6.50767C16.4772 6.4371 16.3398 6.3999 16.1999 6.3999C16.06 6.3999 15.9226 6.4371 15.8018 6.50767C15.6809 6.57825 15.5811 6.67967 15.5123 6.80155L10.4932 15.5982C9.90796 16.6118 9.59985 17.7616 9.59985 18.932C9.59985 20.1025 9.90796 21.2523 10.4932 22.2659ZM14.786 10.9865L15.8561 9.11092C15.8905 9.04998 15.9404 8.99927 16.0008 8.96399C16.0612 8.9287 16.1299 8.9101 16.1999 8.9101C16.2698 8.9101 16.3385 8.9287 16.399 8.96399C16.4594 8.99927 16.5093 9.04998 16.5437 9.11092L20.6605 16.3263C21.0301 16.966 21.2592 17.6771 21.3326 18.4123C21.4061 19.1475 21.3221 19.8898 21.0864 20.59C21.0352 20.3514 20.9648 20.1172 20.8758 19.8899C20.3072 18.4377 19.0214 17.3171 17.0534 16.559C15.7004 16.0397 14.8368 15.276 14.4859 14.2886C14.0339 13.0166 14.506 11.6291 14.786 10.9865ZM12.9612 14.1847L11.7392 16.3263C11.2817 17.1186 11.0409 18.0174 11.0409 18.9323C11.0409 19.8472 11.2817 20.7459 11.7392 21.5382C12.1091 22.1934 12.6186 22.7591 13.2316 23.1952C13.8447 23.6312 14.5462 23.927 15.2864 24.0615C16.0266 24.1959 16.7874 24.1658 17.5146 23.9732C18.2419 23.7806 18.9178 23.4302 19.4944 22.947C19.8131 22.1324 19.8244 21.2296 19.5264 20.4072C19.1088 19.358 18.1034 18.5204 16.5383 17.9172C14.7692 17.2381 13.6199 16.178 13.1228 14.7672C13.0558 14.5769 13.0019 14.3823 12.9612 14.1847Z",
    fill: "white"
  })), /* @__PURE__ */ import_react14.default.createElement("defs", null, /* @__PURE__ */ import_react14.default.createElement("clipPath", {
    id: "clip0_315_6756"
  }, /* @__PURE__ */ import_react14.default.createElement("rect", {
    width: "19.2",
    height: "19.2",
    fill: "white",
    transform: "translate(6.3999 6.3999)"
  }))));
};
var SuiEnclosed_default = SuiEnclosed;

// src/components/svg/EthosWalletIcon.tsx
var import_react15 = __toModule(require("react"));
var EthosWalletIcon = () => {
  return /* @__PURE__ */ import_react15.default.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react15.default.createElement("rect", {
    width: "32",
    height: "32",
    rx: "8",
    fill: "#6D28D9"
  }), /* @__PURE__ */ import_react15.default.createElement("path", {
    opacity: "0.8",
    d: "M9.12187 6.85706H19.9583C20.4571 6.85706 20.8614 7.26141 20.8614 7.7602V19.9886C20.8614 20.4874 20.4571 20.8918 19.9583 20.8918H9.12187C8.62308 20.8918 8.21872 20.4874 8.21872 19.9886V7.7602C8.21872 7.26141 8.62308 6.85706 9.12187 6.85706Z",
    stroke: "url(#paint0_linear_699_2698)",
    strokeWidth: "0.451572"
  }), /* @__PURE__ */ import_react15.default.createElement("path", {
    d: "M8.71274 7.45459L16.0945 10.8894C16.4129 11.0376 16.6166 11.357 16.6166 11.7083V23.81C16.6166 24.4635 15.944 24.9007 15.3468 24.6353L7.96502 21.3556C7.63882 21.2107 7.42858 20.8872 7.42858 20.5303V8.27343C7.42858 7.61311 8.11406 7.17602 8.71274 7.45459Z",
    fill: "white"
  }), /* @__PURE__ */ import_react15.default.createElement("path", {
    d: "M23.3782 15.3767C23.4303 15.1321 23.5538 14.9086 23.7332 14.7343C23.9125 14.56 24.1396 14.443 24.3856 14.3979L25.0404 14.2784L24.3855 14.1588H24.3856C24.1396 14.1137 23.9125 13.9967 23.7332 13.8224C23.5538 13.6481 23.4303 13.4246 23.3782 13.18L23.2341 12.5013L23.09 13.18C23.0379 13.4246 22.9144 13.6481 22.7351 13.8224C22.5558 13.9967 22.3287 14.1138 22.0827 14.1588L21.4278 14.2784L22.0827 14.3979H22.0827C22.3287 14.443 22.5557 14.56 22.735 14.7343C22.9144 14.9086 23.0379 15.1321 23.09 15.3767L23.2341 16.0554L23.3782 15.3767Z",
    fill: "white"
  }), /* @__PURE__ */ import_react15.default.createElement("defs", null, /* @__PURE__ */ import_react15.default.createElement("linearGradient", {
    id: "paint0_linear_699_2698",
    x1: "20.8614",
    y1: "10.5926",
    x2: "14.5398",
    y2: "13.7534",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ import_react15.default.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ import_react15.default.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  }))));
};
var EthosWalletIcon_default = EthosWalletIcon;

// src/components/styled/InstallWallet.tsx
var InstallWallet = ({walletInfos, width}) => {
  const icon = (data) => {
    if (!data)
      return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null);
    if (typeof data === "string") {
      return /* @__PURE__ */ import_react16.default.createElement("img", {
        src: data,
        height: 32,
        width: 32
      });
    }
    return data;
  };
  const installWallets = [
    {
      name: "Ethos Wallet",
      icon: /* @__PURE__ */ import_react16.default.createElement(EthosWalletIcon_default, null),
      link: "https://chrome.google.com/webstore/detail/ethos-wallet/mcbigmjiafegjnnogedioegffbooigli"
    },
    {
      name: "Sui Wallet",
      icon: /* @__PURE__ */ import_react16.default.createElement(SuiEnclosed_default, null),
      link: "https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
    },
    ...walletInfos || []
  ];
  return /* @__PURE__ */ import_react16.default.createElement(Header_default, {
    dappIcon: /* @__PURE__ */ import_react16.default.createElement(InstallWalletIcon_default, null),
    title: "Install A Wallet",
    subTitle: "Wallets allow you to interact with, store, send, and receive digital assets."
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    role: "wallet-sign-in"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    style: walletOptionContainer(width)
  }, installWallets?.map((installWallet, index) => /* @__PURE__ */ import_react16.default.createElement("a", {
    key: `install-wallet-${index}`,
    style: iconButton(width),
    href: installWallet.link,
    target: "_blank"
  }, installWallet.name, /* @__PURE__ */ import_react16.default.createElement("div", null, icon(installWallet.icon)))))));
};
var InstallWallet_default = InstallWallet;

// src/hooks/useModal.ts
var import_react18 = __toModule(require("react"));

// src/components/ConnectContext.tsx
var import_react17 = __toModule(require("react"));
var defaultContents = {
  init: () => {
  }
};
var ConnectContext = (0, import_react17.createContext)(defaultContents);
var ConnectContext_default = ConnectContext;

// src/hooks/useModal.ts
var useModal = () => {
  const {modal} = (0, import_react18.useContext)(ConnectContext_default);
  return modal;
};
var useModal_default = useModal;

// src/hooks/useWallet.ts
var import_react19 = __toModule(require("react"));

// src/enums/EthosConnectStatus.ts
var EthosConnectStatus;
(function(EthosConnectStatus2) {
  EthosConnectStatus2["Loading"] = "loading";
  EthosConnectStatus2["NoConnection"] = "no_connection";
  EthosConnectStatus2["Connected"] = "connected";
})(EthosConnectStatus || (EthosConnectStatus = {}));

// src/hooks/useWallet.ts
var useWallet = () => {
  const {wallet} = (0, import_react19.useContext)(ConnectContext_default);
  return wallet ?? {status: EthosConnectStatus.Loading, provider: null, setAltAccount: () => {
  }};
};
var useWallet_default = useWallet;

// src/hooks/useWindowDimensions.ts
var import_react20 = __toModule(require("react"));
function getWindowDimensions() {
  if (typeof window === "undefined")
    return {width: 0, height: 0};
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = (0, import_react20.useState)({width: 0, height: 0});
  (0, import_react20.useEffect)(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

// src/hooks/hooks.ts
var hooks = {
  useModal: useModal_default,
  useWallet: useWallet_default,
  useWindowDimensions
};
var hooks_default = hooks;

// src/components/styled/MobileWallet.tsx
var import_react21 = __toModule(require("react"));
var MobileWallet = () => {
  return /* @__PURE__ */ import_react21.default.createElement("div", {
    role: "wallet-sign-in"
  }, /* @__PURE__ */ import_react21.default.createElement("span", {
    style: ethosWalletTitleText()
  }, "Connect A Mobile Wallet"), /* @__PURE__ */ import_react21.default.createElement("div", {
    style: walletExplanation()
  }, /* @__PURE__ */ import_react21.default.createElement("p", null, "There are no mobile wallets yet on Sui.")));
};
var MobileWallet_default = MobileWallet;

// src/components/styled/Or.tsx
var import_react22 = __toModule(require("react"));
var Or = () => {
  return /* @__PURE__ */ import_react22.default.createElement("div", {
    style: strikeThroughOrContainer()
  }, /* @__PURE__ */ import_react22.default.createElement("div", {
    style: line()
  }), "or", /* @__PURE__ */ import_react22.default.createElement("div", {
    style: line()
  }));
};
var Or_default = Or;

// src/components/styled/SignInModal.tsx
function showSignInModal() {
  window.ethosInternal.showSignInModal();
}
function hideSignInModal() {
  window.ethosInternal.hideSignInModal();
}
var SignInModal = ({
  connectMessage,
  dappName,
  dappIcon,
  hideEmailSignIn,
  hideWalletSignIn,
  externalContext,
  preferredWallets
}) => {
  const {wallets: wallets2, selectWallet} = externalContext?.wallet || hooks_default.useWallet();
  const {isModalOpen, openModal, closeModal} = externalContext?.modal || hooks_default.useModal();
  const [isOpenAll, setIsOpenAll] = (0, import_react23.useState)(isModalOpen);
  const [signingIn, setSigningIn] = (0, import_react23.useState)(false);
  const [emailSent, setEmailSent] = (0, import_react23.useState)(false);
  const {width} = hooks_default.useWindowDimensions();
  const closeOnClickId = "ethos-close-on-click";
  const [showEmail, setShowEmail] = (0, import_react23.useState)(false);
  const [showMobile, setShowMobile] = (0, import_react23.useState)(false);
  const [showInstallWallet, setShowInstallWallet] = (0, import_react23.useState)(false);
  const [safeDappName, setSafeDappName] = (0, import_react23.useState)(dappName);
  const [safeWallets, setSafeWallets] = (0, import_react23.useState)();
  useHandleElementWithIdClicked(closeOnClickId, closeModal);
  (0, import_react23.useEffect)(() => {
    window.ethosInternal || (window.ethosInternal = {});
    window.ethosInternal.showSignInModal = () => {
      openModal();
    };
    window.ethosInternal.hideSignInModal = () => {
      closeModal();
    };
    setIsOpenAll(isModalOpen);
  }, [isModalOpen, setIsOpenAll, openModal, closeModal]);
  (0, import_react23.useEffect)(() => {
    if (hideEmailSignIn && hideWalletSignIn) {
      throw new Error("hideEmailSignIn and hideWalletSignIn cannot both be true");
    }
  }, [hideEmailSignIn, hideWalletSignIn]);
  (0, import_react23.useEffect)(() => {
    if (!safeDappName) {
      setSafeDappName(document.title);
    }
  }, [safeDappName]);
  (0, import_react23.useEffect)(() => {
    let safeWallets2 = wallets2 || [];
    if (preferredWallets && preferredWallets.length > 0) {
      safeWallets2 = safeWallets2.sort((a, b) => {
        let aIndex = preferredWallets.indexOf(a.name);
        if (aIndex === -1) {
          aIndex = safeWallets2.length;
        }
        let bIndex = preferredWallets.indexOf(b.name);
        if (bIndex === -1) {
          bIndex = safeWallets2.length;
        }
        return aIndex - bIndex;
      });
    }
    log_default("preferredWallets", preferredWallets, safeWallets2);
    setSafeWallets(safeWallets2);
  }, [wallets2, preferredWallets, log_default]);
  const _toggleInstallWallet = (0, import_react23.useCallback)(() => {
    setShowInstallWallet((prev) => !prev);
  }, []);
  const _toggleEmail = (0, import_react23.useCallback)(() => {
    setShowEmail((prev) => !prev);
  }, []);
  const _reset = (0, import_react23.useCallback)(() => {
    setShowInstallWallet(false);
    setShowMobile(false);
    setShowEmail(false);
  }, []);
  const safeConnectMessage = (0, import_react23.useMemo)(() => {
    if (connectMessage)
      return connectMessage;
    if (!safeDappName) {
      return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null);
    }
    return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, "Connect to ", /* @__PURE__ */ import_react23.default.createElement("span", {
      style: highlighted()
    }, safeDappName));
  }, [safeDappName, connectMessage]);
  const modalContent = (0, import_react23.useMemo)(() => {
    if (!safeWallets) {
      return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null);
    }
    if (showMobile) {
      return /* @__PURE__ */ import_react23.default.createElement(MobileWallet_default, null);
    }
    if (showInstallWallet || hideEmailSignIn && safeWallets.length === 0) {
      return /* @__PURE__ */ import_react23.default.createElement(InstallWallet_default, {
        width
      });
    }
    if (hideWalletSignIn) {
      return /* @__PURE__ */ import_react23.default.createElement(Email_default, {
        setSigningIn,
        setEmailSent,
        width
      });
    }
    if (!showEmail && safeWallets.length > 0)
      return /* @__PURE__ */ import_react23.default.createElement(Header_default, {
        title: safeConnectMessage,
        dappIcon,
        subTitle: "Choose from your installed wallets"
      }, /* @__PURE__ */ import_react23.default.createElement(Wallets_default, {
        wallets: safeWallets,
        selectWallet,
        width
      }), !hideEmailSignIn && /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(Or_default, null), /* @__PURE__ */ import_react23.default.createElement("div", {
        style: submitButtonContainer()
      }, /* @__PURE__ */ import_react23.default.createElement(IconButton_default, {
        text: "Sign In With Email",
        onClick: _toggleEmail,
        width,
        primary: true
      }))));
    return /* @__PURE__ */ import_react23.default.createElement(Header_default, {
      title: safeConnectMessage,
      dappIcon,
      subTitle: `Log in to ${safeDappName}`
    }, /* @__PURE__ */ import_react23.default.createElement(Email_default, {
      setSigningIn,
      setEmailSent,
      width
    }), !hideWalletSignIn && /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement(Or_default, null), /* @__PURE__ */ import_react23.default.createElement("div", {
      style: submitButtonContainer()
    }, safeWallets.length > 0 ? /* @__PURE__ */ import_react23.default.createElement(IconButton_default, {
      icon: /* @__PURE__ */ import_react23.default.createElement(WalletsIcon_default, null),
      text: "Select One Of Your Wallets",
      onClick: _toggleEmail,
      width
    }) : /* @__PURE__ */ import_react23.default.createElement(IconButton_default, {
      icon: /* @__PURE__ */ import_react23.default.createElement(WalletsIcon_default, null),
      text: "Install A Wallet",
      onClick: _toggleInstallWallet,
      width
    }))));
  }, [safeConnectMessage, safeDappName, hideEmailSignIn, hideWalletSignIn, safeWallets, showEmail, showMobile, showInstallWallet]);
  const subpage = (0, import_react23.useMemo)(() => {
    return showMobile || showInstallWallet;
  }, [showMobile, showInstallWallet]);
  const loader = (0, import_react23.useMemo)(() => /* @__PURE__ */ import_react23.default.createElement("div", {
    style: loaderStyle()
  }, /* @__PURE__ */ import_react23.default.createElement(Loader_default, {
    width: 50
  })), []);
  return /* @__PURE__ */ import_react23.default.createElement(Dialog_default, {
    isOpenAll
  }, /* @__PURE__ */ import_react23.default.createElement(ModalWrapper_default, {
    closeOnClickId,
    onClose: closeModal,
    isOpenAll,
    width,
    back: subpage ? _reset : null
  }, emailSent ? /* @__PURE__ */ import_react23.default.createElement(EmailSent_default, null) : signingIn ? loader : modalContent));
};
var SignInModal_default = SignInModal;

// src/hooks/useContext.ts
var import_react27 = __toModule(require("react"));

// src/hooks/useAccount.ts
var import_react24 = __toModule(require("react"));
var useAccount = (signer, network, explicitInterval) => {
  const [altAccount, setAltAccount] = (0, import_react24.useState)();
  const [account, setAccount] = (0, import_react24.useState)({});
  const latestNetwork = (0, import_react24.useRef)(network);
  const existingContents = (0, import_react24.useRef)();
  (0, import_react24.useEffect)(() => {
    if (!signer)
      return;
    latestNetwork.current = network;
    const initAccount = async () => {
      const address2 = altAccount?.address ?? signer.currentAccount?.address;
      if (!address2) {
        return;
      }
      setAccount((prev) => {
        if (prev.address === address2)
          return prev;
        return {...prev, address: address2};
      });
      const contents = await getWalletContents_default({
        address: address2,
        network,
        existingContents: existingContents.current
      });
      if (!contents || network !== latestNetwork.current || JSON.stringify(existingContents.current) === JSON.stringify(contents))
        return;
      existingContents.current = contents;
      setAccount((prev) => ({...prev, contents}));
    };
    initAccount();
    const interval = setInterval(initAccount, explicitInterval ?? 5e3);
    return () => clearInterval(interval);
  }, [network, signer, altAccount]);
  return {account, altAccount, setAltAccount};
};
var useAccount_default = useAccount;

// src/hooks/useConnect.ts
var import_react26 = __toModule(require("react"));

// src/hooks/useWalletKit.ts
var import_react25 = __toModule(require("react"));

// node_modules/@mysten/wallet-adapter-base/dist/index.mjs
function isWalletAdapter(wallet) {
  return "connect" in wallet;
}
function isWalletProvider(wallet) {
  return !isWalletAdapter(wallet);
}
function resolveAdapters(adapterAndProviders) {
  return adapterAndProviders.flatMap((adapter) => {
    if (isWalletProvider(adapter)) {
      return adapter.get();
    }
    return adapter;
  });
}

// node_modules/@mysten/wallet-kit-core/dist/index.mjs
var localStorageAdapter = {
  async set(key, value) {
    return localStorage.setItem(key, value);
  },
  async get(key) {
    return localStorage.getItem(key);
  },
  async del(key) {
    localStorage.removeItem(key);
  }
};
var WalletKitCoreConnectionStatus = /* @__PURE__ */ ((WalletKitCoreConnectionStatus2) => {
  WalletKitCoreConnectionStatus2["DISCONNECTED"] = "DISCONNECTED";
  WalletKitCoreConnectionStatus2["CONNECTING"] = "CONNECTING";
  WalletKitCoreConnectionStatus2["CONNECTED"] = "CONNECTED";
  WalletKitCoreConnectionStatus2["ERROR"] = "ERROR";
  return WalletKitCoreConnectionStatus2;
})(WalletKitCoreConnectionStatus || {});
var SUI_WALLET_NAME = "Sui Wallet";
var RECENT_WALLET_STORAGE = "wallet-kit:last-wallet";
function sortWallets(wallets2, preferredWallets) {
  return [
    ...preferredWallets.map((name) => wallets2.find((wallet) => wallet.name === name)).filter(Boolean),
    ...wallets2.filter((wallet) => !preferredWallets.includes(wallet.name))
  ];
}
function createWalletKitCore({
  adapters,
  preferredWallets = [SUI_WALLET_NAME],
  storageAdapter = localStorageAdapter,
  storageKey = RECENT_WALLET_STORAGE
}) {
  const subscriptions = /* @__PURE__ */ new Set();
  let walletEventUnsubscribe = null;
  let internalState = {
    accounts: [],
    currentAccount: null,
    wallets: sortWallets(resolveAdapters(adapters), preferredWallets),
    currentWallet: null,
    status: "DISCONNECTED"
  };
  const computeState = () => ({
    ...internalState,
    isConnecting: internalState.status === "CONNECTING",
    isConnected: internalState.status === "CONNECTED",
    isError: internalState.status === "ERROR"
  });
  let state = computeState();
  function setState(nextInternalState) {
    internalState = {
      ...internalState,
      ...nextInternalState
    };
    state = computeState();
    subscriptions.forEach((handler) => {
      try {
        handler(state);
      } catch {
      }
    });
  }
  function disconnected() {
    if (walletEventUnsubscribe) {
      walletEventUnsubscribe();
      walletEventUnsubscribe = null;
    }
    setState({
      status: "DISCONNECTED",
      accounts: [],
      currentAccount: null,
      currentWallet: null
    });
  }
  const providers = adapters.filter(isWalletProvider);
  if (providers.length) {
    providers.map((provider) => provider.on("changed", () => {
      setState({
        wallets: sortWallets(resolveAdapters(adapters), preferredWallets)
      });
    }));
  }
  const walletKit = {
    async autoconnect() {
      if (state.currentWallet)
        return;
      try {
        const lastWalletName = await storageAdapter.get(storageKey);
        if (lastWalletName) {
          walletKit.connect(lastWalletName);
        }
      } catch {
      }
    },
    getState() {
      return state;
    },
    subscribe(handler) {
      subscriptions.add(handler);
      try {
        handler(state);
      } catch {
      }
      return () => {
        subscriptions.delete(handler);
      };
    },
    selectAccount(account) {
      if (account === internalState.currentAccount || !internalState.accounts.includes(account)) {
        return;
      }
      setState({
        currentAccount: account
      });
    },
    async connect(walletName) {
      const currentWallet = internalState.wallets.find((wallet) => wallet.name === walletName) ?? null;
      setState({currentWallet});
      if (currentWallet && !currentWallet.connecting) {
        if (walletEventUnsubscribe) {
          walletEventUnsubscribe();
        }
        walletEventUnsubscribe = currentWallet.on("change", ({connected, accounts}) => {
          if (connected === false) {
            disconnected();
          } else if (accounts) {
            setState({
              accounts,
              currentAccount: internalState.currentAccount && !accounts.find(({address: address2}) => address2 === internalState.currentAccount?.address) ? accounts[0] : internalState.currentAccount
            });
          }
        });
        try {
          setState({status: "CONNECTING"});
          await currentWallet.connect();
          setState({status: "CONNECTED"});
          try {
            await storageAdapter.set(storageKey, currentWallet.name);
          } catch {
          }
          const accounts = await currentWallet.getAccounts();
          setState({accounts, currentAccount: accounts[0] ?? null});
        } catch (e) {
          console.log("Wallet connection error", e);
          setState({status: "ERROR"});
        }
      } else {
        setState({status: "DISCONNECTED"});
      }
    },
    async disconnect() {
      if (!internalState.currentWallet) {
        console.warn("Attempted to `disconnect` but no wallet was connected.");
        return;
      }
      try {
        await storageAdapter.del(storageKey);
      } catch {
      }
      await internalState.currentWallet.disconnect();
      disconnected();
    },
    signMessage(messageInput) {
      if (!internalState.currentWallet || !internalState.currentAccount) {
        throw new Error("No wallet is currently connected, cannot call `signMessage`.");
      }
      return internalState.currentWallet.signMessage({
        ...messageInput,
        account: messageInput.account ?? internalState.currentAccount
      });
    },
    async signTransactionBlock(transactionInput) {
      if (!internalState.currentWallet || !internalState.currentAccount) {
        throw new Error("No wallet is currently connected, cannot call `signTransaction`.");
      }
      const {
        account = internalState.currentAccount,
        chain = internalState.currentAccount.chains[0]
      } = transactionInput;
      if (!chain) {
        throw new Error("Missing chain");
      }
      return internalState.currentWallet.signTransactionBlock({
        ...transactionInput,
        account,
        chain
      });
    },
    async signAndExecuteTransactionBlock(transactionInput) {
      if (!internalState.currentWallet || !internalState.currentAccount) {
        throw new Error("No wallet is currently connected, cannot call `signAndExecuteTransactionBlock`.");
      }
      const {
        account = internalState.currentAccount,
        chain = internalState.currentAccount.chains[0]
      } = transactionInput;
      if (!chain) {
        throw new Error("Missing chain");
      }
      return internalState.currentWallet.signAndExecuteTransactionBlock({
        ...transactionInput,
        account,
        chain
      });
    }
  };
  return walletKit;
}

// node_modules/@wallet-standard/app/lib/esm/wallets.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AppReadyEvent_detail;
var wallets = void 0;
var registered = new Set();
var listeners = {};
function getWallets() {
  if (wallets)
    return wallets;
  wallets = Object.freeze({register, get, on});
  if (typeof window === "undefined")
    return wallets;
  const api = Object.freeze({register});
  try {
    window.addEventListener("wallet-standard:register-wallet", ({detail: callback}) => callback(api));
  } catch (error) {
    console.error("wallet-standard:register-wallet event listener could not be added\n", error);
  }
  try {
    window.dispatchEvent(new AppReadyEvent(api));
  } catch (error) {
    console.error("wallet-standard:app-ready event could not be dispatched\n", error);
  }
  return wallets;
}
function register(...wallets2) {
  wallets2 = wallets2.filter((wallet) => !registered.has(wallet));
  if (!wallets2.length)
    return () => {
    };
  wallets2.forEach((wallet) => registered.add(wallet));
  listeners["register"]?.forEach((listener) => guard(() => listener(...wallets2)));
  return function unregister() {
    wallets2.forEach((wallet) => registered.delete(wallet));
    listeners["unregister"]?.forEach((listener) => guard(() => listener(...wallets2)));
  };
}
function get() {
  return [...registered];
}
function on(event2, listener) {
  listeners[event2]?.push(listener) || (listeners[event2] = [listener]);
  return function off() {
    listeners[event2] = listeners[event2]?.filter((existingListener) => listener !== existingListener);
  };
}
function guard(callback) {
  try {
    callback();
  } catch (error) {
    console.error(error);
  }
}
var AppReadyEvent = class extends Event {
  constructor(api) {
    super("wallet-standard:app-ready", {
      bubbles: false,
      cancelable: false,
      composed: false
    });
    _AppReadyEvent_detail.set(this, void 0);
    __classPrivateFieldSet(this, _AppReadyEvent_detail, api, "f");
  }
  get detail() {
    return __classPrivateFieldGet(this, _AppReadyEvent_detail, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
};
_AppReadyEvent_detail = new WeakMap();

// node_modules/@wallet-standard/wallet/lib/esm/util.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReadonlyWalletAccount_address;
var _ReadonlyWalletAccount_publicKey;
var _ReadonlyWalletAccount_chains;
var _ReadonlyWalletAccount_features;
var _ReadonlyWalletAccount_label;
var _ReadonlyWalletAccount_icon;
var ReadonlyWalletAccount = class {
  constructor(account) {
    _ReadonlyWalletAccount_address.set(this, void 0);
    _ReadonlyWalletAccount_publicKey.set(this, void 0);
    _ReadonlyWalletAccount_chains.set(this, void 0);
    _ReadonlyWalletAccount_features.set(this, void 0);
    _ReadonlyWalletAccount_label.set(this, void 0);
    _ReadonlyWalletAccount_icon.set(this, void 0);
    if (new.target === ReadonlyWalletAccount) {
      Object.freeze(this);
    }
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_address, account.address, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_publicKey, account.publicKey.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_chains, account.chains.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_features, account.features.slice(), "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_label, account.label, "f");
    __classPrivateFieldSet2(this, _ReadonlyWalletAccount_icon, account.icon, "f");
  }
  get address() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_address, "f");
  }
  get publicKey() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_publicKey, "f").slice();
  }
  get chains() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_chains, "f").slice();
  }
  get features() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_features, "f").slice();
  }
  get label() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_label, "f");
  }
  get icon() {
    return __classPrivateFieldGet2(this, _ReadonlyWalletAccount_icon, "f");
  }
};
_ReadonlyWalletAccount_address = new WeakMap(), _ReadonlyWalletAccount_publicKey = new WeakMap(), _ReadonlyWalletAccount_chains = new WeakMap(), _ReadonlyWalletAccount_features = new WeakMap(), _ReadonlyWalletAccount_label = new WeakMap(), _ReadonlyWalletAccount_icon = new WeakMap();

// node_modules/@mysten/wallet-standard/dist/index.mjs
var REQUIRED_FEATURES = [
  "standard:connect",
  "standard:events"
];
function isStandardWalletAdapterCompatibleWallet(wallet, features = []) {
  return [...REQUIRED_FEATURES, ...features].every((feature) => feature in wallet.features);
}

// node_modules/@mysten/wallet-adapter-unsafe-burner/dist/index.mjs
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _provider;
var _keypair;
var _signer;
var _account;
var UnsafeBurnerWalletAdapter = class {
  constructor(network = localnetConnection) {
    this.name = "Unsafe Burner Wallet";
    this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAJrElEQVR42tWbe2xT1x3H7UxAyD3XrdrSbGXlUbKWsq5rWdVuVOMRSEqSOmnVRZMmJqZNYv1nf3R/jWmVmVrtRRM/YwPd1nVTNcrE3pQCoikrIRAC4VVNY0hlD9ZOo1uCfe3ra9979v0dcy3s5Pper76Oh/STE+495/4+5/c85zqe2f7HAx5vKsS+monJj/CdHi/f4/HWW4f6AwdblmXjTM0NyS+movKtw9v+j6C5gKhyTMTTpA2x15Qwy+Pz75motOGdgKep8WF5ATgVZIt5NeO2wMqD0hfVGNPh3oYaYflsjG0l63PeyLCDnqbsLpZIhaRNFI+Ox+Le5KB0RybK8gDmJOkI07U4i/FhT1NDQl8Me5rUIfaDfELOJ0NsFa/SJQHm1WLsHcDqRWiy9BCL8s0N5t6UWWFVvxplejYm60hC91cNjPtzCTZsAptCVoeLP8PDDQJNCSodap6H+LtE8ZcdkvVkkD38vwDn4/Jvy4EhBhZSvRaUHiTXn31gJJxkUPoClBKKFizM+inhVA2cYIdM4HJouPvoe9s9H+KzDhyGK6KkmIqitBhww2C11rjQL2L4kgUwFxk8yPyzauUA3Pk/353XnA6zKbKCaQ2UlMvJF6W5uF5F8yHfZWZpC9HRmBziaEpm1bpY9XvhxuWJRldC7Mt03WlZwpjnkZUNa2DMG2EaPj9MGd2l2mofd0hQ7ZSopsXckHxVCUp32fXGdD0ZktrgFUmMqwhcWFjp87RArsD+9bn585IRaSHAKgBL3SZwOTRc8BKg7yYoskp5OJDiiPmF2Sj7ox0siYJ7lJA04EqvzZ9B1xSVt6PlW0IxZgUMJdZYAJuWngLQt9IRuZXmoTEkmci8ZtTXTViUKyasA9FRun5d8z6bfw0gYWm9mmCXxZatQgxfC7I2NVpRYQOxKWppLs4mcgn5NcibgL1K40xYp8CYY5TXEpjcb3LAJ0OZyyg3+2nySm6fjEtzkEz+7VBx3RTb+60z9dma7pkvwO2QQL5HzTtAdpKF7euw/HuzfrosBHy+ZsBimzbQshjWTVMDgez53B5MbjcGbr1ZjdUJOM5O0SLXzJ2R+uOA1dMAVoLsm5zb73JSId8t8Aa1LsAJdoTCrCaw6e3NC2DdFMUXWRg173mysJNOSUNskUJ1cOlXa2LhcbgmSszXYSn9hl3KSxTDjrZ2cbbfbWDyumsh9m3e7zCG7a3ETt+gtI7fx6lEOanZKDVvuA2cjYmt5xNOd2Louz3IQ12UZ2Zo3lkb9cDlvSs6m4Vk5Yqlabs0B97wT7PUuCXQz0Bnt9QxMPTW4iwBtmUlY8hFsHJPlzcQ1xuG75CVK1kXofCUGnU9fg1aVD7kfE9MoabtYkcAvIUYS2op3Hc3TTrDQzIAeojugTVLFolWDR6wFPtY0R66n6HltwjCIawnE2ymresk9NtN+pfUUi0mX6RJLfrh9zMRaRPOqubSA8W2MNzC0mHpK7j2ruuw5mYkxl5+2+HGQeg4yNYg7vNg+xMxFsuRMuiTsRJZG3cysAl4D9n4aC4un8L9qUyVvbCyYwFXX1nGUxFf1cCiEQqy75O+TpMwYKNKSPQUqhLyyWLsRbESLctx0YnixgfphRWA8pOPc+N4F9d+eV9V4OlCX/As5w5g+wtGhJGukp5go2R3D7EW9rSDcnGL56YgJHj+8GcFND/Vy41jj/H0jxc6HU/AA2QlR01UlH3D7CmITQnJq4lVWBi1yl8XYEh278c5H++F+Iui7r7bYR8tH/gbqoJN7fVODUhLYVVxzmYCEyOxFg7RUVa0egCHZZ55eRHnp/tKgMna6s/bbMdTxZgMzl9CCcmq7k690OzDfaeSN4QcsREjsQpgXHwyWyfg9K5WE7hc6JqTWjyihObfygOFOkv6i5K5TZx8LsL1sVS4NL8ItiB7sgAcEKcWHfUCVhK3kUVnBNbfXIs4l5xAv5sJs234eTUy93L0Au2otQOw5ORMyfQ6WwexFupVSHowG6uThXfebmlhWojMS3fazmMeGxEI6S2SUti6RAo2vKohVuH3qUG5FWm/PjH8kzutgSH5g58xrVwzIbZkxHf7OFjFC+wrMDXcpOqOKX/g01U/XPvVJyxdWsiJblqYmnZoWbDxAcR56X5WPuh4ewcL5PY9JBRUYjc7fzjG6Uc3mHBWbg23X1BLaFHOSnrw4bWiNAXSEWcWRntIignXTP/oDsfKZX66mMbZAPfhviU1AyYmJLYAMZa/QXjUSeIiixpj3UUFtd884KytjN7EjdGNNMbWwtlf3FvbQ4OQtIoYSzbxqVDLXMTxP8jnnbiyKcaJLvueGLD6kXW2sKZov1tpn7hwXf3ZUvq0K2FXOM7Op/Xgb6PhxsWIErYGVuK3WGXWkkwMMZVCVl5kWtax5A6usgemvnx4DelUcYcFC0eIbcbXKzggeyBjeXIhkftaKknJKLtnuSg7KmKQsrH+1nqbmLWY6w/tBGy/8xrruR5SM99LLIjfT/4ZbNZnQEPssIVb21rKTGRIPDagNoLdFMKgcuLc/TF6Bulk6c7ovg4TU+XvS6FNw1tDfVqH9MOPmBDui0hcK6wz744FlDjNe0m3aVldJYagtI6YbF+3ZGPsQHlN1vbeh8lJofqJ+uo9Zi4wXZxKFiXKGxbHT7pNq71oNg4Qi6MviE0FpRVqjGXILYoJ4tCjdYU1rWeMdPLc/ochj3B9pGNGL4NupGPRlUl35KMVxFLNO6ZnxYlBsUPqoMkbUqAb6VhMVKQ7MVT1dYdrL8hzEAcjpmvjHKphgaFb0ZVJZw7dwVD9q5fkgPTRbBxnzmGfgRLQsMCkG+moQdcp6GzzZsL2MGyllvBNGWM9RqMCk26kI7aBK526csVShZTfzid6FEzeiNAGP92jpCPQEbrW7EW5MbZxAz/fN9lg0IbQaaxrQ83/VoKPb/HqJx67Hw+43CDQBPsX0gm6ufXNvH4vP9rZapzx7+Nn+oxZAjfo2caZ3n350c5W6FSEdQ86sNarj3c/jRV+H42AXsdGRBfPPIlnb/mUtxzWXfALn/PmRze2Gud6E/xsXwYtnlsWN8Tc5/oyxjn/jvyJrlY82xLUfWuPr/TqxzuXQZkIP9M7CXiyuP4B4WmsTnNhzinjrD+WO9bRhmdZWLXe4EKRtV5tpN3Hx3s2G+d79/MJf4qff0LnE72kfFEs4ITQvWLMab8C131dP9n9Je1Yx000Nz2jAf+UJwCBchc3NvGR1Qx71XXY2Ww1Jvx7YalzAPkX9rp5E5Z+pv+ja8bE43uN491b9dHO9Xx4lUxziLn21Nai/wXWM6t9vkvtrwAAAABJRU5ErkJggg==";
    __privateAdd2(this, _provider, void 0);
    __privateAdd2(this, _keypair, void 0);
    __privateAdd2(this, _signer, void 0);
    __privateAdd2(this, _account, void 0);
    this.signMessage = async (messageInput) => {
      return __privateGet2(this, _signer).signMessage({message: messageInput.message});
    };
    this.signTransactionBlock = async (transactionInput) => {
      return __privateGet2(this, _signer).signTransactionBlock({
        transactionBlock: transactionInput.transactionBlock
      });
    };
    this.signAndExecuteTransactionBlock = async (transactionInput) => {
      return await __privateGet2(this, _signer).signAndExecuteTransactionBlock({
        transactionBlock: transactionInput.transactionBlock,
        options: transactionInput.options,
        requestType: transactionInput.requestType
      });
    };
    this.on = () => {
      return () => {
      };
    };
    __privateSet2(this, _keypair, new Ed25519Keypair());
    __privateSet2(this, _provider, new JsonRpcProvider(network));
    __privateSet2(this, _account, new ReadonlyWalletAccount({
      address: __privateGet2(this, _keypair).getPublicKey().toSuiAddress(),
      chains: ["sui:unknown"],
      features: [
        "sui:signAndExecuteTransactionBlock",
        "sui:signTransactionBlock"
      ],
      publicKey: __privateGet2(this, _keypair).getPublicKey().toBytes()
    }));
    __privateSet2(this, _signer, new RawSigner(__privateGet2(this, _keypair), __privateGet2(this, _provider)));
    this.connecting = false;
    this.connected = false;
    console.warn("Your application is currently using the `UnsafeBurnerWalletAdapter`. Make sure that this adapter is not included in production.");
  }
  async getAccounts() {
    return [__privateGet2(this, _account)];
  }
  async connect() {
    this.connecting = true;
    try {
      __privateGet2(this, _signer).requestSuiFromFaucet();
    } catch (e) {
      console.warn("Failed to request Sui from the faucet. This may prevent transactions from being submitted.");
      console.warn(e);
    }
    this.connecting = false;
    this.connected = true;
  }
  async disconnect() {
    this.connecting = false;
    this.connected = false;
  }
};
_provider = new WeakMap();
_keypair = new WeakMap();
_signer = new WeakMap();
_account = new WeakMap();

// node_modules/mitt/dist/mitt.mjs
function mitt_default(n) {
  return {all: n = n || new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  }};
}

// node_modules/@mysten/wallet-adapter-wallet-standard/dist/index.mjs
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck3(obj, member, "access private method");
  return method;
};
var suiSignTransactionBlockLatestVersion = "1.0.0";
var suiSignAndExecuteTransactionBlockLatestVersion = "1.0.0";
function isFeatureCompatible(featureVersion, adapterVersion) {
  const [featureMajor] = featureVersion.split(".");
  const [adapterMajor] = adapterVersion.split(".");
  return +adapterMajor === +featureMajor;
}
var _events;
var _wallet;
var _walletEventUnsubscribe;
var _notifyChanged;
var notifyChanged_fn;
var StandardWalletAdapter = class {
  constructor({wallet}) {
    __privateAdd3(this, _notifyChanged);
    this.connected = false;
    this.connecting = false;
    __privateAdd3(this, _events, mitt_default());
    __privateAdd3(this, _wallet, void 0);
    __privateAdd3(this, _walletEventUnsubscribe, null);
    this.signMessage = (messageInput) => {
      return __privateGet3(this, _wallet).features["sui:signMessage"].signMessage(messageInput);
    };
    this.signTransactionBlock = (transactionInput) => {
      const version = __privateGet3(this, _wallet).features["sui:signTransactionBlock"].version;
      if (!isFeatureCompatible(version, suiSignTransactionBlockLatestVersion)) {
        throw new Error(`Version mismatch, signTransaction feature version ${version} is not compatible with version ${suiSignTransactionBlockLatestVersion}`);
      }
      return __privateGet3(this, _wallet).features["sui:signTransactionBlock"].signTransactionBlock(transactionInput);
    };
    this.signAndExecuteTransactionBlock = (transactionInput) => {
      const version = __privateGet3(this, _wallet).features["sui:signAndExecuteTransactionBlock"].version;
      if (!isFeatureCompatible(version, suiSignAndExecuteTransactionBlockLatestVersion)) {
        throw new Error(`Version mismatch, signAndExecuteTransactionBlock feature version ${version} is not compatible with version ${suiSignAndExecuteTransactionBlockLatestVersion}`);
      }
      return __privateGet3(this, _wallet).features["sui:signAndExecuteTransactionBlock"].signAndExecuteTransactionBlock(transactionInput);
    };
    this.on = (event2, callback) => {
      __privateGet3(this, _events).on(event2, callback);
      return () => {
        __privateGet3(this, _events).off(event2, callback);
      };
    };
    __privateSet3(this, _wallet, wallet);
  }
  get name() {
    return __privateGet3(this, _wallet).name;
  }
  get icon() {
    return __privateGet3(this, _wallet).icon;
  }
  get wallet() {
    return __privateGet3(this, _wallet);
  }
  async getAccounts() {
    return __privateGet3(this, _wallet).accounts;
  }
  async connect() {
    try {
      if (this.connected || this.connecting)
        return;
      this.connecting = true;
      __privateSet3(this, _walletEventUnsubscribe, __privateGet3(this, _wallet).features["standard:events"].on("change", async ({accounts}) => {
        if (accounts) {
          this.connected = accounts.length > 0;
          await __privateMethod2(this, _notifyChanged, notifyChanged_fn).call(this);
        }
      }));
      if (!__privateGet3(this, _wallet).accounts.length) {
        await __privateGet3(this, _wallet).features["standard:connect"].connect();
      }
      if (!__privateGet3(this, _wallet).accounts.length) {
        throw new Error("No wallet accounts found");
      }
      this.connected = true;
      await __privateMethod2(this, _notifyChanged, notifyChanged_fn).call(this);
    } finally {
      this.connecting = false;
    }
  }
  async disconnect() {
    if (__privateGet3(this, _wallet).features["standard:disconnect"]) {
      await __privateGet3(this, _wallet).features["standard:disconnect"].disconnect();
    }
    this.connected = false;
    this.connecting = false;
    if (__privateGet3(this, _walletEventUnsubscribe)) {
      __privateGet3(this, _walletEventUnsubscribe).call(this);
      __privateSet3(this, _walletEventUnsubscribe, null);
    }
  }
};
_events = new WeakMap();
_wallet = new WeakMap();
_walletEventUnsubscribe = new WeakMap();
_notifyChanged = new WeakSet();
notifyChanged_fn = async function() {
  __privateGet3(this, _events).emit("change", {
    connected: this.connected,
    accounts: await this.getAccounts()
  });
};
var DEFAULT_FEATURES = ["sui:signAndExecuteTransactionBlock"];
var _wallets;
var _adapters;
var _events2;
var _features;
var WalletStandardAdapterProvider = class {
  constructor({features} = {}) {
    __privateAdd3(this, _wallets, void 0);
    __privateAdd3(this, _adapters, void 0);
    __privateAdd3(this, _events2, void 0);
    __privateAdd3(this, _features, void 0);
    __privateSet3(this, _adapters, /* @__PURE__ */ new Map());
    __privateSet3(this, _wallets, getWallets());
    __privateSet3(this, _events2, mitt_default());
    __privateSet3(this, _features, features ?? DEFAULT_FEATURES);
    __privateGet3(this, _wallets).on("register", () => {
      __privateGet3(this, _events2).emit("changed");
    });
    __privateGet3(this, _wallets).on("unregister", () => {
      __privateGet3(this, _events2).emit("changed");
    });
  }
  get() {
    const filtered = __privateGet3(this, _wallets).get().filter((wallet) => isStandardWalletAdapterCompatibleWallet(wallet, __privateGet3(this, _features)));
    filtered.forEach((wallet) => {
      if (!__privateGet3(this, _adapters).has(wallet)) {
        __privateGet3(this, _adapters).set(wallet, new StandardWalletAdapter({wallet}));
      }
    });
    return [...__privateGet3(this, _adapters).values()];
  }
  on(eventName, callback) {
    __privateGet3(this, _events2).on(eventName, callback);
    return () => {
      __privateGet3(this, _events2).off(eventName, callback);
    };
  }
};
_wallets = new WeakMap();
_adapters = new WeakMap();
_events2 = new WeakMap();
_features = new WeakMap();

// src/hooks/useWalletKit.ts
var useWalletKit = ({defaultChain, provider, configuredAdapters, features, enableUnsafeBurner, preferredWallets, storageAdapter, storageKey, disableAutoConnect}) => {
  const adapters = (0, import_react25.useMemo)(() => configuredAdapters ?? [
    new WalletStandardAdapterProvider({features}),
    ...enableUnsafeBurner ? [new UnsafeBurnerWalletAdapter()] : []
  ], [configuredAdapters]);
  const walletKitRef = (0, import_react25.useRef)(null);
  if (!walletKitRef.current) {
    walletKitRef.current = createWalletKitCore({
      adapters,
      preferredWallets,
      storageAdapter,
      storageKey
    });
  }
  const {wallets: wallets2, status, currentWallet, accounts, currentAccount} = (0, import_react25.useSyncExternalStore)(walletKitRef.current.subscribe, walletKitRef.current.getState, walletKitRef.current.getState);
  (0, import_react25.useEffect)(() => {
    if (!disableAutoConnect) {
      walletKitRef.current?.autoconnect();
    }
  }, [status, wallets2]);
  const {autoconnect, ...walletFunctions} = walletKitRef.current;
  const signAndExecuteTransactionBlock = (0, import_react25.useCallback)((input) => {
    if (!currentWallet || !currentAccount) {
      throw new Error("No wallet connect to sign message");
    }
    const account = input.account || currentAccount;
    const chain = input.chain || defaultChain || DEFAULT_CHAIN;
    return currentWallet.signAndExecuteTransactionBlock({
      ...input,
      account,
      chain
    });
  }, [currentWallet, currentAccount, defaultChain]);
  const executeTransactionBlock2 = (0, import_react25.useCallback)((input) => {
    return provider.executeTransactionBlock(input);
  }, [provider]);
  const signTransactionBlock2 = (0, import_react25.useCallback)((input) => {
    if (!currentWallet || !currentAccount) {
      throw new Error("No wallet connect to sign message");
    }
    const account = input.account || currentAccount;
    const chain = input.chain || defaultChain || DEFAULT_CHAIN;
    return currentWallet.signTransactionBlock({
      ...input,
      account,
      chain
    });
  }, [currentWallet, currentAccount, defaultChain]);
  const signMessage = (0, import_react25.useCallback)((input) => {
    if (!currentWallet || !currentAccount) {
      throw new Error("No wallet connect to sign message");
    }
    const account = input.account || currentAccount;
    const message = typeof input.message === "string" ? new Uint8Array(Buffer.from(input.message, "utf8")) : input.message;
    return currentWallet.signMessage({
      ...input,
      message,
      account
    });
  }, [currentWallet, currentAccount]);
  const requestPreapproval = (0, import_react25.useCallback)(async (preapproval) => {
    if (!currentWallet || !currentAccount) {
      throw new Error("No wallet connect to preapprove transactions");
    }
    const ethosWallet = window.ethosWallet;
    if (!ethosWallet || currentWallet.name !== "Ethos Wallet") {
      console.log("Wallet does not support preapproval");
      return false;
    }
    if (!preapproval.address) {
      preapproval.address = currentAccount.address;
    }
    if (!preapproval.chain) {
      preapproval.chain = defaultChain ?? DEFAULT_CHAIN;
    }
    return ethosWallet.requestPreapproval(preapproval);
  }, [currentWallet, currentAccount, defaultChain]);
  const constructedSigner = (0, import_react25.useMemo)(() => {
    if (!currentWallet || !currentAccount)
      return null;
    return {
      type: SignerType.Extension,
      name: currentWallet.name,
      icon: currentWallet.name === "Sui Wallet" ? "https://sui.io/favicon.png" : currentWallet.icon,
      getAddress: async () => currentAccount?.address,
      accounts,
      currentAccount,
      signAndExecuteTransactionBlock,
      executeTransactionBlock: executeTransactionBlock2,
      signTransactionBlock: signTransactionBlock2,
      requestPreapproval,
      signMessage,
      disconnect: () => {
        currentWallet.disconnect();
        walletKitRef.current?.disconnect();
      },
      provider
    };
  }, [currentWallet, accounts, currentAccount, signAndExecuteTransactionBlock, executeTransactionBlock2, requestPreapproval, signMessage, provider]);
  return {
    wallets: wallets2,
    status,
    signer: constructedSigner,
    ...walletFunctions
  };
};
var useWalletKit_default = useWalletKit;

// src/hooks/useConnect.ts
var useConnect = (ethosConfiguration, onWalletConnected) => {
  const signerFound = (0, import_react26.useRef)(false);
  const methodsChecked = (0, import_react26.useRef)({
    "ethos": false,
    "extension": false
  });
  const provider = (0, import_react26.useMemo)(() => {
    const network = typeof ethosConfiguration?.network === "string" ? ethosConfiguration.network : DEFAULT_NETWORK;
    const connection = new Connection({fullnode: network});
    return new JsonRpcProvider(connection);
  }, [ethosConfiguration]);
  const [providerAndSigner, setProviderAndSigner] = (0, import_react26.useState)({
    provider: null,
    signer: null
  });
  const {
    wallets: wallets2,
    status: suiStatus,
    signer: suiSigner,
    getState,
    connect
  } = useWalletKit_default({
    provider,
    defaultChain: ethosConfiguration?.chain ?? DEFAULT_CHAIN,
    preferredWallets: ethosConfiguration?.preferredWallets,
    disableAutoConnect: ethosConfiguration?.disableAutoConnect
  });
  const disconnect = (0, import_react26.useCallback)(() => {
    signerFound.current = false;
    methodsChecked.current = {
      "ethos": false,
      "extension": false
    };
    setProviderAndSigner((prev) => ({
      ...prev,
      signer: null
    }));
  }, []);
  (0, import_react26.useEffect)(() => {
    signerFound.current = false;
    methodsChecked.current = {
      "ethos": false,
      "extension": false
    };
  }, [ethosConfiguration]);
  (0, import_react26.useEffect)(() => {
    const {provider: provider2, signer} = providerAndSigner;
    if (!provider2 && !signer)
      return;
    const extensionState = getState();
    if (extensionState.isConnecting || extensionState.isError)
      return;
    onWalletConnected && onWalletConnected(providerAndSigner);
  }, [suiStatus, providerAndSigner, onWalletConnected, getState]);
  const checkSigner = (0, import_react26.useCallback)((signer, type2) => {
    log_default("useConnect", "trying to set providerAndSigner", type2, signerFound.current, methodsChecked.current);
    if (signerFound.current)
      return;
    if (type2) {
      methodsChecked.current[type2] = true;
    }
    const allMethodsChecked = !Object.values(methodsChecked.current).includes(false);
    if (!signer && !allMethodsChecked)
      return;
    signerFound.current = !!signer;
    if (signer) {
      const _disconnect = signer?.disconnect;
      signer.disconnect = () => {
        _disconnect();
        disconnect();
      };
    }
    setProviderAndSigner({provider, signer});
  }, [provider, disconnect]);
  (0, import_react26.useEffect)(() => {
    if (suiStatus === WalletKitCoreConnectionStatus.DISCONNECTED) {
      methodsChecked.current["extension"] = false;
      signerFound.current = false;
      setProviderAndSigner((prev) => ({
        ...prev,
        signer: null
      }));
    }
  }, [suiStatus]);
  (0, import_react26.useEffect)(() => {
    if (!ethosConfiguration)
      return;
    log_default("mobile", "listening to mobile connection from EthosConnectProvider");
  }, [checkSigner, ethosConfiguration]);
  (0, import_react26.useEffect)(() => {
    if (!ethosConfiguration)
      return;
    const state = getState();
    log_default("useConnect", "Setting providerAndSigner extension", state);
    if (state.isConnecting || state.isError)
      return;
    checkSigner(suiSigner, "extension");
  }, [suiStatus, getState, checkSigner, suiSigner, ethosConfiguration]);
  (0, import_react26.useEffect)(() => {
    if (!ethosConfiguration)
      return;
    if (!ethosConfiguration.apiKey) {
      log_default("useConnect", "Setting null providerAndSigner ethos");
      checkSigner(null, "ethos");
      return;
    }
    const fetchEthosSigner = async () => {
      const signer = await lib_default.getEthosSigner({provider, defaultChain: ethosConfiguration.chain ?? DEFAULT_CHAIN});
      log_default("useConnect", "Setting providerAndSigner ethos", signer);
      checkSigner(signer, "ethos");
    };
    fetchEthosSigner();
  }, [provider, checkSigner, ethosConfiguration]);
  return {wallets: wallets2, providerAndSigner, connect, getState};
};
var useConnect_default = useConnect;

// src/hooks/useContext.ts
var DEFAULT_CONFIGURATION = {
  network: DEFAULT_NETWORK,
  chain: DEFAULT_CHAIN,
  walletAppUrl: "https://ethoswallet.xyz"
};
var useContext3 = ({configuration, onWalletConnected}) => {
  const [ethosConfiguration, setEthosConfiguration] = (0, import_react27.useState)({
    ...DEFAULT_CONFIGURATION,
    ...configuration
  });
  const [isModalOpen, setIsModalOpen] = (0, import_react27.useState)(false);
  const init = (0, import_react27.useCallback)((config) => {
    log_default("EthosConnectProvider", "EthosConnectProvider Configuration:", config);
    const fullConfiguration = {
      ...DEFAULT_CONFIGURATION,
      ...config
    };
    lib_default.initializeEthos(fullConfiguration);
    setEthosConfiguration((prev) => {
      if (JSON.stringify(fullConfiguration) !== JSON.stringify(prev)) {
        return fullConfiguration;
      } else {
        return prev;
      }
    });
  }, []);
  (0, import_react27.useEffect)(() => {
    lib_default.initializeEthos(ethosConfiguration);
  }, [ethosConfiguration]);
  (0, import_react27.useEffect)(() => {
    if (!configuration)
      return;
    if (JSON.stringify(ethosConfiguration) === JSON.stringify(configuration))
      return;
    init(configuration);
  }, [ethosConfiguration, configuration]);
  const _onWalletConnected = (0, import_react27.useCallback)((providerAndSigner2) => {
    setIsModalOpen(false);
    onWalletConnected && onWalletConnected(providerAndSigner2);
  }, [onWalletConnected]);
  const {
    wallets: wallets2,
    connect: selectWallet,
    providerAndSigner,
    getState
  } = useConnect_default(ethosConfiguration, _onWalletConnected);
  const {
    account: {address: address2, contents},
    altAccount,
    setAltAccount
  } = useAccount_default(providerAndSigner.signer, ethosConfiguration?.network ?? DEFAULT_NETWORK, ethosConfiguration?.pollingInterval);
  const modal = (0, import_react27.useMemo)(() => {
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return {
      isModalOpen,
      openModal,
      closeModal
    };
  }, [isModalOpen, setIsModalOpen]);
  const wallet = (0, import_react27.useMemo)(() => {
    const {provider, signer} = providerAndSigner;
    const extensionState = getState();
    let status;
    if (signer?.type === "hosted") {
      status = EthosConnectStatus.Connected;
    } else if (extensionState.isConnecting) {
      status = EthosConnectStatus.Loading;
    } else if (provider && extensionState.isConnected) {
      status = EthosConnectStatus.Connected;
    } else {
      status = EthosConnectStatus.NoConnection;
    }
    const context = {
      status,
      wallets: wallets2.map((w) => ({
        ...w,
        name: w.name,
        icon: w.icon
      })),
      selectWallet,
      provider,
      altAccount,
      setAltAccount
    };
    if (signer && address2) {
      context.wallet = {
        ...signer,
        address: address2,
        contents
      };
    }
    return context;
  }, [
    wallets2,
    selectWallet,
    address2,
    altAccount,
    setAltAccount,
    providerAndSigner,
    contents,
    ethosConfiguration
  ]);
  (0, import_react27.useEffect)(() => {
    if (isModalOpen) {
      document.getElementsByTagName("html").item(0)?.setAttribute("style", "overflow: hidden;");
    } else {
      document.getElementsByTagName("html").item(0)?.setAttribute("style", "");
    }
  }, [isModalOpen]);
  const value = (0, import_react27.useMemo)(() => ({
    wallet,
    modal,
    providerAndSigner
  }), [wallet, modal, providerAndSigner]);
  return {...value, ethosConfiguration, init};
};
var useContext_default = useContext3;

// src/components/EthosConnectProvider.tsx
var EthosConnectProvider = ({ethosConfiguration, onWalletConnected, connectMessage, dappName, dappIcon, children}) => {
  const context = useContext_default({configuration: ethosConfiguration || {}, onWalletConnected});
  return /* @__PURE__ */ import_react28.default.createElement(ConnectContext_default.Provider, {
    value: context
  }, children, /* @__PURE__ */ import_react28.default.createElement(SignInModal_default, {
    isOpen: context.modal?.isModalOpen || false,
    hideEmailSignIn: context.ethosConfiguration?.hideEmailSignIn || false,
    hideWalletSignIn: context.ethosConfiguration?.hideWalletSignIn || false,
    connectMessage,
    dappName,
    dappIcon,
    preferredWallets: ethosConfiguration?.preferredWallets
  }));
};
var EthosConnectProvider_default = EthosConnectProvider;

// src/components/styled/SignInButton.tsx
var import_react30 = __toModule(require("react"));

// src/components/headless/WorkingButton.tsx
var import_react29 = __toModule(require("react"));
var WorkingButton = (props) => {
  const {children, isWorking, workingComponent, ...reactProps} = props;
  return /* @__PURE__ */ import_react29.default.createElement("button", {
    ...reactProps
  }, isWorking ? workingComponent || /* @__PURE__ */ import_react29.default.createElement("span", {
    className: "block p-2"
  }, /* @__PURE__ */ import_react29.default.createElement(Loader_default, {
    width: 32
  })) : /* @__PURE__ */ import_react29.default.createElement(import_react29.default.Fragment, null, children));
};
var WorkingButton_default = WorkingButton;

// src/components/styled/SignInButton.tsx
var SignInButton = (props) => {
  const {children, onClick, externalContext, ...reactProps} = props;
  const {openModal} = externalContext?.modal || useModal_default();
  const _onClick = (0, import_react30.useCallback)((e) => {
    openModal();
    onClick && onClick(e);
  }, [openModal, onClick]);
  return /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement(WorkingButton_default, {
    onClick: _onClick,
    ...reactProps,
    style: buttonDefault(props.style)
  }, children || /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, "Sign In")));
};
var SignInButton_default = SignInButton;
var buttonDefault = (providedStyles) => ({
  lineHeight: "21px",
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "14px",
  ...providedStyles || {}
});

// src/components/headless/HoverColorButton.tsx
var import_react31 = __toModule(require("react"));
var HoverColorButton = (props) => {
  const {hoverBackgroundColor, hoverChildren, children, style, ...workingButtonProps} = props;
  const [hover, setHover] = (0, import_react31.useState)(false);
  const onMouseEnter = (0, import_react31.useCallback)(() => {
    setHover(true);
  }, []);
  const onMouseLeave = (0, import_react31.useCallback)(() => {
    setHover(false);
  }, []);
  return /* @__PURE__ */ import_react31.default.createElement(WorkingButton_default, {
    onMouseEnter,
    onMouseLeave,
    style: {
      ...style,
      backgroundColor: hover ? hoverBackgroundColor || primaryColor : void 0,
      color: hover ? "white" : "black"
    },
    ...workingButtonProps
  }, hover ? hoverChildren : children);
};
var HoverColorButton_default = HoverColorButton;

// src/components/styled/AddressWidget.tsx
var import_react37 = __toModule(require("react"));

// src/lib/truncateMiddle.ts
var truncateMiddle = (text, length = 6) => text ? `${text.slice(0, length)}...${text.slice(length * -1)}` : "";
var truncateMiddle_default = truncateMiddle;

// src/components/svg/Sui.tsx
var import_react32 = __toModule(require("react"));
var Sui = ({width = 24, color = "#6EBCEE"}) => /* @__PURE__ */ import_react32.default.createElement("svg", {
  id: "SuiSvg",
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height: width * (40 / 28),
  viewBox: "-1 0 28 40",
  style: {display: "block", verticalAlign: "middle"}
}, /* @__PURE__ */ import_react32.default.createElement("path", {
  d: "M1.8611,33.0541a13.6477,13.6477,0,0,0,23.7778,0,13.89,13.89,0,0,0,0-13.8909L15.1824.8368a1.6444,1.6444,0,0,0-2.8648,0L1.8611,19.1632A13.89,13.89,0,0,0,1.8611,33.0541ZM10.8044,9.5555,13.0338,5.648a.8222.8222,0,0,1,1.4324,0L23.043,20.68a10.8426,10.8426,0,0,1,.8873,8.8828,9.4254,9.4254,0,0,0-.4388-1.4586c-1.1847-3.0254-3.8634-5.36-7.9633-6.9393-2.8187-1.0819-4.618-2.6731-5.3491-4.73C9.2375,13.7848,10.221,10.8942,10.8044,9.5555ZM7.0028,16.2184,4.457,20.68a10.8569,10.8569,0,0,0,0,10.8582,10.6776,10.6776,0,0,0,16.1566,2.935,7.5061,7.5061,0,0,0,.0667-5.2913c-.87-2.1858-2.9646-3.9308-6.2252-5.1876-3.6857-1.4147-6.08-3.6233-7.1157-6.5625A9.297,9.297,0,0,1,7.0028,16.2184Z",
  style: {fill: color, fillRule: "evenodd"}
}));
var Sui_default = Sui;

// src/components/styled/CopyWalletAddressButton.tsx
var import_react34 = __toModule(require("react"));

// src/components/styled/MenuButton.tsx
var import_react33 = __toModule(require("react"));
var MenuButton = (props) => {
  return /* @__PURE__ */ import_react33.default.createElement(HoverColorButton_default, {
    ...props,
    style: button()
  });
};
var MenuButton_default = MenuButton;
var button = () => ({
  width: "100%",
  borderRadius: "12px",
  textAlign: "left",
  padding: "6px 12px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  border: "none",
  fontFamily: "inherit",
  cursor: "pointer"
});

// src/components/styled/CopyWalletAddressButton.tsx
var CopyWalletAddressButton = (props) => {
  const {externalContext, ...buttonProps} = props;
  const {wallet} = externalContext?.wallet || useWallet_default();
  const children = (0, import_react34.useCallback)((hover) => /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react34.default.createElement("path", {
    d: "M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789",
    stroke: hover ? "white" : "black",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Copy Wallet Address"), []);
  const onClick = (0, import_react34.useCallback)((e) => {
    const element = e.target;
    const innerHTML = element.innerHTML;
    element.innerHTML = "Copied!";
    navigator.clipboard.writeText(wallet?.address || "");
    setTimeout(() => {
      element.innerHTML = innerHTML;
    }, 1e3);
  }, [wallet]);
  return /* @__PURE__ */ import_react34.default.createElement(MenuButton_default, {
    ...buttonProps,
    onClick,
    hoverChildren: children(true)
  }, children(false));
};
var CopyWalletAddressButton_default = CopyWalletAddressButton;

// src/components/styled/WalletExplorerButton.tsx
var import_react35 = __toModule(require("react"));
var WalletExplorerButton = (props) => {
  const children = (0, import_react35.useCallback)((hover) => /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react35.default.createElement("path", {
    d: "M12 21C16.1926 21 19.7156 18.1332 20.7157 14.2529M12 21C7.80742 21 4.28442 18.1332 3.2843 14.2529M12 21C14.4853 21 16.5 16.9706 16.5 12C16.5 7.02944 14.4853 3 12 3M12 21C9.51472 21 7.5 16.9706 7.5 12C7.5 7.02944 9.51472 3 12 3M12 3C15.3652 3 18.299 4.84694 19.8431 7.58245M12 3C8.63481 3 5.70099 4.84694 4.15692 7.58245M19.8431 7.58245C17.7397 9.40039 14.9983 10.5 12 10.5C9.00172 10.5 6.26027 9.40039 4.15692 7.58245M19.8431 7.58245C20.5797 8.88743 21 10.3946 21 12C21 12.778 20.9013 13.5329 20.7157 14.2529M20.7157 14.2529C18.1334 15.6847 15.1619 16.5 12 16.5C8.8381 16.5 5.86662 15.6847 3.2843 14.2529M3.2843 14.2529C3.09871 13.5329 3 12.778 3 12C3 10.3946 3.42032 8.88743 4.15692 7.58245",
    stroke: hover ? "white" : "black",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Wallet Explorer"), []);
  const onClick = (0, import_react35.useCallback)(() => {
    window.open("https://ethoswallet.xyz/dashboard", "_blank");
  }, []);
  return /* @__PURE__ */ import_react35.default.createElement(MenuButton_default, {
    ...props,
    onClick,
    hoverChildren: children(true)
  }, children(false));
};
var WalletExplorerButton_default = WalletExplorerButton;

// src/components/styled/LogoutButton.tsx
var import_react36 = __toModule(require("react"));
var LogoutButton = (props) => {
  const {externalContext, ...buttonProps} = props;
  const {wallet} = externalContext?.wallet || useWallet_default();
  const children = (0, import_react36.useCallback)((hover) => /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react36.default.createElement("path", {
    d: "M13.5 21V20.25V21ZM7.5 21V21.75V21ZM5.25 18.75H6H5.25ZM5.25 5.25H4.5H5.25ZM7.5 3V2.25V3ZM13.5 3V3.75V3ZM15.75 5.25L15 5.25V5.25H15.75ZM15 9C15 9.41421 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 9.41421 16.5 9H15ZM16.5 15C16.5 14.5858 16.1642 14.25 15.75 14.25C15.3358 14.25 15 14.5858 15 15H16.5ZM15.75 18.75H16.5H15.75ZM18.2197 14.4697C17.9268 14.7626 17.9268 15.2374 18.2197 15.5303C18.5126 15.8232 18.9874 15.8232 19.2803 15.5303L18.2197 14.4697ZM21.75 12L22.2803 12.5303C22.5732 12.2374 22.5732 11.7626 22.2803 11.4697L21.75 12ZM19.2803 8.46967C18.9874 8.17678 18.5126 8.17678 18.2197 8.46967C17.9268 8.76256 17.9268 9.23744 18.2197 9.53033L19.2803 8.46967ZM9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75V11.25ZM13.5 20.25H7.5V21.75H13.5V20.25ZM6 18.75L6 5.25H4.5L4.5 18.75H6ZM7.5 3.75L13.5 3.75V2.25L7.5 2.25V3.75ZM15 5.25V9H16.5V5.25H15ZM15 15V18.75H16.5V15H15ZM6 5.25C6 4.42157 6.67157 3.75 7.5 3.75V2.25C5.84315 2.25 4.5 3.59315 4.5 5.25H6ZM7.5 20.25C6.67157 20.25 6 19.5784 6 18.75H4.5C4.5 20.4069 5.84315 21.75 7.5 21.75V20.25ZM13.5 21.75C15.1569 21.75 16.5 20.4069 16.5 18.75H15C15 19.5784 14.3284 20.25 13.5 20.25V21.75ZM13.5 3.75C14.3284 3.75 15 4.42157 15 5.25L16.5 5.25C16.5 3.59315 15.1569 2.25 13.5 2.25V3.75ZM19.2803 15.5303L22.2803 12.5303L21.2197 11.4697L18.2197 14.4697L19.2803 15.5303ZM22.2803 11.4697L19.2803 8.46967L18.2197 9.53033L21.2197 12.5303L22.2803 11.4697ZM21.75 11.25L9 11.25V12.75L21.75 12.75V11.25Z",
    fill: hover ? "white" : "black"
  })), "Log Out"), []);
  return /* @__PURE__ */ import_react36.default.createElement(MenuButton_default, {
    ...buttonProps,
    onClick: wallet?.disconnect,
    hoverChildren: children(true)
  }, children(false));
};
var LogoutButton_default = LogoutButton;

// src/components/styled/AddressWidget.tsx
var import_react38 = __toModule(require("react"));

// src/enums/AddressWidgetButtons.ts
var AddressWidgetButtons;
(function(AddressWidgetButtons2) {
  AddressWidgetButtons2["CopyWalletAddress"] = "copy_wallet_address";
  AddressWidgetButtons2["WalletExplorer"] = "wallet_explorer";
  AddressWidgetButtons2["Logout"] = "logout";
})(AddressWidgetButtons || (AddressWidgetButtons = {}));

// src/components/styled/AddressWidget.tsx
var AddressWidget = ({
  includeMenu = true,
  buttonColor = primaryColor,
  extraButtons = [],
  excludeButtons = [],
  externalContext
}) => {
  const {wallet} = externalContext?.wallet || useWallet_default();
  const [showMenu, setShowMenu] = (0, import_react37.useState)(false);
  (0, import_react38.useEffect)(() => {
    if (!wallet) {
      setShowMenu(false);
    }
  }, [wallet]);
  const onMouseEnter = (0, import_react37.useCallback)(() => {
    if (!wallet)
      return;
    setShowMenu(true);
  }, [wallet]);
  const onMouseLeave = (0, import_react37.useCallback)(() => {
    if (!wallet)
      return;
    setShowMenu(false);
  }, [wallet]);
  return /* @__PURE__ */ import_react37.default.createElement("div", {
    style: container(),
    onMouseEnter,
    onMouseLeave
  }, /* @__PURE__ */ import_react37.default.createElement("div", {
    style: primary()
  }, /* @__PURE__ */ import_react37.default.createElement("div", null, /* @__PURE__ */ import_react37.default.createElement(Sui_default, {
    color: "#222532",
    width: 12
  })), wallet ? /* @__PURE__ */ import_react37.default.createElement(import_react37.default.Fragment, null, /* @__PURE__ */ import_react37.default.createElement("div", {
    style: sui()
  }, formatBalance(wallet.contents?.suiBalance), " ", "Sui"), /* @__PURE__ */ import_react37.default.createElement("div", {
    style: address()
  }, wallet.icon && /* @__PURE__ */ import_react37.default.createElement("img", {
    style: walletIcon(),
    src: wallet.icon
  }), truncateMiddle_default(wallet.address))) : /* @__PURE__ */ import_react37.default.createElement(SignInButton_default, {
    style: signIn(),
    externalContext
  })), includeMenu && showMenu && /* @__PURE__ */ import_react37.default.createElement("div", {
    style: menu()
  }, !excludeButtons.includes(AddressWidgetButtons.CopyWalletAddress) && /* @__PURE__ */ import_react37.default.createElement(CopyWalletAddressButton_default, {
    externalContext,
    hoverBackgroundColor: buttonColor
  }), !excludeButtons.includes(AddressWidgetButtons.WalletExplorer) && /* @__PURE__ */ import_react37.default.createElement(WalletExplorerButton_default, {
    hoverBackgroundColor: buttonColor
  }), extraButtons, !excludeButtons.includes(AddressWidgetButtons.Logout) && /* @__PURE__ */ import_react37.default.createElement(LogoutButton_default, {
    externalContext,
    hoverBackgroundColor: buttonColor
  })));
};
var AddressWidget_default = AddressWidget;
var container = () => ({
  position: "relative",
  backgroundColor: "white",
  padding: "6px 12px 6px 18px",
  boxShadow: "1px 1px 3px 1px #dfdfe0",
  borderRadius: "18px",
  fontSize: "14px",
  color: "black"
});
var primary = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px"
});
var sui = () => ({
  whiteSpace: "nowrap"
});
var address = () => ({
  borderRadius: "30px",
  backgroundColor: "#f2f1f0",
  padding: "6px 12px",
  display: "flex",
  alignItems: "center",
  gap: "6px"
});
var menu = () => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  padding: "12px 18px",
  position: "absolute",
  bottom: 0,
  left: "12px",
  right: "12px",
  transform: "translateY(100%)",
  boxShadow: "1px 1px 3px 1px #dfdfe0",
  borderBottomLeftRadius: "18px",
  borderBottomRightRadius: "18px",
  backgroundColor: "white",
  zIndex: "99"
});
var signIn = () => ({
  padding: "0 12px 0 0",
  background: "none",
  whiteSpace: "nowrap"
});
var walletIcon = () => ({
  width: "20px",
  height: "20px"
});

// src/lib/logout.ts
var logout = async (signer, fromWallet = false) => {
  log_default("logout", `-- Wallet ${fromWallet} --`, `-- Is Extension: ${signer?.type} --`, `-- Disconnect: ${!!signer?.disconnect} --`, "signer", signer);
  if (signer.type === "extension" || !fromWallet) {
    await signer.disconnect();
  } else {
    await signer.logout();
  }
};
var logout_default = logout;

// src/lib/preapprove.ts
var preapprove = async ({signer, preapproval}) => {
  return signer.requestPreapproval(preapproval);
};
var preapprove_default = preapprove;

// src/lib/sign.ts
var sign = async ({signer, message}) => {
  return signer.sign({message});
};
var sign_default = sign;

// src/lib/transact.ts
var transact = async ({
  signer,
  transactionInput
}) => {
  log_default("transact", "Starting transaction", signer, transactionInput);
  return signer.signAndExecuteTransactionBlock(transactionInput);
};
var transact_default = transact;

// src/lib/signTransactionBlock.ts
var signTransactionBlock = async ({
  signer,
  transactionInput
}) => {
  log_default("transact", "Starting transaction", signer, transactionInput);
  return signer.signTransactionBlock(transactionInput);
};
var signTransactionBlock_default = signTransactionBlock;

// src/lib/executeTransactionBlock.ts
var executeTransactionBlock = async ({
  signer,
  transactionInput
}) => {
  log_default("transact", "Starting transaction", signer, transactionInput);
  return signer.executeTransactionBlock(transactionInput);
};
var executeTransactionBlock_default = executeTransactionBlock;

// src/lib/checkForAssetType.ts
var checkForAssetType = async ({signer, wallet, type: type2, cursor, options, filter}) => {
  let owner;
  if (wallet) {
    owner = wallet.address;
  } else if (signer) {
    owner = signer.currentAccount?.address;
  }
  if (!owner)
    return;
  const provider = (signer ?? wallet)?.provider;
  if (!provider)
    return;
  const assets = await provider.getOwnedObjects({
    owner,
    filter: filter ?? {
      StructType: type2
    },
    options: options ?? {
      showContent: true,
      showDisplay: true
    },
    cursor
  });
  return assets;
};
var checkForAssetType_default = checkForAssetType;

// src/lib/hideWallet.ts
var hideWallet = (signer) => {
  if (signer.type === SignerType.Extension)
    return;
  getIframe_default(false);
};
var hideWallet_default = hideWallet;

// src/lib/showWallet.ts
var showWallet = (signer) => {
  if (signer.type === SignerType.Extension)
    return;
  getIframe_default(true);
};
var showWallet_default = showWallet;

// src/lib/dripSui.ts
var dripSui = async ({address: address2, network, faucet}) => {
  const connection = new Connection({fullnode: network ?? DEFAULT_NETWORK, faucet: `${faucet ?? DEFAULT_FAUCET}gas`});
  const provider = new JsonRpcProvider(connection);
  return provider.requestSuiFromFaucet(address2);
};
var dripSui_default = dripSui;

// src/lib/nameService.ts
var import_lodash3 = __toModule(require_lodash());
var PACKAGE_ADDRESS = "0xe7ed73e4c2c1b38729155bf5c44dc4496a9edd2f";
var REGISTRY_ADDRESS = "0xa378adb13792599e8eb8c7e4f2e938863921e4f4";
var SENDER = "0x0000000000000000000000000000000000000002";
var DEV_INSPECT_RESULT_PATH_0 = "results.Ok[0][1].returnValues[0][0]";
var DEV_INSPECT_RESULT_PATH_1 = "results.Ok[0][1].returnValues[1][0]";
var toHexString = (byteArray) => byteArray?.length > 0 ? Array.from(byteArray, (byte) => ("0" + (byte & 255).toString(16)).slice(-2)).join("") : "";
var toString = (byteArray) => byteArray?.length > 0 ? new TextDecoder().decode(Buffer.from(byteArray.slice(1)).buffer) : "";
var trimAddress = (address2) => String(address2?.match(/0x0{0,}([\w\d]+)/)?.[1]);
var toFullAddress = (trimmedAddress) => trimmedAddress ? `0x${trimmedAddress.padStart(40, "0")}` : "";
var getSuiName = async (address2, network, sender = SENDER) => {
  const connection = new Connection({fullnode: network || DEFAULT_NETWORK});
  const suiProvider = new JsonRpcProvider(connection);
  try {
    const registryTx = new TransactionBlock();
    registryTx.add(TransactionBlock.Transactions.MoveCall({
      target: `${PACKAGE_ADDRESS}::base_registry::get_record_by_key`,
      arguments: [
        registryTx.object(REGISTRY_ADDRESS),
        registryTx.pure(`${trimAddress(address2)}.addr.reverse`)
      ]
    }));
    const resolverBytes = import_lodash3.default.get(await suiProvider.devInspectTransactionBlock({
      transactionBlock: registryTx,
      sender
    }), DEV_INSPECT_RESULT_PATH_1);
    if (!resolverBytes)
      return address2;
    const resolver = toFullAddress(toHexString(resolverBytes));
    const resolverTx = new TransactionBlock();
    resolverTx.add(TransactionBlock.Transactions.MoveCall({
      target: `${PACKAGE_ADDRESS}::resolver::name`,
      arguments: [
        registryTx.object(resolver),
        registryTx.pure(address2)
      ]
    }));
    const resolverResponse = await suiProvider.devInspectTransactionBlock({
      transactionBlock: resolverTx,
      sender
    });
    const nameByteArray = import_lodash3.default.get(resolverResponse, DEV_INSPECT_RESULT_PATH_0);
    if (!nameByteArray)
      return address2;
    const name = toString(nameByteArray);
    return name;
  } catch (e) {
    console.log("Error retreiving SuiNS Name", e);
    return address2;
  }
};
var getSuiAddress = async (domain, network, sender = SENDER) => {
  const connection = new Connection({fullnode: network || DEFAULT_NETWORK});
  const suiProvider = new JsonRpcProvider(connection);
  try {
    const registryTx = new TransactionBlock();
    registryTx.add(TransactionBlock.Transactions.MoveCall({
      target: `${PACKAGE_ADDRESS}::base_registry::get_record_by_key`,
      arguments: [
        registryTx.object(REGISTRY_ADDRESS),
        registryTx.pure(domain)
      ]
    }));
    const resolverResponse = await suiProvider.devInspectTransactionBlock({
      transactionBlock: registryTx,
      sender
    });
    const resolverBytes = import_lodash3.default.get(resolverResponse, DEV_INSPECT_RESULT_PATH_1);
    if (!resolverBytes)
      return domain;
    const resolver = toFullAddress(toHexString(resolverBytes));
    const resolverTx = new TransactionBlock();
    resolverTx.add(TransactionBlock.Transactions.MoveCall({
      target: `${PACKAGE_ADDRESS}::resolver::addr`,
      arguments: [
        registryTx.object(resolver),
        registryTx.pure(domain)
      ]
    }));
    const resolverResponse2 = await suiProvider.devInspectTransactionBlock({
      transactionBlock: resolverTx,
      sender
    });
    const addr = import_lodash3.default.get(resolverResponse2, DEV_INSPECT_RESULT_PATH_0);
    if (!addr)
      return domain;
    return toFullAddress(toHexString(addr));
  } catch (e) {
    console.log("Error retrieving address from SuiNS name", e);
    return domain;
  }
};

// src/hooks/useProviderAndSigner.ts
var import_react39 = __toModule(require("react"));
var useProviderAndSigner = () => {
  const {providerAndSigner} = (0, import_react39.useContext)(ConnectContext_default);
  return providerAndSigner || {provider: null, signer: null};
};
var useProviderAndSigner_default = useProviderAndSigner;

// src/hooks/useAddress.ts
var useAddress = () => {
  const {signer} = useProviderAndSigner_default();
  return signer?.currentAccount?.address;
};
var useAddress_default = useAddress;

// src/hooks/useContents.ts
var import_react40 = __toModule(require("react"));
var useContents = () => {
  const contents = (0, import_react40.useContext)(ConnectContext_default).wallet?.wallet?.contents;
  return contents;
};
var useContents_default = useContents;

// src/components/DetachedEthosConnectProvider.tsx
var import_react41 = __toModule(require("react"));
var DetachedEthosConnectProvider = ({context, connectMessage, dappName, dappIcon, children}) => {
  return /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, children, /* @__PURE__ */ import_react41.default.createElement(SignInModal_default, {
    isOpen: context.modal.isModalOpen,
    hideEmailSignIn: context.ethosConfiguration?.hideEmailSignIn || false,
    hideWalletSignIn: context.ethosConfiguration?.hideWalletSignIn || false,
    connectMessage,
    dappName,
    dappIcon,
    externalContext: context
  }));
};
var DetachedEthosConnectProvider_default = DetachedEthosConnectProvider;

// src/index.ts
var components = {
  AddressWidget: AddressWidget_default,
  MenuButton: MenuButton_default,
  headless: {
    HoverColorButton: HoverColorButton_default
  }
};
var enums = {
  AddressWidgetButtons
};
var ethos = {
  login: login_default,
  logout: logout_default,
  sign: sign_default,
  transact: transact_default,
  signTransactionBlock: signTransactionBlock_default,
  executeTransactionBlock: executeTransactionBlock_default,
  preapprove: preapprove_default,
  showWallet: showWallet_default,
  hideWallet: hideWallet_default,
  showSignInModal,
  hideSignInModal,
  useProviderAndSigner: useProviderAndSigner_default,
  useAddress: useAddress_default,
  useContents: useContents_default,
  useWallet: useWallet_default,
  useContext: useContext_default,
  getWalletContents: getWalletContents_default,
  checkForAssetType: checkForAssetType_default,
  dripSui: dripSui_default,
  getSuiName,
  getSuiAddress,
  formatBalance,
  truncateMiddle: truncateMiddle_default,
  ipfsConversion,
  components,
  enums
};
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */
/*! store2 - v2.14.2 - 2022-07-18
* Copyright (c) 2022 Nathan Bubna; Licensed (MIT OR GPL-3.0) */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
