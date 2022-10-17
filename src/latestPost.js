module.exports = [
  {
    title: '移动端文字垂直居中',
    description: '有过移动端开发经验的人，想必都对文字垂直居中头痛不已，\
因为使用常规手段实现文字垂直居中在部分 Android 手机上会出现文字偏上的情况，\
往往需要配合 `line-height` 或者 `padding` 进行微调，苦不堪言。',
    author: '熊滔',
    time: '2022-10-17',
    link: '/blog/mobile-text-middle',
    image: '/img/latest_posts/pikaqiu.jpg'
  },
  {
    title: 'MutationObserver',
    description: '在复杂的网页应用中，DOM 结构会频繁的发生变化，有的时候我们需要根据变化来进行相应的操作，\
以往通过 Mutation Events 来监听 DOM 的变化，目前它已经废弃了，被 MutationObserver 所取代。\
MutationObserver 的兼容性很好，可以放心大胆的使用。',
    auhor: '熊滔',
    time: '2022-10-11',
    link: '/blog/MutationObserver',
    image: '/img/latest_posts/mutation-observer.jpg'
  },
  {
    title: 'IntersectionObserver',
    description: '如果我们需要监听某个元素是否出现在视口中，一般做法是监听 scroll 事件，\
然后查询元素离视口顶部的距离，但是监听 scroll 事件存在性能问题。\
浏览器原生提供了 IntersectionObserver 监听器，可以监听某个元素是否出现在视口中。',
    auhor: '熊滔',
    time: '2022-09-28',
    link: '/blog/IntersectionObserver',
    image: '/img/latest_posts/intersection-observer.jpg'
  },
  {
    title: 'Selection与Range',
    description: 'Selection 对象表示用户选择的文本范围或插入符号的当前位置。它代表页面中的文本选区，可能横跨多个元素。通常由用户拖拽鼠标经过文字而产生。\
Range对象表示包含节点和部分文本节点的文档片段。通过 selection 对象获得的 range 对象才是我们操作光标的重点。',
    author: '熊滔',
    time: '2022-09-23',
    link: '/blog/selection-and-range',
    image: 'https://cdn.staticaly.com/gh/LastKnightCoder/ImgHosting3@master/wallhaven-8opwwy.3cbn7rc981c0.webp'
  },
  {
    title: 'CSS动画取代定时器',
    description: '神来之笔，使用 CSS 动画事件取代定时器',
    author: '熊滔',
    time: '2022-09-15',
    link: '/blog/css-animation-timer',
    image: '/img/latest_posts/css-animation-timer.jpg'
  }
]
