window.Mytexfiles = {
  num_start: 22,
  num_end: 36,
  file_ext: 'tex',
  tex_root_url: '/su-standard-12/chap1-2',
  mondai: {baseid: 'tex-mondai', src_baseurl:'/tex/mondai', basefilename: 'md', },
  // src_baseurlの末尾に「/」不要
  kaitou: {baseid: 'tex-kaitou', src_baseurl:'/tex/kaitou', basefilename: 'kt'},
  kaisetu: {baseid: 'tex-kaisetu', src_baseurl:'/tex/kaisetu', basefilename: 'ks'}
};

// // 設定例
// window.Mytexfiles = {
//   num_start: '14',
//   num_end: '18',
//   src_baseurl: '/tex/kaisetu/',  // 末尾に「/」必要
//   file_ext: 'tex',
//   mondai: {baseid: 'tex-mondai', basefilename: 'md', },
//   kaitou: {baseid: 'tex-kaitou', basefilename: 'kt'},
//   kaisetu: {baseid: 'tex-kaisetu', basefilename: 'ks'}
// };

// 上記の設定により、例えば
//   {id: '#tex-mondai-014', url: '/tex/mondai/md-014.tex'},
// から
//   {id: '#tex-mondai-018', url: '/tex/mondai/md-018.tex'},
// までの問題ファイルが読み込まれるようになる。
