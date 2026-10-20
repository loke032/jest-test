import { test, expect } from "@jest/globals";
import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from "../src/something.js";



test("capitalizes l", ()=>{
    expect(capitalize("loke")).toBe("Loke")
})

test("Reverse the String", ()=>{
    expect(reverse("loke")).toBe("ekol")
})

test("add 2 + 3", ()=>{
    expect(calculator.add(2, 3)).toBe(5)
})

test("caeserCipher", ()=>{
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test("Array analysis", ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
  average: 4,
  min: 1,
  max: 8,
  length: 6
})
})