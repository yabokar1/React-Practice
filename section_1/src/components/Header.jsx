import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header className="text-center my-12">
      <img
        className=" inline-block h-30 w-40 object-contain"
        src={reactImg}
        alt="Stylized atom"
      />
      <h1 className="font-roboto-condensed text-8xl font-bold bg-gradient-to-br from-[#ea00ff] to-[#03d5ff] text-transparent bg-clip-text">
        React Essentials
      </h1>
      <p className="font-roboto-condensed text-xl text-[#8964b0] mt-6 ">
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
