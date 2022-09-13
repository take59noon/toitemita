// Mathjaxコンテンツのhtml要素を作成する。
document.addEventListener('DOMContentLoaded', function() {
  // あらかじめ、外部ファイルにて変数Mytexfilesを設定しておくこと
  var mto = Mytexfiles;
  const num_start = mto.num_start;
  const num_end = mto.num_end;

  var fragment = document.createDocumentFragment();

  for (let idx = num_start; idx < num_end + 1; idx++) {
    var idx_str = ('000' + idx).slice(-3);
    var md_id = mto.mondai.baseid + '-' + idx_str;
    var kt_id = mto.kaitou.baseid + '-' + idx_str;
    var ks_id = mto.kaisetu.baseid + '-' + idx_str;

    var details_summary = document.createElement('summary');
    details_summary.className = 'mathjax-content-header bg-primary text-white px-3 py-1'; 
    details_summary.innerHTML = '問題 ' + idx_str;
  
    var details_div_md = document.createElement('div');
    details_div_md.className = 'mathjax-content';
    details_div_md.id = md_id;
  
    var details_div_kt_details_summary = document.createElement('summary');
    details_div_kt_details_summary.innerHTML = '解答 ' + idx_str;
    var details_div_kt_details_div = document.createElement('div');
    details_div_kt_details_div.className = 'mathjax-content-k';
    details_div_kt_details_div.id = kt_id;
    var details_div_kt_details = document.createElement('details');
    details_div_kt_details.appendChild(details_div_kt_details_summary);
    details_div_kt_details.appendChild(details_div_kt_details_div);
  
    var details_div_ks_details_summary = document.createElement('summary');
    details_div_ks_details_summary.innerHTML = '解説 ' + idx_str;
    var details_div_ks_details_div = document.createElement('div');
    details_div_ks_details_div.className = 'mathjax-content-k';
    details_div_ks_details_div.id = ks_id;
    var details_div_ks_details = document.createElement('details');
    details_div_ks_details.appendChild(details_div_ks_details_summary);
    details_div_ks_details.appendChild(details_div_ks_details_div);
  
    var details_div = document.createElement('div');
    details_div.className = 'px-3 py-1';
    details_div.appendChild(details_div_md);
    details_div.appendChild(details_div_kt_details);
    details_div.appendChild(details_div_ks_details);
  
    var details = document.createElement('details');
    details.className = 'my-2';
    details.open = true;
    details.appendChild(details_summary);
    details.appendChild(details_div);
  
    var container_mkk = document.createElement('div');
    container_mkk.className = 'row justify-content-md-center container-toitemita-mkk';
    container_mkk.appendChild(details);
  
    fragment.appendChild(container_mkk);
    // console.log(idx_str);
  }

  // 親要素の取得
  var content_main = document.getElementById('mathjax-content-main');
  content_main.appendChild(fragment);

});