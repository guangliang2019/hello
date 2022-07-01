import axios from "axios";

/**
 *
 * @param text 询问机器人的文本
 * @returns 机器人回答的文本
 */
export const fetchQuestion = (text: string): any => {
  const url = `47.105.187.18:5005/robot?text=${text}`

  //fetch(`47.105.187.18:5005/robot?text=${text}`).then(res => console.log(res))
  //axios.get(`47.105.187.18:5005/robot?text=${text}`).then(res => console.log(res))

  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    console.log(httpRequest.readyState);
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.response);
        const data = JSON.parse(httpRequest.response);
        console.log(data);
      }
    }
  }

  httpRequest.open('GET', url, true);
  //httpRequest.setRequestHeader("Content-Type", "application/json");
}
