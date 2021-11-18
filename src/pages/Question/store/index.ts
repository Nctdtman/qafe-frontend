import { atom, selector } from 'recoil'
import { getQuestion, getQuestionList } from './service'

export interface IQuestion {
  title: string
  options: string[]
  isMultiple: boolean
}

export const questionListState = atom<IQuestion[]>({
  key: 'QuestionListState',
  default: [],
})

export const currentQuestionIdState = atom({
  key: 'CurrentUserID',
  default: '1',
})

export const currentQuestionState = selector({
  key: 'CurrentQuestionState',
  async get({ get }) {
    return await getQuestion(get(currentQuestionIdState))
  },
})
