import axios from "axios";

/**
 *
 * @param text 询问机器人的文本
 * @returns 机器人回答的文本
 */
export const fetchQuestion = (text: string): any => {
  const url = `http://47.105.187.18:5005/robot?text=${text}`

  //fetch(`47.105.187.18:5005/robot?text=${text}`).then(res => console.log(res))
  //axios.get(`47.105.187.18:5005/robot?text=${text}`).then(res => console.log(res))

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);  //发送请求
  console.log(xhr.responseText);  //接收数据

}
