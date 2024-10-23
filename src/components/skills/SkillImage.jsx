export default function SkillImage({ imageName, toolTip }) {
  console.log(window.innerWidth);
  return (
    <div className="group relative flex h-[4.5vw] w-[4.5vw] items-center justify-center rounded-full bg-black bg-opacity-15">
      <img src={`./icons/${imageName}`} className="h-[3vw] w-[2.5vw]"></img>
      <div className="3xl:-top-[4vh] absolute -top-[5vh] hidden text-nowrap rounded-2xl bg-[#bdc0c5] px-4 py-2 text-[0.8vw] group-hover:block">
        {toolTip}
        <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#bdc0c5]"></div>
      </div>
    </div>
  );
}
