import { Button, Card, Checkbox, Radio, Space } from 'antd'
import select from 'antd/lib/select'
import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'

import {
  currentQuestionIdState,
  currentQuestionState,
  IQuestion,
  questionListState,
} from '../store'
import useQuestionFunc from '../store/hooks/useQuestionActions'
import { getQuestionList } from '../store/service'

interface QuestionInnerProps {
  question: IQuestion
  afterCommit(): void
}
export type SelectType = string | string[]

const QuestionInner: FC<QuestionInnerProps> = ({ question, afterCommit }) => {
  const initialSelect = question.options[0]
  let initialState: SelectType = question.isMultiple
    ? [initialSelect]
    : initialSelect

  const { Option, select, handleChange, handleCommit, loading, error } =
    useQuestionFunc(initialState, question.isMultiple, afterCommit)
  const history = useHistory()
  const id = useRecoilValue(currentQuestionIdState)
  return (
    <div className="flex flex-col  w-screen h-screen">
      <div className="w-full shadow-md p-4">{question.title}</div>
      <Option.Group
        className="m-4"
        value={select as any}
        onChange={handleChange}>
        <Space className="w-full" direction="vertical">
          {question.options.map(option => (
            <label key={option}>
              <Card bodyStyle={{ padding: 8 }} className="w-full m-2">
                <Option className="mx-1" value={option} />
                {option}
              </Card>
            </label>
          ))}
        </Space>
      </Option.Group>
      <div className="flex justify-center">
        <Button
          className="mx-4"
          type="primary"
          onClick={handleCommit}
          loading={loading}>
          随机下一题
        </Button>
        <Button
          className="mx-4"
          type="primary"
          onClick={() => history.push(`/question/${+id + 1}`)}
          loading={loading}>
          下一题 {+id + 1}
        </Button>
      </div>
    </div>
  )
}
const Question: FC = () => {
  const initialQuestion = useRecoilValue(currentQuestionState)
  const [questionList, setQuestionList] = useRecoilState(questionListState)
  const [questionIdx, setQuestionIdx] = useState(0)
  const question = questionList[questionIdx] || initialQuestion

  useEffect(() => {
    setQuestionList([initialQuestion])
  }, [initialQuestion])

  useEffect(() => {
    ;(async () => {
      if (questionList.length - questionIdx <= 10) {
        const questionList = await getQuestionList()
        setQuestionList(v => {
          return [...v, ...questionList]
        })
      }
    })()
  }, [questionIdx])

  console.log('questionList: ', questionList)
  return (
    <>
      <QuestionInner
        question={question}
        afterCommit={() => {
          setQuestionIdx(v => v + 1)
        }}
      />
    </>
  )
}

export default Question
