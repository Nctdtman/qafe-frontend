import { Spin } from 'antd'
import { FC, Suspense, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSetRecoilState } from 'recoil'
import Question from './Components/Question'
import { currentQuestionIdState } from './store'

const Loading: FC = () => {
  return (
    <div className="w-screen h-screen justify-center items-center">
      <Spin size="large" />
    </div>
  )
}

const QuestionPage: FC = () => {
  const { questionId } = useParams<{ questionId: string }>()
  const setQuestionId = useSetRecoilState(currentQuestionIdState)
  useEffect(() => {
    setQuestionId(questionId)
  }, [questionId])

  return (
    <Suspense fallback={<Loading />}>
      <Question />
    </Suspense>
  )
}

export default QuestionPage
