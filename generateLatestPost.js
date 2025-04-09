const fs = require("fs")

// 读取 blog 目录下的文章，生成最新文章的 5 条文章列表
// 文件格式 time-title.mdx

const blogDir = "./blog";

const getArticleList = () => {
  const files = fs.readdirSync(blogDir);
  const articleList = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const [year, month, date, title] = file.split("-");
      const time = `${year}-${month}-${date}`;

      return {
        time,
        title: title.replace(".mdx", ""),
      };
    })
    .sort((a, b) => {
      return new Date(b.time) - new Date(a.time);
    })

  return articleList;
}

const articleList = getArticleList();
// 生成 json 文件，放到 src/latestPost.js 中 export default []
// {
//     title: '移动端文字垂直居中',
//         description: '有过移动端开发经验的人，想必都对文字垂直居中头痛不已，\
// 因为使用常规手段实现文字垂直居中在部分 Android 手机上会出现文字偏上的情况，\
// 往往需要配合 `line-height` 或者 `padding` 进行微调，苦不堪言。',
//     author: '熊滔',
//     time: '2022-10-17',
//     link: '/blog/mobile-text-middle',
//     image: '/img/latest_posts/pikaqiu.jpg'
// },

// link 读取文件内容，读取 front-matter 中的 slug，拼接为 /blog/slug
// image 使用 img/1.png ... img/4.png, 第五个是 webp img/5.webp

const latestPost = articleList.slice(0, 5).map((article, index) => {
  const { title, time } = article;
  const image = `/img/latest_posts/${index + 1}.${index === 4 ? 'webp' : 'jpg'}`;
  // 读取文件内容，读取 front-matter 中的 slug，拼接为 /blog/slug
  const fileContent = fs.readFileSync(`${blogDir}/${time}-${title}.mdx`, "utf8");
  const frontMatter = fileContent.match(/---([\s\S]*?)---/)[1];
  const slug = frontMatter.match(/slug:\s*(.*)/)[1];
  const link = `/blog/${slug}`;

  // description 读取 front-matter 后面正文的 100 个字符
  const description = fileContent.split("---")[2].slice(0, 100).trim();

  return {
    title,
    description,
    author: '熊滔',
    time,
    link,
    image,
  };
});

const json = JSON.stringify(latestPost, null, 2);

fs.writeFileSync("./src/latestPost.js", `module.exports = ${json}`);
