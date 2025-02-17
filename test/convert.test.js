const { JSDOM } = require('jsdom');

// 模拟浏览器环境
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'https://m.thepaper.cn',
});
global.window = dom.window;
global.navigator = dom.window.navigator;
global.location = dom.window.location;
global.URL = dom.window.URL;
global.__M2PC_DEV_MODE__ = true;

describe('URL转换测试', () => {
  const main = require('../index');
  const convertLink = main(true);

  test('虎嗅网链接转换', () => {
    expect(convertLink('https://m.huxiu.com/article/4027495.html')).toBe(
      'https://www.huxiu.com/article/4027495.html'
    );
  });

  test('澎湃新闻普通链接转换', () => {
    expect(convertLink('https://m.thepaper.cn/newsDetail_forward_21812307')).toBe(
      'https://www.thepaper.cn/newsDetail_forward_21812307'
    );
  });

  test('澎湃新闻快报链接转换', () => {
    expect(convertLink('https://m.thepaper.cn/kuaibao_detail.jsp?contid=21812307&from=kuaibao')).toBe(
      'https://www.thepaper.cn/newsDetail_forward_21812307?contid=21812307&from=kuaibao'
    );
  });

});
