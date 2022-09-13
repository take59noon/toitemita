// 外部TeXファイルを読み込む。
document.addEventListener('DOMContentLoaded', function() {
  // あらかじめ、外部ファイルにて変数Mytexfilesを設定しておくこと
  var mto = Mytexfiles;
  const num_start = mto.num_start;
  const num_end = mto.num_end;
  const tex_root_url = mto.tex_root_url;

  for (let idx = num_start; idx < num_end + 1; idx++) {
    var idx_str = ('000' + idx).slice(-3);
    var md_id = '#' + mto.mondai.baseid + '-' + idx_str;
    var kt_id = '#' + mto.kaitou.baseid + '-' + idx_str;
    var ks_id = '#' + mto.kaisetu.baseid + '-' + idx_str;
    
    var md_url = tex_root_url + mto.mondai.src_baseurl + '/' + mto.mondai.basefilename + '-' + idx_str + '.' + mto.file_ext;
    var kt_url = tex_root_url + mto.kaitou.src_baseurl + '/' + mto.kaitou.basefilename + '-' + idx_str + '.' + mto.file_ext;
    var ks_url = tex_root_url + mto.kaisetu.src_baseurl + '/' + mto.kaisetu.basefilename + '-' + idx_str + '.' + mto.file_ext;

    // Inputs
    var inputs = [
      {id: md_id, url: md_url},
      {id: kt_id, url: kt_url},
      {id: ks_id, url: ks_url},
    ];    

    for (let idx = 0; idx < inputs.length; idx++) {
      let target_id = inputs[idx].id;
      let target_url = inputs[idx].url;
  
      $(target_id).load(target_url, function(data, status) {
        if (status == 'success') {
          // console.log('A TeX file has been read successfully. (id: ' + target_id + ')');
          // Renderの指示
          if (typeof MathJax.texReset == 'function') {
            MathJax.texReset();
            window.MathJax.typesetPromise([document.querySelector(target_id)]);
            // Promiseを使って明示的にレンダリングの予約をしておきたいが、
            // 「is not function」のエラーが発生してしまい、それを解消できない。  
            // -> 非同期でload処理を行っているので、load完了時にMathjax読み込み済みである場合とそうでない場合がある。
            //    Mathjax読み込み前にload完了 -> typeset関数が存在しないのでエラー発生となるが、
            //                                  Mathjax読み込み完了時にレンダリングされるので表示に影響なし。
            //    Mathjax読み込み後にload完了 -> typeset関数が存在するのでエラー発生なし。
            //                                  typesetPromiseで予約して、typesetしてやる必要あり。
          }
        }
        else if (status == 'error') {
          console.log('Failed to read a TeX file. (id: ' + target_id + ')');
          $(target_id).html('Failed to read the file. (id: ' + target_id + ')');
        }
        else {
          console.log('Unexpected result occurred. (id: ' + target_id + ')');
        }
      });
    }
  }

  // Render 
  if (typeof MathJax.typeset == 'function') {
    window.MathJax.typeset;
    // typesetPromiseで予約できた分について、明示的にレンダリングを実行する。
    // 予約していない分については、MathJax.jsよりも先に読み込むことができているので、
    // MathJax.jsの読み込み完了後の全体レンダリングによってレンダリングされる。
  }
});