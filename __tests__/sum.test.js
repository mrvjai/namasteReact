import { sum } from "../src/sum";

test("sample test of add",()=>{
    const res=sum(3,3);
    expect(res).toBe(6)
})