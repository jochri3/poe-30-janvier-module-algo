import { add } from '../math'

test.each`
  a    | b    | expectedOutput
  ${1} | ${2} | ${3}
  ${2} | ${3} | ${5}
  ${3} | ${4} | ${7}
`('adds $a + $b = $expectedOutput', ({ a, b, expectedOutput }) => {
  expect(add(a, b)).toBe(expectedOutput)
})
