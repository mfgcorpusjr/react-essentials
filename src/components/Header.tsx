import reactImg from "@/assets/images/react.png";

const descriptions = ["Fundamental", "Crucial", "Core"];

const generateRandomNumber = (max: number) =>
  Math.floor(Math.random() * (max + 1));

export default function Header() {
  return (
    <header>
      <img src={reactImg} className="w-40 mx-auto" />

      <h1 className="mb-4 text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-shadow-sm">
        React Essentials
      </h1>
      <h3 className="text-lg text-center text-purple-500">
        {descriptions[generateRandomNumber(2)]} React concepts you will need for
        almost any app you are going to build!
      </h3>
    </header>
  );
}
