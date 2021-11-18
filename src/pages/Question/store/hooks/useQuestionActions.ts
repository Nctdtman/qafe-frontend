import { ComponentProps, useState } from 'react'
import { Checkbox, Radio } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'

type Func<T> = T extends any ? (args: T) => void : never
type FuncIntersection<T> = Func<T> extends (arg: infer T) => any ? T : never

type SelectType = string | CheckboxValueType[]

export default function (isMultiple: boolean) {
  const [select, setSelect] = useState<SelectType>()

  const Option = isMultiple ? Checkbox : Radio

  const handleChange: FuncIntersection<
    NonNullable<ComponentProps<typeof Option.Group>['onChange']>
  > = value => {
    let vals: SelectType
    if (!Array.isArray(value)) {
      vals = value.target.value as string
    } else {
      vals = value
    }
    setSelect(vals)
  }

  const handleCommit: () => void = () => {
    console.log(select)
  }

  return { Option, select, handleChange, handleCommit }
}
