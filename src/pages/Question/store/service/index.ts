import type { IQuestion } from '..'

const delay = () => new Promise(rs => setTimeout(rs, 100))

export async function getQuestion(id: string): Promise<IQuestion> {
  await delay()
  return {
    title: `第${id}个问题`,
    options: ['一', '二', '三', '四'],
    isMultiple: false,
  }
}
export async function getQuestionList(): Promise<IQuestion[]> {
  return Array.from({ length: 20 }, (_, i) => {
    return {
      title: `第${i}个问题`,
      options: ['一', '二', '三', '四'],
      isMultiple: i % 2 === 0,
    }
  })
}
