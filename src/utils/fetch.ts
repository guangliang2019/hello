import axios from "axios";

/**
 * @param text 询问机器人的文本
 * @returns 返回询问事件的 Promise
 */
export const fetchQuestion = async (text: string): Promise<string> =>
  axios.get(`http://47.105.187.18:5005/robot?text=${text}`)

