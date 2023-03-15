const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between px-12 text-md font-medium text-slate-600 items-center pb-6 absolute bottom-0 w-full">
      <div className="flex flex-row">
        <div className="mx-4 cursor-pointer">LINKEDIN</div>
        <div className="mx-4 cursor-pointer">TWITTER</div>
        <div className="mx-4 cursor-pointer">GITHUB</div>
      </div>
      <div>@{year}</div>
    </footer>
  );
};

export default Footer;
