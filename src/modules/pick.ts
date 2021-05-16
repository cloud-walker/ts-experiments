type PickerKey = string | number | symbol
type UObject = Record<string, unknown>

type PickReturn<O extends UObject, K extends PickerKey> = Pick<
  O,
  Exclude<keyof O, Exclude<keyof O, K>>
>

type PickerFunction<K extends PickerKey> = <O extends UObject>(
  obj: O,
) => PickReturn<O, K>

export function pick<K extends PickerKey, O extends UObject>(
  names: ReadonlyArray<K>,
  obj: O,
): PickReturn<O, K>
export function pick<K extends PickerKey>(
  names: ReadonlyArray<K>,
): PickerFunction<K>

export function pick(names: ReadonlyArray<unknown>, obj?: UObject) {
  const picker = (obj: UObject) =>
    Object.keys(obj).reduce((acc, key) => {
      if (names.includes(key)) {
        return {...acc, [key]: obj[key]}
      }

      return acc
    }, {})

  return obj == null ? picker : picker(obj)
}

const subject = {foo: 1, bar: 2, baz: 3} as const

const a = pick(['zzz'], {foo: 1, bar: 2, baz: 3})

const fooPicker = pick(['foo'])

const b = fooPicker(subject)

type Foo = Pick<typeof subject, 'foo'>
