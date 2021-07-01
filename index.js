const axios = require("axios");

axios.defaults.headers.common["User-Agent"] =
  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36";
axios.defaults.headers.common["Referer"] =
  "https://hichannel.hinet.net/radio/index.do";

const getStreamUrl = async () => {
  let channelId = process.env.CHANNEL_ID ? process.env.CHANNEL_ID : null;
  if (!channelId) {
    const { data } = await axios.get(
      `https://hichannel.hinet.net/radio/channelList.do?keyword=${encodeURIComponent(
        process.env.CHANNEL_NAME
      )}`
    );
    if (data["list"].length > 0) {
      channelId = data["list"][0]["channel_id"];
    }
  }
  if (channelId) {
    const { data } = await axios.get(
      `https://hichannel.hinet.net/radio/cp.do?id=${channelId}`
    );
    console.log(data['_adc'])
  }
};
getStreamUrl();
