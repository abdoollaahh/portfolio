const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <footer className="text-md absolute bottom-0 flex w-full flex-col items-center justify-between px-12 pb-6 font-medium text-slate-600 dark:text-[rgb(230,230,230)] md:flex-row">
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
