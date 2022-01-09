export function getNewsByChannel(channel, page = 1) {
  return new Promise((resolve, reject) => {
    // 一点资讯的资讯接口
    const url = `http://is.snssdk.com/api/news/feed/v51/?page=${page}&category=${channel}`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        if (json.message === 'success') {
          const newsArr = json.data;
          const list = [];
          for (let item of newsArr) {
            const content = item.content;
            const json =  JSON.parse(content);
            list.push(json);
          }
          resolve(list);
        } else {
          throw new Error(json.status);
        }
      })
      .catch(e => {
        reject(e.toString());
      });
  });
}
