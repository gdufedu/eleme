/*
 * @Author: ZhaoQiaoLi
 * @Date: 2021-06-28 15:23:54
 * @LastEditTime: 2021/06/28 18:35
 * @LastEditors: ZhaoQiaoLi
 * @FilePath: \sell\src\common\js\util.js
 * @Description: ''
 */
export function urlParse() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if(arr) {
        arr.forEach((item) =>{
           let tempArr = item.substring(1).split('=');
           let key = decodeURIComponent(tempArr[0]);
           let val = decodeURIComponent(tempArr[1]);
           obj[key] = val;
        });
    }
    return obj;
};