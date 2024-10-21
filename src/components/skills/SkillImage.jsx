export default function SkillImage({ imageName, toolTip }) {
  return (
    <div className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-black bg-opacity-15">
      <img src={`./icons/${imageName}`} className="h-12 w-12"></img>
      <div className="absolute -top-12 hidden text-nowrap rounded-2xl bg-[#bdc0c5] px-4 py-2 group-hover:block">
        {toolTip}
        <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#bdc0c5]"></div>
      </div>
    </div>
  );
}
