function Test() {
    // num : state(컴포넌트가 스스로 관리하는 형태) , setNum : setter(state를 변경시키는 역할)
    // useState : hook(num값을 React가 저장하고 hook은 그 저장된 값을 빼오는 역할), num 초기값 설정 역할.
  const [num, setNum] = useState(1);
  const double = num * 2;

  // double값은 저 상태로 사용자 화면에 보임.
  return (
    <button onClick={() => setNum(num + 1)}>
      {double}
    </button>
  );
}