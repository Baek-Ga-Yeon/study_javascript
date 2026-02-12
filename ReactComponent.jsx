import { useState } from "react";

// 컴포넌트는 매번 다시 실행 됌.

function Counter() {
    // num : state(컴포넌트가 스스로 관리하는 형태) , setNum : setter(state를 변경시키는 역할)
    // useState : Hook(React 내장 패키지 안에서 불러온 함수), (num값을 React가 저장하고 Hook은 그 저장된 값을 반환), num 초기값 설정 역할.
    // 초기값은 처음 한번만(렌더링)때 사용 됌.
  const [num, setNum] = useState(1);
  const double = num * 2;

  // double값은 저 상태로 사용자 화면에 보임.
  // 버튼 3번 누르면 num 값은 4-> 6-> 8. 왜냐하면 1은 초기값이고 "버튼 눌렀을 때" 기준이기 때문.(렌더링 고려. 초기값 1 -> 2 -> 3 -> 4)
  return (
    <button onClick={() => setNum(num + 1)}>
      {double}
    </button>
  );
}

// 이름은 뭐든 상관없지만 보통의 경우, 최상위 컴포넌트를 'app' 이라고 함.
export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}