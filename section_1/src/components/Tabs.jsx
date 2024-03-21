export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu className=" flex flex-row my-4 gap-2 list-none">{buttons}</menu>
      {children}
    </>
  );
}

// export default function Tabs({children, buttons, ButtonsContainer = "menu"}) {
//   return (
//     <>
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   )
// }
