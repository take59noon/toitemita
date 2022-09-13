window.MathJax = {
  loader: {
    load: ['ui/safe', '[tex]/mathtools', '[tex]/physics']
  },
  options: {
    // enableMenu: false,  // set to false to disable the menu
    // http://docs.mathjax.org/en/latest/options/menu.html#menu-options
  },
  chtml: {
    matchFontHeight: false,
    displayAlign: 'left',
    displayIndent: '2em',
    mtextInheritFont: true
  },
  tex: {
    packages: {'[+]': ['mathtools', 'physics']},
    // tags: 'ams',
    // tagSide: 'left',
    // tagformat: {
    //   tag: (n) => '[' + n + ']'
    // },
    macros: {
      myoverline: ['{\\overline{#1\\,}}',1],
      myquad: ['\\:\\:']
    },  
    // environments: {

    // },
    inlineMath: {'[+]': [['$', '$']]},
    // $ ... $ でLaTeXのinline数式を使えるようにする。
    // $の文字自体を出力したい場合は、<span>$</span>とする必要あり。  },
    mathtools: {
      pairedDelimiters: {
        rpln: ['(',')']
      }
    }
  }
};
