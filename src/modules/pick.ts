import {UnknownObject} from './types/UnknownObject'

type PickerKey = string | number | symbol

type PickReturn<O extends UnknownObject, K extends PickerKey> = Pick<
  O,
  Exclude<keyof O, Exclude<keyof O, K>>
>

type PickerFunction<K extends PickerKey> = <O extends UnknownObject>(
  obj: O,
) => PickReturn<O, K>

export function pick<K extends PickerKey, O extends UnknownObject>(
  names: ReadonlyArray<K>,
  obj: O,
): PickReturn<O, K>
export function pick<K extends PickerKey>(
  names: ReadonlyArray<K>,
): PickerFunction<K>

export function pick(names: ReadonlyArray<unknown>, obj?: UnknownObject) {
  const picker = (obj: UnknownObject) =>
    Object.keys(obj).reduce((acc, key) => {
      if (names.includes(key)) {
        return {...acc, [key]: obj[key]}
      }

      return acc
    }, {})

  return obj == null ? picker : picker(obj)
}
