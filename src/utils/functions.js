import axios from 'axios'
import * as moment from 'moment-timezone'

export const setAuthorizationToken = token =>{
  if(token){
      axios.defaults.headers.common['Authorization'] = 'Bearer '+token
  }else{
    delete axios.defaults.headers.common['Authorization']
  }
}

export const formatNumber = (number, decimals, dec_point, thousands_sep) =>{

  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
      };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);

}

export const renderImage = url => {

  let promise = new Promise((resolved,rejected) => {

    var xhr = new XMLHttpRequest();
    xhr.onload = async function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        resolved(reader.result)
      }

      reader.readAsDataURL(xhr.response);
    };

    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  })

  return promise
}

export const readerImg = file => {
  return new Promise((resolve,reject) => {

      let reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
  })
}

export const showPriceWithDecimals = (config,price) => {
  if(config){
    if(config.active_price_decimals === "Desactivado" || config.active_price_decimals === undefined){
      return parseFloat(formatNumber(price,0,'',''))
    }else{
      return formatNumber(price,2,',','.')
    }
  }else{
    return formatNumber(price,2,',','.')
  }
}


export const s2ab = s =>{
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}
export const calculateDifferenceDaysBetweenDates  = (date1,date2,type = "days") => {

  let diff = date1.diff(date2,type)
  return  diff

}
