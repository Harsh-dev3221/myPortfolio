// File: src/components/Navbar.jsx

const LINKS = {
  sourceCode: "#code"
};

const NAV_LINKS = [
  { title: "About me", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" }
];

const SOCIALS = [
  { name: "GitHub", link: "https://github.com/Crimemaster12365" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/harsh-patel-40b043319/" }
];

export const Navbar = () => {
  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between px-[10px]">
        <a href="#about-me" className="flex items-center h-full w-auto">
          {/* <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            Harsh Patel
          </div>
        </a>

        <div className="flex items-center justify-between w-[500px] h-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          {NAV_LINKS.map(({ title, link }) => (
            <a key={title} href={link} className="cursor-pointer hover:text-[rgb(112,66,248)] transition">
              {title}
            </a>
          ))}
          <a href={LINKS.sourceCode} target="_blank" rel="noreferrer noopener" className="cursor-pointer hover:text-[rgb(112,66,248)] transition">
            Source Code
          </a>
        </div>

        <div className="flex gap-5">
          {SOCIALS.map(({ link, name }) => (
            <a href={link} target="_blank" rel="noreferrer noopener" key={name} className="text-gray-200 hover:text-[rgb(112,66,248)] transition">
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
