let expressionNow = false

// 操纵眼睛的函数
const changeEye = (action: string, timeout: number, keep = 0) => {
  changeLeftEye(action, timeout, keep);
  changeRightEye(action, timeout, keep);
};
const changeRightEye = (action: string, timeout: number, keep = 0) => {
  const rightEye = document.querySelector(
    '.face-right-eye',
  ) as HTMLDivElement;
  const rightEyeInner = document.querySelector(
    '.face-right-eye-inner',
  ) as HTMLDivElement;
  rightEye.style.transition = `${timeout}ms all`;
  rightEyeInner.style.transition = `${timeout}ms all`;
  rightEye.classList.add(`face-right-eye-${action}`);
  rightEyeInner.classList.add(`face-right-eye-inner-${action}`);
  setTimeout(() => {
    rightEye.classList.remove(`face-right-eye-${action}`);
    rightEyeInner.classList.remove(`face-right-eye-inner-${action}`);
    expressionNow = false
  }, timeout + keep);
};
const changeLeftEye = (action: string, timeout: number, keep = 0) => {

  const leftEye = document.querySelector(
    '.face-left-eye',
  ) as HTMLDivElement;
  const leftEyeInner = document.querySelector(
    '.face-left-eye-inner',
  ) as HTMLDivElement;
  leftEye.style.transition = `${timeout}ms all`;
  leftEyeInner.style.transition = `${timeout}ms all`;
  leftEye.classList.add(`face-left-eye-${action}`);
  leftEyeInner.classList.add(`face-left-eye-inner-${action}`);
  setTimeout(() => {
    leftEye.classList.remove(`face-left-eye-${action}`);
    leftEyeInner.classList.remove(`face-left-eye-inner-${action}`);
    expressionNow = false
  }, timeout + keep);
};

// 操纵表情的函数
export const blink = () => {
  if (expressionNow) return;
  expressionNow = true;
  changeEye('blink', 40)
};
export const wink = () => {
  if (expressionNow) return;
  expressionNow = true;
  changeLeftEye('blink', 100, 400)
};
export const surprise = () => {
  if (expressionNow) return;
  expressionNow = true;
  changeEye('surprise', 400, 3000)
}
export const smile = () => {
  if (expressionNow) return;
  expressionNow = true;
  changeEye('smile', 300, 2000);
  const mouseMask = document.querySelector(
    '.face-mouse-box-mask',
  ) as HTMLDivElement;
  console.log(mouseMask)
  mouseMask.style.transition = `400ms all`;
  mouseMask.style.opacity = '0'
  setTimeout(() => {
    mouseMask.style.opacity = '1'
    expressionNow = false
  }, 2000 + 350)
}

export const doExpressionOfAnswer = (answer: string) => {
  switch (answer) {
    case '你好呀':
      smile()
      break;
    case 'hello':
      smile()
      break;
    case '不客气':
      wink()
      break;
    case '该问题暂时无法回答，我们会记录下该问题然后继续改进':
      surprise()
      break;
    default:
      if (Math.round(Math.random())) {
        smile()
      }
      break;
  }
}
