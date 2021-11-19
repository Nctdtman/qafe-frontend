import { ComponentProps, useEffect, useState } from 'react'
import { Checkbox, message, Radio } from 'antd'
import { commitAnswer } from '../service'
import { useRequest } from 'ahooks'

import { SelectType } from '../../Components/Question'

type Func<T> = T extends any ? (args: T) => void : never
type FuncIntersection<T> = Func<T> extends (arg: infer T) => any ? T : never

export default function (
  initialSelect: SelectType,
  isMultiple: boolean,
  afterCommit: () => void,
) {
  const [select, setSelect] = useState<SelectType>(initialSelect)
  useEffect(() => {
    setSelect(initialSelect)
  }, [initialSelect.toString()])

  const { run, loading, error } = useRequest(commitAnswer, {
    manual: true,
    onError() {
      message.error('答案提交失败')
    },
    onSuccess(data) {
      message.success('答案提交成功' + data.message)
      afterCommit()
    },
  })

  const Option = isMultiple ? Checkbox : Radio

  const handleChange: FuncIntersection<
    NonNullable<ComponentProps<typeof Option.Group>['onChange']>
  > = value => {
    let vals: SelectType
    if (!Array.isArray(value)) {
      vals = value.target.value as string
    } else {
      vals = value.map(String)
    }
    setSelect(vals)
  }

  const handleCommit = () => {
    console.log(select)
    if (!select || !select.length) {
      message.error('选择不能为空')
      return
    }

    run(select)
  }

  return { Option, select, handleChange, handleCommit, loading, error }
}
