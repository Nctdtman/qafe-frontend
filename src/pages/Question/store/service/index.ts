import type { IQuestion } from '..'

const delay = (ms = 100) => new Promise(rs => setTimeout(rs, ms))

// 获取特定问题详情
export async function getQuestion(id: string): Promise<IQuestion> {
  await delay()
  return {
    title: `第${id}个问题`,
    options: ['一', '二', '三', '四'].map(v => v + id),
    isMultiple: false,
  }
}

// 获取问题详情列表
export async function getQuestionList(): Promise<IQuestion[]> {
  return Array.from({ length: 20 }, (_, i) => {
    return {
      title: `第${i}个问题`,
      options: ['一', '二', '三', '四'].map(v => v + i),
      isMultiple: i % 2 === 0,
    }
  })
}

// 提交单选
async function commitQuestionAnswer(answer: string) {
  console.log('单选')
  return { success: true, message: answer }
}

// 提交多选
async function commitQuestionAnswers(answer: string[]) {
  console.log('多选')
  return { success: true, message: answer }
}

// 提交分发
export async function commitAnswer(answer: string | string[]) {
  await delay(500)
  if (Array.isArray(answer)) {
    return commitQuestionAnswers(answer)
  } else {
    return commitQuestionAnswer(answer)
  }
}
