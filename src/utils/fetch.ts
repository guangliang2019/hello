import axios from "axios";

/**
 *
 * @param text 询问机器人的文本
 * @returns 机器人回答的文本
 */
export const fetchQuestion = (text: string): any => {
  //let ans;
  axios.get(`47.105.187.18:5005/robot?text=${text}`).then(res => console.log(res))
  //return ans
}
