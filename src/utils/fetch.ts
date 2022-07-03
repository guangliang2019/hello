import axios from "axios";
import { changeTheme } from "./UI";

interface Response {
  data: string;
  [index: string]: object | string
}

/**
 * @param text 询问机器人的文本
 * @returns 返回询问事件的 Promise
 */
export const fetchQuestion = async (text: string): Promise<Response> => {
  switch (text) {
    case '换个主题':
      setTimeout(() => {
        changeTheme()
      }, 1000)
      return Promise.resolve({ data: "这样？" })
    default:
      return axios.get(`http://47.105.187.18:5005/robot?text=${text}`)
  }

}

